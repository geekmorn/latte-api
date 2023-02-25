import { JWT_REGEX } from "shared"
import type { Bearer } from "modules/jwt"

const collator = new Intl.Collator(undefined, { sensitivity: "base" })

const isBearer = (
  authType: string,
  Bearer: Bearer = "Bearer"
): authType is Bearer => collator.compare(authType, Bearer) === 0

const isJWT = (token: string): boolean => JWT_REGEX.test(token)

function validateAuthHeader(authType: string, token: string): boolean {
  const isValidAuthType = isBearer(authType)
  const isValidJWT = isJWT(token)
  return isValidAuthType && isValidJWT
}

export { validateAuthHeader }
