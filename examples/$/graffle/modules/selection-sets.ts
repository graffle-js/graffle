import type * as $$Utilities from 'graffle/utilities-for-generated'
import type * as $$Scalar from './scalar.js'

export interface $DefaultSelectionContext {
  scalars: $$Scalar.$Registry
}

//
//
//
//
//
//
// ==================================================================================================
//                                              Document
// ==================================================================================================
//
//
//
//
//
//

export interface $Document<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  query?: Record<string, Query<_$Context>>
  mutation?: Record<string, Mutation<_$Context>>
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

//                                               Query
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} type.
 *
 * Root query type for fetching Pokemon data.
 */
export interface Query<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * Retrieve all battles that have occurred.
   *
   * ```graphql
   * battles: [Battle!]!
   *
   * union Battle = BattleRoyale | BattleTrainer | BattleWild
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Battle}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.battles` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */
  battles?:
    | Query.battles$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.battles<_$Context>>
  /**
   * Retrieve all beings (Pokemon, Trainers, and Patrons).
   *
   * ```graphql
   * beings: [Being!]!
   *
   * interface Being {
   * id: ID
   * name: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Being}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.beings` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */
  beings?:
    | Query.beings$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.beings<_$Context>>
  /**
   * Find Pokemon by their name.
   *
   * ```graphql
   * pokemonByName(name: String!): [Pokemon!]
   *
   * type Pokemon implements Being {
   * attack: Int!
   * birthday: Date!
   * defense: Int!
   * hp: Int!
   * id: ID!
   * name: String!
   * trainer: Trainer
   * type: PokemonType!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.pokemonByName` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */
  pokemonByName?:
    | Query.pokemonByName<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.pokemonByName<_$Context>>
  /**
   * Retrieve all Pokemon, optionally filtered.
   *
   * ```graphql
   * pokemons(filter: PokemonFilter): [Pokemon!]
   *
   * type Pokemon implements Being {
   * attack: Int!
   * birthday: Date!
   * defense: Int!
   * hp: Int!
   * id: ID!
   * name: String!
   * trainer: Trainer
   * type: PokemonType!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.pokemons` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */
  pokemons?:
    | Query.pokemons$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.pokemons<_$Context>>
  /**
   * Find a trainer by their name.
   *
   * ```graphql
   * trainerByName(name: String!): Trainer
   *
   * type Trainer implements Being {
   * class: TrainerClass
   * fans: [Patron!]
   * id: ID
   * name: String
   * pokemon: [Pokemon!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.trainerByName` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  trainerByName?:
    | Query.trainerByName<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.trainerByName<_$Context>>
  /**
   * Retrieve all trainers.
   *
   * ```graphql
   * trainers: [Trainer!]
   *
   * type Trainer implements Being {
   * class: TrainerClass
   * fans: [Patron!]
   * id: ID
   * name: String
   * pokemon: [Pokemon!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Trainer}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.trainers` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  trainers?:
    | Query.trainers$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.trainers<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Query$FragmentInline<_$Context>
    | Query$FragmentInline<_$Context>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface Query$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends Query<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Query {
  export type battles<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = battles$SelectionSet<_$Context>

  export interface battles$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Battle<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `battles` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type battles$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    battles$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type beings<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = beings$SelectionSet<_$Context>

  export interface beings$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Being<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `beings` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type beings$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    beings$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemonByName<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = pokemonByName$SelectionSet<_$Context>

  export interface pokemonByName$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {
    /**
     * Arguments for `pokemonByName` field. All arguments are required so you must include this.
     */
    $: pokemonByName$Arguments<_$Context>
  }

  export interface pokemonByName$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > {
    /**
     * The name of the Pokemon to search for.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String!` |
     * | **Parent** | {@link $NamedTypes.$Query}.pokemonByName |
     * | **Path** | `Query.pokemonByName(name)` |
     * | **Nullability** | Required |
     */
    name: $$Utilities.DocumentBuilderKit.Var.Maybe<string>
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemonByName` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemonByName$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    pokemonByName$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemons<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = pokemons$SelectionSet<_$Context>

  export interface pokemons$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {
    /**
     * Arguments for `pokemons` field. No arguments are required so you may omit this.
     */
    $?: pokemons$Arguments<_$Context>
  }

  export interface pokemons$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > {
    /**
     * Optional filter criteria for Pokemon.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `PokemonFilter` |
     * | **Parent** | {@link $NamedTypes.$Query}.pokemons |
     * | **Path** | `Query.pokemons(filter)` |
     * | **Nullability** | Optional |
     */
    filter?: $$Utilities.DocumentBuilderKit.Var.Maybe<$NamedTypes.$PokemonFilter<_$Context> | null | undefined>
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemons$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    pokemons$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainerByName<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = trainerByName$SelectionSet<_$Context>

  export interface trainerByName$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {
    /**
     * Arguments for `trainerByName` field. All arguments are required so you must include this.
     */
    $: trainerByName$Arguments<_$Context>
  }

  export interface trainerByName$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > {
    /**
     * The name of the trainer to search for.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String!` |
     * | **Parent** | {@link $NamedTypes.$Query}.trainerByName |
     * | **Path** | `Query.trainerByName(name)` |
     * | **Nullability** | Required |
     */
    name: $$Utilities.DocumentBuilderKit.Var.Maybe<string>
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainerByName` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainerByName$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    trainerByName$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainers<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = trainers$SelectionSet<_$Context>

  export interface trainers$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainers` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainers$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    trainers$SelectionSet<_$Context>
  >
}

