type Nullable<V> = V | null

const isNullable = (value: unknown): value is null => value === null

export { isNullable }
export type { Nullable }
