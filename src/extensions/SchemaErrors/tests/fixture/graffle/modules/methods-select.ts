import type * as $$Utilities from '../../../../../../entrypoints/utilities-for-generated.js'
import * as $$SelectionSets from './selection-sets.js'

//
//
//
//
//
//
// ==================================================================================================
//                                      Select Methods Interface
// ==================================================================================================
//
//
//
//
//
//

export interface $MethodsSelect {
  Query: Query
  Mutation: Mutation
  Bar: Bar
  DateObject1: DateObject1
  DateObject2: DateObject2
  ErrorOne: ErrorOne
  ErrorTwo: ErrorTwo
  Foo: Foo
  Object1: Object1
  Object1ImplementingInterface: Object1ImplementingInterface
  Object2ImplementingInterface: Object2ImplementingInterface
  ObjectNested: ObjectNested
  ObjectUnion: ObjectUnion
  lowerCaseObject: lowerCaseObject
  lowerCaseObject2: lowerCaseObject2
  DateUnion: DateUnion
  FooBarUnion: FooBarUnion
  Result: Result
  lowerCaseUnion: lowerCaseUnion
  DateInterface1: DateInterface1
  Error: Error
  Interface: Interface
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

export interface Query {
  <$SelectionSet extends object>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query>): $SelectionSet
}

export interface Mutation {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation>,
  ): $SelectionSet
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

export interface Bar {
  <$SelectionSet extends object>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Bar>): $SelectionSet
}

export interface DateObject1 {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.DateObject1>,
  ): $SelectionSet
}

export interface DateObject2 {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.DateObject2>,
  ): $SelectionSet
}

export interface ErrorOne {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ErrorOne>,
  ): $SelectionSet
}

export interface ErrorTwo {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ErrorTwo>,
  ): $SelectionSet
}

export interface Foo {
  <$SelectionSet extends object>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Foo>): $SelectionSet
}

export interface Object1 {
  <$SelectionSet extends object>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Object1>): $SelectionSet
}

export interface Object1ImplementingInterface {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Object1ImplementingInterface>,
  ): $SelectionSet
}

export interface Object2ImplementingInterface {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Object2ImplementingInterface>,
  ): $SelectionSet
}

export interface ObjectNested {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ObjectNested>,
  ): $SelectionSet
}

export interface ObjectUnion {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ObjectUnion>,
  ): $SelectionSet
}

export interface lowerCaseObject {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.lowerCaseObject>,
  ): $SelectionSet
}

export interface lowerCaseObject2 {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.lowerCaseObject2>,
  ): $SelectionSet
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

export interface DateUnion {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.DateUnion>,
  ): $SelectionSet
}

export interface FooBarUnion {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.FooBarUnion>,
  ): $SelectionSet
}

export interface Result {
  <$SelectionSet extends object>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Result>): $SelectionSet
}

export interface lowerCaseUnion {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.lowerCaseUnion>,
  ): $SelectionSet
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

export interface DateInterface1 {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.DateInterface1>,
  ): $SelectionSet
}

export interface Error {
  <$SelectionSet extends object>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Error>): $SelectionSet
}

export interface Interface {
  <$SelectionSet extends object>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Interface>,
  ): $SelectionSet
}
