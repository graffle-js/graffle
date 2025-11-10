import type * as $ from '#graffle/utilities-for-generated'
import type { Object1ImplementingInterface, Object2ImplementingInterface } from '../../__.js'
import type * as $Fields from './fields.js'

export * as Interface from './fields.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Fields** | 1 |
 * | **Implementors** | {@link $Schema.Object1ImplementingInterface}, {@link $Schema.Object2ImplementingInterface} |
 */
export interface Interface extends $.Schema.Interface {
  kind: 'Interface'
  name: 'Interface'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
  }
  implementors: [Object1ImplementingInterface, Object2ImplementingInterface]
  implementorsUnion:
    | Object1ImplementingInterface
    | Object2ImplementingInterface
  implementorsIndex: {
    Object1ImplementingInterface: Object1ImplementingInterface
    Object2ImplementingInterface: Object2ImplementingInterface
  }
}
