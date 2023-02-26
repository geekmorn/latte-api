import type { Response, Request as _Request } from "express"

type Request<T> = _Request<unknown, unknown, T>

interface IHttpResponder<RBody, Payload> {
  readonly req: Request<RBody>
  readonly res: Response<Payload>

  respond(status: number, payload: Payload): Response<Payload>
  use(req: Request<RBody>, res: Response<Payload>): void
  ok(): Response<Payload>
  notFound(): Response<Payload>
}

class HttpResponder<RBody, Payload> implements IHttpResponder<RBody, Payload> {
  private _req: Request<RBody>
  private _res: Response<Payload>

  public get req(): Request<RBody> {
    return this._req
  }
  public set req(value: Request<RBody>) {
    this._req = value
  }
  public get res(): Response<Payload> {
    return this._res
  }
  public set res(value: Response) {
    this._res = value
  }

  /* Implements encapsulated hidden interface of this.respond() */
  private preRespond(status: number, payload: Payload): Response<Payload> {
    return this.res.status(status).json(payload)
  }

  /* Implements public interface that can be used outside of the class */
  public respond(status: number, payload: Payload): Response<Payload> {
    return this.preRespond(status, payload)
  }

  public use(req: Request<RBody>, res: Response<Payload>): void {
    this.req = req
    this.res = res
  }

  public ok() {
    return this.respond(200, {} as any)
  }

  public notFound(): Response<Payload> {
    return this.respond(404, {} as any)
  }
}

export const responder = new HttpResponder()
