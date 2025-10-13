/**
 * Possible outcomes of a wild Pokemon battle.
 *
 * Members
 * "pokemonsCaptured" - The wild Pokemon were successfully captured.
 * "pokemonsDefeated" - The wild Pokemon were defeated but not captured.
 * "trainerDefeated" - The trainer was defeated by the wild Pokemon.
 */
export type BattleWildResult =
  | 'pokemonsCaptured'
  | 'pokemonsDefeated'
  | 'trainerDefeated'
