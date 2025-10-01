import type { Schema as $Schema } from '../../$.js'

export interface contains {
  kind: 'InputField'
  name: 'contains'
  inlineType: [0]
  namedType: $Schema.String
}

interface $in {
  kind: 'InputField'
  name: 'in'
  inlineType: [0, [1]]
  namedType: $Schema.String
}
export { type $in as in }
