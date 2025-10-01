import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'Object1'
  }
}

export interface ABCEnum extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'ABCEnum'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ABCEnum
}

interface $boolean extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'boolean'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Boolean
}
export { type $boolean as boolean }

export interface float extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'float'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Float
}

export interface id extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

export interface int extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'int'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Int
}

interface $string extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'string'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.String
}
export { type $string as string }
