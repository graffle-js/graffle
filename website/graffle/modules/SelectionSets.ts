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
//                                               Query
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Query<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
  /**
   * Select the `continent` field on the `Query` object. Its type is Object.
   */
  continent?: Query.continent<$Scalars> | $Select.SelectAlias.SelectAlias<Query.continent<$Scalars>>
  /**
   * Select the `continents` field on the `Query` object. Its type is Object.
   */
  continents?: Query.continents$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.continents<$Scalars>>
  /**
   * Select the `countries` field on the `Query` object. Its type is Object.
   */
  countries?: Query.countries$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.countries<$Scalars>>
  /**
   * Select the `country` field on the `Query` object. Its type is Object.
   */
  country?: Query.country<$Scalars> | $Select.SelectAlias.SelectAlias<Query.country<$Scalars>>
  /**
   * Select the `language` field on the `Query` object. Its type is Object.
   */
  language?: Query.language<$Scalars> | $Select.SelectAlias.SelectAlias<Query.language<$Scalars>>
  /**
   * Select the `languages` field on the `Query` object. Its type is Object.
   */
  languages?: Query.languages$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.languages<$Scalars>>

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
  export type continent<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = continent$SelectionSet<$Scalars>

  export interface continent$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Continent<$Scalars>
  {
    /**
     * Arguments for `continent` field. All arguments are required so you must include this.
     */
    $: continent$Arguments<$Scalars>
  }

  export interface continent$Arguments<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
    code: string
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `continent` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type continent$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    continent$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type continents<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = continents$SelectionSet<
    $Scalars
  >

  export interface continents$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Continent<$Scalars>
  {
    /**
     * Arguments for `continents` field. No arguments are required so you may omit this.
     */
    $?: continents$Arguments<$Scalars>
  }

  export interface continents$Arguments<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
    filter?: $NamedTypes.$ContinentFilterInput<$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `continents` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type continents$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    continents$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type countries<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = countries$SelectionSet<$Scalars>

  export interface countries$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Country<$Scalars>
  {
    /**
     * Arguments for `countries` field. No arguments are required so you may omit this.
     */
    $?: countries$Arguments<$Scalars>
  }

  export interface countries$Arguments<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
    filter?: $NamedTypes.$CountryFilterInput<$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `countries` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type countries$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    countries$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type country<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = country$SelectionSet<$Scalars>

  export interface country$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Country<$Scalars>
  {
    /**
     * Arguments for `country` field. All arguments are required so you must include this.
     */
    $: country$Arguments<$Scalars>
  }

  export interface country$Arguments<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
    code: string
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `country` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type country$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    country$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type language<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = language$SelectionSet<$Scalars>

  export interface language$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Language<$Scalars>
  {
    /**
     * Arguments for `language` field. All arguments are required so you must include this.
     */
    $: language$Arguments<$Scalars>
  }

  export interface language$Arguments<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
    code: string
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `language` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type language$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    language$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type languages<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = languages$SelectionSet<$Scalars>

  export interface languages$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Language<$Scalars>
  {
    /**
     * Arguments for `languages` field. No arguments are required so you may omit this.
     */
    $?: languages$Arguments<$Scalars>
  }

  export interface languages$Arguments<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
    filter?: $NamedTypes.$LanguageFilterInput<$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `languages` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type languages$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    languages$SelectionSet<$Scalars>
  >
}

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

export interface ContinentFilterInput<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
  code?: $NamedTypes.$StringQueryOperatorInput<$Scalars> | undefined | null
}

export interface CountryFilterInput<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
  code?: $NamedTypes.$StringQueryOperatorInput<$Scalars> | undefined | null
  continent?: $NamedTypes.$StringQueryOperatorInput<$Scalars> | undefined | null
  currency?: $NamedTypes.$StringQueryOperatorInput<$Scalars> | undefined | null
  name?: $NamedTypes.$StringQueryOperatorInput<$Scalars> | undefined | null
}

export interface LanguageFilterInput<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
  code?: $NamedTypes.$StringQueryOperatorInput<$Scalars> | undefined | null
}

