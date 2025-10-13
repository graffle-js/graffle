import type * as $$Utilities from 'graffle/utilities-for-generated'
import type * as TypeInputsIndex from './type-inputs-index.js'

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

export interface DateFilter extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly n: 'DateFilter'
  readonly f: {
    readonly gte: {
      readonly nt: 'Date'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Date | null | undefined
    }
    readonly lte: {
      readonly nt: 'Date'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Date | null | undefined
    }
  }
}

export interface PokemonFilter extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly n: 'PokemonFilter'
  readonly f: {
    readonly birthday: {
      readonly nt: 'DateFilter'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DateFilter | null | undefined
    }
    readonly name: {
      readonly nt: 'StringFilter'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.StringFilter | null | undefined
    }
    readonly type: {
      readonly nt: 'PokemonType'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.PokemonType | null | undefined
    }
  }
}

export interface StringFilter extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly n: 'StringFilter'
  readonly f: {
    readonly contains: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | null | undefined
    }
    readonly in: {
      readonly nt: 'String'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.String[] | null | undefined
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
//                                            OutputObject
// ==================================================================================================
//
//
//
//
//
//

// No OutputObject types with arguments in your schema.

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

// No Interface types with arguments in your schema.

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

// No Union types with arguments in your schema.

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

export interface Mutation extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly f: {
    readonly addPokemon: {
      readonly a: {
        readonly attack: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | null | undefined
        }
        readonly defense: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | null | undefined
        }
        readonly hp: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | null | undefined
        }
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
        readonly type: {
          readonly nt: 'PokemonType'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.PokemonType
        }
      }
    }
  }
}

export interface Query extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly f: {
    readonly pokemonByName: {
      readonly a: {
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly pokemons: {
      readonly a: {
        readonly filter: {
          readonly nt: 'PokemonFilter'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PokemonFilter | null | undefined
        }
      }
    }
    readonly trainerByName: {
      readonly a: {
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
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
//                                               Index
// ==================================================================================================
//
//
//
//
//
//

export interface ArgumentsMap {
  operations: {
    query: Query
    mutation: Mutation
  }
  directives: {}
  types: {
    Mutation: Mutation
    Query: Query
    DateFilter: DateFilter
    PokemonFilter: PokemonFilter
    StringFilter: StringFilter
  }
}
