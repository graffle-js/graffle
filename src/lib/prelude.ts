import { Fn, Lang, type Null, Obj, Prom, Rec, Str, Ts } from '@wollybeard/kit'
import type { HasRequiredKeys, IsAny, IsEmptyObject, IsNever, IsUnknown } from 'type-fest'
import type { ConfigManager } from './config-manager/$.js'

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

export type ExcludeUndefined<T> = Exclude<T, undefined>

export type ExcludeNullAndUndefined<T> = Exclude<T, null | undefined>

export type SomeFunctionMaybeAsync = (...args: any[]) => Prom.Maybe<any>

export const debug = (...args: any[]) => {
  if (globalThis.process?.env?.['DEBUG']) {
    console.log(...args)
  }
}

export const debugSub = (...args: any[]) => (...subArgs: any[]) => {
  debug(...args, ...subArgs)
}

export namespace Objekt {
  export type IsEmpty<T> = {} extends T ? true : false
}

/**
 * Use this to make forced union distribution more explicit and self-documenting.
 *
 * @example
 *
 * ```ts
 * type Foo<T> = T extends __FORCE_UNION_DISTRIBUTION__ ? ... : ...
 * ```
 */
export type __FORCE_UNION_DISTRIBUTION__ = any

export namespace Tuple {
  export type Flatten<T extends readonly (readonly any[])[]> = T extends
    readonly [infer __head__ extends readonly any[], ...infer __tail__ extends readonly (readonly any[])[]]
    ? readonly [...__head__, ...Flatten<__tail__>]
    : []

  export type IndexByDepth2<
    $Arr extends any[],
    $Key1 extends keyof $Arr[number],
    $Key2 extends keyof $Arr[number][$Key1],
  > = $Arr extends [infer First extends $Arr[number], ...infer Rest extends $Arr[number][]]
    ? { [_ in First[$Key1][$Key2]]: First[$Key1] } & IndexByDepth2<Rest, $Key1, $Key2>
    : {}

  export type IndexBy<
    $Arr extends readonly any[],
    $Key extends keyof $Arr[number],
  > = $Arr extends readonly [infer __first__ extends $Arr[number], ...infer __rest__ extends $Arr[number][]]
    ? { readonly [_ in __first__[$Key]]: __first__ } & IndexBy<__rest__, $Key>
    : {}

  export type IndexByToValueDepth2<
    $Arr extends readonly any[],
    $Key extends keyof $Arr[number],
    $ValueKey1 extends keyof $Arr[number],
    $ValueKey2 extends keyof $Arr[number][$ValueKey1],
  > = $Arr extends readonly [infer __first__ extends $Arr[number], ...infer __rest__ extends readonly $Arr[number][]] ?
      & { readonly [_ in __first__[$Key]]: __first__[$ValueKey1][$ValueKey2] }
      & IndexByToValueDepth2<__rest__, $Key, $ValueKey1, $ValueKey2>
    : {}

  export type IndexKey = number | `${number}`

  export type Empty = readonly []

  export type IsEmpty<T> = T extends Empty ? true : false

  // dprint-ignore
  export type PreviousItem<$Items extends readonly any[], $OfItem> =
    $Items extends [infer $Next, ...infer $Rest]
      ? $Next extends $OfItem
        ? undefined // No previous of first
        : PreviousItem_<$OfItem, $Next, $Rest>
      : undefined // empty tuple

  // dprint-ignore
  type PreviousItem_<$OfItem, $PreviousItem extends $Items[number], $Items extends readonly any[]> =
    $Items extends [infer $NextItem, ...infer $Rest]
      ? $NextItem extends $OfItem
        ? $PreviousItem
        : PreviousItem_<$OfItem, $NextItem, $Rest>
      : never

  export type NonEmpty = readonly [any, ...readonly any[]]
  // dprint-ignore
  export type IntersectItems<$Items extends readonly any[]> =
    $Items extends [infer $First, ...infer $Rest extends any[]]
      ? $First & IntersectItems<$Rest>
      : {}

