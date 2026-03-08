import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Plant and Quality Process | Dr. Attar Aqua Feed",
  description:
    "Overview of manufacturing controls, quality checks, and process discipline used for shrimp feed production.",
  keywords: ["aqua feed plant", "quality process", "shrimp feed quality control"],
};

const PROCESS_STEPS = [
  "Raw material screening and acceptance checks",
  "Formulation and controlled mixing",
  "Pelletizing and drying under monitored conditions",
  "Quality validation before dispatch",
];

export default function AboutPlantQualityProcessPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Manufacturing</p>
        <h1 className="mt-3 text-4xl font-bold">About Plant / Quality Process</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Our process emphasizes nutritional consistency, pellet quality, and dispatch reliability through defined checkpoints.
        </p>

        <div className="mt-8 grid gap-3">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <span className="mr-2 font-bold text-slate-900">{index + 1}.</span>
              {step}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
