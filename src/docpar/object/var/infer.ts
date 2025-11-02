/**
 * InferOperationVariablesFromSelectionSet - Type-level variable extraction from selection sets
 *
 * This module extracts GraphQL variables from selection sets that use $var markers.
 * It recursively traverses the selection set to find all variable declarations,
 * using the ArgumentsMap literal types to determine proper types for each variable.
 */

import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Obj, Ts } from '@wollybeard/kit'
import type { UnionToIntersection } from 'type-fest'
import type { SchemaDrivenDataMap } from '../../core/sddm/SchemaDrivenDataMap.js'
import type { Select } from '../Select/$.js'
import type { ExtractFromOperation } from './extract.js'

/**
 * Infer variables from a query operation selection set.
 */
export type InferFromQuery<
  $SS extends object,
  $ArgsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithQuery,
> = InferFromOperation<$SS, $ArgsMap, typeof GraphqlKit.Document.Ast.OperationType.QUERY>

/**
 * Infer variables from a mutation operation selection set.
 */
export type InferFromMutation<
  $SS extends object,
  $ArgsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithMutation,
> = InferFromOperation<$SS, $ArgsMap, typeof GraphqlKit.Document.Ast.OperationType.MUTATION>

/**
 * Infer variables from a subscription operation selection set.
 */
export type InferFromSubscription<
  $SS extends object,
  $ArgsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithSubscription,
> = InferFromOperation<$SS, $ArgsMap, typeof GraphqlKit.Document.Ast.OperationType.SUBSCRIPTION>

/**
 * Infer variables from a subscription operation selection set.
 */
// dprint-ignore
export type InferFromOperation<
  $SS extends object,
  $ArgsMap extends SchemaDrivenDataMap.SchemaDrivenDataMap,
  $OperationType extends GraphqlKit.Document.Ast.OperationType.OperationType,
  ___$OperationMap = $ArgsMap['operations'][$OperationType],
> =
  ___$OperationMap extends SchemaDrivenDataMap.OutputObject
    ? InferFromOperationMap<$SS, ___$OperationMap, $ArgsMap>
    : {}

/**
 * @deprecated Use InferFromQuery, InferFromMutation, or InferFromSubscription instead
 */
// dprint-ignore
export type InferVariables<
  $SS extends Select.SelectionSet.RootType<Select.StaticBuilderContext>,
  $ArgsMap extends SchemaDrivenDataMap,
  $Operation extends keyof $ArgsMap['operations'],
  ___$OperationMap = $ArgsMap['operations'][$Operation],
> =
  ___$OperationMap extends SchemaDrivenDataMap.OutputObject
    ? InferFromOperationMap<$SS, ___$OperationMap, $ArgsMap>
    : {}

/**
 * Infer variables from a schema-less operation selection set.
 * Only extracts variables with explicit type annotations ($.String(), $.Int(), etc.).
 * Variables without type annotations (plain $) are not extracted.
 */
// dprint-ignore
export type InferFromOperationSchemaLess<
  $SS extends object,
  ___$ExtractedPropSigs =
     ExtractFromOperation<$SS, { f: {} }, { argsMap: { operations: {}, types: {}, directives: {} } }>,
  ___$ExtractedProps =
    ___$ExtractedPropSigs extends Obj.PropertySignature
      ? Obj.PropertySignature.ToProperty<___$ExtractedPropSigs>
      : {}
> =
Ts.Simplify.Top<UnionToIntersection<___$ExtractedProps>>

/**
 * Core inferer that takes an operation map directly.
 * Used as foundation for specialized operation-specific inferers.
 */
// dprint-ignore
export type InferFromOperationMap<
  $SS extends Select.SelectionSet.RootType<Select.StaticBuilderContext> | {},
  $ArgsMapLocationOperation extends SchemaDrivenDataMap.OutputObject,
  $ArgsMap extends SchemaDrivenDataMap,
  ___$ExtractedPropSigs =
     ExtractFromOperation<$SS, $ArgsMapLocationOperation, { argsMap: $ArgsMap }>,
  ___$ExtractedProps =
    ___$ExtractedPropSigs extends Obj.PropertySignature
      ? Obj.PropertySignature.ToProperty<___$ExtractedPropSigs>
      : {}
> =
// ___$ExtractedPropSigs
Ts.Simplify.Top<UnionToIntersection<___$ExtractedProps>>
