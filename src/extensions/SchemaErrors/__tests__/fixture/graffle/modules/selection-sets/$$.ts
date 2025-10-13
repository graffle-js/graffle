export * as $Named from './$named.js'
export * as $Scalars from './scalars/$.js'

export type * from './_context.js'
export type * from './_document.js'

export type * from './enums/ABCEnum.js'
export type * from './enums/Case.js'
export type * from './enums/ChildAInterfaceHierarchyMember.js'
export type * from './enums/ChildBInterfaceHierarchyMember.js'
export type * from './enums/GrandparentInterfaceHierarchyMember.js'
export type * from './enums/ParentInterfaceHierarchyMember.js'
export type * from './input-objects/InputObject/$.js'
export type * from './input-objects/InputObjectCircular/$.js'
export type * from './input-objects/InputObjectEnum/$.js'
export type * from './input-objects/InputObjectNested/$.js'
export type * from './input-objects/InputObjectNestedNonNull/$.js'
export type * from './interfaces/DateInterface1/$.js'
export type * from './interfaces/Error/$.js'
export type * from './interfaces/Interface/$.js'
export type * from './interfaces/InterfaceChildA/$.js'
export type * from './interfaces/InterfaceChildB/$.js'
export type * from './interfaces/InterfaceGrandparent/$.js'
export type * from './interfaces/InterfaceParent/$.js'
export type * from './objects/Bar/$.js'
export type * from './objects/DateObject1/$.js'
export type * from './objects/DateObject2/$.js'
export type * from './objects/ErrorOne/$.js'
export type * from './objects/ErrorTwo/$.js'
export type * from './objects/Foo/$.js'
export type * from './objects/lowerCaseObject/$.js'
export type * from './objects/lowerCaseObject2/$.js'
export type * from './objects/Object1/$.js'
export type * from './objects/Object1ImplementingInterface/$.js'
export type * from './objects/Object2ImplementingInterface/$.js'
export type * from './objects/ObjectChildA/$.js'
export type * from './objects/ObjectChildB/$.js'
export type * from './objects/ObjectGrandparent/$.js'
export type * from './objects/ObjectNested/$.js'
export type * from './objects/ObjectNestedWithArgs/$.js'
export type * from './objects/ObjectParent/$.js'
export type * from './objects/ObjectUnion/$.js'
export type * from './roots/Mutation/$.js'
export type * from './roots/Query/$.js'
export type * from './unions/DateUnion/$.js'
export type * from './unions/FooBarUnion/$.js'
export type * from './unions/lowerCaseUnion/$.js'
export type * from './unions/Result/$.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from '../schema/$.js'

/**
 * Infer the result type of a Query selection set.
 *
 * Given a selection set object, this type computes the exact TypeScript type
 * of the data that will be returned from executing the Query operation.
 */
export type Query$Infer<$SelectionSet extends object> = $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
export type Mutation$Infer<$SelectionSet extends object> = $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
  $SelectionSet,
  $$Schema.Schema
>

/**
 * Infer the variables type for a Mutation selection set.
 *
 * @deprecated This is temporarily typed as `any` and will be replaced with the new analysis system.
 */
export type Mutation$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system
