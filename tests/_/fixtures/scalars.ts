import { Graffle } from '../../../src/entrypoints/main.js'

export const DateScalar = Graffle.Scalars.create(`Date`, {
  encode: (value: globalThis.Date) => value.toISOString(),
  decode: (value: string) => new globalThis.Date(value),
})
