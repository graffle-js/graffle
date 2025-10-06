import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'Query'
  }
}

export interface id extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

export interface idNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'idNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.ID
}
