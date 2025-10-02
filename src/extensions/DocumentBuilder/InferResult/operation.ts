import type { OperationTypeNode } from 'graphql'
import type { Grafaid } from '../../../lib/grafaid/$.js'
import { type ExcludeNull } from '../../../lib/prelude.js'
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
  ExcludeNull<$Schema['Root'][$OperationType]>
>
