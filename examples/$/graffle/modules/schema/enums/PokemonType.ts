export interface PokemonType {
  kind: 'Enum'
  name: 'PokemonType'
  members: ['bug', 'electric', 'fire', 'grass', 'water']
  membersUnion:
    | 'bug'
    | 'electric'
    | 'fire'
    | 'grass'
    | 'water'
}
