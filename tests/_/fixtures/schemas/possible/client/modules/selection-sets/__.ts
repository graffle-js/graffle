export * as $Named from './$named.js'
export * as $Scalars from './scalars/_.js'

export type * from './_context.js'
export type * from './_document.js'

export type * from './enums/ABCEnum.js'
export type * from './enums/Case.js'
export type * from './enums/ChildAInterfaceHierarchyMember.js'
export type * from './enums/ChildBInterfaceHierarchyMember.js'
export type * from './enums/GrandparentInterfaceHierarchyMember.js'
export type * from './enums/ParentInterfaceHierarchyMember.js'
export type * from './input-objects/InputObject/_.js'
export type * from './input-objects/InputObjectCircular/_.js'
export type * from './input-objects/InputObjectEnum/_.js'
export type * from './input-objects/InputObjectNested/_.js'
export type * from './input-objects/InputObjectNestedNonNull/_.js'
export type * from './interfaces/DateInterface1/_.js'
export type * from './interfaces/Error/_.js'
export type * from './interfaces/Interface/_.js'
export type * from './interfaces/InterfaceChildA/_.js'
export type * from './interfaces/InterfaceChildB/_.js'
export type * from './interfaces/InterfaceGrandparent/_.js'
export type * from './interfaces/InterfaceParent/_.js'
export type * from './objects/Bar/_.js'
export type * from './objects/DateObject1/_.js'
export type * from './objects/DateObject2/_.js'
export type * from './objects/ErrorOne/_.js'
export type * from './objects/ErrorTwo/_.js'
export type * from './objects/Foo/_.js'
export type * from './objects/lowerCaseObject/_.js'
export type * from './objects/lowerCaseObject2/_.js'
export type * from './objects/Object1/_.js'
export type * from './objects/Object1ImplementingInterface/_.js'
export type * from './objects/Object2ImplementingInterface/_.js'
export type * from './objects/ObjectChildA/_.js'
export type * from './objects/ObjectChildB/_.js'
export type * from './objects/ObjectGrandparent/_.js'
export type * from './objects/ObjectNested/_.js'
export type * from './objects/ObjectNestedWithArgs/_.js'
export type * from './objects/ObjectParent/_.js'
export type * from './objects/ObjectUnion/_.js'
export type * from './roots/Mutation/_.js'
export type * from './roots/Query/_.js'
export type * from './unions/DateUnion/_.js'
export type * from './unions/FooBarUnion/_.js'
export type * from './unions/lowerCaseUnion/_.js'
export type * from './unions/Result/_.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { GraphqlKit } from '#graffle/utilities-for-generated'
import type * as $$Schema from '../schema/_.js'

/**
 * Infer the result type of a Query selection set.
 *
 * Given a selection set object, this type computes the exact TypeScript type
 * of the data that will be returned from executing the Query operation.
 */
export type Query$Infer<$SelectionSet extends object> = GraphqlKit.Document.Object.InferResult.OperationQuery<
  $SelectionSet,
  $$Schema.Schema
>

/**
 * Infer the variables type for a Query selection set.
 *
 * @deprecated This is temporarily typed as `any` and will be replaced with the new analysis system.
 */
export type Query$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system

/**
 * Infer the result type of a Mutation selection set.
 *
 * Given a selection set object, this type computes the exact TypeScript type
 * of the data that will be returned from executing the Mutation operation.
 */
export type Mutation$Infer<$SelectionSet extends object> = GraphqlKit.Document.Object.InferResult.OperationMutation<
  $SelectionSet,
  $$Schema.Schema
>

/**
 * Infer the variables type for a Mutation selection set.
 *
 * @deprecated This is temporarily typed as `any` and will be replaced with the new analysis system.
 */
export type Mutation$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system
