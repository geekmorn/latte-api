import {
  HINT_500,
  HINT_404,
  HINT_400,
  HINT_JWT_INVALID,
  HINT_JWT_EXPIRED,
  factoryError,
} from "shared/errors"

import { HttpStatusCode } from "shared/globals"

// prettier-ignore
export const createInternalServerError = factoryError
  ("Internal server error occurred")
  (HttpStatusCode.INTERNAL_SERVER_ERROR)
  (HINT_500)

// prettier-ignore
export const createNotFoundError = factoryError
  ("Requested resource could not be found")
  (HttpStatusCode.NOT_FOUND)
  (HINT_404)

// prettier-ignore
export const createBadRequestError = factoryError
  ("Bad request - request validation failed")
  (HttpStatusCode.BAD_REQUEST)
  (HINT_400)

// prettier-ignore
export const createJWTValidationError = factoryError
  ("JWT Error. Token invalid")
  (HttpStatusCode.UNAUTHORIZED)
  (HINT_JWT_INVALID)

// prettier-ignore
export const createJWTExpiredError = factoryError
  ("JWT Error. Token expired")
  (HttpStatusCode.UNAUTHORIZED)
  (HINT_JWT_EXPIRED)
