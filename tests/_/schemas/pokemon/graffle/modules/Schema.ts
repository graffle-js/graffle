import type * as $ from '../../../../../../src/entrypoints/schema.js'
import type * as $Scalar from './Scalar.js'

export namespace Schema {
  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                                Root
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type Mutation = $.Output.ObjectMutation<{
    addPokemon: $.Field<
      'addPokemon',
      $.Output.Nullable<Pokemon>,
      $.Args<{
        attack: $.Input.Field<$.Input.Nullable<$Scalar.Int>>
        defense: $.Input.Field<$.Input.Nullable<$Scalar.Int>>
        hp: $.Input.Field<$.Input.Nullable<$Scalar.Int>>
        name: $.Input.Field<$Scalar.String>
        type: $.Input.Field<PokemonType>
      }, false>
    >
  }>

  export type Query = $.Output.ObjectQuery<{
    battles: $.Field<'battles', $.Output.List<Battle>, null>
    beings: $.Field<'beings', $.Output.List<Being>, null>
    pokemon: $.Field<'pokemon', $.Output.Nullable<$.Output.List<Pokemon>>, null>
    pokemonByName: $.Field<
      'pokemonByName',
      $.Output.Nullable<$.Output.List<Pokemon>>,
      $.Args<{
        name: $.Input.Field<$Scalar.String>
      }, false>
    >
    pokemons: $.Field<
      'pokemons',
      $.Output.Nullable<$.Output.List<Pokemon>>,
      $.Args<{
        filter: $.Input.Field<$.Input.Nullable<PokemonFilter>>
      }, true>
    >
    trainerByName: $.Field<
      'trainerByName',
      $.Output.Nullable<Trainer>,
      $.Args<{
        name: $.Input.Field<$Scalar.String>
      }, false>
    >
    trainers: $.Field<'trainers', $.Output.Nullable<$.Output.List<Trainer>>, null>
  }>

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                                Enum
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type BattleWildResult = $.Enum<'BattleWildResult', ['pokemonsCaptured', 'pokemonsDefeated', 'trainerDefeated']>

  export type PokemonType = $.Enum<'PokemonType', ['bug', 'electric', 'fire', 'grass', 'water']>

  export type TrainerClass = $.Enum<
    'TrainerClass',
    [
      'bugCatcher',
      'camper',
      'picnicker',
      'psychic',
      'psychicMedium',
      'psychicYoungster',
      'sailor',
      'superNerd',
      'tamer',
      'teamRocketGrunt',
      'triathlete',
      'youngster',
      'youth',
    ]
  >

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            InputObject
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type DateFilter = $.InputObject<'DateFilter', {
    gte: $.Input.Field<$.Input.Nullable<$Scalar.Float>>
    lte: $.Input.Field<$.Input.Nullable<$Scalar.Float>>
  }, true>

  export type PokemonFilter = $.InputObject<'PokemonFilter', {
    birthday: $.Input.Field<$.Input.Nullable<DateFilter>>
    name: $.Input.Field<$.Input.Nullable<StringFilter>>
  }, true>

  export type StringFilter = $.InputObject<'StringFilter', {
    contains: $.Input.Field<$.Input.Nullable<$Scalar.String>>
    in: $.Input.Field<$.Input.Nullable<$.Input.List<$Scalar.String>>>
  }, true>

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                             Interface
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type Being = $.Interface<'Being', {
    id: $.Field<'id', $.Output.Nullable<$Scalar.ID>, null>
    name: $.Field<'name', $.Output.Nullable<$Scalar.String>, null>
  }, [Patron, Pokemon, Trainer]>

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                               Object
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type BattleRoyale = $.Object$2<'BattleRoyale', {
    combatants: $.Field<'combatants', $.Output.Nullable<$.Output.List<CombatantMultiPokemon>>, null>
    date: $.Field<'date', $.Output.Nullable<$Scalar.Float>, null>
    id: $.Field<'id', $.Output.Nullable<$Scalar.ID>, null>
    winner: $.Field<'winner', $.Output.Nullable<Trainer>, null>
  }>

  export type BattleTrainer = $.Object$2<'BattleTrainer', {
    combatant1: $.Field<'combatant1', $.Output.Nullable<CombatantSinglePokemon>, null>
    combatant2: $.Field<'combatant2', $.Output.Nullable<CombatantSinglePokemon>, null>
    date: $.Field<'date', $.Output.Nullable<$Scalar.Float>, null>
    id: $.Field<'id', $.Output.Nullable<$Scalar.ID>, null>
    winner: $.Field<'winner', $.Output.Nullable<Trainer>, null>
  }>

