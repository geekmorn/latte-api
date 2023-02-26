import type { HttpStatusCode } from "shared"
import type { Url } from "url"

type Details = {
  endpoint?: string
  stackTrace?: Error["stack"]
}

const defaultDetails = {
  endpoint: undefined,
  stackTrace: new Error().stack,
} as const satisfies Details

export type ApiError = Error & {
  message: string
  status: HttpStatusCode
  hint?: string
  details?: Details
}

/* Custom HTTP Error factory */
export const makeError =
  (message: string) =>
  (status: HttpStatusCode) =>
  (hint = "") =>
  (details: Details = defaultDetails): ApiError => ({
    name: "ApiError",
    message,
    status,
    hint,
    details,
  })
