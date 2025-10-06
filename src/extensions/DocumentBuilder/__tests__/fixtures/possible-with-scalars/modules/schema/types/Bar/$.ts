import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as Bar from './fields.js'

export interface Bar extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'Bar'
  fields: {
    __typename: $Fields.__typename
    int: $Fields.int
  }
}
