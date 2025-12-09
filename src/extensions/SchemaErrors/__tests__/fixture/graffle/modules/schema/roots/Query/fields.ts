import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../_.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Query"`
 *
 * {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
 */
export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'Query'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface InputObjectNested extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'InputObjectNested'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [0]
      namedType: $Schema.InputObjectNested
    }
  }
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface InputObjectNestedNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'InputObjectNestedNonNull'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [1]
      namedType: $Schema.InputObjectNestedNonNull
    }
  }
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface abcEnum extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'abcEnum'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ABCEnum
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface argInputObjectCircular extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'argInputObjectCircular'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [0]
      namedType: $Schema.InputObjectCircular
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface bigintField extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'bigintField'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.bigint
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface bigintFieldNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'bigintFieldNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.bigint
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface date extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'date'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Date
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateArg extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArg'
  arguments: {
    date: {
      kind: 'InputField'
      name: 'date'
      inlineType: [0]
      namedType: $Schema.Date
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateArgInputObject extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArgInputObject'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [0]
      namedType: $Schema.InputObject
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateArgList extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArgList'
  arguments: {
    date: {
      kind: 'InputField'
      name: 'date'
      inlineType: [0, [1]]
      namedType: $Schema.Date
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateArgNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArgNonNull'
  arguments: {
    date: {
      kind: 'InputField'
      name: 'date'
      inlineType: [1]
      namedType: $Schema.Date
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateArgNonNullList extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArgNonNullList'
  arguments: {
    date: {
      kind: 'InputField'
      name: 'date'
      inlineType: [1, [0]]
      namedType: $Schema.Date
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateArgNonNullListNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArgNonNullListNonNull'
  arguments: {
    date: {
      kind: 'InputField'
      name: 'date'
      inlineType: [1, [1]]
      namedType: $Schema.Date
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateInterface1 extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateInterface1'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.DateInterface1
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateList extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateList'
  arguments: {}
  inlineType: [0, [1]]
  namedType: $Schema.Date
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateListList extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateListList'
  arguments: {}
  inlineType: [0, [1, [1]]]
  namedType: $Schema.Date
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateListNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateListNonNull'
  arguments: {}
  inlineType: [1, [1]]
  namedType: $Schema.Date
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Date
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateObject1 extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateObject1'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.DateObject1
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface dateUnion extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateUnion'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.DateUnion
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface error extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'error'
  arguments: {
    case: {
      kind: 'InputField'
      name: 'case'
      inlineType: [0]
      namedType: $Schema.String
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface id extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface idNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'idNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.ID
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
interface $interface extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interface'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Interface
}
export { type $interface as interface }

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface interfaceHierarchyChildA extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceHierarchyChildA'
  arguments: {
    type: {
      kind: 'InputField'
      name: 'type'
      inlineType: [0]
      namedType: $Schema.ChildAInterfaceHierarchyMember
    }
  }
  inlineType: [1, [1]]
  namedType: $Schema.InterfaceChildA
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface interfaceHierarchyChildB extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceHierarchyChildB'
  arguments: {
    type: {
      kind: 'InputField'
      name: 'type'
      inlineType: [0]
      namedType: $Schema.ChildBInterfaceHierarchyMember
    }
  }
  inlineType: [1, [1]]
  namedType: $Schema.InterfaceChildB
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface interfaceHierarchyGrandparents extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceHierarchyGrandparents'
  arguments: {
    type: {
      kind: 'InputField'
      name: 'type'
      inlineType: [0]
      namedType: $Schema.GrandparentInterfaceHierarchyMember
    }
  }
  inlineType: [1, [1]]
  namedType: $Schema.InterfaceGrandparent
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface interfaceHierarchyParents extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceHierarchyParents'
  arguments: {
    type: {
      kind: 'InputField'
      name: 'type'
      inlineType: [0]
      namedType: $Schema.ParentInterfaceHierarchyMember
    }
  }
  inlineType: [1, [1]]
  namedType: $Schema.InterfaceParent
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface interfaceNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Interface
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface interfaceWithArgs extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceWithArgs'
  arguments: {
    id: {
      kind: 'InputField'
      name: 'id'
      inlineType: [1]
      namedType: $Schema.ID
    }
  }
  inlineType: [0]
  namedType: $Schema.Interface
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface listInt extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'listInt'
  arguments: {}
  inlineType: [0, [0]]
  namedType: $Schema.Int
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface listIntNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'listIntNonNull'
  arguments: {}
  inlineType: [1, [1]]
  namedType: $Schema.Int
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface listListInt extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'listListInt'
  arguments: {}
  inlineType: [0, [0, [0]]]
  namedType: $Schema.Int
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface listListIntNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'listListIntNonNull'
  arguments: {}
  inlineType: [1, [1, [1]]]
  namedType: $Schema.Int
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface lowerCaseUnion extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'lowerCaseUnion'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.lowerCaseUnion
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
interface $object extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'object'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Object1
}
export { type $object as object }

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface objectList extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectList'
  arguments: {}
  inlineType: [0, [1]]
  namedType: $Schema.Object1
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface objectListNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectListNonNull'
  arguments: {}
  inlineType: [1, [1]]
  namedType: $Schema.Object1
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface objectNested extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectNested'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ObjectNested
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface objectNestedWithArgs extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectNestedWithArgs'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ObjectNestedWithArgs
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface objectNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Object1
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface objectWithArgs extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectWithArgs'
  arguments: {
    boolean: {
      kind: 'InputField'
      name: 'boolean'
      inlineType: [0]
      namedType: $Schema.Boolean
    }
    float: {
      kind: 'InputField'
      name: 'float'
      inlineType: [0]
      namedType: $Schema.Float
    }
    id: {
      kind: 'InputField'
      name: 'id'
      inlineType: [0]
      namedType: $Schema.ID
    }
    int: {
      kind: 'InputField'
      name: 'int'
      inlineType: [0]
      namedType: $Schema.Int
    }
    string: {
      kind: 'InputField'
      name: 'string'
      inlineType: [0]
      namedType: $Schema.String
    }
  }
  inlineType: [0]
  namedType: $Schema.Object1
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ReservedWordsEnum} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.reservedWordsEnum` |
 * | **Nullability** | Optional |
 */
export interface reservedWordsEnum extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'reservedWordsEnum'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ReservedWordsEnum
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface result extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'result'
  arguments: {
    case: {
      kind: 'InputField'
      name: 'case'
      inlineType: [1]
      namedType: $Schema.Case
    }
  }
  inlineType: [0]
  namedType: $Schema.Result
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface resultNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'resultNonNull'
  arguments: {
    case: {
      kind: 'InputField'
      name: 'case'
      inlineType: [0]
      namedType: $Schema.Case
    }
  }
  inlineType: [1]
  namedType: $Schema.Result
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
interface $string extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'string'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.String
}
export { type $string as string }

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface stringWithArgEnum extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithArgEnum'
  arguments: {
    ABCEnum: {
      kind: 'InputField'
      name: 'ABCEnum'
      inlineType: [0]
      namedType: $Schema.ABCEnum
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface stringWithArgInputObject extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithArgInputObject'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [0]
      namedType: $Schema.InputObject
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface stringWithArgInputObjectEnum extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithArgInputObjectEnum'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [1]
      namedType: $Schema.InputObjectEnum
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface stringWithArgInputObjectRequired extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithArgInputObjectRequired'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [1]
      namedType: $Schema.InputObject
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface stringWithArgs extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithArgs'
  arguments: {
    boolean: {
      kind: 'InputField'
      name: 'boolean'
      inlineType: [0]
      namedType: $Schema.Boolean
    }
    float: {
      kind: 'InputField'
      name: 'float'
      inlineType: [0]
      namedType: $Schema.Float
    }
    id: {
      kind: 'InputField'
      name: 'id'
      inlineType: [0]
      namedType: $Schema.ID
    }
    /**
     * @deprecated Example of argument deprecation reason here.
     */
    int: {
      kind: 'InputField'
      name: 'int'
      inlineType: [0]
      namedType: $Schema.Int
    }
    /**
     * Example of some argument documentation here.
     */
    string: {
      kind: 'InputField'
      name: 'string'
      inlineType: [0]
      namedType: $Schema.String
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface stringWithListArg extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithListArg'
  arguments: {
    ints: {
      kind: 'InputField'
      name: 'ints'
      inlineType: [0, [0]]
      namedType: $Schema.Int
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface stringWithListArgRequired extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithListArgRequired'
  arguments: {
    ints: {
      kind: 'InputField'
      name: 'ints'
      inlineType: [1, [1]]
      namedType: $Schema.Int
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface stringWithRequiredArg extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithRequiredArg'
  arguments: {
    string: {
      kind: 'InputField'
      name: 'string'
      inlineType: [1]
      namedType: $Schema.String
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface unionFooBar extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'unionFooBar'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.FooBarUnion
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface unionFooBarNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'unionFooBarNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.FooBarUnion
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface unionFooBarWithArgs extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'unionFooBarWithArgs'
  arguments: {
    id: {
      kind: 'InputField'
      name: 'id'
      inlineType: [0]
      namedType: $Schema.ID
    }
  }
  inlineType: [0]
  namedType: $Schema.FooBarUnion
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface unionObject extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'unionObject'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ObjectUnion
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
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
export interface unionObjectNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'unionObjectNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.ObjectUnion
}
