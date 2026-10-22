"use client";

import { useMemo, useState } from "react";
import ProductCart from "@/components/ProductCart";

const SortableProductList = ({ data }) => {
    const [sort, setSort] = useState("default");

    const sortedProducts = [...data];
     //console.log(data)
    // console.log(sortedProducts)
    if (sort === "price-low") {
        sortedProducts.sort((a, b) => Number(a.today) - Number(b.today));
    } else if (sort === "price-high") {
        sortedProducts.sort((a, b) => Number(b.today) - Number(a.today));
    }

    return (
        <>
            {/* Sorting Bar */}
            <div className="flex items-center justify-end rounded-xl border border-[#e1e8e1] bg-[#FAFCFA] px-4 py-2.5">
                <div className="flex items-center gap-2">
                    <label
                        htmlFor="sort"
                        className="text-xs text-[#7d877f]"
                    >
                        সাজান
                    </label>

                    <select
                        id="sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="rounded-lg border border-[#dce3dc] bg-[#fafcfb] px-2 py-1.5 text-xs text-[#48564c] outline-none focus:border-green-500"
                    >
                        <option value="default">ডিফল্ট</option>
                        <option value="price-low">
                            দাম: কম থেকে বেশি
                        </option>
                        <option value="price-high">
                            দাম: বেশি থেকে কম
                        </option>
                    </select>
                </div>
            </div>

            {/* Product Count and Cards */}
            <div>
                <p className="mb-3 text-sm text-[#7d877f]">
                    মোট {sortedProducts.length.toLocaleString("bn-BD")}
                    টি পণ্য দেখানো হচ্ছে
                </p>

                <ProductCart
                    data={sortedProducts}
                    title=""
                    direction="up"
                    icon=""
                />
            </div>
        </>
    );
};

export default SortableProductList;
