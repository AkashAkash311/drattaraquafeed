import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dealer Network | Dr. Attar Aqua Feed",
  description:
    "Dealer network page with territory onboarding flow, expected capability, and dealer inquiry process.",
  keywords: ["aqua feed dealer", "shrimp feed distributor", "dealer network"],
};

const ONBOARDING = [
  "Share business profile and target territory",
  "Capacity and logistics capability screening",
  "Commercial alignment and dispatch workflow setup",
  "Initial onboarding support with sales coordination",
];

export default function DealerNetworkPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Channel Growth</p>
        <h1 className="mt-3 text-4xl font-bold">Dealer Network</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          We work with channel partners who can support timely availability and technical communication to shrimp farms in their territory.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-bold">Dealer Onboarding Flow</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            {ONBOARDING.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
