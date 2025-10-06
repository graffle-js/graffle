import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'ObjectNestedWithArgs'
  }
}

export interface id extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'id'
  arguments: {
    filter: {
      kind: 'InputField'
      name: 'filter'
      inlineType: [0]
      namedType: $Schema.ID
    }
  }
  inlineType: [0]
  namedType: $Schema.ID
}

export interface $object extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'object'
  arguments: {
    boolean: {
      kind: 'InputField'
      name: 'boolean'
      inlineType: [0]
      namedType: $Schema.Boolean
    }
    float: {
      kind: 'InputField'
      name: 'float'
      inlineType: [0]
      namedType: $Schema.Float
    }
    int: {
      kind: 'InputField'
      name: 'int'
      inlineType: [0]
      namedType: $Schema.Int
    }
    string: {
      kind: 'InputField'
      name: 'string'
      inlineType: [0]
      namedType: $Schema.String
    }
  }
  inlineType: [0]
  namedType: $Schema.Object1
}
