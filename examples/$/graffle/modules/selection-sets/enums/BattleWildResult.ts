/**
 * Values for {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
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
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum} ↗ |
 * | **Members** | 3 |
 */
export type BattleWildResult =
  | 'pokemonsCaptured'
  | 'pokemonsDefeated'
  | 'trainerDefeated'
