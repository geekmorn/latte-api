import { Request, Response, Router } from "express"
import { prisma } from "db"
import { validate } from "middleware"
import { CreateUser } from "schemas"
import { throw404Error } from "shared"

export const router = Router()

router.get("/users", async (req, res) => {
  const users = await prisma.user.findMany()

  try {
    console.log("GET users")
  } catch (e: any) {
    throw404Error({
      url: "http://service/api/users",
      resource: "Users",
      stack: e?.stack,
    })
  }

  return res.send(users)
})

router.post(
  "/users",
  validate(CreateUser),
  async (req: Request, res: Response) => {
    const user = await prisma.user.create({
      data: req.body,
    })
    return res.json({ ...user })
  }
)
