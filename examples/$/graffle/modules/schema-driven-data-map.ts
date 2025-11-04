import type * as $$Utilities from 'graffle/utilities-for-generated'
import * as $$Scalar from './scalar.js'

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

const Float = $$Scalar.Float

const ID = $$Scalar.ID

const String = $$Scalar.String

const Int = $$Scalar.Int

const Boolean = $$Scalar.Boolean

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

const Date = $$Scalar.Date

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

const BattleWildResult: $$Utilities.SchemaDrivenDataMap.Enum = {
  _tag: 'enum',
  name: 'BattleWildResult',
}

const PokemonType: $$Utilities.SchemaDrivenDataMap.Enum = {
  _tag: 'enum',
  name: 'PokemonType',
}

const TrainerClass: $$Utilities.SchemaDrivenDataMap.Enum = {
  _tag: 'enum',
  name: 'TrainerClass',
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

const DateFilter: $$Utilities.SchemaDrivenDataMap.InputObject = {
  _tag: 'inputObject',
  name: 'DateFilter',
  fieldsContainingCustomScalars: ['gte', 'lte'],
  fields: {
    gte: {
      _tag: 'argumentOrInputField',
      namedType: Date,
    },
    lte: {
      _tag: 'argumentOrInputField',
      namedType: Date,
    },
  },
}

const PokemonFilter: $$Utilities.SchemaDrivenDataMap.InputObject = {
  _tag: 'inputObject',
  name: 'PokemonFilter',
  fieldsContainingCustomScalars: ['birthday'],
  fields: {
    birthday: {
      _tag: 'argumentOrInputField',
      // namedType: DateFilter <-- Assigned later to avoid potential circular dependency.
    },
    name: {
      _tag: 'argumentOrInputField',
    },
    type: {
      _tag: 'argumentOrInputField',
    },
  },
}

const StringFilter: $$Utilities.SchemaDrivenDataMap.InputObject = {
  _tag: 'inputObject',
  name: 'StringFilter',
  fields: {
    contains: {
      _tag: 'argumentOrInputField',
    },
    in: {
      _tag: 'argumentOrInputField',
    },
  },
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

const BattleRoyale: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    combatants: {
      _tag: 'outputField',
      // namedType: CombatantMultiPokemon <-- Assigned later to avoid potential circular dependency.
    },
    date: {
      _tag: 'outputField',
    },
    id: {
      _tag: 'outputField',
    },
    winner: {
      _tag: 'outputField',
      // namedType: Trainer <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const BattleTrainer: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    combatant1: {
      _tag: 'outputField',
      // namedType: CombatantSinglePokemon <-- Assigned later to avoid potential circular dependency.
    },
    combatant2: {
      _tag: 'outputField',
      // namedType: CombatantSinglePokemon <-- Assigned later to avoid potential circular dependency.
    },
    date: {
      _tag: 'outputField',
    },
    id: {
      _tag: 'outputField',
    },
    winner: {
      _tag: 'outputField',
      // namedType: Trainer <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const BattleWild: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    date: {
      _tag: 'outputField',
    },
    id: {
      _tag: 'outputField',
    },
    pokemon: {
      _tag: 'outputField',
      // namedType: Pokemon <-- Assigned later to avoid potential circular dependency.
    },
    result: {
      _tag: 'outputField',
    },
    trainer: {
      _tag: 'outputField',
      // namedType: Trainer <-- Assigned later to avoid potential circular dependency.
    },
    wildPokemons: {
      _tag: 'outputField',
      // namedType: Pokemon <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const CombatantMultiPokemon: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    pokemons: {
      _tag: 'outputField',
      // namedType: Pokemon <-- Assigned later to avoid potential circular dependency.
    },
    trainer: {
      _tag: 'outputField',
      // namedType: Trainer <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const CombatantSinglePokemon: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    pokemon: {
      _tag: 'outputField',
      // namedType: Pokemon <-- Assigned later to avoid potential circular dependency.
    },
    trainer: {
      _tag: 'outputField',
      // namedType: Trainer <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const Patron: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    id: {
      _tag: 'outputField',
    },
    money: {
      _tag: 'outputField',
    },
    name: {
      _tag: 'outputField',
    },
  },
}

const Pokemon: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    attack: {
      _tag: 'outputField',
    },
    birthday: {
      _tag: 'outputField',
      namedType: Date,
    },
    defense: {
      _tag: 'outputField',
    },
    hp: {
      _tag: 'outputField',
    },
    id: {
      _tag: 'outputField',
    },
    name: {
      _tag: 'outputField',
    },
    trainer: {
      _tag: 'outputField',
      // namedType: Trainer <-- Assigned later to avoid potential circular dependency.
    },
    type: {
      _tag: 'outputField',
    },
  },
}

const Trainer: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    class: {
      _tag: 'outputField',
    },
    fans: {
      _tag: 'outputField',
      // namedType: Patron <-- Assigned later to avoid potential circular dependency.
    },
    id: {
      _tag: 'outputField',
    },
    name: {
      _tag: 'outputField',
    },
    pokemon: {
      _tag: 'outputField',
      // namedType: Pokemon <-- Assigned later to avoid potential circular dependency.
    },
  },
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

