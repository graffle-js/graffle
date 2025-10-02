/**
 * Possible outcomes of a wild Pokemon battle.
 *
 * Members
 * "pokemonsCaptured" - The wild Pokemon were successfully captured.
 * "pokemonsDefeated" - The wild Pokemon were defeated but not captured.
 * "trainerDefeated" - The trainer was defeated by the wild Pokemon.
 */
export interface BattleWildResult {
  kind: "Enum";
  name: "BattleWildResult";
  members: ["pokemonsCaptured", "pokemonsDefeated", "trainerDefeated"];
  membersUnion:
    | "pokemonsCaptured"
    | "pokemonsDefeated"
    | "trainerDefeated";
}
