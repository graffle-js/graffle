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

export interface Query<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> {
  /**
   * Select the `InputObjectNested` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  InputObjectNested?:
    | Query.InputObjectNested$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.InputObjectNested<_$Context>>
  /**
   * Select the `InputObjectNestedNonNull` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  InputObjectNestedNonNull?:
    | Query.InputObjectNestedNonNull<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.InputObjectNestedNonNull<_$Context>>
  /**
   * Select the `abcEnum` field on the `Query` object. Its type is `ABCEnum` (a `Enum` kind of type).
   */
  abcEnum?:
    | Query.abcEnum$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.abcEnum<_$Context>>
  /**
   * Select the `argInputObjectCircular` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  argInputObjectCircular?:
    | Query.argInputObjectCircular$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.argInputObjectCircular<_$Context>>
  /**
   * Select the `bigintField` field on the `Query` object. Its type is `bigint` (a `ScalarCustom` kind of type).
   */
  bigintField?:
    | Query.bigintField$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.bigintField<_$Context>>
  /**
   * Select the `bigintFieldNonNull` field on the `Query` object. Its type is `bigint` (a `ScalarCustom` kind of type).
   */
  bigintFieldNonNull?:
    | Query.bigintFieldNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.bigintFieldNonNull<_$Context>>
  /**
   * Select the `date` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  date?:
    | Query.date$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.date<_$Context>>
  /**
   * Select the `dateArg` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArg?:
    | Query.dateArg$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArg<_$Context>>
  /**
   * Select the `dateArgInputObject` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgInputObject?:
    | Query.dateArgInputObject$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArgInputObject<_$Context>>
  /**
   * Select the `dateArgList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgList?:
    | Query.dateArgList$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArgList<_$Context>>
  /**
   * Select the `dateArgNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgNonNull?:
    | Query.dateArgNonNull<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArgNonNull<_$Context>>
  /**
   * Select the `dateArgNonNullList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgNonNullList?:
    | Query.dateArgNonNullList<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArgNonNullList<_$Context>>
  /**
   * Select the `dateArgNonNullListNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateArgNonNullListNonNull?:
    | Query.dateArgNonNullListNonNull<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateArgNonNullListNonNull<_$Context>>
  /**
   * Select the `dateInterface1` field on the `Query` object. Its type is `DateInterface1` (a `Interface` kind of type).
   */
  dateInterface1?:
    | Query.dateInterface1$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateInterface1<_$Context>>
  /**
   * Select the `dateList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateList?:
    | Query.dateList$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateList<_$Context>>
  /**
   * Select the `dateListList` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateListList?:
    | Query.dateListList$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateListList<_$Context>>
  /**
   * Select the `dateListNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateListNonNull?:
    | Query.dateListNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateListNonNull<_$Context>>
  /**
   * Select the `dateNonNull` field on the `Query` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  dateNonNull?:
    | Query.dateNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateNonNull<_$Context>>
  /**
   * Select the `dateObject1` field on the `Query` object. Its type is `DateObject1` (a `OutputObject` kind of type).
   */
  dateObject1?:
    | Query.dateObject1$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateObject1<_$Context>>
  /**
   * Select the `dateUnion` field on the `Query` object. Its type is `DateUnion` (a `Union` kind of type).
   */
  dateUnion?:
    | Query.dateUnion$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.dateUnion<_$Context>>
  /**
   * Select the `error` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  error?:
    | Query.error$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.error<_$Context>>
  /**
   * Select the `id` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Query.id$Expanded<_$Context> | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.id<_$Context>>
  /**
   * Select the `idNonNull` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  idNonNull?:
    | Query.idNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.idNonNull<_$Context>>
  /**
   * Select the `interface` field on the `Query` object. Its type is `Interface` (a `Interface` kind of type).
   */
  interface?:
    | Query.$interface$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.$interface<_$Context>>
  /**
   * Select the `interfaceHierarchyChildA` field on the `Query` object. Its type is `InterfaceChildA` (a `Interface` kind of type).
   */
  interfaceHierarchyChildA?:
    | Query.interfaceHierarchyChildA$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceHierarchyChildA<_$Context>>
  /**
   * Select the `interfaceHierarchyChildB` field on the `Query` object. Its type is `InterfaceChildB` (a `Interface` kind of type).
   */
  interfaceHierarchyChildB?:
    | Query.interfaceHierarchyChildB$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceHierarchyChildB<_$Context>>
  /**
   * Select the `interfaceHierarchyGrandparents` field on the `Query` object. Its type is `InterfaceGrandparent` (a `Interface` kind of type).
   */
  interfaceHierarchyGrandparents?:
    | Query.interfaceHierarchyGrandparents$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceHierarchyGrandparents<_$Context>>
  /**
   * Select the `interfaceHierarchyParents` field on the `Query` object. Its type is `InterfaceParent` (a `Interface` kind of type).
   */
  interfaceHierarchyParents?:
    | Query.interfaceHierarchyParents$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceHierarchyParents<_$Context>>
  /**
   * Select the `interfaceNonNull` field on the `Query` object. Its type is `Interface` (a `Interface` kind of type).
   */
  interfaceNonNull?:
    | Query.interfaceNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceNonNull<_$Context>>
  /**
   * Select the `interfaceWithArgs` field on the `Query` object. Its type is `Interface` (a `Interface` kind of type).
   */
  interfaceWithArgs?:
    | Query.interfaceWithArgs<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.interfaceWithArgs<_$Context>>
  /**
   * Select the `listInt` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listInt?:
    | Query.listInt$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.listInt<_$Context>>
  /**
   * Select the `listIntNonNull` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listIntNonNull?:
    | Query.listIntNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.listIntNonNull<_$Context>>
  /**
   * Select the `listListInt` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listListInt?:
    | Query.listListInt$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.listListInt<_$Context>>
  /**
   * Select the `listListIntNonNull` field on the `Query` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  listListIntNonNull?:
    | Query.listListIntNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.listListIntNonNull<_$Context>>
  /**
   * Select the `lowerCaseUnion` field on the `Query` object. Its type is `lowerCaseUnion` (a `Union` kind of type).
   */
  lowerCaseUnion?:
    | Query.lowerCaseUnion$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.lowerCaseUnion<_$Context>>
  /**
   * Select the `object` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  object?:
    | Query.$object$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.$object<_$Context>>
  /**
   * Select the `objectList` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectList?:
    | Query.objectList$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.objectList<_$Context>>
  /**
   * Select the `objectListNonNull` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectListNonNull?:
    | Query.objectListNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.objectListNonNull<_$Context>>
  /**
   * Select the `objectNested` field on the `Query` object. Its type is `ObjectNested` (a `OutputObject` kind of type).
   */
  objectNested?:
    | Query.objectNested$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.objectNested<_$Context>>
  /**
   * Select the `objectNestedWithArgs` field on the `Query` object. Its type is `ObjectNestedWithArgs` (a `OutputObject` kind of type).
   */
  objectNestedWithArgs?:
    | Query.objectNestedWithArgs$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.objectNestedWithArgs<_$Context>>
  /**
   * Select the `objectNonNull` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectNonNull?:
    | Query.objectNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.objectNonNull<_$Context>>
  /**
   * Select the `objectWithArgs` field on the `Query` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  objectWithArgs?:
    | Query.objectWithArgs$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.objectWithArgs<_$Context>>
  /**
   * Select the `result` field on the `Query` object. Its type is `Result` (a `Union` kind of type).
   */
  result?:
    | Query.result<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.result<_$Context>>
  /**
   * Select the `resultNonNull` field on the `Query` object. Its type is `Result` (a `Union` kind of type).
   */
  resultNonNull?:
    | Query.resultNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.resultNonNull<_$Context>>
  /**
   * Select the `string` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  string?:
    | Query.$string$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.$string<_$Context>>
  /**
   * Select the `stringWithArgEnum` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgEnum?:
    | Query.stringWithArgEnum$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithArgEnum<_$Context>>
  /**
   * Select the `stringWithArgInputObject` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgInputObject?:
    | Query.stringWithArgInputObject$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithArgInputObject<_$Context>>
  /**
   * Select the `stringWithArgInputObjectEnum` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgInputObjectEnum?:
    | Query.stringWithArgInputObjectEnum<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithArgInputObjectEnum<_$Context>>
  /**
   * Select the `stringWithArgInputObjectRequired` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgInputObjectRequired?:
    | Query.stringWithArgInputObjectRequired<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithArgInputObjectRequired<_$Context>>
  /**
   * Select the `stringWithArgs` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithArgs?:
    | Query.stringWithArgs$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithArgs<_$Context>>
  /**
   * Select the `stringWithListArg` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithListArg?:
    | Query.stringWithListArg$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithListArg<_$Context>>
  /**
   * Select the `stringWithListArgRequired` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithListArgRequired?:
    | Query.stringWithListArgRequired<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithListArgRequired<_$Context>>
  /**
   * Select the `stringWithRequiredArg` field on the `Query` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  stringWithRequiredArg?:
    | Query.stringWithRequiredArg<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.stringWithRequiredArg<_$Context>>
  /**
   * Select the `unionFooBar` field on the `Query` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  unionFooBar?:
    | Query.unionFooBar$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.unionFooBar<_$Context>>
  /**
   * Select the `unionFooBarNonNull` field on the `Query` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  unionFooBarNonNull?:
    | Query.unionFooBarNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.unionFooBarNonNull<_$Context>>
  /**
   * Select the `unionFooBarWithArgs` field on the `Query` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  unionFooBarWithArgs?:
    | Query.unionFooBarWithArgs$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.unionFooBarWithArgs<_$Context>>
  /**
   * Select the `unionObject` field on the `Query` object. Its type is `ObjectUnion` (a `OutputObject` kind of type).
   */
  unionObject?:
    | Query.unionObject$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.unionObject<_$Context>>
  /**
   * Select the `unionObjectNonNull` field on the `Query` object. Its type is `ObjectUnion` (a `OutputObject` kind of type).
   */
  unionObjectNonNull?:
    | Query.unionObjectNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.unionObjectNonNull<_$Context>>

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
  export type InputObjectNested<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | InputObjectNested$SelectionSet<_$Context>

