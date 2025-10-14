// TODO: Restore @wollybeard/kit import once it becomes a production dependency
// import type { Obj, Ts } from '@wollybeard/kit'
import type { Select } from '#src/extensions/DocumentBuilder/Select/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import type { Builder as VarBuilder, BuilderSentinel } from './var.js'

/**
 * Local type utilities (temporary replacement for @wollybeard/kit).
 * TODO: Remove once @wollybeard/kit becomes a production dependency.
 */
type ValuesOr<$Obj, $Fallback> = keyof $Obj extends never ? $Fallback : $Obj[keyof $Obj]
type NotExtends<$Type, $Constraint> = $Type extends $Constraint ? false : true

/**
 * Context threaded through type-level traversal to enable resolution of input object types.
 */
interface Context {
  argsMap: SchemaDrivenDataMap
}

/**
 * Mechanical extraction of variables from an operation selection set.
 * Similar to ExtractFromObjectType but at operation level.
 */
// dprint-ignore
export type ExtractFromOperation<
  $SS extends object,
  $ArgsMapOutputObject extends SchemaDrivenDataMap.OutputObject,
  $Ctx extends Context,
> = ExtractFromObjectType<$SS, $ArgsMapOutputObject, $Ctx>

/**
 * Extract variables from a selection set recursively.
 */
// dprint-ignore
export type ExtractFromObjectType<
  $SS extends object,
  $ArgsMapOutputObject extends SchemaDrivenDataMap.OutputObject,
  $Ctx extends Context,
> =
  ValuesOr<{
    [k in keyof $SS & keyof $ArgsMapOutputObject['f']]:
      ExtractFromOutputFieldWithAliasSupport<
        $SS[k],
        $ArgsMapOutputObject['f'][k],
        $Ctx
      >
 }, unknown>

// dprint-ignore
export type ExtractFromOutputFieldWithAliasSupport<
  $SS,
  $ArgsMapField extends SchemaDrivenDataMap.OutputField,
  $Ctx extends Context,
> =
  // Handle alias syntax: ['aliasName', selectionSet] or [['alias1', ss1], ['alias2', ss2], ...]
  // Single alias - extract from the selection set
  $SS extends readonly [infer __alias__ extends string, infer __ss__ extends object]  ? ExtractFromOutputField_<__ss__, $ArgsMapField, $Ctx> :
  // Multi-alias: [['alias1', ss1], ['alias2', ss2], ...]
  $SS extends readonly (readonly [string, object])[]                                  ? (
                                                                                          $SS[number] extends readonly [string, infer __ss__ extends object]
                                                                                            ? ExtractFromOutputField_<__ss__, $ArgsMapField, $Ctx>
                                                                                            : never
                                                                                        ) :
  // Not an alias, process normally
                                                                                        ExtractFromOutputField_<$SS, $ArgsMapField, $Ctx>

// Core extraction logic (without alias handling)
// dprint-ignore
type ExtractFromOutputField_<
  $SS,
  $ArgsMapField extends SchemaDrivenDataMap.OutputField,
  $Ctx extends Context,
> =
  // Process direct arguments
  & ($SS extends { [Select.Arguments.key]: infer __ssArgs__ extends object }
      ? ExtractFromArgsOrInputObject<__ssArgs__, $ArgsMapField['a'], $Ctx>
      : unknown
    )
  // Process descendant arguments, if any according to the map
  & ($SS extends object ?
      'ad' extends keyof $ArgsMapField ?
        // { _: [$SS, $ArgsMapField]; __10: ExtractFromObjectType<$SS, $ArgsMapField['ad'], $Ctx> }
        ExtractFromObjectType<$SS, $ArgsMapField['ad'], $Ctx>
      : unknown
    : unknown
    )

// dprint-ignore
export type ExtractFromArgsOrInputObject<
  $SSArgs extends object,
  $ArgsMapArgs, //extends SchemaDrivenDataMap.ArgumentsOrInputObjectFields | undefined,
  $Ctx extends Context,
> =
// $ArgumentsMap
{
  [k in keyof $SSArgs]:
    // Hit! Process variable marker
    $SSArgs[k] extends BuilderSentinel ?
      {
        // @ts-expect-error
        name: $SSArgs[k]['_']['name'] extends string ? $SSArgs[k]['_']['name'] : Select.Arguments.EnumKeyPrefixStrip<k>;
        // @ts-expect-error
        type: VarBuilderToType<$ArgsMapArgs[k]['$t'], $SSArgs[k]>
        // type: $ArgumentsMap
        // @ts-expect-error
        optional: IsOptionalVar<$ArgsMapArgs[k]['$t'], $SSArgs[k]>
        optionalUndefined: true
      } :
    // Traverse into nested input object
    $SSArgs[k] extends object ?
      k extends keyof $ArgsMapArgs
        ? $ArgsMapArgs[k] extends { nt: infer __typeName__ extends string }
          ? __typeName__ extends keyof $Ctx['argsMap']['types']
            ? $Ctx['argsMap']['types'][__typeName__] extends { f: infer __fields__ }
              ? ExtractFromArgsOrInputObject<$SSArgs[k], __fields__, $Ctx>
              : never
            : never
          : never
        : never :
    // inline argument given, no variable, skip
      never
}[keyof $SSArgs]

// dprint-ignore
export type VarBuilderToType<
  $Type,
  $VarBuilder extends VarBuilder
> =
  // When marking as required, exclude both null and undefined (GraphQL ! makes it required AND non-null)
  $VarBuilder['_']['required'] extends true                         ? Exclude<$Type, undefined | null> :
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
