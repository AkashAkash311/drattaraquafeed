"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Factory,
  Leaf,
  Menu,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import HeroImage from "@/assets/12341234.png";
import BannerImage from "@/assets/zinga-banner-1.png";
import LogoImage from "@/assets/opf-logo.png";
import ProductStarterImage from "@/assets/Freshwater-white-prawns.jpg";
import ProductGrowerImage from "@/assets/50-ton.jpg";
import ProductFinisherImage from "@/assets/71dMJGr-pdS-_AC_UF10001000_QL80_.jpg";
import GalleryA from "@/assets/zinga-2.jpg";
import GalleryB from "@/assets/Untitled-design-5-867x1536.png";
import GalleryC from "@/assets/Refrigerated-Isolated-Vehicles-scaled.jpg";
import GalleryD from "@/assets/20200503_101419-01_1024x1024-2x.webp";

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
    description: "Balanced feed designed for faster growth, stronger immunity, and better FCR.",
  },
  {
    icon: Factory,
    title: "Modern Manufacturing",
    description: "Strict process controls and quality checks ensure consistent batch performance.",
  },
  {
    icon: Leaf,
    title: "Sustainable Inputs",
    description: "Smart ingredient selection focused on pond health and long-term productivity.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Responsive logistics support to keep farm cycles uninterrupted.",
  },
];

const PRODUCTS = [
  {
    name: "Starter Feed",
    description: "High digestibility micro-pellets for early-stage shrimp with stronger survival support.",
    image: ProductStarterImage,
  },
  {
    name: "Grower Feed",
    description: "Protein-focused formula designed to sustain fast and stable growth cycles.",
    image: ProductGrowerImage,
  },
  {
    name: "Finisher Feed",
    description: "Performance feed engineered for harvest weight consistency and quality output.",
    image: ProductFinisherImage,
  },
];

const GALLERY_IMAGES = [GalleryD, GalleryC, GalleryA, GalleryB];

