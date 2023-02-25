type Nil<V> = V | null | undefined

const isNil = (value: unknown): value is null | undefined =>
  value === null || typeof value === "undefined"

export { isNil }
export type { Nil }
