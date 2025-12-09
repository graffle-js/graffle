import type * as $Members from './members.js'

export * as BattleWildResult from './members.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * **Members:**
 * - `pokemonsCaptured`
 * - `pokemonsDefeated`
 * - `trainerDefeated`
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Members** | 3 |
 */
export interface BattleWildResult {
  kind: 'Enum'
  name: 'BattleWildResult'
  members:
    | $Members.pokemonsCaptured
    | $Members.pokemonsDefeated
    | $Members.trainerDefeated
}