//                                              Mutation
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} type.
 *
 * Root mutation type for modifying Pokemon data.
 */
export interface Mutation<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * Add a new Pokemon to the database.
   *
   * ```graphql
   * addPokemon(attack: Int, defense: Int, hp: Int, name: String!, type: PokemonType!): Pokemon
   *
   * type Pokemon implements Being {
   * attack: Int!
   * birthday: Date!
   * defense: Int!
   * hp: Int!
   * id: ID!
   * name: String!
   * trainer: Trainer
   * type: PokemonType!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Pokemon} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Mutation} |
   * | **Path** | `Mutation.addPokemon` |
   * | **Nullability** | Optional |
   * | **Arguments** | 5 |
   */
  addPokemon?:
    | Mutation.addPokemon<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Mutation.addPokemon<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Mutation$FragmentInline<_$Context>
    | Mutation$FragmentInline<_$Context>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface Mutation$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends Mutation<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Mutation {
  export type addPokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = addPokemon$SelectionSet<_$Context>

  export interface addPokemon$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {
    /**
     * Arguments for `addPokemon` field. Some (2/5) arguments are required so you must include this.
     */
    $: addPokemon$Arguments<_$Context>
  }

  export interface addPokemon$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > {
    /**
     * The attack power of the new Pokemon.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `Int` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.addPokemon |
     * | **Path** | `Mutation.addPokemon(attack)` |
     * | **Nullability** | Optional |
     */
    attack?: $$Utilities.DocumentBuilderKit.Var.Maybe<number | null | undefined>
    /**
     * The defense power of the new Pokemon.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `Int` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.addPokemon |
     * | **Path** | `Mutation.addPokemon(defense)` |
     * | **Nullability** | Optional |
     */
    defense?: $$Utilities.DocumentBuilderKit.Var.Maybe<number | null | undefined>
    /**
     * The health points of the new Pokemon.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `Int` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.addPokemon |
     * | **Path** | `Mutation.addPokemon(hp)` |
     * | **Nullability** | Optional |
     */
    hp?: $$Utilities.DocumentBuilderKit.Var.Maybe<number | null | undefined>
    /**
     * The name of the new Pokemon.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String!` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.addPokemon |
     * | **Path** | `Mutation.addPokemon(name)` |
     * | **Nullability** | Required |
     */
    name: $$Utilities.DocumentBuilderKit.Var.Maybe<string>
    /**
     * The elemental type of the new Pokemon.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `PokemonType!` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.addPokemon |
     * | **Path** | `Mutation.addPokemon(type)` |
     * | **Nullability** | Required |
     */
    $type: $$Utilities.DocumentBuilderKit.Var.Maybe<$NamedTypes.$PokemonType>
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `addPokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type addPokemon$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    addPokemon$SelectionSet<_$Context>
  >
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

/**
 * Possible outcomes of a wild Pokemon battle.
 *
 * Members
 * "pokemonsCaptured" - The wild Pokemon were successfully captured.
 * "pokemonsDefeated" - The wild Pokemon were defeated but not captured.
 * "trainerDefeated" - The trainer was defeated by the wild Pokemon.
 */
export type BattleWildResult =
  | 'pokemonsCaptured'
  | 'pokemonsDefeated'
  | 'trainerDefeated'

/**
 * The elemental type of a Pokemon.
 *
 * Members
 * "bug" - Bug-type Pokemon are insects and arthropods.
 * "electric" - Electric-type Pokemon can generate and control electricity.
 * "fire" - Fire-type Pokemon can create and manipulate flames.
 * "grass" - Grass-type Pokemon have plant-like characteristics.
 * "water" - Water-type Pokemon live in or control water.
 */
export type PokemonType =
  | 'bug'
  | 'electric'
  | 'fire'
  | 'grass'
  | 'water'

/**
 * The class or specialty of a Pokemon trainer.
 *
 * Members
 * "bugCatcher" - A trainer who specializes in Bug-type Pokemon.
 * "camper" - A trainer who enjoys camping and outdoor activities.
 * "picnicker" - A trainer who enjoys picnics and nature.
 * "psychic" - A trainer with psychic abilities.
 * "psychicMedium" - A psychic trainer who serves as a spiritual medium.
 * "psychicYoungster" - A young trainer with developing psychic powers.
 * "sailor" - A trainer who works on ships and the sea.
 * "superNerd" - A highly intelligent trainer focused on science and technology.
 * "tamer" - A trainer who specializes in taming and befriending Pokemon.
 * "teamRocketGrunt" - A member of the villainous Team Rocket organization.
 * "triathlete" - A trainer who excels in multiple types of competitions.
 * "youngster" - A young, inexperienced trainer just starting their journey.
 * "youth" - A young trainer with enthusiasm but limited experience.
 */
export type TrainerClass =
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

/**
 * Input filter for querying by date ranges.
 */
export interface DateFilter<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * The minimum date (greater than or equal to).
   */
  gte?: $$Utilities.DocumentBuilderKit.Var.Maybe<
    | $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<
        'Date',
        _$Context extends { scalars: infer S } ? S : $$Utilities.Schema.Scalar.Registry.Empty
      >
    >
    | null
    | undefined
  >
  /**
   * The maximum date (less than or equal to).
   */
  lte?: $$Utilities.DocumentBuilderKit.Var.Maybe<
    | $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<
        'Date',
        _$Context extends { scalars: infer S } ? S : $$Utilities.Schema.Scalar.Registry.Empty
      >
    >
    | null
    | undefined
  >
}

/**
 * Input filter for querying Pokemon.
 */
export interface PokemonFilter<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * Filter by Pokemon birth/catch date.
   */
  birthday?: $$Utilities.DocumentBuilderKit.Var.Maybe<$NamedTypes.$DateFilter<_$Context> | null | undefined>
  /**
   * Filter by Pokemon name.
   */
  name?: $$Utilities.DocumentBuilderKit.Var.Maybe<$NamedTypes.$StringFilter<_$Context> | null | undefined>
  /**
   * Filter by Pokemon type.
   */
  $type?: $$Utilities.DocumentBuilderKit.Var.Maybe<$NamedTypes.$PokemonType | null | undefined>
}

/**
 * Input filter for querying by string values.
 */
export interface StringFilter<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * Filter for strings containing this substring.
   */
  contains?: $$Utilities.DocumentBuilderKit.Var.Maybe<string | null | undefined>
  /**
   * Filter for strings matching any value in this list.
   */
  in?: $$Utilities.DocumentBuilderKit.Var.Maybe<
    Array<$$Utilities.DocumentBuilderKit.Var.Maybe<string | null | undefined>> | null | undefined
  >
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

// ----------------------------------------| Entrypoint Interface |

/**
 * A battle royale where multiple trainers compete with their Pokemon teams.
 */
export interface BattleRoyale<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * The list of combatants participating in this battle royale.
   *
   * ```graphql
   * combatants: [CombatantMultiPokemon!]
   *
   * type CombatantMultiPokemon {
   * pokemons: [Pokemon!]
   * trainer: Trainer
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$CombatantMultiPokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleRoyale} |
   * | **Path** | `BattleRoyale.combatants` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  combatants?:
    | BattleRoyale.combatants$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleRoyale.combatants<_$Context>>
  /**
   * The date when this battle took place, stored as a Unix timestamp.
   *
   * ```graphql
   * date: Float
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Float} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleRoyale} |
   * | **Path** | `BattleRoyale.date` |
   * | **Nullability** | Optional |
   */
  date?:
    | BattleRoyale.date$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleRoyale.date<_$Context>>
  /**
   * The unique identifier for this battle.
   *
   * ```graphql
   * id: ID
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleRoyale} |
   * | **Path** | `BattleRoyale.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | BattleRoyale.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleRoyale.id<_$Context>>
  /**
   * The trainer who won this battle royale.
   *
   * ```graphql
   * winner: Trainer
   *
   * type Trainer implements Being {
   * class: TrainerClass
   * fans: [Patron!]
   * id: ID
   * name: String
   * pokemon: [Pokemon!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleRoyale} |
   * | **Path** | `BattleRoyale.winner` |
   * | **Nullability** | Optional |
   */
  winner?:
    | BattleRoyale.winner$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleRoyale.winner<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | BattleRoyale$FragmentInline<_$Context>
    | BattleRoyale$FragmentInline<_$Context>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface BattleRoyale$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends BattleRoyale<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace BattleRoyale {
  export type combatants<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = combatants$SelectionSet<_$Context>

  export interface combatants$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$CombatantMultiPokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatants` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatants$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    combatants$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type date<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>

  export interface date$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type winner<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = winner$SelectionSet<_$Context>

  export interface winner$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `winner` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type winner$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    winner$SelectionSet<_$Context>
  >
}

//                                           BattleTrainer
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * A one-on-one battle between two trainers.
 */
export interface BattleTrainer<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * The first combatant in this trainer battle.
   *
   * ```graphql
   * combatant1: CombatantSinglePokemon
   *
   * type CombatantSinglePokemon {
   * pokemon: Pokemon
   * trainer: Trainer
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$CombatantSinglePokemon} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleTrainer} |
   * | **Path** | `BattleTrainer.combatant1` |
   * | **Nullability** | Optional |
   */
  combatant1?:
    | BattleTrainer.combatant1$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleTrainer.combatant1<_$Context>>
  /**
   * The second combatant in this trainer battle.
   *
   * ```graphql
   * combatant2: CombatantSinglePokemon
   *
   * type CombatantSinglePokemon {
   * pokemon: Pokemon
   * trainer: Trainer
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$CombatantSinglePokemon} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleTrainer} |
   * | **Path** | `BattleTrainer.combatant2` |
   * | **Nullability** | Optional |
   */
  combatant2?:
    | BattleTrainer.combatant2$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleTrainer.combatant2<_$Context>>
  /**
   * The date when this battle took place, stored as a Unix timestamp.
   *
   * ```graphql
   * date: Float
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Float} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleTrainer} |
   * | **Path** | `BattleTrainer.date` |
   * | **Nullability** | Optional |
   */
  date?:
    | BattleTrainer.date$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleTrainer.date<_$Context>>
  /**
   * The unique identifier for this battle.
   *
   * ```graphql
   * id: ID
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleTrainer} |
   * | **Path** | `BattleTrainer.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | BattleTrainer.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleTrainer.id<_$Context>>
  /**
   * The trainer who won this battle.
   *
   * ```graphql
   * winner: Trainer
   *
   * type Trainer implements Being {
   * class: TrainerClass
   * fans: [Patron!]
   * id: ID
   * name: String
   * pokemon: [Pokemon!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleTrainer} |
   * | **Path** | `BattleTrainer.winner` |
   * | **Nullability** | Optional |
   */
  winner?:
    | BattleTrainer.winner$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleTrainer.winner<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | BattleTrainer$FragmentInline<_$Context>
    | BattleTrainer$FragmentInline<_$Context>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface BattleTrainer$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends BattleTrainer<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace BattleTrainer {
  export type combatant1<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = combatant1$SelectionSet<_$Context>

  export interface combatant1$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$CombatantSinglePokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatant1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatant1$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    combatant1$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type combatant2<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = combatant2$SelectionSet<_$Context>

  export interface combatant2$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$CombatantSinglePokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatant2` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatant2$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    combatant2$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type date<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>

  export interface date$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type winner<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = winner$SelectionSet<_$Context>

  export interface winner$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `winner` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type winner$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    winner$SelectionSet<_$Context>
  >
}

//                                             BattleWild
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * A battle between a trainer and wild Pokemon.
 */
export interface BattleWild<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * The date when this battle took place, stored as a Unix timestamp.
   *
   * ```graphql
   * date: Float
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Float} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.date` |
   * | **Nullability** | Optional |
   */
  date?:
    | BattleWild.date$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleWild.date<_$Context>>
  /**
   * The unique identifier for this battle.
   *
   * ```graphql
   * id: ID
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | BattleWild.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleWild.id<_$Context>>
  /**
   * The trainer's Pokemon that participated in this battle.
   *
   * ```graphql
   * pokemon: Pokemon
   *
   * type Pokemon implements Being {
   * attack: Int!
   * birthday: Date!
   * defense: Int!
   * hp: Int!
   * id: ID!
   * name: String!
   * trainer: Trainer
   * type: PokemonType!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Pokemon} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.pokemon` |
   * | **Nullability** | Optional |
   */
  pokemon?:
    | BattleWild.pokemon$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleWild.pokemon<_$Context>>
  /**
   * The outcome of this wild Pokemon battle.
   *
   * ```graphql
   * result: BattleWildResult
   *
   * enum BattleWildResult {
   * pokemonsCaptured
   * pokemonsDefeated
   * trainerDefeated
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$BattleWildResult} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.result` |
   * | **Nullability** | Optional |
   */
  result?:
    | BattleWild.result$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleWild.result<_$Context>>
  /**
   * The trainer who engaged in this wild battle.
   *
   * ```graphql
   * trainer: Trainer
   *
   * type Trainer implements Being {
   * class: TrainerClass
   * fans: [Patron!]
   * id: ID
   * name: String
   * pokemon: [Pokemon!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.trainer` |
   * | **Nullability** | Optional |
   */
  trainer?:
    | BattleWild.trainer$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleWild.trainer<_$Context>>
  /**
   * The wild Pokemon encountered in this battle.
   *
   * ```graphql
   * wildPokemons: [Pokemon!]
   *
   * type Pokemon implements Being {
   * attack: Int!
   * birthday: Date!
   * defense: Int!
   * hp: Int!
   * id: ID!
   * name: String!
   * trainer: Trainer
   * type: PokemonType!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.wildPokemons` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  wildPokemons?:
    | BattleWild.wildPokemons$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleWild.wildPokemons<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | BattleWild$FragmentInline<_$Context>
    | BattleWild$FragmentInline<_$Context>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface BattleWild$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends BattleWild<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace BattleWild {
  export type date<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>

  export interface date$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = pokemon$SelectionSet<_$Context>

  export interface pokemon$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    pokemon$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type result<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | result$SelectionSet<_$Context>

  export interface result$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `result` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type result$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | result$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = trainer$SelectionSet<_$Context>

  export interface trainer$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    trainer$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type wildPokemons<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = wildPokemons$SelectionSet<_$Context>

  export interface wildPokemons$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `wildPokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type wildPokemons$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    wildPokemons$SelectionSet<_$Context>
  >
}

//                                       CombatantMultiPokemon
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * A combatant in a battle royale with multiple Pokemon.
 */
