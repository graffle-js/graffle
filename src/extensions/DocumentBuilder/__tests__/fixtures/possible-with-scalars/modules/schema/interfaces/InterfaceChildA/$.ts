import type * as $ from '#graffle/utilities-for-generated'
import type { ObjectChildA } from '../../$$.js'
import type * as $Fields from './fields.js'

export * as InterfaceChildA from './fields.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface} ↗ |
 * | **Fields** | 3 |
 * | **Implementors** | {@link $Schema.ObjectChildA} |
 */
export interface InterfaceChildA extends $.Schema.Interface {
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
