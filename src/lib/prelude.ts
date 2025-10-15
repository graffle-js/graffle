import { type Null, Prom, Ts } from '@wollybeard/kit'
import type { HasRequiredKeys, IsAny, IsEmptyObject, IsNever, IsUnknown } from 'type-fest'

export type ExactNonEmpty<$Value, $Constraint> = IsEmptyObject<$Value> extends true ? never : Exact<$Value, $Constraint>
// dprint-ignore
export type Exact<$Value, $Constraint> =
  (
    $Value extends unknown  ? $Constraint extends $Value   ?  {} extends $Value    ?  $Constraint :
                                                                                      { [K in keyof $Value]: Exact<$Value[K], $Constraint[K]> } :
                                                              $Constraint :
                              never
  )
  | ($Value extends Ts.Narrowable ? $Value : never)

// dprint-ignore
// export type ExactObjectNonEmpty<$Value, $Constraint> =
//   (
//     $Value extends unknown  ? $Constraint extends $Value   ?  keyof $Value extends never  ? ({ 'TypeScript Error: You must supply at least one key.': true } & $Constraint)  :
//                                                                                             { [K in keyof $Value]: Exact<$Value[K], $Constraint[K]> } :
//                                                               $Constraint :
//                               never
//   )
//   | ($Value extends Narrowable ? $Value : never)

export type ValuesOrEmptyObject<T> = keyof T extends never ? {} : T[keyof T]

export type ExcludeNullAndUndefined<T> = Exclude<T, null | undefined>

export type SomeFunctionMaybeAsync = (...args: any[]) => Prom.Maybe<any>

export namespace Objekt {
  export type IsEmpty<T> = {} extends T ? true : false
}

// export const proxyGet = <$Target>(
//   target: $Target,
//   handler: (input: { property: string; path: string[] }) => unknown,
//   path: string[] = [],
// ): $Target => {
//   return new Proxy(target, {
//     get: (target: any, property: string, receiver: any) => {
//       const value = Reflect.get(target, property, receiver)

//       // TODO: special casing for private _ property should go away.
//       if (property === '_' && path.length === 0) {
//         return value
//       }

//       if (Rec.is(value)) {
//         return proxyGet(value, handler, [...path, property])
//       }

//       return handler({ property, path }) ?? Reflect.get(target, property, receiver)
//     },
//   })
// }

// export type SuffixKeyNames<$Suffix extends string, $Object extends object> = {
//   [$Key in keyof $Object & string as `${$Key}${$Suffix}`]: $Object[$Key]
// }

/**
 * Force intellisense to show the given union type expanded. E.g. given `Foo = A | B` then show `A | B` instead of `Foo`.
 */
export type UnionExpanded<$Union> = $Union

/**
 * Check if a type is a union (has multiple members).
 * Returns true if the type is a union, false otherwise.
 *
 * Uses UnionToIntersection: if a type equals its intersection form, it's not a union.
 * Wrapped in tuples to prevent distribution.
 */
// dprint-ignore
export type IsUnion<$Type> =
  [$Type] extends [never]
    ? false
    : [$Type] extends [Ts.Union.ToIntersection<$Type>]
      ? false
      : true

export const identityProxy = new Proxy({}, {
  get: () => (value: unknown) => value,
})

// export type IfExtendsElse<$Type, $Extends, $Else> = $Type extends $Extends ? $Type : $Else

// export type All<$Tuple extends [...boolean[]]> = $Tuple[number] extends true ? false : true

export type HasOptionalProperty<$Object extends object, $Property extends keyof $Object> = undefined extends
  $Object[$Property] ? false
  : true

export type Push<T extends any[], V> = [...T, V]

// dprint-ignore
export type UnionToTuple<$Union, L = Ts.Union.LastOf<$Union>, N = [$Union] extends [never] ? true : false> =
  true extends N
    ? []
    : Push<UnionToTuple<Exclude<$Union, L>>, L>

export type IsTupleMultiple<T> = T extends [unknown, unknown, ...unknown[]] ? true : false

// export type CountKeys<T> = keyof T extends never ? 0 : UnionToTuple<keyof T>['length']
// export type IsMultipleKeys<T> = IsMultiple<CountKeys<T>>
// export type IsMultiple<T> = T extends 0 ? false : T extends 1 ? false : true

// dprint-ignore
export type FirstNonUnknownNever<T extends any[]> =
  T extends [infer First, ...infer Rest]
    ? IsUnknown<First> extends true
      ? FirstNonUnknownNever<Rest>
      : IsNever<First> extends true
        ? FirstNonUnknownNever<Rest>
        : First
  : never

