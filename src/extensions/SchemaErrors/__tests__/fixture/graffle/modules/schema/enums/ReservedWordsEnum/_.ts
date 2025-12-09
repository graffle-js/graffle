import type * as $ from '#graffle/utilities-for-generated'
import type * as $Members from './members.js'

export * as ReservedWordsEnum from './members.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * Enum with TypeScript reserved word values for testing issue #1470.
 *
 * **Members:**
 * - `as`
 * - `in`
 * - `is`
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Members** | 3 |
 */
export interface ReservedWordsEnum extends $.Schema.Enum {
  kind: 'Enum'
  name: 'ReservedWordsEnum'
  members:
    | $Members.as
    | $Members.in
    | $Members.is
}
