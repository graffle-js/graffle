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
    | BattleWildResult.pokemonsCaptured
    | BattleWildResult.pokemonsDefeated
    | BattleWildResult.trainerDefeated
}

export namespace BattleWildResult {
  export type pokemonsCaptured = 'pokemonsCaptured'
  export type pokemonsDefeated = 'pokemonsDefeated'
  export type trainerDefeated = 'trainerDefeated'
}
