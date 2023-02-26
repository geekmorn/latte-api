import { Router, Response, Request } from "express"

export const router = Router()
const prefix = "/auth" as const

router.get(prefix, async (req: Request, res: Response) => {
  res.json({})
})
