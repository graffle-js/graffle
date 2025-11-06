import type * as $ from '#graffle/utilities-for-generated'

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
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Members** | 3 |
 */
export interface Case extends $.Schema.Enum {
  kind: 'Enum'
  name: 'Case'
  members:
    | Case.ErrorOne
    | Case.ErrorTwo
    | Case.Object1
}

export namespace Case {
  export type ErrorOne = 'ErrorOne'
  export type ErrorTwo = 'ErrorTwo'
  export type Object1 = 'Object1'
}
