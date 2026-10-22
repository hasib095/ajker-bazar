import Link from "next/link";
import React from "react";

const Navlinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories"
  );

  const data = await res.json();

  return (
    <nav className="w-full bg-base-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-3 py-3 sm:gap-5 sm:px-5 md:justify-center md:gap-7">

        {data.map((item) => (
          <Link
            key={item.id}
            href={`/category/${item.slug}`}
            className="flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700 sm:text-base"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.nameBn}</span>
          </Link>
        ))}

      </div>
    </nav>
  );
};

export default Navlinks;