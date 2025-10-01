import type * as $ from '../../../../../../../../exports/utilities-for-generated.js'

export interface GrandparentInterfaceHierarchyMember extends $.Schema.Enum {
  kind: 'Enum'
  name: 'GrandparentInterfaceHierarchyMember'
  members: ['InterfaceChildA', 'InterfaceChildB', 'InterfaceGrandparent', 'InterfaceParent']
  membersUnion:
    | 'InterfaceChildA'
    | 'InterfaceChildB'
    | 'InterfaceGrandparent'
    | 'InterfaceParent'
}