  export interface InputObjectNested$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `InputObjectNested` field. No arguments are required so you may omit this.
     */
    $?: InputObjectNested$Arguments<_$Context>
  }

  export interface InputObjectNested$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    input?:
      | $NamedTypes.$InputObjectNested<_$Context>
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `InputObjectNested` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type InputObjectNested$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | InputObjectNested$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type InputObjectNestedNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = InputObjectNestedNonNull$SelectionSet<_$Context>

  export interface InputObjectNestedNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `InputObjectNestedNonNull` field. All arguments are required so you must include this.
     */
    $: InputObjectNestedNonNull$Arguments<_$Context>
  }

  export interface InputObjectNestedNonNull$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    input:
      | $NamedTypes.$InputObjectNestedNonNull<_$Context>
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `InputObjectNestedNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type InputObjectNestedNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    InputObjectNestedNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type abcEnum<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | abcEnum$SelectionSet<_$Context>

  export interface abcEnum$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `abcEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type abcEnum$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | abcEnum$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type argInputObjectCircular<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | argInputObjectCircular$SelectionSet<_$Context>

  export interface argInputObjectCircular$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `argInputObjectCircular` field. No arguments are required so you may omit this.
     */
    $?: argInputObjectCircular$Arguments<_$Context>
  }

  export interface argInputObjectCircular$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    input?:
      | $NamedTypes.$InputObjectCircular<_$Context>
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `argInputObjectCircular` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type argInputObjectCircular$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | argInputObjectCircular$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type bigintField<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | bigintField$SelectionSet<_$Context>

  export interface bigintField$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `bigintField` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type bigintField$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | bigintField$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type bigintFieldNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | bigintFieldNonNull$SelectionSet<_$Context>

  export interface bigintFieldNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `bigintFieldNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type bigintFieldNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | bigintFieldNonNull$SelectionSet<_$Context>
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

  export type dateArg<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArg$SelectionSet<_$Context>

  export interface dateArg$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArg` field. No arguments are required so you may omit this.
     */
    $?: dateArg$Arguments<_$Context>
  }

  export interface dateArg$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    date?:
      | $$Utilities.Schema.Scalar.GetDecoded<
        $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<
          'Date',
          _$Context extends { scalars: infer S } ? S : $$Utilities.Schema.Scalar.Registry.Empty
        >
      >
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArg` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArg$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArg$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgInputObject<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArgInputObject$SelectionSet<_$Context>

  export interface dateArgInputObject$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArgInputObject` field. No arguments are required so you may omit this.
     */
    $?: dateArgInputObject$Arguments<_$Context>
  }

  export interface dateArgInputObject$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    input?:
      | $NamedTypes.$InputObject<_$Context>
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgInputObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgInputObject$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArgInputObject$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgList<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArgList$SelectionSet<_$Context>

  export interface dateArgList$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArgList` field. No arguments are required so you may omit this.
     */
    $?: dateArgList$Arguments<_$Context>
  }

  export interface dateArgList$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    date?:
      | Array<
        | $$Utilities.Schema.Scalar.GetDecoded<
          $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<
            'Date',
            _$Context extends { scalars: infer S } ? S : $$Utilities.Schema.Scalar.Registry.Empty
          >
        >
        | undefined
        | null
        | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
      >
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgList$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateArgList$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = dateArgNonNull$SelectionSet<_$Context>

  export interface dateArgNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArgNonNull` field. All arguments are required so you must include this.
     */
    $: dateArgNonNull$Arguments<_$Context>
  }

  export interface dateArgNonNull$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    date:
      | $$Utilities.Schema.Scalar.GetDecoded<
        $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<
          'Date',
          _$Context extends { scalars: infer S } ? S : $$Utilities.Schema.Scalar.Registry.Empty
        >
      >
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    dateArgNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgNonNullList<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = dateArgNonNullList$SelectionSet<_$Context>

  export interface dateArgNonNullList$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArgNonNullList` field. All arguments are required so you must include this.
     */
    $: dateArgNonNullList$Arguments<_$Context>
  }

  export interface dateArgNonNullList$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    date:
      | Array<
        | $$Utilities.Schema.Scalar.GetDecoded<
          $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<
            'Date',
            _$Context extends { scalars: infer S } ? S : $$Utilities.Schema.Scalar.Registry.Empty
          >
        >
        | undefined
        | null
        | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
      >
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgNonNullList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgNonNullList$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    dateArgNonNullList$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateArgNonNullListNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = dateArgNonNullListNonNull$SelectionSet<_$Context>

  export interface dateArgNonNullListNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `dateArgNonNullListNonNull` field. All arguments are required so you must include this.
     */
    $: dateArgNonNullListNonNull$Arguments<_$Context>
  }

  export interface dateArgNonNullListNonNull$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    date:
      | Array<
        | $$Utilities.Schema.Scalar.GetDecoded<
          $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<
            'Date',
            _$Context extends { scalars: infer S } ? S : $$Utilities.Schema.Scalar.Registry.Empty
          >
        >
        | undefined
        | null
        | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
      >
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateArgNonNullListNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateArgNonNullListNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    dateArgNonNullListNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateInterface1<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = dateInterface1$SelectionSet<_$Context>

  export interface dateInterface1$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$DateInterface1<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateInterface1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateInterface1$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    dateInterface1$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateList<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateList$SelectionSet<_$Context>

  export interface dateList$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateList$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateList$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateListList<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateListList$SelectionSet<_$Context>

  export interface dateListList$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateListList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateListList$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateListList$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateListNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateListNonNull$SelectionSet<_$Context>

  export interface dateListNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateListNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateListNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateListNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateNonNull$SelectionSet<_$Context>

  export interface dateNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | dateNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateObject1<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = dateObject1$SelectionSet<_$Context>

  export interface dateObject1$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$DateObject1<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateObject1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateObject1$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    dateObject1$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type dateUnion<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = dateUnion$SelectionSet<_$Context>

  export interface dateUnion$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$DateUnion<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `dateUnion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type dateUnion$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    dateUnion$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type error<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | error$SelectionSet<_$Context>

  export interface error$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `error` field. No arguments are required so you may omit this.
     */
    $?: error$Arguments<_$Context>
  }

  export interface error$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    case?:
      | string
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `error` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type error$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | error$SelectionSet<_$Context>
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

  export type idNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Context>

  export interface idNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `idNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type idNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type $interface<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $interface$SelectionSet<_$Context>

  export interface $interface$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Interface<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$interface` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $interface$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    $interface$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceHierarchyChildA<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = interfaceHierarchyChildA$SelectionSet<_$Context>

  export interface interfaceHierarchyChildA$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$InterfaceChildA<_$Context> {
    /**
     * Arguments for `interfaceHierarchyChildA` field. No arguments are required so you may omit this.
     */
    $?: interfaceHierarchyChildA$Arguments<_$Context>
  }

  export interface interfaceHierarchyChildA$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    $type?:
      | $NamedTypes.$ChildAInterfaceHierarchyMember
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceHierarchyChildA` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceHierarchyChildA$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    interfaceHierarchyChildA$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceHierarchyChildB<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = interfaceHierarchyChildB$SelectionSet<_$Context>

  export interface interfaceHierarchyChildB$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$InterfaceChildB<_$Context> {
    /**
     * Arguments for `interfaceHierarchyChildB` field. No arguments are required so you may omit this.
     */
    $?: interfaceHierarchyChildB$Arguments<_$Context>
  }

  export interface interfaceHierarchyChildB$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    $type?:
      | $NamedTypes.$ChildBInterfaceHierarchyMember
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceHierarchyChildB` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceHierarchyChildB$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    interfaceHierarchyChildB$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceHierarchyGrandparents<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = interfaceHierarchyGrandparents$SelectionSet<_$Context>

  export interface interfaceHierarchyGrandparents$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$InterfaceGrandparent<_$Context> {
    /**
     * Arguments for `interfaceHierarchyGrandparents` field. No arguments are required so you may omit this.
     */
    $?: interfaceHierarchyGrandparents$Arguments<_$Context>
  }

  export interface interfaceHierarchyGrandparents$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    $type?:
      | $NamedTypes.$GrandparentInterfaceHierarchyMember
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceHierarchyGrandparents` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceHierarchyGrandparents$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    interfaceHierarchyGrandparents$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceHierarchyParents<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = interfaceHierarchyParents$SelectionSet<_$Context>

  export interface interfaceHierarchyParents$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$InterfaceParent<_$Context> {
    /**
     * Arguments for `interfaceHierarchyParents` field. No arguments are required so you may omit this.
     */
    $?: interfaceHierarchyParents$Arguments<_$Context>
  }

  export interface interfaceHierarchyParents$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    $type?:
      | $NamedTypes.$ParentInterfaceHierarchyMember
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceHierarchyParents` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceHierarchyParents$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    interfaceHierarchyParents$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = interfaceNonNull$SelectionSet<_$Context>

  export interface interfaceNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Interface<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    interfaceNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type interfaceWithArgs<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = interfaceWithArgs$SelectionSet<_$Context>

  export interface interfaceWithArgs$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Interface<_$Context> {
    /**
     * Arguments for `interfaceWithArgs` field. All arguments are required so you must include this.
     */
    $: interfaceWithArgs$Arguments<_$Context>
  }

  export interface interfaceWithArgs$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    id:
      | string
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `interfaceWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type interfaceWithArgs$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    interfaceWithArgs$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type listInt<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listInt$SelectionSet<_$Context>

  export interface listInt$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listInt` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listInt$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listInt$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type listIntNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listIntNonNull$SelectionSet<_$Context>

  export interface listIntNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listIntNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listIntNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listIntNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type listListInt<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listListInt$SelectionSet<_$Context>

  export interface listListInt$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listListInt` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listListInt$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listListInt$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type listListIntNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listListIntNonNull$SelectionSet<_$Context>

  export interface listListIntNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `listListIntNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type listListIntNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | listListIntNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type lowerCaseUnion<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = lowerCaseUnion$SelectionSet<_$Context>

  export interface lowerCaseUnion$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$lowerCaseUnion<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `lowerCaseUnion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type lowerCaseUnion$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    lowerCaseUnion$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type $object<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $object$SelectionSet<_$Context>

  export interface $object$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$object` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $object$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    $object$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectList<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = objectList$SelectionSet<_$Context>

  export interface objectList$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectList$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    objectList$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectListNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = objectListNonNull$SelectionSet<_$Context>

  export interface objectListNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectListNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectListNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    objectListNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectNested<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = objectNested$SelectionSet<_$Context>

  export interface objectNested$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$ObjectNested<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectNested` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectNested$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    objectNested$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectNestedWithArgs<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = objectNestedWithArgs$SelectionSet<_$Context>

  export interface objectNestedWithArgs$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$ObjectNestedWithArgs<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectNestedWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectNestedWithArgs$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    objectNestedWithArgs$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = objectNonNull$SelectionSet<_$Context>

  export interface objectNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    objectNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type objectWithArgs<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = objectWithArgs$SelectionSet<_$Context>

  export interface objectWithArgs$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Context> {
    /**
     * Arguments for `objectWithArgs` field. No arguments are required so you may omit this.
     */
    $?: objectWithArgs$Arguments<_$Context>
  }

  export interface objectWithArgs$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    boolean?:
      | boolean
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
    float?:
      | number
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
    id?:
      | string
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
    int?:
      | number
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
    string?:
      | string
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `objectWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type objectWithArgs$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    objectWithArgs$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type result<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = result$SelectionSet<_$Context>

  export interface result$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Result<_$Context> {
    /**
     * Arguments for `result` field. All arguments are required so you must include this.
     */
    $: result$Arguments<_$Context>
  }

  export interface result$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    $case:
      | $NamedTypes.$Case
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

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
    result$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type resultNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = resultNonNull$SelectionSet<_$Context>

  export interface resultNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Result<_$Context> {
    /**
     * Arguments for `resultNonNull` field. No arguments are required so you may omit this.
     */
    $?: resultNonNull$Arguments<_$Context>
  }

  export interface resultNonNull$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    $case?:
      | $NamedTypes.$Case
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `resultNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type resultNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    resultNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type $string<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<_$Context>

  export interface $string$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$string` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $string$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgEnum<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgEnum$SelectionSet<_$Context>

  export interface stringWithArgEnum$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgEnum` field. No arguments are required so you may omit this.
     */
    $?: stringWithArgEnum$Arguments<_$Context>
  }

  export interface stringWithArgEnum$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    $ABCEnum?:
      | $NamedTypes.$ABCEnum
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgEnum$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgEnum$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgInputObject<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgInputObject$SelectionSet<_$Context>

  export interface stringWithArgInputObject$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgInputObject` field. No arguments are required so you may omit this.
     */
    $?: stringWithArgInputObject$Arguments<_$Context>
  }

  export interface stringWithArgInputObject$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    input?:
      | $NamedTypes.$InputObject<_$Context>
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgInputObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgInputObject$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgInputObject$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgInputObjectEnum<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = stringWithArgInputObjectEnum$SelectionSet<_$Context>

  export interface stringWithArgInputObjectEnum$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgInputObjectEnum` field. All arguments are required so you must include this.
     */
    $: stringWithArgInputObjectEnum$Arguments<_$Context>
  }

  export interface stringWithArgInputObjectEnum$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    input:
      | $NamedTypes.$InputObjectEnum<_$Context>
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgInputObjectEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgInputObjectEnum$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    stringWithArgInputObjectEnum$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgInputObjectRequired<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = stringWithArgInputObjectRequired$SelectionSet<_$Context>

  export interface stringWithArgInputObjectRequired$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgInputObjectRequired` field. All arguments are required so you must include this.
     */
    $: stringWithArgInputObjectRequired$Arguments<_$Context>
  }

  export interface stringWithArgInputObjectRequired$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    input:
      | $NamedTypes.$InputObject<_$Context>
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgInputObjectRequired` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgInputObjectRequired$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    stringWithArgInputObjectRequired$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithArgs<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgs$SelectionSet<_$Context>

  export interface stringWithArgs$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgs` field. No arguments are required so you may omit this.
     */
    $?: stringWithArgs$Arguments<_$Context>
  }

  export interface stringWithArgs$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    boolean?:
      | boolean
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
    float?:
      | number
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
    id?:
      | string
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
    /**
     * @deprecated Example of argument deprecation reason here.
     */
    int?:
      | number
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
    /**
     * Example of some argument documentation here.
     */
    string?:
      | string
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithArgs$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithArgs$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithListArg<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithListArg$SelectionSet<_$Context>

  export interface stringWithListArg$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithListArg` field. No arguments are required so you may omit this.
     */
    $?: stringWithListArg$Arguments<_$Context>
  }

  export interface stringWithListArg$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    ints?:
      | Array<
        | number
        | undefined
        | null
        | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
      >
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithListArg` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithListArg$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | stringWithListArg$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithListArgRequired<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = stringWithListArgRequired$SelectionSet<_$Context>

  export interface stringWithListArgRequired$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithListArgRequired` field. All arguments are required so you must include this.
     */
    $: stringWithListArgRequired$Arguments<_$Context>
  }

  export interface stringWithListArgRequired$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    ints:
      | Array<
        | number
        | undefined
        | null
        | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
      >
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithListArgRequired` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithListArgRequired$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    stringWithListArgRequired$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type stringWithRequiredArg<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = stringWithRequiredArg$SelectionSet<_$Context>

  export interface stringWithRequiredArg$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `stringWithRequiredArg` field. All arguments are required so you must include this.
     */
    $: stringWithRequiredArg$Arguments<_$Context>
  }

  export interface stringWithRequiredArg$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    string:
      | string
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `stringWithRequiredArg` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type stringWithRequiredArg$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    stringWithRequiredArg$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionFooBar<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = unionFooBar$SelectionSet<_$Context>

  export interface unionFooBar$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$FooBarUnion<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionFooBar` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionFooBar$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    unionFooBar$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionFooBarNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = unionFooBarNonNull$SelectionSet<_$Context>

  export interface unionFooBarNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$FooBarUnion<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionFooBarNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionFooBarNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    unionFooBarNonNull$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionFooBarWithArgs<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = unionFooBarWithArgs$SelectionSet<_$Context>

  export interface unionFooBarWithArgs$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$FooBarUnion<_$Context> {
    /**
     * Arguments for `unionFooBarWithArgs` field. No arguments are required so you may omit this.
     */
    $?: unionFooBarWithArgs$Arguments<_$Context>
  }

  export interface unionFooBarWithArgs$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    id?:
      | string
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionFooBarWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionFooBarWithArgs$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    unionFooBarWithArgs$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionObject<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = unionObject$SelectionSet<_$Context>

  export interface unionObject$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$ObjectUnion<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionObject$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    unionObject$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type unionObjectNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = unionObjectNonNull$SelectionSet<_$Context>

  export interface unionObjectNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$ObjectUnion<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `unionObjectNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type unionObjectNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    unionObjectNonNull$SelectionSet<_$Context>
  >
}

