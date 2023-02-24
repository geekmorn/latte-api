import { JwtPayload as _JwtPayload } from "jsonwebtoken"

export type JwtPayload = Required<Pick<_JwtPayload, "iat" | "exp" | "sub">>
