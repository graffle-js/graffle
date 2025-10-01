import type { Schema as $Schema } from '../../$.js'

export interface __typename {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'Being'
  }
}

export interface id {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

export interface name {
  kind: 'OutputField'
  name: 'name'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.String
}