export interface CombatantMultiPokemon<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * The team of Pokemon used by this combatant.
   *
   * ```graphql
   * pokemons: [Pokemon!]
   *
   * type Pokemon implements Being {
   * attack: Int!
   * birthday: Date!
   * defense: Int!
   * hp: Int!
   * id: ID!
   * name: String!
   * trainer: Trainer
   * type: PokemonType!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$CombatantMultiPokemon} |
   * | **Path** | `CombatantMultiPokemon.pokemons` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  pokemons?:
    | CombatantMultiPokemon.pokemons$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<CombatantMultiPokemon.pokemons<_$Context>>
  /**
   * The trainer commanding this team of Pokemon.
   *
   * ```graphql
   * trainer: Trainer
   *
   * type Trainer implements Being {
   * class: TrainerClass
   * fans: [Patron!]
   * id: ID
   * name: String
   * pokemon: [Pokemon!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$CombatantMultiPokemon} |
   * | **Path** | `CombatantMultiPokemon.trainer` |
   * | **Nullability** | Optional |
   */
  trainer?:
    | CombatantMultiPokemon.trainer$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<CombatantMultiPokemon.trainer<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | CombatantMultiPokemon$FragmentInline<_$Context>
    | CombatantMultiPokemon$FragmentInline<_$Context>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface CombatantMultiPokemon$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends
  CombatantMultiPokemon<_$Context>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}

