import type * as $Fields from './fields.js'

export * as ObjectChildB from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 4 |
 * | **Implements** | {@link $Schema.InterfaceChildB}, {@link $Schema.InterfaceGrandparent}, {@link $Schema.InterfaceParent} |
 */
export interface ObjectChildB {
  kind: 'Object'
  name: 'ObjectChildB'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    b: $Fields.b
    c2: $Fields.c2
    me: $Fields.me
  }
}
