import { raise } from "@packages/utils/typescript";
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
  schema: "./packages/repositories/db/schema.ts",
  out: "./migrations",
  dialect: "turso",
  dbCredentials: {
    url:
      process.env.TURSO_CONNECTION_URL ?? raise("missing TURSO_CONNECTION_URL"),
    authToken:
      process.env.TURSO_AUTH_TOKEN ?? raise("missing TURSO_AUTH_TOKEN"),
  },
});