// ----------------------------------------| Fields |

export namespace CombatantMultiPokemon {
  export type pokemons<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = pokemons$SelectionSet<_$Context>

  export interface pokemons$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemons$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    pokemons$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = trainer$SelectionSet<_$Context>

  export interface trainer$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    trainer$SelectionSet<_$Context>
  >
}

//                                       CombatantSinglePokemon
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * A combatant in a one-on-one battle with a single Pokemon.
 */
export interface CombatantSinglePokemon<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * The Pokemon used by this combatant.
   *
   * ```graphql
   * pokemon: Pokemon
   *
   * type Pokemon implements Being {
   * attack: Int!
   * birthday: Date!
   * defense: Int!
   * hp: Int!
   * id: ID!
   * name: String!
   * trainer: Trainer
   * type: PokemonType!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Pokemon} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$CombatantSinglePokemon} |
   * | **Path** | `CombatantSinglePokemon.pokemon` |
   * | **Nullability** | Optional |
   */
  pokemon?:
    | CombatantSinglePokemon.pokemon$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<CombatantSinglePokemon.pokemon<_$Context>>
  /**
   * The trainer commanding this Pokemon.
   *
   * ```graphql
   * trainer: Trainer
   *
   * type Trainer implements Being {
   * class: TrainerClass
   * fans: [Patron!]
   * id: ID
   * name: String
   * pokemon: [Pokemon!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$CombatantSinglePokemon} |
   * | **Path** | `CombatantSinglePokemon.trainer` |
   * | **Nullability** | Optional |
   */
  trainer?:
    | CombatantSinglePokemon.trainer$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<CombatantSinglePokemon.trainer<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | CombatantSinglePokemon$FragmentInline<_$Context>
    | CombatantSinglePokemon$FragmentInline<_$Context>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface CombatantSinglePokemon$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends
  CombatantSinglePokemon<_$Context>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}

