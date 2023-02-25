import { Request, Response, NextFunction } from "express"
import { prisma } from "db"

import { isNil, isNullable } from "shared/utils"
import { HttpStatusCode } from "shared/globals"
import { auth } from "modules/jwt"
import { make404Error, make500Error } from "shared"

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization
  const { status, data, error } = await auth(authHeader)

  if (status === "failure") return make500Error({ stack: error?.stack })
  else if (status === "success" && !isNullable(data)) {
    const user = await prisma.user.findUnique({
      where: { id: data.sub },
    })
    if (isNullable(user)) {
      return make404Error()
    }
    req.body.user = user

    return next()
  }
}
