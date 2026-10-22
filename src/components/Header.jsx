
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import Navlinks from './Navlinks';
import Marquee from './Marquee';
import UserInfo from './UserInfo';

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Header = () => {


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm mt-2">

                <div className="flex-1 container mx-auto max-w-7xl">

                    <div className="flex flex-col  gap-1 sm:flex-row sm:gap-2">
                        <Link href={"/"}>


                            <div className='bg-green-600 rounded-2xl p-3 flex items-center'><Image
                                src="/logo-icon.png"
                                alt="বাজার দর"
                                width={18}
                                height={28}
                                priority
                            /></div>
                        </Link>
                        <div className="flex flex-col items-center sm:items-start">
                            <span className="text-2xl font-bold text-black-700">
                                বাজার দর
                            </span>
                            <span className="text-xs text-neutral-500">{date}</span>
                        </div>

                    </div>

                </div>

                <UserInfo/>

            </div>

            <Suspense fallback={"loading"}>
                <Navlinks />
            </Suspense>

            <Suspense fallback={"loading"}>
                <Marquee />
            </Suspense>


        </div>


    );
};

export default Header;