
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Navlinks from "./Navlinks";
import Marquee from "./Marquee";
import UserInfo from "./UserInfo";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Header = () => {
    return (
        <header className="w-full">
            {/* Main Header */}
            <div className="navbar mt-2 bg-base-100 px-3 shadow-sm sm:px-5">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">

                    {/* Logo and Website Name */}
                    <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                        <Link href="/" className="shrink-0">
                            <div className="flex items-center justify-center rounded-xl bg-green-600 p-2.5 sm:p-3">
                                <Image
                                    src="/logo-icon.png"
                                    alt="বাজার দর"
                                    width={24}
                                    height={28}
                                    priority
                                />
                            </div>
                        </Link>

                        <div className="flex min-w-0 flex-col">
                            <Link href="/" className="text-xl font-bold text-gray-800 sm:text-2xl">
                                বাজার দর
                            </Link>

                            <span className="text-[10px] leading-4 text-neutral-500 sm:text-xs">
                                {date}
                            </span>
                        </div>
                    </div>

                    {/* User Information */}
                    <div className="flex shrink-0 items-center">
                        <UserInfo />
                    </div>

                </div>
            </div>

        
            <Suspense
                fallback={
                    <div className="h-10 animate-pulse bg-base-200" />
                }
            >
                <Navlinks />
            </Suspense>

        
            <Suspense
                fallback={
                    <div className="h-8 animate-pulse bg-base-200" />
                }
            >
                <Marquee />
            </Suspense>
        </header>
    );
};

export default Header;