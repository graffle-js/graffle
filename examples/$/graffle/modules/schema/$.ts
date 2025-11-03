import type * as $ from 'graffle/utilities-for-generated'
import * as $$Data from '../data.js'
import * as $$Scalar from '../scalar.js'
import * as $Types from './$$.js'

export * as Schema from './$$.js'

export interface Schema<$Scalars extends $.Schema.Scalars.Registry = $$Scalar.$Registry> {
  name: $$Data.Name
  operationsAvailable: ['query', 'mutation']
  RootUnion:
    | $Types.Query
    | $Types.Mutation
  Root: {
    query: $Types.Query
    mutation: $Types.Mutation
    subscription: null
  }
  allTypes: {
    Query: $Types.Query
    Mutation: $Types.Mutation
    BattleWildResult: $Types.BattleWildResult
    PokemonType: $Types.PokemonType
    TrainerClass: $Types.TrainerClass
    BattleRoyale: $Types.BattleRoyale
    BattleTrainer: $Types.BattleTrainer
    BattleWild: $Types.BattleWild
    CombatantMultiPokemon: $Types.CombatantMultiPokemon
    CombatantSinglePokemon: $Types.CombatantSinglePokemon
    Patron: $Types.Patron
    Pokemon: $Types.Pokemon
    Trainer: $Types.Trainer
    Battle: $Types.Battle
    Being: $Types.Being
  }
  objects: {
    BattleRoyale: $Types.BattleRoyale
    BattleTrainer: $Types.BattleTrainer
    BattleWild: $Types.BattleWild
    CombatantMultiPokemon: $Types.CombatantMultiPokemon
    CombatantSinglePokemon: $Types.CombatantSinglePokemon
    Patron: $Types.Patron
    Pokemon: $Types.Pokemon
    Trainer: $Types.Trainer
  }
  unions: {
    Battle: $Types.Battle
  }
  interfaces: {
    Being: $Types.Being
  }
  scalarNamesUnion:
    | 'Date'
    | 'Float'
    | 'ID'
    | 'String'
    | 'Int'
    | 'Boolean'
  scalars: {
    Date: $Types.Date
    Float: $Types.Float
    ID: $Types.ID
    String: $Types.String
    Int: $Types.Int
    Boolean: $Types.Boolean
  }
  scalarRegistry: $Scalars
  extensions: $.GlobalRegistry.TypeExtensions
}