const HERO_SLIDES = [
  {
    image: HeroImage,
    tag: "High-Performance Shrimp Feed",
    title: "Precision Nutrition for Bigger, Healthier Harvests",
    description:
      "Advanced feed programs designed for modern aquaculture. Better growth, lower feed waste, and dependable quality across every cycle.",
  },
  {
    image: BannerImage,
    tag: "Consistent Farm Outcomes",
    title: "Built for Real Pond Conditions and Stronger Growth",
    description:
      "Scientifically balanced formulations engineered to support stable growth curves and improved feed conversion.",
  },
  {
    image: GalleryA,
    tag: "Field-Trusted Performance",
    title: "From Starter to Finisher, Quality You Can Rely On",
    description:
      "A complete feed range built with strict quality control and responsive supply support for every stage.",
  },
];

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <div className="relative overflow-x-hidden text-slate-900">
      <div className="pointer-events-none absolute -left-28 top-44 h-64 w-64 rounded-full bg-orange-300/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-[36rem] h-72 w-72 rounded-full bg-cyan-300/40 blur-3xl" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src={LogoImage}
              alt="Dr. Attar Aqua Feed"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border border-white/30 object-cover"
            />
            <div>
              <p className="font-display text-lg tracking-wide text-orange-200">Dr. Attar</p>
              <p className="-mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">Aqua Feed</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-100/90 transition hover:text-orange-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.02]"
            >
              Get Quote <ArrowUpRight className="h-4 w-4" />
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
                  className="text-sm font-semibold text-slate-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="relative isolate min-h-[94vh] overflow-hidden pt-28">
          {HERO_SLIDES.map((slide, index) => (
            <Image
              key={slide.title}
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-700 ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(2,6,23,0.92)_14%,rgba(2,6,23,0.7)_48%,rgba(2,6,23,0.36)_100%)]" />
          <div className="absolute inset-0 soft-grid opacity-10" />

          <button
            type="button"
            onClick={goToPrevSlide}
            className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30 md:left-6"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNextSlide}
            className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30 md:right-6"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="relative mx-auto grid min-h-[83vh] max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:px-8">
            <div className="reveal">
              <p className="inline-flex items-center gap-2 rounded-full border border-orange-300/50 bg-orange-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-100">
                <Sparkles className="h-3.5 w-3.5" /> {HERO_SLIDES[activeSlide].tag}
              </p>
              <h1 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                {HERO_SLIDES[activeSlide].title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                {HERO_SLIDES[activeSlide].description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-orange-500/35 transition hover:scale-[1.02]"
                >
                  Explore Products
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/45 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            <div className="reveal reveal-delay-2 grid gap-4 rounded-3xl border border-white/25 bg-white/10 p-5 shadow-2xl shadow-slate-950/35 backdrop-blur-md sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl bg-gradient-to-br from-white/25 to-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-orange-100">Partner Network</p>
                <p className="mt-2 text-3xl font-bold text-white">1000+</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-white/25 to-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-orange-100">Feed Variants</p>
                <p className="mt-2 text-3xl font-bold text-white">12+</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-white/25 to-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-orange-100">Quality Standard</p>
                <p className="mt-2 text-3xl font-bold text-white">Lab Tested</p>
              </div>
            </div>

            <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
              {HERO_SLIDES.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index ? "w-8 bg-orange-300" : "w-2.5 bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <div className="reveal reveal-delay-1 relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.15)]">
            <Image src={BannerImage} alt="Production overview" width={1750} height={650} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-200">Farm to Feed</p>
              <p className="font-display text-2xl">Built for Real Aquaculture Conditions</p>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">About Us</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-slate-900">Technology and Trust in Every Pellet</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              We manufacture nutritionally balanced shrimp feed with a deep focus on growth consistency,
              feed efficiency, and farm-level profitability.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Our process combines scientific formulation and strict production controls to deliver
              reliable performance in every batch.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-orange-200/80 bg-gradient-to-br from-orange-50 to-white p-5 shadow-sm">
                <p className="text-lg font-bold text-slate-900">Balanced Formulations</p>
                <p className="mt-1 text-sm text-slate-600">Designed for digestion, growth, and lower wastage.</p>
              </div>
              <div className="rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50 to-white p-5 shadow-sm">
                <p className="text-lg font-bold text-slate-900">Field-Proven Quality</p>
                <p className="mt-1 text-sm text-slate-600">Validated by practical outcomes across farms.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="relative overflow-hidden bg-slate-950/82 py-24 text-white backdrop-blur-[1px]">
          <div className="pointer-events-none absolute -top-10 right-0 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">Our Products</p>
                <h2 className="font-display mt-3 text-4xl leading-tight text-white">Complete Feed Range by Growth Stage</h2>
              </div>
              <p className="max-w-xl text-sm text-slate-300">
                A practical line-up from starter to finisher, engineered for consistent farm outcomes.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PRODUCTS.map((product, index) => (
                <article
                  key={product.name}
                  className={`reveal reveal-delay-${index + 1} group overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] shadow-xl transition hover:-translate-y-1`}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent" />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="font-display text-2xl">{product.name}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{product.description}</p>
                    <button type="button" className="inline-flex items-center gap-2 text-sm font-bold text-orange-300">
                      View details <Award className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Quality Process</p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-slate-900">
                Quality Controls from Input Selection to Dispatch
              </h2>
              <div className="mt-8 grid gap-4">
                {FEATURES.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="glass-card rounded-2xl p-5 shadow-sm transition hover:shadow-md">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
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
                  key={`gallery-${index}`}
                  className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md ${
                    index === 0 ? "sm:col-span-2 h-64" : "h-52"
                  }`}
                >
                  <Image src={image} alt="Farm and logistics" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="relative overflow-hidden bg-slate-950/84 py-18 text-white backdrop-blur-[1px]">
        <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">Contact</p>
            <h2 className="font-display mt-4 text-4xl leading-tight">Lets Build Your Next Successful Cycle</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Tell us your farm requirement and our team will recommend the right feed schedule.
            </p>
            <div className="mt-8 space-y-2 text-sm text-slate-300">
              <p>Email: contact@drattaraquafeed.com</p>
              <p>Phone: +91-8750778845</p>
              <p>Address: Village Dohki, Charkhi Dadri, Haryana - 124507</p>
            </div>
          </div>

          <div className="grid gap-5">
            {/* <div className="glass-card rounded-3xl p-7 text-slate-900 shadow-2xl">
              <h3 className="font-display text-3xl">Quick Reach</h3>
              <p className="mt-2 text-sm text-slate-600">We usually respond within one business day.</p>
              <div className="mt-6 grid gap-3">
                <a
                  href="mailto:contact@drattaraquafeed.com"
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Email Sales Team
                </a>
                <a
                  href="tel:+918750778845"
                  className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:scale-[1.01]"
                >
                  Call Now
                </a>
              </div>
            </div> */}

            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm">
              <div className="border-b border-white/20 px-5 py-3 text-sm font-semibold text-white">
                Location Map: DR ATTAR AQUA FEED, Dohki, Haryana - 127306
              </div>
              <div className="relative h-72 w-full sm:h-80">
                <iframe
                  title="Dr. Attar Aqua Feed Location Map"
                  src="https://www.google.com/maps?q=DR%20ATTAR%20AQUA%20FEED%2C%20Dohki%2C%20Haryana%20127306&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="border-t border-white/20 px-5 py-3">
                <a
                  href="https://www.google.com/maps/dir//DR+ATTAR+AQUA+FEED,+Dohki,+Haryana+127306/@28.5058064,77.0679584,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39128bd653d58f2b:0x8c03eb0bb4d0189e!2m2!1d76.1533116!2d28.6417155?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange-200 transition hover:text-orange-100"
                >
                  Open directions in Google Maps <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <p className="px-2 text-xs text-slate-300">Copyright 2026 Dr. Attar Aqua Feed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
