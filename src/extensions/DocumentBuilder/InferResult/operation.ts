import type { Grafaid } from '#lib/grafaid'
import type { Null } from '@wollybeard/kit'
import type { OperationTypeNode } from 'graphql'
import type { OutputObjectLike } from './OutputObjectLike.js'

// dprint-ignore
export type OperationQuery<$SelectionSet extends object, $Schema> =
  Operation<$SelectionSet, $Schema, OperationTypeNode.QUERY>

// dprint-ignore
export type OperationMutation<$SelectionSet extends object, $Schema> =
  Operation<$SelectionSet, $Schema, OperationTypeNode.MUTATION>

// dprint-ignore
export type OperationSubscription<$SelectionSet extends object, $Schema> =
  Operation<$SelectionSet, $Schema, OperationTypeNode.SUBSCRIPTION>

export type Operation<
  $SelectionSet extends object,
  $Schema,
  $OperationType extends Grafaid.Document.OperationTypeNode,
> = OutputObjectLike<
  $SelectionSet,
  $Schema,
  // @ts-expect-error: No $Schema constraint to avoid "compare depth limit"
  Null.Exclude<$Schema['Root'][$OperationType]>
>
