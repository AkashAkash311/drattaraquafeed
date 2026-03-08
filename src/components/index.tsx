"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Factory,
  Leaf,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import HeroImage from "@/assets/12341234.png";
import BannerImage from "@/assets/zinga-banner-1.png";
import LogoImage from "@/assets/opf-logo.png";
import GalleryA from "@/assets/zinga-2.jpg";
import GalleryB from "@/assets/Untitled-design-5-867x1536.png";
import GalleryC from "@/assets/Refrigerated-Isolated-Vehicles-scaled.jpg";
import GalleryD from "@/assets/20200503_101419-01_1024x1024-2x.webp";
import { PRODUCTS } from "@/data/products";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Trust", href: "#trust" },
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

const GALLERY_IMAGES = [GalleryD, GalleryC, GalleryA, GalleryB];
const TRUST_EVIDENCE = [
  {
    title: "Lab-Tested Batch Checks",
    description: "Routine checks for moisture, protein, pellet stability, and contamination risk control.",
  },
  {
    title: "Process Documentation",
    description: "Production logs, input records, and dispatch traceability maintained lot-wise.",
  },
  {
    title: "Farm Performance Tracking",
    description: "Feed tray observations, growth trend tracking, and FCR monitoring support.",
  },
];

const PROCESS_PROOFS = [
  {
    image: GalleryC,
    title: "Dispatch and Logistics",
    caption: "Structured dispatch process for timely and condition-safe delivery.",
  },
  {
    image: GalleryA,
    title: "Pond-Level Validation",
    caption: "Field usage visuals from active farms and grow-out cycles.",
  },
  {
    image: BannerImage,
    title: "Production Supervision",
    caption: "Manufacturing and handling under controlled process stages.",
  },
];

const STATE_COVERAGE = ["Haryana", "Andhra Pradesh", "Gujarat", "Odisha", "West Bengal", "Tamil Nadu", "Kerala", "Maharashtra"];

const TESTIMONIALS = [
  {
    quote:
      "Feed response has been consistent. We observed better tray clearing and stronger growth in the same cycle window.",
    name: "R. Kumar",
    role: "Vannamei Farmer, Andhra Pradesh",
  },
  {
    quote: "Dealer support and dispatch communication are reliable. Repeat demand has improved season over season.",
    name: "S. Patel",
    role: "Aqua Input Dealer, Gujarat",
  },
  {
    quote: "Final stage performance helped us maintain more uniform harvest sizing with improved market acceptance.",
    name: "M. Das",
    role: "Farm Operator, Odisha",
  },
  {
    quote: "Starter response was better than our previous cycle, and feed tray checks stayed more predictable.",
    name: "P. Singh",
    role: "Shrimp Farmer, West Bengal",
  },
  {
    quote: "Team guidance on feed stage transition reduced confusion at farm level and improved routine execution.",
    name: "A. Reddy",
    role: "Farm Supervisor, Andhra Pradesh",
  },
  {
    quote: "Dealer onboarding was smooth and dispatch timelines were practical for our regional coverage model.",
    name: "N. Shah",
    role: "Channel Partner, Maharashtra",
  },
  {
    quote: "Finisher batch consistency helped us target market-size harvests with better confidence.",
    name: "K. Nair",
    role: "Aqua Farmer, Kerala",
  },
];

const TESTIMONIALS_LOOP = [...TESTIMONIALS, ...TESTIMONIALS];

