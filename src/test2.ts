// import { isNil } from "shared/utils"

// interface IState<R, T> {
//   readonly body: Readonly<R>
//   payload: Readonly<T>
// }

// interface Configurator {
//   status: number
// }

// class State<R, T> implements IState<R, T> {
//   constructor(
//     protected readonly _body: Readonly<R>,
//     protected _payload: Readonly<T>
//   ) {}

//   public get body() {
//     return this._body
//   }

//   public get payload() {
//     return this._payload
//   }

//   public set payload(newPayloadw T) {
//     this._payload = newPayload
//   }
// }

// interface IInterceptor<R, T> extends Configurator {
//   intercept(req:TypedRequest<R>, res: TypedResponse<T> ): void
// }

// class Interceptor<R = unknown, T = unknown>  implements IInterceptor<R, T> {
//   constructor(options?: Configurator, private _state?: State<R, T>) {
//     super()
//   }

//   public intercept<R = unknown, T = unknown>(
//     req: TypedRequest<R>,
//     res: TypedResponse<T>
//   ): void {}

//   public respond(): void {}
// }

// /* Instances and modules exports */

// const makeHttpClient = (configurator: Partial<Configurator>): HttpClient =>
//   new HttpClient()

// export const respond = (status: number): HttpClient =>
//   makeHttpClient({ status })

// /* Mocks */

// type User = {
//   name: string
//   age: number
// }
// type ReadonlyUser = Readonly<User>

// const user: ReadonlyUser = { name: "Name", age: 12 }
export {}
