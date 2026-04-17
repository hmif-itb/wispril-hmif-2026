import { HydrateClient } from "~/trpc/server";

export default function VisiMisiPage() {
  return (
    <HydrateClient>
      <main className="min-h-screen px-10 py-24 flex flex-col justify-between bg-[#141115] text-white font-urbanist">

        {/* V I S I \ */}
        <div className="relative w-[900px]">

          {/* KUNING */}
          <div
            className="absolute -top-14 left-0 w-[780px] h-[120px] bg-[#EAEA00] z-20 flex items-center pl-12 shadow-[0_0_40px_#41F9FF]"
            style={{
              clipPath:
                "polygon(0 0, 85% 0, 100% 50%, 100% 85%, 90% 100%, 40% 100%, 35% 80%, 10% 80%, 0 50%)",
            }}
          >
            <h2 className="font-rajdhani text-[53px] font-semibold leading-[1] tracking-normal text-[#3E00CF]">
              Visi
            </h2>
          </div>

          {/* UNGU */}
          <div
            className="bg-[#3E00CF] px-16 py-20 shadow-[0_0_120px_#3E00CF]"
            style={{
              clipPath:
                "polygon(0 25%, 5% 0, 100% 0, 100% 80%, 85% 100%, 55% 100%, 45% 85%, 0 85%)",
            }}
          >
            <p className="text-[32px] font-semibold leading-[1.3] tracking-normal text-[#EDEBFF] max-w-[700px]">
              “Wisuda April HMIF ITB 2026 sebagai wadah perayaan yang berkesan
              untuk wisudawan, wadah apresiasi dari massa untuk wisudawan,
              serta wadah pengembangan bagi panitianya”
            </p>
          </div>
        </div>

        {/* MISI */}
        <div className="relative w-[900px] ml-auto">

          {/* KUNING */}
          <div
            className="absolute -top-12 right-0 w-[650px] h-[110px] bg-[#EAEA00] z-20 flex items-center justify-end pr-12 shadow-[0_0_40px_#41F9FF]"
            style={{
              clipPath:
                "polygon(100% 0, 15% 0, 0 50%, 0 85%, 10% 100%, 60% 100%, 65% 80%, 90% 80%, 100% 50%)",
            }}
          >
            <h2 className="font-rajdhani text-[53px] font-semibold leading-[1] tracking-normal text-[#3E00CF]">
              Misi
            </h2>
          </div>

          {/* UNGU  */}
          <div
            className="bg-[#3E00CF] px-16 py-20 shadow-[0_0_120px_#3E00CF] hover:shadow-[0_0_160px_#41F9FF] transition-all duration-300"
            style={{
              clipPath:
                "polygon(100% 25%, 95% 0, 0 0, 0 80%, 15% 100%, 45% 100%, 55% 85%, 100% 85%)",
            }}
          >
            <ol className="list-decimal pl-8 space-y-6 text-[32px] font-semibold leading-[1.3] tracking-normal text-[#EDEBFF]">
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