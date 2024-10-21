import type { Schema as $ } from 'graffle/utilities-for-generated'
import type * as $$Utilities from 'graffle/utilities-for-generated'
import type * as Data from './Data.js'
import type * as MethodsRoot from './MethodsRoot.js'
import type * as $Scalar from './Scalar.js'
export namespace Schema {
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

  export type Query = $.StandardTypes.Query<{
    continent: $.OutputField<
      'continent',
      $.Nullable<Continent>,
      $.Args<{
        code: $.InputField<$Scalar.ID>
      }, false>
    >
    continents: $.OutputField<
      'continents',
      $.List<Continent>,
      $.Args<{
        filter: $.InputField<$.Nullable<ContinentFilterInput>>
      }, true>
    >
    countries: $.OutputField<
      'countries',
      $.List<Country>,
      $.Args<{
        filter: $.InputField<$.Nullable<CountryFilterInput>>
      }, true>
    >
    country: $.OutputField<
      'country',
      $.Nullable<Country>,
      $.Args<{
        code: $.InputField<$Scalar.ID>
      }, false>
    >
    language: $.OutputField<
      'language',
      $.Nullable<Language>,
      $.Args<{
        code: $.InputField<$Scalar.ID>
      }, false>
    >
    languages: $.OutputField<
      'languages',
      $.List<Language>,
      $.Args<{
        filter: $.InputField<$.Nullable<LanguageFilterInput>>
      }, true>
    >
  }>

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

  export type Continent = $.OutputObject<'Continent', {
    code: $.OutputField<'code', $Scalar.ID, null>
    countries: $.OutputField<'countries', $.List<Country>, null>
    name: $.OutputField<'name', $Scalar.String, null>
  }>

  export type Country = $.OutputObject<'Country', {
    awsRegion: $.OutputField<'awsRegion', $Scalar.String, null>
    capital: $.OutputField<'capital', $.Nullable<$Scalar.String>, null>
    code: $.OutputField<'code', $Scalar.ID, null>
    continent: $.OutputField<'continent', Continent, null>
    currencies: $.OutputField<'currencies', $.List<$Scalar.String>, null>
    currency: $.OutputField<'currency', $.Nullable<$Scalar.String>, null>
    emoji: $.OutputField<'emoji', $Scalar.String, null>
    emojiU: $.OutputField<'emojiU', $Scalar.String, null>
    languages: $.OutputField<'languages', $.List<Language>, null>
    name: $.OutputField<
      'name',
      $Scalar.String,
      $.Args<{
        lang: $.InputField<$.Nullable<$Scalar.String>>
      }, true>
    >
    native: $.OutputField<'native', $Scalar.String, null>
    phone: $.OutputField<'phone', $Scalar.String, null>
    phones: $.OutputField<'phones', $.List<$Scalar.String>, null>
    states: $.OutputField<'states', $.List<State>, null>
    subdivisions: $.OutputField<'subdivisions', $.List<Subdivision>, null>
  }>

  export type Language = $.OutputObject<'Language', {
    code: $.OutputField<'code', $Scalar.ID, null>
    name: $.OutputField<'name', $Scalar.String, null>
    native: $.OutputField<'native', $Scalar.String, null>
    rtl: $.OutputField<'rtl', $Scalar.Boolean, null>
  }>

  export type State = $.OutputObject<'State', {
    code: $.OutputField<'code', $.Nullable<$Scalar.String>, null>
    country: $.OutputField<'country', Country, null>
    name: $.OutputField<'name', $Scalar.String, null>
  }>

  export type Subdivision = $.OutputObject<'Subdivision', {
    code: $.OutputField<'code', $Scalar.ID, null>
    emoji: $.OutputField<'emoji', $.Nullable<$Scalar.String>, null>
    name: $.OutputField<'name', $Scalar.String, null>
  }>

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

  export type ContinentFilterInput = $.InputObject<'ContinentFilterInput', {
    code: $.InputField<$.Nullable<StringQueryOperatorInput>>
  }, true>

  export type CountryFilterInput = $.InputObject<'CountryFilterInput', {
    code: $.InputField<$.Nullable<StringQueryOperatorInput>>
    continent: $.InputField<$.Nullable<StringQueryOperatorInput>>
    currency: $.InputField<$.Nullable<StringQueryOperatorInput>>
    name: $.InputField<$.Nullable<StringQueryOperatorInput>>
  }, true>

  export type LanguageFilterInput = $.InputObject<'LanguageFilterInput', {
    code: $.InputField<$.Nullable<StringQueryOperatorInput>>
  }, true>

  export type StringQueryOperatorInput = $.InputObject<'StringQueryOperatorInput', {
    eq: $.InputField<$.Nullable<$Scalar.String>>
    in: $.InputField<$.Nullable<$.List<$Scalar.String>>>
    ne: $.InputField<$.Nullable<$Scalar.String>>
    nin: $.InputField<$.Nullable<$.List<$Scalar.String>>>
    regex: $.InputField<$.Nullable<$Scalar.String>>
  }, true>

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

  // -- no types --

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

  // -- no types --

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

  // -- no types --
}

//
//
//
//
//
//
// ==================================================================================================
//                                               Schema
// ==================================================================================================
//
//
//
//
//
//
export interface Schema<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> extends $$Utilities.Schema {
  name: Data.Name
  RootTypesPresent: ['Query']
  RootUnion: Schema.Query
  Root: {
    Query: Schema.Query
    Mutation: null
    Subscription: null
  }
  allTypes: {
    Query: Schema.Query
    Continent: Schema.Continent
    Country: Schema.Country
    Language: Schema.Language
    State: Schema.State
    Subdivision: Schema.Subdivision
  }
  objects: {
    Continent: Schema.Continent
    Country: Schema.Country
    Language: Schema.Language
    State: Schema.State
    Subdivision: Schema.Subdivision
  }
  unions: {}
  interfaces: {}
  scalars: $Scalars
  extensions: $$Utilities.GlobalRegistry.TypeExtensions
}
