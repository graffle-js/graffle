import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'ObjectUnion'
  }
}

export interface fooBarUnion extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'fooBarUnion'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.FooBarUnion
}
