import { envSchema } from "./env.schema"
import { formatErrors } from "./formatErrors"

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(_env.error.format())
  )
  throw new Error("Invalid environment variables")
}

export const env = { ..._env.data }