const HARVEST_SNAPSHOTS = [
  { label: "Average FCR Band", value: "1.3 - 1.6*" },
  { label: "Survival Band", value: "75% - 88%*" },
  { label: "Cycle Weight Target", value: "22 - 28 g*" },
];
const WHATSAPP_NUMBER = "918750778845";

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
  const [farmerSubmitted, setFarmerSubmitted] = useState(false);
  const [dealerSubmitted, setDealerSubmitted] = useState(false);
  const [farmerForm, setFarmerForm] = useState({
    name: "",
    phone: "",
    state: "",
    pondSize: "",
    species: "Vannamei",
    feedStage: "Starter",
    message: "",
  });
  const [dealerForm, setDealerForm] = useState({
    name: "",
    phone: "",
    company: "",
    state: "",
    district: "",
    monthlyVolume: "Up to 5 tons",
    logistics: "Yes",
    message: "",
  });

  const fieldClassName =
    "w-full rounded-xl border border-slate-300/80 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200";

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

  const buildWhatsAppLink = (text: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleFarmerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const source = `website-home-farmer:${window.location.pathname}`;
    const text = [
      "New Feed Recommendation Lead",
      `Name: ${farmerForm.name}`,
      `Phone: ${farmerForm.phone}`,
      `State: ${farmerForm.state}`,
      `Pond Size: ${farmerForm.pondSize}`,
      `Species: ${farmerForm.species}`,
      `Feed Stage: ${farmerForm.feedStage}`,
      `Farm Requirement: ${farmerForm.message || "NA"}`,
      `Source: ${source}`,
    ].join("\n");

    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
    setFarmerSubmitted(true);
  };

  const handleDealerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const source = `website-home-dealer:${window.location.pathname}`;
    const text = [
      "New Dealer Application Lead",
      `Name: ${dealerForm.name}`,
      `Phone: ${dealerForm.phone}`,
      `Company: ${dealerForm.company}`,
      `State: ${dealerForm.state}`,
      `District: ${dealerForm.district}`,
      `Monthly Volume: ${dealerForm.monthlyVolume}`,
      `Logistics Capacity: ${dealerForm.logistics}`,
      `Message: ${dealerForm.message || "NA"}`,
      `Source: ${source}`,
    ].join("\n");

    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
    setDealerSubmitted(true);
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
            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.02]"
            >
              Get Quote <ArrowUpRight className="h-4 w-4" />
            </a> */}
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
                  href="#farmer-form"
                  className="rounded-full border border-white/45 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  I am a Farmer
                </a>
                <a
                  href="#dealer-form"
                  className="rounded-full border border-orange-300/65 bg-orange-400/20 px-6 py-3 text-sm font-semibold text-orange-100 transition hover:bg-orange-400/35"
                >
                  Become a Dealer
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
                    <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-orange-300">
                      View details <Award className="h-4 w-4" />
                    </Link>
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

        <section id="trust" className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Trust and Proof</p>
                <h2 className="font-display mt-3 text-4xl leading-tight text-slate-900">Proof-Backed Performance for Farms and Dealers</h2>
              </div>
              <p className="max-w-xl text-sm text-slate-600">
                Evidence modules designed to support technical confidence before purchase decisions.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {TRUST_EVIDENCE.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {PROCESS_PROOFS.map((proof) => (
                <article key={proof.title} className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="relative h-44 w-full">
                    <Image src={proof.image} alt={proof.title} fill className="object-cover" />
                  </div>
                  <div className="bg-white p-4">
                    <h3 className="text-base font-bold text-slate-900">{proof.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{proof.caption}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                <h3 className="text-lg font-bold text-slate-900">State Coverage</h3>
                <p className="mt-1 text-sm text-slate-600">Active market and distribution coverage footprint.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {STATE_COVERAGE.map((state) => (
                    <span key={state} className="rounded-full border border-cyan-300 bg-white px-3 py-1 text-xs font-semibold text-cyan-800">
                      {state}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
                <h3 className="text-lg font-bold text-slate-900">Harvest Result Snapshots</h3>
                <p className="mt-1 text-xs text-slate-600">*Indicative field outcomes. Actual results vary by farm management and water conditions.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {HARVEST_SNAPSHOTS.map((item) => (
                    <div key={item.label} className="rounded-xl border border-orange-200 bg-white p-3 text-center">
                      <p className="text-xl font-bold text-slate-900">{item.value}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 py-4">
              <div className="testimonial-marquee flex w-max gap-4 px-4">
                {TESTIMONIALS_LOOP.map((testimonial, index) => (
                  <article
                    key={`${testimonial.name}-${index}`}
                    className="w-[320px] flex-none rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:w-[360px]"
                  >
                    <p className="text-sm leading-relaxed text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
                    <p className="mt-4 text-sm font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-lg font-bold text-slate-900">Certifications and Technical Affiliations</h3>
              <p className="mt-1 text-sm text-slate-600">
                Add only publicly verifiable certificate/registration numbers below before publishing.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-emerald-200 bg-white p-3 text-sm text-slate-700">Certificate 1: Pending verified ID</div>
                <div className="rounded-xl border border-emerald-200 bg-white p-3 text-sm text-slate-700">Certificate 2: Pending verified ID</div>
                <div className="rounded-xl border border-emerald-200 bg-white p-3 text-sm text-slate-700">Affiliation 1: Pending verified ID</div>
                <div className="rounded-xl border border-emerald-200 bg-white p-3 text-sm text-slate-700">Affiliation 2: Pending verified ID</div>
              </div>
            </div> */}
          </div>
        </section>
      </main>

      <a
        href={buildWhatsAppLink("Hello Dr. Attar Aqua Feed, I need help with shrimp feed planning.")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-2xl shadow-emerald-900/30 transition hover:scale-[1.03]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>

      <footer id="contact" className="relative overflow-hidden bg-slate-950/84 py-18 text-white backdrop-blur-[1px]">
        <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
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
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-300">Guides and Pages</p>
              <div className="mt-3 grid grid-cols-1 gap-2 text-sm font-semibold text-orange-200 sm:grid-cols-2">
                <Link href="/shrimp-feed-manufacturer" className="hover:text-orange-100">Shrimp Feed Manufacturer</Link>
                <Link href="/vannamei-feed-program" className="hover:text-orange-100">Vannamei Feed Program</Link>
                <Link href="/feed-management-guide" className="hover:text-orange-100">Feed Management Guide</Link>
                <Link href="/dealer-network" className="hover:text-orange-100">Dealer Network</Link>
                <Link href="/about-plant-quality-process" className="hover:text-orange-100">About Plant / Quality Process</Link>
                <Link href="/contact-by-region" className="hover:text-orange-100">Contact by Region</Link>
              </div>
            </div>
          </div>

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

          <div className="grid gap-5 lg:col-span-2">
            <div className="flex flex-col gap-5 xl:flex-row">
              <div id="farmer-form" className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl xl:flex-1">
                <h3 className="font-display text-3xl">Get Feed Recommendation</h3>
                <p className="mt-1 text-sm text-slate-600">Farmer lead form. Response SLA: within one business day.</p>
                <form className="mt-5 grid gap-3" onSubmit={handleFarmerSubmit}>
                  <input
                    required
                    value={farmerForm.name}
                    onChange={(event) => setFarmerForm((prev) => ({ ...prev, name: event.target.value }))}
                    className={fieldClassName}
                    placeholder="Full name"
                  />
                  <input
                    required
                    value={farmerForm.phone}
                    onChange={(event) => setFarmerForm((prev) => ({ ...prev, phone: event.target.value }))}
                    className={fieldClassName}
                    placeholder="Phone number"
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      required
                      value={farmerForm.state}
                      onChange={(event) => setFarmerForm((prev) => ({ ...prev, state: event.target.value }))}
                      className={fieldClassName}
                      placeholder="State"
                    />
                    <input
                      required
                      value={farmerForm.pondSize}
                      onChange={(event) => setFarmerForm((prev) => ({ ...prev, pondSize: event.target.value }))}
                      className={fieldClassName}
                      placeholder="Pond size (acre/hectare)"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <select
                      value={farmerForm.species}
                      onChange={(event) => setFarmerForm((prev) => ({ ...prev, species: event.target.value }))}
                      className={fieldClassName}
                    >
                      <option>Vannamei</option>
                      <option>Black Tiger</option>
                      <option>Other</option>
                    </select>
                    <select
                      value={farmerForm.feedStage}
                      onChange={(event) => setFarmerForm((prev) => ({ ...prev, feedStage: event.target.value }))}
                      className={fieldClassName}
                    >
                      <option>Starter</option>
                      <option>Grower</option>
                      <option>Finisher</option>
                    </select>
                  </div>
                  <textarea
                    rows={3}
                    value={farmerForm.message}
                    onChange={(event) => setFarmerForm((prev) => ({ ...prev, message: event.target.value }))}
                    className={fieldClassName}
                    placeholder="Farm requirement (optional)"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30"
                  >
                    Send on WhatsApp
                  </button>
                  {farmerSubmitted ? (
                    <p className="text-xs font-semibold text-emerald-700">Lead captured. WhatsApp chat opened with pre-filled details.</p>
                  ) : null}
                </form>
              </div>

              <div id="dealer-form" className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl xl:flex-1">
                <h3 className="font-display text-3xl">Become a Dealer</h3>
                <p className="mt-1 text-sm text-slate-600">Dealer lead form with territory and capacity qualification.</p>
                <form className="mt-5 grid gap-3" onSubmit={handleDealerSubmit}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      required
                      value={dealerForm.name}
                      onChange={(event) => setDealerForm((prev) => ({ ...prev, name: event.target.value }))}
                      className={fieldClassName}
                      placeholder="Full name"
                    />
                    <input
                      required
                      value={dealerForm.phone}
                      onChange={(event) => setDealerForm((prev) => ({ ...prev, phone: event.target.value }))}
                      className={fieldClassName}
                      placeholder="Phone number"
                    />
                  </div>
                  <input
                    required
                    value={dealerForm.company}
                    onChange={(event) => setDealerForm((prev) => ({ ...prev, company: event.target.value }))}
                    className={fieldClassName}
                    placeholder="Company / Firm name"
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      required
                      value={dealerForm.state}
                      onChange={(event) => setDealerForm((prev) => ({ ...prev, state: event.target.value }))}
                      className={fieldClassName}
                      placeholder="State"
                    />
                    <input
                      required
                      value={dealerForm.district}
                      onChange={(event) => setDealerForm((prev) => ({ ...prev, district: event.target.value }))}
                      className={fieldClassName}
                      placeholder="District"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <select
                      value={dealerForm.monthlyVolume}
                      onChange={(event) => setDealerForm((prev) => ({ ...prev, monthlyVolume: event.target.value }))}
                      className={fieldClassName}
                    >
                      <option>Up to 5 tons</option>
                      <option>5 to 15 tons</option>
                      <option>15 to 30 tons</option>
                      <option>30+ tons</option>
                    </select>
                    <select
                      value={dealerForm.logistics}
                      onChange={(event) => setDealerForm((prev) => ({ ...prev, logistics: event.target.value }))}
                      className={fieldClassName}
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <textarea
                    rows={3}
                    value={dealerForm.message}
                    onChange={(event) => setDealerForm((prev) => ({ ...prev, message: event.target.value }))}
                    className={fieldClassName}
                    placeholder="Additional details (optional)"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r from-slate-900 to-slate-700 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/30"
                  >
                    Submit Dealer Interest
                  </button>
                  {dealerSubmitted ? (
                    <p className="text-xs font-semibold text-emerald-700">Dealer lead captured. WhatsApp chat opened with pre-filled details.</p>
                  ) : null}
                </form>
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
