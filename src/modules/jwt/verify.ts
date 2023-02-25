import { env } from "env"
import jwt, { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken"
import { JwtPayload } from "./types"
import { JWT_REGEX, AUTH_TYPE } from "shared"

type Result = {
  data: JwtPayload | null
  err: IError | null
}

const verify = async (token: string): Promise<JwtPayload> =>
  await new Promise((resolve, reject) => {
    jwt.verify(token, env.JWT_SECRET, (err, decoded) => {
      if (err || !decoded || typeof decoded === "string") {
        reject(err)
      } else {
        resolve(decoded as JwtPayload)
      }
    })
  })

const validateToken = (authHeader: string): string | never => {
  const [authType, token] = authHeader.split(" ")

  const isBearer = authType.trim().toLocaleLowerCase() === AUTH_TYPE
  const isValid = isBearer && JWT_REGEX.test(token)

  if (!isValid) throw new JsonWebTokenError("Invalid token")
  return token
}

const respond = (options: Partial<Result>) => {
  return {
    data: options?.data ? options.data : null,
    err: options?.err ? options.err : null,
  }
}

const getJwtData = async (authHeader: string | undefined): Promise<Result> => {
  try {
    if (!authHeader) throw new JsonWebTokenError("Invalid token")
    const token = validateToken(authHeader)
    const data = await verify(token)
    return respond({ data })
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      return respond({ err: TOKEN_EXPIRED })
    } else if (err instanceof JsonWebTokenError) {
      return respond({ err: TOKEN_INVALID })
    } else {
      return respond({ err: SERVER_ERROR })
    }
  }
}

export { getJwtData }
