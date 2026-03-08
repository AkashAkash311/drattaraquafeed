import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vannamei Feed Program | Dr. Attar Aqua Feed",
  description:
    "Stage-wise Vannamei feed program with practical feeding ranges, frequency guidance, and pond observation checkpoints.",
  keywords: ["vannamei feed program", "shrimp feeding schedule", "vannamei nutrition"],
};

const PROGRAM = [
  { stage: "Starter", bodyWeight: "0.02 - 2.0 g", feedRate: "8% - 22%", frequency: "4-6 times/day" },
  { stage: "Grower", bodyWeight: "2.0 - 15.0 g", feedRate: "2.8% - 7%", frequency: "3-4 times/day" },
  { stage: "Finisher", bodyWeight: "15.0 g+", feedRate: "1.4% - 2.8%", frequency: "2-3 times/day" },
];

export default function VannameiFeedProgramPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Technical Guide</p>
        <h1 className="mt-3 text-4xl font-bold">Vannamei Feed Program</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          This program provides stage-wise reference values for Vannamei feeding. Daily ration should be adjusted using tray observations, biomass checks, and water quality monitoring.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-4 bg-slate-100 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
            <p>Stage</p>
            <p>Body Weight</p>
            <p>Feed Rate</p>
            <p>Frequency</p>
          </div>
          {PROGRAM.map((item) => (
            <div key={item.stage} className="grid grid-cols-4 border-t border-slate-200 px-4 py-3 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">{item.stage}</p>
              <p>{item.bodyWeight}</p>
              <p>{item.feedRate}</p>
              <p>{item.frequency}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
