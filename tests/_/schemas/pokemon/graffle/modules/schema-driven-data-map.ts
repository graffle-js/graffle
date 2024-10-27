import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
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

const Boolean = $$Scalar.Boolean

const Float = $$Scalar.Float

const ID = $$Scalar.ID

const Int = $$Scalar.Int

const String = $$Scalar.String

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

const Date = 'Date'

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
  k: 'enum',
  n: 'BattleWildResult',
}

const PokemonType: $$Utilities.SchemaDrivenDataMap.Enum = {
  k: 'enum',
  n: 'PokemonType',
}

const TrainerClass: $$Utilities.SchemaDrivenDataMap.Enum = {
  k: 'enum',
  n: 'TrainerClass',
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
  n: 'DateFilter',
  fcs: ['gte', 'lte'],
  f: {
    gte: {
      nt: Date,
    },
    lte: {
      nt: Date,
    },
  },
}

const PokemonFilter: $$Utilities.SchemaDrivenDataMap.InputObject = {
  n: 'PokemonFilter',
  fcs: ['birthday'],
  f: {
    birthday: {
      // nt: DateFilter, <-- Assigned later to avoid potential circular dependency.
    },
    name: {},
  },
}

const StringFilter: $$Utilities.SchemaDrivenDataMap.InputObject = {
  n: 'StringFilter',
  f: {
    contains: {},
    in: {},
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
  f: {
    combatants: {
      // nt: CombatantMultiPokemon, <-- Assigned later to avoid potential circular dependency.
    },
    date: {},
    id: {},
    winner: {
      // nt: Trainer, <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const BattleTrainer: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    combatant1: {
      // nt: CombatantSinglePokemon, <-- Assigned later to avoid potential circular dependency.
    },
    combatant2: {
      // nt: CombatantSinglePokemon, <-- Assigned later to avoid potential circular dependency.
    },
    date: {},
    id: {},
    winner: {
      // nt: Trainer, <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const BattleWild: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    date: {},
    id: {},
    pokemon: {
      // nt: Pokemon, <-- Assigned later to avoid potential circular dependency.
    },
    result: {},
    trainer: {
      // nt: Trainer, <-- Assigned later to avoid potential circular dependency.
    },
    wildPokemons: {
      // nt: Pokemon, <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const CombatantMultiPokemon: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    pokemons: {
      // nt: Pokemon, <-- Assigned later to avoid potential circular dependency.
    },
    trainer: {
      // nt: Trainer, <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const CombatantSinglePokemon: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    pokemon: {
      // nt: Pokemon, <-- Assigned later to avoid potential circular dependency.
    },
    trainer: {
      // nt: Trainer, <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const Patron: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    id: {},
    money: {},
    name: {},
  },
}

const Pokemon: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    attack: {},
    birthday: {
      nt: Date,
    },
    defense: {},
    hp: {},
    id: {},
    name: {},
    trainer: {
      // nt: Trainer, <-- Assigned later to avoid potential circular dependency.
    },
    type: {},
  },
}

const Trainer: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    class: {},
    fans: {
      // nt: Patron, <-- Assigned later to avoid potential circular dependency.
    },
    id: {},
    name: {},
    pokemon: {
      // nt: Pokemon, <-- Assigned later to avoid potential circular dependency.
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
  f: {
    ...Pokemon.f,
    ...Trainer.f,
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
  f: {
    ...BattleRoyale.f,
    ...BattleTrainer.f,
    ...BattleWild.f,
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
  f: {
    battles: {
      // nt: Battle, <-- Assigned later to avoid potential circular dependency.
    },
    beings: {
      // nt: Being, <-- Assigned later to avoid potential circular dependency.
    },
    pokemon: {
      // nt: Pokemon, <-- Assigned later to avoid potential circular dependency.
    },
    pokemonByName: {
      a: {
        name: {
          nt: String,
          it: [1],
        },
      },
      // nt: Pokemon, <-- Assigned later to avoid potential circular dependency.
    },
    pokemons: {
      a: {
        filter: {
          nt: PokemonFilter,
          it: [0],
        },
      },
      // nt: Pokemon, <-- Assigned later to avoid potential circular dependency.
    },
    trainerByName: {
      a: {
        name: {
          nt: String,
          it: [1],
        },
      },
      // nt: Trainer, <-- Assigned later to avoid potential circular dependency.
    },
    trainers: {
      // nt: Trainer, <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const Mutation: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    addPokemon: {
      a: {
        attack: {
          nt: Int,
          it: [0],
        },
        defense: {
          nt: Int,
          it: [0],
        },
        hp: {
          nt: Int,
          it: [0],
        },
        name: {
          nt: String,
          it: [1],
        },
        type: {
          nt: PokemonType,
          it: [1],
        },
      },
      // nt: Pokemon, <-- Assigned later to avoid potential circular dependency.
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

PokemonFilter.f![`birthday`]!.nt = DateFilter
BattleRoyale.f[`combatants`]!.nt = CombatantMultiPokemon
BattleRoyale.f[`winner`]!.nt = Trainer
BattleTrainer.f[`combatant1`]!.nt = CombatantSinglePokemon
BattleTrainer.f[`combatant2`]!.nt = CombatantSinglePokemon
BattleTrainer.f[`winner`]!.nt = Trainer
BattleWild.f[`pokemon`]!.nt = Pokemon
BattleWild.f[`trainer`]!.nt = Trainer
BattleWild.f[`wildPokemons`]!.nt = Pokemon
CombatantMultiPokemon.f[`pokemons`]!.nt = Pokemon
CombatantMultiPokemon.f[`trainer`]!.nt = Trainer
CombatantSinglePokemon.f[`pokemon`]!.nt = Pokemon
CombatantSinglePokemon.f[`trainer`]!.nt = Trainer
Pokemon.f[`trainer`]!.nt = Trainer
Trainer.f[`fans`]!.nt = Patron
Trainer.f[`pokemon`]!.nt = Pokemon
Query.f[`battles`]!.nt = Battle
Query.f[`beings`]!.nt = Being
Query.f[`pokemon`]!.nt = Pokemon
Query.f[`pokemonByName`]!.nt = Pokemon
Query.f[`pokemons`]!.nt = Pokemon
Query.f[`trainerByName`]!.nt = Trainer
Query.f[`trainers`]!.nt = Trainer
Mutation.f[`addPokemon`]!.nt = Pokemon

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
  types: {
    Boolean,
    Float,
    ID,
    Int,
    String,
    Date,
    BattleWildResult,
    PokemonType,
    TrainerClass,
    DateFilter,
    PokemonFilter,
    StringFilter,
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
