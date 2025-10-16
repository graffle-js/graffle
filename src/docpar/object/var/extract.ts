// TODO: Restore @wollybeard/kit import once it becomes a production dependency
// import type { Obj, Ts } from '@wollybeard/kit'
import type { SchemaDrivenDataMap } from '../../core/sddm/SchemaDrivenDataMap.js'
import type { IsArgumentsOrDirectiveKey } from '../InferResult/directive.js'
import type { Select } from '../Select/$.js'
import type { Builder as VarBuilder, BuilderSentinel, BuilderState, BuilderTyped } from './var.js'

/**
 * Local type utilities (temporary replacement for @wollybeard/kit).
 * TODO: Remove once @wollybeard/kit becomes a production dependency.
 */
type ValuesOr<$Obj, $Fallback> = [keyof $Obj] extends [never] ? $Fallback
  : Exclude<$Obj[keyof $Obj], never> extends never ? $Fallback
  : Exclude<$Obj[keyof $Obj], never>
type NotExtends<$Type, $Constraint> = $Type extends $Constraint ? false : true

/**
 * Map GraphQL standard scalar types to TypeScript types.
 * Used for schema-less mode where types are explicitly provided via $.Type() markers.
 */
// dprint-ignore
type GraphQLTypeToTS<$GraphQLType extends string> =
  $GraphQLType extends 'String'   ? string  :
  $GraphQLType extends 'Int'      ? number  :
  $GraphQLType extends 'Float'    ? number  :
  $GraphQLType extends 'Boolean'  ? boolean :
  $GraphQLType extends 'ID'       ? string  :
                                    unknown

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
 * Handles both schema-ful (with ArgumentsMap) and schema-less (without ArgumentsMap) modes.
 */
// dprint-ignore
export type ExtractFromObjectType<
  $SS extends object,
  $ArgsMapOutputObject extends SchemaDrivenDataMap.OutputObject,
  $Ctx extends Context,
> =
  keyof $ArgsMapOutputObject['f'] extends never
    ? // Schema-less mode: process all fields except $ and directive keys
      ValuesOr<{
        [k in keyof $SS as IsArgumentsOrDirectiveKey<k> extends true ? never : k]:
          $SS[k] extends object
            ? ExtractFromOutputFieldSchemaLess<$SS[k], $Ctx>
            : never
      }, {}>
    : // Schema-ful mode: only process fields in ArgumentsMap
      ValuesOr<{
        [k in keyof $SS & keyof $ArgsMapOutputObject['f']]:
          ExtractFromOutputFieldWithAliasSupport<
            $SS[k],
            $ArgsMapOutputObject['f'][k],
            $Ctx
          >
      }, {}>

/**
 * Extract from output field without ArgumentsMap (schema-less).
 * Only extracts BuilderTyped variables.
 */
// dprint-ignore
type ExtractFromOutputFieldSchemaLess<
  $SS extends object,
  $Ctx extends Context
> =
  // Handle alias syntax
  $SS extends readonly [infer __alias__ extends string, infer __ss__ extends object]
    ? ExtractFromOutputFieldSchemaLess<__ss__, $Ctx> :
  $SS extends readonly (readonly [string, object])[]
    ? ($SS[number] extends readonly [string, infer __ss__ extends object]
        ? ExtractFromOutputFieldSchemaLess<__ss__, $Ctx>
        : never) :
  // Process direct arguments for BuilderTyped variables only
  & ($SS extends { readonly $: infer __ssArgs__ }
      ? __ssArgs__ extends object
        ? ExtractFromArgsSchemaLess<__ssArgs__>
        : unknown
      : unknown)
  // Recursively process nested selection sets
  & ExtractFromObjectType<$SS, { f: {} }, $Ctx>

/**
 * Extract variables from arguments (schema-less mode).
 * Only extracts BuilderTyped variables - plain $ is skipped.
 */
// dprint-ignore
type ExtractFromArgsSchemaLess<
  $SSArgs extends object,
  ___$SSArgsWriteable = { -readonly [P in keyof $SSArgs]: $SSArgs[P] }
