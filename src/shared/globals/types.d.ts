import { Query } from "express-serve-static-core"

declare module "express" {
  export interface TRequest<B, Q extends Query = {}> extends Express.Request {
    body: B
    query: Q
  }
}
