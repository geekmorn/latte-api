import { ApiError } from "shared/errors"
import { HttpStatusCode } from "shared/globals"
import {
  HINT_500,
  HINT_404,
  HINT_JWT_INVALID,
  HINT_JWT_EXPIRED,
} from "shared/errors"

import type { Meta } from "shared/errors"

function make500Error(
  meta?: Meta,
  message = "Internal server error",
  hint = HINT_500
): ApiError {
  return new ApiError(message, HttpStatusCode.INTERNAL_SERVER_ERROR, meta, hint)
}

function make404Error(
  meta?: Meta,
  message = "Resource has not been found",
  hint = HINT_404
): ApiError {
  return new ApiError(message, HttpStatusCode.NOT_FOUND, meta, hint)
}

function makeJWTValidationError(
  meta?: Meta,
  message = "Invalid token provided",
  hint = HINT_JWT_INVALID
): ApiError {
  return new ApiError(message, HttpStatusCode.UNAUTHORIZED, meta, hint)
}

function makeJWTExpiredError(
  meta?: Meta,
  message = "Authorization token has been expired",
  hint = HINT_JWT_EXPIRED
): ApiError {
  return new ApiError(message, HttpStatusCode.UNAUTHORIZED, meta, hint)
}

export {
  make500Error,
  make404Error,
  makeJWTValidationError,
  makeJWTExpiredError,
}
