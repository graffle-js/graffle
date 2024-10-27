import type { Select as $Select } from "graffle/schema";
import type * as $$Utilities from "graffle/utilities-for-generated";

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
  query?: Record<string, Query<_$Scalars>>;
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
   * Select the `continent` field on the `Query` object. Its type is `Continent` (a `OutputObject` kind of type).
   */
  continent?: Query.continent<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.continent<_$Scalars>>;
  /**
   * Select the `continents` field on the `Query` object. Its type is `Continent` (a `OutputObject` kind of type).
   */
  continents?: Query.continents$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.continents<_$Scalars>>;
  /**
   * Select the `countries` field on the `Query` object. Its type is `Country` (a `OutputObject` kind of type).
   */
  countries?: Query.countries$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.countries<_$Scalars>>;
  /**
   * Select the `country` field on the `Query` object. Its type is `Country` (a `OutputObject` kind of type).
   */
  country?: Query.country<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.country<_$Scalars>>;
  /**
   * Select the `language` field on the `Query` object. Its type is `Language` (a `OutputObject` kind of type).
   */
  language?: Query.language<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.language<_$Scalars>>;
  /**
   * Select the `languages` field on the `Query` object. Its type is `Language` (a `OutputObject` kind of type).
   */
  languages?: Query.languages$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Query.languages<_$Scalars>>;

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
    | Query$FragmentInline<_$Scalars>[];

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>;
}

export interface Query$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Query<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Query {
  export type continent<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = continent$SelectionSet<_$Scalars>;

  export interface continent$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Continent<_$Scalars> {
    /**
     * Arguments for `continent` field. All arguments are required so you must include this.
     */
    $: continent$Arguments<_$Scalars>;
  }

  export interface continent$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    code: string;
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `continent` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type continent$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    continent$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type continents<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = continents$SelectionSet<_$Scalars>;

  export interface continents$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Continent<_$Scalars> {
    /**
     * Arguments for `continents` field. No arguments are required so you may omit this.
     */
    $?: continents$Arguments<_$Scalars>;
  }

  export interface continents$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    filter?: $NamedTypes.$ContinentFilterInput<_$Scalars> | undefined | null;
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `continents` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type continents$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    continents$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type countries<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = countries$SelectionSet<_$Scalars>;

  export interface countries$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Country<_$Scalars> {
    /**
     * Arguments for `countries` field. No arguments are required so you may omit this.
     */
    $?: countries$Arguments<_$Scalars>;
  }

  export interface countries$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    filter?: $NamedTypes.$CountryFilterInput<_$Scalars> | undefined | null;
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `countries` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type countries$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    countries$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type country<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    country$SelectionSet<_$Scalars>;

  export interface country$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Country<_$Scalars> {
    /**
     * Arguments for `country` field. All arguments are required so you must include this.
     */
    $: country$Arguments<_$Scalars>;
  }

  export interface country$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    code: string;
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `country` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type country$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    country$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type language<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = language$SelectionSet<_$Scalars>;

  export interface language$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Language<_$Scalars> {
    /**
     * Arguments for `language` field. All arguments are required so you must include this.
     */
    $: language$Arguments<_$Scalars>;
  }

  export interface language$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    code: string;
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `language` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type language$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    language$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type languages<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = languages$SelectionSet<_$Scalars>;

  export interface languages$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Language<_$Scalars> {
    /**
     * Arguments for `languages` field. No arguments are required so you may omit this.
     */
    $?: languages$Arguments<_$Scalars>;
  }

  export interface languages$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    filter?: $NamedTypes.$LanguageFilterInput<_$Scalars> | undefined | null;
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `languages` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type languages$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    languages$SelectionSet<_$Scalars>
  >;
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

export interface ContinentFilterInput<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  code?: $NamedTypes.$StringQueryOperatorInput<_$Scalars> | undefined | null;
}

export interface CountryFilterInput<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  code?: $NamedTypes.$StringQueryOperatorInput<_$Scalars> | undefined | null;
  continent?: $NamedTypes.$StringQueryOperatorInput<_$Scalars> | undefined | null;
  currency?: $NamedTypes.$StringQueryOperatorInput<_$Scalars> | undefined | null;
  name?: $NamedTypes.$StringQueryOperatorInput<_$Scalars> | undefined | null;
}

export interface LanguageFilterInput<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  code?: $NamedTypes.$StringQueryOperatorInput<_$Scalars> | undefined | null;
}

export interface StringQueryOperatorInput<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  eq?: string | undefined | null;
  in?: Array<string | undefined | null> | undefined | null;
  ne?: string | undefined | null;
  nin?: Array<string | undefined | null> | undefined | null;
  regex?: string | undefined | null;
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

