import { hasSymbolProperty } from '#src/lib/symbol.js'
import { type Data, TypeSymbol } from './data.js'

export const is = (value: any): value is Data => {
  return hasSymbolProperty(value, TypeSymbol, true, `Transport`)
}
