import type { Schema as $ } from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
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

  export type Mutation = $.StandardTypes.Mutation<{
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    idNonNull: $.OutputField<'idNonNull', $Scalar.ID, null>
  }>

  export type Query = $.StandardTypes.Query<{
    InputObjectNested: $.OutputField<
      'InputObjectNested',
      $.Nullable<$Scalar.ID>,
      $.Args<{
        input: $.InputField<$.Nullable<InputObjectNested>>
      }, true>
    >
    InputObjectNestedNonNull: $.OutputField<
      'InputObjectNestedNonNull',
      $.Nullable<$Scalar.ID>,
      $.Args<{
        input: $.InputField<InputObjectNestedNonNull>
      }, false>
    >
    /**
     * Query enum field documentation.
     */
    abcEnum: $.OutputField<'abcEnum', $.Nullable<ABCEnum>, null>
    argInputObjectCircular: $.OutputField<
      'argInputObjectCircular',
      $.Nullable<$Scalar.String>,
      $.Args<{
        input: $.InputField<$.Nullable<InputObjectCircular>>
      }, true>
    >
    date: $.OutputField<'date', $.Nullable<$Scalar.Date>, null>
    dateArg: $.OutputField<
      'dateArg',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        date: $.InputField<$.Nullable<$Scalar.Date>>
      }, true>
    >
    dateArgInputObject: $.OutputField<
      'dateArgInputObject',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        input: $.InputField<$.Nullable<InputObject>>
      }, true>
    >
    dateArgList: $.OutputField<
      'dateArgList',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        date: $.InputField<$.Nullable<$.List<$Scalar.Date>>>
      }, true>
    >
    dateArgNonNull: $.OutputField<
      'dateArgNonNull',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        date: $.InputField<$Scalar.Date>
      }, false>
    >
    dateArgNonNullList: $.OutputField<
      'dateArgNonNullList',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        date: $.InputField<$.List<$.Nullable<$Scalar.Date>>>
      }, false>
    >
    dateArgNonNullListNonNull: $.OutputField<
      'dateArgNonNullListNonNull',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        date: $.InputField<$.List<$Scalar.Date>>
      }, false>
    >
    dateInterface1: $.OutputField<'dateInterface1', $.Nullable<DateInterface1>, null>
    dateList: $.OutputField<'dateList', $.Nullable<$.List<$Scalar.Date>>, null>
    dateListList: $.OutputField<'dateListList', $.Nullable<$.List<$.List<$Scalar.Date>>>, null>
    dateListNonNull: $.OutputField<'dateListNonNull', $.List<$Scalar.Date>, null>
    dateNonNull: $.OutputField<'dateNonNull', $Scalar.Date, null>
    dateObject1: $.OutputField<'dateObject1', $.Nullable<DateObject1>, null>
    dateUnion: $.OutputField<'dateUnion', $.Nullable<DateUnion>, null>
    error: $.OutputField<
      'error',
      $.Nullable<$Scalar.String>,
      $.Args<{
        case: $.InputField<$.Nullable<$Scalar.String>>
      }, true>
    >
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    idNonNull: $.OutputField<'idNonNull', $Scalar.ID, null>
    interface: $.OutputField<'interface', $.Nullable<Interface>, null>
    interfaceNonNull: $.OutputField<'interfaceNonNull', Interface, null>
    interfaceWithArgs: $.OutputField<
      'interfaceWithArgs',
      $.Nullable<Interface>,
      $.Args<{
        id: $.InputField<$Scalar.ID>
      }, false>
    >
    listInt: $.OutputField<'listInt', $.Nullable<$.List<$.Nullable<$Scalar.Int>>>, null>
    listIntNonNull: $.OutputField<'listIntNonNull', $.List<$Scalar.Int>, null>
    listListInt: $.OutputField<'listListInt', $.Nullable<$.List<$.Nullable<$.List<$.Nullable<$Scalar.Int>>>>>, null>
    listListIntNonNull: $.OutputField<'listListIntNonNull', $.List<$.List<$Scalar.Int>>, null>
    lowerCaseUnion: $.OutputField<'lowerCaseUnion', $.Nullable<lowerCaseUnion>, null>
    object: $.OutputField<'object', $.Nullable<Object1>, null>
    objectList: $.OutputField<'objectList', $.Nullable<$.List<Object1>>, null>
    objectListNonNull: $.OutputField<'objectListNonNull', $.List<Object1>, null>
    objectNested: $.OutputField<'objectNested', $.Nullable<ObjectNested>, null>
    objectNonNull: $.OutputField<'objectNonNull', Object1, null>
    objectWithArgs: $.OutputField<
      'objectWithArgs',
      $.Nullable<Object1>,
      $.Args<{
        boolean: $.InputField<$.Nullable<$Scalar.Boolean>>
        float: $.InputField<$.Nullable<$Scalar.Float>>
        id: $.InputField<$.Nullable<$Scalar.ID>>
        int: $.InputField<$.Nullable<$Scalar.Int>>
        string: $.InputField<$.Nullable<$Scalar.String>>
      }, true>
    >
    result: $.OutputField<
      'result',
      $.Nullable<Result>,
      $.Args<{
        case: $.InputField<Case>
      }, false>
    >
    resultNonNull: $.OutputField<
      'resultNonNull',
      Result,
      $.Args<{
        case: $.InputField<$.Nullable<Case>>
      }, true>
    >
    string: $.OutputField<'string', $.Nullable<$Scalar.String>, null>
    stringWithArgEnum: $.OutputField<
      'stringWithArgEnum',
      $.Nullable<$Scalar.String>,
      $.Args<{
        ABCEnum: $.InputField<$.Nullable<ABCEnum>>
      }, true>
    >
    stringWithArgInputObject: $.OutputField<
      'stringWithArgInputObject',
      $.Nullable<$Scalar.String>,
      $.Args<{
        input: $.InputField<$.Nullable<InputObject>>
      }, true>
    >
    stringWithArgInputObjectRequired: $.OutputField<
      'stringWithArgInputObjectRequired',
      $.Nullable<$Scalar.String>,
      $.Args<{
        input: $.InputField<InputObject>
      }, false>
    >
    /**
     * The given arguments are reflected back as a JSON string.
     */
    stringWithArgs: $.OutputField<
      'stringWithArgs',
      $.Nullable<$Scalar.String>,
      $.Args<{
        boolean: $.InputField<$.Nullable<$Scalar.Boolean>>
        float: $.InputField<$.Nullable<$Scalar.Float>>
        id: $.InputField<$.Nullable<$Scalar.ID>>
        int: $.InputField<$.Nullable<$Scalar.Int>>
        string: $.InputField<$.Nullable<$Scalar.String>>
      }, true>
    >
    stringWithListArg: $.OutputField<
      'stringWithListArg',
      $.Nullable<$Scalar.String>,
      $.Args<{
        ints: $.InputField<$.Nullable<$.List<$.Nullable<$Scalar.Int>>>>
      }, true>
    >
    stringWithListArgRequired: $.OutputField<
      'stringWithListArgRequired',
      $.Nullable<$Scalar.String>,
      $.Args<{
        ints: $.InputField<$.List<$Scalar.Int>>
      }, false>
    >
    stringWithRequiredArg: $.OutputField<
      'stringWithRequiredArg',
      $.Nullable<$Scalar.String>,
      $.Args<{
        string: $.InputField<$Scalar.String>
      }, false>
    >
    unionFooBar: $.OutputField<'unionFooBar', $.Nullable<FooBarUnion>, null>
    unionFooBarNonNull: $.OutputField<'unionFooBarNonNull', FooBarUnion, null>
    unionFooBarWithArgs: $.OutputField<
      'unionFooBarWithArgs',
      $.Nullable<FooBarUnion>,
      $.Args<{
        id: $.InputField<$.Nullable<$Scalar.ID>>
      }, true>
    >
    unionObject: $.OutputField<'unionObject', $.Nullable<ObjectUnion>, null>
    unionObjectNonNull: $.OutputField<'unionObjectNonNull', ObjectUnion, null>
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

  export type Bar = $.OutputObject<'Bar', {
    int: $.OutputField<'int', $.Nullable<$Scalar.Int>, null>
  }>

  export type DateObject1 = $.OutputObject<'DateObject1', {
    date1: $.OutputField<'date1', $.Nullable<$Scalar.Date>, null>
  }>

  export type DateObject2 = $.OutputObject<'DateObject2', {
    date2: $.OutputField<'date2', $.Nullable<$Scalar.Date>, null>
  }>

  export type ErrorOne = $.OutputObject<'ErrorOne', {
    infoId: $.OutputField<'infoId', $.Nullable<$Scalar.ID>, null>
    message: $.OutputField<'message', $Scalar.String, null>
  }>

  export type ErrorTwo = $.OutputObject<'ErrorTwo', {
    infoInt: $.OutputField<'infoInt', $.Nullable<$Scalar.Int>, null>
    message: $.OutputField<'message', $Scalar.String, null>
  }>

  /**
   * Object documentation.
   */
  export type Foo = $.OutputObject<'Foo', {
    /**
     * Field documentation.
     *
     * @deprecated Field a is deprecated.
     */
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
  }>

  export type Object1 = $.OutputObject<'Object1', {
    ABCEnum: $.OutputField<'ABCEnum', $.Nullable<ABCEnum>, null>
    boolean: $.OutputField<'boolean', $.Nullable<$Scalar.Boolean>, null>
    float: $.OutputField<'float', $.Nullable<$Scalar.Float>, null>
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    int: $.OutputField<'int', $.Nullable<$Scalar.Int>, null>
    string: $.OutputField<'string', $.Nullable<$Scalar.String>, null>
  }>

  export type Object1ImplementingInterface = $.OutputObject<'Object1ImplementingInterface', {
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    int: $.OutputField<'int', $.Nullable<$Scalar.Int>, null>
  }>

  export type Object2ImplementingInterface = $.OutputObject<'Object2ImplementingInterface', {
    boolean: $.OutputField<'boolean', $.Nullable<$Scalar.Boolean>, null>
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
  }>

  export type ObjectNested = $.OutputObject<'ObjectNested', {
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
    object: $.OutputField<'object', $.Nullable<Object1>, null>
  }>

  export type ObjectUnion = $.OutputObject<'ObjectUnion', {
    fooBarUnion: $.OutputField<'fooBarUnion', $.Nullable<FooBarUnion>, null>
  }>

  export type lowerCaseObject = $.OutputObject<'lowerCaseObject', {
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
  }>

  export type lowerCaseObject2 = $.OutputObject<'lowerCaseObject2', {
    int: $.OutputField<'int', $.Nullable<$Scalar.Int>, null>
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

  export type InputObject = $.InputObject<'InputObject', {
    date: $.InputField<$.Nullable<$Scalar.Date>>
    dateRequired: $.InputField<$Scalar.Date>
    id: $.InputField<$.Nullable<$Scalar.ID>>
    idRequired: $.InputField<$Scalar.ID>
  }, true>

  export type InputObjectCircular = $.InputObject<'InputObjectCircular', {
    circular: $.InputField<$.Nullable<InputObjectCircular>>
    date: $.InputField<$.Nullable<$Scalar.Date>>
  }, true>

  export type InputObjectNested = $.InputObject<'InputObjectNested', {
    InputObject: $.InputField<$.Nullable<InputObject>>
  }, true>

  export type InputObjectNestedNonNull = $.InputObject<'InputObjectNestedNonNull', {
    InputObject: $.InputField<InputObject>
  }, false>

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

  export type DateInterface1 = $.Interface<'DateInterface1', {
    date1: $.OutputField<'date1', $.Nullable<$Scalar.Date>, null>
  }, [DateObject1]>

  export type Error = $.Interface<'Error', {
    message: $.OutputField<'message', $Scalar.String, null>
  }, [ErrorOne, ErrorTwo]>

  export type Interface = $.Interface<'Interface', {
    id: $.OutputField<'id', $.Nullable<$Scalar.ID>, null>
  }, [Object1ImplementingInterface, Object2ImplementingInterface]>

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

  export type DateUnion = $.Union<'DateUnion', [DateObject1, DateObject2]>

  /**
   * Union documentation.
   */
  export type FooBarUnion = $.Union<'FooBarUnion', [Bar, Foo]>

  export type Result = $.Union<'Result', [ErrorOne, ErrorTwo, Object1]>

  export type lowerCaseUnion = $.Union<'lowerCaseUnion', [lowerCaseObject, lowerCaseObject2]>

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
  export type ABCEnum = $.Enum<'ABCEnum', ['A', 'B', 'C']>

  export type Case = $.Enum<'Case', ['ErrorOne', 'ErrorTwo', 'Object1']>
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
  RootTypesPresent: ['Mutation', 'Query']
  RootUnion: Schema.Mutation | Schema.Query
  Root: {
    Query: Schema.Query
    Mutation: Schema.Mutation
    Subscription: null
  }
  allTypes: {
    Mutation: Schema.Mutation
    Query: Schema.Query
    ABCEnum: Schema.ABCEnum
    Case: Schema.Case
    Bar: Schema.Bar
    DateObject1: Schema.DateObject1
    DateObject2: Schema.DateObject2
    ErrorOne: Schema.ErrorOne
    ErrorTwo: Schema.ErrorTwo
    Foo: Schema.Foo
    Object1: Schema.Object1
    Object1ImplementingInterface: Schema.Object1ImplementingInterface
    Object2ImplementingInterface: Schema.Object2ImplementingInterface
    ObjectNested: Schema.ObjectNested
    ObjectUnion: Schema.ObjectUnion
    lowerCaseObject: Schema.lowerCaseObject
    lowerCaseObject2: Schema.lowerCaseObject2
    DateUnion: Schema.DateUnion
    FooBarUnion: Schema.FooBarUnion
    Result: Schema.Result
    lowerCaseUnion: Schema.lowerCaseUnion
    DateInterface1: Schema.DateInterface1
    Error: Schema.Error
    Interface: Schema.Interface
  }
  objects: {
    Bar: Schema.Bar
    DateObject1: Schema.DateObject1
    DateObject2: Schema.DateObject2
    ErrorOne: Schema.ErrorOne
    ErrorTwo: Schema.ErrorTwo
    Foo: Schema.Foo
    Object1: Schema.Object1
    Object1ImplementingInterface: Schema.Object1ImplementingInterface
    Object2ImplementingInterface: Schema.Object2ImplementingInterface
    ObjectNested: Schema.ObjectNested
    ObjectUnion: Schema.ObjectUnion
    lowerCaseObject: Schema.lowerCaseObject
    lowerCaseObject2: Schema.lowerCaseObject2
  }
  unions: {
    DateUnion: Schema.DateUnion
    FooBarUnion: Schema.FooBarUnion
    Result: Schema.Result
    lowerCaseUnion: Schema.lowerCaseUnion
  }
  interfaces: {
    DateInterface1: Schema.DateInterface1
    Error: Schema.Error
    Interface: Schema.Interface
  }
  scalars: $Scalars
  extensions: $$Utilities.GlobalRegistry.TypeExtensions
}
