import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const wisnightRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.wisnightMedia.findMany({
      orderBy: { order: "asc" },
    });
  }),

  create: protectedProcedure
    .input(z.object({
      url: z.string().url(),
      type: z.enum(["IMAGE", "VIDEO"]),
      order: z.number().default(0),
    }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.wisnightMedia.create({
        data: input,
      });
    }),
});