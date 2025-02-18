import type { Tuple } from '../../../../../../src/lib/prelude.js'

interface E {
  a: string | undefined
}

interface Context {
  as: string[]
}

type Add<C extends Context, $Es extends E[]> = {
  [_ in keyof C]: _ extends 'as'
    ? [...C['as'], ...{ [_ in keyof $Es]: $Es[_]['a'] extends undefined ? never : $Es[_]['a'] }[number][]]
    : C[_]
}

type A = Add<{ as: [] }, [{ a: undefined }, { a: 'a' }, { a: 'b' }]>
