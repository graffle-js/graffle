import { createRootFieldExecutor } from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

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
 * | **Type** | {@link $Schema.Interface} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.interfaceWithArgs` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const interfaceWithArgs = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'interfaceWithArgs', context)

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

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Result}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.resultNonNull` |
 * | **Nullability** | Required |
 * | **Arguments** | 1 |
 */
export const resultNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'resultNonNull', context)

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
 * | **Type** | {@link $Schema.FooBarUnion} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.unionFooBarWithArgs` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const unionFooBarWithArgs = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'unionFooBarWithArgs', context)
