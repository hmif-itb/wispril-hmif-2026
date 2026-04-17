import { HydrateClient } from "~/trpc/server";
import WisnightCarousel from "../_components/wisnightcaraousel";

export default function WisnightPage() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-start pt-24">
        <div className="container flex flex-col items-center justify-start gap-8 px-4 py-16 max-w-3xl">
            <WisnightCarousel />
        </div>
      </main>
    </HydrateClient>
  );
}
