import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'ObjectGrandparent'
  }
}

export interface a extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'a'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}

export interface me extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'me'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Int
}
