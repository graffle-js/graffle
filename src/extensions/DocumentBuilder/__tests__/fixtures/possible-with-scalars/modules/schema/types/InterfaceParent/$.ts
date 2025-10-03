import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { InterfaceChildA, InterfaceChildB, ObjectChildA, ObjectChildB, ObjectParent } from '../../$$.js'
import type * as $Fields from './fields.js'

export * as InterfaceParent from './fields.js'

export interface InterfaceParent extends $.Schema.Interface {
  kind: 'Interface'
  name: 'InterfaceParent'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    b: $Fields.b
  }
  implementors: [ObjectChildA, ObjectChildB, ObjectParent, InterfaceChildA, InterfaceChildB]
  implementorsUnion:
    | ObjectChildA
    | ObjectChildB
    | ObjectParent
    | InterfaceChildA
    | InterfaceChildB
  implementorsIndex: {
    ObjectChildA: ObjectChildA
    ObjectChildB: ObjectChildB
    ObjectParent: ObjectParent
    InterfaceChildA: InterfaceChildA
    InterfaceChildB: InterfaceChildB
  }
}
