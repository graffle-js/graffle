import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'
import type * as $Fields from './fields.js'

export * as DateObject1 from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 1 |
 * | **Implements** | {@link $Schema.DateInterface1} |
 */
export interface DateObject1 extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'DateObject1'
  fields: {
    __typename: $Fields.__typename
    date1: $Fields.date1
  }
}
