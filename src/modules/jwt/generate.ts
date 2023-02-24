import { env } from "env"
import jwt from "jsonwebtoken"
import { JwtPayload } from "./types"

const sign = async (payload: JwtPayload): Promise<string> => {
  const secret = env.JWT_SECRET
  return await new Promise((resolve, reject) => {
    jwt.sign(payload, secret, (err, token) => {
      if (err || !token) {
        reject(err)
      } else {
        resolve(token)
      }
    })
  })
}

export const generateJwt = async (subject: string) => {
  const now = new Date()
  const iat = Math.floor(now.getTime() / 1000)
  const expAccess = iat + 10
  const expRefresh = iat + 60 * 60 * 24 * 7

  const accessToken = await sign({
    iat: iat,
    exp: expAccess,
    sub: subject,
  })
  const refreshToken = await sign({
    iat: iat,
    exp: expRefresh,
    sub: subject,
  })

  return {
    accessToken,
    refreshToken,
  }
}
