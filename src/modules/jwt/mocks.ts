import type { Meta } from "shared/errors"

// Dummy endpoint metadata
const url = "http://" + "domainName" + ".com" + "/api" + "/auth"
const resource = "Authorization" as const
const initialMeta: Meta = { url, resource }

export { url, resource, initialMeta }
