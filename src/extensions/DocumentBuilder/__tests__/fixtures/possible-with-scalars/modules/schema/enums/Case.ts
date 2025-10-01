import type * as $ from '../../../../../../../../exports/utilities-for-generated.js'

export interface Case extends $.Schema.Enum {
  kind: 'Enum'
  name: 'Case'
  members: ['ErrorOne', 'ErrorTwo', 'Object1']
  membersUnion:
    | 'ErrorOne'
    | 'ErrorTwo'
    | 'Object1'
}
