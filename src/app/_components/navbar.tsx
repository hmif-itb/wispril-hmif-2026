"use client";

import Link from "next/link";
import Image from "next/image";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 z-50">
      <div
        className="flex items-center gap-4 md:gap-8 bg-[#3E00CF] text-[#EAEA00] px-5 md:px-10 py-3 md:py-4 shadow-xl"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 32px 100%, 0 calc(100% - 32px))",
        }}
      >
        <ul className="flex gap-4 md:gap-8 items-center text-[clamp(0.75rem,2vw,1.125rem)] font-semibold tracking-wide whitespace-nowrap overflow-x-auto max-w-[70vw]">
          <li>
            <button
              onClick={() => scrollToSection("visi-misi")}
              className="hover:text-white transition-colors duration-200 cursor-pointer\"
            >
              Visi dan Misi
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("wisnight")}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Wisnight
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("arak-arakan")}
              className="hover:text-white transition-colors duration-200 cursor-pointer\"
            >
              Arak-arakan
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("sponsors")}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Sponsors
            </button>
          </li>
        </ul>
        <button
          onClick={() => scrollToSection("landing")}
          className="w-10 h-10 md:w-12 md:h-12 ml-1 md:ml-2 block hover:opacity-80 transition-opacity flex-shrink-0 cursor-pointer"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="w-full h-full object-contain drop-shadow-md"
            priority
          />
        </button>
      </div>
    </nav>
  );
}