import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as InputObjectNested from './fields.js'

export interface InputObjectNested extends $.Schema.InputObject {
  kind: 'InputObject'
  name: 'InputObjectNested'
  isAllFieldsNullable: true
  fields: {
    InputObject: $Fields.InputObject
  }
}
