// Runtime methods for domain organization
import { executeRootField } from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.InterfaceChildA}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.interfaceHierarchyChildA` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 * | **Arguments** | 1 |
 */
export const interfaceHierarchyChildA = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'interfaceHierarchyChildA', selectionSetOrArgs)
  }
}

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.InterfaceChildB}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.interfaceHierarchyChildB` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 * | **Arguments** | 1 |
 */
export const interfaceHierarchyChildB = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'interfaceHierarchyChildB', selectionSetOrArgs)
  }
}

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.InterfaceGrandparent}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.interfaceHierarchyGrandparents` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 * | **Arguments** | 1 |
 */
export const interfaceHierarchyGrandparents = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'interfaceHierarchyGrandparents', selectionSetOrArgs)
  }
}

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.InterfaceParent}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.interfaceHierarchyParents` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 * | **Arguments** | 1 |
 */
export const interfaceHierarchyParents = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'interfaceHierarchyParents', selectionSetOrArgs)
  }
}
