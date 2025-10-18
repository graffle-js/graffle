// Runtime methods for domain organization
import { executeRootField } from '#graffle/extensions/document-builder/methods-instance/requestMethods.js'
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
const $object = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'object', selectionSetOrArgs)
  }
}
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
export const objectList = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'objectList', selectionSetOrArgs)
  }
}

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
export const objectListNonNull = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'objectListNonNull', selectionSetOrArgs)
  }
}

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
export const objectNested = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'objectNested', selectionSetOrArgs)
  }
}

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
export const objectNestedWithArgs = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'objectNestedWithArgs', selectionSetOrArgs)
  }
}

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
export const objectNonNull = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'objectNonNull', selectionSetOrArgs)
  }
}

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
export const objectWithArgs = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'objectWithArgs', selectionSetOrArgs)
  }
}
