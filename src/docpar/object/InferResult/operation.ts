import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { Null } from '@wollybeard/kit'
import type { OutputObjectLike } from './OutputObjectLike.js'

// dprint-ignore
export type OperationQuery<$SelectionSet extends object, $Schema> =
  Operation<$SelectionSet, $Schema, GraphqlKit.Schema.OperationType.QUERY>

// dprint-ignore
export type OperationMutation<$SelectionSet extends object, $Schema> =
  Operation<$SelectionSet, $Schema, GraphqlKit.Schema.OperationType.MUTATION>

// dprint-ignore
export type OperationSubscription<$SelectionSet extends object, $Schema> =
  Operation<$SelectionSet, $Schema, GraphqlKit.Schema.OperationType.SUBSCRIPTION>

export type Operation<
  $SelectionSet extends object,
  $Schema,
  $OperationType extends GraphqlKit.Schema.OperationType.OperationType,
> = OutputObjectLike<
  $SelectionSet,
  $Schema,
  // @ts-expect-error: No $Schema constraint to avoid "compare depth limit"
  Null.Exclude<$Schema['Root'][$OperationType]>
>

/**
 * Operation type inference for schema-less mode.
 * All fields are typed as `unknown` since no schema information is available.
 */
export type OperationSchemaLess<$SelectionSet extends object> = OutputObjectLike.SchemaLess<$SelectionSet>
