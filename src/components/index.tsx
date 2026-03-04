"use client";

import Image from "next/image";
import {
  Award,
  Factory,
  Leaf,
  Menu,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Scientifically Formulated",
    description:
      "Balanced feed engineered for healthy growth and improved FCR in intensive aquaculture.",
  },
  {
    icon: Factory,
    title: "Modern Manufacturing",
    description:
      "Produced in controlled facilities with strict quality checkpoints at every stage.",
  },
  {
    icon: Leaf,
    title: "Sustainable Inputs",
    description:
      "Ingredient sourcing and formulations designed for long-term pond ecosystem health.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description:
      "Timely logistics and service support to keep your farm operations consistent.",
  },
];

const PRODUCTS = [
  {
    name: "Starter Feed",
    description:
      "High digestibility micro-pellets for early-stage shrimp with improved survival support.",
    image: "/img/Freshwater-white-prawns.webp",
  },
  {
    name: "Grower Feed",
    description:
      "Protein-rich formulation designed to sustain rapid growth in the grower cycle.",
    image: "/img/50-ton.webp",
  },
  {
    name: "Finisher Feed",
    description:
      "Performance feed focused on weight gain, color quality, and harvest consistency.",
    image: "/img/71dMJGr-pdS-_AC_UF10001000_QL80_.webp",
  },
];

const GALLERY_IMAGES = [
  "/img/2725037-scaled.webp",
  "/img/Refrigerated-Isolated-Vehicles-scaled.webp",
  "/img/zinga-2.webp",
  "/img/Untitled-design-5-867x1536.webp",
];

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-slate-950/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/img/opf-logo.webp"
              alt="Dr. Attar Aqua Feed"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border border-white/20 object-cover"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                Dr. Attar
              </p>
              <p className="text-base font-semibold text-white">Aqua Feed</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-200 transition hover:text-orange-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Get Quote
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-slate-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="relative isolate min-h-[92vh] overflow-hidden pt-28">
          <Image
            src="/img/12341234.webp"
            alt="High-performance shrimp feed"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/35" />
          <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <div>
              <p className="inline-flex rounded-full border border-orange-300/40 bg-orange-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                High-performance shrimp feed
              </p>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Precision Nutrition for Stronger and Faster Shrimp Growth
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Dr. Attar Aqua Feed delivers quality-controlled formulations built for farm profitability,
                better pond performance, and dependable harvest outcomes.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
                >
                  Explore Products
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            <div className="grid gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-sm text-slate-200">Partner Network</p>
                <p className="mt-1 text-2xl font-bold text-white">1000+</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-sm text-slate-200">Product Variants</p>
                <p className="mt-1 text-2xl font-bold text-white">12+</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-sm text-slate-200">Quality Focus</p>
                <p className="mt-1 text-2xl font-bold text-white">Lab Tested</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <Image
              src="/img/zinga-banner-1.webp"
              alt="Production overview"
              width={1750}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">About Us</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Feed Technology Built Around Farm Performance
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              We manufacture nutritionally balanced shrimp feed with a strong emphasis on feed conversion,
              growth consistency, and health support across key cultivation stages.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our process combines practical aquaculture expertise with precise production controls so farmers
              get consistent quality in every batch.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4">
                <p className="font-semibold text-slate-900">Balanced Formulations</p>
                <p className="mt-1 text-sm text-slate-600">Designed for better digestion and lower wastage.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="font-semibold text-slate-900">Field-Proven Quality</p>
                <p className="mt-1 text-sm text-slate-600">Validated by practical farm-level outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Our Products</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Complete Feed Range for Every Growth Stage</h2>
              </div>
              <p className="max-w-xl text-sm text-slate-300">
                A practical product line designed for hatchery-to-harvest feeding programs.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PRODUCTS.map((product) => (
                <article
                  key={product.name}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-orange-300/50"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{product.description}</p>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300"
                    >
                      View details <Award className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Quality Process</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Quality at Every Step from Raw Input to Dispatch
              </h2>
              <div className="mt-8 grid gap-4">
                {FEATURES.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {GALLERY_IMAGES.map((image, index) => (
                <div
                  key={image}
                  className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md ${
                    index === 0 ? "sm:col-span-2 h-64" : "h-52"
                  }`}
                >
                  <Image
                    src={image}
                    alt="Farm and logistics"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-slate-950 py-16 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Contact</p>
            <h2 className="mt-4 text-3xl font-bold">Let us support your next production cycle</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Share your requirement and our team will help you select the right feed program for your farm.
            </p>
            <div className="mt-8 space-y-2 text-sm text-slate-300">
              <p>Email: contact@drattaraquafeed.com</p>
              <p>Phone: +91-8750778845</p>
              <p>Address: Village Dohki, Charkhi Dadri, Haryana - 124507</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Quick Reach</h3>
            <p className="mt-2 text-sm text-slate-300">We usually respond within one business day.</p>
            <div className="mt-6 grid gap-3">
              <a
                href="mailto:contact@drattaraquafeed.com"
                className="rounded-lg border border-white/20 px-4 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                Email Sales Team
              </a>
              <a
                href="tel:+918750778845"
                className="rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Call Now
              </a>
            </div>
            <p className="mt-8 text-xs text-slate-400">© 2026 Dr. Attar Aqua Feed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

