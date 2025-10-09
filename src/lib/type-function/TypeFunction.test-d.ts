import { Ts } from '@wollybeard/kit'
import type { TypeFunction } from './$.js'

interface a extends TypeFunction {
  // @ts-expect-error
  return: `${this['params']}a`
}

interface b extends TypeFunction {
  // @ts-expect-error
  return: `${this['params']}b`
}

interface c extends TypeFunction {
  // @ts-expect-error
  return: `${this['params']}c`
}

// dprint-ignore
type _ = Ts.Test.Cases<
  Ts.Test.exact<TypeFunction.CallPipeline<[a, b, c], ''> , 'abc'>
>
