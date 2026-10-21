import Image from 'next/image';
import React from 'react';


const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Benner = () => {
    return (
        <div>
            <section className="mx-auto mt-4 max-w-7xl px-4">
                <div className="flex min-h-[210px] flex-col items-center justify-between gap-6 rounded-3xl border border-gray-200 bg-[#FAFCFA] px-6 py-6 shadow-sm sm:px-8 md:flex-row md:px-12">

                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                           <span className="text-xs text-green-700">{date}</span>
                        </span>

                        <h1 className="mt-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                            আজকের বাজারের দাম এক নজরে
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                        </p>

                        <a
                            href="#all"
                            className="mt-5 inline-flex items-center justify-center rounded-md bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            সব পণ্য দেখুন
                        </a>
                    </div>

                    {/* Right Hero Image */}
                    <div className="relative h-36 w-48 shrink-0 sm:h-40 sm:w-56">
                        <Image
                            src="/bazar-hero.png"
                            alt="তাজা বাজারের পণ্য ভর্তি ঝুড়ি"
                           fill
                            priority
                            sizes="(max-width: 800px) 192px, 224px"
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benner;