import Image from "next/image";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function LandingSection() {
  return (
    <section
      id="landing"
      className="flex min-h-screen flex-col items-center justify-center bg-[#0D0D0D] overflow-hidden relative"
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="relative flex flex-col items-center justify-center px-4 py-16 z-10 max-w-[95vw] md:max-w-full">
        <div className="absolute w-[200px] md:w-[320px] h-[200px] md:h-[320px] bg-[#3E00CF] blur-[100px] md:blur-[130px] rounded-full z-0 opacity-50 animate-pulse" />

        <Image
          src="/logo.svg"
          alt="Logo Utama"
          width={281}
          height={265}
          priority
          className="w-[110px] md:w-[160px] lg:w-[200px] h-auto z-10 opacity-0 animate-[fade-in-up_1s_ease-out_forwards,_float_4s_ease-in-out_1s_infinite]"/>

        <Image
          src="/wispril-text.webp"
          alt="Wispril Text"
          width={656}
          height={176}
          priority
          className="z-20 w-[220px] md:w-[340px] lg:w-[420px] h-auto mt-3 md:mt-5 opacity-0 animate-[fade-in-up_1s_ease-out_0.3s_forwards]"/>

        <p
          className={`${rajdhani.className} text-[#EAEA00] text-[clamp(0.75rem,2vw,1.5rem)] font-medium tracking-[0.2em] mt-4 md:mt-6 z-20 drop-shadow-[0_0_8px_rgba(234,234,0,0.6)] opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]`}>
          HMIF 2026
        </p>
      </div>
    </section>
  );
}