// ----------------------------------------| Fields |

export namespace CombatantSinglePokemon {
  export type pokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = pokemon$SelectionSet<_$Context>

  export interface pokemon$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    pokemon$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = trainer$SelectionSet<_$Context>

  export interface trainer$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    trainer$SelectionSet<_$Context>
  >
}

//                                               Patron
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * A patron who is a fan of a particular trainer.
 */
export interface Patron<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * The unique identifier for this patron.
   *
   * ```graphql
   * id: ID
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Patron} |
   * | **Path** | `Patron.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | Patron.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Patron.id<_$Context>>
  /**
   * The amount of money this patron has.
   *
   * ```graphql
   * money: Int
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Patron} |
   * | **Path** | `Patron.money` |
   * | **Nullability** | Optional |
   */
  money?:
    | Patron.money$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Patron.money<_$Context>>
  /**
   * The name of this patron.
   *
   * ```graphql
   * name: String
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Patron} |
   * | **Path** | `Patron.name` |
   * | **Nullability** | Optional |
   */
  name?:
    | Patron.name$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Patron.name<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Patron$FragmentInline<_$Context>
    | Patron$FragmentInline<_$Context>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface Patron$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends Patron<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Patron {
  export type id<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type money<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | money$SelectionSet<_$Context>

  export interface money$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `money` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type money$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | money$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>

  export interface name$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>
  >
}

