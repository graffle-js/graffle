import type { OperationTypeNode } from 'graphql'
import type * as $$Utilities from '../../../../../entrypoints/utilities-for-generated.js'
import * as $$Data from './data.js'
import * as $$Schema from './schema.js'
import * as $$SelectionSets from './selection-sets.js'

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
import { createSelect } from '../../../../../entrypoints/client.js'
export const Select = createSelect($$Data.Name)

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
  export type Query<$SelectionSet extends $$SelectionSets.Query> = $$Utilities.DocumentBuilder.InferResult.Operation<
    $SelectionSet,
    $$Schema.Schema,
    OperationTypeNode.QUERY
  >
  export type Mutation<$SelectionSet extends $$SelectionSets.Mutation> =
    $$Utilities.DocumentBuilder.InferResult.Operation<$SelectionSet, $$Schema.Schema, OperationTypeNode.MUTATION>
  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //
  export type Bar<$SelectionSet extends $$SelectionSets.Bar> = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Bar']
  >
  export type DateObject1<$SelectionSet extends $$SelectionSets.DateObject1> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DateObject1']
    >
  export type DateObject2<$SelectionSet extends $$SelectionSets.DateObject2> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DateObject2']
    >
  export type ErrorOne<$SelectionSet extends $$SelectionSets.ErrorOne> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ErrorOne']
    >
  export type ErrorTwo<$SelectionSet extends $$SelectionSets.ErrorTwo> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ErrorTwo']
    >
  export type Foo<$SelectionSet extends $$SelectionSets.Foo> = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Foo']
  >
  export type Object1<$SelectionSet extends $$SelectionSets.Object1> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Object1']
    >
  export type Object1ImplementingInterface<$SelectionSet extends $$SelectionSets.Object1ImplementingInterface> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Object1ImplementingInterface']
    >
  export type Object2ImplementingInterface<$SelectionSet extends $$SelectionSets.Object2ImplementingInterface> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Object2ImplementingInterface']
    >
  export type ObjectChildA<$SelectionSet extends $$SelectionSets.ObjectChildA> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectChildA']
    >
  export type ObjectChildB<$SelectionSet extends $$SelectionSets.ObjectChildB> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectChildB']
    >
  export type ObjectGrandparent<$SelectionSet extends $$SelectionSets.ObjectGrandparent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectGrandparent']
    >
  export type ObjectNested<$SelectionSet extends $$SelectionSets.ObjectNested> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectNested']
    >
  export type ObjectParent<$SelectionSet extends $$SelectionSets.ObjectParent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectParent']
    >
  export type ObjectUnion<$SelectionSet extends $$SelectionSets.ObjectUnion> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectUnion']
    >
  export type lowerCaseObject<$SelectionSet extends $$SelectionSets.lowerCaseObject> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['lowerCaseObject']
    >
  export type lowerCaseObject2<$SelectionSet extends $$SelectionSets.lowerCaseObject2> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['lowerCaseObject2']
    >
  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //
  export type DateUnion<$SelectionSet extends $$SelectionSets.DateUnion> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DateUnion']
    >
  export type FooBarUnion<$SelectionSet extends $$SelectionSets.FooBarUnion> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['FooBarUnion']
    >
  export type Result<$SelectionSet extends $$SelectionSets.Result> = $$Utilities.DocumentBuilder.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Result']
  >
  export type lowerCaseUnion<$SelectionSet extends $$SelectionSets.lowerCaseUnion> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['lowerCaseUnion']
    >
  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //
  export type DateInterface1<$SelectionSet extends $$SelectionSets.DateInterface1> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DateInterface1']
    >
  export type Error<$SelectionSet extends $$SelectionSets.Error> = $$Utilities.DocumentBuilder.InferResult.Interface<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Error']
  >
  export type Interface<$SelectionSet extends $$SelectionSets.Interface> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Interface']
    >
  export type InterfaceChildA<$SelectionSet extends $$SelectionSets.InterfaceChildA> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['InterfaceChildA']
    >
  export type InterfaceChildB<$SelectionSet extends $$SelectionSets.InterfaceChildB> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['InterfaceChildB']
    >
  export type InterfaceGrandparent<$SelectionSet extends $$SelectionSets.InterfaceGrandparent> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['InterfaceGrandparent']
    >
  export type InterfaceParent<$SelectionSet extends $$SelectionSets.InterfaceParent> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['InterfaceParent']
    >
}
