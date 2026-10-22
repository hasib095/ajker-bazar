'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const UserPage = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    //console.log(user);

    const handleSignout = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
            return;
        }

        toast.success("সফলভাবে সাইন আউট হয়েছে");
        redirect("/");
    };

    const handleUserUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newUserData = Object.fromEntries(formData.entries());

        const { error } = await authClient.updateUser({
            name: newUserData.name,
        });

        if (error) {
            console.log(error);
            toast.error("আপডেট করা যায়নি। আবার চেষ্টা করুন।",
                {
                    position: "top-center",
                });
            return;
        }

        toast.success("প্রোফাইল আপডেট হয়েছে।",
            {
                position: "top-center",
            });
    };


    return (
        <div className="min-h-screen bg-green-50 px-4 py-8">
            <div className="mx-auto max-w-2xl space-y-5">
                {/* Heading */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">আমার প্রোফাইল</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* User card */}
                <div className="flex flex-col gap-4 rounded-3xl  bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                        {user?.image ? (
                            <div className="avatar">
                                <div className="w-16 rounded-xl">
                                    <Image
                                        src={user.image}
                                        alt="User profile"
                                        width={40}
                                        height={40}
                                        referrerPolicy="no-referrer"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="avatar avatar-placeholder">
                                <div className="w-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-white">
                                    <span className="text-2xl font-bold">
                                        {user?.name?.charAt(0)?.toUpperCase() || "U"}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className="min-w-0">
                            <h2 className="truncate text-lg font-semibold text-gray-800">
                                {user?.name || "User"}
                            </h2>
                            <p className="truncate text-sm text-gray-500">{user?.email}</p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleSignout}
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                    >
                        <span>↩</span> সাইন আউট
                    </button>
                </div>

                {/* Info form card */}
                <div className="rounded-3xl  bg-white p-5 shadow-sm">
                    <h3 className="mb-4 font-semibold text-gray-800">তথ্য</h3>

                    <form className="space-y-4 px-1 pb-2" onSubmit={handleUserUpdate}>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                নাম
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.name}
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-green-700 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-800"
                        >
                            আপডেট
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserPage;