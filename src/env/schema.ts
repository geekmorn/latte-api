import { z } from "zod"

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
  APP_PORT: z
    .string()
    .transform((envPort) => envPort || "3000")
    .refine((envPort) => {
      const portNumber = parseInt(envPort)
      return portNumber >= 0 && portNumber <= 65535
    }, "PORT must be a valid TCP port number"),
})
