import { type Data, TypeSymbol } from './data.js'

export const is = (value: any): value is Data => {
  return typeof value === `object` && value !== null && value[TypeSymbol] === true
}
