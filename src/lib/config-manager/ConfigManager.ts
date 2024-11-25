import type { IsUnknown, PartialDeep, Simplify } from 'type-fest'
import { isDate } from 'util/types'
import { type ExcludeUndefined, type GuardedType, isAnyFunction, isNonNullObject } from '../prelude.js'

// dprint-ignore
export type OrDefault2<$Value, $Default> =
    // When no value has been passed in because the property is optional,
    // then the inferred type is unknown.
    IsUnknown<$Value> extends true ? $Default :
    undefined extends $Value       ? $Default :
                                     ExcludeUndefined<$Value>

// todo remove this in favour of OrDefault2
// dprint-ignore
export type OrDefault<$Value, $Default> =
    // When no value has been passed in because the property is optional,
    // then the inferred type is unknown.
    IsUnknown<$Value> extends true ? $Default :
    $Value extends undefined       ? $Default :
                                     $Value

// dprint-ignore
export type MergeDefaults<$Defaults extends object, $Input extends undefined | object, $CustomScalars> =
  $Input extends undefined
    ? $Defaults
    : {
        [$Key in keyof $Defaults]:
          $Key extends keyof $Input
            ? $Input[$Key] extends undefined
              ? $Defaults[$Key]
              : MergeDefaultsValues<$Defaults[$Key], ExcludeUndefined<$Input[$Key]>, $CustomScalars>
            : $Defaults[$Key]
      }

// dprint-ignore
type MergeDefaultsValues<$DefaultValue, $InputValue, $CustomScalars> =
$InputValue extends $CustomScalars
  ? $DefaultValue extends $CustomScalars
    ? $InputValue // Treat as terminal
    : never // Mismatch between defaults and input
  : $InputValue extends object
    ? $DefaultValue extends object
      ? Simplify<MergeDefaults<$DefaultValue, $InputValue, $CustomScalars>>
      : never // Defaults disagrees with Input
    : $InputValue

export const createMerger = <$CustomScalars extends CustomScalarGuard[]>(
  customScalars: $CustomScalars,
): MergeDefaultsFn<GuardedType<$CustomScalars[number]>> => {
  return (defaults, input) => mergeDefaults_(defaults, input, customScalars) as any
}

// dprint-ignore
export type SetAtPath<
  $Object extends object,
  $Path extends string[],
  $Value,
> =
  $Path extends []
    ? $Object
    : $Path extends [infer $Key extends string, ...infer $PathRest extends string[]]
      ? $PathRest extends []
        ? Omit<$Object, $Key> & { [_ in $Key]: $Value }
        : $Key extends keyof $Object
          ? $Object[$Key] extends object
            ? Omit<$Object, $Key> & { [_ in $Key]: SetAtPath<$Object[$Key], $PathRest, $Value> }
            : Omit<$Object, $Key> & { [_ in $Key]: SetAtPath<{}, $PathRest, $Value> }
        : $Object & { [_ in $Key]: SetAtPath<{}, $PathRest, $Value> }
      : never

type MergeDefaultsFn<$CustomScalars> = <$Defaults extends object, $Input extends undefined | PartialDeep<$Defaults>>(
  defaults: $Defaults,
  input?: $Input,
) => Simplify<MergeDefaults<$Defaults, $Input, $CustomScalars>>

type MergeDefaultsInnerFn = (
  defaults: object,
  input: object | undefined,
  customScalars: CustomScalarGuard[],
) => object

type CustomScalarGuard = (value: object) => boolean

const isUrl = (value: object): value is URL => value instanceof URL

export const mergeDefaults = createMerger([isAnyFunction, isDate, isUrl])

