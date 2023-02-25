import { sign } from "modules/jwt"

export const generateToken = async (subject: string) => {
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
