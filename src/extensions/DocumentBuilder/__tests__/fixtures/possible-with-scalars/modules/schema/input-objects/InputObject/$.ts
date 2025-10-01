import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as InputObject from './fields.js'

export interface InputObject extends $.Schema.InputObject {
  kind: 'InputObject'
  name: 'InputObject'
  isAllFieldsNullable: true
  fields: {
    abcEnum: $Fields.abcEnum
    date: $Fields.date
    dateRequired: $Fields.dateRequired
    id: $Fields.id
    idRequired: $Fields.idRequired
  }
}
