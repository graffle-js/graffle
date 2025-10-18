import { createRootFieldExecutor } from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Object1} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.object` |
 * | **Nullability** | Optional |
 */
const $object = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'object', context)
export { $object as object }

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Object1}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.objectList` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export const objectList = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'objectList', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Object1}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.objectListNonNull` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 */
export const objectListNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'objectListNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ObjectNested} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.objectNested` |
 * | **Nullability** | Optional |
 */
export const objectNested = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'objectNested', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ObjectNestedWithArgs} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.objectNestedWithArgs` |
 * | **Nullability** | Optional |
 */
export const objectNestedWithArgs = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'objectNestedWithArgs', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Object1}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.objectNonNull` |
 * | **Nullability** | Required |
 */
export const objectNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'objectNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Object1} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.objectWithArgs` |
 * | **Nullability** | Optional |
 * | **Arguments** | 5 |
 */
export const objectWithArgs = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'objectWithArgs', context)
