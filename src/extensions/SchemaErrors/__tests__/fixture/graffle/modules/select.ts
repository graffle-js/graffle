import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { OperationTypeNode } from 'graphql'
import * as $$Data from './data.js'
import * as $$Schema from './schema/$.js'
import * as $$SelectionSets from './selection-sets/$.js'

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

import { createSelect } from '#graffle/client'

/**
 * Runtime utilities for native GraphQL document selection.
 *
 * Used with the `.select()` method to build type-safe native GraphQL documents.
 *
 * @example
 * ```ts
 * import { Select } from './graffle/select.js'
 *
 * const document = Select.Query({ pokemon: { name: true } })
 * ```
 */
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

/**
 * Type utilities for inferring result types from selection sets.
 *
 * Given a selection set, these types compute the exact TypeScript type
 * of the result data returned from a GraphQL operation.
 *
 * # Usage
 *
 * Each type corresponds to a GraphQL schema type and takes a selection set
 * generic parameter, returning the inferred result type.
 *
 * @example
 * ```ts
 * import type { Select } from './graffle/select.js'
 *
 * type Result = Select.Query<{ pokemon: { name: true } }>
 * // Result: { pokemon: { name: string } }
 * ```
 */
export namespace Select {
  //                                                Root
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Infer result type for Query operations.
   */
  export type Query<$SelectionSet extends $$SelectionSets.Query> = $$Utilities.DocumentBuilderKit.InferResult.Operation<
    $SelectionSet,
    $$Schema.Schema,
    OperationTypeNode.QUERY
  >
  /**
   * Infer result type for Mutation operations.
   */
  export type Mutation<$SelectionSet extends $$SelectionSets.Mutation> =
    $$Utilities.DocumentBuilderKit.InferResult.Operation<$SelectionSet, $$Schema.Schema, OperationTypeNode.MUTATION>

  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Infer result type for Bar selection sets.
   */
  export type Bar<$SelectionSet extends $$SelectionSets.Bar> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Bar']
    >
  /**
   * Infer result type for DateObject1 selection sets.
   */
  export type DateObject1<$SelectionSet extends $$SelectionSets.DateObject1> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DateObject1']
    >
  /**
   * Infer result type for DateObject2 selection sets.
   */
  export type DateObject2<$SelectionSet extends $$SelectionSets.DateObject2> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DateObject2']
    >
  /**
   * Infer result type for ErrorOne selection sets.
   */
  export type ErrorOne<$SelectionSet extends $$SelectionSets.ErrorOne> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ErrorOne']
    >
  /**
   * Infer result type for ErrorTwo selection sets.
   */
  export type ErrorTwo<$SelectionSet extends $$SelectionSets.ErrorTwo> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ErrorTwo']
    >
  /**
   * Object documentation.
   *
   * Infer result type for Foo selection sets.
   */
  export type Foo<$SelectionSet extends $$SelectionSets.Foo> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Foo']
    >
  /**
   * Infer result type for Object1 selection sets.
   */
  export type Object1<$SelectionSet extends $$SelectionSets.Object1> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Object1']
    >
  /**
   * Infer result type for Object1ImplementingInterface selection sets.
   */
  export type Object1ImplementingInterface<$SelectionSet extends $$SelectionSets.Object1ImplementingInterface> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Object1ImplementingInterface']
    >
  /**
   * Infer result type for Object2ImplementingInterface selection sets.
   */
  export type Object2ImplementingInterface<$SelectionSet extends $$SelectionSets.Object2ImplementingInterface> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Object2ImplementingInterface']
    >
  /**
   * Infer result type for ObjectChildA selection sets.
   */
  export type ObjectChildA<$SelectionSet extends $$SelectionSets.ObjectChildA> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectChildA']
    >
  /**
   * Infer result type for ObjectChildB selection sets.
   */
  export type ObjectChildB<$SelectionSet extends $$SelectionSets.ObjectChildB> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectChildB']
    >
  /**
   * Infer result type for ObjectGrandparent selection sets.
   */
  export type ObjectGrandparent<$SelectionSet extends $$SelectionSets.ObjectGrandparent> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectGrandparent']
    >
  /**
   * Infer result type for ObjectNested selection sets.
   */
  export type ObjectNested<$SelectionSet extends $$SelectionSets.ObjectNested> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectNested']
    >
  /**
   * Infer result type for ObjectNestedWithArgs selection sets.
   */
  export type ObjectNestedWithArgs<$SelectionSet extends $$SelectionSets.ObjectNestedWithArgs> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectNestedWithArgs']
    >
  /**
   * Infer result type for ObjectParent selection sets.
   */
  export type ObjectParent<$SelectionSet extends $$SelectionSets.ObjectParent> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectParent']
    >
  /**
   * Infer result type for ObjectUnion selection sets.
   */
  export type ObjectUnion<$SelectionSet extends $$SelectionSets.ObjectUnion> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectUnion']
    >
  /**
   * Infer result type for lowerCaseObject selection sets.
   */
  export type lowerCaseObject<$SelectionSet extends $$SelectionSets.lowerCaseObject> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['lowerCaseObject']
    >
  /**
   * Infer result type for lowerCaseObject2 selection sets.
   */
  export type lowerCaseObject2<$SelectionSet extends $$SelectionSets.lowerCaseObject2> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['lowerCaseObject2']
    >

  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Infer result type for DateUnion selection sets.
   */
  export type DateUnion<$SelectionSet extends $$SelectionSets.DateUnion> =
    $$Utilities.DocumentBuilderKit.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DateUnion']
    >
  /**
   * Union documentation.
   *
   * Infer result type for FooBarUnion selection sets.
   */
  export type FooBarUnion<$SelectionSet extends $$SelectionSets.FooBarUnion> =
    $$Utilities.DocumentBuilderKit.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['FooBarUnion']
    >
  /**
   * Infer result type for Result selection sets.
   */
  export type Result<$SelectionSet extends $$SelectionSets.Result> = $$Utilities.DocumentBuilderKit.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Result']
  >
  /**
   * Infer result type for lowerCaseUnion selection sets.
   */
  export type lowerCaseUnion<$SelectionSet extends $$SelectionSets.lowerCaseUnion> =
    $$Utilities.DocumentBuilderKit.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['lowerCaseUnion']
    >

  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Infer result type for DateInterface1 selection sets.
   */
  export type DateInterface1<$SelectionSet extends $$SelectionSets.DateInterface1> =
    $$Utilities.DocumentBuilderKit.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DateInterface1']
    >
  /**
   * Infer result type for Error selection sets.
   */
  export type Error<$SelectionSet extends $$SelectionSets.Error> = $$Utilities.DocumentBuilderKit.InferResult.Interface<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Error']
  >
  /**
   * Infer result type for Interface selection sets.
   */
  export type Interface<$SelectionSet extends $$SelectionSets.Interface> =
    $$Utilities.DocumentBuilderKit.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Interface']
    >
  /**
   * Infer result type for InterfaceChildA selection sets.
   */
  export type InterfaceChildA<$SelectionSet extends $$SelectionSets.InterfaceChildA> =
    $$Utilities.DocumentBuilderKit.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['InterfaceChildA']
    >
  /**
   * Infer result type for InterfaceChildB selection sets.
   */
  export type InterfaceChildB<$SelectionSet extends $$SelectionSets.InterfaceChildB> =
    $$Utilities.DocumentBuilderKit.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['InterfaceChildB']
    >
  /**
   * Infer result type for InterfaceGrandparent selection sets.
   */
  export type InterfaceGrandparent<$SelectionSet extends $$SelectionSets.InterfaceGrandparent> =
    $$Utilities.DocumentBuilderKit.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['InterfaceGrandparent']
    >
  /**
   * Infer result type for InterfaceParent selection sets.
   */
  export type InterfaceParent<$SelectionSet extends $$SelectionSets.InterfaceParent> =
    $$Utilities.DocumentBuilderKit.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['InterfaceParent']
    >
}
