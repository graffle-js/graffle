import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as Foo from './fields.js'

/**
 * Object documentation.
 */
export interface Foo extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'Foo'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
  }
}
