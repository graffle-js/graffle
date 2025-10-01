import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { ObjectChildB } from '../../$$.js'
import type * as $Fields from './fields.js'

export * as InterfaceChildB from './fields.js'

export interface InterfaceChildB extends $.Schema.Interface {
  kind: 'Interface'
  name: 'InterfaceChildB'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    b: $Fields.b
    c2: $Fields.c2
  }
  implementors: [ObjectChildB]
  implementorsUnion: ObjectChildB
  implementorsIndex: {
    ObjectChildB: ObjectChildB
  }
}
