import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'

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
   * Select the `InputObjectNested` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  InputObjectNested?:
    | Query.InputObjectNested$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.InputObjectNested<_$Scalars>>
  /**
   * Select the `InputObjectNestedNonNull` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  InputObjectNestedNonNull?:
    | Query.InputObjectNestedNonNull<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.InputObjectNestedNonNull<_$Scalars>>
  /**
   * Select the `abcEnum` field on the `Query` object. Its type is `ABCEnum` (a `Enum` kind of type).
   */
  abcEnum?:
    | Query.abcEnum$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.abcEnum<_$Scalars>>
  /**
   * Select the `argInputObjectCircular` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  argInputObjectCircular?:
    | Query.argInputObjectCircular$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.argInputObjectCircular<_$Scalars>>
  /**
   * Select the `bigintField` field on the `Query` object. Its type is `bigint` (a `ScalarCustom` kind of type).
   */
  bigintField?:
    | Query.bigintField$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.bigintField<_$Scalars>>
  /**
   * Select the `bigintFieldNonNull` field on the `Query` object. Its type is `bigint` (a `ScalarCustom` kind of type).
   */
  bigintFieldNonNull?:
    | Query.bigintFieldNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.bigintFieldNonNull<_$Scalars>>
  /**
   * Select the `date` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  date?:
    | Query.date$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.date<_$Scalars>>
  /**
   * Select the `dateArg` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArg?:
    | Query.dateArg$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArg<_$Scalars>>
  /**
   * Select the `dateArgInputObject` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgInputObject?:
    | Query.dateArgInputObject$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArgInputObject<_$Scalars>>
  /**
   * Select the `dateArgList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgList?:
    | Query.dateArgList$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArgList<_$Scalars>>
  /**
   * Select the `dateArgNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgNonNull?:
    | Query.dateArgNonNull<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArgNonNull<_$Scalars>>
  /**
   * Select the `dateArgNonNullList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgNonNullList?:
    | Query.dateArgNonNullList<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArgNonNullList<_$Scalars>>
  /**
   * Select the `dateArgNonNullListNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgNonNullListNonNull?:
    | Query.dateArgNonNullListNonNull<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArgNonNullListNonNull<_$Scalars>>
  /**
   * Select the `dateInterface1` field on the `Query` object. Its type is `DateInterface1` (a `Interface` kind of type).
   */
  dateInterface1?:
    | Query.dateInterface1$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateInterface1<_$Scalars>>
  /**
   * Select the `dateList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateList?:
    | Query.dateList$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateList<_$Scalars>>
  /**
   * Select the `dateListList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateListList?:
    | Query.dateListList$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateListList<_$Scalars>>
  /**
   * Select the `dateListNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateListNonNull?:
    | Query.dateListNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateListNonNull<_$Scalars>>
  /**
   * Select the `dateNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateNonNull?:
    | Query.dateNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateNonNull<_$Scalars>>
  /**
   * Select the `dateObject1` field on the `Query` object. Its type is `DateObject1` (a `OutputObject` kind of type).
   */
  dateObject1?:
    | Query.dateObject1$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateObject1<_$Scalars>>
  /**
   * Select the `dateUnion` field on the `Query` object. Its type is `DateUnion` (a `Union` kind of type).
   */
  dateUnion?:
    | Query.dateUnion$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateUnion<_$Scalars>>
  /**
   * Select the `error` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  error?:
    | Query.error$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.error<_$Scalars>>
  /**
   * Select the `id` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Query.id$Expanded<_$Scalars> | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.id<_$Scalars>>
  /**
   * Select the `idNonNull` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  idNonNull?:
    | Query.idNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.idNonNull<_$Scalars>>
  /**
   * Select the `interface` field on the `Query` object. Its type is `Interface` (a `Interface` kind of type).
   */
  interface?:
    | Query.$interface$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.$interface<_$Scalars>>
  /**
   * Select the `interfaceHierarchyChildA` field on the `Query` object. Its type is `InterfaceChildA` (a `Interface` kind of type).
   */
  interfaceHierarchyChildA?:
    | Query.interfaceHierarchyChildA$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceHierarchyChildA<_$Scalars>>
  /**
   * Select the `interfaceHierarchyChildB` field on the `Query` object. Its type is `InterfaceChildB` (a `Interface` kind of type).
   */
  interfaceHierarchyChildB?:
    | Query.interfaceHierarchyChildB$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceHierarchyChildB<_$Scalars>>
  /**
   * Select the `interfaceHierarchyGrandparents` field on the `Query` object. Its type is `InterfaceGrandparent` (a `Interface` kind of type).
   */
  interfaceHierarchyGrandparents?:
    | Query.interfaceHierarchyGrandparents$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceHierarchyGrandparents<_$Scalars>>
  /**
   * Select the `interfaceHierarchyParents` field on the `Query` object. Its type is `InterfaceParent` (a `Interface` kind of type).
   */
  interfaceHierarchyParents?:
    | Query.interfaceHierarchyParents$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceHierarchyParents<_$Scalars>>
  /**
   * Select the `interfaceNonNull` field on the `Query` object. Its type is `Interface` (a `Interface` kind of type).
   */
  interfaceNonNull?:
    | Query.interfaceNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceNonNull<_$Scalars>>
  /**
   * Select the `interfaceWithArgs` field on the `Query` object. Its type is `Interface` (a `Interface` kind of type).
   */
  interfaceWithArgs?:
    | Query.interfaceWithArgs<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceWithArgs<_$Scalars>>
  /**
   * Select the `listInt` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listInt?:
    | Query.listInt$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.listInt<_$Scalars>>
  /**
   * Select the `listIntNonNull` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listIntNonNull?:
    | Query.listIntNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.listIntNonNull<_$Scalars>>
  /**
   * Select the `listListInt` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listListInt?:
    | Query.listListInt$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.listListInt<_$Scalars>>
  /**
   * Select the `listListIntNonNull` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listListIntNonNull?:
    | Query.listListIntNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.listListIntNonNull<_$Scalars>>
  /**
   * Select the `lowerCaseUnion` field on the `Query` object. Its type is `lowerCaseUnion` (a `Union` kind of type).
   */
  lowerCaseUnion?:
    | Query.lowerCaseUnion$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.lowerCaseUnion<_$Scalars>>
  /**
   * Select the `object` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  object?:
    | Query.$object$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.$object<_$Scalars>>
  /**
   * Select the `objectList` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectList?:
    | Query.objectList$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.objectList<_$Scalars>>
  /**
   * Select the `objectListNonNull` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectListNonNull?:
    | Query.objectListNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.objectListNonNull<_$Scalars>>
  /**
   * Select the `objectNested` field on the `Query` object. Its type is `ObjectNested` (a `OutputObject` kind of type).
   */
  objectNested?:
    | Query.objectNested$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.objectNested<_$Scalars>>
  /**
   * Select the `objectNonNull` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectNonNull?:
    | Query.objectNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.objectNonNull<_$Scalars>>
  /**
   * Select the `objectWithArgs` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectWithArgs?:
    | Query.objectWithArgs$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.objectWithArgs<_$Scalars>>
  /**
   * Select the `result` field on the `Query` object. Its type is `Result` (a `Union` kind of type).
   */
  result?:
    | Query.result<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.result<_$Scalars>>
  /**
   * Select the `resultNonNull` field on the `Query` object. Its type is `Result` (a `Union` kind of type).
   */
  resultNonNull?:
    | Query.resultNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.resultNonNull<_$Scalars>>
  /**
   * Select the `string` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  string?:
    | Query.$string$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.$string<_$Scalars>>
  /**
   * Select the `stringWithArgEnum` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgEnum?:
    | Query.stringWithArgEnum$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithArgEnum<_$Scalars>>
  /**
   * Select the `stringWithArgInputObject` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgInputObject?:
    | Query.stringWithArgInputObject$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithArgInputObject<_$Scalars>>
  /**
   * Select the `stringWithArgInputObjectEnum` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgInputObjectEnum?:
    | Query.stringWithArgInputObjectEnum<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithArgInputObjectEnum<_$Scalars>>
  /**
   * Select the `stringWithArgInputObjectRequired` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgInputObjectRequired?:
    | Query.stringWithArgInputObjectRequired<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithArgInputObjectRequired<_$Scalars>>
  /**
   * Select the `stringWithArgs` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgs?:
    | Query.stringWithArgs$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithArgs<_$Scalars>>
  /**
   * Select the `stringWithListArg` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithListArg?:
    | Query.stringWithListArg$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithListArg<_$Scalars>>
  /**
   * Select the `stringWithListArgRequired` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithListArgRequired?:
    | Query.stringWithListArgRequired<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithListArgRequired<_$Scalars>>
  /**
   * Select the `stringWithRequiredArg` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithRequiredArg?:
    | Query.stringWithRequiredArg<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithRequiredArg<_$Scalars>>
  /**
   * Select the `unionFooBar` field on the `Query` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  unionFooBar?:
    | Query.unionFooBar$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.unionFooBar<_$Scalars>>
  /**
   * Select the `unionFooBarNonNull` field on the `Query` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  unionFooBarNonNull?:
    | Query.unionFooBarNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.unionFooBarNonNull<_$Scalars>>
  /**
   * Select the `unionFooBarWithArgs` field on the `Query` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  unionFooBarWithArgs?:
    | Query.unionFooBarWithArgs$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.unionFooBarWithArgs<_$Scalars>>
  /**
   * Select the `unionObject` field on the `Query` object. Its type is `ObjectUnion` (a `OutputObject` kind of type).
   */
  unionObject?:
    | Query.unionObject$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.unionObject<_$Scalars>>
  /**
   * Select the `unionObjectNonNull` field on the `Query` object. Its type is `ObjectUnion` (a `OutputObject` kind of type).
   */
  unionObjectNonNull?:
    | Query.unionObjectNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.unionObjectNonNull<_$Scalars>>

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
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface Query$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Query<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Query {
  export type InputObjectNested<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | InputObjectNested$SelectionSet<_$Scalars>

  export interface InputObjectNested$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `InputObjectNested` field. No arguments are required so you may omit this.
     */
    $?: InputObjectNested$Arguments<_$Scalars>
  }

  export interface InputObjectNested$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    input?: $NamedTypes.$InputObjectNested<_$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `InputObjectNested` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type InputObjectNested$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | InputObjectNested$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type InputObjectNestedNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = InputObjectNestedNonNull$SelectionSet<_$Scalars>

  export interface InputObjectNestedNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `InputObjectNestedNonNull` field. All arguments are required so you must include this.
     */
    $: InputObjectNestedNonNull$Arguments<_$Scalars>
  }

  export interface InputObjectNestedNonNull$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    input: $NamedTypes.$InputObjectNestedNonNull<_$Scalars>
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `InputObjectNestedNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type InputObjectNestedNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    InputObjectNestedNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type abcEnum<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | abcEnum$SelectionSet<_$Scalars>

  export interface abcEnum$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `abcEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type abcEnum$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | abcEnum$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type argInputObjectCircular<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | argInputObjectCircular$SelectionSet<_$Scalars>

  export interface argInputObjectCircular$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `argInputObjectCircular` field. No arguments are required so you may omit this.
     */
    $?: argInputObjectCircular$Arguments<_$Scalars>
  }

  export interface argInputObjectCircular$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    input?: $NamedTypes.$InputObjectCircular<_$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `argInputObjectCircular` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type argInputObjectCircular$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | argInputObjectCircular$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type bigintField<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | bigintField$SelectionSet<_$Scalars>

  export interface bigintField$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `bigintField` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type bigintField$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | bigintField$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type bigintFieldNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | bigintFieldNonNull$SelectionSet<_$Scalars>

  export interface bigintFieldNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `bigintFieldNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type bigintFieldNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | bigintFieldNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type date<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Scalars>

  export interface date$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArg<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArg$SelectionSet<_$Scalars>

  export interface dateArg$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArg` field. No arguments are required so you may omit this.
     */
    $?: dateArg$Arguments<_$Scalars>
  }

  export interface dateArg$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    date?:
      | $$Utilities.Schema.Scalar.GetDecoded<
        $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', _$Scalars>
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
  export type dateArg$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArg$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgInputObject<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArgInputObject$SelectionSet<_$Scalars>

  export interface dateArgInputObject$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArgInputObject` field. No arguments are required so you may omit this.
     */
    $?: dateArgInputObject$Arguments<_$Scalars>
  }

  export interface dateArgInputObject$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    input?: $NamedTypes.$InputObject<_$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgInputObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgInputObject$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArgInputObject$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgList<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArgList$SelectionSet<_$Scalars>

  export interface dateArgList$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArgList` field. No arguments are required so you may omit this.
     */
    $?: dateArgList$Arguments<_$Scalars>
  }

  export interface dateArgList$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    date?:
      | Array<
        | $$Utilities.Schema.Scalar.GetDecoded<
          $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', _$Scalars>
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
  export type dateArgList$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArgList$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = dateArgNonNull$SelectionSet<_$Scalars>

  export interface dateArgNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArgNonNull` field. All arguments are required so you must include this.
     */
    $: dateArgNonNull$Arguments<_$Scalars>
  }

  export interface dateArgNonNull$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    date: $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', _$Scalars>
    >
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    dateArgNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgNonNullList<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = dateArgNonNullList$SelectionSet<_$Scalars>

  export interface dateArgNonNullList$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArgNonNullList` field. All arguments are required so you must include this.
     */
    $: dateArgNonNullList$Arguments<_$Scalars>
  }

  export interface dateArgNonNullList$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    date: Array<
      | $$Utilities.Schema.Scalar.GetDecoded<
        $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', _$Scalars>
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
  export type dateArgNonNullList$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    dateArgNonNullList$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgNonNullListNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = dateArgNonNullListNonNull$SelectionSet<_$Scalars>

  export interface dateArgNonNullListNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArgNonNullListNonNull` field. All arguments are required so you must include this.
     */
    $: dateArgNonNullListNonNull$Arguments<_$Scalars>
  }

  export interface dateArgNonNullListNonNull$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    date: Array<
      | $$Utilities.Schema.Scalar.GetDecoded<
        $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', _$Scalars>
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
  export type dateArgNonNullListNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    dateArgNonNullListNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateInterface1<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = dateInterface1$SelectionSet<_$Scalars>

  export interface dateInterface1$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$DateInterface1<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateInterface1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateInterface1$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    dateInterface1$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateList<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateList$SelectionSet<_$Scalars>

  export interface dateList$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateList$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateList$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateListList<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateListList$SelectionSet<_$Scalars>

  export interface dateListList$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateListList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateListList$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateListList$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateListNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateListNonNull$SelectionSet<_$Scalars>

  export interface dateListNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateListNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateListNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateListNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateNonNull$SelectionSet<_$Scalars>

  export interface dateNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateObject1<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = dateObject1$SelectionSet<_$Scalars>

  export interface dateObject1$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$DateObject1<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateObject1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateObject1$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    dateObject1$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateUnion<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = dateUnion$SelectionSet<_$Scalars>

  export interface dateUnion$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$DateUnion<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateUnion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateUnion$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    dateUnion$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type error<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | error$SelectionSet<_$Scalars>

  export interface error$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `error` field. No arguments are required so you may omit this.
     */
    $?: error$Arguments<_$Scalars>
  }

  export interface error$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    case?: string | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `error` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type error$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | error$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type idNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Scalars>

  export interface idNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `idNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type idNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $interface<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $interface$SelectionSet<_$Scalars>

  export interface $interface$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Interface<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$interface` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $interface$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    $interface$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceHierarchyChildA<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = interfaceHierarchyChildA$SelectionSet<_$Scalars>

  export interface interfaceHierarchyChildA$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$InterfaceChildA<_$Scalars> {
    /**
     * Arguments for `interfaceHierarchyChildA` field. No arguments are required so you may omit this.
     */
    $?: interfaceHierarchyChildA$Arguments<_$Scalars>
  }

  export interface interfaceHierarchyChildA$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    $type?: $NamedTypes.$ChildAInterfaceHierarchyMember | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceHierarchyChildA` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceHierarchyChildA$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    interfaceHierarchyChildA$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceHierarchyChildB<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = interfaceHierarchyChildB$SelectionSet<_$Scalars>

  export interface interfaceHierarchyChildB$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$InterfaceChildB<_$Scalars> {
    /**
     * Arguments for `interfaceHierarchyChildB` field. No arguments are required so you may omit this.
     */
    $?: interfaceHierarchyChildB$Arguments<_$Scalars>
  }

  export interface interfaceHierarchyChildB$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    $type?: $NamedTypes.$ChildBInterfaceHierarchyMember | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceHierarchyChildB` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceHierarchyChildB$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    interfaceHierarchyChildB$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceHierarchyGrandparents<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = interfaceHierarchyGrandparents$SelectionSet<_$Scalars>

  export interface interfaceHierarchyGrandparents$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$InterfaceGrandparent<_$Scalars> {
    /**
     * Arguments for `interfaceHierarchyGrandparents` field. No arguments are required so you may omit this.
     */
    $?: interfaceHierarchyGrandparents$Arguments<_$Scalars>
  }

  export interface interfaceHierarchyGrandparents$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    $type?: $NamedTypes.$GrandparentInterfaceHierarchyMember | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceHierarchyGrandparents` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceHierarchyGrandparents$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    interfaceHierarchyGrandparents$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceHierarchyParents<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = interfaceHierarchyParents$SelectionSet<_$Scalars>

  export interface interfaceHierarchyParents$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$InterfaceParent<_$Scalars> {
    /**
     * Arguments for `interfaceHierarchyParents` field. No arguments are required so you may omit this.
     */
    $?: interfaceHierarchyParents$Arguments<_$Scalars>
  }

  export interface interfaceHierarchyParents$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    $type?: $NamedTypes.$ParentInterfaceHierarchyMember | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceHierarchyParents` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceHierarchyParents$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    interfaceHierarchyParents$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = interfaceNonNull$SelectionSet<_$Scalars>

  export interface interfaceNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Interface<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    interfaceNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceWithArgs<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = interfaceWithArgs$SelectionSet<_$Scalars>

  export interface interfaceWithArgs$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Interface<_$Scalars> {
    /**
     * Arguments for `interfaceWithArgs` field. All arguments are required so you must include this.
     */
    $: interfaceWithArgs$Arguments<_$Scalars>
  }

  export interface interfaceWithArgs$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    id: string
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceWithArgs$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    interfaceWithArgs$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type listInt<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listInt$SelectionSet<_$Scalars>

  export interface listInt$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listInt` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listInt$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listInt$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type listIntNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listIntNonNull$SelectionSet<_$Scalars>

  export interface listIntNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listIntNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listIntNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listIntNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type listListInt<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listListInt$SelectionSet<_$Scalars>

  export interface listListInt$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listListInt` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listListInt$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listListInt$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type listListIntNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listListIntNonNull$SelectionSet<_$Scalars>

  export interface listListIntNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listListIntNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listListIntNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listListIntNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type lowerCaseUnion<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = lowerCaseUnion$SelectionSet<_$Scalars>

  export interface lowerCaseUnion$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$lowerCaseUnion<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `lowerCaseUnion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type lowerCaseUnion$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    lowerCaseUnion$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $object<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    $object$SelectionSet<_$Scalars>

  export interface $object$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$object` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $object$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    $object$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectList<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = objectList$SelectionSet<_$Scalars>

  export interface objectList$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectList$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    objectList$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectListNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = objectListNonNull$SelectionSet<_$Scalars>

  export interface objectListNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectListNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectListNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    objectListNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectNested<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = objectNested$SelectionSet<_$Scalars>

  export interface objectNested$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$ObjectNested<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectNested` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectNested$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    objectNested$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = objectNonNull$SelectionSet<_$Scalars>

  export interface objectNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    objectNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectWithArgs<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = objectWithArgs$SelectionSet<_$Scalars>

  export interface objectWithArgs$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Scalars> {
    /**
     * Arguments for `objectWithArgs` field. No arguments are required so you may omit this.
     */
    $?: objectWithArgs$Arguments<_$Scalars>
  }

  export interface objectWithArgs$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
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
  export type objectWithArgs$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    objectWithArgs$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type result<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    result$SelectionSet<_$Scalars>

  export interface result$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Result<_$Scalars> {
    /**
     * Arguments for `result` field. All arguments are required so you must include this.
     */
    $: result$Arguments<_$Scalars>
  }

  export interface result$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    $case: $NamedTypes.$Case
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `result` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type result$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    result$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type resultNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = resultNonNull$SelectionSet<_$Scalars>

  export interface resultNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Result<_$Scalars> {
    /**
     * Arguments for `resultNonNull` field. No arguments are required so you may omit this.
     */
    $?: resultNonNull$Arguments<_$Scalars>
  }

  export interface resultNonNull$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    $case?: $NamedTypes.$Case | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `resultNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type resultNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    resultNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $string<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<_$Scalars>

  export interface $string$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$string` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $string$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgEnum<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgEnum$SelectionSet<_$Scalars>

  export interface stringWithArgEnum$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgEnum` field. No arguments are required so you may omit this.
     */
    $?: stringWithArgEnum$Arguments<_$Scalars>
  }

  export interface stringWithArgEnum$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    $ABCEnum?: $NamedTypes.$ABCEnum | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgEnum$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgEnum$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgInputObject<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgInputObject$SelectionSet<_$Scalars>

  export interface stringWithArgInputObject$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgInputObject` field. No arguments are required so you may omit this.
     */
    $?: stringWithArgInputObject$Arguments<_$Scalars>
  }

  export interface stringWithArgInputObject$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    input?: $NamedTypes.$InputObject<_$Scalars> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgInputObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgInputObject$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgInputObject$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgInputObjectEnum<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = stringWithArgInputObjectEnum$SelectionSet<_$Scalars>

  export interface stringWithArgInputObjectEnum$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgInputObjectEnum` field. All arguments are required so you must include this.
     */
    $: stringWithArgInputObjectEnum$Arguments<_$Scalars>
  }

  export interface stringWithArgInputObjectEnum$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    input: $NamedTypes.$InputObjectEnum<_$Scalars>
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgInputObjectEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgInputObjectEnum$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    stringWithArgInputObjectEnum$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgInputObjectRequired<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = stringWithArgInputObjectRequired$SelectionSet<_$Scalars>

  export interface stringWithArgInputObjectRequired$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgInputObjectRequired` field. All arguments are required so you must include this.
     */
    $: stringWithArgInputObjectRequired$Arguments<_$Scalars>
  }

  export interface stringWithArgInputObjectRequired$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    input: $NamedTypes.$InputObject<_$Scalars>
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgInputObjectRequired` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgInputObjectRequired$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    stringWithArgInputObjectRequired$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgs<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgs$SelectionSet<_$Scalars>

  export interface stringWithArgs$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgs` field. No arguments are required so you may omit this.
     */
    $?: stringWithArgs$Arguments<_$Scalars>
  }

  export interface stringWithArgs$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
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
  export type stringWithArgs$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgs$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithListArg<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithListArg$SelectionSet<_$Scalars>

  export interface stringWithListArg$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithListArg` field. No arguments are required so you may omit this.
     */
    $?: stringWithListArg$Arguments<_$Scalars>
  }

  export interface stringWithListArg$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    ints?: Array<number | undefined | null> | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithListArg` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithListArg$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithListArg$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithListArgRequired<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = stringWithListArgRequired$SelectionSet<_$Scalars>

  export interface stringWithListArgRequired$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithListArgRequired` field. All arguments are required so you must include this.
     */
    $: stringWithListArgRequired$Arguments<_$Scalars>
  }

  export interface stringWithListArgRequired$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    ints: Array<number | undefined | null>
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithListArgRequired` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithListArgRequired$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    stringWithListArgRequired$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithRequiredArg<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = stringWithRequiredArg$SelectionSet<_$Scalars>

  export interface stringWithRequiredArg$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithRequiredArg` field. All arguments are required so you must include this.
     */
    $: stringWithRequiredArg$Arguments<_$Scalars>
  }

  export interface stringWithRequiredArg$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    string: string
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithRequiredArg` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithRequiredArg$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    stringWithRequiredArg$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionFooBar<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = unionFooBar$SelectionSet<_$Scalars>

  export interface unionFooBar$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$FooBarUnion<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionFooBar` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionFooBar$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    unionFooBar$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionFooBarNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = unionFooBarNonNull$SelectionSet<_$Scalars>

  export interface unionFooBarNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$FooBarUnion<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionFooBarNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionFooBarNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    unionFooBarNonNull$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionFooBarWithArgs<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = unionFooBarWithArgs$SelectionSet<_$Scalars>

  export interface unionFooBarWithArgs$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$FooBarUnion<_$Scalars> {
    /**
     * Arguments for `unionFooBarWithArgs` field. No arguments are required so you may omit this.
     */
    $?: unionFooBarWithArgs$Arguments<_$Scalars>
  }

  export interface unionFooBarWithArgs$Arguments<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > {
    id?: string | undefined | null
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionFooBarWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionFooBarWithArgs$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    unionFooBarWithArgs$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionObject<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = unionObject$SelectionSet<_$Scalars>

  export interface unionObject$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$ObjectUnion<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionObject$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    unionObject$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionObjectNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = unionObjectNonNull$SelectionSet<_$Scalars>

  export interface unionObjectNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$ObjectUnion<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionObjectNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionObjectNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    unionObjectNonNull$SelectionSet<_$Scalars>
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
   * Select the `id` field on the `Mutation` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Mutation.id$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Mutation.id<_$Scalars>>
  /**
   * Select the `idNonNull` field on the `Mutation` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  idNonNull?:
    | Mutation.idNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Mutation.idNonNull<_$Scalars>>

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
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface Mutation$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Mutation<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Mutation {
  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type idNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Scalars>

  export interface idNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `idNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type idNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Scalars>
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
export type ABCEnum =
  | 'A'
  | 'B'
  | 'C'

