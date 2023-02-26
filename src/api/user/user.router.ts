import { User } from "@prisma/client"
import { Router, Response } from "express"
import { AuthRequest, authenticate } from "middleware"

export const router = Router()
const prefix = "/users" as const

router.get(
  prefix,
  authenticate,
  (req: AuthRequest, res: Response<{ asd: string }>) => {
    res.status(203).json({ asd: "123" })
  }
)
