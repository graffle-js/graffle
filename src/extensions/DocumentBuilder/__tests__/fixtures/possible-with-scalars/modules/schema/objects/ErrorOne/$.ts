import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as ErrorOne from './fields.js'

export interface ErrorOne extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ErrorOne'
  fields: {
    __typename: $Fields.__typename
    infoId: $Fields.infoId
    message: $Fields.message
  }
}
