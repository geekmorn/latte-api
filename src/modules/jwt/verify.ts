import { verify as _verify } from "jsonwebtoken"

import { env } from "env"
import { isNullable } from "shared/utils"
import { makeJWTValidationError } from "shared/errors"
import { initialMeta } from "modules/jwt"

import type { JwtPayload } from "jsonwebtoken"

export async function verify(token: string): Promise<JwtPayload> {
  return await new Promise((resolve, reject) => {
    _verify(token, env.JWT_SECRET, (e, decoded) => {
      if (e && isNullable(decoded)) {
        reject(makeJWTValidationError({ ...initialMeta, stack: e.stack }))
      } else if (typeof decoded === "string") {
        resolve(JSON.parse(decoded))
      } else if (typeof decoded === "undefined") {
        reject(
          makeJWTValidationError(initialMeta, "Authorization token is required")
        )
      } else {
        resolve(decoded)
      }
    })
  })
}
