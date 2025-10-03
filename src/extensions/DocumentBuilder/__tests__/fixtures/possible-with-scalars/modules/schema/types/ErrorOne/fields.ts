import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'ErrorOne'
  }
}

export interface infoId extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'infoId'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

export interface message extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'message'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}
