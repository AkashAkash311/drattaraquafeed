import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shrimp Feed Manufacturer | Dr. Attar Aqua Feed",
  description:
    "Dr. Attar Aqua Feed is a shrimp feed manufacturer focused on growth consistency, feed conversion performance, and reliable supply support.",
  keywords: [
    "shrimp feed manufacturer",
    "aqua feed company India",
    "vannamei feed supplier",
    "aquaculture feed",
  ],
};

export default function ShrimpFeedManufacturerPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Company Overview</p>
        <h1 className="mt-3 text-4xl font-bold">Shrimp Feed Manufacturer</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Dr. Attar Aqua Feed develops and supplies scientifically formulated shrimp feed programs from starter to finisher stages. The manufacturing approach focuses on consistent pellet quality, stable nutrition, and practical farm-level performance support.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-bold">Core Strengths</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Stage-wise nutrition design for better growth curves</li>
              <li>Batch consistency and process control for reliable output</li>
              <li>Dealer and farm support for feed planning</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-bold">Product Range</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Starter Feed</li>
              <li>Grower Feed</li>
              <li>Finisher Feed</li>
            </ul>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-5">
          <h2 className="text-xl font-bold">Explore Related Pages</h2>
          <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-orange-700">
            <Link href="/vannamei-feed-program">Vannamei Feed Program</Link>
            <Link href="/feed-management-guide">Feed Management Guide</Link>
            <Link href="/dealer-network">Dealer Network</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
