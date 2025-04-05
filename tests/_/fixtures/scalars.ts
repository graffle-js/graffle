import { Graffle } from '../../../src/entrypoints/index.js'

export const DateScalar = Graffle.Scalars.create(`Date`, {
  encode: (value: globalThis.Date) => value.toISOString(),
  decode: (value: string) => new globalThis.Date(value),
})

export const FooScalar = Graffle.Scalars.create(`Foo`, {
  encode: (value) => String(value),
  decode: (value) => value,
})

export const AScalar = Graffle.Scalars.create(`A`, {
  decode: (value: string) => BigInt(value),
  encode: (value: bigint) => value.toString(),
})
export type AScalar = typeof AScalar

export const BScalar = Graffle.Scalars.create(`B`, {
  decode: (value: string) => new Date(value),
  encode: (value: Date) => value.toISOString(),
})
export type BScalar = typeof BScalar
