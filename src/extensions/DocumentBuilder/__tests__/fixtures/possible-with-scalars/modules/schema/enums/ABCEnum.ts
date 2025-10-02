import type * as $ from '../../../../../../../../exports/utilities-for-generated.js'

/**
 * Enum documentation.
 *
 * Members
 * "A" - (DEPRECATED: Enum value A is deprecated.)
 * "B" - Enum B member documentation.
 * "C" - (DEPRECATED: Enum value C is deprecated.)
 */
export interface ABCEnum extends $.Schema.Enum {
  kind: 'Enum'
  name: 'ABCEnum'
  members: ['A', 'B', 'C']
  membersUnion:
    | 'A'
    | 'B'
    | 'C'
}
