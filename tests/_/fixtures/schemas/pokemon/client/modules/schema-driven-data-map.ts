import type * as $$Utilities from '#graffle/utilities-for-generated'
import * as $$Scalar from './scalar.js'
import { Schema as $$Schema } from './schema/_.js'

//
//
//
//
//
//
// ==================================================================================================
//                                               Types
// ==================================================================================================
//
//
//
//
//
//

interface BattleWildResult extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'BattleWildResult'
  readonly type: $$Schema.BattleWildResult['members']
}

interface PokemonType extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'PokemonType'
  readonly type: $$Schema.PokemonType['members']
}

interface TrainerClass extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'TrainerClass'
  readonly type: $$Schema.TrainerClass['members']
}

interface DateFilter extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly _tag: 'inputObject'
  readonly name: 'DateFilter'
  readonly fieldsContainingCustomScalars: ['gte', 'lte']
  readonly fields: {
    readonly gte: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.Date
      readonly inlineType: [0]
    }
    readonly lte: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.Date
      readonly inlineType: [0]
    }
  }
  readonly type: $$Schema.DateFilter['type']
}

interface PokemonFilter extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly _tag: 'inputObject'
  readonly name: 'PokemonFilter'
  readonly fieldsContainingCustomScalars: ['birthday']
  readonly fields: {
    readonly birthday: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: DateFilter
      readonly inlineType: [0]
    }
    readonly name: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: StringFilter
      readonly inlineType: [0]
    }
    readonly type: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: PokemonType
      readonly inlineType: [0]
    }
  }
  readonly type: $$Schema.PokemonFilter['type']
}

interface StringFilter extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly _tag: 'inputObject'
  readonly name: 'StringFilter'
  readonly fields: {
    readonly contains: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.String
      readonly inlineType: [0]
    }
    readonly in: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.String
      readonly inlineType: [0, [1]]
    }
  }
  readonly type: $$Schema.StringFilter['type']
}

interface BattleRoyale extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly combatants: {
      readonly _tag: 'outputField'
      readonly namedType: CombatantMultiPokemon
    }
    readonly date: {
      readonly _tag: 'outputField'
    }
    readonly id: {
      readonly _tag: 'outputField'
    }
    readonly winner: {
      readonly _tag: 'outputField'
      readonly namedType: Trainer
    }
  }
}

interface BattleTrainer extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly combatant1: {
      readonly _tag: 'outputField'
      readonly namedType: CombatantSinglePokemon
    }
    readonly combatant2: {
      readonly _tag: 'outputField'
      readonly namedType: CombatantSinglePokemon
    }
    readonly date: {
      readonly _tag: 'outputField'
    }
    readonly id: {
      readonly _tag: 'outputField'
    }
    readonly winner: {
      readonly _tag: 'outputField'
      readonly namedType: Trainer
    }
  }
}

interface BattleWild extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly date: {
      readonly _tag: 'outputField'
    }
    readonly id: {
      readonly _tag: 'outputField'
    }
    readonly pokemon: {
      readonly _tag: 'outputField'
      readonly namedType: Pokemon
    }
    readonly result: {
      readonly _tag: 'outputField'
    }
    readonly trainer: {
      readonly _tag: 'outputField'
      readonly namedType: Trainer
    }
    readonly wildPokemons: {
      readonly _tag: 'outputField'
      readonly namedType: Pokemon
    }
  }
}

interface CombatantMultiPokemon extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly pokemons: {
      readonly _tag: 'outputField'
      readonly namedType: Pokemon
    }
    readonly trainer: {
      readonly _tag: 'outputField'
      readonly namedType: Trainer
    }
  }
}

interface CombatantSinglePokemon extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly pokemon: {
      readonly _tag: 'outputField'
      readonly namedType: Pokemon
    }
    readonly trainer: {
      readonly _tag: 'outputField'
      readonly namedType: Trainer
    }
  }
}

interface Patron extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly id: {
      readonly _tag: 'outputField'
    }
    readonly money: {
      readonly _tag: 'outputField'
    }
    readonly name: {
      readonly _tag: 'outputField'
    }
  }
}