//                                              Pokemon
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * A Pokemon with stats, type, and trainer information.
 */
export interface Pokemon<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * The attack power of this Pokemon.
   *
   * ```graphql
   * attack: Int!
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.attack` |
   * | **Nullability** | Required |
   */
  attack?:
    | Pokemon.attack$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.attack<_$Context>>
  /**
   * The date this Pokemon was born or caught.
   *
   * ```graphql
   * birthday: Date!
   *
   * scalar Date
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom} ↗ |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.birthday` |
   * | **Nullability** | Required |
   */
  birthday?:
    | Pokemon.birthday$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.birthday<_$Context>>
  /**
   * The defense power of this Pokemon.
   *
   * ```graphql
   * defense: Int!
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.defense` |
   * | **Nullability** | Required |
   */
  defense?:
    | Pokemon.defense$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.defense<_$Context>>
  /**
   * The health points (HP) of this Pokemon.
   *
   * ```graphql
   * hp: Int!
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.hp` |
   * | **Nullability** | Required |
   */
  hp?:
    | Pokemon.hp$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.hp<_$Context>>
  /**
   * The unique identifier for this Pokemon.
   *
   * ```graphql
   * id: ID!
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.id` |
   * | **Nullability** | Required |
   */
  id?:
    | Pokemon.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.id<_$Context>>
  /**
   * The name of this Pokemon.
   *
   * ```graphql
   * name: String!
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.name` |
   * | **Nullability** | Required |
   */
  name?:
    | Pokemon.name$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.name<_$Context>>
  /**
   * The trainer who owns this Pokemon, if any.
   *
   * ```graphql
   * trainer: Trainer
   *
   * type Trainer implements Being {
   * class: TrainerClass
   * fans: [Patron!]
   * id: ID
   * name: String
   * pokemon: [Pokemon!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.trainer` |
   * | **Nullability** | Optional |
   */
  trainer?:
    | Pokemon.trainer$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.trainer<_$Context>>
  /**
   * The elemental type of this Pokemon.
   *
   * ```graphql
   * type: PokemonType!
   *
   * enum PokemonType {
   * bug
   * electric
   * fire
   * grass
   * water
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$PokemonType}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum} ↗ |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.type` |
   * | **Nullability** | Required |
   */
  type?:
    | Pokemon.type$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.type<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Pokemon$FragmentInline<_$Context>
    | Pokemon$FragmentInline<_$Context>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface Pokemon$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends Pokemon<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Pokemon {
  export type attack<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | attack$SelectionSet<_$Context>

  export interface attack$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `attack` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type attack$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | attack$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type birthday<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | birthday$SelectionSet<_$Context>

  export interface birthday$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `birthday` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type birthday$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | birthday$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type defense<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | defense$SelectionSet<_$Context>

  export interface defense$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `defense` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type defense$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | defense$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type hp<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | hp$SelectionSet<_$Context>

  export interface hp$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `hp` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type hp$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | hp$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>

  export interface name$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = trainer$SelectionSet<_$Context>

  export interface trainer$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    trainer$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type type<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | type$SelectionSet<_$Context>

  export interface type$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `type` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type type$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | type$SelectionSet<_$Context>
  >
}

