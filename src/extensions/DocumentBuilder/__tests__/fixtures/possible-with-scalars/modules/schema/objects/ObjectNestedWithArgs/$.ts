import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'
import type * as $Fields from './fields.js'

export * as ObjectNestedWithArgs from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 2 |
 */
export interface ObjectNestedWithArgs extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ObjectNestedWithArgs'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
    object: $Fields.object
  }
}
