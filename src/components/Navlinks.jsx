import Link from 'next/link';
import React from 'react';

const Navlinks = async () => {

    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
    const data = await res.json();
    console.log(data)


    return (
        <div className='flex justify-center items-center gap-7  bg-base-100 shadow p-5'>

            {data.map((item,id) => (
                <Link key={item.id}
                href={`/category/${item.slug}`} >
                    <span>{item.icon}</span>
                    <span>{item.nameBn}</span>
                </Link>
            ))}
        </div>
    );
};

export default Navlinks;