export interface StringQueryOperatorInput<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
  eq?: string | undefined | null
  in?: Array<string | undefined | null> | undefined | null
  ne?: string | undefined | null
  nin?: Array<string | undefined | null> | undefined | null
  regex?: string | undefined | null
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
//                                             Continent
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Continent<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `code` field on the `Continent` object. Its type is `ID` (a `Scalar`).
   */
  code?: Continent.code$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Continent.code<$Scalars>>
  /**
   * Select the `countries` field on the `Continent` object. Its type is Object.
   */
  countries?: Continent.countries$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Continent.countries<$Scalars>>
  /**
   * Select the `name` field on the `Continent` object. Its type is `String` (a `Scalar`).
   */
  name?: Continent.name$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Continent.name<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Continent$FragmentInline<$Scalars>
    | Continent$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Continent$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends Continent<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Continent {
  export type code<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<$Scalars>

  export interface code$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `code` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type code$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type countries<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = countries$SelectionSet<$Scalars>

  export interface countries$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Country<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `countries` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type countries$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    countries$SelectionSet<$Scalars>
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
//                                              Country
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Country<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `awsRegion` field on the `Country` object. Its type is `String` (a `Scalar`).
   */
  awsRegion?: Country.awsRegion$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.awsRegion<$Scalars>>
  /**
   * Select the `capital` field on the `Country` object. Its type is `String` (a `Scalar`).
   */
  capital?: Country.capital$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.capital<$Scalars>>
  /**
   * Select the `code` field on the `Country` object. Its type is `ID` (a `Scalar`).
   */
  code?: Country.code$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.code<$Scalars>>
  /**
   * Select the `continent` field on the `Country` object. Its type is Object.
   */
  continent?: Country.continent$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.continent<$Scalars>>
  /**
   * Select the `currencies` field on the `Country` object. Its type is `String` (a `Scalar`).
   */
  currencies?: Country.currencies$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.currencies<$Scalars>>
  /**
   * Select the `currency` field on the `Country` object. Its type is `String` (a `Scalar`).
   */
  currency?: Country.currency$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.currency<$Scalars>>
  /**
   * Select the `emoji` field on the `Country` object. Its type is `String` (a `Scalar`).
   */
  emoji?: Country.emoji$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.emoji<$Scalars>>
  /**
   * Select the `emojiU` field on the `Country` object. Its type is `String` (a `Scalar`).
   */
  emojiU?: Country.emojiU$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.emojiU<$Scalars>>
  /**
   * Select the `languages` field on the `Country` object. Its type is Object.
   */
  languages?: Country.languages$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.languages<$Scalars>>
  /**
   * Select the `name` field on the `Country` object. Its type is `String` (a `Scalar`).
   */
  name?: Country.name$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.name<$Scalars>>
  /**
   * Select the `native` field on the `Country` object. Its type is `String` (a `Scalar`).
   */
  native?: Country.native$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.native<$Scalars>>
  /**
   * Select the `phone` field on the `Country` object. Its type is `String` (a `Scalar`).
   */
  phone?: Country.phone$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.phone<$Scalars>>
  /**
   * Select the `phones` field on the `Country` object. Its type is `String` (a `Scalar`).
   */
  phones?: Country.phones$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.phones<$Scalars>>
  /**
   * Select the `states` field on the `Country` object. Its type is Object.
   */
  states?: Country.states$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Country.states<$Scalars>>
  /**
   * Select the `subdivisions` field on the `Country` object. Its type is Object.
   */
  subdivisions?:
    | Country.subdivisions$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Country.subdivisions<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Country$FragmentInline<$Scalars>
    | Country$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Country$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends Country<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Country {
  export type awsRegion<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | awsRegion$SelectionSet<$Scalars>

  export interface awsRegion$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `awsRegion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type awsRegion$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | awsRegion$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type capital<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | capital$SelectionSet<$Scalars>

  export interface capital$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `capital` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type capital$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | capital$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type code<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<$Scalars>

  export interface code$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `code` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type code$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type continent<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = continent$SelectionSet<$Scalars>

  export interface continent$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Continent<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `continent` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type continent$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    continent$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type currencies<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | currencies$SelectionSet<$Scalars>

  export interface currencies$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `currencies` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type currencies$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | currencies$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type currency<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | currency$SelectionSet<$Scalars>

  export interface currency$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `currency` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type currency$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | currency$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type emoji<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | emoji$SelectionSet<$Scalars>

  export interface emoji$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `emoji` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type emoji$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | emoji$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type emojiU<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | emojiU$SelectionSet<$Scalars>

  export interface emojiU$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `emojiU` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type emojiU$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | emojiU$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type languages<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = languages$SelectionSet<$Scalars>

  export interface languages$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Language<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `languages` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type languages$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    languages$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type name<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<$Scalars>

  export interface name$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `name` field. No arguments are required so you may omit this.
     */
    $?: name$Arguments<$Scalars>
  }

  export interface name$Arguments<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> {
    lang?: string | undefined | null
  }

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

  export type native<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | native$SelectionSet<$Scalars>

  export interface native$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `native` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type native$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | native$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type phone<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | phone$SelectionSet<$Scalars>

  export interface phone$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `phone` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type phone$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | phone$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type phones<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | phones$SelectionSet<$Scalars>

  export interface phones$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `phones` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type phones$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | phones$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type states<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = states$SelectionSet<$Scalars>

  export interface states$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$State<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `states` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type states$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    states$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type subdivisions<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = subdivisions$SelectionSet<
    $Scalars
  >

  export interface subdivisions$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Subdivision<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `subdivisions` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type subdivisions$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      subdivisions$SelectionSet<$Scalars>
    >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                              Language
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Language<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `code` field on the `Language` object. Its type is `ID` (a `Scalar`).
   */
  code?: Language.code$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Language.code<$Scalars>>
  /**
   * Select the `name` field on the `Language` object. Its type is `String` (a `Scalar`).
   */
  name?: Language.name$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Language.name<$Scalars>>
  /**
   * Select the `native` field on the `Language` object. Its type is `String` (a `Scalar`).
   */
  native?: Language.native$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Language.native<$Scalars>>
  /**
   * Select the `rtl` field on the `Language` object. Its type is `Boolean` (a `Scalar`).
   */
  rtl?: Language.rtl$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Language.rtl<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Language$FragmentInline<$Scalars>
    | Language$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Language$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends Language<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Language {
  export type code<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<$Scalars>

  export interface code$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `code` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type code$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<$Scalars>
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

  export type native<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | native$SelectionSet<$Scalars>

  export interface native$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `native` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type native$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | native$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type rtl<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | rtl$SelectionSet<$Scalars>

  export interface rtl$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `rtl` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type rtl$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | rtl$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OBJECT
// --------------------------------------------------------------------------------------------------
//                                               State
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface State<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> extends $Select.Bases.ObjectLike {
  /**
   * Select the `code` field on the `State` object. Its type is `String` (a `Scalar`).
   */
  code?: State.code$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<State.code<$Scalars>>
  /**
   * Select the `country` field on the `State` object. Its type is Object.
   */
  country?: State.country$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<State.country<$Scalars>>
  /**
   * Select the `name` field on the `State` object. Its type is `String` (a `Scalar`).
   */
  name?: State.name$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<State.name<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | State$FragmentInline<$Scalars>
    | State$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface State$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends State<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace State {
  export type code<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<$Scalars>

  export interface code$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `code` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type code$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type country<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = country$SelectionSet<$Scalars>

  export interface country$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Country<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `country` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type country$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    country$SelectionSet<$Scalars>
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
//                                            Subdivision
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Subdivision<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `code` field on the `Subdivision` object. Its type is `ID` (a `Scalar`).
   */
  code?: Subdivision.code$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Subdivision.code<$Scalars>>
  /**
   * Select the `emoji` field on the `Subdivision` object. Its type is `String` (a `Scalar`).
   */
  emoji?: Subdivision.emoji$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Subdivision.emoji<$Scalars>>
  /**
   * Select the `name` field on the `Subdivision` object. Its type is `String` (a `Scalar`).
   */
  name?: Subdivision.name$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Subdivision.name<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Subdivision$FragmentInline<$Scalars>
    | Subdivision$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Subdivision$FragmentInline<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends Subdivision<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Subdivision {
  export type code<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<$Scalars>

  export interface code$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `code` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type code$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type emoji<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | emoji$SelectionSet<$Scalars>

  export interface emoji$SelectionSet<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `emoji` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type emoji$Expanded<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | emoji$SelectionSet<$Scalars>
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

/**
 * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
 *     name clashing between the field name and the object name.
 *
 *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
 *     would end up with an error of `export interface Foo extends Foo ...`
 */
export namespace $NamedTypes {
  export type $Query<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Query<$Scalars>
  export type $ContinentFilterInput<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    ContinentFilterInput<$Scalars>
  export type $CountryFilterInput<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = CountryFilterInput<
    $Scalars
  >
  export type $LanguageFilterInput<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = LanguageFilterInput<
    $Scalars
  >
  export type $StringQueryOperatorInput<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> =
    StringQueryOperatorInput<$Scalars>
  export type $Continent<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Continent<$Scalars>
  export type $Country<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Country<$Scalars>
  export type $Language<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Language<$Scalars>
  export type $State<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = State<$Scalars>
  export type $Subdivision<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}> = Subdivision<$Scalars>
}