//                                              Mutation
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Mutation<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> {
  /**
   * Select the `id` field on the `Mutation` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Mutation.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Mutation.id<_$Context>>
  /**
   * Select the `idNonNull` field on the `Mutation` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  idNonNull?:
    | Mutation.idNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Mutation.idNonNull<_$Context>>

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

  export type idNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Context>

  export interface idNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `idNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type idNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Context>
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> {
  $abcEnum?:
    | $NamedTypes.$ABCEnum
    | undefined
    | null
    | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  date?:
    | $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<
        'Date',
        _$Context extends { scalars: infer S } ? S : $$Utilities.Schema.Scalar.Registry.Empty
      >
    >
    | undefined
    | null
    | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  dateRequired:
    | $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<
        'Date',
        _$Context extends { scalars: infer S } ? S : $$Utilities.Schema.Scalar.Registry.Empty
      >
    >
    | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  id?:
    | string
    | undefined
    | null
    | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  idRequired:
    | string
    | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
}

export interface InputObjectCircular<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> {
  circular?:
    | $NamedTypes.$InputObjectCircular<_$Context>
    | undefined
    | null
    | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  date?:
    | $$Utilities.Schema.Scalar.GetDecoded<
      $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<
        'Date',
        _$Context extends { scalars: infer S } ? S : $$Utilities.Schema.Scalar.Registry.Empty
      >
    >
    | undefined
    | null
    | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
}

export interface InputObjectEnum<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> {
  $abcEnum?:
    | $NamedTypes.$ABCEnum
    | undefined
    | null
    | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
}

export interface InputObjectNested<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> {
  InputObject?:
    | $NamedTypes.$InputObject<_$Context>
    | undefined
    | null
    | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
}

export interface InputObjectNestedNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> {
  InputObject:
    | $NamedTypes.$InputObject<_$Context>
    | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
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

export interface Bar<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `int` field on the `Bar` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?: Bar.int$Expanded<_$Context> | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Bar.int<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Bar$FragmentInline<_$Context>
    | Bar$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Bar<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Bar {
  export type int<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Context>

  export interface int$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Context>
  >
}

//                                            DateObject1
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface DateObject1<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `date1` field on the `DateObject1` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  date1?:
    | DateObject1.date1$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<DateObject1.date1<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateObject1$FragmentInline<_$Context>
    | DateObject1$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends DateObject1<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace DateObject1 {
  export type date1<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<_$Context>

  export interface date1$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date1$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<_$Context>
  >
}

//                                            DateObject2
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface DateObject2<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `date2` field on the `DateObject2` object. Its type is `Date` (a `ScalarCustom` kind of type).
   */
  date2?:
    | DateObject2.date2$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<DateObject2.date2<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateObject2$FragmentInline<_$Context>
    | DateObject2$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends DateObject2<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace DateObject2 {
  export type date2<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date2$SelectionSet<_$Context>

  export interface date2$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date2` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date2$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date2$SelectionSet<_$Context>
  >
}

//                                              ErrorOne
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ErrorOne<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `infoId` field on the `ErrorOne` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  infoId?:
    | ErrorOne.infoId$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ErrorOne.infoId<_$Context>>
  /**
   * Select the `message` field on the `ErrorOne` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  message?:
    | ErrorOne.message$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ErrorOne.message<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ErrorOne$FragmentInline<_$Context>
    | ErrorOne$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends ErrorOne<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ErrorOne {
  export type infoId<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | infoId$SelectionSet<_$Context>

  export interface infoId$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `infoId` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type infoId$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | infoId$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type message<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Context>

  export interface message$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `message` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type message$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Context>
  >
}

//                                              ErrorTwo
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ErrorTwo<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `infoInt` field on the `ErrorTwo` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  infoInt?:
    | ErrorTwo.infoInt$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ErrorTwo.infoInt<_$Context>>
  /**
   * Select the `message` field on the `ErrorTwo` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  message?:
    | ErrorTwo.message$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ErrorTwo.message<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ErrorTwo$FragmentInline<_$Context>
    | ErrorTwo$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends ErrorTwo<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ErrorTwo {
  export type infoInt<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | infoInt$SelectionSet<_$Context>

  export interface infoInt$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `infoInt` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type infoInt$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | infoInt$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type message<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Context>

  export interface message$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `message` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type message$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Context>
  >
}

//                                                Foo
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

/**
 * Object documentation.
 */
export interface Foo<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `id` field on the `Foo` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Foo.id$Expanded<_$Context> | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Foo.id<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Foo$FragmentInline<_$Context>
    | Foo$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Foo<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Foo {
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
}

//                                              Object1
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Object1<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `ABCEnum` field on the `Object1` object. Its type is `ABCEnum` (a `Enum` kind of type).
   */
  ABCEnum?:
    | Object1.ABCEnum$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.ABCEnum<_$Context>>
  /**
   * Select the `boolean` field on the `Object1` object. Its type is `Boolean` (a `ScalarStandard` kind of type).
   */
  boolean?:
    | Object1.$boolean$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.$boolean<_$Context>>
  /**
   * Select the `float` field on the `Object1` object. Its type is `Float` (a `ScalarStandard` kind of type).
   */
  float?:
    | Object1.float$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.float<_$Context>>
  /**
   * Select the `id` field on the `Object1` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Object1.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.id<_$Context>>
  /**
   * Select the `int` field on the `Object1` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?:
    | Object1.int$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.int<_$Context>>
  /**
   * Select the `string` field on the `Object1` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  string?:
    | Object1.$string$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1.$string<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Object1$FragmentInline<_$Context>
    | Object1$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Object1<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Object1 {
  export type ABCEnum<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | ABCEnum$SelectionSet<_$Context>

  export interface ABCEnum$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `ABCEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type ABCEnum$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | ABCEnum$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type $boolean<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<_$Context>

  export interface $boolean$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$boolean` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $boolean$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type float<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | float$SelectionSet<_$Context>

  export interface float$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `float` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type float$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | float$SelectionSet<_$Context>
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

  export type int<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Context>

  export interface int$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type $string<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<_$Context>

  export interface $string$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$string` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $string$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $string$SelectionSet<_$Context>
  >
}

//                                    Object1ImplementingInterface
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Object1ImplementingInterface<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `id` field on the `Object1ImplementingInterface` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Object1ImplementingInterface.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1ImplementingInterface.id<_$Context>>
  /**
   * Select the `int` field on the `Object1ImplementingInterface` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?:
    | Object1ImplementingInterface.int$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object1ImplementingInterface.int<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Object1ImplementingInterface$FragmentInline<_$Context>
    | Object1ImplementingInterface$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends
  Object1ImplementingInterface<_$Context>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}

// ----------------------------------------| Fields |

export namespace Object1ImplementingInterface {
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

  export type int<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Context>

  export interface int$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Context>
  >
}

//                                    Object2ImplementingInterface
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Object2ImplementingInterface<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `boolean` field on the `Object2ImplementingInterface` object. Its type is `Boolean` (a `ScalarStandard` kind of type).
   */
  boolean?:
    | Object2ImplementingInterface.$boolean$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object2ImplementingInterface.$boolean<_$Context>>
  /**
   * Select the `id` field on the `Object2ImplementingInterface` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | Object2ImplementingInterface.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Object2ImplementingInterface.id<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Object2ImplementingInterface$FragmentInline<_$Context>
    | Object2ImplementingInterface$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends
  Object2ImplementingInterface<_$Context>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}

// ----------------------------------------| Fields |

export namespace Object2ImplementingInterface {
  export type $boolean<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<_$Context>

  export interface $boolean$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$boolean` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $boolean$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $boolean$SelectionSet<_$Context>
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
}

//                                            ObjectChildA
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectChildA<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `a` field on the `ObjectChildA` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  a?:
    | ObjectChildA.a$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildA.a<_$Context>>
  /**
   * Select the `b` field on the `ObjectChildA` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  b?:
    | ObjectChildA.b$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildA.b<_$Context>>
  /**
   * Select the `c1` field on the `ObjectChildA` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  c1?:
    | ObjectChildA.c1$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildA.c1<_$Context>>
  /**
   * Select the `me` field on the `ObjectChildA` object. Its type is `Boolean` (a `ScalarStandard` kind of type).
   */
  me?:
    | ObjectChildA.me$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildA.me<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectChildA$FragmentInline<_$Context>
    | ObjectChildA$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends ObjectChildA<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectChildA {
  export type a<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>

  export interface a$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type b<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>

  export interface b$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type c1<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c1$SelectionSet<_$Context>

  export interface c1$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `c1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type c1$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c1$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type me<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Context>

  export interface me$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `me` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type me$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Context>
  >
}

//                                            ObjectChildB
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectChildB<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `a` field on the `ObjectChildB` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  a?:
    | ObjectChildB.a$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildB.a<_$Context>>
  /**
   * Select the `b` field on the `ObjectChildB` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  b?:
    | ObjectChildB.b$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildB.b<_$Context>>
  /**
   * Select the `c2` field on the `ObjectChildB` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  c2?:
    | ObjectChildB.c2$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildB.c2<_$Context>>
  /**
   * Select the `me` field on the `ObjectChildB` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  me?:
    | ObjectChildB.me$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectChildB.me<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectChildB$FragmentInline<_$Context>
    | ObjectChildB$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends ObjectChildB<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectChildB {
  export type a<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>

  export interface a$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type b<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>

  export interface b$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type c2<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c2$SelectionSet<_$Context>

  export interface c2$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `c2` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type c2$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c2$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type me<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Context>

  export interface me$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `me` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type me$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Context>
  >
}

//                                         ObjectGrandparent
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectGrandparent<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `a` field on the `ObjectGrandparent` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  a?:
    | ObjectGrandparent.a$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectGrandparent.a<_$Context>>
  /**
   * Select the `me` field on the `ObjectGrandparent` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  me?:
    | ObjectGrandparent.me$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectGrandparent.me<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectGrandparent$FragmentInline<_$Context>
    | ObjectGrandparent$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends ObjectGrandparent<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectGrandparent {
  export type a<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>

  export interface a$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type me<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Context>

  export interface me$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `me` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type me$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Context>
  >
}

//                                            ObjectNested
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectNested<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `id` field on the `ObjectNested` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | ObjectNested.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectNested.id<_$Context>>
  /**
   * Select the `object` field on the `ObjectNested` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  object?:
    | ObjectNested.$object$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectNested.$object<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectNested$FragmentInline<_$Context>
    | ObjectNested$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends ObjectNested<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectNested {
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

  export type $object<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $object$SelectionSet<_$Context>

  export interface $object$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$object` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $object$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    $object$SelectionSet<_$Context>
  >
}

//                                        ObjectNestedWithArgs
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectNestedWithArgs<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `id` field on the `ObjectNestedWithArgs` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | ObjectNestedWithArgs.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectNestedWithArgs.id<_$Context>>
  /**
   * Select the `object` field on the `ObjectNestedWithArgs` object. Its type is `Object1` (a `OutputObject` kind of type).
   */
  object?:
    | ObjectNestedWithArgs.$object$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectNestedWithArgs.$object<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectNestedWithArgs$FragmentInline<_$Context>
    | ObjectNestedWithArgs$FragmentInline<_$Context>[]

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

export interface ObjectNestedWithArgs$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends
  ObjectNestedWithArgs<_$Context>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}

