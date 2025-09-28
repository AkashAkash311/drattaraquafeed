"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";

type SlideType = {
  image: StaticImageData;
  alt: string;
  content: React.ReactNode;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="embla__viewport w-full h-full" ref={emblaRef}>
        <div className="flex w-full h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] w-full h-full">
              {/* <div className="absolute left-6 top-10 z-20 text-white text-lg font-semibold tracking-widest">
                <span className="text-orange-500">{index + 1}</span>
                {slides.length.toString().padStart(2, "0")}
              </div> */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 z-10">{slide.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 left-6 z-20 flex items-center gap-4">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="w-10 h-10 bg-white/80 hover:bg-white text-black rounded-full shadow-md"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="w-10 h-10 bg-white/80 hover:bg-white text-black rounded-full shadow-md"
        />
      </div>

      {/* Slide Indicator */}
      {/* <div className="absolute left-6 top-10 z-20 text-white text-lg font-semibold tracking-widest">
        <span className="text-orange-500">01</span>
        {slides.length.toString().padStart(2, "0")}
      </div> */}
    </section>
  );
};

export default EmblaCarousel;
