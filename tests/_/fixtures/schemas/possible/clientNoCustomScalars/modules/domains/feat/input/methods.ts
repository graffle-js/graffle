import { createRootFieldExecutor } from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.InputObjectNested` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const InputObjectNested = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'InputObjectNested', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.InputObjectNestedNonNull` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const InputObjectNestedNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'InputObjectNestedNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.argInputObjectCircular` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const argInputObjectCircular = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'argInputObjectCircular', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateArgInputObject` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const dateArgInputObject = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'dateArgInputObject', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.stringWithArgInputObject` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const stringWithArgInputObject = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'stringWithArgInputObject', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.stringWithArgInputObjectEnum` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const stringWithArgInputObjectEnum = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'stringWithArgInputObjectEnum', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.stringWithArgInputObjectRequired` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const stringWithArgInputObjectRequired = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'stringWithArgInputObjectRequired', context)
