import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    return (
        <div className="navbar bg-base-100 shadow-sm mt-2">
            <div className="flex-1 container mx-auto max-w-7xl">

                <div className="flex flex-col  gap-1 sm:flex-row sm:gap-2">
                    <div className='bg-green-600 rounded-2xl p-3 flex items-center'><Image
                        src="/logo-icon.png"
                        alt="বাজার দর"
                        width={18}
                        height={28}
                        priority
                    /></div>
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="text-2xl font-bold text-black-700">
                            বাজার দর
                        </span>
                        <span className="text-xs text-neutral-500">{date}</span>
                    </div>
                </div>

            </div>

            <div>
                <Link href={"/signin"}>
                    <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">
                        সাইন ইন
                    </button>
                </Link>
                <Link href={"/signup"}>
                    {" "}
                    <button className="btn  bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-red-800">
                        সাইন আপ
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Header;