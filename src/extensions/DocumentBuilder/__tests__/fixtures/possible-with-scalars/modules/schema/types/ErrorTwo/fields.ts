import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'ErrorTwo'
  }
}

export interface infoInt extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'infoInt'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Int
}

export interface message extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'message'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}
