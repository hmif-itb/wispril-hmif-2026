// src/app/_components/wisnightcaraousel.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const RAW_LINKS = [
  "https://lh3.googleusercontent.com/d/1HGqGc499SG_zVx6KK-7T1uWbVpgD-8e5",
  "https://lh3.googleusercontent.com/d/1T0cfc6BMk-yI4XpynpCGCaQfesJcFWrH",
  "https://lh3.googleusercontent.com/d/1_yTQgvm5hFovPITMgNA0zTYT1PHsgkhL",
  "https://lh3.googleusercontent.com/d/1Red5Vxlib6Iur0AW9-k_my4YQqiSYXS5",
  "https://lh3.googleusercontent.com/d/1x_72E-bmx_26KV2o07vufU5ndbkrRF3B",
  "https://lh3.googleusercontent.com/d/1U7QbmAJjV_r64a3zt5vPfkGRHIIRJDWr",
  "https://lh3.googleusercontent.com/d/1Djm7k6ahhNsYWVKW01q5oUaobydc_orU",
  "https://lh3.googleusercontent.com/d/1aL5bPXLGq0GNIFnX2icAM_2a2ciNQFHK",
  "https://lh3.googleusercontent.com/d/1uouiGtb91MK36hoZLSejzrdAfTerdcrb",
  "https://lh3.googleusercontent.com/d/1J-vRph0GHjnuvbZ-ByV-zb6FEtU2DCN3",
  "https://lh3.googleusercontent.com/d/1-yh67I5P2mUZc1PihCoRJJMi4LsO5Sht",
  "https://lh3.googleusercontent.com/d/1ZesV8Da6NQP_5sAGr4MQlNHHP96IgEI_",
  "https://lh3.googleusercontent.com/d/1GVeDbkYih859wxxb5OM9Lv7j4_wAupfG",
  "https://lh3.googleusercontent.com/d/1uo_cZIFfdXeDsIwqyUzzDXC_2A7Pjxcn",
  "https://lh3.googleusercontent.com/d/1mKLgmrSh9y5ACPddHqqpgHX_daVtrNgs",
];

const images = RAW_LINKS;

export default function WisnightCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const next = () => setCurrentIndex((p) => (p + 1) % images.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + images.length) % images.length);

  const handleImageError = (url: string) => {
    setImageErrors((prev) => new Set([...prev, url]));
  };

  return (
    <div className="flex w-full flex-col items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10">
      <div className="w-[75%] sm:w-[70%] md:w-[60%] lg:w-[55%]">
        <div className="relative w-full">
          <Image
            src="/Vector-kuning-kanan.webp"
            alt=""
            width={637}
            height={106}
            className="w-full h-auto"
            priority />
          <div className="absolute inset-0 h-full flex items-center justify-center">
            <h2 className="font-rajdhani text-[clamp(1.25rem,3vw,2.375rem)] font-semibold leading-none text-[#3e00cf]">
              Last Year&apos;s Wisnight
            </h2>
          </div>
        </div>
      </div>

      <div className="relative flex h-[140px] sm:h-[200px] md:h-[350px] lg:h-[440px] w-full items-center justify-center overflow-visible">
        {images.map((img, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          let cls = "opacity-0 scale-75 z-0 pointer-events-none";
          if (isActive) cls = "opacity-100 scale-100 z-20 translate-x-0 shadow-[0_0_30px_#3e00cf]";
          else if (isPrev) cls = "opacity-50 scale-90 z-10 -translate-x-1/3 md:-translate-x-1/4";
          else if (isNext) cls = "opacity-50 scale-90 z-10 translate-x-1/3 md:translate-x-1/4";

          return (
            <div
              key={index}
              className={`absolute h-[120px] sm:h-[160px] md:h-[300px] lg:h-[390px] w-[85%] sm:w-[78%] md:w-[65%] lg:w-[60%] overflow-hidden rounded-lg md:rounded-xl bg-gray-800 transition-all duration-700 ease-in-out ${cls}`}>
              {imageErrors.has(img) ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                  <span className="text-white text-sm">Image tidak bisa dimuat</span>
                </div>
              ) : (
                <Image
                  src={img}
                  alt={`Wisnight ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 78vw, 60vw"
                  priority={isActive}
                  onError={() => handleImageError(img)}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <button
          onClick={prev}
          aria-label="Previous"
          className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#3E00CF] text-white transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 rounded-full bg-[#3E00CF]/60 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full transition-all duration-300 ${index === currentIndex ? "scale-125 bg-white" : "bg-[#3E00CF] opacity-50"
                }`} />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#3E00CF] text-white transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}