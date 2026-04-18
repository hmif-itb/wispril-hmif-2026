import { HydrateClient } from "~/trpc/server";

export default function VisiMisiPage() {
  return (
    <HydrateClient>
      <main className="min-h-screen w-full px-6 md:px-12 lg:px-20 py-24 flex flex-col justify-center gap-16 md:gap-24 bg-[#141115] text-white font-urbanist overflow-hidden">
        
        <div className="relative w-full max-w-[850px] xl:max-w-[900px] self-start">
          
          <div
            className="absolute -top-10 md:-top-14 left-0 w-[90%] md:w-[85%] lg:w-[780px] h-[90px] md:h-[120px] bg-[#EAEA00] z-20 flex items-center pl-8 md:pl-12 shadow-[0_0_40px_#41F9FF]"
            style={{
              clipPath:
                "polygon(0 0, 85% 0, 100% 50%, 100% 85%, 90% 100%, 40% 100%, 35% 80%, 10% 80%, 0 50%)",
            }}
          >
            <h2 className="font-rajdhani text-4xl md:text-[45px] lg:text-[53px] font-semibold leading-[1] tracking-normal text-[#3E00CF]">
              Visi
            </h2>
          </div>

          <div
            className="bg-[#3E00CF] px-8 md:px-16 pt-24 pb-12 md:py-20 shadow-[0_0_80px_#3E00CF] lg:shadow-[0_0_120px_#3E00CF]"
            style={{
              clipPath:
                "polygon(0 25%, 5% 0, 100% 0, 100% 80%, 85% 100%, 55% 100%, 45% 85%, 0 85%)",
            }}
          >
            <p className="text-xl md:text-[26px] lg:text-[32px] font-semibold leading-[1.4] tracking-normal text-[#EDEBFF] w-full max-w-[700px]">
              “Wisuda April HMIF ITB 2026 sebagai wadah perayaan yang berkesan
              untuk wisudawan, wadah apresiasi dari massa untuk wisudawan,
              serta wadah pengembangan bagi panitianya”
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-[850px] xl:max-w-[900px] self-end mt-12 md:mt-0">
          
          <div
            className="absolute -top-10 md:-top-12 right-0 w-[90%] md:w-[85%] lg:w-[650px] h-[90px] md:h-[110px] bg-[#EAEA00] z-20 flex items-center justify-end pr-8 md:pr-12 shadow-[0_0_40px_#41F9FF]"
            style={{
              clipPath:
                "polygon(100% 0, 15% 0, 0 50%, 0 85%, 10% 100%, 60% 100%, 65% 80%, 90% 80%, 100% 50%)",
            }}>
            <h2 className="font-rajdhani text-4xl md:text-[45px] lg:text-[53px] font-semibold leading-[1] tracking-normal text-[#3E00CF]">
              Misi
            </h2>
          </div>

          <div
            className="bg-[#3E00CF] px-8 md:px-16 pt-24 pb-12 md:py-20 shadow-[0_0_80px_#3E00CF] lg:shadow-[0_0_120px_#3E00CF] hover:shadow-[0_0_120px_#41F9FF] lg:hover:shadow-[0_0_160px_#41F9FF] transition-all duration-300"
            style={{
              clipPath:
                "polygon(100% 25%, 95% 0, 0 0, 0 80%, 15% 100%, 45% 100%, 55% 85%, 100% 85%)",
            }}>
            <ol className="list-decimal pl-6 md:pl-8 space-y-4 md:space-y-6 text-xl md:text-[26px] lg:text-[32px] font-semibold leading-[1.4] tracking-normal text-[#EDEBFF]">
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

      </main>
    </HydrateClient>
  );
}