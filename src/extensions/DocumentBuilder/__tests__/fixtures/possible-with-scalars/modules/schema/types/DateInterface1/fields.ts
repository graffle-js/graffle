import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'DateInterface1'
  }
}

export interface date1 extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'date1'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Date
}
