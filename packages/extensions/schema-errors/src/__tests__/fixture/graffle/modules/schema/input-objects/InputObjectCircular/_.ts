import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as InputObjectCircular from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
 * | **Fields** | 2 |
 * | **All Fields Nullable** | Yes |
 */
export interface InputObjectCircular extends $.Schema.InputObject {
  kind: 'InputObject'
  name: 'InputObjectCircular'
  isAllFieldsNullable: true
  fields: {
    circular: $Fields.circular
    date: $Fields.date
  }
}
