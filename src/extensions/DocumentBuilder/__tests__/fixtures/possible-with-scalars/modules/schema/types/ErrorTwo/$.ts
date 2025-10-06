import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as ErrorTwo from './fields.js'

export interface ErrorTwo extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ErrorTwo'
  fields: {
    __typename: $Fields.__typename
    infoInt: $Fields.infoInt
    message: $Fields.message
  }
}
