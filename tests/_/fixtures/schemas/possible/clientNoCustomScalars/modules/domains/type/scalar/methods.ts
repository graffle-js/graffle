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
 * Query enum field documentation.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ABCEnum} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.abcEnum` |
 * | **Nullability** | Optional |
 */
export const abcEnum = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'abcEnum', context)

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
 * | **Type** | {@link $Schema.bigint} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.bigintField` |
 * | **Nullability** | Optional |
 */
export const bigintField = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'bigintField', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.bigint}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.bigintFieldNonNull` |
 * | **Nullability** | Required |
 */
export const bigintFieldNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'bigintFieldNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateArg` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const dateArg = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'dateArg', context)

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
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateArgList` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const dateArgList = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'dateArgList', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateArgNonNull` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const dateArgNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'dateArgNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateArgNonNullList` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const dateArgNonNullList = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'dateArgNonNullList', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateArgNonNullListNonNull` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const dateArgNonNullListNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'dateArgNonNullListNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.error` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const error = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'error', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.id` |
 * | **Nullability** | Optional |
 */
export const id = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'id', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.idNonNull` |
 * | **Nullability** | Required |
 */
export const idNonNull = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'idNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.string` |
 * | **Nullability** | Optional |
 */
const $string = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'string', context)
export { $string as string }

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.stringWithArgEnum` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const stringWithArgEnum = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'stringWithArgEnum', context)

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

/**
 * The given arguments are reflected back as a JSON string.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.stringWithArgs` |
 * | **Nullability** | Optional |
 * | **Arguments** | 5 |
 */
export const stringWithArgs = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'stringWithArgs', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.stringWithListArg` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const stringWithListArg = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'stringWithListArg', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.stringWithListArgRequired` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const stringWithListArgRequired = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'stringWithListArgRequired', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.stringWithRequiredArg` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const stringWithRequiredArg = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'stringWithRequiredArg', context)
