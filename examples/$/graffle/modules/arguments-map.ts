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
  readonly _tag: 'inputObject'
  readonly name: 'DateFilter'
  readonly fields: {
    readonly gte: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: 'Date'
      readonly inlineType: readonly [0]
      readonly $type: TypeInputsIndex.Date | null | undefined
    }
    readonly lte: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: 'Date'
      readonly inlineType: readonly [0]
      readonly $type: TypeInputsIndex.Date | null | undefined
    }
  }
}

export interface PokemonFilter extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly _tag: 'inputObject'
  readonly name: 'PokemonFilter'
  readonly fields: {
    readonly birthday: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: 'DateFilter'
      readonly inlineType: readonly [0]
      readonly $type: TypeInputsIndex.DateFilter | null | undefined
    }
    readonly name: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: 'StringFilter'
      readonly inlineType: readonly [0]
      readonly $type: TypeInputsIndex.StringFilter | null | undefined
    }
    readonly type: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: 'PokemonType'
      readonly inlineType: readonly [0]
      readonly $type: TypeInputsIndex.PokemonType | null | undefined
    }
  }
}

export interface StringFilter extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly _tag: 'inputObject'
  readonly name: 'StringFilter'
  readonly fields: {
    readonly contains: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: 'String'
      readonly inlineType: readonly [0]
      readonly $type: TypeInputsIndex.String | null | undefined
    }
    readonly in: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: 'String'
      readonly inlineType: readonly [0, [1]]
      readonly $type: readonly TypeInputsIndex.String[] | null | undefined
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
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly addPokemon: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly attack: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: 'Int'
          readonly inlineType: readonly [0]
          readonly $type: TypeInputsIndex.Int | null | undefined
        }
        readonly defense: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: 'Int'
          readonly inlineType: readonly [0]
          readonly $type: TypeInputsIndex.Int | null | undefined
        }
        readonly hp: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: 'Int'
          readonly inlineType: readonly [0]
          readonly $type: TypeInputsIndex.Int | null | undefined
        }
        readonly name: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: 'String'
          readonly inlineType: readonly [1]
          readonly $type: TypeInputsIndex.String
        }
        readonly type: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: 'PokemonType'
          readonly inlineType: readonly [1]
          readonly $type: TypeInputsIndex.PokemonType
        }
      }
    }
  }
}

export interface Query extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly pokemonByName: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly name: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: 'String'
          readonly inlineType: readonly [1]
          readonly $type: TypeInputsIndex.String
        }
      }
    }
    readonly pokemons: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly filter: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: 'PokemonFilter'
          readonly inlineType: readonly [0]
          readonly $type: TypeInputsIndex.PokemonFilter | null | undefined
        }
      }
    }
    readonly trainerByName: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly name: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: 'String'
          readonly inlineType: readonly [1]
          readonly $type: TypeInputsIndex.String
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
  inputTypes: {
    DateFilter: DateFilter
    PokemonFilter: PokemonFilter
    StringFilter: StringFilter
  }
  outputTypes: {
    Mutation: Mutation
    Query: Query
  }
}
