import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as Query from './fields.js'

export interface Query extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'Query'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
    idNonNull: $Fields.idNonNull
  }
}
