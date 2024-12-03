import type { OperationTypeNode } from 'graphql'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { type ExcludeNull } from '../../lib/prelude.js'
import type { Schema } from '../../types/Schema/__.js'
import type { OutputObjectLike } from './OutputObjectLike.js'

// dprint-ignore
export type OperationQuery<$SelectionSet extends object, $Schema extends Schema> =
  Operation<$SelectionSet, $Schema, OperationTypeNode.QUERY>

// dprint-ignore
export type OperationMutation<$SelectionSet extends object, $Schema extends Schema> =
  Operation<$SelectionSet, $Schema, OperationTypeNode.MUTATION>

// dprint-ignore
export type OperationSubscription<$SelectionSet extends object, $Schema extends Schema> =
  Operation<$SelectionSet, $Schema, OperationTypeNode.SUBSCRIPTION>

export type Operation<
  $SelectionSet extends object,
  $Schema extends Schema,
  $OperationType extends Grafaid.Document.OperationTypeNode,
> = OutputObjectLike<$SelectionSet, $Schema, ExcludeNull<$Schema['Root'][$OperationType]>>
