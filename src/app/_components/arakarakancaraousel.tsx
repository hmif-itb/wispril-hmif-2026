"use client";

import { useState } from "react";
import Image from "next/image";

const convertDriveLink = (originalLink: string) => {
  // Regex untuk mengambil ID di antara /d/ dan /view
  const match = originalLink.match(/\/d\/(.+?)\/view/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return originalLink;
};

// Contoh penggunaan pada data kamu
const RAW_LINKS = [
  "https://drive.google.com/file/d/1WQRyo6Urt6-AYc9VMajcLkAnwO4GNWj1/view?usp=drive_link",
  "https://drive.google.com/file/d/1mla5lVASgwaJAGHE5LAN2XCSBxC8YUAU/view?usp=drive_link",
  "https://drive.google.com/file/d/1TdL-xLO6cyAgqLz07ZeMKBNelfDY0ckU/view?usp=drive_link",
  "https://drive.google.com/file/d/1nKdMah1zPqArfVehk71myFcTj0nMNxJo/view?usp=drive_link",
  "https://drive.google.com/file/d/1MfMWeUGxA5fuLR5SSV5c61G3NLY3-dcz/view?usp=drive_link",
  "https://drive.google.com/file/d/1LX5SZX7lnpZy0NCF34-4DMmnJ2--DFLs/view?usp=drive_link",
  "https://drive.google.com/file/d/13xCKaBBLTNLfHzajQXHeKtRvCcLGG1C3/view?usp=drive_link",
  "https://drive.google.com/file/d/1isQ1aO27hYNE2-KF9bVn9UjDMgqAUw79/view?usp=drive_link",
  "https://drive.google.com/file/d/1vqUaI58ScrxBxDGmnfU41IXA86sgsFkc/view?usp=drive_link",
  "https://drive.google.com/file/d/11018LNGcfBKCyy1xiArXA2R0r4h8cuMl/view?usp=drive_link",
];

const coverted_links = RAW_LINKS.map((link) => convertDriveLink(link));

// Contoh data dummy, nanti bisa diganti dengan data dari Google Drive

export default function ArakAracanCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = coverted_links;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex w-full flex-col items-center gap-10">
      {/* Header Label */}
      <div
        className="bg-[#2D00FF] px-16 py-4 text-2xl font-bold tracking-wide text-yellow-300 md:text-4xl"
        style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
      >
        Last Year&apos;s Arak-arakan
      </div>

      {/* Carousel Container */}
      <div className="relative flex h-[300px] w-full max-w-5xl items-center justify-center md:h-[500px]">
        {images.map((img, index) => {
          // Menentukan posisi gambar (Active, Prev, Next)
          const isActive = index === currentIndex;
          const isPrev =
            index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          let positionClasses = "opacity-0 scale-75 z-0 pointer-events-none"; // Hidden state

          if (isActive) {
            positionClasses = "opacity-100 scale-100 z-20 translate-x-0";
          } else if (isPrev) {
            positionClasses =
              "opacity-60 scale-90 z-10 -translate-x-1/4 md:-translate-x-1/3";
          } else if (isNext) {
            positionClasses =
              "opacity-60 scale-90 z-10 translate-x-1/4 md:translate-x-1/3";
          }

          return (
            <div
              key={index}
              className={`absolute h-[250px] w-[80%] overflow-hidden rounded-3xl border-2 border-indigo-500/30 transition-all duration-500 ease-in-out md:h-[450px] md:w-[60%] ${positionClasses}`}
            >
              <Image
                src={img}
                alt={`Arak-arakan ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 60vw"
              />
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E0FF00] text-black transition-transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2 rounded-full bg-[#E0FF00]/60 px-4 py-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "scale-125 bg-white"
                  : "bg-[#E0FF00] opacity-50"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E0FF00] text-black transition-transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