const Being: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    ...Pokemon.fields,
    ...Trainer.fields,
  },
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

const Battle: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    ...BattleRoyale.fields,
    ...BattleTrainer.fields,
    ...BattleWild.fields,
  },
}

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

const Query: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    battles: {
      _tag: 'outputField',
      // namedType: Battle <-- Assigned later to avoid potential circular dependency.
    },
    beings: {
      _tag: 'outputField',
      // namedType: Being <-- Assigned later to avoid potential circular dependency.
    },
    pokemonByName: {
      _tag: 'outputField',
      arguments: {
        name: {
          _tag: 'argumentOrInputField',
          namedType: String,
          inlineType: [1],
        },
      },
      // namedType: Pokemon <-- Assigned later to avoid potential circular dependency.
    },
    pokemons: {
      _tag: 'outputField',
      arguments: {
        filter: {
          _tag: 'argumentOrInputField',
          namedType: PokemonFilter,
          inlineType: [0],
        },
      },
      // namedType: Pokemon <-- Assigned later to avoid potential circular dependency.
    },
    trainerByName: {
      _tag: 'outputField',
      arguments: {
        name: {
          _tag: 'argumentOrInputField',
          namedType: String,
          inlineType: [1],
        },
      },
      // namedType: Trainer <-- Assigned later to avoid potential circular dependency.
    },
    trainers: {
      _tag: 'outputField',
      // namedType: Trainer <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const Mutation: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    addPokemon: {
      _tag: 'outputField',
      arguments: {
        attack: {
          _tag: 'argumentOrInputField',
          namedType: Int,
          inlineType: [0],
        },
        defense: {
          _tag: 'argumentOrInputField',
          namedType: Int,
          inlineType: [0],
        },
        hp: {
          _tag: 'argumentOrInputField',
          namedType: Int,
          inlineType: [0],
        },
        name: {
          _tag: 'argumentOrInputField',
          namedType: String,
          inlineType: [1],
        },
        type: {
          _tag: 'argumentOrInputField',
          namedType: PokemonType,
          inlineType: [1],
        },
      },
      // namedType: Pokemon <-- Assigned later to avoid potential circular dependency.
    },
  },
}

//
//
//
//
//
//
// ==================================================================================================
//                                       Reference Assignments
//                                (avoids circular assignment issues)
// ==================================================================================================
//
//
//
//
//
//

// TODO: Contribute helper to Utilities to cast readonly data to mutable at type level.
// These assignments are needed to avoid circular references during module initialization.
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
PokemonFilter.fields![`birthday`]!.namedType = DateFilter
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
BattleRoyale.fields[`combatants`]!.namedType = CombatantMultiPokemon
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
BattleRoyale.fields[`winner`]!.namedType = Trainer
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
BattleTrainer.fields[`combatant1`]!.namedType = CombatantSinglePokemon
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
BattleTrainer.fields[`combatant2`]!.namedType = CombatantSinglePokemon
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
BattleTrainer.fields[`winner`]!.namedType = Trainer
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
BattleWild.fields[`pokemon`]!.namedType = Pokemon
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
BattleWild.fields[`trainer`]!.namedType = Trainer
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
BattleWild.fields[`wildPokemons`]!.namedType = Pokemon
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
CombatantMultiPokemon.fields[`pokemons`]!.namedType = Pokemon
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
CombatantMultiPokemon.fields[`trainer`]!.namedType = Trainer
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
CombatantSinglePokemon.fields[`pokemon`]!.namedType = Pokemon
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
CombatantSinglePokemon.fields[`trainer`]!.namedType = Trainer
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Pokemon.fields[`trainer`]!.namedType = Trainer
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Trainer.fields[`fans`]!.namedType = Patron
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Trainer.fields[`pokemon`]!.namedType = Pokemon
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`battles`]!.namedType = Battle
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`beings`]!.namedType = Being
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`pokemonByName`]!.namedType = Pokemon
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`pokemons`]!.namedType = Pokemon
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`trainerByName`]!.namedType = Trainer
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`trainers`]!.namedType = Trainer
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Mutation.fields[`addPokemon`]!.namedType = Pokemon

//
//
//
//
//
//
// ==================================================================================================
//                                               Index
// ==================================================================================================
//
//
//
//
//
//

const $schemaDrivenDataMap: $$Utilities.SchemaDrivenDataMap = {
  operations: {
    query: Query,
    mutation: Mutation,
  },
  directives: {},
  inputTypes: {
    Float,
    ID,
    String,
    Int,
    Boolean,
    Date,
    BattleWildResult,
    PokemonType,
    TrainerClass,
    DateFilter,
    PokemonFilter,
    StringFilter,
  },
  outputTypes: {
    Float,
    ID,
    String,
    Int,
    Boolean,
    Date,
    BattleWildResult,
    PokemonType,
    TrainerClass,
    BattleRoyale,
    BattleTrainer,
    BattleWild,
    CombatantMultiPokemon,
    CombatantSinglePokemon,
    Patron,
    Pokemon,
    Trainer,
    Being,
    Battle,
    Query,
    Mutation,
  },
}

export { $schemaDrivenDataMap as schemaDrivenDataMap }
