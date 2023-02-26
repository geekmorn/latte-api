import { responder } from "modules/http"
import { Request, Response, NextFunction } from "express"

export const httpInterceptor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  responder.use(req, res)
  return next()
}
