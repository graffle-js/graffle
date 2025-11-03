import type * as $ from '#graffle/utilities-for-generated'
import * as $$Data from '../data.js'
import * as $$Scalar from '../scalar.js'
import * as $Types from './$$.js'

export * as Schema from './$$.js'

export interface Schema<$Scalars extends $.Schema.Scalars.Registry = $$Scalar.$Registry> {
  name: $$Data.Name
  operationsAvailable: [$.GraphqlKit.Schema.OperationType.QUERY, $.GraphqlKit.Schema.OperationType.MUTATION]
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
    | 'Boolean'
    | 'Float'
    | 'ID'
    | 'Int'
    | 'String'
  scalars: {
    Date: $Types.Date
    Boolean: $Types.Boolean
    Float: $Types.Float
    ID: $Types.ID
    Int: $Types.Int
    String: $Types.String
  }
  scalarRegistry: $Scalars
  extensions: $.GlobalRegistry.TypeExtensions
}
