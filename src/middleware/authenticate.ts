import { Request, Response, NextFunction } from "express"
import { getJwtData } from "modules/jwt"
import { prisma } from "db"

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization
  const { data, err } = await getJwtData(authHeader)

  if (err) {
    return res.status(err.status).json({ message: err.message })
  }
  const user = await prisma.user.findUnique({
    where: { id: data?.sub },
  })
  if (user === null) {
    return res.json({ mes: "No user found" })
  } else {
    req.body.user = user
  }
  return next()
}
