import type * as $Fields from './fields.js'

export * as StringFilter from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject} ↗ |
 * | **Fields** | 2 |
 * | **All Fields Nullable** | Yes |
 */
export interface StringFilter {
  kind: 'InputObject'
  name: 'StringFilter'
  isAllFieldsNullable: true
  fields: {
    contains: $Fields.contains
    in: $Fields.in
  }
}
