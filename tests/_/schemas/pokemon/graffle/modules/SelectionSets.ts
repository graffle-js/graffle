import type { Select as $Select } from '../../../../../../src/entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'

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
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  query?: Record<string, Query<_$Scalars>>
  mutation?: Record<string, Mutation<_$Scalars>>
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

export interface Query<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  /**
   * Select the `battles` field on the `Query` object. Its type is `Battle` (a `Union` kind of type).
   */
  battles?: Query.battles$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.battles<_$Scalars>>
  /**
   * Select the `beings` field on the `Query` object. Its type is `Being` (a `Interface` kind of type).
   */
  beings?: Query.beings$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.beings<_$Scalars>>
  /**
   * Select the `pokemon` field on the `Query` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemon?: Query.pokemon$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.pokemon<_$Scalars>>
  /**
   * Select the `pokemonByName` field on the `Query` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemonByName?: Query.pokemonByName<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.pokemonByName<_$Scalars>>
  /**
   * Select the `pokemons` field on the `Query` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemons?: Query.pokemons$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.pokemons<_$Scalars>>
  /**
   * Select the `trainerByName` field on the `Query` object. Its type is `Trainer` (a `OutputObject` kind of type).
   */
  trainerByName?: Query.trainerByName<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.trainerByName<_$Scalars>>
  /**
   * Select the `trainers` field on the `Query` object. Its type is `Trainer` (a `OutputObject` kind of type).
   */
  trainers?: Query.trainers$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.trainers<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Query$FragmentInline<_$Scalars>
    | Query$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Query$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Query<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Query {
  export type battles<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    battles$SelectionSet<_$Scalars>

  export interface battles$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Battle<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `battles` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type battles$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    battles$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type beings<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    beings$SelectionSet<_$Scalars>

  export interface beings$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Being<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `beings` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type beings$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    beings$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemon<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    pokemon$SelectionSet<_$Scalars>

  export interface pokemon$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Pokemon<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    pokemon$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemonByName<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = pokemonByName$SelectionSet<_$Scalars>

  export interface pokemonByName$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Pokemon<_$Scalars> {
    /**
     * Arguments for `pokemonByName` field. All arguments are required so you must include this.
     */
    $: pokemonByName$Arguments<_$Scalars>
  }

  export interface pokemonByName$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    name: string
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemonByName` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemonByName$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    pokemonByName$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemons<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = pokemons$SelectionSet<_$Scalars>

  export interface pokemons$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Pokemon<_$Scalars> {
    /**
     * Arguments for `pokemons` field. No arguments are required so you may omit this.
     */
    $?: pokemons$Arguments<_$Scalars>
  }

  export interface pokemons$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    filter?: $NamedTypes.$PokemonFilter<_$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemons$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    pokemons$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainerByName<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = trainerByName$SelectionSet<_$Scalars>

  export interface trainerByName$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Trainer<_$Scalars> {
    /**
     * Arguments for `trainerByName` field. All arguments are required so you must include this.
     */
    $: trainerByName$Arguments<_$Scalars>
  }

  export interface trainerByName$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    name: string
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainerByName` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainerByName$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    trainerByName$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainers<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = trainers$SelectionSet<_$Scalars>

  export interface trainers$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Trainer<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainers` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainers$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    trainers$SelectionSet<_$Scalars>
  >
}

//                                              Mutation
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Mutation<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  /**
   * Select the `addPokemon` field on the `Mutation` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  addPokemon?: Mutation.addPokemon<_$Scalars> | $Select.SelectAlias.SelectAlias<Mutation.addPokemon<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Mutation$FragmentInline<_$Scalars>
    | Mutation$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Mutation$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Mutation<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Mutation {
  export type addPokemon<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = addPokemon$SelectionSet<_$Scalars>

  export interface addPokemon$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Pokemon<_$Scalars> {
    /**
     * Arguments for `addPokemon` field. Some (2/5) arguments are required so you must include this.
     */
    $: addPokemon$Arguments<_$Scalars>
  }

  export interface addPokemon$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    attack?: number | undefined | null
    defense?: number | undefined | null
    hp?: number | undefined | null
    name: string
    $type: $NamedTypes.$PokemonType
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `addPokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type addPokemon$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    addPokemon$SelectionSet<_$Scalars>
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

export type BattleWildResult =
  | 'pokemonsCaptured'
  | 'pokemonsDefeated'
  | 'trainerDefeated'

export type PokemonType =
  | 'bug'
  | 'electric'
  | 'fire'
  | 'grass'
  | 'water'

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

export interface DateFilter<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  gte?:
    | $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', _$Scalars>
    >
    | undefined
    | null
  lte?:
    | $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', _$Scalars>
    >
    | undefined
    | null
}