//                                             Continent
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Continent<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $Select.Bases.ObjectLike {
  /**
   * Select the `code` field on the `Continent` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  code?: Continent.code$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Continent.code<_$Scalars>>;
  /**
   * Select the `countries` field on the `Continent` object. Its type is `Country` (a `OutputObject` kind of type).
   */
  countries?: Continent.countries$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Continent.countries<_$Scalars>>;
  /**
   * Select the `name` field on the `Continent` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  name?: Continent.name$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Continent.name<_$Scalars>>;

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Continent$FragmentInline<_$Scalars>
    | Continent$FragmentInline<_$Scalars>[];

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>;
}

export interface Continent$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Continent<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Continent {
  export type code<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<_$Scalars>;

  export interface code$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `code` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type code$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type countries<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = countries$SelectionSet<_$Scalars>;

  export interface countries$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Country<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `countries` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type countries$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    countries$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type name<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>;

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
  >;
}

//                                              Country
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Country<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $Select.Bases.ObjectLike {
  /**
   * Select the `awsRegion` field on the `Country` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  awsRegion?: Country.awsRegion$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.awsRegion<_$Scalars>>;
  /**
   * Select the `capital` field on the `Country` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  capital?: Country.capital$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.capital<_$Scalars>>;
  /**
   * Select the `code` field on the `Country` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  code?: Country.code$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.code<_$Scalars>>;
  /**
   * Select the `continent` field on the `Country` object. Its type is `Continent` (a `OutputObject` kind of type).
   */
  continent?: Country.continent$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.continent<_$Scalars>>;
  /**
   * Select the `currencies` field on the `Country` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  currencies?: Country.currencies$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.currencies<_$Scalars>>;
  /**
   * Select the `currency` field on the `Country` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  currency?: Country.currency$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.currency<_$Scalars>>;
  /**
   * Select the `emoji` field on the `Country` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  emoji?: Country.emoji$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.emoji<_$Scalars>>;
  /**
   * Select the `emojiU` field on the `Country` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  emojiU?: Country.emojiU$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.emojiU<_$Scalars>>;
  /**
   * Select the `languages` field on the `Country` object. Its type is `Language` (a `OutputObject` kind of type).
   */
  languages?: Country.languages$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.languages<_$Scalars>>;
  /**
   * Select the `name` field on the `Country` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  name?: Country.name$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.name<_$Scalars>>;
  /**
   * Select the `native` field on the `Country` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  native?: Country.native$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.native<_$Scalars>>;
  /**
   * Select the `phone` field on the `Country` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  phone?: Country.phone$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.phone<_$Scalars>>;
  /**
   * Select the `phones` field on the `Country` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  phones?: Country.phones$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.phones<_$Scalars>>;
  /**
   * Select the `states` field on the `Country` object. Its type is `State` (a `OutputObject` kind of type).
   */
  states?: Country.states$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Country.states<_$Scalars>>;
  /**
   * Select the `subdivisions` field on the `Country` object. Its type is `Subdivision` (a `OutputObject` kind of type).
   */
  subdivisions?:
    | Country.subdivisions$Expanded<_$Scalars>
    | $Select.SelectAlias.SelectAlias<Country.subdivisions<_$Scalars>>;

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Country$FragmentInline<_$Scalars>
    | Country$FragmentInline<_$Scalars>[];

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>;
}

export interface Country$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Country<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Country {
  export type awsRegion<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $Select.Indicator.NoArgsIndicator
    | awsRegion$SelectionSet<_$Scalars>;

