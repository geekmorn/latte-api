import { z } from "zod"

const setPort = (envPort: number) => {
  if (envPort >= 0 && envPort <= 65535) {
    return envPort
  }
  return false
}

export const envSchema = z.object({
  JWT_SECRET: z.string(),
  APP_PORT: z.coerce.number().transform((v) => setPort(v) || 3000),
})
