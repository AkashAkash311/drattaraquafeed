import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed Management Guide | Dr. Attar Aqua Feed",
  description:
    "Practical shrimp feed management guide covering feed trays, water conditions, biomass checks, and FCR discipline.",
  keywords: ["feed management guide", "shrimp FCR", "aqua farm feeding"],
};

const GUIDELINES = [
  "Use feed trays for every pond and record response at fixed intervals.",
  "Adjust daily ration by biomass trend, not by fixed feed chart alone.",
  "Track dissolved oxygen, pH, alkalinity, and ammonia before aggressive feed increases.",
  "Reduce feed when weather swings or bloom collapse risk appears.",
  "Keep batch records for feed lot, pond day, ration, and estimated FCR.",
];

export default function FeedManagementGuidePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Farm Operations</p>
        <h1 className="mt-3 text-4xl font-bold">Feed Management Guide</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Better farm outcomes require disciplined feed management. These checks help reduce wastage and maintain healthy growth progression.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-slate-700">
          {GUIDELINES.map((item) => (
            <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
