import { User } from "@prisma/client"
import { Response, NextFunction } from "express"

export type AuthRequest = TypedRequest<{ user: Readonly<User> }>

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  return next()
}
