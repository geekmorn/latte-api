type Meta = {
  url?: string
  resource?: string
  stack?: Error["stack"] // Error stack trace. Pass caught Error.stack as an argument.
}

interface IApiError {
  message: string
  statusCode: number
  meta?: Meta
  hint?: string
}

class ApiError extends Error implements IApiError {
  constructor(
    public message: string = "API error occurred",
    public statusCode: number,
    public meta?: Meta,
    public hint?: string
  ) {
    super(message)
  }
}

export { ApiError }
export type { Meta }
