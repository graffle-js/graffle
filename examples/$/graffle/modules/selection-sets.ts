import type * as $$Utilities from 'graffle/utilities-for-generated'

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
 * Root query type for fetching Pokemon data.
 */
export interface Query<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> {
  /**
   * Select the `battles` field on the `Query` object. Its type is `Battle` (a `Union` kind of type).
   */
  battles?:
    | Query.battles$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.battles<_$Context>>
  /**
   * Select the `beings` field on the `Query` object. Its type is `Being` (a `Interface` kind of type).
   */
  beings?:
    | Query.beings$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.beings<_$Context>>
  /**
   * Select the `pokemonByName` field on the `Query` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemonByName?:
    | Query.pokemonByName<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.pokemonByName<_$Context>>
  /**
   * Select the `pokemons` field on the `Query` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemons?:
    | Query.pokemons$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.pokemons<_$Context>>
  /**
   * Select the `trainerByName` field on the `Query` object. Its type is `Trainer` (a `OutputObject` kind of type).
   */
  trainerByName?:
    | Query.trainerByName<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.trainerByName<_$Context>>
  /**
   * Select the `trainers` field on the `Query` object. Its type is `Trainer` (a `OutputObject` kind of type).
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Query<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Query {
  export type battles<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = battles$SelectionSet<_$Context>

  export interface battles$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Battle<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `battles` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type battles$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    battles$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type beings<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = beings$SelectionSet<_$Context>

  export interface beings$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Being<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `beings` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type beings$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    beings$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemonByName<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = pokemonByName$SelectionSet<_$Context>

  export interface pokemonByName$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {
    /**
     * Arguments for `pokemonByName` field. All arguments are required so you must include this.
     */
    $: pokemonByName$Arguments<_$Context>
  }

  export interface pokemonByName$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    /**
     * The name of the Pokemon to search for.
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
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    pokemonByName$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemons<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = pokemons$SelectionSet<_$Context>

  export interface pokemons$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {
    /**
     * Arguments for `pokemons` field. No arguments are required so you may omit this.
     */
    $?: pokemons$Arguments<_$Context>
  }

  export interface pokemons$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    /**
     * Optional filter criteria for Pokemon.
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
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    pokemons$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainerByName<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = trainerByName$SelectionSet<_$Context>

  export interface trainerByName$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {
    /**
     * Arguments for `trainerByName` field. All arguments are required so you must include this.
     */
    $: trainerByName$Arguments<_$Context>
  }

  export interface trainerByName$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    /**
     * The name of the trainer to search for.
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
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    trainerByName$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainers<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = trainers$SelectionSet<_$Context>

  export interface trainers$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainers` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainers$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    trainers$SelectionSet<_$Context>
  >
}

//                                              Mutation
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * Root mutation type for modifying Pokemon data.
 */
