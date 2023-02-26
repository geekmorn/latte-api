import { isNil } from "shared/utils"

interface IState<R, T> {
  readonly body: Readonly<R>
  payload: Readonly<T>
}

interface Configurator {
  status: number
}

class State<R, T> implements IState<R, T> {
  constructor(
    protected readonly _body: Readonly<R>,
    protected _payload: Readonly<T>
  ) {}

  public get body() {
    return this._body
  }

  public get payload() {
    return this._payload
  }
}

interface IInterceptor<R, T> extends Configurator {
  intercept(req: TypedRequest<R>, res: TypedResponse<T>): void
}

class Interceptor<R = unknown, T = unknown> {
  constructor(options?: Configurator, private _state?: State<R, T>) {}

  public intercept<R = unknown, T = unknown>(
    req: TypedRequest<R>,
    res: TypedResponse<T>
  ): void {}

  public respond(): void {}
}

/* Instances and modules exports */

const makeHttpClient = (configurator: Partial<Configurator>): Interceptor =>
  new Interceptor()

export const respond = (status: number): Interceptor =>
  makeHttpClient({ status })

/* Mocks */

type User = {
  name: string
  age: number
}
type ReadonlyUser = Readonly<User>

const user: ReadonlyUser = { name: "Name", age: 12 }