  // dprint-ignore
  export type ToIndexByObjectKey<$Items extends readonly object[], $Key extends keyof $Items[number]> =
    // Simplify<
      IntersectItems<{
        [$Index in keyof $Items]:
          $Key extends keyof $Items[$Index]
          ? {
              [_ in $Items[$Index][$Key] & string]: $Items[$Index]
            }
          : never
      }>
  // >

  // dprint-ignore
  export type GetAtNextIndex<$Items extends readonly any[], $Index extends NumberLiteral> =
    $Items[PlusOne<$Index>]

  // dprint-ignore
  export type GetNextIndexOr<$Items extends readonly any[], $Index extends number, $Or> =
    ConfigManager.OrDefault<GetAtNextIndex<$Items, $Index>, $Or>

  // dprint-ignore
  export type DropUntilIndex<$Items extends readonly any[], $Index extends NumberLiteral> =
    $Index extends 0                                  ? $Items :
    $Items extends readonly [infer _, ...infer $Rest] ? DropUntilIndex<$Rest, MinusOne<$Index>> :
                                                        []

  export type IndexPlusOne<$Index extends NumberLiteral> = PlusOne<$Index>

  export type GetLastValue<T extends readonly [any, ...any[]]> = T[MinusOne<T['length']>]

  export type IsLastValue<value, list extends readonly [any, ...any[]]> = value extends GetLastValue<list> ? true
    : false

  // dprint-ignore
  export type findIndexForValue<value, list extends AnyReadOnlyListNonEmpty> =
    findIndexForValue_<value, list, 0>

  // dprint-ignore
  type findIndexForValue_<value, list extends AnyReadOnlyListNonEmpty, i extends number> =
    value extends list[i]
      ? i
      : findIndexForValue_<value, list, PlusOne<i>>

  export type FindValueAfter<value, list extends AnyReadOnlyListNonEmpty> =
    list[PlusOne<findIndexForValue<value, list>>]

  // dprint-ignore
  export type TakeValuesBefore<$Value, $List extends AnyReadOnly> =
    $List extends readonly [infer $ListFirst, ...infer $ListRest]
      ? $Value extends $ListFirst
        ? []
        : [$ListFirst, ...TakeValuesBefore<$Value, $ListRest>]
      : []

  export type FindValueAfterOr<value, list extends readonly [any, ...any[]], orValue> = ConfigManager.OrDefault<
    list[PlusOne<findIndexForValue<value, list>>],
    orValue
  >

  type AnyReadOnly = readonly any[]

  type AnyReadOnlyListNonEmpty = readonly [any, ...any[]]

  // dprint-ignore
  export type ReduceObjectsMergeShallow<$Objects extends readonly object[]> =
    $Objects extends readonly [infer __first__ extends object, ...infer __rest__ extends readonly object[]]
      ? __rest__ extends readonly []
        ? __first__
        // Shallow merge
        : & {
              readonly [__k__ in keyof __first__ as __k__ extends keyof __rest__[number] ? never : __k__]:
                __first__[__k__]
            }
          & ReduceObjectsMergeShallow<__rest__>
      : {}
}

type NumberLiteral = number | `${number}`

// dprint-ignore
export type PlusOne<n extends NumberLiteral> =
    n extends 0 ? 1
  : n extends 1 ? 2
  : n extends 2 ? 3
  : n extends 3 ? 4
  : n extends 4 ? 5
  : n extends 5 ? 6
  : n extends 6 ? 7
  : n extends 7 ? 8
  : n extends 8 ? 9
  : n extends 9 ? 10
  : never

// dprint-ignore
export type MinusOne<n extends NumberLiteral> =
    n extends 10 ? 9
  : n extends 9 ? 8
  : n extends 8 ? 7
  : n extends 7 ? 6
  : n extends 6 ? 5
  : n extends 5 ? 4
  : n extends 4 ? 3
  : n extends 3 ? 2
  : n extends 2 ? 1
  : n extends 1 ? 0
  : never

export type Include<T, U> = T extends U ? T : never

export const urlParseSafe = (url: string) => {
  try {
    return new URL(url)
  } catch {
    return null
  }
}

export const throwNull = <V>(value: V): Exclude<V, null> => {
  if (value === null) throw new Error('Unexpected null value.')
  return value as Exclude<V, null>
}

