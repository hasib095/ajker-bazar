"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { Bounce, toast } from 'react-toastify';

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/",
        });

        if (data) {
            toast.success('অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!', {
                position: "top-center",
            });
            redirect("/");
        }

        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <div className="flex min-h-screen flex-col items-center bg-green-50 px-4 py-10">
                {/* Heading */}
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">অ্যাকাউন্ট তৈরি করুন</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
                </div>

                {/* Card */}
                <div className="w-full max-w-md rounded-3xl  bg-white p-6 shadow-sm">
                    <form className="space-y-4 " onSubmit={onSubmit}>
                        {/* Name */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-800">
                                নাম
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="যেমন: রহিম উদ্দিন"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-800">
                                ইমেইল
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-800">
                                পাসওয়ার্ড
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />
                        </div>

                        {/* Confirm password */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-800">
                                পাসওয়ার্ড নিশ্চিত করুন
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="আবার লিখুন"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-green-700 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-800"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-5 flex items-center gap-3">
                        <div className="h-px flex-1 bg-gray-200" />
                        <span className="text-xs text-gray-500">অথবা</span>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    {/* Social buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.7-.4-3.9z" />
                                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                                <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.7-.4-3.9z" />
                            </svg>
                            Google দিয়ে চালিয়ে যান
                        </button>

                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.100.8 2.200v3.300c0 .3.2.7.8.6A11.500 11.500 0 0 0 23.500 12C23.500 5.700 18.300.5 12 .5z" />
                            </svg>
                            GitHub দিয়ে চালিয়ে যান
                        </button>
                    </div>

                    {/* Sign in link */}
                    <p className="mt-5 text-center text-sm text-gray-700">
                        অ্যাকাউন্ট আছে?{" "}
                        <Link href="/signup" className="font-semibold text-green-700 hover:underline">
                            সাইন ইন করুন
                        </Link>
                    </p>
                </div>

                {/* Back home */}
                <Link href="/" className="mt-6 text-sm text-gray-500 hover:text-gray-700">
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

export default SignUpPage;