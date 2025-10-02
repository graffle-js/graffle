import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'
import type * as $Fields from './fields.js'

export * as InputObjectNested from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject} ↗ |
 * | **Fields** | 1 |
 * | **All Fields Nullable** | Yes |
 */
export interface InputObjectNested extends $.Schema.InputObject {
  kind: 'InputObject'
  name: 'InputObjectNested'
  isAllFieldsNullable: true
  fields: {
    InputObject: $Fields.InputObject
  }
}