interface Pokemon extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly attack: {
      readonly _tag: 'outputField'
    }
    readonly birthday: {
      readonly _tag: 'outputField'
      readonly namedType: $$Scalar.Date
    }
    readonly defense: {
      readonly _tag: 'outputField'
    }
    readonly hp: {
      readonly _tag: 'outputField'
    }
    readonly id: {
      readonly _tag: 'outputField'
    }
    readonly name: {
      readonly _tag: 'outputField'
    }
    readonly trainer: {
      readonly _tag: 'outputField'
      readonly namedType: Trainer
    }
    readonly type: {
      readonly _tag: 'outputField'
    }
  }
}

interface Trainer extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly class: {
      readonly _tag: 'outputField'
    }
    readonly fans: {
      readonly _tag: 'outputField'
      readonly namedType: Patron
    }
    readonly id: {
      readonly _tag: 'outputField'
    }
    readonly name: {
      readonly _tag: 'outputField'
    }
    readonly pokemon: {
      readonly _tag: 'outputField'
      readonly namedType: Pokemon
    }
  }
}

interface Being extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface Battle extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface Query extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly battles: {
      readonly _tag: 'outputField'
      readonly namedType: Battle
    }
    readonly beings: {
      readonly _tag: 'outputField'
      readonly namedType: Being
    }
    readonly pokemonByName: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly name: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [1]
        }
      }
      readonly $argumentsType: {
        name: $$Scalar.String['codec']['_typeDecoded']
      }
      readonly namedType: Pokemon
    }
    readonly pokemons: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly filter: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: PokemonFilter
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        filter?: SchemaDrivenDataMap['inputTypes']['PokemonFilter']['type'] | null | undefined
      }
      readonly namedType: Pokemon
    }
    readonly trainerByName: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly name: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [1]
        }
      }
      readonly $argumentsType: {
        name: $$Scalar.String['codec']['_typeDecoded']
      }
      readonly namedType: Trainer
    }
    readonly trainers: {
      readonly _tag: 'outputField'
      readonly namedType: Trainer
    }
  }
}

interface Mutation extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly addPokemon: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly attack: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [0]
        }
        readonly defense: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [0]
        }
        readonly hp: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [0]
        }
        readonly name: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [1]
        }
        readonly type: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: PokemonType
          readonly inlineType: [1]
        }
      }
      readonly $argumentsType: {
        attack?: $$Scalar.Int['codec']['_typeDecoded'] | null | undefined
        defense?: $$Scalar.Int['codec']['_typeDecoded'] | null | undefined
        hp?: $$Scalar.Int['codec']['_typeDecoded'] | null | undefined
        name: $$Scalar.String['codec']['_typeDecoded']
        type: PokemonType['type']
      }
      readonly namedType: Pokemon
    }
    readonly resetData: {
      readonly _tag: 'outputField'
    }
  }
}

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

const BattleWildResult: BattleWildResult = {
  _tag: 'enum',
  name: 'BattleWildResult',
  type: null as any as 'pokemonsCaptured' | 'pokemonsDefeated' | 'trainerDefeated',
}

const PokemonType: PokemonType = {
  _tag: 'enum',
  name: 'PokemonType',
  type: null as any as 'bug' | 'electric' | 'fire' | 'grass' | 'water',
}

const TrainerClass: TrainerClass = {
  _tag: 'enum',
  name: 'TrainerClass',
  type: null as any as
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
    | 'youth',
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

const DateFilter: DateFilter = {
  _tag: 'inputObject',
  name: 'DateFilter',
  fieldsContainingCustomScalars: ['gte', 'lte'],
  fields: {
    gte: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.Date,
      inlineType: [0],
    },
    lte: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.Date,
      inlineType: [0],
    },
  },
  type: {
    gte: null as any as $$Scalar.Date['codec']['_typeDecoded'] | null | undefined,
    lte: null as any as $$Scalar.Date['codec']['_typeDecoded'] | null | undefined,
  },
}

