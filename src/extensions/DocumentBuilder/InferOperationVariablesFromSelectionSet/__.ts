/**
 * InferOperationVariablesFromSelectionSet - Type-level variable extraction from selection sets
 *
 * This module extracts GraphQL variables from selection sets that use $var markers.
 * It recursively traverses the selection set to find all variable declarations,
 * using the ArgumentsMap literal types to determine proper types for each variable.
 */

import type { Simplify } from 'type-fest'
import type { UnionToIntersection } from '../../../lib/prelude.js'
import type { SchemaDrivenDataMap } from '../../../types/SchemaDrivenDataMap/_namespace.js'
import type { PropertySignature } from '../PropertySignature.js'
import type { Select } from '../Select/__.js'
import type { VariableMarker } from '../variable.js'

export type ValuesOr<$Obj extends object, $Or> = [keyof $Obj] extends [never] ? $Or : $Obj[keyof $Obj]

// Helper type that distributes ToProperty over union members
type DistributeToProperty<T extends PropertySignature> = T extends any ? PropertySignature.ToProperty<T> : never

// dprint-ignore
export type Infer<
  $SelectionSet extends Select.SelectionSet.RootType<Select.StaticBuilderContext> | {},
  $ArgumentsMap extends SchemaDrivenDataMap.OutputObject,
  $TypeInputsIndex extends Record<string, any>,
  ___$Extracted extends PropertySignature | unknown = $SelectionSet extends Select.SelectionSet.RootType<Select.StaticBuilderContext> ? FromRootType<$SelectionSet, $ArgumentsMap, $TypeInputsIndex> : unknown,
> =
[keyof $SelectionSet] extends [never]
  ? {}  // Empty selection set (e.g., scalar field with no selection)
  : Simplify<
      // Prevent distributing over ___$Extracted when its a union
      [___$Extracted] extends [PropertySignature]
        ? UnionToIntersection<DistributeToProperty<___$Extracted>>
        : never
    >

/**
 * Extract variables from a selection set recursively
 * Now passes ArgumentsMap through the recursion
 */
// dprint-ignore
export type FromRootType<
  $SelectionSet extends Select.SelectionSet.RootType<Select.StaticBuilderContext>,
  $ArgumentsMap extends SchemaDrivenDataMap.OutputObject,
  $TypeInputsIndex extends Record<string, any>
> =
  & (
      $SelectionSet extends { [Select.Arguments.key]: infer __args__ extends Select.Arguments.ArgsObject<Select.StaticBuilderContext> }
        ? FromArgsOrInputObject<__args__, undefined, $TypeInputsIndex> // Root level arguments (currently not supported in GraphQL)
        : unknown
    )
  & ValuesOr<{
    [k in keyof $SelectionSet & keyof $ArgumentsMap['f']]:
        $SelectionSet[k] extends { [Select.Arguments.key]: infer __fieldArgs__ extends Select.Arguments.ArgsObject<Select.StaticBuilderContext> }
          ? $ArgumentsMap['f'][k] extends SchemaDrivenDataMap.OutputField
            ? FromArgsOrInputObject<__fieldArgs__, $ArgumentsMap['f'][k]['a'], $TypeInputsIndex>
            : never
        : $SelectionSet[k] extends Select.SelectionSet.RootType<Select.StaticBuilderContext>
          ? $ArgumentsMap['f'][k] extends SchemaDrivenDataMap.OutputField
            ? $ArgumentsMap['f'][k]['nt'] extends SchemaDrivenDataMap.OutputObject
              ? FromRootType<$SelectionSet[k], $ArgumentsMap['f'][k]['nt'], $TypeInputsIndex>
              : never
            : never
          : never
    }, unknown>

// dprint-ignore
export type FromArgsOrInputObject<
  $Args extends Select.Arguments.ArgsObjectLoose,
  $ArgumentsMap extends SchemaDrivenDataMap.ArgumentsOrInputObjectFields | undefined,
  $TypeInputsIndex extends Record<string, any>
> = {
  [k in keyof $Args]:
    $Args[k] extends VariableMarker<any, any>
      ? k extends keyof $ArgumentsMap
        ? $ArgumentsMap[k] extends SchemaDrivenDataMap.ArgumentOrInputField
          ? {
              name: k;
              type: $ArgumentsMap[k] extends { $t: infer T }
                ? $Args[k]['_']['required'] extends true
                  ? Exclude<T, undefined>  // Strip undefined if marked as required
                  : T  // Use precomputed type from generator
                : // Fallback to complex type inference for backwards compatibility
                  $ArgumentsMap[k]['nt'] extends keyof $TypeInputsIndex
                  ? // Check if it's a list type by looking for second element in 'it' tuple
                    $ArgumentsMap[k]['it'] extends readonly [any, readonly [any]]
                    ? ReadonlyArray<$TypeInputsIndex[$ArgumentsMap[k]['nt']]>
                    : $TypeInputsIndex[$ArgumentsMap[k]['nt']]
                  : $ArgumentsMap[k]['nt'] extends { n: infer $TypeName }
                    ? $TypeName extends keyof $TypeInputsIndex
                      ? $ArgumentsMap[k]['it'] extends readonly [any, readonly [any]]
                        ? ReadonlyArray<$TypeInputsIndex[$TypeName]>
                        : $TypeInputsIndex[$TypeName]
                      : any
                    : any;
              optional: $Args[k]['_']['required'] extends true
                ? false // If marked as required, it's not optional
                : $Args[k]['_']['default'] extends undefined
                  ? $ArgumentsMap[k] extends { $t: infer T }
                    ? undefined extends T ? true : false
                    : $ArgumentsMap[k]['it'] extends readonly [0] | readonly [0, any]
                      ? true
                      : false
                  : true; // Has default value, so it's optional
              optionalUndefined: $Args[k]['_']['required'] extends true
                ? false // If marked as required, it's not optional
                : $Args[k]['_']['default'] extends undefined
                  ? $ArgumentsMap[k] extends { $t: infer T }
                    ? undefined extends T ? true : false
                    : $ArgumentsMap[k]['it'] extends readonly [0] | readonly [0, any]
                      ? true
                      : false
                  : false; // Has default value, so undefined is not allowed
            }
          : never
        : {
            name: k;
            type: any;
            optional: true;
            optionalUndefined: true;
          }
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
