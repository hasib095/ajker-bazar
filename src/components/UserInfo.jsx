'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';



const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
   // console.log(user);

    const handleSignout = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।",
                {
                    position: "top-center",
                });
            return;
        }

        toast.success("সাইন আউট হয়েছে",
                {
                    position: "top-center",
                });
        redirect("/");
    };
    return (
        <div>

            {
                user ? (<div>

                    <div className="flex items-center gap-3">
                        {/* Profile Dropdown */}
                        <div className="dropdown dropdown-end group">
                            {/* Trigger */}
                            <div
                                tabIndex={0}
                                role="button"
                                className="flex cursor-pointer items-center gap-2.5 rounded-3xl shadow-sm border-gray-200/80 bg-white/80 py-1 pl-1 pr-3 shadow-sm backdrop-blur transition-all duration-200 hover:border-green-300 hover:shadow-md focus:border-green-400 focus:ring-4 focus:ring-green-100"
                            >
                                {/* Avatar */}
                                <div className="relative">
                                    <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-white">
                                        {user.image ? (
                                            <Image
                                                src={user.image}
                                                alt="User profile"
                                                width={40}
                                                height={40}
                                                referrerPolicy="no-referrer"
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-500 to-emerald-700 text-base font-bold text-white">
                                                {user.name?.charAt(0)?.toUpperCase() || "U"}
                                            </div>
                                        )}
                                    </div>
                                    {/* Online dot */}
                                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                                </div>

                                {/* Username */}
                                <div className="hidden min-w-0 text-left sm:block">
                                    <p className="max-w-28 truncate text-sm font-semibold leading-tight text-gray-800">
                                        {user.name || "User"}
                                    </p>
                                    {/* <p className="text-[11px] font-medium text-green-700">My Account</p> */}
                                </div>

                                {/* Chevron (rotates when open) */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hidden h-4 w-4 text-gray-400 transition-transform duration-200 group-focus-within:rotate-180 sm:block"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                </svg>
                            </div>

                            {/* Dropdown Menu */}
                            <div
                                tabIndex={0}
                                className="dropdown-content z-50 mt-3 w-72 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-gray-200/70"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-4">
                                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow">
                                        {user.image ? (
                                            <Image
                                                src={user.image}
                                                alt="User profile"
                                                width={40}
                                                height={40}
                                                referrerPolicy="no-referrer"
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-500 to-emerald-700 text-lg font-bold text-white">
                                                {user.name?.charAt(0)?.toUpperCase() || "U"}
                                            </div>
                                        )}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-bold text-gray-800">
                                            {user.name || "User"}
                                        </p>
                                        <p className="truncate text-xs text-gray-500">
                                            {user.email || "No email"}
                                        </p>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="p-2">
                                    <Link
                                        href="/profile"
                                        className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-800"
                                    >
                                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-base transition group-hover/item:bg-green-100">
                                            👤
                                        </span>
                                        <span className="flex-1">My Profile</span>
                                        <span className="text-gray-300 transition group-hover/item:translate-x-0.5 group-hover/item:text-green-600">
                                            →
                                        </span>
                                    </Link>


                                </div>

                                {/* Logout */}
                                <div className="border-t border-gray-100 p-2">
                                    <button
                                        type="button"
                                        onClick={handleSignout}
                                        className="group/item flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 hover:text-red-700"
                                    >
                                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-base transition group-hover/item:bg-red-100">
                                            ↩
                                        </span>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>) : (<div>
                    <Link href={"/signin"}>
                        <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">
                            সাইন ইন
                        </button>
                    </Link>
                    <Link href={"/signup"}>
                        <button className="btn  bg-green-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-red-800">
                            সাইন আপ
                        </button>
                    </Link>
                </div>)
            }


        </div>
    );
};

export default UserInfo;