import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-[#EBF9FE] px-6 py-20 md:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-3xl border border-blue-100 bg-white px-6 py-14 text-center shadow-sm md:px-10">
        <p className="mb-3 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold tracking-wide text-[#003B73]">
          Error 404
        </p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">Page Not Found</h1>
        <p className="mt-4 max-w-xl text-sm text-slate-600 md:text-base">
          The page you are looking for doesn&apos;t exist or may have been moved. Please go back to the homepage.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#002D5B] px-6 py-3 font-semibold text-white transition hover:bg-[#003B73]"
          >
            <Home size={18} />
            Go To Homepage
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
        </div>
      </div>
    </section>
  );
}
