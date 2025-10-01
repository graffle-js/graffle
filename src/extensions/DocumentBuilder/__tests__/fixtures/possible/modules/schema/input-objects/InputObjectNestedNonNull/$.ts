import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as InputObjectNestedNonNull from './fields.js'

export interface InputObjectNestedNonNull extends $.Schema.InputObject {
  kind: 'InputObject'
  name: 'InputObjectNestedNonNull'
  isAllFieldsNullable: false
  fields: {
    InputObject: $Fields.InputObject
  }
}
