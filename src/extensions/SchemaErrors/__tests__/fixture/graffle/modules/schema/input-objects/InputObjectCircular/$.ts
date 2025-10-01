import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as InputObjectCircular from './fields.js'

export interface InputObjectCircular extends $.Schema.InputObject {
  kind: 'InputObject'
  name: 'InputObjectCircular'
  isAllFieldsNullable: true
  fields: {
    circular: $Fields.circular
    date: $Fields.date
  }
}
