import type * as $Fields from './fields.js'

export * as InputObjectNestedNonNull from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
 * | **Fields** | 1 |
 * | **All Fields Nullable** | No |
 */
export interface InputObjectNestedNonNull {
  kind: 'InputObject'
  name: 'InputObjectNestedNonNull'
  isAllFieldsNullable: false
  fields: {
    InputObject: $Fields.InputObject
  }
}
