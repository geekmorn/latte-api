import { z } from "zod"

export const CreateUser = z.object({
  body: z.object({
    username: z.string(),
    age: z.number(),
  }),
})

export type CreateUser = z.infer<typeof CreateUser>