export type Case =
  | 'ErrorOne'
  | 'ErrorTwo'
  | 'Object1'

export type ChildAInterfaceHierarchyMember = 'InterfaceChildA'

export type ChildBInterfaceHierarchyMember = 'InterfaceChildB'

export type GrandparentInterfaceHierarchyMember =
  | 'InterfaceChildA'
  | 'InterfaceChildB'
  | 'InterfaceGrandparent'
  | 'InterfaceParent'

export type ParentInterfaceHierarchyMember =
  | 'InterfaceChildA'
  | 'InterfaceChildB'
  | 'InterfaceParent'

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

export interface InputObject<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  $abcEnum?: $NamedTypes.$ABCEnum | undefined | null
  date?:
    | $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', _$Scalars>
    >
    | undefined
    | null
  dateRequired: $$Utilities.Schema.Scalar.GetDecoded<
    $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', _$Scalars>
  >
  id?: string | undefined | null
  idRequired: string
}

export interface InputObjectCircular<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  circular?: $NamedTypes.$InputObjectCircular<_$Scalars> | undefined | null
  date?:
    | $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<'Date', _$Scalars>
    >
    | undefined
    | null
}

export interface InputObjectEnum<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  $abcEnum?: $NamedTypes.$ABCEnum | undefined | null
}

