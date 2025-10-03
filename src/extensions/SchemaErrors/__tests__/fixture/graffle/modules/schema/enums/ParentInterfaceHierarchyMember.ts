import type * as $ from '#graffle/utilities-for-generated'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * **Members:**
 * - `InterfaceChildA`
 * - `InterfaceChildB`
 * - `InterfaceParent`
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum} ↗ |
 * | **Members** | 3 |
 */
export interface ParentInterfaceHierarchyMember extends $.Schema.Enum {
  kind: 'Enum'
  name: 'ParentInterfaceHierarchyMember'
  members: ['InterfaceChildA', 'InterfaceChildB', 'InterfaceParent']
  membersUnion:
    | 'InterfaceChildA'
    | 'InterfaceChildB'
    | 'InterfaceParent'
}
