import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as InputObjectEnum from './fields.js'

export interface InputObjectEnum extends $.Schema.InputObject {
  kind: 'InputObject'
  name: 'InputObjectEnum'
  isAllFieldsNullable: true
  fields: {
    abcEnum: $Fields.abcEnum
  }
}
