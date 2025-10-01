import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'ObjectChildB'
  }
}

export interface a extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'a'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}

export interface b extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'b'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}

export interface c2 extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'c2'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}

export interface me extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'me'
  arguments: {}
  inlineType: [1, [1]]
  namedType: $Schema.Int
}
