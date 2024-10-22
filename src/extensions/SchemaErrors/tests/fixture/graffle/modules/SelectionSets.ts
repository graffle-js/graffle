import type { Select as $Select } from '../../../../../../entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../entrypoints/utilities-for-generated.js'
import type * as $Scalar from './Scalar.js'

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
export interface $Document<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> {
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
//                                                Root
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
// ROOT
// --------------------------------------------------------------------------------------------------
//                                              Mutation
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Mutation<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> {
  /**
   * Select the `id` field on the `Mutation` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Mutation.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Mutation.id<$Scalars>>
  /**
   * Select the `idNonNull` field on the `Mutation` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  idNonNull?: Mutation.idNonNull$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Mutation.idNonNull<$Scalars>>

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

export interface Mutation$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends Mutation<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Mutation {
  export type id<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type idNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<$Scalars>

  export interface idNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `idNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type idNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// ROOT
// --------------------------------------------------------------------------------------------------
//                                               Query
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Query<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> {
  /**
   * Select the `InputObjectNested` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  InputObjectNested?:
    | Query.InputObjectNested$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.InputObjectNested<$Scalars>>
  /**
   * Select the `InputObjectNestedNonNull` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  InputObjectNestedNonNull?:
    | Query.InputObjectNestedNonNull<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.InputObjectNestedNonNull<$Scalars>>
  /**
   * Select the `abcEnum` field on the `Query` object. Its type is `ABCEnum` (a `Enum` kind of type).
   */
  abcEnum?: Query.abcEnum$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.abcEnum<$Scalars>>
  /**
   * Select the `argInputObjectCircular` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  argInputObjectCircular?:
    | Query.argInputObjectCircular$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.argInputObjectCircular<$Scalars>>
  /**
   * Select the `date` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  date?: Query.date$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.date<$Scalars>>
  /**
   * Select the `dateArg` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArg?: Query.dateArg$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.dateArg<$Scalars>>
  /**
   * Select the `dateArgInputObject` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgInputObject?:
    | Query.dateArgInputObject$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.dateArgInputObject<$Scalars>>
  /**
   * Select the `dateArgList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgList?: Query.dateArgList$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.dateArgList<$Scalars>>
  /**
   * Select the `dateArgNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgNonNull?: Query.dateArgNonNull<$Scalars> | $Select.SelectAlias.SelectAlias<Query.dateArgNonNull<$Scalars>>
  /**
   * Select the `dateArgNonNullList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgNonNullList?:
    | Query.dateArgNonNullList<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.dateArgNonNullList<$Scalars>>
  /**
   * Select the `dateArgNonNullListNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgNonNullListNonNull?:
    | Query.dateArgNonNullListNonNull<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.dateArgNonNullListNonNull<$Scalars>>
  /**
   * Select the `dateInterface1` field on the `Query` object. Its type is `DateInterface1` (a `Interface` kind of type).
   */
  dateInterface1?:
    | Query.dateInterface1$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.dateInterface1<$Scalars>>
  /**
   * Select the `dateList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateList?: Query.dateList$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.dateList<$Scalars>>
  /**
   * Select the `dateListList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateListList?: Query.dateListList$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.dateListList<$Scalars>>
  /**
   * Select the `dateListNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateListNonNull?:
    | Query.dateListNonNull$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.dateListNonNull<$Scalars>>
  /**
   * Select the `dateNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateNonNull?: Query.dateNonNull$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.dateNonNull<$Scalars>>
  /**
   * Select the `dateObject1` field on the `Query` object. Its type is `DateObject1` (a `OutputObject` kind of type).
   */
  dateObject1?: Query.dateObject1$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.dateObject1<$Scalars>>
  /**
   * Select the `dateUnion` field on the `Query` object. Its type is `DateUnion` (a `Union` kind of type).
   */
  dateUnion?: Query.dateUnion$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.dateUnion<$Scalars>>
  /**
   * Select the `error` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  error?: Query.error$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.error<$Scalars>>
  /**
   * Select the `id` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Query.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.id<$Scalars>>
  /**
   * Select the `idNonNull` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  idNonNull?: Query.idNonNull$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.idNonNull<$Scalars>>
  /**
   * Select the `interface` field on the `Query` object. Its type is `Interface` (a `Interface` kind of type).
   */
  interface?: Query.$interface$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.$interface<$Scalars>>
  /**
   * Select the `interfaceNonNull` field on the `Query` object. Its type is `Interface` (a `Interface` kind of type).
   */
  interfaceNonNull?:
    | Query.interfaceNonNull$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.interfaceNonNull<$Scalars>>
  /**
   * Select the `interfaceWithArgs` field on the `Query` object. Its type is `Interface` (a `Interface` kind of type).
   */
  interfaceWithArgs?:
    | Query.interfaceWithArgs<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.interfaceWithArgs<$Scalars>>
  /**
   * Select the `listInt` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listInt?: Query.listInt$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.listInt<$Scalars>>
  /**
   * Select the `listIntNonNull` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listIntNonNull?:
    | Query.listIntNonNull$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.listIntNonNull<$Scalars>>
  /**
   * Select the `listListInt` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listListInt?: Query.listListInt$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.listListInt<$Scalars>>
  /**
   * Select the `listListIntNonNull` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listListIntNonNull?:
    | Query.listListIntNonNull$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.listListIntNonNull<$Scalars>>
  /**
   * Select the `lowerCaseUnion` field on the `Query` object. Its type is `lowerCaseUnion` (a `Union` kind of type).
   */
  lowerCaseUnion?:
    | Query.lowerCaseUnion$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.lowerCaseUnion<$Scalars>>
  /**
   * Select the `object` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  object?: Query.$object$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.$object<$Scalars>>
  /**
   * Select the `objectList` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectList?: Query.objectList$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.objectList<$Scalars>>
  /**
   * Select the `objectListNonNull` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectListNonNull?:
    | Query.objectListNonNull$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.objectListNonNull<$Scalars>>
  /**
   * Select the `objectNested` field on the `Query` object. Its type is `ObjectNested` (a `OutputObject` kind of type).
   */
  objectNested?: Query.objectNested$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.objectNested<$Scalars>>
  /**
   * Select the `objectNonNull` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectNonNull?:
    | Query.objectNonNull$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.objectNonNull<$Scalars>>
  /**
   * Select the `objectWithArgs` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectWithArgs?:
    | Query.objectWithArgs$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.objectWithArgs<$Scalars>>
  /**
   * Select the `result` field on the `Query` object. Its type is `Result` (a `Union` kind of type).
   */
  result?: Query.result<$Scalars> | $Select.SelectAlias.SelectAlias<Query.result<$Scalars>>
  /**
   * Select the `resultNonNull` field on the `Query` object. Its type is `Result` (a `Union` kind of type).
   */
  resultNonNull?:
    | Query.resultNonNull$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.resultNonNull<$Scalars>>
  /**
   * Select the `string` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  string?: Query.$string$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.$string<$Scalars>>
  /**
   * Select the `stringWithArgEnum` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgEnum?:
    | Query.stringWithArgEnum$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.stringWithArgEnum<$Scalars>>
  /**
   * Select the `stringWithArgInputObject` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgInputObject?:
    | Query.stringWithArgInputObject$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.stringWithArgInputObject<$Scalars>>
  /**
   * Select the `stringWithArgInputObjectRequired` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgInputObjectRequired?:
    | Query.stringWithArgInputObjectRequired<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.stringWithArgInputObjectRequired<$Scalars>>
  /**
   * Select the `stringWithArgs` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgs?:
    | Query.stringWithArgs$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.stringWithArgs<$Scalars>>
  /**
   * Select the `stringWithListArg` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithListArg?:
    | Query.stringWithListArg$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.stringWithListArg<$Scalars>>
  /**
   * Select the `stringWithListArgRequired` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithListArgRequired?:
    | Query.stringWithListArgRequired<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.stringWithListArgRequired<$Scalars>>
  /**
   * Select the `stringWithRequiredArg` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithRequiredArg?:
    | Query.stringWithRequiredArg<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.stringWithRequiredArg<$Scalars>>
  /**
   * Select the `unionFooBar` field on the `Query` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  unionFooBar?: Query.unionFooBar$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.unionFooBar<$Scalars>>
  /**
   * Select the `unionFooBarNonNull` field on the `Query` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  unionFooBarNonNull?:
    | Query.unionFooBarNonNull$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.unionFooBarNonNull<$Scalars>>
  /**
   * Select the `unionFooBarWithArgs` field on the `Query` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  unionFooBarWithArgs?:
    | Query.unionFooBarWithArgs$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.unionFooBarWithArgs<$Scalars>>
  /**
   * Select the `unionObject` field on the `Query` object. Its type is `ObjectUnion` (a `OutputObject` kind of type).
   */
  unionObject?: Query.unionObject$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Query.unionObject<$Scalars>>
  /**
   * Select the `unionObjectNonNull` field on the `Query` object. Its type is `ObjectUnion` (a `OutputObject` kind of type).
   */
  unionObjectNonNull?:
    | Query.unionObjectNonNull$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Query.unionObjectNonNull<$Scalars>>

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

export interface Query$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends Query<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Query {
  export type InputObjectNested<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | InputObjectNested$SelectionSet<$Scalars>

  export interface InputObjectNested$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `InputObjectNested` field. No arguments are required so you may omit this.
     */
    $?: InputObjectNested$Arguments<$Scalars>
  }

  export interface InputObjectNested$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    input?: $NamedTypes.$InputObjectNested<$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `InputObjectNested` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type InputObjectNested$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      | $Select.Indicator.NoArgsIndicator
      | InputObjectNested$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type InputObjectNestedNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    InputObjectNestedNonNull$SelectionSet<$Scalars>

  export interface InputObjectNestedNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `InputObjectNestedNonNull` field. All arguments are required so you must include this.
     */
    $: InputObjectNestedNonNull$Arguments<$Scalars>
  }

