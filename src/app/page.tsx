import Link from "next/link";
import Image from "next/image";

import { SignInButton, SignOutButton } from "~/app/_components/auth-buttons";
import { LatestPost } from "~/app/_components/post";
import { getSession } from "~/server/better-auth/server";
import { api, HydrateClient } from "~/trpc/server";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400","500","600","700"]});

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getSession();

  if (session) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container relative flex flex-col items-center justify-center px-4 py-16">
          {/* Efek Glow Background */}
          <div className="absolute w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-[#3E00CF] blur-[100px] md:blur-[140px] rounded-full z-0 opacity-40 animate-pulse"></div>

          <Image 
            src="/logo.svg" 
            alt="Logo Utama" 
            width={281} height={265} 
            className="w-[120px] md:w-[180px] h-auto z-10 opacity-0 animate-[fade-in-up_1s_ease-out_forwards,_float_4s_ease-in-out_1s_infinite]" />

          <Image 
            src="/wispril-text.webp" 
            alt="Wispril Text" 
            width={656} 
            height={176} 
            className="z-20 w-[240px] md:w-[380px] h-auto mt-3 md:mt-5 opacity-0 animate-[fade-in-up_1s_ease-out_0.3s_forwards]" 
            />
            
          <p className={`${rajdhani.className} text-[#EAEA00] text-lg md:text-2xl font-medium tracking-[0.2em] mt-5 md:mt-6 z-20 drop-shadow-[0_0_8px_rgba(234,234,0,0.6)] opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]`}>
            HMIF 2026
          </p>
        </div>
      </main>
    </HydrateClient>
  );
}
