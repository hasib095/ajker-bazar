import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const priceFormat = new Intl.NumberFormat("bn-BD", {
  maximumFractionDigits: 1,
});

const formatPrice = (price) => priceFormat.format(price);

const getUnitLabel = (unit) => {
  if (unit === "kg") return "কেজি";
  if (unit === "litre" || unit === "liter") return "লিটার";
  return unit;
};

const ProductPageContent = async ({ params }) => {
  
  
    const { id } = await params;
  const response = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${(id)}`);
  if (response.status === 404) notFound();
 const product = await response.json();



  const markets = Array.isArray(product.markets) ? product.markets : [];
  const marketRows = markets.map((market) => ({
    ...market,
    average: (Number(market.min) + Number(market.max)) / 2,
  }));
  const lowest = marketRows.length
    ? Math.min(...marketRows.map((market) => Number(market.min)))
    : null;
  const highest = marketRows.length
    ? Math.max(...marketRows.map((market) => Number(market.max)))
    : null;
  const average = marketRows.length
    ? marketRows.reduce((total, market) => total + market.average, 0) /
      marketRows.length
    : null;
  const changeAmount = Math.abs(
    Number(product.today) - Number(product.yesterday)
  );
  const changeDirection =
    product.change?.dir === "up"
      ? "up"
      : product.change?.dir === "down"
        ? "down"
        : "same";
  const unit = getUnitLabel(product.unit);

  return (
    <div className="min-h-screen bg-[#f0f5f0] px-4 py-6 sm:py-8">
      <div className="mx-auto max-w-5xl space-y-5">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-[#778279]"
        >
          <Link href="/" className="transition hover:text-green-700">
            হোম
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href={`/category/${product.category}`}
            className="transition hover:text-green-700"
          >
            {product.categoryNameBn}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-[#34443b]">{product.nameBn}</span>
        </nav>

        <section className="rounded-2xl border border-[#e1e8e1] bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-4xl">
                {product.image || product.categoryIcon}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#303a32] sm:text-3xl">
                  {product.nameBn}
                </h1>
                <p className="mt-1 text-sm text-[#778279]">প্রতি {unit} . {product.categoryNameBn}</p>
              </div>
            </div>

            <div className="rounded-xl bg-[#f5f8f5] px-3 py-4 sm:min-w-52 sm:text-center">
              <p className="text-sm text-[#778279]">আজকের দাম</p>
              <p className="mt-1 text-3xl font-bold text-[#303a32]">
                {formatPrice(product.today)}
                <span className="ml-1 text-base font-medium">টাকা</span>
              </p>
              <p className="mt-1 text-xs text-[#778279]">প্রতি {unit}</p>
            </div>
          </div>

          <div
            className={`mt-5 flex flex-wrap items-center gap-2 border-t border-[#edf1ed] pt-4 text-sm ${
              changeDirection === "up"
                ? "text-red-600"
                : changeDirection === "down"
                  ? "text-green-700"
                  : "text-[#778279]"
            }`}
          >
            <span aria-hidden="true">
              {changeDirection === "up"
                ? "▲"
                : changeDirection === "down"
                  ? "▼"
                  : "—"}
            </span>
            <span>
              গতকালের তুলনায় আজ দাম{" "}
              {changeDirection === "up"
                ? "বেড়েছে"
                : changeDirection === "down"
                  ? "কমেছে"
                  : "অপরিবর্তিত"}
            </span>
            {changeDirection !== "same" && (
              <strong>
                {formatPrice(changeAmount)} টাকা ({formatPrice(Math.abs(Number(product.change?.pct ?? 0)))}%)
              </strong>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-[#e1e8e1] bg-white p-5 shadow-sm sm:p-7">
          <div>
            <h2 className="text-xl font-bold text-[#34443b]">
              দামের সারসংক্ষেপ
            </h2>
            <p className="mt-1 text-sm text-[#778279]">
              {marketRows.length
                ? `${marketRows.length.toLocaleString("bn-BD")}টি বাজারের আজকের দাম`
                : "বাজারের দামের তথ্য পাওয়া যায়নি"}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#e5eee5] bg-[#f8fbf8] p-4">
              <p className="text-sm text-[#778279]">সর্বনিম্ন দাম</p>
              <p className="mt-2 text-2xl font-bold text-green-700">
                {lowest === null ? "—" : formatPrice(lowest)}
                {lowest !== null && (
                  <span className="ml-1 text-sm font-medium">টাকা</span>
                )}
              </p>
  <p className="text-sm">সবচেয়ে কম দামের বাজার</p>

            </div>
            <div className="rounded-xl border border-[#f0e6e4] bg-[#fdf9f8] p-4">
              <p className="text-sm text-[#778279]">সর্বাধিক দাম</p>
              <p className="mt-2 text-2xl font-bold text-red-600">
                {highest === null ? "—" : formatPrice(highest)}
                {highest !== null && (
                  <span className="ml-1 text-sm font-medium">টাকা</span>
                )}
              </p>
              <p className="text-sm">সবচেয়ে বেশি দামের বাজার</p>
            </div>
            <div className="rounded-xl border border-[#e5eee5] bg-[#f8fbf8] p-4">
              <p className="text-sm text-[#778279]">বাজারের গড় দাম</p>
              <p className="mt-2 text-2xl font-bold text-[#34443b]">
                {average === null ? "—" : formatPrice(average)}
                {average !== null && (
                  <span className="ml-1 text-sm font-medium">টাকা</span>
                )}
              </p>
              <p className="mt-1 text-sm text-[#778279]">প্রতি {unit}-এর হিসাবে</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3">
              <h2 className="text-xl font-bold text-[#34443b]">
                বাজারভিত্তিক আজকের দাম
              </h2>
              <p className="mt-1 text-sm text-[#778279]">
                প্রতিটি বাজারের সর্বনিম্ন ও সর্বাধিক দামের গড়
              </p>
            </div>

            {marketRows.length ? (
              <div className="overflow-x-auto rounded-xl border border-[#e1e8e1]">
                <table className="w-full min-w-[600px] text-sm">
                  <thead>
                    <tr className="bg-[#f5f8f5] text-left text-[#647168]">
                      <th scope="col" className="p-3 font-semibold">
                        বাজার
                      </th>
                      <th scope="col" className="p-3 font-semibold">
                        বিভাগ
                      </th>
                      <th scope="col" className="p-3 text-right font-semibold">
                        সর্বনিম্ন
                      </th>
                      <th scope="col" className="p-3 text-right font-semibold">
                        সর্বাধিক
                      </th>
                      <th scope="col" className="p-3 text-right font-semibold">
                        গড়
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketRows.map((market, index) => (
                      <tr
                        key={`${market.market}-${market.division}`}
                        className={`border-t border-[#edf1ed] ${
                          index % 2 === 1 ? "bg-[#fafcfa]" : "bg-white"
                        }`}
                      >
                        <th
                          scope="row"
                          className="p-3 text-left font-semibold text-[#34443b]"
                        >
                          {market.market}
                        </th>
                        <td className="p-3 text-[#647168]">
                          {market.division}
                        </td>
                        <td className="p-3 text-right">
                          {formatPrice(market.min)} টাকা
                        </td>
                        <td className="p-3 text-right">
                          {formatPrice(market.max)} টাকা
                        </td>
                        <td className="p-3 text-right font-semibold text-[#34443b]">
                          {formatPrice(market.average)} টাকা
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="rounded-xl border border-dashed border-[#d5dfd5] px-4 py-8 text-center text-sm text-[#778279]">
                এই পণ্যের বাজারভিত্তিক দামের তথ্য এখনো পাওয়া যায়নি।
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

const ProductPageFallback = () => (
  <div className="min-h-screen bg-[#f0f5f0] px-4 py-6 sm:py-8">
    <div className="mx-auto max-w-5xl space-y-5">
      <p className="text-sm text-[#778279]" role="status" aria-live="polite">
        পণ্যের দামের তথ্য লোড হচ্ছে...
      </p>
      <div className="h-52 animate-pulse rounded-2xl bg-white shadow-sm" />
      <div className="h-[28rem] animate-pulse rounded-2xl bg-white shadow-sm" />
    </div>
  </div>
);

const ProductPage = ({ params }) => (
  <Suspense fallback={<ProductPageFallback />}>
    <ProductPageContent params={params} />
  </Suspense>
);

export default ProductPage;
