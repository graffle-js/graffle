import type * as $Members from './members.js'

export * as Case from './members.js'

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
export interface Case {
  kind: 'Enum'
  name: 'Case'
  members:
    | $Members.ErrorOne
    | $Members.ErrorTwo
    | $Members.Object1
}
