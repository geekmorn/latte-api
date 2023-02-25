import { sign as _sign } from "jsonwebtoken"

import { env } from "env"
import { isNil } from "shared/utils"

import type { JwtPayload } from "jsonwebtoken"

export const sign = async (payload: JwtPayload): Promise<string> => {
  return await new Promise((resolve, reject) => {
    _sign(payload, env.JWT_SECRET, (err, token) => {
      if (err || isNil(token)) {
        reject(err)
      } else {
        resolve(token)
      }
    })
  })
}
