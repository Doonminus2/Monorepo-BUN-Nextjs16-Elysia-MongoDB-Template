import { Elysia } from "elysia";
import { prisma } from "../lib/prisma";

export const postsRouter = new Elysia({ prefix: "/posts" })
  .get("/", async () => {
    const posts = await prisma.post.findMany({
      include: { author: true },
      orderBy: { createdAt: "desc" },
    });
    return { ok: true, posts };
  });
