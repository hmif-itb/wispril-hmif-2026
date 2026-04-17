"use client";

import { useState } from "react";
import Image from "next/image";

const convertDriveLink = (originalLink: string) => {
  const match = originalLink.match(/\/d\/(.+?)\/view/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return originalLink;
};

const RAW_LINKS = [
  "https://drive.google.com/file/d/1HGqGc499SG_zVx6KK-7T1uWbVpgD-8e5/view?usp=sharing",
  "https://drive.google.com/file/d/1T0cfc6BMk-yI4XpynpCGCaQfesJcFWrH/view?usp=sharing",
  "https://drive.google.com/file/d/1_yTQgvm5hFovPITMgNA0zTYT1PHsgkhL/view?usp=sharing",
  "https://drive.google.com/file/d/1Red5Vxlib6Iur0AW9-k_my4YQqiSYXS5/view?usp=sharing",
  "https://drive.google.com/file/d/1x_72E-bmx_26KV2o07vufU5ndbkrRF3B/view?usp=sharing",
  "https://drive.google.com/file/d/1U7QbmAJjV_r64a3zt5vPfkGRHIIRJDWr/view?usp=sharing",
  "https://drive.google.com/file/d/1Djm7k6ahhNsYWVKW01q5oUaobydc_orU/view?usp=sharing",
  "https://drive.google.com/file/d/1aL5bPXLGq0GNIFnX2icAM_2a2ciNQFHK/view?usp=sharing",
  "https://drive.google.com/file/d/1uouiGtb91MK36hoZLSejzrdAfTerdcrb/view?usp=sharing",
  "https://drive.google.com/file/d/1J-vRph0GHjnuvbZ-ByV-zb6FEtU2DCN3/view?usp=sharing",
  "https://drive.google.com/file/d/1-yh67I5P2mUZc1PihCoRJJMi4LsO5Sht/view?usp=sharing",
  "https://drive.google.com/file/d/1ZesV8Da6NQP_5sAGr4MQlNHHP96IgEI_/view?usp=sharing",
  "https://drive.google.com/file/d/1GVeDbkYih859wxxb5OM9Lv7j4_wAupfG/view?usp=sharing",
  "https://drive.google.com/file/d/1uo_cZIFfdXeDsIwqyUzzDXC_2A7Pjxcn/view?usp=sharing",
  "https://drive.google.com/file/d/1mKLgmrSh9y5ACPddHqqpgHX_daVtrNgs/view?usp=sharing",
];

const coverted_links = RAW_LINKS.map((link) => convertDriveLink(link));

export default function WisnightCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = coverted_links;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex w-full flex-col items-center gap-6 md:gap-10">
      <div
        className="bg-[#eaea00] px-10 py-3 text-lg font-bold tracking-tight text-[#3e00cf] md:px-16 md:py-4 md:text-2xl"
        style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
      >
        Last Year&apos;s Wisnight
      </div>

      <div className="relative flex h-[250px] w-full max-w-6xl items-center justify-center overflow-visible md:h-[450px]">
        {images.map((img, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          let positionClasses = "opacity-0 scale-75 z-0 pointer-events-none";

          if (isActive) {
            positionClasses = "opacity-100 scale-100 z-20 translate-x-0 shadow-[0_0_30px_#3e00cf]";
          } else if (isPrev) {
            positionClasses = "opacity-50 scale-90 z-10 -translate-x-1/3 md:-translate-x-1/4";
          } else if (isNext) {
            positionClasses = "opacity-50 scale-90 z-10 translate-x-1/3 md:translate-x-1/4";
          }

          return (
            <div
              key={index}
              className={`absolute h-[200px] w-[75%] overflow-hidden rounded-xl bg-gray-300 transition-all duration-700 ease-in-out md:h-[400px] md:w-[60%] ${positionClasses}`}
            >
              <Image
                src={img}
                alt={`Wisnight Moment ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 75vw, 60vw"
                priority={isActive}
              />
            </div>
          );
        })}
      </div>

      {/* Controls & Pagination Dots */}
      <div className="flex items-center gap-3 rounded-full bg-[#141115]/80 p-2 md:gap-4">
        <button
          onClick={prevSlide}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#800022] text-white transition-all hover:bg-[#3e00cf] hover:scale-110 md:h-10 md:w-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white opacity-80 scale-125" // Highlighted: 80% opacity
                  : "bg-white opacity-50 hover:opacity-70" // Others: 50% opacity
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#800022] text-white transition-all hover:bg-[#3e00cf] hover:scale-110 md:h-10 md:w-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}