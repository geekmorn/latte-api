import { Response } from "express"
import { SUPPORT_EMAIL, HttpStatusCode } from "shared"
import { ApiError, Details } from "./error.service"

const throw500Error = (details?: Details, message?: string) =>
  new ApiError({
    status: HttpStatusCode.INTERNAL_SERVER_ERROR,
    message: message ?? "Internal server error",
    details,
    suggestions: `Our tech team has been notified of the issue and is working to resolve it. Please retry request later. If the issue persists, please contact tech support at ${SUPPORT_EMAIL}`,
  })

const throw404Error = (details?: Details, message?: string) =>
  new ApiError({
    status: HttpStatusCode.NOT_FOUND,
    message: message ?? "Entity has not been found",
    details,
    suggestions: `The resource (${details?.resource}) you requested does not exist. Please double-check the spelling of the endpoint you are trying to reach.`,
  })

const throwInvalidTokenError = (details?: Details, message?: string) =>
  new ApiError({
    status: HttpStatusCode.UNAUTHORIZED,
    message: message ?? "Invalid token provided",
    details,
    suggestions: `Your are not authorized since your token is invalid. You may need to obtain an API key or access token from our dev team or contact tech support at ${SUPPORT_EMAIL}`,
  })

const throwTokenExpiredError = (details?: Details, message?: string) =>
  new ApiError({
    status: HttpStatusCode.UNAUTHORIZED,
    message: message ?? "Token has been expired",
    details,
    suggestions: `Your authorization token expired. You may need to generate an API key or access token from our dev team or contact tech support at ${SUPPORT_EMAIL}`,
  })

const http404 = (res: Response, details?: Details, message?: string) => {
  const test = new ApiError({
    status: HttpStatusCode.NOT_FOUND,
    message: message ?? "Entity has not been found",
    details,
    suggestions: `The resource (${details?.resource}) you requested does not exist. Please double-check the spelling of the endpoint you are trying to reach.`,
  })
  return res.status(404).json(test.options)
}

export {
  throw500Error,
  throw404Error,
  http404,
  throwInvalidTokenError,
  throwTokenExpiredError,
}
