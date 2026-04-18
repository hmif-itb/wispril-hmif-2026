import Image from "next/image";

export default function SponsorsSection() {
  const sponsors = [
    {
      name: "GPC",
      image: "/gpc.webp",
    },
    {
      name: "Kurnia",
      image: "/kurnia.webp",
    },
  ];

  return (
    <section
      id="sponsors"
      className="flex min-h-screen flex-col items-center justify-start bg-[#0D0D0D] pt-20 md:pt-24 text-white relative"
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="w-full max-w-6xl flex flex-col items-center gap-8 px-4 py-10 md:py-16">
        {/* Title with Vector */}
        <div className="w-[75%] sm:w-[70%] md:w-[60%] lg:w-[55%]">
          <div className="relative w-full">
            <Image
              src="/Vector-kuning-kanan.webp"
              alt=""
              width={637}
              height={106}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 h-full flex items-center justify-center">
              <h2 className="font-rajdhani text-[clamp(1.25rem,3vw,2.375rem)] font-semibold leading-none text-[#3e00cf]">
                Our Sponsors
              </h2>
            </div>
          </div>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 w-full items-center justify-center px-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center p-6 md:p-10"
            >
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={300}
                height={200}
                className="w-full h-auto max-w-[250px] md:max-w-[320px] object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