> =
{
  [k in keyof ___$SSArgsWriteable]:
    ___$SSArgsWriteable[k] extends BuilderTyped<infer $GQLType, infer $State> ?
      {
        name: ___$SSArgsWriteable[k]['_']['name'] extends string ? ___$SSArgsWriteable[k]['_']['name'] : Select.Arguments.EnumKeyPrefixStrip<k>;
        type: VarBuilderToTypeFromGraphQLType<$GQLType, ___$SSArgsWriteable[k]>
        optional: IsOptionalVarFromGraphQLType<___$SSArgsWriteable[k]>
        optionalUndefined: true
      }
    : never
}[keyof ___$SSArgsWriteable]

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
  & ($SS extends { readonly $: infer __ssArgs__ }
      ? __ssArgs__ extends object
        ? ExtractFromArgsOrInputObject<__ssArgs__, $ArgsMapField['a'], $Ctx>
        : unknown
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
      Extract<$SSArgs[k], VarBuilder> extends infer $Builder extends VarBuilder ?
      {
        name: $Builder['_']['name'] extends string ? $Builder['_']['name'] : Select.Arguments.EnumKeyPrefixStrip<k>;
        type: $Builder extends BuilderTyped<infer $GQLType>
          ? VarBuilderToTypeFromGraphQLType<$GQLType, $Builder>
          : Select.Arguments.EnumKeyPrefixStrip<k> extends infer $k
            ? $k extends keyof $ArgsMapArgs
              ? $ArgsMapArgs[$k] extends { $t: infer $Type }
                ? VarBuilderToType<$Type, $Builder>
                : never
              : never
            : never
        optional: $Builder extends BuilderTyped<any>
          ? IsOptionalVarFromGraphQLType<$Builder>
          : Select.Arguments.EnumKeyPrefixStrip<k> extends infer $k
            ? $k extends keyof $ArgsMapArgs
              ? $ArgsMapArgs[$k] extends { $t: infer $Type }
                ? IsOptionalVar<$Type, $Builder>
                : false
              : false
            : false
        optionalUndefined: true
      } : never :
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

/**
 * Convert variable builder to TypeScript type for schema-ful mode.
 * $Type is already a TypeScript type from ArgumentsMap.
 */
// dprint-ignore
export type VarBuilderToType<
  $Type,
  $VarBuilder extends VarBuilder
> =
  $VarBuilder['_']['required'] extends true                         ? Exclude<$Type, undefined | null> :
  NotExtends<$VarBuilder['_']['default'], undefined> extends true   ? $Type | undefined :
                                                                      $Type

/**
 * Convert variable builder to TypeScript type for schema-less mode.
 * Takes a GraphQL type name string and maps it to TypeScript type.
 */
// dprint-ignore
export type VarBuilderToTypeFromGraphQLType<
  $GraphQLType extends string,
  $VarBuilder extends VarBuilder | BuilderTyped<string, BuilderState>
> =
  $VarBuilder['_']['required'] extends true                         ? GraphQLTypeToTS<$GraphQLType> :
  NotExtends<$VarBuilder['_']['default'], undefined> extends true   ? GraphQLTypeToTS<$GraphQLType> | undefined :
                                                                      GraphQLTypeToTS<$GraphQLType> | undefined | null

/**
 * Determine if a variable is optional in schema-ful mode.
 * Can use $Type from ArgumentsMap to check for undefined.
 */
// dprint-ignore
export type IsOptionalVar<
  $Type,
  $VarBuilder extends VarBuilder,
> = $VarBuilder['_']['required'] extends true                       ? false
  : NotExtends<$VarBuilder['_']['default'], undefined> extends true ? true
  : undefined extends $Type                                         ? true
  : false

/**
 * Determine if a variable is optional in schema-less mode.
 * Cannot use ArgumentsMap, only builder state.
 */
// dprint-ignore
export type IsOptionalVarFromGraphQLType<
  $VarBuilder extends VarBuilder | BuilderTyped<string, BuilderState>
> = $VarBuilder['_']['required'] extends true                       ? false
  : NotExtends<$VarBuilder['_']['default'], undefined> extends true ? true
  : true
