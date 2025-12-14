import { Elysia } from "elysia";
import { postsRouter } from "./routes/posts";

export const app = new Elysia()
  .group("/api", (api) => api.use(postsRouter))
  .get("/health", () => ({ ok: true }));
 
  
