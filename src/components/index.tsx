"use client";
import React from "react";
import Header from "./headers";
import EmblaCarousel from "./carousel";
import Footer from "./footers";
import { EmblaOptionsType } from "embla-carousel";

import FirstImage from "@/assets/12341234.png";
import SecondImage from "@/assets/zinga-banner-1.png";
import ThirdImage from "@/assets/zinga-2-1024x768.jpg";

const OPTIONS: EmblaOptionsType = { loop: true };

const SLIDES = [
  {
    image: FirstImage,
    alt: "Slide 1",
    content: (
      <div className="flex flex-col justify-center items-start h-full px-6 md:px-20 text-white">
        <p className="text-orange-500 text-xl font-semibold uppercase tracking-wide">
          Welcome to Zingawala
        </p>
        <h1 className="text-5xl md:text-7xl font-bold my-4 leading-tight">
          OM PRAWN FEED
        </h1>
        <div className="mt-4 max-w-xl">
          <p className="text-lg md:text-xl leading-relaxed">
            OM prawn feed is a specialized nutritional product designed to meet
            the dietary requirements of prawns in aquaculture settings...
          </p>
        </div>
      </div>
    ),
  },
  {
    image: SecondImage,
    alt: "Slide 2",
    content: (
      <div className="flex flex-col justify-center items-start h-full px-6 md:px-20 text-white">
        <p className="text-orange-400 text-xl font-semibold uppercase tracking-wide">
          Premium Quality Feed
        </p>
        <h1 className="text-5xl md:text-7xl font-bold my-4 leading-tight">
          Sustainably Sourced
        </h1>
        <p className="text-lg md:text-xl max-w-xl leading-relaxed">
          Our feed ensures faster growth, better immunity, and healthier prawns
          – all with eco-conscious ingredients.
        </p>
      </div>
    ),
  },
  {
    image: ThirdImage,
    alt: "Slide 3",
    content: (
      <div className="flex flex-col justify-center items-start h-full px-6 md:px-20 text-white">
        <p className="text-lime-400 text-xl font-semibold uppercase tracking-wide">
          Trusted by Farmers
        </p>
        <h1 className="text-5xl md:text-7xl font-bold my-4 leading-tight">
          Innovation in Aquaculture
        </h1>
        <p className="text-lg md:text-xl max-w-xl leading-relaxed">
          Join thousands of farmers using OM Feed to power sustainable prawn
          farming practices across the country.
        </p>
      </div>
    ),
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col gap-1">
      <Header />
      {/* <div className="mt-1 flex-grow"> */}
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Index;
