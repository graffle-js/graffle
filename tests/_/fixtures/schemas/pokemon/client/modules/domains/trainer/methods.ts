import { createRootFieldExecutor } from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.trainerByName` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const findByName = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'trainerByName', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.trainers` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export const list = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'trainers', context)
