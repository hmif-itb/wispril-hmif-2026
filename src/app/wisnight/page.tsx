"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { HydrateClient } from "~/trpc/server";

export default function WisnightPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const { data: mediaData, isLoading } = api.wisnight.getAll.useQuery();

  const nextSlide = () => {
    if (!mediaData) return;
    setCurrentIdx((prev) => (prev + 1) % mediaData.length);
  };

  const prevSlide = () => {
    if (!mediaData) return;
    setCurrentIdx((prev) => (prev - 1 + mediaData.length) % mediaData.length);
  };

  //State Pengambilan Data
  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#141115] text-white">
        <p className="animate-pulse text-[#41f9ff]">Loading Galeri Wisnight...</p>
      </main>
    );
  }

  if (!mediaData || mediaData.length === 0) return;

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-start bg-[#141115] pt-24 text-white">
        <div className="container flex max-w-3xl flex-col items-center justify-start gap-12 px-4 py-16">
          <div 
            className="bg-[#eaea00] px-12 py-3 font-black text-[#141115] uppercase italic tracking-tighter text-xl"
            style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
          >
            Last Year's Wisnight
          </div>

          <div className="relative flex w-full items-center justify-center">
            
            <button 
              onClick={prevSlide}
              className="absolute left-[-20px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#3e00cf] text-white border-2 border-[#41f9ff] transition-all hover:bg-[#41f9ff] hover:text-[#141115] hover:shadow-[0_0_20px_#41f9ff] md:left-[-60px]"
            >
              ❮
            </button>

            <div className="w-full overflow-hidden rounded-2xl border-4 border-[#3e00cf] bg-[#141115] shadow-[0_0_30px_rgba(62,0,207,0.4)]">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIdx * 100}%)` }}
              >
                {mediaData?.map((media) => (
                  <div key={media.id} className="min-w-full aspect-video flex items-center justify-center bg-[#141115]">
                    {media.type === 'IMAGE' ? (
                      <img src={media.url} alt="Wisnight" className="h-full w-full object-cover" />
                    ) : (
                      <video src={media.url} controls preload="metadata" className="h-full w-full object-cover" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={nextSlide}
              className="absolute right-[-20px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#3e00cf] text-white border-2 border-[#41f9ff] transition-all hover:bg-[#41f9ff] hover:text-[#141115] hover:shadow-[0_0_20px_#41f9ff] md:right-[-60px]"
            >
              ❯
            </button>
          </div>

          <div className="flex gap-3">
            {mediaData?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIdx(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  index === currentIdx 
                    ? 'w-8 bg-[#41f9ff] shadow-[0_0_10px_#41f9ff]' 
                    : 'w-2 bg-[#800022]'
                }`}
              />
            ))}
          </div>

        </div>
      </main>
    </HydrateClient>
  );
}
