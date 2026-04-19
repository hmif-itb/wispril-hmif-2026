import Image from "next/image";

export default function VisiMisiSection() {
  return (
    <section
      id="visi-misi"
      className="min-h-screen w-full px-4 md:px-12 lg:px-20 py-28 md:py-32 flex flex-col justify-center gap-20 md:gap-28 bg-[#0D0D0D] text-white overflow-hidden relative max-w-screen"
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      {/* VISI */}
      <div className="relative w-full max-w-[600px] md:max-w-[780px] self-start">
        <div className="absolute -top-[30px] md:-top-[36px] left-0 z-20 w-[70%] md:w-[68%] lg:w-[65%]">
          <div className="relative w-full">
            <Image
              src="/Vector-kuning-kiri.webp"
              alt=""
              width={637}
              height={106}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 flex items-center pl-8 md:pl-10 pb-2">
              <h2 className="font-rajdhani text-[clamp(1.875rem,5vw,2.8rem)] font-semibold leading-none text-[#3E00CF]">
                Visi
              </h2>
            </div>
          </div>
        </div>

        <div
          className="bg-[#3E00CF] px-6 md:px-14 pt-12 md:pt-16 pb-10 md:pb-14 shadow-[0_0_80px_#3E00CF]"
          style={{
            clipPath:
              "polygon(0 25%, 5% 0, 100% 0, 100% 80%, 85% 100%, 55% 100%, 45% 85%, 0 85%)",
          }}
        >
            <p className="text-[clamp(0.875rem,1.5vw,1.375rem)] font-semibold leading-relaxed text-[#EDEBFF] max-w-[640px]">
            &ldquo;Wisuda April HMIF ITB 2026 sebagai wadah perayaan yang berkesan
            untuk wisudawan, wadah apresiasi dari massa untuk wisudawan,
            serta wadah pengembangan bagi panitianya&rdquo;
          </p>
        </div>
      </div>

      {/* MISI */}
      <div className="relative w-full max-w-[600px] md:max-w-[780px] self-end">
        <div className="absolute -top-[30px] md:-top-[36px] right-0 z-20 w-[70%] md:w-[68%] lg:w-[65%]">
          <div className="relative w-full">
            <Image
              src="/Vector-kuning-kanan.webp"
              alt=""
              width={637}
              height={106}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-10 pb-2">
              <h2 className="font-rajdhani text-[clamp(1.875rem,5vw,2.8rem)] font-semibold leading-none text-[#3E00CF]">
                Misi
              </h2>
            </div>
          </div>
        </div>

        <div
          className="bg-[#3E00CF] px-6 md:px-14 pt-12 md:pt-16 pb-10 md:pb-14 shadow-[0_0_80px_#3E00CF] hover:shadow-[0_0_120px_#41F9FF] transition-all duration-300"
          style={{
            clipPath:
              "polygon(100% 25%, 95% 0, 0 0, 0 80%, 15% 100%, 45% 100%, 55% 85%, 100% 85%)",
          }}
        >
            <ol className="list-decimal pl-5 md:pl-7 space-y-3 md:space-y-5 text-[clamp(0.875rem,1.5vw,1.375rem)] font-semibold leading-relaxed text-[#EDEBFF]">
            <li>Menciptakan perayaan yang bermakna bagi wisudawan</li>
            <li>
              Mewadahi warga HMIF ITB dalam memberikan apresiasi terhadap
              wisudawan
            </li>
            <li>
              Menciptakan lingkungan kepanitiaan yang inklusif dan kolaboratif
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
