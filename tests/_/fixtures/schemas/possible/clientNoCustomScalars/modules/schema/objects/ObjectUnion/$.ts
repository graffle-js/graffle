import type * as $Fields from './fields.js'

export * as ObjectUnion from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 1 |
 */
export interface ObjectUnion {
  kind: 'Object'
  name: 'ObjectUnion'
  fields: {
    __typename: $Fields.__typename
    fooBarUnion: $Fields.fooBarUnion
  }
}
