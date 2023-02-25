import { SUPPORT_EMAIL } from "shared/globals"

const SUPPORT_MESSAGE = `Retry later. If the issue persists, contact tech support at ${SUPPORT_EMAIL}`
const HINT_500 = `Our team has been notified of the issue and is working to resolve it ASAP. ${SUPPORT_MESSAGE}`
const HINT_404 = `Double-check the spelling of the endpoint you are trying to reach. ${SUPPORT_MESSAGE}`
const HINT_JWT_INVALID = `Your are not authorized since your token is invalid. You may need to obtain an API key or access token from our dev team or contact tech support at ${SUPPORT_EMAIL}`
const HINT_JWT_EXPIRED = `Your authorization token expired. You may need to generate an API key or access token from our dev team or contact tech support at ${SUPPORT_EMAIL}`

export {
  SUPPORT_MESSAGE,
  HINT_500,
  HINT_404,
  HINT_JWT_INVALID,
  HINT_JWT_EXPIRED,
}