const PokemonFilter: PokemonFilter = {
  _tag: 'inputObject',
  name: 'PokemonFilter',
  fieldsContainingCustomScalars: ['birthday'],
  fields: {
    birthday: {
      _tag: 'argumentOrInputField',
      namedType: null as any as DateFilter,
      inlineType: [0],
    },
    name: {
      _tag: 'argumentOrInputField',
      namedType: null as any as StringFilter,
      inlineType: [0],
    },
    type: {
      _tag: 'argumentOrInputField',
      namedType: PokemonType,
      inlineType: [0],
    },
  },
  type: {
    birthday: null as any as SchemaDrivenDataMap['inputTypes']['DateFilter']['type'] | null | undefined,
    name: null as any as SchemaDrivenDataMap['inputTypes']['StringFilter']['type'] | null | undefined,
    type: null as any as PokemonType['type'] | null | undefined,
  },
}

const StringFilter: StringFilter = {
  _tag: 'inputObject',
  name: 'StringFilter',
  fields: {
    contains: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.String,
      inlineType: [0],
    },
    in: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.String,
      inlineType: [0, [1]],
    },
  },
  type: {
    contains: null as any as $$Scalar.String['codec']['_typeDecoded'] | null | undefined,
    in: null as any as readonly ($$Scalar.String['codec']['_typeDecoded'])[] | null | undefined,
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

const BattleRoyale: BattleRoyale = {
  _tag: 'outputObject',
  fields: {
    combatants: {
      _tag: 'outputField',
      namedType: null as any as CombatantMultiPokemon,
    },
    date: {
      _tag: 'outputField',
    },
    id: {
      _tag: 'outputField',
    },
    winner: {
      _tag: 'outputField',
      namedType: null as any as Trainer,
    },
  },
}

const BattleTrainer: BattleTrainer = {
  _tag: 'outputObject',
  fields: {
    combatant1: {
      _tag: 'outputField',
      namedType: null as any as CombatantSinglePokemon,
    },
    combatant2: {
      _tag: 'outputField',
      namedType: null as any as CombatantSinglePokemon,
    },
    date: {
      _tag: 'outputField',
    },
    id: {
      _tag: 'outputField',
    },
    winner: {
      _tag: 'outputField',
      namedType: null as any as Trainer,
    },
  },
}

const BattleWild: BattleWild = {
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
      namedType: null as any as Pokemon,
    },
    result: {
      _tag: 'outputField',
    },
    trainer: {
      _tag: 'outputField',
      namedType: null as any as Trainer,
    },
    wildPokemons: {
      _tag: 'outputField',
      namedType: null as any as Pokemon,
    },
  },
}

const CombatantMultiPokemon: CombatantMultiPokemon = {
  _tag: 'outputObject',
  fields: {
    pokemons: {
      _tag: 'outputField',
      namedType: null as any as Pokemon,
    },
    trainer: {
      _tag: 'outputField',
      namedType: null as any as Trainer,
    },
  },
}

const CombatantSinglePokemon: CombatantSinglePokemon = {
  _tag: 'outputObject',
  fields: {
    pokemon: {
      _tag: 'outputField',
      namedType: null as any as Pokemon,
    },
    trainer: {
      _tag: 'outputField',
      namedType: null as any as Trainer,
    },
  },
}

