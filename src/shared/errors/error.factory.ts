import type { HttpStatusCode } from "shared/globals"
import type { Url } from "url"

type Details = {
  endpoint?: Url
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

export const factoryError =
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
