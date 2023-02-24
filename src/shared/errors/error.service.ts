type Details = {
  url?: string
  resource?: string
  stack?: Error["stack"] // Stack trace of the Error. Pass catched Error.stack as an argument.
}

type IErrorOptions = {
  statusCode: number
  message: string
  details?: Details
  suggestions?: string
}

interface IError {
  options: IErrorOptions
}

class ApiError implements IError {
  constructor(public options: IErrorOptions) {}
}

export { ApiError }
export type { Details }
