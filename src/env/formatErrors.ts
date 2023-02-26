import { z } from "zod"

const formatErrors = (
  errors: z.ZodFormattedError<Map<string, string>, string>
) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && "_errors" in value)
        return `${name}: ${value._errors.join(", ")}\n`
    })
    .filter(Boolean)

export { formatErrors }
