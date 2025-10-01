import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type {
  InterfaceChildA,
  InterfaceChildB,
  InterfaceParent,
  ObjectChildA,
  ObjectChildB,
  ObjectGrandparent,
  ObjectParent,
} from '../../$$.js'
import type * as $Fields from './fields.js'

export * as InterfaceGrandparent from './fields.js'

export interface InterfaceGrandparent extends $.Schema.Interface {
  kind: 'Interface'
  name: 'InterfaceGrandparent'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
  }
  implementors: [
    ObjectChildA,
    ObjectChildB,
    ObjectGrandparent,
    ObjectParent,
    InterfaceChildA,
    InterfaceChildB,
    InterfaceParent,
  ]
  implementorsUnion:
    | ObjectChildA
    | ObjectChildB
    | ObjectGrandparent
    | ObjectParent
    | InterfaceChildA
    | InterfaceChildB
    | InterfaceParent
  implementorsIndex: {
    ObjectChildA: ObjectChildA
    ObjectChildB: ObjectChildB
    ObjectGrandparent: ObjectGrandparent
    ObjectParent: ObjectParent
    InterfaceChildA: InterfaceChildA
    InterfaceChildB: InterfaceChildB
    InterfaceParent: InterfaceParent
  }
}
