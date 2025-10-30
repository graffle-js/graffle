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
  members: ['pokemonsCaptured', 'pokemonsDefeated', 'trainerDefeated']
  membersUnion:
    | 'pokemonsCaptured'
    | 'pokemonsDefeated'
    | 'trainerDefeated'
}
