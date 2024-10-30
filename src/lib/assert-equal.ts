import type { SimplifyDeep } from 'type-fest'

export type IsExtends<A, B> = [A] extends [B] ? true : false

export type IsEqual<A, B> = [A] extends [B] ? [B] extends [A] ? true : false : false

export type assertEqual<A, B> = IsEqual<A, B> extends true ? true : never

export const assertEqual = <A, B>(
  ..._: IsEqual<A, B> extends false ? [reason: {
      A: SimplifyDeep<A>
      B: SimplifyDeep<B>
    }]
    : []
) => undefined

/**
 * Is A extends B.
 * In other words, is A a subtype of B.
 * In other words, is B a supertype of A.
 */
export const assertExtends = <A, B>(
  ..._: IsExtends<A, B> extends false ? [reason: {
      A: SimplifyDeep<A>
      B: SimplifyDeep<B>
    }]
    : []
) => undefined

export const AssertTypeOf = <A, B = A>(
  _: B,
  ...__: IsEqual<A, B> extends false ? [reason: {
      A: SimplifyDeep<A>
      B: SimplifyDeep<B>
    }]
    : []
) => undefined