export interface PokemonFilter<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  birthday?: $NamedTypes.$DateFilter<_$Scalars> | undefined | null
  name?: $NamedTypes.$StringFilter<_$Scalars> | undefined | null
}

export interface StringFilter<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  contains?: string | undefined | null
  in?: Array<string | undefined | null> | undefined | null
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

export interface BattleRoyale<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $Select.Bases.ObjectLike {
  /**
   * Select the `combatants` field on the `BattleRoyale` object. Its type is `CombatantMultiPokemon` (a `OutputObject` kind of type).
   */
  combatants?:
    | BattleRoyale.combatants$Expanded<_$Scalars>
    | $Select.SelectAlias.SelectAlias<BattleRoyale.combatants<_$Scalars>>
  /**
   * Select the `date` field on the `BattleRoyale` object. Its type is `Float` (a `ScalarStandard` kind of type).
   */
  date?: BattleRoyale.date$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<BattleRoyale.date<_$Scalars>>
  /**
   * Select the `id` field on the `BattleRoyale` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: BattleRoyale.id$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<BattleRoyale.id<_$Scalars>>
  /**
   * Select the `winner` field on the `BattleRoyale` object. Its type is `Trainer` (a `OutputObject` kind of type).
   */
  winner?: BattleRoyale.winner$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<BattleRoyale.winner<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | BattleRoyale$FragmentInline<_$Scalars>
    | BattleRoyale$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface BattleRoyale$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends BattleRoyale<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace BattleRoyale {
  export type combatants<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = combatants$SelectionSet<_$Scalars>

  export interface combatants$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$CombatantMultiPokemon<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatants` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatants$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    combatants$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type date<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Scalars>

  export interface date$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type winner<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    winner$SelectionSet<_$Scalars>

  export interface winner$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Trainer<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `winner` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type winner$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    winner$SelectionSet<_$Scalars>
  >
}

//                                           BattleTrainer
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface BattleTrainer<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $Select.Bases.ObjectLike {
  /**
   * Select the `combatant1` field on the `BattleTrainer` object. Its type is `CombatantSinglePokemon` (a `OutputObject` kind of type).
   */
  combatant1?:
    | BattleTrainer.combatant1$Expanded<_$Scalars>
    | $Select.SelectAlias.SelectAlias<BattleTrainer.combatant1<_$Scalars>>
  /**
   * Select the `combatant2` field on the `BattleTrainer` object. Its type is `CombatantSinglePokemon` (a `OutputObject` kind of type).
   */
  combatant2?:
    | BattleTrainer.combatant2$Expanded<_$Scalars>
    | $Select.SelectAlias.SelectAlias<BattleTrainer.combatant2<_$Scalars>>
  /**
   * Select the `date` field on the `BattleTrainer` object. Its type is `Float` (a `ScalarStandard` kind of type).
   */
  date?: BattleTrainer.date$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<BattleTrainer.date<_$Scalars>>
  /**
   * Select the `id` field on the `BattleTrainer` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: BattleTrainer.id$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<BattleTrainer.id<_$Scalars>>
  /**
   * Select the `winner` field on the `BattleTrainer` object. Its type is `Trainer` (a `OutputObject` kind of type).
   */
  winner?: BattleTrainer.winner$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<BattleTrainer.winner<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | BattleTrainer$FragmentInline<_$Scalars>
    | BattleTrainer$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface BattleTrainer$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends BattleTrainer<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace BattleTrainer {
  export type combatant1<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = combatant1$SelectionSet<_$Scalars>

  export interface combatant1$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$CombatantSinglePokemon<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatant1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatant1$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    combatant1$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type combatant2<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = combatant2$SelectionSet<_$Scalars>

  export interface combatant2$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$CombatantSinglePokemon<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatant2` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatant2$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    combatant2$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type date<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Scalars>

  export interface date$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type winner<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    winner$SelectionSet<_$Scalars>

  export interface winner$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Trainer<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `winner` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type winner$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    winner$SelectionSet<_$Scalars>
  >
}

//                                             BattleWild
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface BattleWild<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $Select.Bases.ObjectLike {
  /**
   * Select the `date` field on the `BattleWild` object. Its type is `Float` (a `ScalarStandard` kind of type).
   */
  date?: BattleWild.date$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<BattleWild.date<_$Scalars>>
  /**
   * Select the `id` field on the `BattleWild` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: BattleWild.id$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<BattleWild.id<_$Scalars>>
  /**
   * Select the `pokemon` field on the `BattleWild` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemon?: BattleWild.pokemon$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<BattleWild.pokemon<_$Scalars>>
  /**
   * Select the `result` field on the `BattleWild` object. Its type is `BattleWildResult` (a `Enum` kind of type).
   */
  result?: BattleWild.result$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<BattleWild.result<_$Scalars>>
  /**
   * Select the `trainer` field on the `BattleWild` object. Its type is `Trainer` (a `OutputObject` kind of type).
   */
  trainer?: BattleWild.trainer$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<BattleWild.trainer<_$Scalars>>
  /**
   * Select the `wildPokemons` field on the `BattleWild` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  wildPokemons?:
    | BattleWild.wildPokemons$Expanded<_$Scalars>
    | $Select.SelectAlias.SelectAlias<BattleWild.wildPokemons<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | BattleWild$FragmentInline<_$Scalars>
    | BattleWild$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface BattleWild$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends BattleWild<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace BattleWild {
  export type date<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Scalars>

  export interface date$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemon<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    pokemon$SelectionSet<_$Scalars>

  export interface pokemon$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Pokemon<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    pokemon$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type result<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | result$SelectionSet<_$Scalars>

  export interface result$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `result` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type result$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | result$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    trainer$SelectionSet<_$Scalars>

  export interface trainer$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Trainer<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    trainer$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type wildPokemons<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = wildPokemons$SelectionSet<_$Scalars>

  export interface wildPokemons$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Pokemon<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `wildPokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type wildPokemons$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    wildPokemons$SelectionSet<_$Scalars>
  >
}

//                                       CombatantMultiPokemon
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface CombatantMultiPokemon<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $Select.Bases.ObjectLike {
  /**
   * Select the `pokemons` field on the `CombatantMultiPokemon` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemons?:
    | CombatantMultiPokemon.pokemons$Expanded<_$Scalars>
    | $Select.SelectAlias.SelectAlias<CombatantMultiPokemon.pokemons<_$Scalars>>
  /**
   * Select the `trainer` field on the `CombatantMultiPokemon` object. Its type is `Trainer` (a `OutputObject` kind of type).
   */
  trainer?:
    | CombatantMultiPokemon.trainer$Expanded<_$Scalars>
    | $Select.SelectAlias.SelectAlias<CombatantMultiPokemon.trainer<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | CombatantMultiPokemon$FragmentInline<_$Scalars>
    | CombatantMultiPokemon$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface CombatantMultiPokemon$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends CombatantMultiPokemon<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace CombatantMultiPokemon {
  export type pokemons<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = pokemons$SelectionSet<_$Scalars>

  export interface pokemons$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Pokemon<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemons$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    pokemons$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    trainer$SelectionSet<_$Scalars>

  export interface trainer$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Trainer<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    trainer$SelectionSet<_$Scalars>
  >
}

//                                       CombatantSinglePokemon
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface CombatantSinglePokemon<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $Select.Bases.ObjectLike {
  /**
   * Select the `pokemon` field on the `CombatantSinglePokemon` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemon?:
    | CombatantSinglePokemon.pokemon$Expanded<_$Scalars>
    | $Select.SelectAlias.SelectAlias<CombatantSinglePokemon.pokemon<_$Scalars>>
  /**
   * Select the `trainer` field on the `CombatantSinglePokemon` object. Its type is `Trainer` (a `OutputObject` kind of type).
   */
  trainer?:
    | CombatantSinglePokemon.trainer$Expanded<_$Scalars>
    | $Select.SelectAlias.SelectAlias<CombatantSinglePokemon.trainer<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | CombatantSinglePokemon$FragmentInline<_$Scalars>
    | CombatantSinglePokemon$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface CombatantSinglePokemon$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends CombatantSinglePokemon<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace CombatantSinglePokemon {
  export type pokemon<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    pokemon$SelectionSet<_$Scalars>

  export interface pokemon$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Pokemon<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    pokemon$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    trainer$SelectionSet<_$Scalars>

  export interface trainer$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Trainer<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    trainer$SelectionSet<_$Scalars>
  >
}

//                                               Patron
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Patron<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `id` field on the `Patron` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Patron.id$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Patron.id<_$Scalars>>
  /**
   * Select the `money` field on the `Patron` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  money?: Patron.money$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Patron.money<_$Scalars>>
  /**
   * Select the `name` field on the `Patron` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  name?: Patron.name$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Patron.name<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Patron$FragmentInline<_$Scalars>
    | Patron$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Patron$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Patron<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Patron {
  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type money<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | money$SelectionSet<_$Scalars>

  export interface money$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `money` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type money$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | money$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>

  export interface name$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>
  >
}

//                                              Pokemon
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Pokemon<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $Select.Bases.ObjectLike {
  /**
   * Select the `attack` field on the `Pokemon` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  attack?: Pokemon.attack$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.attack<_$Scalars>>
  /**
   * Select the `birthday` field on the `Pokemon` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  birthday?: Pokemon.birthday$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.birthday<_$Scalars>>
  /**
   * Select the `defense` field on the `Pokemon` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  defense?: Pokemon.defense$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.defense<_$Scalars>>
  /**
   * Select the `hp` field on the `Pokemon` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  hp?: Pokemon.hp$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.hp<_$Scalars>>
  /**
   * Select the `id` field on the `Pokemon` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Pokemon.id$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.id<_$Scalars>>
  /**
   * Select the `name` field on the `Pokemon` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  name?: Pokemon.name$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.name<_$Scalars>>
  /**
   * Select the `trainer` field on the `Pokemon` object. Its type is `Trainer` (a `OutputObject` kind of type).
   */
  trainer?: Pokemon.trainer$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.trainer<_$Scalars>>
  /**
   * Select the `type` field on the `Pokemon` object. Its type is `PokemonType` (a `Enum` kind of type).
   */
  type?: Pokemon.type$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.type<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Pokemon$FragmentInline<_$Scalars>
    | Pokemon$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Pokemon$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Pokemon<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Pokemon {
  export type attack<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | attack$SelectionSet<_$Scalars>

  export interface attack$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `attack` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type attack$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | attack$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type birthday<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $Select.Indicator.NoArgsIndicator
    | birthday$SelectionSet<_$Scalars>

  export interface birthday$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `birthday` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type birthday$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | birthday$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type defense<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | defense$SelectionSet<_$Scalars>

  export interface defense$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `defense` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type defense$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | defense$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type hp<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | hp$SelectionSet<_$Scalars>

  export interface hp$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `hp` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type hp$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | hp$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>

  export interface name$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    trainer$SelectionSet<_$Scalars>

  export interface trainer$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Trainer<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    trainer$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type type<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | type$SelectionSet<_$Scalars>

  export interface type$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `type` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type type$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | type$SelectionSet<_$Scalars>
  >
}

//                                              Trainer
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Trainer<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $Select.Bases.ObjectLike {
  /**
   * Select the `class` field on the `Trainer` object. Its type is `TrainerClass` (a `Enum` kind of type).
   */
  class?: Trainer.$class$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Trainer.$class<_$Scalars>>
  /**
   * Select the `fans` field on the `Trainer` object. Its type is `Patron` (a `OutputObject` kind of type).
   */
  fans?: Trainer.fans$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Trainer.fans<_$Scalars>>
  /**
   * Select the `id` field on the `Trainer` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Trainer.id$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Trainer.id<_$Scalars>>
  /**
   * Select the `name` field on the `Trainer` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  name?: Trainer.name$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Trainer.name<_$Scalars>>
  /**
   * Select the `pokemon` field on the `Trainer` object. Its type is `Pokemon` (a `OutputObject` kind of type).
   */
  pokemon?: Trainer.pokemon$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Trainer.pokemon<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Trainer$FragmentInline<_$Scalars>
    | Trainer$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Trainer$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Trainer<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Trainer {
  export type $class<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | $class$SelectionSet<_$Scalars>

  export interface $class$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$class` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $class$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | $class$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type fans<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    fans$SelectionSet<_$Scalars>

  export interface fans$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Patron<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `fans` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type fans$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    fans$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>

  export interface name$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemon<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    pokemon$SelectionSet<_$Scalars>

  export interface pokemon$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Pokemon<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    pokemon$SelectionSet<_$Scalars>
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

export interface Battle<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  /**
   * A meta field. Is the name of the type being selected. Since this is a union type and thus polymorphic,
   * the name is one of the member type names, whichever is ultimately returned at runtime.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>

  ___on_BattleRoyale?: BattleRoyale<_$Scalars>
  ___on_BattleTrainer?: BattleTrainer<_$Scalars>
  ___on_BattleWild?: BattleWild<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Battle$FragmentInline<_$Scalars>
    | Battle$FragmentInline<_$Scalars>[]
}
export interface Battle$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Battle<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
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

export interface Being<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty>
  extends $Select.Bases.ObjectLike
{
  id?: Being.id<_$Scalars>
  name?: Being.name<_$Scalars>
  ___on_Patron?: Patron<_$Scalars>
  ___on_Pokemon?: Pokemon<_$Scalars>
  ___on_Trainer?: Trainer<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Being$FragmentInline<_$Scalars>
    | Being$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected. Since this is a interface type and thus polymorphic,
   * the name is one of the implementor type names, whichever is ultimately returned at runtime.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Being$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Being<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace Being {
  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  export type name<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>

  export interface name$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>
  >
}

/**
 * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
 *     name clashing between the field name and the object name.
 *
 *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
 *     would end up with an error of `export interface Foo extends Foo ...`
 */
export namespace $NamedTypes {
  export type $Query<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    Query<_$Scalars>
  export type $Mutation<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Mutation<_$Scalars>
  export type $BattleWildResult = BattleWildResult
  export type $PokemonType = PokemonType
  export type $TrainerClass = TrainerClass
  export type $DateFilter<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = DateFilter<_$Scalars>
  export type $PokemonFilter<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = PokemonFilter<_$Scalars>
  export type $StringFilter<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = StringFilter<_$Scalars>
  export type $BattleRoyale<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = BattleRoyale<_$Scalars>
  export type $BattleTrainer<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = BattleTrainer<_$Scalars>
  export type $BattleWild<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = BattleWild<_$Scalars>
  export type $CombatantMultiPokemon<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = CombatantMultiPokemon<_$Scalars>
  export type $CombatantSinglePokemon<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = CombatantSinglePokemon<_$Scalars>
  export type $Patron<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    Patron<_$Scalars>
  export type $Pokemon<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Pokemon<_$Scalars>
  export type $Trainer<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Trainer<_$Scalars>
  export type $Battle<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    Battle<_$Scalars>
  export type $Being<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    Being<_$Scalars>
}
