import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as Mutation from './fields.js'

export interface Mutation extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'Mutation'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
    idNonNull: $Fields.idNonNull
  }
}
