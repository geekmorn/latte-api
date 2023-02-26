import { NextFunction, Request, Response } from "express"
import { ZodError, ZodSchema } from "zod"

export const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (err) {
      const zodError = err as ZodError
      res.status(400).send(zodError.errors)
    }
  }
