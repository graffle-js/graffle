import type * as $$Utilities from '#graffle/utilities-for-generated';
import type { OperationTypeNode } from 'graphql';
import * as $$Schema from './schema/$.js';
import * as $$SelectionSets from './selection-sets/$.js';
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
export declare const Select: import("./methods-select.js").$MethodsSelect;
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
export declare namespace Select {
    /**
     * Infer result type for Query operations.
     */
    type Query<$SelectionSet extends $$SelectionSets.Query> = $$Utilities.Docpar.Object.InferResult.Operation<$SelectionSet, $$Schema.Schema, OperationTypeNode.QUERY>;
    /**
     * Infer result type for Mutation operations.
     */
    type Mutation<$SelectionSet extends $$SelectionSets.Mutation> = $$Utilities.Docpar.Object.InferResult.Operation<$SelectionSet, $$Schema.Schema, OperationTypeNode.MUTATION>;
    /**
     * Infer result type for Bar selection sets.
     */
    type Bar<$SelectionSet extends $$SelectionSets.Bar> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Bar']>;
    /**
     * Infer result type for DateObject1 selection sets.
     */
    type DateObject1<$SelectionSet extends $$SelectionSets.DateObject1> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['DateObject1']>;
    /**
     * Infer result type for DateObject2 selection sets.
     */
    type DateObject2<$SelectionSet extends $$SelectionSets.DateObject2> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['DateObject2']>;
    /**
     * Infer result type for ErrorOne selection sets.
     */
    type ErrorOne<$SelectionSet extends $$SelectionSets.ErrorOne> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ErrorOne']>;
    /**
     * Infer result type for ErrorTwo selection sets.
     */
    type ErrorTwo<$SelectionSet extends $$SelectionSets.ErrorTwo> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ErrorTwo']>;
    /**
     * Object documentation.
     *
     * Infer result type for Foo selection sets.
     */
    type Foo<$SelectionSet extends $$SelectionSets.Foo> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Foo']>;
    /**
     * Infer result type for Object1 selection sets.
     */
    type Object1<$SelectionSet extends $$SelectionSets.Object1> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Object1']>;
    /**
     * Infer result type for Object1ImplementingInterface selection sets.
     */
    type Object1ImplementingInterface<$SelectionSet extends $$SelectionSets.Object1ImplementingInterface> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Object1ImplementingInterface']>;
    /**
     * Infer result type for Object2ImplementingInterface selection sets.
     */
    type Object2ImplementingInterface<$SelectionSet extends $$SelectionSets.Object2ImplementingInterface> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Object2ImplementingInterface']>;
    /**
     * Infer result type for ObjectChildA selection sets.
     */
    type ObjectChildA<$SelectionSet extends $$SelectionSets.ObjectChildA> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ObjectChildA']>;
    /**
     * Infer result type for ObjectChildB selection sets.
     */
    type ObjectChildB<$SelectionSet extends $$SelectionSets.ObjectChildB> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ObjectChildB']>;
    /**
     * Infer result type for ObjectGrandparent selection sets.
     */
    type ObjectGrandparent<$SelectionSet extends $$SelectionSets.ObjectGrandparent> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ObjectGrandparent']>;
    /**
     * Infer result type for ObjectNested selection sets.
     */
    type ObjectNested<$SelectionSet extends $$SelectionSets.ObjectNested> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ObjectNested']>;
    /**
     * Infer result type for ObjectNestedWithArgs selection sets.
     */
    type ObjectNestedWithArgs<$SelectionSet extends $$SelectionSets.ObjectNestedWithArgs> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ObjectNestedWithArgs']>;
    /**
     * Infer result type for ObjectParent selection sets.
     */
    type ObjectParent<$SelectionSet extends $$SelectionSets.ObjectParent> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ObjectParent']>;
    /**
     * Infer result type for ObjectUnion selection sets.
     */
    type ObjectUnion<$SelectionSet extends $$SelectionSets.ObjectUnion> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ObjectUnion']>;
    /**
     * Infer result type for lowerCaseObject selection sets.
     */
    type lowerCaseObject<$SelectionSet extends $$SelectionSets.lowerCaseObject> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['lowerCaseObject']>;
    /**
     * Infer result type for lowerCaseObject2 selection sets.
     */
    type lowerCaseObject2<$SelectionSet extends $$SelectionSets.lowerCaseObject2> = $$Utilities.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['lowerCaseObject2']>;
    /**
     * Infer result type for DateUnion selection sets.
     */
    type DateUnion<$SelectionSet extends $$SelectionSets.DateUnion> = $$Utilities.Docpar.Object.InferResult.Union<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['DateUnion']>;
    /**
     * Union documentation.
     *
     * Infer result type for FooBarUnion selection sets.
     */
    type FooBarUnion<$SelectionSet extends $$SelectionSets.FooBarUnion> = $$Utilities.Docpar.Object.InferResult.Union<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['FooBarUnion']>;
    /**
     * Infer result type for Result selection sets.
     */
    type Result<$SelectionSet extends $$SelectionSets.Result> = $$Utilities.Docpar.Object.InferResult.Union<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Result']>;
    /**
     * Infer result type for lowerCaseUnion selection sets.
     */
    type lowerCaseUnion<$SelectionSet extends $$SelectionSets.lowerCaseUnion> = $$Utilities.Docpar.Object.InferResult.Union<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['lowerCaseUnion']>;
    /**
     * Infer result type for DateInterface1 selection sets.
     */
    type DateInterface1<$SelectionSet extends $$SelectionSets.DateInterface1> = $$Utilities.Docpar.Object.InferResult.Interface<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['DateInterface1']>;
    /**
     * Infer result type for Error selection sets.
     */
    type Error<$SelectionSet extends $$SelectionSets.Error> = $$Utilities.Docpar.Object.InferResult.Interface<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Error']>;
    /**
     * Infer result type for Interface selection sets.
     */
    type Interface<$SelectionSet extends $$SelectionSets.Interface> = $$Utilities.Docpar.Object.InferResult.Interface<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Interface']>;
    /**
     * Infer result type for InterfaceChildA selection sets.
     */
    type InterfaceChildA<$SelectionSet extends $$SelectionSets.InterfaceChildA> = $$Utilities.Docpar.Object.InferResult.Interface<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['InterfaceChildA']>;
    /**
     * Infer result type for InterfaceChildB selection sets.
     */
    type InterfaceChildB<$SelectionSet extends $$SelectionSets.InterfaceChildB> = $$Utilities.Docpar.Object.InferResult.Interface<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['InterfaceChildB']>;
    /**
     * Infer result type for InterfaceGrandparent selection sets.
     */
    type InterfaceGrandparent<$SelectionSet extends $$SelectionSets.InterfaceGrandparent> = $$Utilities.Docpar.Object.InferResult.Interface<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['InterfaceGrandparent']>;
    /**
     * Infer result type for InterfaceParent selection sets.
     */
    type InterfaceParent<$SelectionSet extends $$SelectionSets.InterfaceParent> = $$Utilities.Docpar.Object.InferResult.Interface<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['InterfaceParent']>;
}
//# sourceMappingURL=select.d.ts.map