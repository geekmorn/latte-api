import {
  HINT_500,
  HINT_404,
  HINT_400,
  HINT_JWT_INVALID,
  HINT_JWT_EXPIRED,
  makeError,
} from "shared/errors"

import { HttpStatusCode } from "shared"

// prettier-ignore
export const makeInternalServerError = makeError
  ("Internal server error occurred")
  (HttpStatusCode.INTERNAL_SERVER_ERROR)
  (HINT_500)

// prettier-ignore
export const makeNotFoundError = makeError
  ("Requested resource could not be found")
  (HttpStatusCode.NOT_FOUND)
  (HINT_404)

// prettier-ignore
export const makeBadRequestError = makeError
  ("Bad request - request validation failed")
  (HttpStatusCode.BAD_REQUEST)
  (HINT_400)

// prettier-ignore
export const makeJWTValidationError = makeError
  ("JWT Error. Token invalid")
  (HttpStatusCode.UNAUTHORIZED)
  (HINT_JWT_INVALID)

// prettier-ignore
export const makeJWTExpiredError = makeError
  ("JWT Error. Token expired")
  (HttpStatusCode.UNAUTHORIZED)
  (HINT_JWT_EXPIRED)
