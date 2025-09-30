/**
 * InferOperationVariablesFromSelectionSet - Type-level variable extraction from selection sets
 *
 * This module extracts GraphQL variables from selection sets that use $var markers.
 * It recursively traverses the selection set to find all variable declarations,
 * using the ArgumentsMap literal types to determine proper types for each variable.
 */ x

import type { Simplify } from 'type-fest'
import type { UnionToIntersection } from '../../../lib/prelude.js'
import type { SchemaDrivenDataMap } from '../../../types/SchemaDrivenDataMap/_namespace.js'
import type { PropertySignature } from '../PropertySignature.js'
import type { Select } from '../Select/__.js'
import type { Builder as VarBuilder } from './var.js'

// TODO to kit
type NotExtends<A, B> = [A] extends [B] ? false : true
export type ValuesOr<$Obj extends object, $Or> = [keyof $Obj] extends [never] ? $Or : $Obj[keyof $Obj]

type x = UnionToIntersection<unknown>

// dprint-ignore
export type InferVariables<
  $SelectionSet extends Select.SelectionSet.RootType<Select.StaticBuilderContext> | {},
  $ArgumentsMap extends SchemaDrivenDataMap.OutputObject,
  $TypeInputsIndex extends Record<string, any>,
  ___$ExtractedPropSigs extends PropertySignature | unknown = $SelectionSet extends Select.SelectionSet.RootType<Select.StaticBuilderContext> ? FromRootType<$SelectionSet, $ArgumentsMap, $TypeInputsIndex> : unknown,
  ___$ExtractedProps =
    ___$ExtractedPropSigs extends PropertySignature
      ? PropertySignature.ToProperty<___$ExtractedPropSigs>
      : never
> =
// ___$ExtractedPropSigs
[___$ExtractedPropSigs] extends [never] ? never : Simplify<UnionToIntersection<___$ExtractedProps>>

/**
 * Extract variables from a selection set recursively.
 */
// dprint-ignore
export type FromRootType<
  $SelectionSet extends Select.SelectionSet.RootType<Select.StaticBuilderContext>,
  $ArgumentsMap extends SchemaDrivenDataMap.OutputObject,
  $TypeInputsIndex extends Record<string, any>
> =
  // Process arguments
  & (
      $SelectionSet extends { [Select.Arguments.key]: infer __args__ /* extends Select.Arguments.ArgsObject<Select.StaticBuilderContext> */ }
          // @ts-expect-error
        ? FromArgsOrInputObject<__args__, $ArgumentsMap['a'], $TypeInputsIndex>
        : unknown
    )
  // traverse fields that have descendants with arguments
  & ValuesOr<{
    [k in keyof $SelectionSet & keyof $ArgumentsMap['f']]:
      FromRootType<
        // @ts-expect-error
        $SelectionSet[k],
        $ArgumentsMap['f'][k],
        $TypeInputsIndex
      >
    }, unknown>

// dprint-ignore
export type FromArgsOrInputObject<
  $Args extends Select.Arguments.ArgsObjectLoose,
  $ArgumentsMap, //extends SchemaDrivenDataMap.ArgumentsOrInputObjectFields | undefined,
  // TODO: use this or remove it!
  $TypeInputsIndex extends Record<string, any>
> = {
  [k in keyof $Args]:
    // Hit! Process variable marker
    $Args[k] extends VarBuilder ?
      // ? k extends keyof $ArgumentsMap
           {
              name: k;
              // @ts-expect-error
              type: VarBuilderToType<$ArgumentsMap[k]['$t'], $Args[k]>
              // type: $ArgumentsMap
              // @ts-expect-error
              optional: IsOptionalVar<$ArgumentsMap[k]['$t'], $Args[k]>
              optionalUndefined: true
            }
    // Traverse into nested input object
    : $Args[k] extends Select.Arguments.ArgsObjectLoose
      ? k extends keyof $ArgumentsMap
        ? $ArgumentsMap[k] extends SchemaDrivenDataMap.ArgumentOrInputField
          ? $ArgumentsMap[k]['nt'] extends SchemaDrivenDataMap.InputObject
            ? FromArgsOrInputObject<$Args[k], $ArgumentsMap[k]['nt']['f'], $TypeInputsIndex>
            : never
          : never
        : never
    : never
}[keyof $Args]

// dprint-ignore
export type VarBuilderToType<
  $Type,
  $VarBuilder extends VarBuilder
> =
  $VarBuilder['_']['required'] extends true                         ? Exclude<$Type,undefined> :
  NotExtends<$VarBuilder['_']['default'], undefined> extends true   ? $Type | undefined :
                                                                      $Type

// dprint-ignore
export type IsOptionalVar<
  $Type,
  $VarBuilder extends VarBuilder,
> = $VarBuilder['_']['required'] extends true                       ? false
  : NotExtends<$VarBuilder['_']['default'], undefined> extends true ? true
  : undefined extends $Type                                         ? true
  : false
