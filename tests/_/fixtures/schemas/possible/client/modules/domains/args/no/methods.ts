import { createRootFieldExecutor } from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

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
 * | **Path** | `Query.date` |
 * | **Nullability** | Optional |
 */
export const date = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'date', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.DateInterface1} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateInterface1` |
 * | **Nullability** | Optional |
 */
export const dateInterface1 = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'dateInterface1', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateList` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export const dateList = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'dateList', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateListList` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export const dateListList = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'dateListList', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateListNonNull` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 */
export const dateListNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'dateListNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateNonNull` |
 * | **Nullability** | Required |
 */
export const dateNonNull = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'dateNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.DateObject1} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateObject1` |
 * | **Nullability** | Optional |
 */
export const dateObject1 = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'dateObject1', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.DateUnion} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateUnion` |
 * | **Nullability** | Optional |
 */
export const dateUnion = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'dateUnion', context)

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
 * | **Type** | {@link $Schema.Interface} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.interface` |
 * | **Nullability** | Optional |
 */
const $interface = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'interface', context)
export { $interface as interface }

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Interface}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.interfaceNonNull` |
 * | **Nullability** | Required |
 */
export const interfaceNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'interfaceNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.listInt` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export const listInt = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'listInt', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.listIntNonNull` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 */
export const listIntNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'listIntNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.listListInt` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export const listListInt = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'listListInt', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.listListIntNonNull` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 */
export const listListIntNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'listListIntNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.lowerCaseUnion} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.lowerCaseUnion` |
 * | **Nullability** | Optional |
 */
export const lowerCaseUnion = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'lowerCaseUnion', context)

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
 * | **Type** | {@link $Schema.FooBarUnion} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.unionFooBar` |
 * | **Nullability** | Optional |
 */
export const unionFooBar = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'unionFooBar', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.FooBarUnion}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.unionFooBarNonNull` |
 * | **Nullability** | Required |
 */
export const unionFooBarNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'unionFooBarNonNull', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ObjectUnion} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.unionObject` |
 * | **Nullability** | Optional |
 */
export const unionObject = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'unionObject', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ObjectUnion}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.unionObjectNonNull` |
 * | **Nullability** | Required |
 */
export const unionObjectNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'unionObjectNonNull', context)
