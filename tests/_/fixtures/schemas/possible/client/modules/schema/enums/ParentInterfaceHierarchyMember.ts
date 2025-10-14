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
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Members** | 3 |
 */
export interface ParentInterfaceHierarchyMember {
  kind: 'Enum'
  name: 'ParentInterfaceHierarchyMember'
  members: ['InterfaceChildA', 'InterfaceChildB', 'InterfaceParent']
  membersUnion:
    | 'InterfaceChildA'
    | 'InterfaceChildB'
    | 'InterfaceParent'
}
