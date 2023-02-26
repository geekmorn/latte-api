export { router as authRouter } from "./auth.router"
import { Request, Response } from "express"

type Options = {
  req: Request
  res: Response
}

class HttpResponses {
  private options: Options

  r200() {
    console.log(this.options.req)
  }
  r404() {
    return this.options.res
  }
}

interface IHtttpResponder {
  http: HttpResponses
  options: Options
}

class HtttpResponder implements IHtttpResponder {
  public http: HttpResponses
  private _options: Options

  public get options(): Options {
    return this._options
  }

  public set options(value: Options) {
    this._options = value
  }

  constructor() {
    this.http = new HttpResponses()
  }

  public ok() {
    this.http.r200.call({ options: this.options })
  }

  // public intercept(options: Options) {
  //   this.http.options = options
  // }
}

const responder = new HtttpResponder()
// // responder.intercept({ req: "saf", res: "wqf" })
// responder.options = { req: { body: {} }, res: "res" }
// responder.ok()
// responder.options = { req: "reqas", res: "res" }
// responder.ok()
// responder.ok.call({ options: { req: "req", res: "res" } })
// const binded: () => void = responder.ok.bind({
//   options: { req: "req", res: "res" },
// })
// console.log(binded())
// const called: string = responder.ok.call({
//   options: { req: "req", res: "res" },
// })
// console.log(responder.http.http404())
