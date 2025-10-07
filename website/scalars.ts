import { Graffle } from 'graffle'

export const Date = Graffle.Scalars.create('Date', {
  decode: (value: string) => new globalThis.Date(value),
  encode: (value: Date) => value.toISOString(),
})
