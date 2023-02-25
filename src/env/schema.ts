import { z } from "zod"

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
  APP_PORT: z.string().optional().default("3000"),
})
