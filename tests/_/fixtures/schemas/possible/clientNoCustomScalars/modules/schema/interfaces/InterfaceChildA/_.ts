import type { ObjectChildA } from '../../__.js'
import type * as $Fields from './fields.js'

export * as InterfaceChildA from './fields.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Fields** | 3 |
 * | **Implementors** | {@link $Schema.ObjectChildA} |
 */
export interface InterfaceChildA {
  kind: 'Interface'
  name: 'InterfaceChildA'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    b: $Fields.b
    c1: $Fields.c1
  }
  implementors: [ObjectChildA]
  implementorsUnion: ObjectChildA
  implementorsIndex: {
    ObjectChildA: ObjectChildA
  }
}