export interface Mutation<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> {
  /**
   * Select the `addPokemon` field on the `Mutation` object. Its type is `Pokemon` (a `OutputObject` kind of type).
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Mutation<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Mutation {
  export type addPokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = addPokemon$SelectionSet<_$Context>

  export interface addPokemon$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {
    /**
     * Arguments for `addPokemon` field. Some (2/5) arguments are required so you must include this.
     */
    $: addPokemon$Arguments<_$Context>
  }

  export interface addPokemon$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    /**
     * The attack power of the new Pokemon.
     */
    attack?: $$Utilities.DocumentBuilderKit.Var.Maybe<number | null | undefined>
    /**
     * The defense power of the new Pokemon.
     */
    defense?: $$Utilities.DocumentBuilderKit.Var.Maybe<number | null | undefined>
    /**
     * The health points of the new Pokemon.
     */
    hp?: $$Utilities.DocumentBuilderKit.Var.Maybe<number | null | undefined>
    /**
     * The name of the new Pokemon.
     */
    name: $$Utilities.DocumentBuilderKit.Var.Maybe<string>
    /**
     * The elemental type of the new Pokemon.
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
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `combatants` field on the `BattleRoyale` object. Its type is `CombatantMultiPokemon` (a `OutputObject` kind of type).
   */
  combatants?:
    | BattleRoyale.combatants$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleRoyale.combatants<_$Context>>
  /**
   * Select the `date` field on the `BattleRoyale` object. Its type is `Float` (a `ScalarStandard` kind of type).
   */
  date?:
    | BattleRoyale.date$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleRoyale.date<_$Context>>
  /**
   * Select the `id` field on the `BattleRoyale` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | BattleRoyale.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleRoyale.id<_$Context>>
  /**
   * Select the `winner` field on the `BattleRoyale` object. Its type is `Trainer` (a `OutputObject` kind of type).
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends BattleRoyale<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace BattleRoyale {
  export type combatants<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = combatants$SelectionSet<_$Context>

  export interface combatants$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$CombatantMultiPokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatants` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatants$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    combatants$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type date<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>

  export interface date$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type winner<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = winner$SelectionSet<_$Context>

  export interface winner$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `winner` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type winner$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `combatant1` field on the `BattleTrainer` object. Its type is `CombatantSinglePokemon` (a `OutputObject` kind of type).
   */
  combatant1?:
    | BattleTrainer.combatant1$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleTrainer.combatant1<_$Context>>
  /**
   * Select the `combatant2` field on the `BattleTrainer` object. Its type is `CombatantSinglePokemon` (a `OutputObject` kind of type).
   */
  combatant2?:
    | BattleTrainer.combatant2$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleTrainer.combatant2<_$Context>>
  /**
   * Select the `date` field on the `BattleTrainer` object. Its type is `Float` (a `ScalarStandard` kind of type).
   */
  date?:
    | BattleTrainer.date$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleTrainer.date<_$Context>>
  /**
   * Select the `id` field on the `BattleTrainer` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | BattleTrainer.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleTrainer.id<_$Context>>
  /**
   * Select the `winner` field on the `BattleTrainer` object. Its type is `Trainer` (a `OutputObject` kind of type).
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends BattleTrainer<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace BattleTrainer {
  export type combatant1<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = combatant1$SelectionSet<_$Context>

  export interface combatant1$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$CombatantSinglePokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatant1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatant1$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    combatant1$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type combatant2<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = combatant2$SelectionSet<_$Context>

  export interface combatant2$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$CombatantSinglePokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatant2` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatant2$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    combatant2$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type date<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>

  export interface date$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type winner<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = winner$SelectionSet<_$Context>

  export interface winner$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `winner` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type winner$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `date` field on the `BattleWild` object. Its type is `Float` (a `ScalarStandard` kind of type).
   */
  date?:
    | BattleWild.date$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleWild.date<_$Context>>
  /**
   * Select the `id` field on the `BattleWild` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | BattleWild.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleWild.id<_$Context>>
  /**
   * Select the `pokemon` field on the `BattleWild` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemon?:
    | BattleWild.pokemon$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleWild.pokemon<_$Context>>
  /**
   * Select the `result` field on the `BattleWild` object. Its type is `BattleWildResult` (a `Enum` kind of type).
   */
  result?:
    | BattleWild.result$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleWild.result<_$Context>>
  /**
   * Select the `trainer` field on the `BattleWild` object. Its type is `Trainer` (a `OutputObject` kind of type).
   */
  trainer?:
    | BattleWild.trainer$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<BattleWild.trainer<_$Context>>
  /**
   * Select the `wildPokemons` field on the `BattleWild` object. Its type is `Pokemon` (a `OutputObject` kind of type).
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends BattleWild<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace BattleWild {
  export type date<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>

  export interface date$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = pokemon$SelectionSet<_$Context>

  export interface pokemon$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    pokemon$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type result<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | result$SelectionSet<_$Context>

  export interface result$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `result` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type result$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | result$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = trainer$SelectionSet<_$Context>

  export interface trainer$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    trainer$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type wildPokemons<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = wildPokemons$SelectionSet<_$Context>

  export interface wildPokemons$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `wildPokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type wildPokemons$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `pokemons` field on the `CombatantMultiPokemon` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemons?:
    | CombatantMultiPokemon.pokemons$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<CombatantMultiPokemon.pokemons<_$Context>>
  /**
   * Select the `trainer` field on the `CombatantMultiPokemon` object. Its type is `Trainer` (a `OutputObject` kind of type).
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends
  CombatantMultiPokemon<_$Context>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}

// ----------------------------------------| Fields |

export namespace CombatantMultiPokemon {
  export type pokemons<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = pokemons$SelectionSet<_$Context>

  export interface pokemons$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemons$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    pokemons$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = trainer$SelectionSet<_$Context>

  export interface trainer$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `pokemon` field on the `CombatantSinglePokemon` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemon?:
    | CombatantSinglePokemon.pokemon$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<CombatantSinglePokemon.pokemon<_$Context>>
  /**
   * Select the `trainer` field on the `CombatantSinglePokemon` object. Its type is `Trainer` (a `OutputObject` kind of type).
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends
  CombatantSinglePokemon<_$Context>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}

// ----------------------------------------| Fields |

export namespace CombatantSinglePokemon {
  export type pokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = pokemon$SelectionSet<_$Context>

  export interface pokemon$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    pokemon$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = trainer$SelectionSet<_$Context>

  export interface trainer$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `id` field on the `Patron` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Patron.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Patron.id<_$Context>>
  /**
   * Select the `money` field on the `Patron` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  money?:
    | Patron.money$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Patron.money<_$Context>>
  /**
   * Select the `name` field on the `Patron` object. Its type is `String` (a `ScalarStandard` kind of type).
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Patron<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Patron {
  export type id<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type money<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | money$SelectionSet<_$Context>

  export interface money$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `money` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type money$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | money$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>

  export interface name$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `attack` field on the `Pokemon` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  attack?:
    | Pokemon.attack$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.attack<_$Context>>
  /**
   * Select the `birthday` field on the `Pokemon` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  birthday?:
    | Pokemon.birthday$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.birthday<_$Context>>
  /**
   * Select the `defense` field on the `Pokemon` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  defense?:
    | Pokemon.defense$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.defense<_$Context>>
  /**
   * Select the `hp` field on the `Pokemon` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  hp?:
    | Pokemon.hp$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.hp<_$Context>>
  /**
   * Select the `id` field on the `Pokemon` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Pokemon.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.id<_$Context>>
  /**
   * Select the `name` field on the `Pokemon` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  name?:
    | Pokemon.name$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.name<_$Context>>
  /**
   * Select the `trainer` field on the `Pokemon` object. Its type is `Trainer` (a `OutputObject` kind of type).
   */
  trainer?:
    | Pokemon.trainer$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Pokemon.trainer<_$Context>>
  /**
   * Select the `type` field on the `Pokemon` object. Its type is `PokemonType` (a `Enum` kind of type).
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Pokemon<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Pokemon {
  export type attack<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | attack$SelectionSet<_$Context>

  export interface attack$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `attack` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type attack$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | attack$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type birthday<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | birthday$SelectionSet<_$Context>

  export interface birthday$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `birthday` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type birthday$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | birthday$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type defense<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | defense$SelectionSet<_$Context>

  export interface defense$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `defense` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type defense$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | defense$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type hp<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | hp$SelectionSet<_$Context>

  export interface hp$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `hp` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type hp$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | hp$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>

  export interface name$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = trainer$SelectionSet<_$Context>

  export interface trainer$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Trainer<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    trainer$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type type<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | type$SelectionSet<_$Context>

  export interface type$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `type` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type type$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `class` field on the `Trainer` object. Its type is `TrainerClass` (a `Enum` kind of type).
   */
  class?:
    | Trainer.$class$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Trainer.$class<_$Context>>
  /**
   * Select the `fans` field on the `Trainer` object. Its type is `Patron` (a `OutputObject` kind of type).
   */
  fans?:
    | Trainer.fans$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Trainer.fans<_$Context>>
  /**
   * Select the `id` field on the `Trainer` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Trainer.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Trainer.id<_$Context>>
  /**
   * Select the `name` field on the `Trainer` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  name?:
    | Trainer.name$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Trainer.name<_$Context>>
  /**
   * Select the `pokemon` field on the `Trainer` object. Its type is `Pokemon` (a `OutputObject` kind of type).
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Trainer<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Trainer {
  export type $class<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $class$SelectionSet<_$Context>

  export interface $class$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$class` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $class$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $class$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type fans<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = fans$SelectionSet<_$Context>

  export interface fans$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Patron<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `fans` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type fans$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    fans$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>

  export interface name$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = pokemon$SelectionSet<_$Context>

  export interface pokemon$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Pokemon<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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

  ___on_BattleRoyale?: BattleRoyale<_$Context>
  ___on_BattleTrainer?: BattleTrainer<_$Context>
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  id?: Being.id<_$Context>
  name?: Being.name<_$Context>
  ___on_Patron?: Patron<_$Context>
  ___on_Pokemon?: Pokemon<_$Context>
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Being<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace Being {
  export type id<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  export type name<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Context>

  export interface name$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
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
export type Query$Variables<$SelectionSet> = any // Temporarily any - will be replaced with new analysis system
export type Mutation$Infer<$SelectionSet extends object> = $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
  $SelectionSet,
  $$Schema.Schema
>
export type Mutation$Variables<$SelectionSet> = any // Temporarily any - will be replaced with new analysis system
/**
 * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
 *     name clashing between the field name and the object name.
 *
 *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
 *     would end up with an error of `export interface Foo extends Foo ...`
 */
export namespace $NamedTypes {
  export type $Query<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Query<_$Context>
  export type $Mutation<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Mutation<_$Context>
  export type $BattleWildResult = BattleWildResult
  export type $PokemonType = PokemonType
  export type $TrainerClass = TrainerClass
  export type $DateFilter<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = DateFilter<_$Context>
  export type $PokemonFilter<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = PokemonFilter<_$Context>
  export type $StringFilter<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = StringFilter<_$Context>
  export type $BattleRoyale<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = BattleRoyale<_$Context>
  export type $BattleTrainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = BattleTrainer<_$Context>
  export type $BattleWild<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = BattleWild<_$Context>
  export type $CombatantMultiPokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = CombatantMultiPokemon<_$Context>
  export type $CombatantSinglePokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = CombatantSinglePokemon<_$Context>
  export type $Patron<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Patron<_$Context>
  export type $Pokemon<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Pokemon<_$Context>
  export type $Trainer<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Trainer<_$Context>
  export type $Battle<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Battle<_$Context>
  export type $Being<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Being<_$Context>
}
