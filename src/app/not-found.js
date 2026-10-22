import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow">
        <div className="mb-4 text-6xl">🔍</div>

        <h1 className="text-5xl font-bold text-gray-800">৪০৪</h1>

        <h2 className="mt-3 text-xl font-semibold">পেজটি পাওয়া যায়নি</h2>

        <p className="mt-2 text-sm text-gray-500">
          আপনি যে পণ্য বা পেজটি খুঁজছেন তা নেই, অথবা সরিয়ে ফেলা হয়েছে।
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}