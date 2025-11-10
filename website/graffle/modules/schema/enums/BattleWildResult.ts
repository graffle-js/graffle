/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * Possible outcomes of a wild Pokemon battle.
 *
 * **Members:**
 * - `pokemonsCaptured` - The wild Pokemon were successfully captured.
 * - `pokemonsDefeated` - The wild Pokemon were defeated but not captured.
 * - `trainerDefeated` - The trainer was defeated by the wild Pokemon.
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
  /**
   * The wild Pokemon were successfully captured.
   */
  export type pokemonsCaptured = 'pokemonsCaptured'
  /**
   * The wild Pokemon were defeated but not captured.
   */
  export type pokemonsDefeated = 'pokemonsDefeated'
  /**
   * The trainer was defeated by the wild Pokemon.
   */
  export type trainerDefeated = 'trainerDefeated'
}
