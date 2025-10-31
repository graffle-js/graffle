import type * as $ from '#graffle/utilities-for-generated'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * **Members:**
 * - `InterfaceChildA`
 * - `InterfaceChildB`
 * - `InterfaceGrandparent`
 * - `InterfaceParent`
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Members** | 4 |
 */
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
