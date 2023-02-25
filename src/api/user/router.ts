import { Request, Response, Router } from "express"
import { prisma } from "db"
import { validate } from "middleware"
import { CreateUser } from "schemas"
import { http404 } from "shared"

export const router = Router()
const prefix = "/users" as const

router.get(prefix, async (req, res) => {
  const resource = `${req.protocol}://${req.get("host")}`
  return http404(res, { url: resource, resource: req.originalUrl })
})

router.post(
  prefix,
  validate(CreateUser),
  async (req: Request, res: Response) => {
    const user = await prisma.user.create({
      data: req.body,
    })
    return res.json({ ...user })
  }
)
