"use client";
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {


    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: "/",
        });

        if (data) {
            toast.success('সফলভাবে সাইন ইন হয়েছে। স্বাগতম!',
                {
                    position: "top-center",
                });
            //console.log(data);
            redirect("/");
        }

        if (error) {
            toast.error(error.message);
            //console.log(error);
        }

    };
    const googleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    const githubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
    }

        return (
            <div className="flex min-h-screen flex-col items-center bg-green-50 px-4 py-10">
                {/* Heading */}
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">সাইন ইন</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                    </p>
                </div>

                {/* Card */}
                <div className="w-full max-w-md rounded-3xl  bg-white p-6 shadow-sm">
                    <form className="space-y-4" onSubmit={onSubmit}>
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

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-green-700 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-800"
                        >
                            সাইন ইন
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
                            onClick={googleSignIn}
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
                            onClick={githubSignIn}

                        >
                            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            GitHub দিয়ে চালিয়ে যান
                        </button>
                    </div>

                    {/* Sign up link */}
                    <p className="mt-5 text-center text-sm text-gray-700">
                        অ্যাকাউন্ট নেই?{" "}
                        <a href="/signup" className="font-semibold text-green-700 hover:underline">
                            সাইন আপ করুন
                        </a>
                    </p>
                </div>

                {/* Back home */}
                <Link href="/" className="mt-6 text-sm text-gray-500 hover:text-gray-700">
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        );
    };

    export default SignInPage;