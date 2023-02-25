import type { JwtPayload } from "jsonwebtoken"
import type { ApiError } from "shared/errors"

type Bearer = "Bearer"

type AuthHeader = Readonly<[Bearer, string]>

type Success<D> = {
  data: D | null
  error: null
  status: "success"
}

type Failure<E> = {
  error: E | null
  data: null
  status: "failure"
}

type Result<TData, TError = Error> = Success<TData> | Failure<TError>

type VerifiedJWT = Result<JwtPayload, ApiError>

export type { Bearer, AuthHeader, Result, Success, Failure, VerifiedJWT }
