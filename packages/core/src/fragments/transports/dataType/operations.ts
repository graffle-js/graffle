import { Obj } from '@wollybeard/kit'
import { type Data, TypeSymbol } from './data.js'

export const is: (value: any) => value is Data = Obj.hasSymbolLikeWith(TypeSymbol, true) as any
