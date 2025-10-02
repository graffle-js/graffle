import type * as $ from '../../../../../../../../exports/utilities-for-generated.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * **Members:**
 * - `ErrorOne`
 * - `ErrorTwo`
 * - `Object1`
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum} ↗ |
 * | **Members** | 3 |
 */
export interface Case extends $.Schema.Enum {
  kind: 'Enum'
  name: 'Case'
  members: ['ErrorOne', 'ErrorTwo', 'Object1']
  membersUnion:
    | 'ErrorOne'
    | 'ErrorTwo'
    | 'Object1'
}
