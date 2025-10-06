/**
 * InferOperationVariablesFromSelectionSet - Type-level variable extraction from selection sets
 *
 * This module extracts GraphQL variables from selection sets that use $var markers.
 * It recursively traverses the selection set to find all variable declarations,
 * using the ArgumentsMap literal types to determine proper types for each variable.
 */

import type { Simplify, UnionToIntersection } from 'type-fest'
import type { SchemaDrivenDataMap } from '../../../types/SchemaDrivenDataMap/$.js'
import type { PropertySignature } from '../PropertySignature.js'
import type { Select } from '../Select/$.js'
import type { ExtractFromOperation } from './extract.js'

/**
 * Infer variables from a query operation selection set.
 */
// dprint-ignore
export type InferFromQuery<
  $SS extends object,
  $ArgsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithQuery,
  // @ts-expect-error todo
  ___$OperationMap = $ArgsMap['operations']['query']
> =
  ___$OperationMap extends SchemaDrivenDataMap.OutputObject
    ? InferFromOperationMap<$SS, ___$OperationMap, $ArgsMap>
    : {}

/**
 * Infer variables from a mutation operation selection set.
 */
// dprint-ignore
export type InferFromMutation<
  $SS extends object,
  $ArgsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithMutation,
  // @ts-expect-error todo
  ___$OperationMap = $ArgsMap['operations']['mutation']
> =
  ___$OperationMap extends SchemaDrivenDataMap.OutputObject
    ? InferFromOperationMap<$SS, ___$OperationMap, $ArgsMap>
    : {}

/**
 * Infer variables from a subscription operation selection set.
 */
// dprint-ignore
export type InferFromSubscription<
  $SS extends object,
  $ArgsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithSubscription,
  // @ts-expect-error todo
  ___$OperationMap = $ArgsMap['operations']['subscription']
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
    ___$ExtractedPropSigs extends PropertySignature
      ? PropertySignature.ToProperty<___$ExtractedPropSigs>
      : {}
> =
// ___$ExtractedPropSigs
Simplify<UnionToIntersection<___$ExtractedProps>>
