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
  members:
    | ParentInterfaceHierarchyMember.InterfaceChildA
    | ParentInterfaceHierarchyMember.InterfaceChildB
    | ParentInterfaceHierarchyMember.InterfaceParent
}

export namespace ParentInterfaceHierarchyMember {
  export type InterfaceChildA = 'InterfaceChildA'
  export type InterfaceChildB = 'InterfaceChildB'
  export type InterfaceParent = 'InterfaceParent'
}
