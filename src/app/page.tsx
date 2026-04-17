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
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0d0f12]">
        <div className="container flex flex-col items-center justify-center px-4 py-16">
          <Image 
            src="/logo.svg" 
            alt="Logo Utama" 
            width={281} height={265} 
            className="w-[120px] md:w-[180px] h-auto z-10" />

          <Image 
            src="/wispril-text.webp" 
            alt="Wispril Text" 
            width={656} 
            height={176} 
            className="z-20 w-[240px] md:w-[380px] h-auto mt-3 md:mt-5" 
            />

          <p className={`${rajdhani.className} text-[#EAEA00] text-lg md:text-2xl font-medium tracking-[0.2em] mt-5 md:mt-6`}>
            HMIF 2026
          </p>
        </div>
      </main>
    </HydrateClient>
  );
}
