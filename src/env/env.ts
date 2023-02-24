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

class DataBaseConfig {
  public CONNECTOR = "postgresql"
}

process.env.DB_URL = ""

class AuthConfig {
  public ACCESS_TOKEN_EXPIRATION = 86400 as const
  public REFRESH_TOKEN_EXPIRATION = 604800 as const
}

const authConfig = new AuthConfig()
const config = { ...authConfig, ...env }
