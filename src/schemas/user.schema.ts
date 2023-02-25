import { z } from "zod"

const CreateUserSchema = z.object({
  username: z.string().min(3).max(20),
  age: z.number().min(14).max(130),
})

type CreateUser = Readonly<z.infer<typeof CreateUserSchema>>

export { CreateUserSchema }
export type { CreateUser }
