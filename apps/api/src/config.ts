export const config = {
  port: Number(Bun.env.PORT ?? 3001),
  databaseUrl: Bun.env.DATABASE_URL,
};

if (!config.databaseUrl) throw new Error("Missing DATABASE_URL");
