import type { OperationTypeNode } from 'graphql'
import type { InferResult } from '../../../../../../src/entrypoints/schema.js'
import * as Data from './Data.js'
import type { Schema } from './Schema.js'
import type * as SelectionSets from './SelectionSets.js'

//
//
//
//
//
//
// ==================================================================================================
//                                              Runtime
// ==================================================================================================
//
//
//
//
//
//
import { createSelect } from '../../../../../../src/entrypoints/client.js'
export const Select = createSelect(Data.Name)

//
//
//
//
//
//
// ==================================================================================================
//                                             Buildtime
// ==================================================================================================
//
//
//
//
//
//

export namespace Select {
  //                                                Root
  // --------------------------------------------------------------------------------------------------
  //
  export type Query<$SelectionSet extends SelectionSets.Query> = InferResult.Operation<
    $SelectionSet,
    Schema,
    OperationTypeNode.QUERY
  >
  export type Mutation<$SelectionSet extends SelectionSets.Mutation> = InferResult.Operation<
    $SelectionSet,
    Schema,
    OperationTypeNode.MUTATION
  >
  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //
  export type Bar<$SelectionSet extends SelectionSets.Bar> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['Bar']
  >
  export type DateObject1<$SelectionSet extends SelectionSets.DateObject1> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['DateObject1']
  >
  export type DateObject2<$SelectionSet extends SelectionSets.DateObject2> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['DateObject2']
  >
  export type ErrorOne<$SelectionSet extends SelectionSets.ErrorOne> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['ErrorOne']
  >
  export type ErrorTwo<$SelectionSet extends SelectionSets.ErrorTwo> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['ErrorTwo']
  >
  export type Foo<$SelectionSet extends SelectionSets.Foo> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['Foo']
  >
  export type Object1<$SelectionSet extends SelectionSets.Object1> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['Object1']
  >
  export type Object1ImplementingInterface<$SelectionSet extends SelectionSets.Object1ImplementingInterface> =
    InferResult.OutputObject<$SelectionSet, Schema, Schema['allTypes']['Object1ImplementingInterface']>
  export type Object2ImplementingInterface<$SelectionSet extends SelectionSets.Object2ImplementingInterface> =
    InferResult.OutputObject<$SelectionSet, Schema, Schema['allTypes']['Object2ImplementingInterface']>
  export type ObjectNested<$SelectionSet extends SelectionSets.ObjectNested> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['ObjectNested']
  >
  export type ObjectUnion<$SelectionSet extends SelectionSets.ObjectUnion> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['ObjectUnion']
  >
  export type lowerCaseObject<$SelectionSet extends SelectionSets.lowerCaseObject> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['lowerCaseObject']
  >
  export type lowerCaseObject2<$SelectionSet extends SelectionSets.lowerCaseObject2> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['lowerCaseObject2']
  >
  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //
  export type DateUnion<$SelectionSet extends SelectionSets.DateUnion> = InferResult.Union<
    $SelectionSet,
    Schema,
    Schema['allTypes']['DateUnion']
  >
  export type FooBarUnion<$SelectionSet extends SelectionSets.FooBarUnion> = InferResult.Union<
    $SelectionSet,
    Schema,
    Schema['allTypes']['FooBarUnion']
  >
  export type Result<$SelectionSet extends SelectionSets.Result> = InferResult.Union<
    $SelectionSet,
    Schema,
    Schema['allTypes']['Result']
  >
  export type lowerCaseUnion<$SelectionSet extends SelectionSets.lowerCaseUnion> = InferResult.Union<
    $SelectionSet,
    Schema,
    Schema['allTypes']['lowerCaseUnion']
  >
  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //
  export type DateInterface1<$SelectionSet extends SelectionSets.DateInterface1> = InferResult.Interface<
    $SelectionSet,
    Schema,
    Schema['allTypes']['DateInterface1']
  >
  export type Error<$SelectionSet extends SelectionSets.Error> = InferResult.Interface<
    $SelectionSet,
    Schema,
    Schema['allTypes']['Error']
  >
  export type Interface<$SelectionSet extends SelectionSets.Interface> = InferResult.Interface<
    $SelectionSet,
    Schema,
    Schema['allTypes']['Interface']
  >
}
