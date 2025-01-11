import type { Schema as $ } from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import * as $$Data from './data.js'
import * as $$Scalar from './scalar.js'

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

  //                                               Query
  // --------------------------------------------------------------------------------------------------
  //

  export interface Query extends $.OutputObject {
    kind: 'Object'
    name: 'Query'
    fields: {
      __typename: Query.__typename
      battles: Query.battles
      beings: Query.beings
      pokemonByName: Query.pokemonByName
      pokemons: Query.pokemons
      trainerByName: Query.trainerByName
      trainers: Query.trainers
    }
  }

  export namespace Query {
    export interface __typename extends $.OutputField {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Query'
      }
    }

    export interface battles extends $.OutputField {
      kind: 'OutputField'
      name: 'battles'
      arguments: {}
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$Battle
    }

    export interface beings extends $.OutputField {
      kind: 'OutputField'
      name: 'beings'
      arguments: {}
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$Being
    }

    export interface pokemonByName extends $.OutputField {
      kind: 'OutputField'
      name: 'pokemonByName'
      arguments: {
        name: {
          kind: 'InputField'
          name: 'name'
          inlineType: [1]
          namedType: $$NamedTypes.$$String
        }
      }
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$Pokemon
    }

    export interface pokemons extends $.OutputField {
      kind: 'OutputField'
      name: 'pokemons'
      arguments: {
        filter: {
          kind: 'InputField'
          name: 'filter'
          inlineType: [0]
          namedType: $$NamedTypes.$$PokemonFilter
        }
      }
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$Pokemon
    }

    export interface trainerByName extends $.OutputField {
      kind: 'OutputField'
      name: 'trainerByName'
      arguments: {
        name: {
          kind: 'InputField'
          name: 'name'
          inlineType: [1]
          namedType: $$NamedTypes.$$String
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$Trainer
    }

    export interface trainers extends $.OutputField {
      kind: 'OutputField'
      name: 'trainers'
      arguments: {}
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$Trainer
    }
  }

  //                                              Mutation
  // --------------------------------------------------------------------------------------------------
  //

  export interface Mutation extends $.OutputObject {
    kind: 'Object'
    name: 'Mutation'
    fields: {
      __typename: Mutation.__typename
      addPokemon: Mutation.addPokemon
    }
  }

  export namespace Mutation {
    export interface __typename extends $.OutputField {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Mutation'
      }
    }

    export interface addPokemon extends $.OutputField {
      kind: 'OutputField'
      name: 'addPokemon'
      arguments: {
        attack: {
          kind: 'InputField'
          name: 'attack'
          inlineType: [0]
          namedType: $$NamedTypes.$$Int
        }
        defense: {
          kind: 'InputField'
          name: 'defense'
          inlineType: [0]
          namedType: $$NamedTypes.$$Int
        }
        hp: {
          kind: 'InputField'
          name: 'hp'
          inlineType: [0]
          namedType: $$NamedTypes.$$Int
        }
        name: {
          kind: 'InputField'
          name: 'name'
          inlineType: [1]
          namedType: $$NamedTypes.$$String
        }
        type: {
          kind: 'InputField'
          name: 'type'
          inlineType: [1]
          namedType: $$NamedTypes.$$PokemonType
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$Pokemon
    }
  }

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

  //                                            BattleRoyale
  // --------------------------------------------------------------------------------------------------
  //

  export interface BattleRoyale extends $.OutputObject {
    kind: 'Object'
    name: 'BattleRoyale'
    fields: {
      __typename: BattleRoyale.__typename
      combatants: BattleRoyale.combatants
      date: BattleRoyale.date
      id: BattleRoyale.id
      winner: BattleRoyale.winner
    }
  }

  export namespace BattleRoyale {
    export interface __typename extends $.OutputField {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'BattleRoyale'
      }
    }

    export interface combatants extends $.OutputField {
      kind: 'OutputField'
      name: 'combatants'
      arguments: {}
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$CombatantMultiPokemon
    }

    export interface date extends $.OutputField {
      kind: 'OutputField'
      name: 'date'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Float
    }

    export interface id extends $.OutputField {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface winner extends $.OutputField {
      kind: 'OutputField'
      name: 'winner'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Trainer
    }
  }

  //                                           BattleTrainer
  // --------------------------------------------------------------------------------------------------
  //

  export interface BattleTrainer extends $.OutputObject {
    kind: 'Object'
    name: 'BattleTrainer'
    fields: {
      __typename: BattleTrainer.__typename
      combatant1: BattleTrainer.combatant1
      combatant2: BattleTrainer.combatant2
      date: BattleTrainer.date
      id: BattleTrainer.id
      winner: BattleTrainer.winner
    }
  }

  export namespace BattleTrainer {
    export interface __typename extends $.OutputField {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'BattleTrainer'
      }
    }

    export interface combatant1 extends $.OutputField {
      kind: 'OutputField'
      name: 'combatant1'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$CombatantSinglePokemon
    }

    export interface combatant2 extends $.OutputField {
      kind: 'OutputField'
      name: 'combatant2'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$CombatantSinglePokemon
    }

    export interface date extends $.OutputField {
      kind: 'OutputField'
      name: 'date'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Float
    }

    export interface id extends $.OutputField {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface winner extends $.OutputField {
      kind: 'OutputField'
      name: 'winner'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Trainer
    }
  }

  //                                             BattleWild
  // --------------------------------------------------------------------------------------------------
  //

  export interface BattleWild extends $.OutputObject {
    kind: 'Object'
    name: 'BattleWild'
    fields: {
      __typename: BattleWild.__typename
      date: BattleWild.date
      id: BattleWild.id
      pokemon: BattleWild.pokemon
      result: BattleWild.result
      trainer: BattleWild.trainer
      wildPokemons: BattleWild.wildPokemons
    }
  }

  export namespace BattleWild {
    export interface __typename extends $.OutputField {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'BattleWild'
      }
    }

    export interface date extends $.OutputField {
      kind: 'OutputField'
      name: 'date'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Float
    }

    export interface id extends $.OutputField {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface pokemon extends $.OutputField {
      kind: 'OutputField'
      name: 'pokemon'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Pokemon
    }

    export interface result extends $.OutputField {
      kind: 'OutputField'
      name: 'result'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$BattleWildResult
    }

    export interface trainer extends $.OutputField {
      kind: 'OutputField'
      name: 'trainer'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Trainer
    }

    export interface wildPokemons extends $.OutputField {
      kind: 'OutputField'
      name: 'wildPokemons'
      arguments: {}
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$Pokemon
    }
  }

  //                                       CombatantMultiPokemon
  // --------------------------------------------------------------------------------------------------
  //

  export interface CombatantMultiPokemon extends $.OutputObject {
    kind: 'Object'
    name: 'CombatantMultiPokemon'
    fields: {
      __typename: CombatantMultiPokemon.__typename
      pokemons: CombatantMultiPokemon.pokemons
      trainer: CombatantMultiPokemon.trainer
    }
  }

  export namespace CombatantMultiPokemon {
    export interface __typename extends $.OutputField {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'CombatantMultiPokemon'
      }
    }

    export interface pokemons extends $.OutputField {
      kind: 'OutputField'
      name: 'pokemons'
      arguments: {}
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$Pokemon
    }

    export interface trainer extends $.OutputField {
      kind: 'OutputField'
      name: 'trainer'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Trainer
    }
  }

  //                                       CombatantSinglePokemon
  // --------------------------------------------------------------------------------------------------
  //

  export interface CombatantSinglePokemon extends $.OutputObject {
    kind: 'Object'
    name: 'CombatantSinglePokemon'
    fields: {
      __typename: CombatantSinglePokemon.__typename
      pokemon: CombatantSinglePokemon.pokemon
      trainer: CombatantSinglePokemon.trainer
    }
  }

  export namespace CombatantSinglePokemon {
    export interface __typename extends $.OutputField {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'CombatantSinglePokemon'
      }
    }

    export interface pokemon extends $.OutputField {
      kind: 'OutputField'
      name: 'pokemon'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Pokemon
    }

    export interface trainer extends $.OutputField {
      kind: 'OutputField'
      name: 'trainer'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Trainer
    }
  }

  //                                               Patron
  // --------------------------------------------------------------------------------------------------
  //

  export interface Patron extends $.OutputObject {
    kind: 'Object'
    name: 'Patron'
    fields: {
      __typename: Patron.__typename
      id: Patron.id
      money: Patron.money
      name: Patron.name
    }
  }

  export namespace Patron {
    export interface __typename extends $.OutputField {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Patron'
      }
    }

    export interface id extends $.OutputField {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface money extends $.OutputField {
      kind: 'OutputField'
      name: 'money'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Int
    }

    export interface name extends $.OutputField {
      kind: 'OutputField'
      name: 'name'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }
  }

  //                                              Pokemon
  // --------------------------------------------------------------------------------------------------
  //

  export interface Pokemon extends $.OutputObject {
    kind: 'Object'
    name: 'Pokemon'
    fields: {
      __typename: Pokemon.__typename
      attack: Pokemon.attack
      birthday: Pokemon.birthday
      defense: Pokemon.defense
      hp: Pokemon.hp
      id: Pokemon.id
      name: Pokemon.name
      trainer: Pokemon.trainer
      type: Pokemon.type
    }
  }

  export namespace Pokemon {
    export interface __typename extends $.OutputField {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Pokemon'
      }
    }

    export interface attack extends $.OutputField {
      kind: 'OutputField'
      name: 'attack'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Int
    }

    export interface birthday extends $.OutputField {
      kind: 'OutputField'
      name: 'birthday'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Date
    }

    export interface defense extends $.OutputField {
      kind: 'OutputField'
      name: 'defense'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Int
    }

    export interface hp extends $.OutputField {
      kind: 'OutputField'
      name: 'hp'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Int
    }

    export interface id extends $.OutputField {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$ID
    }

    export interface name extends $.OutputField {
      kind: 'OutputField'
      name: 'name'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface trainer extends $.OutputField {
      kind: 'OutputField'
      name: 'trainer'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Trainer
    }

    export interface type extends $.OutputField {
      kind: 'OutputField'
      name: 'type'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$PokemonType
    }
  }

  //                                              Trainer
  // --------------------------------------------------------------------------------------------------
  //

  export interface Trainer extends $.OutputObject {
    kind: 'Object'
    name: 'Trainer'
    fields: {
      __typename: Trainer.__typename
      class: Trainer.$class
      fans: Trainer.fans
      id: Trainer.id
      name: Trainer.name
      pokemon: Trainer.pokemon
    }
  }

  export namespace Trainer {
    export interface __typename extends $.OutputField {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Trainer'
      }
    }

    export interface $class extends $.OutputField {
      kind: 'OutputField'
      name: 'class'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$TrainerClass
    }

    export interface fans extends $.OutputField {
      kind: 'OutputField'
      name: 'fans'
      arguments: {}
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$Patron
    }

    export interface id extends $.OutputField {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface name extends $.OutputField {
      kind: 'OutputField'
      name: 'name'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface pokemon extends $.OutputField {
      kind: 'OutputField'
      name: 'pokemon'
      arguments: {}
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$Pokemon
    }
  }

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

  //                                             DateFilter
  // --------------------------------------------------------------------------------------------------
  //

  export interface DateFilter extends $.InputObject {
    kind: 'InputObject'
    name: 'DateFilter'
    isAllFieldsNullable: true
    fields: {
      gte: DateFilter.gte
      lte: DateFilter.lte
    }
  }

  export namespace DateFilter {
    export interface gte extends $.InputField {
      kind: 'InputField'
      name: 'gte'
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }

    export interface lte extends $.InputField {
      kind: 'InputField'
      name: 'lte'
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }
  }

  //                                           PokemonFilter
  // --------------------------------------------------------------------------------------------------
  //

  export interface PokemonFilter extends $.InputObject {
    kind: 'InputObject'
    name: 'PokemonFilter'
    isAllFieldsNullable: true
    fields: {
      birthday: PokemonFilter.birthday
      name: PokemonFilter.name
      type: PokemonFilter.type
    }
  }

  export namespace PokemonFilter {
    export interface birthday extends $.InputField {
      kind: 'InputField'
      name: 'birthday'
      inlineType: [0]
      namedType: $$NamedTypes.$$DateFilter
    }

    export interface name extends $.InputField {
      kind: 'InputField'
      name: 'name'
      inlineType: [0]
      namedType: $$NamedTypes.$$StringFilter
    }

    export interface type extends $.InputField {
      kind: 'InputField'
      name: 'type'
      inlineType: [0]
      namedType: $$NamedTypes.$$PokemonType
    }
  }

  //                                            StringFilter
  // --------------------------------------------------------------------------------------------------
  //

  export interface StringFilter extends $.InputObject {
    kind: 'InputObject'
    name: 'StringFilter'
    isAllFieldsNullable: true
    fields: {
      contains: StringFilter.contains
      in: StringFilter.$in
    }
  }

  export namespace StringFilter {
    export interface contains extends $.InputField {
      kind: 'InputField'
      name: 'contains'
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface $in extends $.InputField {
      kind: 'InputField'
      name: 'in'
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$String
    }
  }

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

  //                                               Being
  // --------------------------------------------------------------------------------------------------
  //

  export interface Being extends $.Interface {
    kind: 'Interface'
    fields: {
      id: Being.id
      name: Being.name
    }
    name: 'Being'
    implementors: [Patron, Pokemon, Trainer]
    implementorsUnion:
      | Patron
      | Pokemon
      | Trainer
    implementorsIndex: {
      Patron: Patron
      Pokemon: Pokemon
      Trainer: Trainer
    }
  }

  export namespace Being {
    export interface __typename extends $.OutputField {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Being'
      }
    }

    export interface id extends $.OutputField {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface name extends $.OutputField {
      kind: 'OutputField'
      name: 'name'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }
  }

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

  //                                               Battle
  // --------------------------------------------------------------------------------------------------
  //

  export interface Battle extends $.Union {
    kind: 'Union'
    name: 'Battle'
    members: [BattleRoyale, BattleTrainer, BattleWild]
    membersUnion:
      | BattleRoyale
      | BattleTrainer
      | BattleWild
    membersIndex: {
      BattleRoyale: BattleRoyale
      BattleTrainer: BattleTrainer
      BattleWild: BattleWild
    }
  }

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

  //                                          BattleWildResult
  // --------------------------------------------------------------------------------------------------
  //

  export interface BattleWildResult extends $.Enum {
    kind: 'Enum'
    name: 'BattleWildResult'
    members: ['pokemonsCaptured', 'pokemonsDefeated', 'trainerDefeated']
    membersUnion:
      | 'pokemonsCaptured'
      | 'pokemonsDefeated'
      | 'trainerDefeated'
  }

  //                                            PokemonType
  // --------------------------------------------------------------------------------------------------
  //

  export interface PokemonType extends $.Enum {
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

  //                                            TrainerClass
  // --------------------------------------------------------------------------------------------------
  //

  export interface TrainerClass extends $.Enum {
    kind: 'Enum'
    name: 'TrainerClass'
    members: [
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
    membersUnion:
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
  }

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            ScalarCustom
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                                Date
  // --------------------------------------------------------------------------------------------------
  //

  export type Date = $$Scalar.Date

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                           ScalarStandard
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                              Boolean
  // --------------------------------------------------------------------------------------------------
  //

  export type Boolean = $.StandardTypes.Boolean

  //                                               Float
  // --------------------------------------------------------------------------------------------------
  //

  export type Float = $.StandardTypes.Float

  //                                                 ID
  // --------------------------------------------------------------------------------------------------
  //

  export type ID = $.StandardTypes.ID

  //                                                Int
  // --------------------------------------------------------------------------------------------------
  //

  export type Int = $.StandardTypes.Int

  //                                               String
  // --------------------------------------------------------------------------------------------------
  //

  export type String = $.StandardTypes.String

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                         Named Types Index
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  /**
   * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
   *     name clashing between the field name and the object name.
   *
   *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
   *     would end up with an error of `export interface Foo extends Foo ...`
   */

  namespace $$NamedTypes {
    export type $$Query = Query
    export type $$Mutation = Mutation
    export type $$BattleRoyale = BattleRoyale
    export type $$BattleTrainer = BattleTrainer
    export type $$BattleWild = BattleWild
    export type $$CombatantMultiPokemon = CombatantMultiPokemon
    export type $$CombatantSinglePokemon = CombatantSinglePokemon
    export type $$Patron = Patron
    export type $$Pokemon = Pokemon
    export type $$Trainer = Trainer
    export type $$DateFilter = DateFilter
    export type $$PokemonFilter = PokemonFilter
    export type $$StringFilter = StringFilter
    export type $$Being = Being
    export type $$Battle = Battle
    export type $$BattleWildResult = BattleWildResult
    export type $$PokemonType = PokemonType
    export type $$TrainerClass = TrainerClass
    export type $$Date = Date
    export type $$Boolean = Boolean
    export type $$Float = Float
    export type $$ID = ID
    export type $$Int = Int
    export type $$String = String
  }
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

export interface Schema<$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Scalar.$Registry> extends $ {
  name: $$Data.Name
  operationsAvailable: ['query', 'mutation']
  RootUnion:
    | Schema.Query
    | Schema.Mutation
  Root: {
    query: Schema.Query
    mutation: Schema.Mutation
    subscription: null
  }
  allTypes: {
    Query: Schema.Query
    Mutation: Schema.Mutation
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
  scalarNamesUnion:
    | 'Date'
    | 'Boolean'
    | 'Float'
    | 'ID'
    | 'Int'
    | 'String'
  scalars: {
    Date: Schema.Date
    Boolean: Schema.Boolean
    Float: Schema.Float
    ID: Schema.ID
    Int: Schema.Int
    String: Schema.String
  }
  scalarRegistry: $Scalars
  extensions: $$Utilities.GlobalRegistry.TypeExtensions
}
