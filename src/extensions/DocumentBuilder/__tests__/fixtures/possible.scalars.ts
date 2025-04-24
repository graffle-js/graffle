import { Graffle } from '../../../../entrypoints/index.js'

export const Date = Graffle.Scalars.create('DateTime', {
  decode: (value: string) => new globalThis.Date(value),
  encode: (value: Date) => value.toISOString(),
})
