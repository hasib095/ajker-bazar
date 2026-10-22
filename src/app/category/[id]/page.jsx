import ProductCart from '@/components/ProductCart';
import SortableProductList from '@/components/SortableProductList';
import React from 'react';

const page =async ({params}) => {

    const {id}=await params;
 
    const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${id}`);
    const data=await res.json();
    console.log(data);

    return (
       <div className="min-h-screen bg-[#F0F5F0] p-4">
      <div className="mx-auto max-w-7xl space-y-4">
        {/* Product Header */}
        <div className="flex items-center gap-3 rounded-xl border border-[#e1e8e1] bg-[#FAFCFA] px-4 py-3.5">
          <span className="text-2xl" role="img" aria-label="Rice">
            {data[0].categoryIcon}
          </span>
        {/* {console.log(data[0].id)} */}
          <div>
            <h2 className="text-lg font-bold leading-tight text-[#34443b]">
              {data[0].categoryNameBn}
            </h2>
            <p className="text-xs text-[#929b94]">
             {(data.length).toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* Sorting Bar */}
        <SortableProductList data={data} />

      </div>
    </div>
    );
};

export default page;