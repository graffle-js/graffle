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
  members:
    | GrandparentInterfaceHierarchyMember.InterfaceChildA
    | GrandparentInterfaceHierarchyMember.InterfaceChildB
    | GrandparentInterfaceHierarchyMember.InterfaceGrandparent
    | GrandparentInterfaceHierarchyMember.InterfaceParent
}

export namespace GrandparentInterfaceHierarchyMember {
  export type InterfaceChildA = 'InterfaceChildA'
  export type InterfaceChildB = 'InterfaceChildB'
  export type InterfaceGrandparent = 'InterfaceGrandparent'
  export type InterfaceParent = 'InterfaceParent'
}
