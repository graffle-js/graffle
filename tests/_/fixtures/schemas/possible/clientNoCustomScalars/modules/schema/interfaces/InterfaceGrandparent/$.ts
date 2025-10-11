import type {
  InterfaceChildA,
  InterfaceChildB,
  InterfaceParent,
  ObjectChildA,
  ObjectChildB,
  ObjectGrandparent,
  ObjectParent,
} from '../../$$.js'
import type * as $Fields from './fields.js'

export * as InterfaceGrandparent from './fields.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface} ↗ |
 * | **Fields** | 1 |
 * | **Implementors** | {@link $Schema.ObjectChildA}, {@link $Schema.ObjectChildB}, {@link $Schema.ObjectGrandparent}, {@link $Schema.ObjectParent}, {@link $Schema.InterfaceChildA}, {@link $Schema.InterfaceChildB}, {@link $Schema.InterfaceParent} |
 */
export interface InterfaceGrandparent {
  kind: 'Interface'
  name: 'InterfaceGrandparent'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
  }
  implementors: [
    ObjectChildA,
    ObjectChildB,
    ObjectGrandparent,
    ObjectParent,
    InterfaceChildA,
    InterfaceChildB,
    InterfaceParent,
  ]
  implementorsUnion:
    | ObjectChildA
    | ObjectChildB
    | ObjectGrandparent
    | ObjectParent
    | InterfaceChildA
    | InterfaceChildB
    | InterfaceParent
  implementorsIndex: {
    ObjectChildA: ObjectChildA
    ObjectChildB: ObjectChildB
    ObjectGrandparent: ObjectGrandparent
    ObjectParent: ObjectParent
    InterfaceChildA: InterfaceChildA
    InterfaceChildB: InterfaceChildB
    InterfaceParent: InterfaceParent
  }
}
