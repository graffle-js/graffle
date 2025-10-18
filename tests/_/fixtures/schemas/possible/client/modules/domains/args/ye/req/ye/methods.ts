// Runtime methods for domain organization
import { executeRootField } from '#graffle/extensions/document-builder/methods-instance/requestMethods.js'
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
export const InputObjectNested = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'InputObjectNested', selectionSetOrArgs)
  }
}

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
export const InputObjectNestedNonNull = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'InputObjectNestedNonNull', selectionSetOrArgs)
  }
}

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
export const dateArgNonNull = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'dateArgNonNull', selectionSetOrArgs)
  }
}

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
export const dateArgNonNullList = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'dateArgNonNullList', selectionSetOrArgs)
  }
}

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
export const dateArgNonNullListNonNull = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'dateArgNonNullListNonNull', selectionSetOrArgs)
  }
}

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

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Result} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.result` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const result = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'result', selectionSetOrArgs)
  }
}

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
export const stringWithArgInputObjectEnum = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'stringWithArgInputObjectEnum', selectionSetOrArgs)
  }
}

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
export const stringWithArgInputObjectRequired = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'stringWithArgInputObjectRequired', selectionSetOrArgs)
  }
}

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
export const stringWithListArgRequired = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'stringWithListArgRequired', selectionSetOrArgs)
  }
}

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
export const stringWithRequiredArg = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'stringWithRequiredArg', selectionSetOrArgs)
  }
}
