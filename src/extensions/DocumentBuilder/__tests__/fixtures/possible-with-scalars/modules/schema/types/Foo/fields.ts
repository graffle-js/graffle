import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'Foo'
  }
}

/**
 * Field documentation.
 *
 * @deprecated Field a is deprecated.
 */
export interface id extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}