//                                              Trainer
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * A Pokemon trainer who catches and battles with Pokemon.
 */
export interface Trainer<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * The class or specialty of this trainer.
   *
   * ```graphql
   * class: TrainerClass
   *
   * enum TrainerClass {
   * bugCatcher
   * camper
   * picnicker
   * psychic
   * psychicMedium
   * psychicYoungster
   * sailor
   * superNerd
   * tamer
   * teamRocketGrunt
   * triathlete
   * youngster
   * youth
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$TrainerClass} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum} ↗ |
   * | **Parent** | {@link $NamedTypes.$Trainer} |
   * | **Path** | `Trainer.class` |
   * | **Nullability** | Optional |
   */
  class?:
    | Trainer.$class$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Trainer.$class<_$Context>>
  /**
   * The patrons who are fans of this trainer.
   *
   * ```graphql
   * fans: [Patron!]
   *
   * type Patron implements Being {
   * id: ID
   * money: Int
   * name: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Patron}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Trainer} |
   * | **Path** | `Trainer.fans` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  fans?:
    | Trainer.fans$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Trainer.fans<_$Context>>
  /**
   * The unique identifier for this trainer.
   *
   * ```graphql
   * id: ID
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Trainer} |
   * | **Path** | `Trainer.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | Trainer.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Trainer.id<_$Context>>
  /**
   * The name of this trainer.
   *
   * ```graphql
   * name: String
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Trainer} |
   * | **Path** | `Trainer.name` |
   * | **Nullability** | Optional |
   */
  name?:
    | Trainer.name$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Trainer.name<_$Context>>
  /**
   * The Pokemon owned by this trainer.
   *
   * ```graphql
   * pokemon: [Pokemon!]
   *
   * type Pokemon implements Being {
   * attack: Int!
   * birthday: Date!
   * defense: Int!
   * hp: Int!
   * id: ID!
   * name: String!
   * trainer: Trainer
   * type: PokemonType!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Trainer} |
   * | **Path** | `Trainer.pokemon` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  pokemon?:
    | Trainer.pokemon$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Trainer.pokemon<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Trainer$FragmentInline<_$Context>
    | Trainer$FragmentInline<_$Context>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface Trainer$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends Trainer<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Trainer {
  export type $class<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $class$SelectionSet<_$Context>

  export interface $class$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$class` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $class$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $class$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type fans<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = fans$SelectionSet<_$Context>

  export interface fans$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Patron<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `fans` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type fans$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    fans$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>

  export interface name$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = pokemon$SelectionSet<_$Context>

  export interface pokemon$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    pokemon$SelectionSet<_$Context>
  >
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

/**
 * Represents any kind of battle that can occur in the Pokemon world.
 */
