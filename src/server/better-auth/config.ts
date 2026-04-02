import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { env } from "~/env";
import { db } from "~/server/db";

const authBaseUrl = env.BETTER_AUTH_URL.replace(/\/$/, "");

export const auth = betterAuth({
  baseURL: authBaseUrl,
  trustedOrigins: [authBaseUrl],
  account: {
    storeStateStrategy: "cookie",
  },
  database: prismaAdapter(db, {
    provider: "postgresql", // or "sqlite" or "mysql"
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: env.BETTER_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.BETTER_AUTH_GOOGLE_CLIENT_SECRET,
      redirectURI: `${authBaseUrl}/api/auth/callback/google`,
    },
    ...(env.BETTER_AUTH_GITHUB_CLIENT_ID &&
    env.BETTER_AUTH_GITHUB_CLIENT_SECRET
      ? {
          github: {
            clientId: env.BETTER_AUTH_GITHUB_CLIENT_ID,
            clientSecret: env.BETTER_AUTH_GITHUB_CLIENT_SECRET,
            redirectURI: `${authBaseUrl}/api/auth/callback/github`,
          },
        }
      : {}),
  },
});

export type Session = typeof auth.$Infer.Session;
