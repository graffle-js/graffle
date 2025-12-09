import type * as $ from '#graffle/utilities-for-generated'
import type * as $Members from './members.js'

export * as ParentInterfaceHierarchyMember from './members.js'

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
export interface ParentInterfaceHierarchyMember extends $.Schema.Enum {
  kind: 'Enum'
  name: 'ParentInterfaceHierarchyMember'
  members:
    | $Members.InterfaceChildA
    | $Members.InterfaceChildB
    | $Members.InterfaceParent
}
