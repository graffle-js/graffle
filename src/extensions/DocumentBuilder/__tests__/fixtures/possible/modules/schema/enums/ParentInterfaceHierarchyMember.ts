import type * as $ from '../../../../../../../../exports/utilities-for-generated.js'

export interface ParentInterfaceHierarchyMember extends $.Schema.Enum {
  kind: 'Enum'
  name: 'ParentInterfaceHierarchyMember'
  members: ['InterfaceChildA', 'InterfaceChildB', 'InterfaceParent']
  membersUnion:
    | 'InterfaceChildA'
    | 'InterfaceChildB'
    | 'InterfaceParent'
}
