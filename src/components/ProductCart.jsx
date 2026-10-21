import Link from 'next/link';
import React from 'react';

const numberFormat = new Intl.NumberFormat('bn-BD');
const percentageFormat = new Intl.NumberFormat('bn-BD', {
    maximumFractionDigits: 1,
});

const ProductCart = ({ data, title, direction, icon, id }) => {
    return (

        <section id={id} className="scroll-mt-6">
            <div>
                <h2 className="mb-2 flex items-center gap-2 text-2xl font-bold text-slate-800 sm:text-xl">
                    <span
                        className={`rounded-md px-2 py-1 ${direction === "up"
                            ? "text-red-500"
                            : direction === "down"
                                ? "text-green-600"
                                : ""
                            }`}
                    >
                        {icon}
                    </span>
                    <span className={`text-2xl`}>{title}</span>
                </h2>
                {direction === "all" ? <span > মোট {(data.length).toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে</span> : " "}

            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-2">

                {data.map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="rounded-2xl border border-[#e1eae2] bg-[#fbfdfb] p-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                    >

                        {/* Product information */}
                        <div className="flex items-center gap-2">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl">
                                {product.image}
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-[#303a32]">
                                    {product.nameBn}
                                </h3>
                                <p className="mt-1 text-xs text-slate-500">
                                    প্রতি {product.unit === "kg" ? "কেজি" : "লিটার"}
                                </p>
                            </div>
                        </div>

                        {/* Price and change */}
                        <div className="mt-2 flex items-end justify-between">
                            <div>
                                <p className="text-[13px] text-gray-500">
                                    আজকের দাম
                                </p>

                                <p className="text-sm font-bold text-[#303a32]">
                                    {new Intl.NumberFormat("bn-BD").format(product.today)} টাকা
                                </p>
                            </div>

                            <span
                                className={`mb-0.5 rounded-full px-2 py-1 text-[15px] font-semibold ${product.change.dir === "up"
                                    ? "bg-red-50 text-red-500"
                                    : product.change.dir === "down"
                                        ? "bg-green-50 text-green-600"
                                        : "bg-gray-100 text-gray-500"
                                    }`}
                            >
                                {product.change.dir === "up"
                                    ? "▲"
                                    : product.change.dir === "down"
                                        ? "▼"
                                        : "—"}{" "}
                                {new Intl.NumberFormat("bn-BD", {
                                    maximumFractionDigits: 1,
                                }).format(Math.abs(product.change.pct))}
                                %
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProductCart;