import WisnightCarousel from "../wisnightcaraousel";

export default function WisnightSection() {
  return (
    <section
      id="wisnight"
      className="flex min-h-screen flex-col items-center justify-start bg-[#0D0D0D] pt-20 md:pt-24 text-white relative"
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="w-full max-w-6xl flex flex-col items-center gap-8 px-4 py-10 md:py-16">
        <WisnightCarousel />
      </div>
    </section>
  );
}
