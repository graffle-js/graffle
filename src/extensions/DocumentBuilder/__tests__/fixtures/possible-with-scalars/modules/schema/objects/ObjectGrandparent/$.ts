import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as ObjectGrandparent from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 2 |
 * | **Implements** | {@link $Schema.InterfaceGrandparent} |
 */
export interface ObjectGrandparent extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ObjectGrandparent'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    me: $Fields.me
  }
}
