import type { Schema as $ } from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type * as Data from './Data.js'
import type * as MethodsRoot from './MethodsRoot.js'
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

  export type Mutation = $.StandardTypes.Mutation<{
    addPokemon: $.OutputField<
      'addPokemon',
      $.Nullable<Pokemon>,
      $.Args<{
        attack: $.InputField<$.Nullable<$Scalar.Int>>
        defense: $.InputField<$.Nullable<$Scalar.Int>>
        hp: $.InputField<$.Nullable<$Scalar.Int>>
        name: $.InputField<$Scalar.String>
        type: $.InputField<PokemonType>
      }, false>
    >
  }>

  export type Query = $.StandardTypes.Query<{
    battles: $.OutputField<'battles', $.List<Battle>, null>
    beings: $.OutputField<'beings', $.List<Being>, null>
    pokemon: $.OutputField<'pokemon', $.Nullable<$.List<Pokemon>>, null>
    pokemonByName: $.OutputField<
      'pokemonByName',
      $.Nullable<$.List<Pokemon>>,
      $.Args<{
        name: $.InputField<$Scalar.String>
      }, false>
    >
    pokemons: $.OutputField<
      'pokemons',
      $.Nullable<$.List<Pokemon>>,
      $.Args<{
        filter: $.InputField<$.Nullable<PokemonFilter>>
      }, true>
    >
    trainerByName: $.OutputField<
      'trainerByName',
      $.Nullable<Trainer>,
      $.Args<{
        name: $.InputField<$Scalar.String>
      }, false>
    >
    trainers: $.OutputField<'trainers', $.Nullable<$.List<Trainer>>, null>
  }>

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            OutputObject
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type BattleRoyale = $.OutputObject<'BattleRoyale', {
    combatants: $.OutputField<'combatants', $.Nullable<$.List<CombatantMultiPokemon>>, null>
    date: $.OutputField<'date', $.Nullable<$Scalar.Float>, null>
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    winner: $.OutputField<'winner', $.Nullable<Trainer>, null>
  }>

  export type BattleTrainer = $.OutputObject<'BattleTrainer', {
    combatant1: $.OutputField<'combatant1', $.Nullable<CombatantSinglePokemon>, null>
    combatant2: $.OutputField<'combatant2', $.Nullable<CombatantSinglePokemon>, null>
    date: $.OutputField<'date', $.Nullable<$Scalar.Float>, null>
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    winner: $.OutputField<'winner', $.Nullable<Trainer>, null>
  }>

  export type BattleWild = $.OutputObject<'BattleWild', {
    date: $.OutputField<'date', $.Nullable<$Scalar.Float>, null>
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    pokemon: $.OutputField<'pokemon', $.Nullable<Pokemon>, null>
    result: $.OutputField<'result', $.Nullable<BattleWildResult>, null>
    trainer: $.OutputField<'trainer', $.Nullable<Trainer>, null>
    wildPokemons: $.OutputField<'wildPokemons', $.Nullable<$.List<Pokemon>>, null>
  }>

  export type CombatantMultiPokemon = $.OutputObject<'CombatantMultiPokemon', {
    pokemons: $.OutputField<'pokemons', $.Nullable<$.List<Pokemon>>, null>
    trainer: $.OutputField<'trainer', $.Nullable<Trainer>, null>
  }>

  export type CombatantSinglePokemon = $.OutputObject<'CombatantSinglePokemon', {
    pokemon: $.OutputField<'pokemon', $.Nullable<Pokemon>, null>
    trainer: $.OutputField<'trainer', $.Nullable<Trainer>, null>
  }>

  export type Patron = $.OutputObject<'Patron', {
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    money: $.OutputField<'money', $.Nullable<$Scalar.Int>, null>
    name: $.OutputField<'name', $.Nullable<$Scalar.String>, null>
  }>

  export type Pokemon = $.OutputObject<'Pokemon', {
    attack: $.OutputField<'attack', $.Nullable<$Scalar.Int>, null>
    birthday: $.OutputField<'birthday', $.Nullable<$Scalar.Int>, null>
    defense: $.OutputField<'defense', $.Nullable<$Scalar.Int>, null>
    hp: $.OutputField<'hp', $.Nullable<$Scalar.Int>, null>
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    name: $.OutputField<'name', $.Nullable<$Scalar.String>, null>
    trainer: $.OutputField<'trainer', $.Nullable<Trainer>, null>
    type: $.OutputField<'type', $.Nullable<PokemonType>, null>
  }>

  export type Trainer = $.OutputObject<'Trainer', {
    class: $.OutputField<'class', $.Nullable<TrainerClass>, null>
    fans: $.OutputField<'fans', $.Nullable<$.List<Patron>>, null>
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    name: $.OutputField<'name', $.Nullable<$Scalar.String>, null>
    pokemon: $.OutputField<'pokemon', $.Nullable<$.List<Pokemon>>, null>
  }>

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
    gte: $.InputField<$.Nullable<$Scalar.Float>>
    lte: $.InputField<$.Nullable<$Scalar.Float>>
  }, true>

  export type PokemonFilter = $.InputObject<'PokemonFilter', {
    birthday: $.InputField<$.Nullable<DateFilter>>
    name: $.InputField<$.Nullable<StringFilter>>
  }, true>

  export type StringFilter = $.InputObject<'StringFilter', {
    contains: $.InputField<$.Nullable<$Scalar.String>>
    in: $.InputField<$.Nullable<$.List<$Scalar.String>>>
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
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    name: $.OutputField<'name', $.Nullable<$Scalar.String>, null>
  }, [Patron, Pokemon, Trainer]>

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
export interface Schema<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> extends $$Utilities.Schema {
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
  scalars: $Scalars
  extensions: $$Utilities.GlobalRegistry.TypeExtensions
}