export const proxyGet = <$Target>(
  target: $Target,
  handler: (input: { property: string; path: string[] }) => unknown,
  path: string[] = [],
): $Target => {
  return new Proxy(target, {
    get: (target: any, property: string, receiver: any) => {
      const value = Reflect.get(target, property, receiver)

      // TODO: special casing for private _ property should go away.
      if (property === '_' && path.length === 0) {
        return value
      }

      if (Rec.is(value)) {
        return proxyGet(value, handler, [...path, property])
      }

      return handler({ property, path }) ?? Reflect.get(target, property, receiver)
    },
  })
}

// export type SuffixKeyNames<$Suffix extends string, $Object extends object> = {
//   [$Key in keyof $Object & string as `${$Key}${$Suffix}`]: $Object[$Key]
// }

/**
 * Force intellisense to show the given union type expanded. E.g. given `Foo = A | B` then show `A | B` instead of `Foo`.
 */
export type UnionExpanded<$Union> = $Union

export const identityProxy = new Proxy({}, {
  get: () => (value: unknown) => value,
})

export type IfExtendsElse<$Type, $Extends, $Else> = $Type extends $Extends ? $Type : $Else

// dprint-ignore
export type PickOptionalPropertyOrFallback<$Object extends object, $Property extends keyof $Object, $Fallback> =
  undefined extends $Object[$Property]
    ? $Fallback
    : $Object[$Property]

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

export type SimplifyNullable<T> = null extends T ? (T & {}) | null : T & {}

// dprint-ignore
export type AssertExtendsObject<$Type> =AssertExtends<$Type, object>

export type AssertExtendsString<$Type> = AssertExtends<$Type, string>

// dprint-ignore
export type AssertExtends<$Type, $Constraint> =
  $Type extends $Constraint
    ? $Type
    : never

export const isNonNullObject = (value: unknown): value is object => {
  return typeof value === 'object' && value !== null
}

export const isError = (value: unknown) => {
  return value instanceof Error
}

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

export const isAbortError = (error: any): error is DOMException & { name: 'AbortError' } => {
  return (error instanceof DOMException && error.name === `AbortError`)
    // Under test with JSDOM, the error must be checked this way.
    // todo look for an open issue with JSDOM to link here, is this just artifact of JSDOM or is it a real issue that happens in browsers?
    || (error instanceof Error && error.message.startsWith(`AbortError:`))
}

export namespace Func {
  // dprint-ignore
  export type AppendAwaitedReturnType<$F, $ReturnTypeToAdd> =
    $F extends (...args: infer $Args) => infer $Output
      ? $Output extends Promise<any>
        ? (...args: $Args) => Promise<Awaited<$Output> | $ReturnTypeToAdd>
        : (...args: $Args) => $Output | $ReturnTypeToAdd
      : never
}

export type UnionMerge<U> = {
  [K in UnionKeys<U>]: UnionValue<U, K>
}

type UnionKeys<U> = U extends any ? keyof U : never

type UnionValue<U, K extends PropertyKey> = U extends any ? K extends keyof U ? U[K]
  : never
  : never

export type AnyAndUnknownToNever<T> = IsAny<T> extends true ? never : IsUnknown<T> extends true ? never : T

export type t<T> = T extends null ? {} | null : {}

export type PropertyKeyToString<$Key extends PropertyKey> = $Key extends string ? $Key
  : $Key extends number ? $Key
  : $Key extends symbol ? '<symbol>'
  : never

export type PartialOrUndefined<T> = {
  [K in keyof T]?: T[K] | undefined
}

export type UnionIgnoreAnyOrUnknown<T> = unknown extends T ? never : T

export type IntersectionIgnoreNeverOrAny<T> = IsAny<T> extends true ? unknown : T extends never ? unknown : T

export type NeverOrAnyToUnknown<T> = IsAny<T> extends true ? unknown : T extends never ? unknown : T

export type MergeAll<$Objects extends object[]> = $Objects extends
  [infer $First extends object, ...infer $Rest extends object[]] ? $First & MergeAll<$Rest>
  : {}

export const emptyArray = Object.freeze([] as const)
export type EmptyArray = typeof emptyArray

export const emptyObject = Object.freeze({})
export type EmptyObject = typeof emptyObject
