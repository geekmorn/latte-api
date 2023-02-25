import { envSchema } from "./schema"
import { formatErrors } from "./formatErrors"

const _serverEnv = envSchema.safeParse(process.env)

if (_serverEnv.success === false) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(_serverEnv.error.format())
  )
  throw new Error("Invalid environment variables")
}

export const env = { ..._serverEnv.data }
