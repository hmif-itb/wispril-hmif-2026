import Link from "next/link";

import { SignInButton, SignOutButton } from "~/app/_components/auth-buttons";
import { LatestPost } from "~/app/_components/post";
import { getSession } from "~/server/better-auth/server";
import { api, HydrateClient } from "~/trpc/server";
import { Rajdhani } from "next/font/google";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getSession();

  if (session) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          HMIF ITB 2026
        </div>
      </main>
    </HydrateClient>
  );
}
