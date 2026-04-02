"use client";

import { useRouter } from "next/navigation";
import { authClient } from "~/server/better-auth/client";

export function SignInButton() {
  const router = useRouter();

  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <button
      className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      onClick={handleSignIn}
    >
      Sign in with Google
    </button>
  );
}

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.refresh();
  };

  return (
    <button
      className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      onClick={handleSignOut}
    >
      Sign out
    </button>
  );
}