  export type BattleWild = $.Object$2<'BattleWild', {
    date: $.Field<'date', $.Output.Nullable<$Scalar.Float>, null>
    id: $.Field<'id', $.Output.Nullable<$Scalar.ID>, null>
    pokemon: $.Field<'pokemon', $.Output.Nullable<Pokemon>, null>
    result: $.Field<'result', $.Output.Nullable<BattleWildResult>, null>
    trainer: $.Field<'trainer', $.Output.Nullable<Trainer>, null>
    wildPokemons: $.Field<'wildPokemons', $.Output.Nullable<$.Output.List<Pokemon>>, null>
  }>

  export type CombatantMultiPokemon = $.Object$2<'CombatantMultiPokemon', {
    pokemons: $.Field<'pokemons', $.Output.Nullable<$.Output.List<Pokemon>>, null>
    trainer: $.Field<'trainer', $.Output.Nullable<Trainer>, null>
  }>

  export type CombatantSinglePokemon = $.Object$2<'CombatantSinglePokemon', {
    pokemon: $.Field<'pokemon', $.Output.Nullable<Pokemon>, null>
    trainer: $.Field<'trainer', $.Output.Nullable<Trainer>, null>
  }>

  export type Patron = $.Object$2<'Patron', {
    id: $.Field<'id', $.Output.Nullable<$Scalar.ID>, null>
    money: $.Field<'money', $.Output.Nullable<$Scalar.Int>, null>
    name: $.Field<'name', $.Output.Nullable<$Scalar.String>, null>
  }>

  export type Pokemon = $.Object$2<'Pokemon', {
    attack: $.Field<'attack', $.Output.Nullable<$Scalar.Int>, null>
    birthday: $.Field<'birthday', $.Output.Nullable<$Scalar.Int>, null>
    defense: $.Field<'defense', $.Output.Nullable<$Scalar.Int>, null>
    hp: $.Field<'hp', $.Output.Nullable<$Scalar.Int>, null>
    id: $.Field<'id', $.Output.Nullable<$Scalar.ID>, null>
    name: $.Field<'name', $.Output.Nullable<$Scalar.String>, null>
    trainer: $.Field<'trainer', $.Output.Nullable<Trainer>, null>
    type: $.Field<'type', $.Output.Nullable<PokemonType>, null>
  }>

  export type Trainer = $.Object$2<'Trainer', {
    class: $.Field<'class', $.Output.Nullable<TrainerClass>, null>
    fans: $.Field<'fans', $.Output.Nullable<$.Output.List<Patron>>, null>
    id: $.Field<'id', $.Output.Nullable<$Scalar.ID>, null>
    name: $.Field<'name', $.Output.Nullable<$Scalar.String>, null>
    pokemon: $.Field<'pokemon', $.Output.Nullable<$.Output.List<Pokemon>>, null>
  }>

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                               Union
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type Battle = $.Union<'Battle', [BattleRoyale, BattleTrainer, BattleWild]>
}
//
//
//
//
//
//
// ==================================================================================================
//                                               Schema
// ==================================================================================================
//
//
//
//
//
//

import type * as Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type * as Data from './Data.js'
import type * as MethodsRoot from './MethodsRoot.js'

export interface Schema extends Utilities.SchemaIndexBase {
  name: Data.Name
  RootTypesPresent: ['Mutation', 'Query']
  RootUnion: Schema.Mutation | Schema.Query
  Root: {
    Query: Schema.Query
    Mutation: Schema.Mutation
    Subscription: null
  }
  allTypes: {
    Mutation: Schema.Mutation
    Query: Schema.Query
    BattleWildResult: Schema.BattleWildResult
    PokemonType: Schema.PokemonType
    TrainerClass: Schema.TrainerClass
    BattleRoyale: Schema.BattleRoyale
    BattleTrainer: Schema.BattleTrainer
    BattleWild: Schema.BattleWild
    CombatantMultiPokemon: Schema.CombatantMultiPokemon
    CombatantSinglePokemon: Schema.CombatantSinglePokemon
    Patron: Schema.Patron
    Pokemon: Schema.Pokemon
    Trainer: Schema.Trainer
    Battle: Schema.Battle
    Being: Schema.Being
  }
  objects: {
    BattleRoyale: Schema.BattleRoyale
    BattleTrainer: Schema.BattleTrainer
    BattleWild: Schema.BattleWild
    CombatantMultiPokemon: Schema.CombatantMultiPokemon
    CombatantSinglePokemon: Schema.CombatantSinglePokemon
    Patron: Schema.Patron
    Pokemon: Schema.Pokemon
    Trainer: Schema.Trainer
  }
  unions: {
    Battle: Schema.Battle
  }
  interfaces: {
    Being: Schema.Being
  }
  customScalars: Utilities.SchemaIndexBase['customScalars']
  extensions: Utilities.GlobalRegistry.TypeExtensions
}
