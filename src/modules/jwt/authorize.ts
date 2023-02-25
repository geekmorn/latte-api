import { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken"

import { verify, validateAuthHeader, initialMeta } from "modules/jwt"
import {
  ApiError,
  make500Error,
  makeJWTExpiredError,
  makeJWTValidationError,
} from "shared/errors"

import type { AuthHeader, Bearer, VerifiedJWT } from "modules/jwt"

function parseToken(authHeader: string): AuthHeader {
  const [authType, token] = authHeader.split(" ")
  const isValidAuth = validateAuthHeader(authType, token)
  if (!isValidAuth) throw makeJWTValidationError(initialMeta)

  return [authType as Bearer, token]
}

export async function auth(
  authHeader: string | undefined
): Promise<VerifiedJWT> {
  const initialState = {
    data: null,
    error: null,
    status: "success",
  } satisfies VerifiedJWT

  try {
    if (!authHeader) throw makeJWTValidationError(initialMeta)
    const [_, token] = parseToken(authHeader)
    const data = await verify(token)
    return { ...initialState, data, status: "success" }
  } catch (error) {
    if (error instanceof ApiError) {
      return { ...initialState, error, status: "failure" }
    }
    if (error instanceof TokenExpiredError) {
      return {
        ...initialState,
        error: makeJWTExpiredError(initialMeta),
        status: "failure",
      }
    } else if (error instanceof JsonWebTokenError) {
      return {
        ...initialState,
        error: makeJWTValidationError({ ...initialMeta, stack: error.stack }),
        status: "failure",
      }
    } else {
      return {
        ...initialState,
        error: make500Error(initialMeta),
        status: "failure",
      }
    }
  }
}
