import type * as $Members from './members.js'

export * as GrandparentInterfaceHierarchyMember from './members.js'

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
export interface GrandparentInterfaceHierarchyMember {
  kind: 'Enum'
  name: 'GrandparentInterfaceHierarchyMember'
  members:
    | $Members.InterfaceChildA
    | $Members.InterfaceChildB
    | $Members.InterfaceGrandparent
    | $Members.InterfaceParent
}
