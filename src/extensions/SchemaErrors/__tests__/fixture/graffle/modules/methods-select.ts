import type * as $$Utilities from '#graffle/utilities-for-generated'
import * as $$SelectionSets from './selection-sets/$.js'

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

/**
 * Selection method types for building native GraphQL documents.
 *
 * Maps each GraphQL schema type to its corresponding selection method interface.
 * These methods are available on `.select()` to build type-safe selection sets
 * that return the selection set itself (for document building).
 */

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
  ObjectChildA: ObjectChildA
  ObjectChildB: ObjectChildB
  ObjectGrandparent: ObjectGrandparent
  ObjectNested: ObjectNested
  ObjectNestedWithArgs: ObjectNestedWithArgs
  ObjectParent: ObjectParent
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
  InterfaceChildA: InterfaceChildA
  InterfaceChildB: InterfaceChildB
  InterfaceGrandparent: InterfaceGrandparent
  InterfaceParent: InterfaceParent
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

/**
 * Build type-safe selection set for Query.
 */
export interface Query {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query>): $SelectionSet
}

/**
 * Build type-safe selection set for Mutation.
 */
export interface Mutation {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation>): $SelectionSet
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

/**
 * Build type-safe selection set for Bar.
 */
export interface Bar {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Bar>): $SelectionSet
}

/**
 * Build type-safe selection set for DateObject1.
 */
export interface DateObject1 {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.DateObject1>): $SelectionSet
}

/**
 * Build type-safe selection set for DateObject2.
 */
export interface DateObject2 {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.DateObject2>): $SelectionSet
}

/**
 * Build type-safe selection set for ErrorOne.
 */
export interface ErrorOne {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ErrorOne>): $SelectionSet
}

/**
 * Build type-safe selection set for ErrorTwo.
 */
export interface ErrorTwo {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ErrorTwo>): $SelectionSet
}

/**
 * Object documentation.
 *
 * Build type-safe selection set for Foo.
 */
export interface Foo {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Foo>): $SelectionSet
}

/**
 * Build type-safe selection set for Object1.
 */
export interface Object1 {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Object1>): $SelectionSet
}

/**
 * Build type-safe selection set for Object1ImplementingInterface.
 */
export interface Object1ImplementingInterface {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Object1ImplementingInterface>,
  ): $SelectionSet
}

/**
 * Build type-safe selection set for Object2ImplementingInterface.
 */
export interface Object2ImplementingInterface {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Object2ImplementingInterface>,
  ): $SelectionSet
}

/**
 * Build type-safe selection set for ObjectChildA.
 */
export interface ObjectChildA {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ObjectChildA>): $SelectionSet
}

/**
 * Build type-safe selection set for ObjectChildB.
 */
export interface ObjectChildB {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ObjectChildB>): $SelectionSet
}

/**
 * Build type-safe selection set for ObjectGrandparent.
 */
export interface ObjectGrandparent {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ObjectGrandparent>): $SelectionSet
}

/**
 * Build type-safe selection set for ObjectNested.
 */
export interface ObjectNested {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ObjectNested>): $SelectionSet
}

/**
 * Build type-safe selection set for ObjectNestedWithArgs.
 */
export interface ObjectNestedWithArgs {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ObjectNestedWithArgs>): $SelectionSet
}

/**
 * Build type-safe selection set for ObjectParent.
 */
export interface ObjectParent {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ObjectParent>): $SelectionSet
}

/**
 * Build type-safe selection set for ObjectUnion.
 */
export interface ObjectUnion {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ObjectUnion>): $SelectionSet
}

/**
 * Build type-safe selection set for lowerCaseObject.
 */
export interface lowerCaseObject {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.lowerCaseObject>): $SelectionSet
}

/**
 * Build type-safe selection set for lowerCaseObject2.
 */
export interface lowerCaseObject2 {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.lowerCaseObject2>): $SelectionSet
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

/**
 * Build type-safe selection set for DateUnion.
 */
export interface DateUnion {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.DateUnion>): $SelectionSet
}

/**
 * Union documentation.
 *
 * Build type-safe selection set for FooBarUnion.
 */
export interface FooBarUnion {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.FooBarUnion>): $SelectionSet
}

/**
 * Build type-safe selection set for Result.
 */
export interface Result {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Result>): $SelectionSet
}

/**
 * Build type-safe selection set for lowerCaseUnion.
 */
export interface lowerCaseUnion {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.lowerCaseUnion>): $SelectionSet
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

/**
 * Build type-safe selection set for DateInterface1.
 */
export interface DateInterface1 {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.DateInterface1>): $SelectionSet
}

/**
 * Build type-safe selection set for Error.
 */
export interface Error {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Error>): $SelectionSet
}

/**
 * Build type-safe selection set for Interface.
 */
export interface Interface {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Interface>): $SelectionSet
}

/**
 * Build type-safe selection set for InterfaceChildA.
 */
export interface InterfaceChildA {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.InterfaceChildA>): $SelectionSet
}

/**
 * Build type-safe selection set for InterfaceChildB.
 */
export interface InterfaceChildB {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.InterfaceChildB>): $SelectionSet
}

/**
 * Build type-safe selection set for InterfaceGrandparent.
 */
export interface InterfaceGrandparent {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.InterfaceGrandparent>): $SelectionSet
}

/**
 * Build type-safe selection set for InterfaceParent.
 */
export interface InterfaceParent {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.InterfaceParent>): $SelectionSet
}