// ----------------------------------------| Fields |

export namespace ObjectNestedWithArgs {
  export type id<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
    /**
     * Arguments for `id` field. No arguments are required so you may omit this.
     */
    $?: id$Arguments<_$Context>
  }

  export interface id$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    filter?:
      | string
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

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

  export type $object<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $object$SelectionSet<_$Context>

  export interface $object$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$Object1<_$Context> {
    /**
     * Arguments for `object` field. No arguments are required so you may omit this.
     */
    $?: $object$Arguments<_$Context>
  }

  export interface $object$Arguments<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > {
    boolean?:
      | boolean
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
    float?:
      | number
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
    int?:
      | number
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
    string?:
      | string
      | undefined
      | null
      | (_$Context extends { variablesEnabled: true } ? $$Utilities.DocumentBuilderKit.Var.VariableMarker : never)
  }

  // --- expanded ---

  /**
   * This is the "expanded" version of the `$object` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $object$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    $object$SelectionSet<_$Context>
  >
}

//                                            ObjectParent
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectParent<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `a` field on the `ObjectParent` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  a?:
    | ObjectParent.a$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectParent.a<_$Context>>
  /**
   * Select the `b` field on the `ObjectParent` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  b?:
    | ObjectParent.b$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectParent.b<_$Context>>
  /**
   * Select the `me` field on the `ObjectParent` object. Its type is `String` (a `ScalarStandard` kind of type).
   */
  me?:
    | ObjectParent.me$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectParent.me<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectParent$FragmentInline<_$Context>
    | ObjectParent$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends ObjectParent<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectParent {
  export type a<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>

  export interface a$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type b<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>

  export interface b$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type me<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Context>

  export interface me$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `me` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type me$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | me$SelectionSet<_$Context>
  >
}

