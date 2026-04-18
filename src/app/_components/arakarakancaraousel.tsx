// src/app/_components/arakarakancaraousel.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const RAW_LINKS = [
  "https://lh3.googleusercontent.com/d/1WQRyo6Urt6-AYc9VMajcLkAnwO4GNWj1",
  "https://lh3.googleusercontent.com/d/1mla5lVASgwaJAGHE5LAN2XCSBxC8YUAU",
  "https://lh3.googleusercontent.com/d/1TdL-xLO6cyAgqLz07ZeMKBNelfDY0ckU",
  "https://lh3.googleusercontent.com/d/1nKdMah1zPqArfVehk71myFcTj0nMNxJo",
  "https://lh3.googleusercontent.com/d/1MfMWeUGxA5fuLR5SSV5c61G3NLY3-dcz",
  "https://lh3.googleusercontent.com/d/1LX5SZX7lnpZy0NCF34-4DMmnJ2--DFLs",
  "https://lh3.googleusercontent.com/d/13xCKaBBLTNLfHzajQXHeKtRvCcLGG1C3",
  "https://lh3.googleusercontent.com/d/1isQ1aO27hYNE2-KF9bVn9UjDMgqAUw79",
  "https://lh3.googleusercontent.com/d/1vqUaI58ScrxBxDGmnfU41IXA86sgsFkc",
  "https://lh3.googleusercontent.com/d/11018LNGcfBKCyy1xiArXA2R0r4h8cuMl",
];

const images = RAW_LINKS;

export default function ArakArakanCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const next = () => setCurrentIndex((p) => (p + 1) % images.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + images.length) % images.length);
  
  const handleImageError = (url: string) => {
    setImageErrors((prev) => new Set([...prev, url]));
  };

  return (
    <div className="flex w-full flex-col items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10">
      <div className="w-[55%] md:w-[50%] lg:w-[45%]">
        <div className="relative w-full">
          <Image
            src="/Vector-blue.webp"
            alt=""
            width={637}
            height={106}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 h-full flex items-center justify-center">
            <h2 className="font-rajdhani text-[clamp(1.25rem,3vw,2.375rem)] font-semibold leading-none text-white">
              Last Year&apos;s Arak-arakan
            </h2>
          </div>
        </div>
      </div>

      <div className="relative flex h-[220px] md:h-[380px] lg:h-[480px] w-full max-w-5xl items-center justify-center">
        {images.map((img, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          let cls = "opacity-0 scale-75 z-0 pointer-events-none";
          if (isActive) cls = "opacity-100 scale-100 z-20 translate-x-0";
          else if (isPrev) cls = "opacity-60 scale-90 z-10 -translate-x-1/4 md:-translate-x-1/3";
          else if (isNext) cls = "opacity-60 scale-90 z-10 translate-x-1/4 md:translate-x-1/3";

          return (
            <div
              key={index}
              className={`absolute h-[180px] md:h-[340px] lg:h-[430px] w-[80%] md:w-[65%] lg:w-[60%] overflow-hidden rounded-2xl md:rounded-3xl border-2 border-indigo-500/30 transition-all duration-500 ease-in-out ${cls}`}
            >
              {imageErrors.has(img) ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                  <span className="text-white text-sm">Image tidak bisa dimuat</span>
                </div>
              ) : (
                <Image
                  src={img}
                  alt={`Arak-arakan ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 60vw"
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
          className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#3E00CF] text-white transition-transform hover:scale-110"
        >
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
              className={`h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "scale-125 bg-white" : "bg-[#E0FF00] opacity-50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#3E00CF] text-white transition-transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}