export type StringKeyof<T> = keyof T & string

export type HasKeys<T> = keyof T extends never ? false : true

export type IsHasIndexType<T> = string extends keyof T ? true : false

export const isSymbol = (value: unknown): value is symbol => {
  return typeof value === 'symbol'
}

export const isNonNull = <$Value>(value: $Value): value is Null.Exclude<$Value> => {
  return value !== null
}

// dprint-ignore
export type AssertExtendsObject<$Type> =AssertExtends<$Type, object>

export type AssertExtendsString<$Type> = AssertExtends<$Type, string>

// dprint-ignore
export type AssertExtends<$Type, $Constraint> =
  $Type extends $Constraint
    ? $Type
    : never

export type GuardedType<T> = T extends (x: any) => x is infer U ? U : never

export const isAnyFunction = (value: unknown): value is (...args: any[]) => any => {
  return typeof value === 'function'
}

export const isObjectEmpty = (object: object): boolean => {
  for (const _ in object) return false
  return true
}

export const hasNonUndefinedKeys = (object: object): boolean => {
  const record = object as Record<string, unknown>
  for (const _ in record) {
    if (record[_] !== undefined) return true
  }
  return false
}

export const __: (...args: any[]) => never = () => {
  throw new Error(`not implemented`)
}

export const _ = undefined as any

export type _ = typeof _

// dprint-ignore
export type ToParameters<$Params extends object | undefined> =
  $Params extends object
    ? HasKeys<$Params> extends false          ? []              :
      HasRequiredKeys<$Params> extends true   ? [$Params]       :
                                                [$Params] | []
    : []

// dprint-ignore
export type ToParametersExact<$Input extends object, $Params extends object | undefined> =
  $Params extends object
    ? HasKeys<$Params> extends false          ? []                             :
      HasRequiredKeys<$Params> extends true   ? [Exact<$Input, $Params>]       :
                                                [Exact<$Input, $Params>] | []
    : []

/**
 * Merges a union of objects into a single object type where each key has a union of all possible values for that key.
 *
 * @example
 * ```ts
 * type A = { x: string, y: number }
 * type B = { x: boolean, z: string }
 * type Result = UnionMerge<A | B>
 * // { x: string | boolean, y: number, z: string }
 * ```
 */
export type UnionMerge<U> = {
  [K in UnionKeys<U>]: UnionValue<U, K>
}

/**
 * Collects all keys from all members of a union type.
 *
 * Uses distributive conditional types (`U extends any`) to iterate over each union member
 * and collect their keys into a union.
 *
 * @example
 * ```ts
 * type A = { x: string, y: number }
 * type B = { x: boolean, z: string }
 * type Result = UnionKeys<A | B>
 * // 'x' | 'y' | 'z'
 * ```
 */
type UnionKeys<U> = U extends any ? keyof U : never

/**
 * For a given key, collects the union of all values at that key across all members of a union type.
 *
 * Uses distributive conditional types to check each union member for the key and collect the value types.
 *
 * @example
 * ```ts
 * type A = { x: string, y: number }
 * type B = { x: boolean, z: string }
 * type Result = UnionValue<A | B, 'x'>
 * // string | boolean
 * ```
 */
type UnionValue<U, K extends PropertyKey> = U extends any ? K extends keyof U ? U[K]
  : never
  : never

export type AnyAndUnknownToNever<T> = IsAny<T> extends true ? never : IsUnknown<T> extends true ? never : T

export type PropertyKeyToString<$Key extends PropertyKey> = $Key extends string ? $Key
  : $Key extends number ? $Key
  : $Key extends symbol ? '<symbol>'
  : never

export type UnionIgnoreAnyOrUnknown<T> = unknown extends T ? never : T

export type IntersectionIgnoreNeverOrAny<T> = IsAny<T> extends true ? unknown : T extends never ? unknown : T

export const emptyArray = Object.freeze([] as const)
export type EmptyArray = typeof emptyArray

export const emptyObject = Object.freeze({})
export type EmptyObject = typeof emptyObject

// todo: remove this in favour of using kit
export type PropertySignature = {
  name: string
  type: any
  optional: boolean
  optionalUndefined: boolean
}

export namespace PropertySignature {
  // dprint-ignore
  export type ToProperty<$PropertySignature extends PropertySignature> =
    $PropertySignature['optional'] extends true
    ? {
      [_ in $PropertySignature['name']]?: $PropertySignature['type'] | ($PropertySignature['optionalUndefined'] extends true ? undefined : never)
    }
    : {
      [_ in $PropertySignature['name']]: $PropertySignature['type']
    }
}
