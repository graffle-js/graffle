import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as ObjectChildA from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 4 |
 * | **Implements** | {@link $Schema.InterfaceChildA}, {@link $Schema.InterfaceGrandparent}, {@link $Schema.InterfaceParent} |
 */
export interface ObjectChildA extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ObjectChildA'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    b: $Fields.b
    c1: $Fields.c1
    me: $Fields.me
  }
}
