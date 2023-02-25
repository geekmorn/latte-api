import {
  SORRY,
  FIX_IN_PROGRESS,
  RETRY,
  REVISE_ALL,
  USE_OTHER_METHODS,
  CHECK_PERMISSIONS,
  VERIFY_AUTH,
  ADJUST_OPTIONS,
} from "shared/errors"

// 5xx
const HINT_503 =
  `The API is shortly inaccessible due to the high traffic or maintenance. ${SORRY} ${FIX_IN_PROGRESS}` as const
const HINT_501 =
  `The requested resource is not implemented yet or has temporarily moved. ${RETRY}` as const
const HINT_500 =
  `An unexpected server error occurred. ${SORRY} ${REVISE_ALL}` as const

// 4xx
const HINT_405 =
  `The requested resource does not support the specified HTTP method. ${USE_OTHER_METHODS}` as const
const HINT_404 =
  `The requested resource was not found or does not exist. ${REVISE_ALL}` as const
const HINT_403 =
  `Access to the requested resource has been forbidden. ${CHECK_PERMISSIONS}` as const
const HINT_401 =
  `You are not authenticated to access this resource. ${VERIFY_AUTH}` as const
const HINT_400 =
  `The server was unable to proceed the call since the request validation failed. ${REVISE_ALL} ${ADJUST_OPTIONS}` as const

const HINT_JWT_INVALID =
  `Your authorization token is invalid. Obtain a new token and empty the cache and cookies.` as const
const HINT_JWT_EXPIRED =
  `Your authorization token has expired. Generate a new API key and token by signing in again.` as const

export {
  HINT_503,
  HINT_501,
  HINT_500,
  HINT_405,
  HINT_404,
  HINT_403,
  HINT_401,
  HINT_400,
  HINT_JWT_INVALID,
  HINT_JWT_EXPIRED,
}
