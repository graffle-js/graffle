import type * as $Fields from './fields.js'

export * as DateFilter from './fields.js'

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
export interface DateFilter {
  kind: 'InputObject'
  name: 'DateFilter'
  isAllFieldsNullable: true
  fields: {
    gte: $Fields.gte
    lte: $Fields.lte
  }
}