export interface InputObjectNested<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  InputObject?: $NamedTypes.$InputObject<_$Scalars> | undefined | null
}

export interface InputObjectNestedNonNull<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  InputObject: $NamedTypes.$InputObject<_$Scalars>
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

//                                                Bar
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Bar<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty>
  extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike
{
  /**
   * Select the `int` field on the `Bar` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?: Bar.int$Expanded<_$Scalars> | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Bar.int<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Bar$FragmentInline<_$Scalars>
    | Bar$FragmentInline<_$Scalars>[]

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

export interface Bar$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Bar<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Bar {
  export type int<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Scalars>

  export interface int$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Scalars>
  >
}

//                                            DateObject1
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface DateObject1<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `date1` field on the `DateObject1` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  date1?:
    | DateObject1.date1$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<DateObject1.date1<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateObject1$FragmentInline<_$Scalars>
    | DateObject1$FragmentInline<_$Scalars>[]

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

export interface DateObject1$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends DateObject1<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace DateObject1 {
  export type date1<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<_$Scalars>

  export interface date1$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date1$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<_$Scalars>
  >
}

//                                            DateObject2
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface DateObject2<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `date2` field on the `DateObject2` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  date2?:
    | DateObject2.date2$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<DateObject2.date2<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateObject2$FragmentInline<_$Scalars>
    | DateObject2$FragmentInline<_$Scalars>[]

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

export interface DateObject2$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends DateObject2<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace DateObject2 {
  export type date2<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date2$SelectionSet<_$Scalars>

  export interface date2$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date2` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date2$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date2$SelectionSet<_$Scalars>
  >
}

//                                              ErrorOne
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ErrorOne<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `infoId` field on the `ErrorOne` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  infoId?:
    | ErrorOne.infoId$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ErrorOne.infoId<_$Scalars>>
  /**
   * Select the `message` field on the `ErrorOne` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  message?:
    | ErrorOne.message$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ErrorOne.message<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ErrorOne$FragmentInline<_$Scalars>
    | ErrorOne$FragmentInline<_$Scalars>[]

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

export interface ErrorOne$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends ErrorOne<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ErrorOne {
  export type infoId<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | infoId$SelectionSet<_$Scalars>

  export interface infoId$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `infoId` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type infoId$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | infoId$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type message<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Scalars>

  export interface message$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `message` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type message$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Scalars>
  >
}

//                                              ErrorTwo
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ErrorTwo<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `infoInt` field on the `ErrorTwo` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  infoInt?:
    | ErrorTwo.infoInt$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ErrorTwo.infoInt<_$Scalars>>
  /**
   * Select the `message` field on the `ErrorTwo` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  message?:
    | ErrorTwo.message$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ErrorTwo.message<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ErrorTwo$FragmentInline<_$Scalars>
    | ErrorTwo$FragmentInline<_$Scalars>[]

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

export interface ErrorTwo$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends ErrorTwo<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ErrorTwo {
  export type infoInt<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | infoInt$SelectionSet<_$Scalars>

  export interface infoInt$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `infoInt` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type infoInt$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | infoInt$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type message<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Scalars>

  export interface message$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `message` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type message$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Scalars>
  >
}

//                                                Foo
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * Object documentation.
 */
export interface Foo<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty>
  extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike
{
  /**
   * Select the `id` field on the `Foo` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Foo.id$Expanded<_$Scalars> | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Foo.id<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Foo$FragmentInline<_$Scalars>
    | Foo$FragmentInline<_$Scalars>[]

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

export interface Foo$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Foo<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Foo {
  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >
}

//                                              Object1
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Object1<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `ABCEnum` field on the `Object1` object. Its type is `ABCEnum` (a `Enum` kind of type).
   */
  ABCEnum?:
    | Object1.ABCEnum$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.ABCEnum<_$Scalars>>
  /**
   * Select the `boolean` field on the `Object1` object. Its type is `Boolean` (a `ScalarStandard` kind of type).
   */
  boolean?:
    | Object1.$boolean$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.$boolean<_$Scalars>>
  /**
   * Select the `float` field on the `Object1` object. Its type is `Float` (a `ScalarStandard` kind of type).
   */
  float?:
    | Object1.float$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.float<_$Scalars>>
  /**
   * Select the `id` field on the `Object1` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Object1.id$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.id<_$Scalars>>
  /**
   * Select the `int` field on the `Object1` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?:
    | Object1.int$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.int<_$Scalars>>
  /**
   * Select the `string` field on the `Object1` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  string?:
    | Object1.$string$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.$string<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Object1$FragmentInline<_$Scalars>
    | Object1$FragmentInline<_$Scalars>[]

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

export interface Object1$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Object1<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Object1 {
  export type ABCEnum<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | ABCEnum$SelectionSet<_$Scalars>

  export interface ABCEnum$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `ABCEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type ABCEnum$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | ABCEnum$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $boolean<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<_$Scalars>

  export interface $boolean$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$boolean` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $boolean$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type float<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | float$SelectionSet<_$Scalars>

  export interface float$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `float` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type float$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | float$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type int<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Scalars>

  export interface int$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $string<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<_$Scalars>

  export interface $string$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$string` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $string$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<_$Scalars>
  >
}

//                                    Object1ImplementingInterface
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Object1ImplementingInterface<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `id` field on the `Object1ImplementingInterface` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Object1ImplementingInterface.id$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1ImplementingInterface.id<_$Scalars>>
  /**
   * Select the `int` field on the `Object1ImplementingInterface` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?:
    | Object1ImplementingInterface.int$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1ImplementingInterface.int<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Object1ImplementingInterface$FragmentInline<_$Scalars>
    | Object1ImplementingInterface$FragmentInline<_$Scalars>[]

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

export interface Object1ImplementingInterface$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends
  Object1ImplementingInterface<_$Scalars>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}

// ----------------------------------------| Fields |

export namespace Object1ImplementingInterface {
  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type int<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Scalars>

  export interface int$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Scalars>
  >
}

//                                    Object2ImplementingInterface
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Object2ImplementingInterface<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `boolean` field on the `Object2ImplementingInterface` object. Its type is `Boolean` (a `ScalarStandard` kind of type).
   */
  boolean?:
    | Object2ImplementingInterface.$boolean$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object2ImplementingInterface.$boolean<_$Scalars>>
  /**
   * Select the `id` field on the `Object2ImplementingInterface` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Object2ImplementingInterface.id$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object2ImplementingInterface.id<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Object2ImplementingInterface$FragmentInline<_$Scalars>
    | Object2ImplementingInterface$FragmentInline<_$Scalars>[]

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

export interface Object2ImplementingInterface$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends
  Object2ImplementingInterface<_$Scalars>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}

// ----------------------------------------| Fields |

export namespace Object2ImplementingInterface {
  export type $boolean<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<_$Scalars>

  export interface $boolean$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$boolean` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $boolean$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >
}

//                                            ObjectChildA
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectChildA<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `a` field on the `ObjectChildA` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  a?:
    | ObjectChildA.a$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildA.a<_$Scalars>>
  /**
   * Select the `b` field on the `ObjectChildA` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  b?:
    | ObjectChildA.b$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildA.b<_$Scalars>>
  /**
   * Select the `c1` field on the `ObjectChildA` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  c1?:
    | ObjectChildA.c1$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildA.c1<_$Scalars>>
  /**
   * Select the `me` field on the `ObjectChildA` object. Its type is `Boolean` (a `ScalarStandard` kind of type).
   */
  me?:
    | ObjectChildA.me$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildA.me<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectChildA$FragmentInline<_$Scalars>
    | ObjectChildA$FragmentInline<_$Scalars>[]

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

export interface ObjectChildA$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends ObjectChildA<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectChildA {
  export type a<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>

  export interface a$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type b<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>

  export interface b$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type c1<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c1$SelectionSet<_$Scalars>

  export interface c1$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `c1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type c1$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c1$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type me<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Scalars>

  export interface me$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `me` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type me$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Scalars>
  >
}

//                                            ObjectChildB
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectChildB<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `a` field on the `ObjectChildB` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  a?:
    | ObjectChildB.a$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildB.a<_$Scalars>>
  /**
   * Select the `b` field on the `ObjectChildB` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  b?:
    | ObjectChildB.b$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildB.b<_$Scalars>>
  /**
   * Select the `c2` field on the `ObjectChildB` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  c2?:
    | ObjectChildB.c2$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildB.c2<_$Scalars>>
  /**
   * Select the `me` field on the `ObjectChildB` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  me?:
    | ObjectChildB.me$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildB.me<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectChildB$FragmentInline<_$Scalars>
    | ObjectChildB$FragmentInline<_$Scalars>[]

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

export interface ObjectChildB$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends ObjectChildB<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectChildB {
  export type a<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>

  export interface a$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type b<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>

  export interface b$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type c2<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c2$SelectionSet<_$Scalars>

  export interface c2$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `c2` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type c2$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c2$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type me<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Scalars>

  export interface me$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `me` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type me$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Scalars>
  >
}

//                                         ObjectGrandparent
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectGrandparent<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `a` field on the `ObjectGrandparent` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  a?:
    | ObjectGrandparent.a$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectGrandparent.a<_$Scalars>>
  /**
   * Select the `me` field on the `ObjectGrandparent` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  me?:
    | ObjectGrandparent.me$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectGrandparent.me<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectGrandparent$FragmentInline<_$Scalars>
    | ObjectGrandparent$FragmentInline<_$Scalars>[]

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

export interface ObjectGrandparent$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends ObjectGrandparent<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectGrandparent {
  export type a<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>

  export interface a$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type me<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Scalars>

  export interface me$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `me` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type me$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Scalars>
  >
}

//                                            ObjectNested
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectNested<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `id` field on the `ObjectNested` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | ObjectNested.id$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectNested.id<_$Scalars>>
  /**
   * Select the `object` field on the `ObjectNested` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  object?:
    | ObjectNested.$object$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectNested.$object<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectNested$FragmentInline<_$Scalars>
    | ObjectNested$FragmentInline<_$Scalars>[]

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

export interface ObjectNested$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends ObjectNested<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectNested {
  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type $object<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    $object$SelectionSet<_$Scalars>

  export interface $object$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$object` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $object$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    $object$SelectionSet<_$Scalars>
  >
}

//                                            ObjectParent
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectParent<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `a` field on the `ObjectParent` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  a?:
    | ObjectParent.a$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectParent.a<_$Scalars>>
  /**
   * Select the `b` field on the `ObjectParent` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  b?:
    | ObjectParent.b$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectParent.b<_$Scalars>>
  /**
   * Select the `me` field on the `ObjectParent` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  me?:
    | ObjectParent.me$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectParent.me<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectParent$FragmentInline<_$Scalars>
    | ObjectParent$FragmentInline<_$Scalars>[]

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

export interface ObjectParent$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends ObjectParent<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectParent {
  export type a<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>

  export interface a$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type b<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>

  export interface b$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type me<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Scalars>

  export interface me$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `me` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type me$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Scalars>
  >
}

//                                            ObjectUnion
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectUnion<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `fooBarUnion` field on the `ObjectUnion` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  fooBarUnion?:
    | ObjectUnion.fooBarUnion$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectUnion.fooBarUnion<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectUnion$FragmentInline<_$Scalars>
    | ObjectUnion$FragmentInline<_$Scalars>[]

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

export interface ObjectUnion$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends ObjectUnion<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectUnion {
  export type fooBarUnion<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = fooBarUnion$SelectionSet<_$Scalars>

  export interface fooBarUnion$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$FooBarUnion<_$Scalars> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `fooBarUnion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type fooBarUnion$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    fooBarUnion$SelectionSet<_$Scalars>
  >
}

//                                          lowerCaseObject
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface lowerCaseObject<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `id` field on the `lowerCaseObject` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | lowerCaseObject.id$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<lowerCaseObject.id<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | lowerCaseObject$FragmentInline<_$Scalars>
    | lowerCaseObject$FragmentInline<_$Scalars>[]

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

export interface lowerCaseObject$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends lowerCaseObject<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace lowerCaseObject {
  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >
}

//                                          lowerCaseObject2
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface lowerCaseObject2<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `int` field on the `lowerCaseObject2` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?:
    | lowerCaseObject2.int$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<lowerCaseObject2.int<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | lowerCaseObject2$FragmentInline<_$Scalars>
    | lowerCaseObject2$FragmentInline<_$Scalars>[]

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

export interface lowerCaseObject2$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends lowerCaseObject2<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace lowerCaseObject2 {
  export type int<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Scalars>

  export interface int$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Scalars>
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

export interface DateUnion<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
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

  ___on_DateObject1?: DateObject1<_$Scalars>
  ___on_DateObject2?: DateObject2<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateUnion$FragmentInline<_$Scalars>
    | DateUnion$FragmentInline<_$Scalars>[]
}
export interface DateUnion$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends DateUnion<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

/**
 * Union documentation.
 */
export interface FooBarUnion<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
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

  ___on_Bar?: Bar<_$Scalars>
  ___on_Foo?: Foo<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | FooBarUnion$FragmentInline<_$Scalars>
    | FooBarUnion$FragmentInline<_$Scalars>[]
}
export interface FooBarUnion$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends FooBarUnion<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export interface Result<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
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

  ___on_ErrorOne?: ErrorOne<_$Scalars>
  ___on_ErrorTwo?: ErrorTwo<_$Scalars>
  ___on_Object1?: Object1<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Result$FragmentInline<_$Scalars>
    | Result$FragmentInline<_$Scalars>[]
}
export interface Result$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Result<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export interface lowerCaseUnion<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
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

  ___on_lowerCaseObject?: lowerCaseObject<_$Scalars>
  ___on_lowerCaseObject2?: lowerCaseObject2<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | lowerCaseUnion$FragmentInline<_$Scalars>
    | lowerCaseUnion$FragmentInline<_$Scalars>[]
}
export interface lowerCaseUnion$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends lowerCaseUnion<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
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

