//
//
//
//
//
//
// ==================================================================================================
//                                         Type Inputs Index
// ==================================================================================================
//
//
//
//
//
//

/**
 * Mapping of GraphQL type names to their TypeScript input types.
 * This is used for O(1) type lookups during variable type inference.
 */

// Standard GraphQL scalars
export type String = string
export type Int = number
export type Float = number
export type Boolean = boolean
export type ID = string

// Custom scalars (decoded types for variables)
export type Date = string

// Enums
export type BattleWildResult = 'pokemonsCaptured' | 'pokemonsDefeated' | 'trainerDefeated'
export type PokemonType = 'bug' | 'electric' | 'fire' | 'grass' | 'water'
export type TrainerClass =
  | 'bugCatcher'
  | 'camper'
  | 'picnicker'
  | 'psychic'
  | 'psychicMedium'
  | 'psychicYoungster'
  | 'sailor'
  | 'superNerd'
  | 'tamer'
  | 'teamRocketGrunt'
  | 'triathlete'
  | 'youngster'
  | 'youth'

// Input objects
export type DateFilter = {
  gte?: Date
  lte?: Date
}
export type PokemonFilter = {
  birthday?: DateFilter
  name?: StringFilter
  type?: PokemonType
}
export type StringFilter = {
  contains?: String
  in?: String
}

// Index interface
export interface $TypeInputsIndex {
  String: String
  Int: Int
  Float: Float
  Boolean: Boolean
  ID: ID
  Date: Date
  BattleWildResult: BattleWildResult
  PokemonType: PokemonType
  TrainerClass: TrainerClass
  DateFilter: DateFilter
  PokemonFilter: PokemonFilter
  StringFilter: StringFilter
}

// Export without $ prefix for use in other generated modules
export type { $TypeInputsIndex as TypeInputsIndex }
