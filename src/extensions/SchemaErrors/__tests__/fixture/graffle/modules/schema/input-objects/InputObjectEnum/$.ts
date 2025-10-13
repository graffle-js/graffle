import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as InputObjectEnum from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
 * | **Fields** | 1 |
 * | **All Fields Nullable** | Yes |
 */
export interface InputObjectEnum extends $.Schema.InputObject {
  kind: 'InputObject'
  name: 'InputObjectEnum'
  isAllFieldsNullable: true
  fields: {
    abcEnum: $Fields.abcEnum
  }
}
