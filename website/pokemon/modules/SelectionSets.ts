import type { Select as $Select } from 'graffle/schema'
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

// Prefix with $ because this is not a schema type. A user could have a schema type named "Document" that this would conflict with.
export interface $Document<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
  query?: Record<string, Query<$Scalars>>
  mutation?: Record<string, Mutation<$Scalars>>
}

//
//
//
//
//
//
// ==================================================================================================
//                                      GraphQLObjectType Types
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
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                              Mutation
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Mutation<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
  /**
   * Select the `addPokemon` field on the `Mutation` object. Its type is Object.
   */
  addPokemon?: Mutation.addPokemon<$Scalars> | $Select.SelectAlias.SelectAlias<Mutation.addPokemon<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Mutation$FragmentInline<$Scalars>
    | Mutation$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Mutation$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends Mutation<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Mutation {
  export type addPokemon<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = addPokemon$SelectionSet<
    $Scalars
  >

  export interface addPokemon$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Pokemon<$Scalars>
  {
    /**
     * Arguments for `addPokemon` field. Some (2/5) arguments are required so you must include this.
     */
    $: addPokemon$Arguments<$Scalars>
  }

  export interface addPokemon$Arguments<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
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
  export type addPokemon$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    addPokemon$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                               Query
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Query<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
  /**
   * Select the `battles` field on the `Query` object. Its type is Union.
   */
  battles?: Query.battles$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.battles<$Scalars>>
  /**
   * Select the `beings` field on the `Query` object. Its type is Interface.
   */
  beings?: Query.beings$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.beings<$Scalars>>
  /**
   * Select the `pokemon` field on the `Query` object. Its type is Object.
   */
  pokemon?: Query.pokemon$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.pokemon<$Scalars>>
  /**
   * Select the `pokemonByName` field on the `Query` object. Its type is Object.
   */
  pokemonByName?: Query.pokemonByName<$Scalars> | $Select.SelectAlias.SelectAlias<Query.pokemonByName<$Scalars>>
  /**
   * Select the `pokemons` field on the `Query` object. Its type is Object.
   */
  pokemons?: Query.pokemons$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.pokemons<$Scalars>>
  /**
   * Select the `trainerByName` field on the `Query` object. Its type is Object.
   */
  trainerByName?: Query.trainerByName<$Scalars> | $Select.SelectAlias.SelectAlias<Query.trainerByName<$Scalars>>
  /**
   * Select the `trainers` field on the `Query` object. Its type is Object.
   */
  trainers?: Query.trainers$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.trainers<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Query$FragmentInline<$Scalars>
    | Query$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Query$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends Query<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Query {
  export type battles<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = battles$SelectionSet<$Scalars>

  export interface battles$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Battle<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `battles` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type battles$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    battles$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type beings<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = beings$SelectionSet<$Scalars>

  export interface beings$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Being<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `beings` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type beings$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    beings$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemon<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = pokemon$SelectionSet<$Scalars>

  export interface pokemon$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Pokemon<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    pokemon$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemonByName<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = pokemonByName$SelectionSet<
    $Scalars
  >

  export interface pokemonByName$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Pokemon<$Scalars>
  {
    /**
     * Arguments for `pokemonByName` field. All arguments are required so you must include this.
     */
    $: pokemonByName$Arguments<$Scalars>
  }

  export interface pokemonByName$Arguments<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
    name: string
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemonByName` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemonByName$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      pokemonByName$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type pokemons<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = pokemons$SelectionSet<$Scalars>

  export interface pokemons$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Pokemon<$Scalars>
  {
    /**
     * Arguments for `pokemons` field. No arguments are required so you may omit this.
     */
    $?: pokemons$Arguments<$Scalars>
  }

  export interface pokemons$Arguments<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
    filter?: $NamedTypes.$PokemonFilter<$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemons$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    pokemons$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainerByName<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = trainerByName$SelectionSet<
    $Scalars
  >

  export interface trainerByName$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Trainer<$Scalars>
  {
    /**
     * Arguments for `trainerByName` field. All arguments are required so you must include this.
     */
    $: trainerByName$Arguments<$Scalars>
  }

  export interface trainerByName$Arguments<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
    name: string
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainerByName` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainerByName$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      trainerByName$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type trainers<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = trainers$SelectionSet<$Scalars>

  export interface trainers$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Trainer<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainers` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainers$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    trainers$SelectionSet<$Scalars>
  >
}

//
//
//
//
//
//
// ==================================================================================================
//                                       GraphQLEnumType Types
// ==================================================================================================
//
//
//
//
//
//

export type BattleWildResult = 'pokemonsCaptured' | 'pokemonsDefeated' | 'trainerDefeated'

export type PokemonType = 'bug' | 'electric' | 'fire' | 'grass' | 'water'

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
//                                    GraphQLInputObjectType Types
// ==================================================================================================
//
//
//
//
//
//

export interface DateFilter<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
  gte?: number | undefined | null
  lte?: number | undefined | null
}

export interface PokemonFilter<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
  birthday?: $NamedTypes.$DateFilter<$Scalars> | undefined | null
  name?: $NamedTypes.$StringFilter<$Scalars> | undefined | null
}

export interface StringFilter<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
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
//                                     GraphQLInterfaceType Types
// ==================================================================================================
//
//
//
//
//
//

// Interface Type: Being
// --------------------------------------------------------------------------------------------------

export interface Being<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> extends $Select.Bases.ObjectLike {
  id?: Being.id<$Scalars>
  name?: Being.name<$Scalars>
  ___on_Patron?: Patron<$Scalars>
  ___on_Pokemon?: Pokemon<$Scalars>
  ___on_Trainer?: Trainer<$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Being$FragmentInline<$Scalars>
    | Being$FragmentInline<$Scalars>[]

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

export interface Being$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends Being<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

export namespace Being {
  export type id<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  export type name<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<$Scalars>

  export interface name$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<$Scalars>
  >
}

//
//
//
//
//
//
// ==================================================================================================
//                                      GraphQLObjectType Types
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
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                            BattleRoyale
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface BattleRoyale<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `combatants` field on the `BattleRoyale` object. Its type is Object.
   */
  combatants?:
    | BattleRoyale.combatants$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<BattleRoyale.combatants<$Scalars>>
  /**
   * Select the `date` field on the `BattleRoyale` object. Its type is `Float` (a `Scalar`).
   */
  date?: BattleRoyale.date$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<BattleRoyale.date<$Scalars>>
  /**
   * Select the `id` field on the `BattleRoyale` object. Its type is `ID` (a `Scalar`).
   */
  id?: BattleRoyale.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<BattleRoyale.id<$Scalars>>
  /**
   * Select the `winner` field on the `BattleRoyale` object. Its type is Object.
   */
  winner?: BattleRoyale.winner$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<BattleRoyale.winner<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | BattleRoyale$FragmentInline<$Scalars>
    | BattleRoyale$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface BattleRoyale$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends BattleRoyale<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace BattleRoyale {
  export type combatants<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = combatants$SelectionSet<
    $Scalars
  >

  export interface combatants$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$CombatantMultiPokemon<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatants` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatants$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    combatants$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type date<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<$Scalars>

  export interface date$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type winner<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = winner$SelectionSet<$Scalars>

  export interface winner$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Trainer<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `winner` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type winner$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    winner$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                           BattleTrainer
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface BattleTrainer<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `combatant1` field on the `BattleTrainer` object. Its type is Object.
   */
  combatant1?:
    | BattleTrainer.combatant1$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<BattleTrainer.combatant1<$Scalars>>
  /**
   * Select the `combatant2` field on the `BattleTrainer` object. Its type is Object.
   */
  combatant2?:
    | BattleTrainer.combatant2$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<BattleTrainer.combatant2<$Scalars>>
  /**
   * Select the `date` field on the `BattleTrainer` object. Its type is `Float` (a `Scalar`).
   */
  date?: BattleTrainer.date$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<BattleTrainer.date<$Scalars>>
  /**
   * Select the `id` field on the `BattleTrainer` object. Its type is `ID` (a `Scalar`).
   */
  id?: BattleTrainer.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<BattleTrainer.id<$Scalars>>
  /**
   * Select the `winner` field on the `BattleTrainer` object. Its type is Object.
   */
  winner?: BattleTrainer.winner$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<BattleTrainer.winner<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | BattleTrainer$FragmentInline<$Scalars>
    | BattleTrainer$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface BattleTrainer$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends BattleTrainer<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace BattleTrainer {
  export type combatant1<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = combatant1$SelectionSet<
    $Scalars
  >

  export interface combatant1$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$CombatantSinglePokemon<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatant1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatant1$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    combatant1$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type combatant2<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = combatant2$SelectionSet<
    $Scalars
  >

  export interface combatant2$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$CombatantSinglePokemon<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `combatant2` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type combatant2$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    combatant2$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type date<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<$Scalars>

  export interface date$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type winner<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = winner$SelectionSet<$Scalars>

  export interface winner$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Trainer<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `winner` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type winner$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    winner$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                             BattleWild
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface BattleWild<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `date` field on the `BattleWild` object. Its type is `Float` (a `Scalar`).
   */
  date?: BattleWild.date$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<BattleWild.date<$Scalars>>
  /**
   * Select the `id` field on the `BattleWild` object. Its type is `ID` (a `Scalar`).
   */
  id?: BattleWild.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<BattleWild.id<$Scalars>>
  /**
   * Select the `pokemon` field on the `BattleWild` object. Its type is Object.
   */
  pokemon?: BattleWild.pokemon$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<BattleWild.pokemon<$Scalars>>
  /**
   * Select the `result` field on the `BattleWild` object. Its type is Enum.
   */
  result?: BattleWild.result$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<BattleWild.result<$Scalars>>
  /**
   * Select the `trainer` field on the `BattleWild` object. Its type is Object.
   */
  trainer?: BattleWild.trainer$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<BattleWild.trainer<$Scalars>>
  /**
   * Select the `wildPokemons` field on the `BattleWild` object. Its type is Object.
   */
  wildPokemons?:
    | BattleWild.wildPokemons$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<BattleWild.wildPokemons<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | BattleWild$FragmentInline<$Scalars>
    | BattleWild$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface BattleWild$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends BattleWild<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace BattleWild {
  export type date<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<$Scalars>

  export interface date$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemon<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = pokemon$SelectionSet<$Scalars>

  export interface pokemon$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Pokemon<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    pokemon$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type result<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | result$SelectionSet<$Scalars>

  export interface result$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `result` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type result$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | result$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = trainer$SelectionSet<$Scalars>

  export interface trainer$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Trainer<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    trainer$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type wildPokemons<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = wildPokemons$SelectionSet<
    $Scalars
  >

  export interface wildPokemons$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Pokemon<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `wildPokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type wildPokemons$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      wildPokemons$SelectionSet<$Scalars>
    >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                       CombatantMultiPokemon
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface CombatantMultiPokemon<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `pokemons` field on the `CombatantMultiPokemon` object. Its type is Object.
   */
  pokemons?:
    | CombatantMultiPokemon.pokemons$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<CombatantMultiPokemon.pokemons<$Scalars>>
  /**
   * Select the `trainer` field on the `CombatantMultiPokemon` object. Its type is Object.
   */
  trainer?:
    | CombatantMultiPokemon.trainer$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<CombatantMultiPokemon.trainer<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | CombatantMultiPokemon$FragmentInline<$Scalars>
    | CombatantMultiPokemon$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface CombatantMultiPokemon$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends CombatantMultiPokemon<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace CombatantMultiPokemon {
  export type pokemons<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = pokemons$SelectionSet<$Scalars>

  export interface pokemons$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Pokemon<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemons$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    pokemons$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = trainer$SelectionSet<$Scalars>

  export interface trainer$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Trainer<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    trainer$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                       CombatantSinglePokemon
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface CombatantSinglePokemon<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `pokemon` field on the `CombatantSinglePokemon` object. Its type is Object.
   */
  pokemon?:
    | CombatantSinglePokemon.pokemon$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<CombatantSinglePokemon.pokemon<$Scalars>>
  /**
   * Select the `trainer` field on the `CombatantSinglePokemon` object. Its type is Object.
   */
  trainer?:
    | CombatantSinglePokemon.trainer$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<CombatantSinglePokemon.trainer<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | CombatantSinglePokemon$FragmentInline<$Scalars>
    | CombatantSinglePokemon$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface CombatantSinglePokemon$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends CombatantSinglePokemon<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace CombatantSinglePokemon {
  export type pokemon<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = pokemon$SelectionSet<$Scalars>

  export interface pokemon$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Pokemon<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    pokemon$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = trainer$SelectionSet<$Scalars>

  export interface trainer$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Trainer<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    trainer$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                               Patron
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Patron<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> extends $Select.Bases.ObjectLike {
  /**
   * Select the `id` field on the `Patron` object. Its type is `ID` (a `Scalar`).
   */
  id?: Patron.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Patron.id<$Scalars>>
  /**
   * Select the `money` field on the `Patron` object. Its type is `Int` (a `Scalar`).
   */
  money?: Patron.money$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Patron.money<$Scalars>>
  /**
   * Select the `name` field on the `Patron` object. Its type is `String` (a `Scalar`).
   */
  name?: Patron.name$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Patron.name<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Patron$FragmentInline<$Scalars>
    | Patron$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Patron$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends Patron<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Patron {
  export type id<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type money<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | money$SelectionSet<$Scalars>

  export interface money$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `money` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type money$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | money$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<$Scalars>

  export interface name$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                              Pokemon
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Pokemon<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `attack` field on the `Pokemon` object. Its type is `Int` (a `Scalar`).
   */
  attack?: Pokemon.attack$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.attack<$Scalars>>
  /**
   * Select the `birthday` field on the `Pokemon` object. Its type is `Int` (a `Scalar`).
   */
  birthday?: Pokemon.birthday$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.birthday<$Scalars>>
  /**
   * Select the `defense` field on the `Pokemon` object. Its type is `Int` (a `Scalar`).
   */
  defense?: Pokemon.defense$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.defense<$Scalars>>
  /**
   * Select the `hp` field on the `Pokemon` object. Its type is `Int` (a `Scalar`).
   */
  hp?: Pokemon.hp$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.hp<$Scalars>>
  /**
   * Select the `id` field on the `Pokemon` object. Its type is `ID` (a `Scalar`).
   */
  id?: Pokemon.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.id<$Scalars>>
  /**
   * Select the `name` field on the `Pokemon` object. Its type is `String` (a `Scalar`).
   */
  name?: Pokemon.name$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.name<$Scalars>>
  /**
   * Select the `trainer` field on the `Pokemon` object. Its type is Object.
   */
  trainer?: Pokemon.trainer$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.trainer<$Scalars>>
  /**
   * Select the `type` field on the `Pokemon` object. Its type is Enum.
   */
  type?: Pokemon.type$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Pokemon.type<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Pokemon$FragmentInline<$Scalars>
    | Pokemon$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Pokemon$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends Pokemon<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Pokemon {
  export type attack<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | attack$SelectionSet<$Scalars>

  export interface attack$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `attack` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type attack$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | attack$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type birthday<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | birthday$SelectionSet<$Scalars>

  export interface birthday$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `birthday` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type birthday$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | birthday$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type defense<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | defense$SelectionSet<$Scalars>

  export interface defense$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `defense` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type defense$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | defense$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type hp<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | hp$SelectionSet<$Scalars>

  export interface hp$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `hp` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type hp$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | hp$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<$Scalars>

  export interface name$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type trainer<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = trainer$SelectionSet<$Scalars>

  export interface trainer$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Trainer<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type trainer$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    trainer$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type type<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | type$SelectionSet<$Scalars>

  export interface type$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `type` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type type$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | type$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                              Trainer
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Trainer<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `class` field on the `Trainer` object. Its type is Enum.
   */
  class?: Trainer.$class$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Trainer.$class<$Scalars>>
  /**
   * Select the `fans` field on the `Trainer` object. Its type is Object.
   */
  fans?: Trainer.fans$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Trainer.fans<$Scalars>>
  /**
   * Select the `id` field on the `Trainer` object. Its type is `ID` (a `Scalar`).
   */
  id?: Trainer.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Trainer.id<$Scalars>>
  /**
   * Select the `name` field on the `Trainer` object. Its type is `String` (a `Scalar`).
   */
  name?: Trainer.name$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Trainer.name<$Scalars>>
  /**
   * Select the `pokemon` field on the `Trainer` object. Its type is Object.
   */
  pokemon?: Trainer.pokemon$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Trainer.pokemon<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Trainer$FragmentInline<$Scalars>
    | Trainer$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Trainer$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends Trainer<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Trainer {
  export type $class<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | $class$SelectionSet<$Scalars>

  export interface $class$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$class` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $class$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | $class$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type fans<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = fans$SelectionSet<$Scalars>

  export interface fans$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Patron<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `fans` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type fans$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    fans$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<$Scalars>

  export interface name$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `name` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type name$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type pokemon<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = pokemon$SelectionSet<$Scalars>

  export interface pokemon$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Pokemon<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `pokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type pokemon$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    pokemon$SelectionSet<$Scalars>
  >
}

//
//
//
//
//
//
// ==================================================================================================
//                                       GraphQLUnionType Types
// ==================================================================================================
//
//
//
//
//
//

export interface Battle<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
  ___on_BattleRoyale?: BattleRoyale<$Scalars>
  ___on_BattleTrainer?: BattleTrainer<$Scalars>
  ___on_BattleWild?: BattleWild<$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Battle$FragmentInline<$Scalars>
    | Battle$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected. Since this is a union type and thus polymorphic,
   * the name is one of the member type names, whichever is ultimately returned at runtime.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}
export interface Battle$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends Battle<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

/**
 * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
 *     name clashing between the field name and the object name.
 *
 *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
 *     would end up with an error of `export interface Foo extends Foo ...`
 */
export namespace $NamedTypes {
  export type $Mutation<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Mutation<$Scalars>
  export type $Query<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Query<$Scalars>
  export type $BattleWildResult = BattleWildResult
  export type $PokemonType = PokemonType
  export type $TrainerClass = TrainerClass
  export type $DateFilter<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = DateFilter<$Scalars>
  export type $PokemonFilter<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = PokemonFilter<$Scalars>
  export type $StringFilter<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = StringFilter<$Scalars>
  export type $Being<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Being<$Scalars>
  export type $BattleRoyale<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = BattleRoyale<$Scalars>
  export type $BattleTrainer<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = BattleTrainer<$Scalars>
  export type $BattleWild<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = BattleWild<$Scalars>
  export type $CombatantMultiPokemon<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    CombatantMultiPokemon<$Scalars>
  export type $CombatantSinglePokemon<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    CombatantSinglePokemon<$Scalars>
  export type $Patron<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Patron<$Scalars>
  export type $Pokemon<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Pokemon<$Scalars>
  export type $Trainer<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Trainer<$Scalars>
  export type $Battle<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Battle<$Scalars>
}
