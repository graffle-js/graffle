import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { ObjectChildB } from '../../$$.js'
import type * as $Fields from './fields.js'

export * as InterfaceChildB from './fields.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface} ↗ |
 * | **Fields** | 3 |
 * | **Implementors** | {@link $Schema.ObjectChildB} |
 */
export interface InterfaceChildB extends $.Schema.Interface {
  kind: 'Interface'
  name: 'InterfaceChildB'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    b: $Fields.b
    c2: $Fields.c2
  }
  implementors: [ObjectChildB]
  implementorsUnion: ObjectChildB
  implementorsIndex: {
    ObjectChildB: ObjectChildB
  }
}
