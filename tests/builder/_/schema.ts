import type * as _ from '../../../src/Schema/__.js'

export namespace $ {
  export interface Index {
    Root: {
      Query: Root.Query
      Mutation: null
      Subscription: null
    }
    objects: {
      Foo: Object.Foo
      Bar: Object.Bar
      ObjectNested: Object.ObjectNested
      lowerCaseObject: Object.lowerCaseObject
      lowerCaseObject2: Object.lowerCaseObject2
      Object: Object.Object
      Object1ImplementingInterface: Object.Object1ImplementingInterface
      Object2ImplementingInterface: Object.Object2ImplementingInterface
    }
    unions: {
      Union:
        | Union.FooBarUnion
        | Union.lowerCaseUnion
    }
    scalars: Scalars
  }
  export interface Scalars {
    ID: string
    String: string
    Int: number
    Float: number
    Boolean: boolean
  }
}

// ------------------------------------------------------------ //
//                             Root                             //
// ------------------------------------------------------------ //

export namespace Root {
  export type Query = _.Object<'Query', {
    interface: _.Field<_.Nullable<Interface.Interface>>
    id: _.Field<_.Nullable<_.Scalar.ID>>
    idNonNull: _.Field<_.Scalar.ID>
    string: _.Field<_.Nullable<_.Scalar.String>>
    stringWithRequiredArg: _.Field<
      _.Nullable<_.Scalar.String>,
      _.Args<{
        string: _.Scalar.String
      }>
    >
    stringWithArgs: _.Field<
      _.Nullable<_.Scalar.String>,
      _.Args<{
        string: _.Nullable<_.Scalar.String>
        int: _.Nullable<_.Scalar.Int>
        float: _.Nullable<_.Scalar.Float>
        boolean: _.Nullable<_.Scalar.Boolean>
        id: _.Nullable<_.Scalar.ID>
      }>
    >
    stringWithArgEnum: _.Field<
      _.Nullable<_.Scalar.String>,
      _.Args<{
        ABCEnum: _.Nullable<Enum.ABCEnum>
      }>
    >
    stringWithListArg: _.Field<
      _.Nullable<_.Scalar.String>,
      _.Args<{
        ints: _.Nullable<_.List<_.Nullable<_.Scalar.Int>>>
      }>
    >
    stringWithListArgRequired: _.Field<
      _.Nullable<_.Scalar.String>,
      _.Args<{
        ints: _.List<_.Nullable<_.Scalar.Int>>
      }>
    >
    object: _.Field<_.Nullable<Object.Object>>
    listListIntNonNull: _.Field<_.List<_.List<_.Scalar.Int>>>
    listListInt: _.Field<_.Nullable<_.List<_.Nullable<_.List<_.Nullable<_.Scalar.Int>>>>>>
    listInt: _.Field<_.Nullable<_.List<_.Nullable<_.Scalar.Int>>>>
    listIntNonNull: _.Field<_.List<_.Scalar.Int>>
    objectNested: _.Field<_.Nullable<Object.ObjectNested>>
    objectNonNull: _.Field<Object.Object>
    objectWithArgs: _.Field<
      _.Nullable<Object.Object>,
      _.Args<{
        string: _.Nullable<_.Scalar.String>
        int: _.Nullable<_.Scalar.Int>
        float: _.Nullable<_.Scalar.Float>
        boolean: _.Nullable<_.Scalar.Boolean>
        id: _.Nullable<_.Scalar.ID>
      }>
    >
    fooBarUnion: _.Field<_.Nullable<Union.FooBarUnion>>
    /**
     * Query enum field documentation.
     */
    abcEnum: _.Field<_.Nullable<Enum.ABCEnum>>
    lowerCaseUnion: _.Field<_.Nullable<Union.lowerCaseUnion>>
  }>
}

// ------------------------------------------------------------ //
//                             Enum                             //
// ------------------------------------------------------------ //

export namespace Enum {
  /**
   * Enum documentation.
   *
   * Members
   * "A" - (DEPRECATED: Enum value A is deprecated.)
   * "B" - Enum B member documentation.
   * "C" - Enum C member documentation. (DEPRECATED: Enum value C is deprecated.)
   */
  export type ABCEnum = _.Enum<'ABCEnum', ['A', 'B', 'C']>
}

// ------------------------------------------------------------ //
//                         InputObject                          //
// ------------------------------------------------------------ //

export namespace InputObject {
  // -- no types --
}

// ------------------------------------------------------------ //
//                          Interface                           //
// ------------------------------------------------------------ //

export namespace Interface {
  export type Interface = _.Interface<'Interface', {
    id: _.Field<_.Nullable<_.Scalar.ID>>
  }, [Object.Object1ImplementingInterface, Object.Object2ImplementingInterface]>
}

// ------------------------------------------------------------ //
//                            Object                            //
// ------------------------------------------------------------ //

export namespace Object {
  /**
   * Object documentation.
   */
  export type Foo = _.Object<'Foo', {
    /**
     * Field documentation.
     *
     * @deprecated Field a is deprecated.
     */
    id: _.Field<_.Nullable<_.Scalar.ID>>
  }>

  export type Bar = _.Object<'Bar', {
    int: _.Field<_.Nullable<_.Scalar.Int>>
  }>

  export type ObjectNested = _.Object<'ObjectNested', {
    id: _.Field<_.Nullable<_.Scalar.ID>>
    object: _.Field<_.Nullable<Object.Object>>
  }>

  export type lowerCaseObject = _.Object<'lowerCaseObject', {
    id: _.Field<_.Nullable<_.Scalar.ID>>
  }>

  export type lowerCaseObject2 = _.Object<'lowerCaseObject2', {
    int: _.Field<_.Nullable<_.Scalar.Int>>
  }>

  export type Object = _.Object<'Object', {
    string: _.Field<_.Nullable<_.Scalar.String>>
    int: _.Field<_.Nullable<_.Scalar.Int>>
    float: _.Field<_.Nullable<_.Scalar.Float>>
    boolean: _.Field<_.Nullable<_.Scalar.Boolean>>
    id: _.Field<_.Nullable<_.Scalar.ID>>
  }>

  export type Object1ImplementingInterface = _.Object<'Object1ImplementingInterface', {
    id: _.Field<_.Nullable<_.Scalar.ID>>
    int: _.Field<_.Nullable<_.Scalar.Int>>
  }>

  export type Object2ImplementingInterface = _.Object<'Object2ImplementingInterface', {
    id: _.Field<_.Nullable<_.Scalar.ID>>
    boolean: _.Field<_.Nullable<_.Scalar.Boolean>>
  }>
}

// ------------------------------------------------------------ //
//                            Union                             //
// ------------------------------------------------------------ //

export namespace Union {
  /**
   * Union documentation.
   */
  export type FooBarUnion = _.Union<'FooBarUnion', [Object.Foo, Object.Bar]>

  export type lowerCaseUnion = _.Union<'lowerCaseUnion', [Object.lowerCaseObject, Object.lowerCaseObject2]>
}
