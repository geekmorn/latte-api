import { Router, Response, Request, TRequest } from "express"

import { authorize } from "middleware"
import { auth, generateToken } from "modules/jwt"

export const router = Router()
const SUBJECT = "test subject"

router.get("/auth", async (req: Request, res: Response) => {
  const { accessToken, refreshToken } = await generateToken(SUBJECT)
  const { data, error, status } = await auth(req.headers.authorization)

  console.log(req.body.test)
  console.warn(accessToken, refreshToken)
  // res.send(accessToken)
})

router.get("/authorize", authorize, async (req: Request, res: Response) => {
  return res.send(req.body.user)
})
