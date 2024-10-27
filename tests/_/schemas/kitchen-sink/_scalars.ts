import { Graffle } from '../../../../src/entrypoints/main.js'

export const Date = Graffle.Scalars.create(`Date`, {
  encode: (value: globalThis.Date) => {
    console.log(value)
    return value.toISOString()
  },
  decode: (value: string) => new globalThis.Date(value),
})