const Patron: Patron = {
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

const Pokemon: Pokemon = {
  _tag: 'outputObject',
  fields: {
    attack: {
      _tag: 'outputField',
    },
    birthday: {
      _tag: 'outputField',
      namedType: $$Scalar.Date,
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
      namedType: null as any as Trainer,
    },
    type: {
      _tag: 'outputField',
    },
  },
}

const Trainer: Trainer = {
  _tag: 'outputObject',
  fields: {
    class: {
      _tag: 'outputField',
    },
    fans: {
      _tag: 'outputField',
      namedType: null as any as Patron,
    },
    id: {
      _tag: 'outputField',
    },
    name: {
      _tag: 'outputField',
    },
    pokemon: {
      _tag: 'outputField',
      namedType: null as any as Pokemon,
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

const Being: Being = {
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

const Battle: Battle = {
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

const Query: Query = {
  _tag: 'outputObject',
  fields: {
    battles: {
      _tag: 'outputField',
      namedType: null as any as Battle,
    },
    beings: {
      _tag: 'outputField',
      namedType: null as any as Being,
    },
    pokemonByName: {
      _tag: 'outputField',
      arguments: {
        name: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [1],
        },
      },
      $argumentsType: {
        name: null as any as $$Scalar.String['codec']['_typeDecoded'],
      },
      namedType: null as any as Pokemon,
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
      $argumentsType: {
        filter: null as any as SchemaDrivenDataMap['inputTypes']['PokemonFilter']['type'] | null | undefined,
      },
      namedType: null as any as Pokemon,
    },
    trainerByName: {
      _tag: 'outputField',
      arguments: {
        name: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [1],
        },
      },
      $argumentsType: {
        name: null as any as $$Scalar.String['codec']['_typeDecoded'],
      },
      namedType: null as any as Trainer,
    },
    trainers: {
      _tag: 'outputField',
      namedType: null as any as Trainer,
    },
  },
}

const Mutation: Mutation = {
  _tag: 'outputObject',
  fields: {
    addPokemon: {
      _tag: 'outputField',
      arguments: {
        attack: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [0],
        },
        defense: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [0],
        },
        hp: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [0],
        },
        name: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [1],
        },
        type: {
          _tag: 'argumentOrInputField',
          namedType: PokemonType,
          inlineType: [1],
        },
      },
      $argumentsType: {
        attack: null as any as $$Scalar.Int['codec']['_typeDecoded'] | null | undefined,
        defense: null as any as $$Scalar.Int['codec']['_typeDecoded'] | null | undefined,
        hp: null as any as $$Scalar.Int['codec']['_typeDecoded'] | null | undefined,
        name: null as any as $$Scalar.String['codec']['_typeDecoded'],
        type: null as any as PokemonType['type'],
      },
      namedType: null as any as Pokemon,
    },
    resetData: {
      _tag: 'outputField',
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
PokemonFilter.fields![`name`]!.namedType = StringFilter
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

interface SchemaDrivenDataMap extends $$Utilities.SchemaDrivenDataMap {
  readonly operations: {
    readonly query: Query
    readonly mutation: Mutation
  }
  readonly directives: {}
  readonly inputTypes: {
    readonly Boolean: $$Scalar.Boolean
    readonly Float: $$Scalar.Float
    readonly ID: $$Scalar.ID
    readonly Int: $$Scalar.Int
    readonly String: $$Scalar.String
    readonly Date: $$Scalar.Date
    readonly BattleWildResult: BattleWildResult
    readonly PokemonType: PokemonType
    readonly TrainerClass: TrainerClass
    readonly DateFilter: DateFilter
    readonly PokemonFilter: PokemonFilter
    readonly StringFilter: StringFilter
  }
  readonly outputTypes: {
    readonly Boolean: $$Scalar.Boolean
    readonly Float: $$Scalar.Float
    readonly ID: $$Scalar.ID
    readonly Int: $$Scalar.Int
    readonly String: $$Scalar.String
    readonly Date: $$Scalar.Date
    readonly BattleWildResult: BattleWildResult
    readonly PokemonType: PokemonType
    readonly TrainerClass: TrainerClass
    readonly BattleRoyale: BattleRoyale
    readonly BattleTrainer: BattleTrainer
    readonly BattleWild: BattleWild
    readonly CombatantMultiPokemon: CombatantMultiPokemon
    readonly CombatantSinglePokemon: CombatantSinglePokemon
    readonly Patron: Patron
    readonly Pokemon: Pokemon
    readonly Trainer: Trainer
    readonly Being: Being
    readonly Battle: Battle
    readonly Query: Query
    readonly Mutation: Mutation
  }
  readonly scalarTypes: {
    readonly Boolean: $$Scalar.Boolean
    readonly Float: $$Scalar.Float
    readonly ID: $$Scalar.ID
    readonly Int: $$Scalar.Int
    readonly String: $$Scalar.String
    readonly Date: $$Scalar.Date
  }
}

const $schemaDrivenDataMap: SchemaDrivenDataMap = {
  operations: {
    query: Query,
    mutation: Mutation,
  },
  directives: {},
  inputTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
    Date: $$Scalar.Date,
    BattleWildResult,
    PokemonType,
    TrainerClass,
    DateFilter,
    PokemonFilter,
    StringFilter,
  },
  outputTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
    Date: $$Scalar.Date,
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
  scalarTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
    Date: $$Scalar.Date,
  },
}

export { $schemaDrivenDataMap as schemaDrivenDataMap }
export type { SchemaDrivenDataMap }
