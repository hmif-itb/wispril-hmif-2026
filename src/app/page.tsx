import LandingSection from "./_components/sections/landing-section";
import VisiMisiSection from "./_components/sections/visi-misi-section";
import WisnightSection from "./_components/sections/wisnight-section";
import ArakArakanSection from "./_components/sections/arak-arakan-section";
import SponsorsSection from "./_components/sections/sponsors-section";

export default async function Home() {
  return (
    <main className="w-full bg-[#141115]">
      <LandingSection />
      <VisiMisiSection />
      <WisnightSection />
      <ArakArakanSection />
      <SponsorsSection />
    </main>
  );
}