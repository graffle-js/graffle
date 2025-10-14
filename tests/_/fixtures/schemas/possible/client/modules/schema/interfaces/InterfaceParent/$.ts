import type { InterfaceChildA, InterfaceChildB, ObjectChildA, ObjectChildB, ObjectParent } from '../../$$.js'
import type * as $Fields from './fields.js'

export * as InterfaceParent from './fields.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Fields** | 2 |
 * | **Implementors** | {@link $Schema.ObjectChildA}, {@link $Schema.ObjectChildB}, {@link $Schema.ObjectParent}, {@link $Schema.InterfaceChildA}, {@link $Schema.InterfaceChildB} |
 */
export interface InterfaceParent {
  kind: 'Interface'
  name: 'InterfaceParent'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    b: $Fields.b
  }
  implementors: [ObjectChildA, ObjectChildB, ObjectParent, InterfaceChildA, InterfaceChildB]
  implementorsUnion:
    | ObjectChildA
    | ObjectChildB
    | ObjectParent
    | InterfaceChildA
    | InterfaceChildB
  implementorsIndex: {
    ObjectChildA: ObjectChildA
    ObjectChildB: ObjectChildB
    ObjectParent: ObjectParent
    InterfaceChildA: InterfaceChildA
    InterfaceChildB: InterfaceChildB
  }
}