export interface Battle<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * A meta field. Is the name of the type being selected. Since this is a union type and thus polymorphic,
   * the name is one of the member type names, whichever is ultimately returned at runtime.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >

  /**
   * Inline fragment selection for {@link $Schema.BattleRoyale} member.
   *
   * When the runtime value is of type {@link $Schema.BattleRoyale}, this selection set is applied, allowing you to select fields specific to this member type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.BattleRoyale} |
   * | **Kind** | Union Member |
   * | **Parent** | {@link $Schema.Battle} |
   * | **Path** | `Battle -> BattleRoyale` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types} ↗
   *
   * @example
   * ```ts
   * query.battles({
   * __typename: true,
   * ___on_BattleRoyale: {
   * // ... BattleRoyale-specific fields
   * }
   * })
   * ```
   */
  ___on_BattleRoyale?: BattleRoyale<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.BattleTrainer} member.
   *
   * When the runtime value is of type {@link $Schema.BattleTrainer}, this selection set is applied, allowing you to select fields specific to this member type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.BattleTrainer} |
   * | **Kind** | Union Member |
   * | **Parent** | {@link $Schema.Battle} |
   * | **Path** | `Battle -> BattleTrainer` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types} ↗
   *
   * @example
   * ```ts
   * query.battles({
   * __typename: true,
   * ___on_BattleTrainer: {
   * // ... BattleTrainer-specific fields
   * }
   * })
   * ```
   */
  ___on_BattleTrainer?: BattleTrainer<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.BattleWild} member.
   *
   * When the runtime value is of type {@link $Schema.BattleWild}, this selection set is applied, allowing you to select fields specific to this member type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.BattleWild} |
   * | **Kind** | Union Member |
   * | **Parent** | {@link $Schema.Battle} |
   * | **Path** | `Battle -> BattleWild` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types} ↗
   *
   * @example
   * ```ts
   * query.battles({
   * __typename: true,
   * ___on_BattleWild: {
   * // ... BattleWild-specific fields
   * }
   * })
   * ```
   */
  ___on_BattleWild?: BattleWild<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Battle$FragmentInline<_$Context>
    | Battle$FragmentInline<_$Context>[]
}
export interface Battle$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends Battle<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
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

/**
 * A being in the Pokemon world - either a Pokemon, Trainer, or Patron.
 */
export interface Being<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  id?: Being.id<_$Context>
  name?: Being.name<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.Patron} implementor.
   *
   * When the runtime value is of type {@link $Schema.Patron}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Patron} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.Being} |
   * | **Path** | `Being -> Patron` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.beings({
   * id: true,
   * name: true,
   * ___on_Patron: {
   * // ... Patron-specific fields
   * }
   * })
   * ```
   */
  ___on_Patron?: Patron<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.Pokemon} implementor.
   *
   * When the runtime value is of type {@link $Schema.Pokemon}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Pokemon} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.Being} |
   * | **Path** | `Being -> Pokemon` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.beings({
   * id: true,
   * name: true,
   * ___on_Pokemon: {
   * // ... Pokemon-specific fields
   * }
   * })
   * ```
   */
  ___on_Pokemon?: Pokemon<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.Trainer} implementor.
   *
   * When the runtime value is of type {@link $Schema.Trainer}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Trainer} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.Being} |
   * | **Path** | `Being -> Trainer` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.beings({
   * id: true,
   * name: true,
   * ___on_Trainer: {
   * // ... Trainer-specific fields
   * }
   * })
   * ```
   */
  ___on_Trainer?: Trainer<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Being$FragmentInline<_$Context>
    | Being$FragmentInline<_$Context>[]

  /**
   * A meta field. Is the name of the type being selected. Since this is a interface type and thus polymorphic,
   * the name is one of the implementor type names, whichever is ultimately returned at runtime.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface Being$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends Being<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace Being {
  export type id<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  export type name<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>

  export interface name$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>
  >
}

import type * as $$Schema from './schema/$.js'

export type Query$Infer<$SelectionSet extends object> = $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
  $SelectionSet,
  $$Schema.Schema
>
export type Query$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system

export type Mutation$Infer<$SelectionSet extends object> = $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
  $SelectionSet,
  $$Schema.Schema
>
export type Mutation$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system

/**
 * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
 *     name clashing between the field name and the object name.
 *
 *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
 *     would end up with an error of `export interface Foo extends Foo ...`
 */

export namespace $NamedTypes {
  export type $Query<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = Query<_$Context>
  export type $Mutation<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = Mutation<_$Context>
  export type $BattleWildResult = BattleWildResult
  export type $PokemonType = PokemonType
  export type $TrainerClass = TrainerClass
  export type $DateFilter<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = DateFilter<_$Context>
  export type $PokemonFilter<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = PokemonFilter<_$Context>
  export type $StringFilter<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = StringFilter<_$Context>
  export type $BattleRoyale<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = BattleRoyale<_$Context>
  export type $BattleTrainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = BattleTrainer<_$Context>
  export type $BattleWild<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = BattleWild<_$Context>
  export type $CombatantMultiPokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = CombatantMultiPokemon<_$Context>
  export type $CombatantSinglePokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = CombatantSinglePokemon<_$Context>
  export type $Patron<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = Patron<_$Context>
  export type $Pokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = Pokemon<_$Context>
  export type $Trainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = Trainer<_$Context>
  export type $Battle<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = Battle<_$Context>
  export type $Being<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = Being<_$Context>
}
