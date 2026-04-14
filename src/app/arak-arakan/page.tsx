import { HydrateClient } from "~/trpc/server";

export default function ArakArakanPage() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-start pt-24">
        <div className="container flex flex-col items-center justify-start gap-8 px-4 py-16 max-w-3xl">
            ini arak-arakan 
        </div>
      </main>
    </HydrateClient>
  );
}
