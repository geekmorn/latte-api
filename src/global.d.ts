import type { Request, Response } from "express"
import type { Query } from "express-serve-static-core"

declare global {
  interface TypedRequest<B, Q extends Query = {}> extends Request {
    query: Partial<Q>
    body: B
  }
  interface TypedResponse<ResBody> extends Response {
    json: <T extends ResBody>(body?: T) => this
    send: <T extends ResBody>(body?: T) => this
  }
}

export {}
