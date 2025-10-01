import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { ErrorOne, ErrorTwo } from '../../$$.js'
import type * as $Fields from './fields.js'

export * as Error from './fields.js'

export interface Error extends $.Schema.Interface {
  kind: 'Interface'
  name: 'Error'
  fields: {
    __typename: $Fields.__typename
    message: $Fields.message
  }
  implementors: [ErrorOne, ErrorTwo]
  implementorsUnion:
    | ErrorOne
    | ErrorTwo
  implementorsIndex: {
    ErrorOne: ErrorOne
    ErrorTwo: ErrorTwo
  }
}
