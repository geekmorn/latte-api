import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import express from "express"
import cors from "cors"
import emoji from "node-emoji"

import { env } from "env"
import { userRouter, authRouter } from "api"
import type { Server } from "http"

type Bootstrap = () => Server

const START_ICON = emoji.get("tada") // 🎉'
const START_MESSAGE = `${START_ICON} App started. Listening on http://localhost:${env.APP_PORT}`

const logStartMessage = (): void => console.log(START_MESSAGE)

const bootstrap: Bootstrap = () => {
  const app = express()

  app.use(express.json())
  app.use(cors())
  app.use("/", userRouter)
  app.use("/", authRouter)

  // Add everything you need below:
  // ...

  return app.listen(env.APP_PORT, logStartMessage)
}

bootstrap()