  export interface awsRegion$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `awsRegion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type awsRegion$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | awsRegion$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type capital<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | capital$SelectionSet<_$Scalars>;

  export interface capital$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `capital` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type capital$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | capital$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type code<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<_$Scalars>;

  export interface code$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `code` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type code$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type continent<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = continent$SelectionSet<_$Scalars>;

  export interface continent$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Continent<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `continent` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type continent$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    continent$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type currencies<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $Select.Indicator.NoArgsIndicator
    | currencies$SelectionSet<_$Scalars>;

  export interface currencies$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `currencies` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type currencies$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | currencies$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type currency<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $Select.Indicator.NoArgsIndicator
    | currency$SelectionSet<_$Scalars>;

  export interface currency$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `currency` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type currency$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | currency$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type emoji<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | emoji$SelectionSet<_$Scalars>;

  export interface emoji$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `emoji` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type emoji$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | emoji$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type emojiU<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | emojiU$SelectionSet<_$Scalars>;

  export interface emojiU$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `emojiU` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type emojiU$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | emojiU$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type languages<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = languages$SelectionSet<_$Scalars>;

  export interface languages$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Language<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `languages` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type languages$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    languages$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type name<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>;

  export interface name$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {
    /**
     * Arguments for `name` field. No arguments are required so you may omit this.
     */
    $?: name$Arguments<_$Scalars>;
  }

  export interface name$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    lang?: string | undefined | null;
  }

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
  >;

  // --------------------------------------------------------------------------------------------------

  export type native<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | native$SelectionSet<_$Scalars>;

  export interface native$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `native` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type native$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | native$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type phone<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | phone$SelectionSet<_$Scalars>;

  export interface phone$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `phone` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type phone$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | phone$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type phones<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | phones$SelectionSet<_$Scalars>;

  export interface phones$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `phones` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type phones$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | phones$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type states<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    states$SelectionSet<_$Scalars>;

  export interface states$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$State<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `states` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type states$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    states$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type subdivisions<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = subdivisions$SelectionSet<_$Scalars>;

  export interface subdivisions$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Subdivision<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `subdivisions` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type subdivisions$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    subdivisions$SelectionSet<_$Scalars>
  >;
}

//                                              Language
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Language<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $Select.Bases.ObjectLike {
  /**
   * Select the `code` field on the `Language` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  code?: Language.code$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Language.code<_$Scalars>>;
  /**
   * Select the `name` field on the `Language` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  name?: Language.name$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Language.name<_$Scalars>>;
  /**
   * Select the `native` field on the `Language` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  native?: Language.native$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Language.native<_$Scalars>>;
  /**
   * Select the `rtl` field on the `Language` object. Its type is `Boolean` (a `ScalarStandard` kind of type).
   */
  rtl?: Language.rtl$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Language.rtl<_$Scalars>>;

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Language$FragmentInline<_$Scalars>
    | Language$FragmentInline<_$Scalars>[];

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>;
}

export interface Language$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Language<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Language {
  export type code<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<_$Scalars>;

  export interface code$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `code` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type code$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type name<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>;

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
  >;

  // --------------------------------------------------------------------------------------------------

  export type native<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | native$SelectionSet<_$Scalars>;

  export interface native$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `native` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type native$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | native$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type rtl<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | rtl$SelectionSet<_$Scalars>;

  export interface rtl$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `rtl` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type rtl$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | rtl$SelectionSet<_$Scalars>
  >;
}

//                                               State
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface State<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `code` field on the `State` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  code?: State.code$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<State.code<_$Scalars>>;
  /**
   * Select the `country` field on the `State` object. Its type is `Country` (a `OutputObject` kind of type).
   */
  country?: State.country$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<State.country<_$Scalars>>;
  /**
   * Select the `name` field on the `State` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  name?: State.name$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<State.name<_$Scalars>>;

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | State$FragmentInline<_$Scalars>
    | State$FragmentInline<_$Scalars>[];

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>;
}

export interface State$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends State<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace State {
  export type code<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<_$Scalars>;

  export interface code$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `code` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type code$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type country<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    country$SelectionSet<_$Scalars>;

  export interface country$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base, $NamedTypes.$Country<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `country` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type country$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    country$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type name<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>;

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
  >;
}

//                                            Subdivision
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Subdivision<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $Select.Bases.ObjectLike {
  /**
   * Select the `code` field on the `Subdivision` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  code?: Subdivision.code$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Subdivision.code<_$Scalars>>;
  /**
   * Select the `emoji` field on the `Subdivision` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  emoji?: Subdivision.emoji$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Subdivision.emoji<_$Scalars>>;
  /**
   * Select the `name` field on the `Subdivision` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  name?: Subdivision.name$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Subdivision.name<_$Scalars>>;

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Subdivision$FragmentInline<_$Scalars>
    | Subdivision$FragmentInline<_$Scalars>[];

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>;
}

export interface Subdivision$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Subdivision<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Subdivision {
  export type code<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<_$Scalars>;

  export interface code$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `code` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type code$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | code$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type emoji<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | emoji$SelectionSet<_$Scalars>;

  export interface emoji$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `emoji` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type emoji$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | emoji$SelectionSet<_$Scalars>
  >;

  // --------------------------------------------------------------------------------------------------

  export type name<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | name$SelectionSet<_$Scalars>;

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
  >;
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
    Query<_$Scalars>;
  export type $ContinentFilterInput<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = ContinentFilterInput<_$Scalars>;
  export type $CountryFilterInput<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = CountryFilterInput<_$Scalars>;
  export type $LanguageFilterInput<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = LanguageFilterInput<_$Scalars>;
  export type $StringQueryOperatorInput<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = StringQueryOperatorInput<_$Scalars>;
  export type $Continent<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Continent<_$Scalars>;
  export type $Country<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Country<_$Scalars>;
  export type $Language<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Language<_$Scalars>;
  export type $State<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    State<_$Scalars>;
  export type $Subdivision<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Subdivision<_$Scalars>;
}
