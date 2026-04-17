import { HydrateClient } from "~/trpc/server";
import ArakArakanCarousel from "~/app/_components/arakarakancaraousel";

export default function ArakArakanPage() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-start bg-[#0D0D0D] pt-24 text-white">
        <div className="container flex flex-col items-center justify-start gap-8 px-4 py-16">
          <ArakArakanCarousel />
        </div>
      </main>
    </HydrateClient>
  );
}
