import { createRootFieldExecutor } from '#graffle/extensions/document-builder'
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
export const interfaceHierarchyChildA = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'interfaceHierarchyChildA', context)

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
export const interfaceHierarchyChildB = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'interfaceHierarchyChildB', context)

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
export const interfaceHierarchyGrandparents = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'interfaceHierarchyGrandparents', context)

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
export const interfaceHierarchyParents = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'interfaceHierarchyParents', context)