const mergeDefaults_: MergeDefaultsInnerFn = (
  defaults,
  input,
  customScalars,
) => {
  if (input === undefined) {
    return defaults
  }

  const i = input as Record<string, any>
  const d = defaults as Record<string, any>

  for (const key in d) {
    const defaultValue = d[key]

    if (key in i && i[key] !== undefined) {
      const inputValue = i[key]
      if (isNonNullObject(defaultValue)) {
        if (isNonNullObject(inputValue)) {
          const isCustomScalar = customScalars.some(isCustomScalar => isCustomScalar(inputValue))
          if (!isCustomScalar) {
            mergeDefaults_(inputValue, defaultValue, customScalars)
          }
        } else {
          throw new Error(
            `Mismatch between defaults and input. Defaults expect an object at this node. Input was: ${
              String(inputValue)
            }`,
          )
        }
      }
    } else {
      i[key] = defaultValue
    }
  }

  return i
}

type Path = [...string[]]

export type AppendOptional<$Array extends any[], $Value> = $Value extends undefined ? $Array : [...$Array, $Value]

// dprint-ignore
export type GetAtPathOrDefault<$Obj, $Path extends Path, $Default> =
  OrDefault<GetOptional<$Obj, $Path>, $Default>

// dprint-ignore
export type GetOptional<$Value, $Path extends [...string[]]> =
  $Value extends undefined                                              ? undefined :
  $Path extends [infer P1 extends string, ...infer PN extends string[]] ? $Value extends object
                                                                          ?	P1 extends keyof $Value
                                                                            ? GetOptional<$Value[P1], PN>
                                                                            : undefined
                                                                          : undefined
                                                                        : $Value

/**
 * Merge new properties from the second object into the first object.
 * If those properties already exist in the first object they will be overwritten.
 */
// dprint-ignore
export type SetProperties<$Object1 extends object, $Object2 extends object> =
    Simplify<Omit<$Object1, keyof $Object2> & $Object2>

// dprint-ignore
export type SetMany<$Obj extends object, $Sets extends [Path, any][]> =
  $Sets extends []                                                                        ? $Obj : 
  $Sets extends [infer $Set extends [Path, any], ...infer $SetRest extends [Path, any][]] ? SetMany<
                                                                                              SetKeyAtPath<$Obj, $Set[0], $Set[1]>,
                                                                                              $SetRest
                                                                                            > :
                                                                                            never

// dprint-ignore
export type UpdateKeyWithAppend<
  $Obj extends object,
  $Prop extends keyof $Obj,
  $Type,
> =
  SetKey<
    $Obj,
    $Prop,
  // @ts-expect-error
    [...$Obj[$Prop], $Type]
  >

// dprint-ignore
export type UpdateKeyWithAppendMany<
  $Obj extends object,
  $Prop extends keyof $Obj,
  $Type extends any[],
> =
  SetKey<
    $Obj,
    $Prop,
    // @ts-expect-error
    [...$Obj[$Prop], ...$Type]
  >

export type UpdateKeyWithIntersection<
  $Obj extends object,
  $PropertyName extends keyof $Obj,
  $Type extends object,
> =
  & $Obj
  & {
    [_ in $PropertyName]: $Type
  }

export type SetKey<
  $Obj extends object,
  $PropertyName extends keyof $Obj,
  $Type extends $Obj[$PropertyName],
> =
  & {
    [_ in keyof $Obj as _ extends $PropertyName ? never : _]: $Obj[_]
  }
  & {
    [_ in $PropertyName]: $Type
  }

// dprint-ignore
export type SetKeyAtPath<$Obj extends object, $Path extends Path, $Value> =
    Simplify<
      $Path extends []
        ? $Value extends object
          ? $Obj & $Value
          : never
        : SetKeyAtPath_<$Obj, $Path, $Value>
    >
// dprint-ignore
type SetKeyAtPath_<$ObjOrValue, $Path extends Path, $Value> =
    Simplify<
      $Path extends [infer $P1 extends string, ...infer $PN extends string[]] ?
        $P1 extends keyof $ObjOrValue
            ? Omit<$ObjOrValue, $P1> & { [_ in $P1]: SetKeyAtPath_<$ObjOrValue[$P1], $PN, $Value> }
            // If we use a nice error display here (like the following comment) it will mess with the result type in variable cases.
             // `Error: Cannot set value at path in object. Path property "${$P1}" does not exist in object.`
            : never
        : $Value
    >