//                                            ObjectUnion
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface ObjectUnion<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `fooBarUnion` field on the `ObjectUnion` object. Its type is `FooBarUnion` (a `Union` kind of type).
   */
  fooBarUnion?:
    | ObjectUnion.fooBarUnion$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<ObjectUnion.fooBarUnion<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | ObjectUnion$FragmentInline<_$Context>
    | ObjectUnion$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends ObjectUnion<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace ObjectUnion {
  export type fooBarUnion<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = fooBarUnion$SelectionSet<_$Context>

  export interface fooBarUnion$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $NamedTypes.$FooBarUnion<_$Context> {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `fooBarUnion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type fooBarUnion$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    fooBarUnion$SelectionSet<_$Context>
  >
}

//                                          lowerCaseObject
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface lowerCaseObject<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `id` field on the `lowerCaseObject` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?:
    | lowerCaseObject.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<lowerCaseObject.id<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | lowerCaseObject$FragmentInline<_$Context>
    | lowerCaseObject$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends lowerCaseObject<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace lowerCaseObject {
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
}

//                                          lowerCaseObject2
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface lowerCaseObject2<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * Select the `int` field on the `lowerCaseObject2` object. Its type is `Int` (a `ScalarStandard` kind of type).
   */
  int?:
    | lowerCaseObject2.int$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<lowerCaseObject2.int<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | lowerCaseObject2$FragmentInline<_$Context>
    | lowerCaseObject2$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends lowerCaseObject2<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace lowerCaseObject2 {
  export type int<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Context>

  export interface int$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `int` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type int$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | int$SelectionSet<_$Context>
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

  ___on_DateObject1?: DateObject1<_$Context>
  ___on_DateObject2?: DateObject2<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateUnion$FragmentInline<_$Context>
    | DateUnion$FragmentInline<_$Context>[]
}
export interface DateUnion$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends DateUnion<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

/**
 * Union documentation.
 */
export interface FooBarUnion<
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

  ___on_Bar?: Bar<_$Context>
  ___on_Foo?: Foo<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | FooBarUnion$FragmentInline<_$Context>
    | FooBarUnion$FragmentInline<_$Context>[]
}
export interface FooBarUnion$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends FooBarUnion<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export interface Result<
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

  ___on_ErrorOne?: ErrorOne<_$Context>
  ___on_ErrorTwo?: ErrorTwo<_$Context>
  ___on_Object1?: Object1<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Result$FragmentInline<_$Context>
    | Result$FragmentInline<_$Context>[]
}
export interface Result$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Result<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export interface lowerCaseUnion<
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

  ___on_lowerCaseObject?: lowerCaseObject<_$Context>
  ___on_lowerCaseObject2?: lowerCaseObject2<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | lowerCaseUnion$FragmentInline<_$Context>
    | lowerCaseUnion$FragmentInline<_$Context>[]
}
export interface lowerCaseUnion$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends lowerCaseUnion<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  date1?: DateInterface1.date1<_$Context>
  ___on_DateObject1?: DateObject1<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | DateInterface1$FragmentInline<_$Context>
    | DateInterface1$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends DateInterface1<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace DateInterface1 {
  export type date1<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<_$Context>

  export interface date1$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `date1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type date1$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | date1$SelectionSet<_$Context>
  >
}

//                                               Error
// --------------------------------------------------------------------------------------------------
//

export interface Error<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  message?: Error.message<_$Context>
  ___on_ErrorOne?: ErrorOne<_$Context>
  ___on_ErrorTwo?: ErrorTwo<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Error$FragmentInline<_$Context>
    | Error$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Error<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace Error {
  export type message<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Context>

  export interface message$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `message` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type message$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | message$SelectionSet<_$Context>
  >
}

//                                             Interface
// --------------------------------------------------------------------------------------------------
//

export interface Interface<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  id?: Interface.id<_$Context>
  ___on_Object1ImplementingInterface?: Object1ImplementingInterface<_$Context>
  ___on_Object2ImplementingInterface?: Object2ImplementingInterface<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Interface$FragmentInline<_$Context>
    | Interface$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Interface<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace Interface {
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
}

//                                          InterfaceChildA
// --------------------------------------------------------------------------------------------------
//

export interface InterfaceChildA<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  a?: InterfaceChildA.a<_$Context>
  b?: InterfaceChildA.b<_$Context>
  c1?: InterfaceChildA.c1<_$Context>
  ___on_ObjectChildA?: ObjectChildA<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | InterfaceChildA$FragmentInline<_$Context>
    | InterfaceChildA$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends InterfaceChildA<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace InterfaceChildA {
  export type a<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>

  export interface a$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>
  >

  export type b<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>

  export interface b$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>
  >

  export type c1<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c1$SelectionSet<_$Context>

  export interface c1$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `c1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type c1$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c1$SelectionSet<_$Context>
  >
}

//                                          InterfaceChildB
// --------------------------------------------------------------------------------------------------
//

export interface InterfaceChildB<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  a?: InterfaceChildB.a<_$Context>
  b?: InterfaceChildB.b<_$Context>
  c2?: InterfaceChildB.c2<_$Context>
  ___on_ObjectChildB?: ObjectChildB<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | InterfaceChildB$FragmentInline<_$Context>
    | InterfaceChildB$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends InterfaceChildB<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace InterfaceChildB {
  export type a<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>

  export interface a$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>
  >

  export type b<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>

  export interface b$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>
  >

  export type c2<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c2$SelectionSet<_$Context>

  export interface c2$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `c2` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type c2$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | c2$SelectionSet<_$Context>
  >
}

//                                        InterfaceGrandparent
// --------------------------------------------------------------------------------------------------
//

export interface InterfaceGrandparent<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  a?: InterfaceGrandparent.a<_$Context>
  ___on_ObjectChildA?: ObjectChildA<_$Context>
  ___on_ObjectChildB?: ObjectChildB<_$Context>
  ___on_ObjectGrandparent?: ObjectGrandparent<_$Context>
  ___on_ObjectParent?: ObjectParent<_$Context>
  ___on_InterfaceChildA?: InterfaceChildA<_$Context>
  ___on_InterfaceChildB?: InterfaceChildB<_$Context>
  ___on_InterfaceParent?: InterfaceParent<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | InterfaceGrandparent$FragmentInline<_$Context>
    | InterfaceGrandparent$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends
  InterfaceGrandparent<_$Context>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}

export namespace InterfaceGrandparent {
  export type a<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>

  export interface a$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>
  >
}

//                                          InterfaceParent
// --------------------------------------------------------------------------------------------------
//

export interface InterfaceParent<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  a?: InterfaceParent.a<_$Context>
  b?: InterfaceParent.b<_$Context>
  ___on_ObjectChildA?: ObjectChildA<_$Context>
  ___on_ObjectChildB?: ObjectChildB<_$Context>
  ___on_ObjectParent?: ObjectParent<_$Context>
  ___on_InterfaceChildA?: InterfaceChildA<_$Context>
  ___on_InterfaceChildB?: InterfaceChildB<_$Context>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | InterfaceParent$FragmentInline<_$Context>
    | InterfaceParent$FragmentInline<_$Context>[]

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends InterfaceParent<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

export namespace InterfaceParent {
  export type a<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>

  export interface a$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `a` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type a$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | a$SelectionSet<_$Context>
  >

  export type b<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>

  export interface b$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `b` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type b$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | b$SelectionSet<_$Context>
  >
}

import type * as $$Schema from './schema.js'

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
  export type $ABCEnum = ABCEnum
  export type $Case = Case
  export type $ChildAInterfaceHierarchyMember = ChildAInterfaceHierarchyMember
  export type $ChildBInterfaceHierarchyMember = ChildBInterfaceHierarchyMember
  export type $GrandparentInterfaceHierarchyMember = GrandparentInterfaceHierarchyMember
  export type $ParentInterfaceHierarchyMember = ParentInterfaceHierarchyMember
  export type $InputObject<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = InputObject<_$Context>
  export type $InputObjectCircular<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = InputObjectCircular<_$Context>
  export type $InputObjectEnum<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = InputObjectEnum<_$Context>
  export type $InputObjectNested<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = InputObjectNested<_$Context>
  export type $InputObjectNestedNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = InputObjectNestedNonNull<_$Context>
  export type $Bar<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Bar<_$Context>
  export type $DateObject1<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = DateObject1<_$Context>
  export type $DateObject2<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = DateObject2<_$Context>
  export type $ErrorOne<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = ErrorOne<_$Context>
  export type $ErrorTwo<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = ErrorTwo<_$Context>
  export type $Foo<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Foo<_$Context>
  export type $Object1<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Object1<_$Context>
  export type $Object1ImplementingInterface<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Object1ImplementingInterface<_$Context>
  export type $Object2ImplementingInterface<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Object2ImplementingInterface<_$Context>
  export type $ObjectChildA<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = ObjectChildA<_$Context>
  export type $ObjectChildB<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = ObjectChildB<_$Context>
  export type $ObjectGrandparent<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = ObjectGrandparent<_$Context>
  export type $ObjectNested<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = ObjectNested<_$Context>
  export type $ObjectNestedWithArgs<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = ObjectNestedWithArgs<_$Context>
  export type $ObjectParent<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = ObjectParent<_$Context>
  export type $ObjectUnion<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = ObjectUnion<_$Context>
  export type $lowerCaseObject<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = lowerCaseObject<_$Context>
  export type $lowerCaseObject2<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = lowerCaseObject2<_$Context>
  export type $DateUnion<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = DateUnion<_$Context>
  export type $FooBarUnion<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = FooBarUnion<_$Context>
  export type $Result<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Result<_$Context>
  export type $lowerCaseUnion<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = lowerCaseUnion<_$Context>
  export type $DateInterface1<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = DateInterface1<_$Context>
  export type $Error<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Error<_$Context>
  export type $Interface<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Interface<_$Context>
  export type $InterfaceChildA<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = InterfaceChildA<_$Context>
  export type $InterfaceChildB<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = InterfaceChildB<_$Context>
  export type $InterfaceGrandparent<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = InterfaceGrandparent<_$Context>
  export type $InterfaceParent<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = InterfaceParent<_$Context>
}
