import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'Object2ImplementingInterface'
  }
}

interface $boolean extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'boolean'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Boolean
}
export { type $boolean as boolean }

export interface id extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}
