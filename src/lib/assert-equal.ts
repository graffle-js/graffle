import type { SimplifyDeep } from 'type-fest'

export type IsExtends<A, B> = [A] extends [B] ? true : false

// dprint-ignore
export type IsEqual<A, B> =
  [A] extends [B]
    ? [B] extends [A]
      ? [keyof A] extends [keyof B]
        ? [keyof B] extends [keyof A]
          ? true
          : false
        : false
      : false
    : false
type _______IsEqual = [
  IsFalse<IsEqual<string, 'a'>>,
  IsFalse<IsEqual<'a', string>>,
  IsFalse<IsEqual<{}, { a?: string }>>,
  IsFalse<IsEqual<never, 2>>,
  IsFalse<IsEqual<2, never>>,
  IsTrue<IsEqual<never, never>>,
]

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

export const assertType = <A, B = A>(
  _: B,
  ...__: IsEqual<A, B> extends false ? [reason: {
      A: SimplifyDeep<A>
      B: SimplifyDeep<B>
    }]
    : []
) => undefined

export type IsTrue<_ extends true> = true
export type IsFalse<_ extends false> = true