  export interface InputObjectNestedNonNull$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    input: $NamedTypes.$InputObjectNestedNonNull<$Scalars>
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `InputObjectNestedNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type InputObjectNestedNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      InputObjectNestedNonNull$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type abcEnum<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | abcEnum$SelectionSet<$Scalars>

  export interface abcEnum$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `abcEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type abcEnum$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | abcEnum$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type argInputObjectCircular<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | argInputObjectCircular$SelectionSet<$Scalars>

  export interface argInputObjectCircular$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `argInputObjectCircular` field. No arguments are required so you may omit this.
     */
    $?: argInputObjectCircular$Arguments<$Scalars>
  }

  export interface argInputObjectCircular$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    input?: $NamedTypes.$InputObjectCircular<$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `argInputObjectCircular` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type argInputObjectCircular$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      | $Select.Indicator.NoArgsIndicator
      | argInputObjectCircular$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type date<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<$Scalars>

  export interface date$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | date$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArg<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | dateArg$SelectionSet<$Scalars>

  export interface dateArg$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `dateArg` field. No arguments are required so you may omit this.
     */
    $?: dateArg$Arguments<$Scalars>
  }

  export interface dateArg$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    date?:
      | $$Utilities.Schema.Scalar.GetDecoded<
        $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', $Scalars>
      >
      | undefined
      | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArg` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArg$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | dateArg$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgInputObject<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | dateArgInputObject$SelectionSet<$Scalars>

  export interface dateArgInputObject$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `dateArgInputObject` field. No arguments are required so you may omit this.
     */
    $?: dateArgInputObject$Arguments<$Scalars>
  }

  export interface dateArgInputObject$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    input?: $NamedTypes.$InputObject<$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgInputObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgInputObject$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      | $Select.Indicator.NoArgsIndicator
      | dateArgInputObject$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type dateArgList<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | dateArgList$SelectionSet<$Scalars>

  export interface dateArgList$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `dateArgList` field. No arguments are required so you may omit this.
     */
    $?: dateArgList$Arguments<$Scalars>
  }

  export interface dateArgList$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    date?:
      | Array<
        | $$Utilities.Schema.Scalar.GetDecoded<
          $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', $Scalars>
        >
        | undefined
        | null
      >
      | undefined
      | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgList$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | dateArgList$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = dateArgNonNull$SelectionSet<
    $Scalars
  >

  export interface dateArgNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `dateArgNonNull` field. All arguments are required so you must include this.
     */
    $: dateArgNonNull$Arguments<$Scalars>
  }

  export interface dateArgNonNull$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    date: $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', $Scalars>
    >
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    dateArgNonNull$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgNonNullList<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    dateArgNonNullList$SelectionSet<$Scalars>

  export interface dateArgNonNullList$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `dateArgNonNullList` field. All arguments are required so you must include this.
     */
    $: dateArgNonNullList$Arguments<$Scalars>
  }

  export interface dateArgNonNullList$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    date: Array<
      | $$Utilities.Schema.Scalar.GetDecoded<
        $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', $Scalars>
      >
      | undefined
      | null
    >
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgNonNullList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgNonNullList$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      dateArgNonNullList$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type dateArgNonNullListNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    dateArgNonNullListNonNull$SelectionSet<$Scalars>

  export interface dateArgNonNullListNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `dateArgNonNullListNonNull` field. All arguments are required so you must include this.
     */
    $: dateArgNonNullListNonNull$Arguments<$Scalars>
  }

  export interface dateArgNonNullListNonNull$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    date: Array<
      | $$Utilities.Schema.Scalar.GetDecoded<
        $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', $Scalars>
      >
      | undefined
      | null
    >
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgNonNullListNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgNonNullListNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      dateArgNonNullListNonNull$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type dateInterface1<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = dateInterface1$SelectionSet<
    $Scalars
  >

  export interface dateInterface1$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$DateInterface1<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateInterface1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateInterface1$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    dateInterface1$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateList<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | dateList$SelectionSet<$Scalars>

  export interface dateList$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateList$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | dateList$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateListList<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | dateListList$SelectionSet<$Scalars>

  export interface dateListList$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateListList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateListList$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | dateListList$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateListNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | dateListNonNull$SelectionSet<$Scalars>

  export interface dateListNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateListNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateListNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      | $Select.Indicator.NoArgsIndicator
      | dateListNonNull$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type dateNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | dateNonNull$SelectionSet<$Scalars>

  export interface dateNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | dateNonNull$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateObject1<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = dateObject1$SelectionSet<
    $Scalars
  >

  export interface dateObject1$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$DateObject1<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateObject1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateObject1$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    dateObject1$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateUnion<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = dateUnion$SelectionSet<$Scalars>

  export interface dateUnion$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$DateUnion<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateUnion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateUnion$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    dateUnion$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type error<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | error$SelectionSet<$Scalars>

  export interface error$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `error` field. No arguments are required so you may omit this.
     */
    $?: error$Arguments<$Scalars>
  }

  export interface error$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    case?: string | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `error` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type error$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | error$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type idNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<$Scalars>

  export interface idNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `idNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type idNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $interface<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $interface$SelectionSet<$Scalars>

  export interface $interface$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Interface<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$interface` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $interface$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    $interface$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    interfaceNonNull$SelectionSet<$Scalars>

  export interface interfaceNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Interface<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      interfaceNonNull$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type interfaceWithArgs<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    interfaceWithArgs$SelectionSet<$Scalars>

  export interface interfaceWithArgs$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Interface<$Scalars>
  {
    /**
     * Arguments for `interfaceWithArgs` field. All arguments are required so you must include this.
     */
    $: interfaceWithArgs$Arguments<$Scalars>
  }

  export interface interfaceWithArgs$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    id: string
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceWithArgs$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      interfaceWithArgs$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type listInt<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | listInt$SelectionSet<$Scalars>

  export interface listInt$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listInt` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listInt$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | listInt$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type listIntNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | listIntNonNull$SelectionSet<$Scalars>

  export interface listIntNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listIntNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listIntNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | listIntNonNull$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type listListInt<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | listListInt$SelectionSet<$Scalars>

  export interface listListInt$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listListInt` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listListInt$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | listListInt$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type listListIntNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | listListIntNonNull$SelectionSet<$Scalars>

  export interface listListIntNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listListIntNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listListIntNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      | $Select.Indicator.NoArgsIndicator
      | listListIntNonNull$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type lowerCaseUnion<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = lowerCaseUnion$SelectionSet<
    $Scalars
  >

  export interface lowerCaseUnion$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$lowerCaseUnion<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `lowerCaseUnion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type lowerCaseUnion$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    lowerCaseUnion$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $object<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $object$SelectionSet<$Scalars>

  export interface $object$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Object1<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$object` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $object$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    $object$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectList<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = objectList$SelectionSet<$Scalars>

  export interface objectList$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Object1<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectList$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    objectList$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectListNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    objectListNonNull$SelectionSet<$Scalars>

  export interface objectListNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Object1<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectListNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectListNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      objectListNonNull$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type objectNested<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = objectNested$SelectionSet<
    $Scalars
  >

  export interface objectNested$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$ObjectNested<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectNested` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectNested$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    objectNested$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = objectNonNull$SelectionSet<
    $Scalars
  >

  export interface objectNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Object1<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    objectNonNull$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectWithArgs<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = objectWithArgs$SelectionSet<
    $Scalars
  >

  export interface objectWithArgs$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Object1<$Scalars>
  {
    /**
     * Arguments for `objectWithArgs` field. No arguments are required so you may omit this.
     */
    $?: objectWithArgs$Arguments<$Scalars>
  }

  export interface objectWithArgs$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    boolean?: boolean | undefined | null

    float?: number | undefined | null

    id?: string | undefined | null

    int?: number | undefined | null

    string?: string | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectWithArgs$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    objectWithArgs$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type result<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = result$SelectionSet<$Scalars>

  export interface result$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Result<$Scalars>
  {
    /**
     * Arguments for `result` field. All arguments are required so you must include this.
     */
    $: result$Arguments<$Scalars>
  }

  export interface result$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    $case: $NamedTypes.$Case
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `result` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type result$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    result$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type resultNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = resultNonNull$SelectionSet<
    $Scalars
  >

  export interface resultNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Result<$Scalars>
  {
    /**
     * Arguments for `resultNonNull` field. No arguments are required so you may omit this.
     */
    $?: resultNonNull$Arguments<$Scalars>
  }

  export interface resultNonNull$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    $case?: $NamedTypes.$Case | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `resultNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type resultNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    resultNonNull$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $string<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<$Scalars>

  export interface $string$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$string` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $string$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgEnum<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | stringWithArgEnum$SelectionSet<$Scalars>

  export interface stringWithArgEnum$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `stringWithArgEnum` field. No arguments are required so you may omit this.
     */
    $?: stringWithArgEnum$Arguments<$Scalars>
  }

  export interface stringWithArgEnum$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    $ABCEnum?: $NamedTypes.$ABCEnum | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgEnum$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      | $Select.Indicator.NoArgsIndicator
      | stringWithArgEnum$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgInputObject<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | stringWithArgInputObject$SelectionSet<$Scalars>

  export interface stringWithArgInputObject$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `stringWithArgInputObject` field. No arguments are required so you may omit this.
     */
    $?: stringWithArgInputObject$Arguments<$Scalars>
  }

  export interface stringWithArgInputObject$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    input?: $NamedTypes.$InputObject<$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgInputObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgInputObject$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      | $Select.Indicator.NoArgsIndicator
      | stringWithArgInputObject$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgInputObjectRequired<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    stringWithArgInputObjectRequired$SelectionSet<$Scalars>

  export interface stringWithArgInputObjectRequired$SelectionSet<
    $Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {},
  > extends $Select.Bases.Base {
    /**
     * Arguments for `stringWithArgInputObjectRequired` field. All arguments are required so you must include this.
     */
    $: stringWithArgInputObjectRequired$Arguments<$Scalars>
  }

  export interface stringWithArgInputObjectRequired$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    input: $NamedTypes.$InputObject<$Scalars>
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgInputObjectRequired` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgInputObjectRequired$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      stringWithArgInputObjectRequired$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgs<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | stringWithArgs$SelectionSet<$Scalars>

  export interface stringWithArgs$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `stringWithArgs` field. No arguments are required so you may omit this.
     */
    $?: stringWithArgs$Arguments<$Scalars>
  }

  export interface stringWithArgs$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    boolean?: boolean | undefined | null

    float?: number | undefined | null

    id?: string | undefined | null
    /**
     * @deprecated Example of argument deprecation reason here.
     */
    int?: number | undefined | null
    /**
     * Example of some argument documentation here.
     */
    string?: string | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgs$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | stringWithArgs$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithListArg<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | stringWithListArg$SelectionSet<$Scalars>

  export interface stringWithListArg$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `stringWithListArg` field. No arguments are required so you may omit this.
     */
    $?: stringWithListArg$Arguments<$Scalars>
  }

  export interface stringWithListArg$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    ints?: Array<number | undefined | null> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithListArg` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithListArg$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      | $Select.Indicator.NoArgsIndicator
      | stringWithListArg$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type stringWithListArgRequired<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    stringWithListArgRequired$SelectionSet<$Scalars>

  export interface stringWithListArgRequired$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `stringWithListArgRequired` field. All arguments are required so you must include this.
     */
    $: stringWithListArgRequired$Arguments<$Scalars>
  }

  export interface stringWithListArgRequired$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    ints: Array<number | undefined | null>
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithListArgRequired` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithListArgRequired$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      stringWithListArgRequired$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type stringWithRequiredArg<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    stringWithRequiredArg$SelectionSet<$Scalars>

  export interface stringWithRequiredArg$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    /**
     * Arguments for `stringWithRequiredArg` field. All arguments are required so you must include this.
     */
    $: stringWithRequiredArg$Arguments<$Scalars>
  }

  export interface stringWithRequiredArg$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    string: string
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithRequiredArg` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithRequiredArg$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      stringWithRequiredArg$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type unionFooBar<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = unionFooBar$SelectionSet<
    $Scalars
  >

  export interface unionFooBar$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$FooBarUnion<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionFooBar` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionFooBar$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    unionFooBar$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionFooBarNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    unionFooBarNonNull$SelectionSet<$Scalars>

  export interface unionFooBarNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$FooBarUnion<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionFooBarNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionFooBarNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      unionFooBarNonNull$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type unionFooBarWithArgs<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    unionFooBarWithArgs$SelectionSet<$Scalars>

  export interface unionFooBarWithArgs$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$FooBarUnion<$Scalars>
  {
    /**
     * Arguments for `unionFooBarWithArgs` field. No arguments are required so you may omit this.
     */
    $?: unionFooBarWithArgs$Arguments<$Scalars>
  }

  export interface unionFooBarWithArgs$Arguments<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {
    id?: string | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionFooBarWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionFooBarWithArgs$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      unionFooBarWithArgs$SelectionSet<$Scalars>
    >

  // --------------------------------------------------------------------------------------------------

  export type unionObject<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = unionObject$SelectionSet<
    $Scalars
  >

  export interface unionObject$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$ObjectUnion<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionObject$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    unionObject$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionObjectNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    unionObjectNonNull$SelectionSet<$Scalars>

  export interface unionObjectNonNull$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$ObjectUnion<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionObjectNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionObjectNonNull$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    $$Utilities.Simplify<
      unionObjectNonNull$SelectionSet<$Scalars>
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
 * Enum documentation.
 *
 * Members
 * "A" - (DEPRECATED: Enum value A is deprecated.)
 * "B" - Enum B member documentation.
 * "C" - (DEPRECATED: Enum value C is deprecated.)
 */
export type ABCEnum = 'A' | 'B' | 'C'

export type Case = 'ErrorOne' | 'ErrorTwo' | 'Object1'

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

export interface InputObject<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> {
  date?:
    | $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', $Scalars>
    >
    | undefined
    | null

  dateRequired: $$Utilities.Schema.Scalar.GetDecoded<
    $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', $Scalars>
  >

  id?: string | undefined | null

  idRequired: string
}

export interface InputObjectCircular<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> {
  circular?: $NamedTypes.$InputObjectCircular<$Scalars> | undefined | null

  date?:
    | $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', $Scalars>
    >
    | undefined
    | null
}

export interface InputObjectNested<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> {
  InputObject?: $NamedTypes.$InputObject<$Scalars> | undefined | null
}

export interface InputObjectNestedNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> {
  InputObject: $NamedTypes.$InputObject<$Scalars>
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

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                                Bar
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Bar<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> extends $Select.Bases.ObjectLike {
  /**
   * Select the `int` field on the `Bar` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?: Bar.int$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Bar.int<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Bar$FragmentInline<$Scalars>
    | Bar$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Bar$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends Bar<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Bar {
  export type int<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | int$SelectionSet<$Scalars>

  export interface int$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | int$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                            DateObject1
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface DateObject1<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `date1` field on the `DateObject1` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  date1?: DateObject1.date1$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<DateObject1.date1<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateObject1$FragmentInline<$Scalars>
    | DateObject1$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface DateObject1$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends DateObject1<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace DateObject1 {
  export type date1<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<$Scalars>

  export interface date1$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date1$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                            DateObject2
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface DateObject2<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `date2` field on the `DateObject2` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  date2?: DateObject2.date2$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<DateObject2.date2<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateObject2$FragmentInline<$Scalars>
    | DateObject2$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface DateObject2$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends DateObject2<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace DateObject2 {
  export type date2<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | date2$SelectionSet<$Scalars>

  export interface date2$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date2` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date2$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | date2$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                              ErrorOne
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface ErrorOne<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> extends $Select.Bases.ObjectLike {
  /**
   * Select the `infoId` field on the `ErrorOne` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  infoId?: ErrorOne.infoId$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<ErrorOne.infoId<$Scalars>>
  /**
   * Select the `message` field on the `ErrorOne` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  message?: ErrorOne.message$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<ErrorOne.message<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ErrorOne$FragmentInline<$Scalars>
    | ErrorOne$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface ErrorOne$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends ErrorOne<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace ErrorOne {
  export type infoId<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | infoId$SelectionSet<$Scalars>

  export interface infoId$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `infoId` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type infoId$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | infoId$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type message<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | message$SelectionSet<$Scalars>

  export interface message$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `message` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type message$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | message$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                              ErrorTwo
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface ErrorTwo<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> extends $Select.Bases.ObjectLike {
  /**
   * Select the `infoInt` field on the `ErrorTwo` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  infoInt?: ErrorTwo.infoInt$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<ErrorTwo.infoInt<$Scalars>>
  /**
   * Select the `message` field on the `ErrorTwo` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  message?: ErrorTwo.message$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<ErrorTwo.message<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ErrorTwo$FragmentInline<$Scalars>
    | ErrorTwo$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface ErrorTwo$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends ErrorTwo<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace ErrorTwo {
  export type infoInt<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | infoInt$SelectionSet<$Scalars>

  export interface infoInt$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `infoInt` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type infoInt$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | infoInt$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type message<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | message$SelectionSet<$Scalars>

  export interface message$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `message` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type message$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | message$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                                Foo
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

/**
 * Object documentation.
 */
export interface Foo<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> extends $Select.Bases.ObjectLike {
  /**
   * Select the `id` field on the `Foo` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Foo.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Foo.id<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Foo$FragmentInline<$Scalars>
    | Foo$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Foo$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends Foo<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Foo {
  export type id<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                              Object1
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Object1<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> extends $Select.Bases.ObjectLike {
  /**
   * Select the `ABCEnum` field on the `Object1` object. Its type is `ABCEnum` (a `Enum` kind of type).
   */
  ABCEnum?: Object1.ABCEnum$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Object1.ABCEnum<$Scalars>>
  /**
   * Select the `boolean` field on the `Object1` object. Its type is `Boolean` (a `ScalarStandard` kind of type).
   */
  boolean?: Object1.$boolean$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Object1.$boolean<$Scalars>>
  /**
   * Select the `float` field on the `Object1` object. Its type is `Float` (a `ScalarStandard` kind of type).
   */
  float?: Object1.float$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Object1.float<$Scalars>>
  /**
   * Select the `id` field on the `Object1` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Object1.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Object1.id<$Scalars>>
  /**
   * Select the `int` field on the `Object1` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?: Object1.int$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Object1.int<$Scalars>>
  /**
   * Select the `string` field on the `Object1` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  string?: Object1.$string$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<Object1.$string<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Object1$FragmentInline<$Scalars>
    | Object1$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Object1$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends Object1<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Object1 {
  export type ABCEnum<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | ABCEnum$SelectionSet<$Scalars>

  export interface ABCEnum$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `ABCEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type ABCEnum$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | ABCEnum$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $boolean<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<$Scalars>

  export interface $boolean$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$boolean` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $boolean$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type float<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | float$SelectionSet<$Scalars>

  export interface float$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `float` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type float$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | float$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type int<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | int$SelectionSet<$Scalars>

  export interface int$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | int$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $string<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<$Scalars>

  export interface $string$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$string` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $string$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                    Object1ImplementingInterface
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Object1ImplementingInterface<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `id` field on the `Object1ImplementingInterface` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Object1ImplementingInterface.id$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Object1ImplementingInterface.id<$Scalars>>
  /**
   * Select the `int` field on the `Object1ImplementingInterface` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?:
    | Object1ImplementingInterface.int$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Object1ImplementingInterface.int<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Object1ImplementingInterface$FragmentInline<$Scalars>
    | Object1ImplementingInterface$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Object1ImplementingInterface$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends Object1ImplementingInterface<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Object1ImplementingInterface {
  export type id<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type int<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | int$SelectionSet<$Scalars>

  export interface int$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | int$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                    Object2ImplementingInterface
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface Object2ImplementingInterface<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `boolean` field on the `Object2ImplementingInterface` object. Its type is `Boolean` (a `ScalarStandard` kind of type).
   */
  boolean?:
    | Object2ImplementingInterface.$boolean$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Object2ImplementingInterface.$boolean<$Scalars>>
  /**
   * Select the `id` field on the `Object2ImplementingInterface` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Object2ImplementingInterface.id$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<Object2ImplementingInterface.id<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Object2ImplementingInterface$FragmentInline<$Scalars>
    | Object2ImplementingInterface$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Object2ImplementingInterface$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends Object2ImplementingInterface<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace Object2ImplementingInterface {
  export type $boolean<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<$Scalars>

  export interface $boolean$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$boolean` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $boolean$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                            ObjectNested
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectNested<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `id` field on the `ObjectNested` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: ObjectNested.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<ObjectNested.id<$Scalars>>
  /**
   * Select the `object` field on the `ObjectNested` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  object?: ObjectNested.$object$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<ObjectNested.$object<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectNested$FragmentInline<$Scalars>
    | ObjectNested$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface ObjectNested$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends ObjectNested<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace ObjectNested {
  export type id<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $object<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $object$SelectionSet<$Scalars>

  export interface $object$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$Object1<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$object` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $object$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    $object$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                            ObjectUnion
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectUnion<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `fooBarUnion` field on the `ObjectUnion` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  fooBarUnion?:
    | ObjectUnion.fooBarUnion$Expanded<$Scalars>
    | $Select.SelectAlias.SelectAlias<ObjectUnion.fooBarUnion<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectUnion$FragmentInline<$Scalars>
    | ObjectUnion$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface ObjectUnion$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends ObjectUnion<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace ObjectUnion {
  export type fooBarUnion<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = fooBarUnion$SelectionSet<
    $Scalars
  >

  export interface fooBarUnion$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base, $NamedTypes.$FooBarUnion<$Scalars>
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `fooBarUnion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type fooBarUnion$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    fooBarUnion$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                          lowerCaseObject
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface lowerCaseObject<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `id` field on the `lowerCaseObject` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: lowerCaseObject.id$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<lowerCaseObject.id<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | lowerCaseObject$FragmentInline<$Scalars>
    | lowerCaseObject$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface lowerCaseObject$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends lowerCaseObject<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace lowerCaseObject {
  export type id<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
  >
}

//
//
//
//
// GRAPHQL SELECTION SET
// OUTPUTOBJECT
// --------------------------------------------------------------------------------------------------
//                                          lowerCaseObject2
// --------------------------------------------------------------------------------------------------
//
//

// ----------------------------------------| Entrypoint Interface |

export interface lowerCaseObject2<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  /**
   * Select the `int` field on the `lowerCaseObject2` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?: lowerCaseObject2.int$Expanded<$Scalars> | $Select.SelectAlias.SelectAlias<lowerCaseObject2.int<$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | lowerCaseObject2$FragmentInline<$Scalars>
    | lowerCaseObject2$FragmentInline<$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface lowerCaseObject2$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends lowerCaseObject2<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

// ----------------------------------------| Fields |

export namespace lowerCaseObject2 {
  export type int<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | int$SelectionSet<$Scalars>

  export interface int$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | int$SelectionSet<$Scalars>
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

export interface DateUnion<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> {
  ___on_DateObject1?: DateObject1<$Scalars>
  ___on_DateObject2?: DateObject2<$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateUnion$FragmentInline<$Scalars>
    | DateUnion$FragmentInline<$Scalars>[]

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
export interface DateUnion$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends DateUnion<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

/**
 * Union documentation.
 */
export interface FooBarUnion<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> {
  ___on_Bar?: Bar<$Scalars>
  ___on_Foo?: Foo<$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | FooBarUnion$FragmentInline<$Scalars>
    | FooBarUnion$FragmentInline<$Scalars>[]

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
export interface FooBarUnion$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends FooBarUnion<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

export interface Result<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> {
  ___on_ErrorOne?: ErrorOne<$Scalars>
  ___on_ErrorTwo?: ErrorTwo<$Scalars>
  ___on_Object1?: Object1<$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Result$FragmentInline<$Scalars>
    | Result$FragmentInline<$Scalars>[]

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
export interface Result$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends Result<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

export interface lowerCaseUnion<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> {
  ___on_lowerCaseObject?: lowerCaseObject<$Scalars>
  ___on_lowerCaseObject2?: lowerCaseObject2<$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | lowerCaseUnion$FragmentInline<$Scalars>
    | lowerCaseUnion$FragmentInline<$Scalars>[]

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
export interface lowerCaseUnion$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends lowerCaseUnion<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

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

// Interface Type: DateInterface1
// --------------------------------------------------------------------------------------------------

export interface DateInterface1<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends $Select.Bases.ObjectLike
{
  date1?: DateInterface1.date1<$Scalars>
  ___on_DateObject1?: DateObject1<$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateInterface1$FragmentInline<$Scalars>
    | DateInterface1$FragmentInline<$Scalars>[]

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

export interface DateInterface1$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends DateInterface1<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

export namespace DateInterface1 {
  export type date1<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<$Scalars>

  export interface date1$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date1$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<$Scalars>
  >
}

// Interface Type: Error
// --------------------------------------------------------------------------------------------------

export interface Error<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> extends $Select.Bases.ObjectLike {
  message?: Error.message<$Scalars>
  ___on_ErrorOne?: ErrorOne<$Scalars>
  ___on_ErrorTwo?: ErrorTwo<$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Error$FragmentInline<$Scalars>
    | Error$FragmentInline<$Scalars>[]

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

export interface Error$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends Error<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

export namespace Error {
  export type message<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | message$SelectionSet<$Scalars>

  export interface message$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `message` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type message$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | message$SelectionSet<$Scalars>
  >
}

// Interface Type: Interface
// --------------------------------------------------------------------------------------------------

export interface Interface<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> extends $Select.Bases.ObjectLike {
  id?: Interface.id<$Scalars>
  ___on_Object1ImplementingInterface?: Object1ImplementingInterface<$Scalars>
  ___on_Object2ImplementingInterface?: Object2ImplementingInterface<$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Interface$FragmentInline<$Scalars>
    | Interface$FragmentInline<$Scalars>[]

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

export interface Interface$FragmentInline<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
  extends Interface<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields
{}

export namespace Interface {
  export type id<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>

  export interface id$SelectionSet<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}>
    extends $Select.Bases.Base
  {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<$Scalars>
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
  export type $Mutation<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = Mutation<$Scalars>
  export type $Query<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = Query<$Scalars>
  export type $ABCEnum = ABCEnum
  export type $Case = Case
  export type $InputObject<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = InputObject<$Scalars>
  export type $InputObjectCircular<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = InputObjectCircular<
    $Scalars
  >
  export type $InputObjectNested<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = InputObjectNested<
    $Scalars
  >
  export type $InputObjectNestedNonNull<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    InputObjectNestedNonNull<$Scalars>
  export type $Bar<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = Bar<$Scalars>
  export type $DateObject1<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = DateObject1<$Scalars>
  export type $DateObject2<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = DateObject2<$Scalars>
  export type $ErrorOne<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = ErrorOne<$Scalars>
  export type $ErrorTwo<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = ErrorTwo<$Scalars>
  export type $Foo<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = Foo<$Scalars>
  export type $Object1<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = Object1<$Scalars>
  export type $Object1ImplementingInterface<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    Object1ImplementingInterface<$Scalars>
  export type $Object2ImplementingInterface<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> =
    Object2ImplementingInterface<$Scalars>
  export type $ObjectNested<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = ObjectNested<$Scalars>
  export type $ObjectUnion<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = ObjectUnion<$Scalars>
  export type $lowerCaseObject<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = lowerCaseObject<$Scalars>
  export type $lowerCaseObject2<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = lowerCaseObject2<$Scalars>
  export type $DateUnion<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = DateUnion<$Scalars>
  export type $FooBarUnion<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = FooBarUnion<$Scalars>
  export type $Result<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = Result<$Scalars>
  export type $lowerCaseUnion<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = lowerCaseUnion<$Scalars>
  export type $DateInterface1<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = DateInterface1<$Scalars>
  export type $Error<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = Error<$Scalars>
  export type $Interface<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> = Interface<$Scalars>
}
