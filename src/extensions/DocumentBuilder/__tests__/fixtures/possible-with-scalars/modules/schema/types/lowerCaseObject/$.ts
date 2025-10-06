import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as lowerCaseObject from './fields.js'

export interface lowerCaseObject extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'lowerCaseObject'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
  }
}
