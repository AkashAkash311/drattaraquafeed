import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact by Region | Dr. Attar Aqua Feed",
  description:
    "Regional contact page for farmers and dealers to request feed recommendation and channel support.",
  keywords: ["contact shrimp feed", "regional dealer contact", "aqua feed support"],
};

const REGIONS = [
  { region: "North", states: "Haryana, Punjab, Rajasthan", contact: "+91-8750778845" },
  { region: "West", states: "Gujarat, Maharashtra", contact: "+91-8750778845" },
  { region: "South", states: "Andhra Pradesh, Tamil Nadu, Kerala", contact: "+91-8750778845" },
  { region: "East", states: "Odisha, West Bengal", contact: "+91-8750778845" },
];

export default function ContactByRegionPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Regional Support</p>
        <h1 className="mt-3 text-4xl font-bold">Contact by Region</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Select your region and connect with the team for feed recommendations, dealer onboarding, and supply planning.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {REGIONS.map((item) => (
            <article key={item.region} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xl font-bold text-slate-900">{item.region} Region</h2>
              <p className="mt-2 text-sm text-slate-700">{item.states}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">Phone: {item.contact}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
