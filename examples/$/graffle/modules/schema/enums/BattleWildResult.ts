export interface BattleWildResult {
  kind: 'Enum'
  name: 'BattleWildResult'
  members: ['pokemonsCaptured', 'pokemonsDefeated', 'trainerDefeated']
  membersUnion:
    | 'pokemonsCaptured'
    | 'pokemonsDefeated'
    | 'trainerDefeated'
}
