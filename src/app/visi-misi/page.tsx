import { HydrateClient } from "~/trpc/server";

export default function VisiMisiPage() {
  return (
    <HydrateClient>
      <main className="min-h-screen px-10 py-24 flex flex-col gap-32">

        {/* ===================== V I S I ===================== */}
        <div className="relative w-[900px]">

          {/* KUNING */}
          <div
            className="absolute -top-10 left-0 w-[600px] h-[90px] bg-[#EAEA00] z-20 flex items-center pl-10 shadow-[0_0_30px_rgba(234,234,0,0.6)]"
            style={{
              clipPath:
                "polygon(0 0, 92% 0, 100% 40%, 100% 80%, 90% 100%, 60% 100%, 55% 80%, 0 80%)",
            }}
          >
            <h2 className="text-[#3E00CF] text-4xl font-bold tracking-wide">
              Visi
            </h2>
          </div>

          {/* UNGU */}
          <div
            className="bg-gradient-to-r from-[#3E00CF] to-[#4c1d95] px-12 py-16 text-white shadow-[0_0_80px_rgba(62,0,207,0.9)] transition-all duration-300 hover:shadow-[0_0_120px_rgba(62,0,207,1)]"
            style={{
              clipPath:
                "polygon(0 20%, 5% 0, 100% 0, 100% 75%, 85% 100%, 60% 100%, 50% 85%, 0 85%)",
            }}
          >
            <p className="text-2xl leading-relaxed text-[#e0e0ff] max-w-[800px]">
              “Wisuda April HMIF ITB 2026 sebagai wadah perayaan yang berkesan
              untuk wisudawan, wadah apresiasi dari massa untuk wisudawan,
              serta wadah pengembangan bagi panitianya”
            </p>
          </div>
        </div>

        {/* ===================== M I S I ===================== */}
        <div className="relative w-[900px] ml-auto">

          {/* KUNING */}
          <div
            className="absolute -top-10 right-0 w-[600px] h-[90px] bg-[#EAEA00] z-20 flex items-center justify-end pr-10 shadow-[0_0_30px_rgba(234,234,0,0.6)]"
            style={{
              clipPath:
                "polygon(8% 0, 100% 0, 100% 80%, 100% 80%, 45% 80%, 40% 100%, 10% 100%, 0 40%)",
            }}
          >
            <h2 className="text-[#3E00CF] text-4xl font-bold tracking-wide">
              Misi
            </h2>
          </div>

          {/* UNGU */}
          <div
            className="bg-gradient-to-r from-[#3E00CF] to-[#4c1d95] px-12 py-16 text-white shadow-[0_0_80px_rgba(62,0,207,0.9)] transition-all duration-300 hover:shadow-[0_0_120px_rgba(62,0,207,1)]"
            style={{
              clipPath:
                "polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0 30%)",
            }}
          >
            <ol className="list-decimal pl-6 space-y-4 text-2xl text-[#e0e0ff]">
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