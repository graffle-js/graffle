import type * as $Members from './members.js'

export * as PokemonType from './members.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * **Members:**
 * - `bug`
 * - `electric`
 * - `fire`
 * - `grass`
 * - `water`
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Members** | 5 |
 */
export interface PokemonType {
  kind: 'Enum'
  name: 'PokemonType'
  members:
    | $Members.bug
    | $Members.electric
    | $Members.fire
    | $Members.grass
    | $Members.water
}
