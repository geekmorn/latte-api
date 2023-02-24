import { Router, Response, Request } from "express"
import { Query } from "express-serve-static-core"
import { authenticate } from "middleware"
import { getJwtData, generateJwt } from "modules/jwt"

export const router = Router()

export type QueryParams = {
  [key: string]: undefined | string | string[]
}

export type Req<B, Q extends Query = QueryParams> = Request & {
  body: B
  query: Q
}

type ResponseBody = { test: string }

router.get("/auth", async (req: Req<ResponseBody>, res: Response) => {
  req.body.test
  const jwt = await generateJwt("1")
  res.send(jwt.accessToken)
})

router.get("/authc", authenticate, async (req: Request, res: Response) => {
  return res.send(req.body.user)
})
