import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Award, Box, FlaskConical, Waves } from "lucide-react";
import { PRODUCTS } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Link href="/#products" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-600">
          <ArrowLeft className="h-4 w-4" />
          Back to products
        </Link>

        <article className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="relative h-72 w-full sm:h-96">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200">Dr. Attar Aqua Feed</p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{product.name}</h1>
            </div>
          </div>

          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.3fr_0.7fr]">
            <section>
              <h2 className="text-2xl font-bold">Product Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">{product.description}</p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">{product.details}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Stage Mapping</p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">{product.stage}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Pellet Size</p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">{product.pelletSize}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
                <h3 className="text-lg font-bold text-slate-900">Key Benefits</h3>
                <ul className="mt-4 space-y-3">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-slate-700">
                      <Award className="mt-0.5 h-4 w-4 flex-none text-orange-600" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <div className="border-t border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Technical Specifications</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Crude Protein</p>
                <p className="mt-2 text-sm font-bold text-slate-900">{product.technicalSpecs.crudeProtein}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Crude Fat</p>
                <p className="mt-2 text-sm font-bold text-slate-900">{product.technicalSpecs.crudeFat}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Crude Fiber</p>
                <p className="mt-2 text-sm font-bold text-slate-900">{product.technicalSpecs.crudeFiber}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Ash</p>
                <p className="mt-2 text-sm font-bold text-slate-900">{product.technicalSpecs.ash}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Moisture</p>
                <p className="mt-2 text-sm font-bold text-slate-900">{product.technicalSpecs.moisture}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Feeding Guidance</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-4 bg-slate-100 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
                <p>Phase</p>
                <p>Body Weight</p>
                <p>Feed Rate</p>
                <p>Frequency</p>
              </div>
              {product.feedingGuidance.map((item) => (
                <div key={item.phase} className="grid grid-cols-4 border-t border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">{item.phase}</p>
                  <p>{item.bodyWeight}</p>
                  <p>{item.feedRate}</p>
                  <p>{item.frequency}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 border-t border-slate-200 p-6 sm:p-8 lg:grid-cols-2">
            <section className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <Waves className="h-5 w-5 text-cyan-700" />
                Ideal Pond Conditions
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {product.idealPondConditions.map((condition) => (
                  <li key={condition} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-700" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <Box className="h-5 w-5 text-emerald-700" />
                Packaging Options
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {product.packaging.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="border-t border-slate-200 p-6 sm:p-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
              <p className="flex items-center gap-2 font-semibold text-slate-900">
                <FlaskConical className="h-4 w-4 text-orange-600" />
                Technical Note
              </p>
              <p className="mt-2">
                Feed rates may vary by pond biomass, weather, and water quality. Final schedule should be adjusted using feed tray observations and routine pond monitoring.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