//                                           DateInterface1
// --------------------------------------------------------------------------------------------------
//

export interface DateInterface1<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  date1?: DateInterface1.date1<_$Scalars>
  ___on_DateObject1?: DateObject1<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateInterface1$FragmentInline<_$Scalars>
    | DateInterface1$FragmentInline<_$Scalars>[]

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

export interface DateInterface1$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends DateInterface1<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace DateInterface1 {
  export type date1<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<_$Scalars>

  export interface date1$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date1$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<_$Scalars>
  >
}

//                                               Error
// --------------------------------------------------------------------------------------------------
//

export interface Error<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty>
  extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike
{
  message?: Error.message<_$Scalars>
  ___on_ErrorOne?: ErrorOne<_$Scalars>
  ___on_ErrorTwo?: ErrorTwo<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Error$FragmentInline<_$Scalars>
    | Error$FragmentInline<_$Scalars>[]

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

export interface Error$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Error<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace Error {
  export type message<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Scalars>

  export interface message$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `message` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type message$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Scalars>
  >
}

//                                             Interface
// --------------------------------------------------------------------------------------------------
//

export interface Interface<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  id?: Interface.id<_$Scalars>
  ___on_Object1ImplementingInterface?: Object1ImplementingInterface<_$Scalars>
  ___on_Object2ImplementingInterface?: Object2ImplementingInterface<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Interface$FragmentInline<_$Scalars>
    | Interface$FragmentInline<_$Scalars>[]

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

export interface Interface$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Interface<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace Interface {
  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >
}

//                                          InterfaceChildA
// --------------------------------------------------------------------------------------------------
//

export interface InterfaceChildA<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  a?: InterfaceChildA.a<_$Scalars>
  b?: InterfaceChildA.b<_$Scalars>
  c1?: InterfaceChildA.c1<_$Scalars>
  ___on_ObjectChildA?: ObjectChildA<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | InterfaceChildA$FragmentInline<_$Scalars>
    | InterfaceChildA$FragmentInline<_$Scalars>[]

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

export interface InterfaceChildA$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends InterfaceChildA<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace InterfaceChildA {
  export type a<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>

  export interface a$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>
  >

  export type b<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>

  export interface b$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>
  >

  export type c1<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c1$SelectionSet<_$Scalars>

  export interface c1$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `c1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type c1$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c1$SelectionSet<_$Scalars>
  >
}

//                                          InterfaceChildB
// --------------------------------------------------------------------------------------------------
//

export interface InterfaceChildB<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  a?: InterfaceChildB.a<_$Scalars>
  b?: InterfaceChildB.b<_$Scalars>
  c2?: InterfaceChildB.c2<_$Scalars>
  ___on_ObjectChildB?: ObjectChildB<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | InterfaceChildB$FragmentInline<_$Scalars>
    | InterfaceChildB$FragmentInline<_$Scalars>[]

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

export interface InterfaceChildB$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends InterfaceChildB<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace InterfaceChildB {
  export type a<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>

  export interface a$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>
  >

  export type b<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>

  export interface b$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>
  >

  export type c2<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c2$SelectionSet<_$Scalars>

  export interface c2$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `c2` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type c2$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c2$SelectionSet<_$Scalars>
  >
}

//                                        InterfaceGrandparent
// --------------------------------------------------------------------------------------------------
//

export interface InterfaceGrandparent<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  a?: InterfaceGrandparent.a<_$Scalars>
  ___on_ObjectChildA?: ObjectChildA<_$Scalars>
  ___on_ObjectChildB?: ObjectChildB<_$Scalars>
  ___on_ObjectGrandparent?: ObjectGrandparent<_$Scalars>
  ___on_ObjectParent?: ObjectParent<_$Scalars>
  ___on_InterfaceChildA?: InterfaceChildA<_$Scalars>
  ___on_InterfaceChildB?: InterfaceChildB<_$Scalars>
  ___on_InterfaceParent?: InterfaceParent<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | InterfaceGrandparent$FragmentInline<_$Scalars>
    | InterfaceGrandparent$FragmentInline<_$Scalars>[]

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

export interface InterfaceGrandparent$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends
  InterfaceGrandparent<_$Scalars>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}

export namespace InterfaceGrandparent {
  export type a<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>

  export interface a$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>
  >
}

//                                          InterfaceParent
// --------------------------------------------------------------------------------------------------
//

export interface InterfaceParent<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  a?: InterfaceParent.a<_$Scalars>
  b?: InterfaceParent.b<_$Scalars>
  ___on_ObjectChildA?: ObjectChildA<_$Scalars>
  ___on_ObjectChildB?: ObjectChildB<_$Scalars>
  ___on_ObjectParent?: ObjectParent<_$Scalars>
  ___on_InterfaceChildA?: InterfaceChildA<_$Scalars>
  ___on_InterfaceChildB?: InterfaceChildB<_$Scalars>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | InterfaceParent$FragmentInline<_$Scalars>
    | InterfaceParent$FragmentInline<_$Scalars>[]

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

export interface InterfaceParent$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends InterfaceParent<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace InterfaceParent {
  export type a<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>

  export interface a$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Scalars>
  >

  export type b<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>

  export interface b$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Scalars>
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
  export type $ABCEnum = ABCEnum
  export type $Case = Case
  export type $ChildAInterfaceHierarchyMember = ChildAInterfaceHierarchyMember
  export type $ChildBInterfaceHierarchyMember = ChildBInterfaceHierarchyMember
  export type $GrandparentInterfaceHierarchyMember = GrandparentInterfaceHierarchyMember
  export type $ParentInterfaceHierarchyMember = ParentInterfaceHierarchyMember
  export type $InputObject<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = InputObject<_$Scalars>
  export type $InputObjectCircular<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = InputObjectCircular<_$Scalars>
  export type $InputObjectEnum<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = InputObjectEnum<_$Scalars>
  export type $InputObjectNested<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = InputObjectNested<_$Scalars>
  export type $InputObjectNestedNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = InputObjectNestedNonNull<_$Scalars>
  export type $Bar<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    Bar<_$Scalars>
  export type $DateObject1<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = DateObject1<_$Scalars>
  export type $DateObject2<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = DateObject2<_$Scalars>
  export type $ErrorOne<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = ErrorOne<_$Scalars>
  export type $ErrorTwo<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = ErrorTwo<_$Scalars>
  export type $Foo<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    Foo<_$Scalars>
  export type $Object1<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Object1<_$Scalars>
  export type $Object1ImplementingInterface<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Object1ImplementingInterface<_$Scalars>
  export type $Object2ImplementingInterface<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Object2ImplementingInterface<_$Scalars>
  export type $ObjectChildA<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = ObjectChildA<_$Scalars>
  export type $ObjectChildB<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = ObjectChildB<_$Scalars>
  export type $ObjectGrandparent<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = ObjectGrandparent<_$Scalars>
  export type $ObjectNested<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = ObjectNested<_$Scalars>
  export type $ObjectParent<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = ObjectParent<_$Scalars>
  export type $ObjectUnion<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = ObjectUnion<_$Scalars>
  export type $lowerCaseObject<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = lowerCaseObject<_$Scalars>
  export type $lowerCaseObject2<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = lowerCaseObject2<_$Scalars>
  export type $DateUnion<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = DateUnion<_$Scalars>
  export type $FooBarUnion<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = FooBarUnion<_$Scalars>
  export type $Result<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    Result<_$Scalars>
  export type $lowerCaseUnion<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = lowerCaseUnion<_$Scalars>
  export type $DateInterface1<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = DateInterface1<_$Scalars>
  export type $Error<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    Error<_$Scalars>
  export type $Interface<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Interface<_$Scalars>
  export type $InterfaceChildA<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = InterfaceChildA<_$Scalars>
  export type $InterfaceChildB<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = InterfaceChildB<_$Scalars>
  export type $InterfaceGrandparent<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = InterfaceGrandparent<_$Scalars>
  export type $InterfaceParent<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = InterfaceParent<_$Scalars>
}
