// dprint-ignore-file
import type { RequestResult } from '#src/types/RequestResult/_.js'
import type { Type } from '../../../../schema/type/_.js'
import type { DateScalar } from '#test/fixtures/scalars'
import type { Possible } from '#test/schema/possible/client/_.js'
import type { PossibleNoCustomScalars } from '#test/schema/possible/clientNoCustomScalars/_.js'
import type { db } from '#test/schema/possible/db.js'
import { Ts } from '@wollybeard/kit'
import type { InferResult } from './_.js'

const A = Ts.Assert

type $<$SelectionSet extends Possible.SelectionSets.Query<any>> = RequestResult.SimplifyWithEmptyContext<
  InferResult.OperationQuery<$SelectionSet, Possible.$.Schema>
>

type $NoScalars<$SelectionSet extends PossibleNoCustomScalars.SelectionSets.Query<any>> =
  RequestResult.SimplifyWithEmptyContext<
    InferResult.OperationQuery<$SelectionSet, PossibleNoCustomScalars.$.Schema>
  >

type $Registry = Type.Scalars.Registry.AddScalar<Type.Scalars.Registry.Empty, typeof DateScalar>
type $Context = { scalars: $Registry; variablesEnabled: false }

type $WithDate<$SelectionSet extends Possible.SelectionSets.Query<$Context>> = InferResult.OperationQuery<
  $SelectionSet,
  Possible.$.Schema<$Registry>
>

type NestedObjectAliasWithArgsTest = $<{ objectNestedWithArgs: { object: ['obj2', { $: { int: 5 }; id: true }] } }>

// dprint-ignore-file
A.exact.ofAs<{ __typename: 'Query' }>()
       .onAs<$<{ __typename: true }>>()
A.exact.ofAs<{ id: null | string }>()
       .onAs<$<{ id: true }>>()
A.exact.ofAs<{}>()
       .onAs<$<{ id: false }>>()
A.exact.ofAs<{}>()
       .onAs<$<{ id: undefined }>>()
A.exact.ofAs<{ id?: null | string }>()
       .onAs<$<{ id: true | undefined }>>()
A.exact.ofAs<{ id?: null | string }>()
       .onAs<$<{ id: boolean }>>()
A.exact.ofAs<{ idNonNull: string }>()
       .onAs<$<{ idNonNull: true }>>()
A.exact.ofAs<{}>()
       .onAs<$<{ idNonNull: false }>>()
A.exact.ofAs<{}>()
       .onAs<$<{ idNonNull: undefined }>>()
A.exact.ofAs<{ idNonNull?: string }>()
       .onAs<$<{ idNonNull: true | undefined }>>()
A.exact.ofAs<{ idNonNull?: string }>()
       .onAs<$<{ idNonNull: boolean }>>()
A.exact.ofAs<{ id: null | string }>()
       .onAs<$<{ id: true; string: false }>>()
A.exact.ofAs<{ id: null | string }>()
       .onAs<$<{ id: true; string: undefined }>>()
A.exact.ofAs<{ date: null | string }>()
       .onAs<$NoScalars<{ date: true }>>()
// TODO: should this be using simplify to all equal?
A.equiv.ofAs<{ date: null | Date }>()
       .onAs<$WithDate<{ date: true }>>()
A.exact.ofAs<{ listIntNonNull: number[] }>()
       .onAs<$<{ listIntNonNull: true }>>()
A.exact.ofAs<{ listInt: null|(null|number)[] }>()
       .onAs<$<{ listInt: true }>>()
A.exact.ofAs<{ listListIntNonNull: number[][] }>()
       .onAs<$<{ listListIntNonNull: true }>>()
A.exact.ofAs<{ listListInt: null|((null|(null|number)[])[]) }>()
       .onAs<$<{ listListInt: true }>>()
A.exact.ofAs<{ abcEnum: null|'A'|'B'|'C' }>()
       .onAs<$<{ abcEnum: true }>>()
A.exact.ofAs<{ object: null | { id: string | null } }>()
       .onAs<$<{ object: { id: true } }>>()
A.exact.ofAs<{ objectNonNull: { id: string | null } }>()
       .onAs<$<{ objectNonNull: { id: true } }>>()
A.exact.ofAs<{ objectWithArgs: null | { id: string | null } }>()
       .onAs<$<{ objectWithArgs: { $: { id: 'abc' }; id: true }}>>()
A.exact.ofAs<{ objectNonNull: { __typename: "Object1"; string: null|string; int: null|number; float: null|number; boolean: null|boolean; id: null|string; ABCEnum: null|db.ABCEnum } }>().onAs<$<{ objectNonNull: { $scalars: true } }>>()
A.exact.ofAs<{ objectNested: null | { __typename: "ObjectNested"; id: null|string } }>()
       .onAs<$<{ objectNested: { $scalars: true } }>>()
A.exact.ofAs<{ objectNonNull: { __typename: "Object1" } }>()
       .onAs<$<{ objectNonNull: { __typename: true } }>>()
A.exact.ofAs<{ unionFooBar: null | { __typename: "Foo" } | { __typename: "Bar" } }>()
       .onAs<$<{ unionFooBar: { __typename: true } }>>()
A.exact.ofAs<{ unionFooBar: null | {} | { __typename: "Foo" } }>()
       .onAs<$<{ unionFooBar: { ___on_Foo: { __typename: true } } }>>()

// dprint-ignore
A.exact.ofAs<{ unionFooBar: null | {} | { id: null | string } }>().onAs<$<{ unionFooBar: { ___on_Foo: { id: true } } }>>()
A.exact.ofAs<{ unionFooBar: null | { __typename: 'Bar' } | { __typename: 'Foo'; id: null | string } }>().onAs<$<{ unionFooBar: { __typename: true; ___on_Foo: { id: true } } }>>()
A.exact.ofAs<{ unionFooBarWithArgs: null | {} | { id: null | string } }>().onAs<$<{ unionFooBarWithArgs: { $: { id: `abc` }; ___on_Foo: { id: true } } }>>()
A.exact.ofAs<{ lowerCaseUnion: null | { __typename: 'lowerCaseObject'; id: null | string } | { __typename: 'lowerCaseObject2'; int: null | number } }>().onAs<$<{ lowerCaseUnion: { __typename: true; ___on_lowerCaseObject: { id: true }; ___on_lowerCaseObject2: { int: true } } }>>()
A.exact.ofAs<{ interface: null | { id: null | string } | {} }>().onAs<$<{ interface: { ___on_Object1ImplementingInterface: { id: true } } }>>()
A.exact.ofAs<{ interface: null | { int: null | number } | {} }>().onAs<$<{ interface: { ___on_Object1ImplementingInterface: { int: true } } }>>()
A.exact.ofAs<{ interface: null | { id: null | string } }>().onAs<$<{ interface: { id: true } }>>()
A.exact.ofAs<{ interface: null | { id: null | string } }>().onAs<$<{ interface: { id: true; ___on_Object1ImplementingInterface: { id: true } } }>>()
A.exact.ofAs<{ interface: null | { id: null | string } | { id: null | string; int: null | number } }>().onAs<$<{ interface: { id: true; ___on_Object1ImplementingInterface: { int: true } } }>>()
A.exact.ofAs<{ interface: null | { __typename: 'Object1ImplementingInterface' } | { __typename: 'Object2ImplementingInterface' } }>().onAs<$<{ interface: { __typename: true } }>>()
A.exact.ofAs<{ interface: null | { __typename: 'Object1ImplementingInterface' } | {} }>().onAs<$<{ interface: { ___on_Object1ImplementingInterface: { __typename: true } } }>>()
A.exact.ofAs<{ interface: null | { __typename: 'Object1ImplementingInterface'; id: null | string; int: null | number } | { __typename: 'Object2ImplementingInterface'; id: null | string; boolean: null | boolean } }>().onAs<$<{ interface: { $scalars: true } }>>()
A.exact.ofAs<{ interfaceWithArgs: null | { id: null | string } }>().onAs<$<{ interfaceWithArgs: { $: { id: 'abc' }; id: true } }>>()
A.exact.ofAs<{ x: null | string }>().onAs<$<{ id: ['x', true] }>>()
A.exact.ofAs<{ x: string }>().onAs<$<{ idNonNull: ['x', true] }>>()
A.exact.ofAs<{ x: { id: null | string } | null }>().onAs<$<{ object: ['x', { id: true }] }>>()
A.exact.ofAs<{ x: { id: null | string } | null }>().onAs<$<{ objectWithArgs: ['x', { $: { id: '' }; id: true }] }>>()
A.exact.ofAs<{ id1: null | string; id2: null | string }>().onAs<$<{ id: [['id1', true], ['id2', true]] }>>()
A.exact.ofAs<{ id1: null | string; id2: null | string; abcEnum1: null | db.ABCEnum }>().onAs<$<{ id: [['id1', true], ['id2', true]]; abcEnum: ['abcEnum1', true] }>>()
A.exact.ofAs<{ unionFooBar: null | {} | { id2: null | string } }>().onAs<$<{ unionFooBar: { ___on_Foo: { id: ['id2', true] } } }>>()
A.exact.ofAs<{ objectNested: null | { obj2: { id: null | string } | null } }>().onAs<$<{ objectNested: { object: ['obj2', { id: true }] } }>>()
A.exact.ofAs<{ objectNestedWithArgs: null | { obj2: { id: null | string } | null } }>().onAs<NestedObjectAliasWithArgsTest>()
A.exact.ofAs<{ idNonNull?: string }>().onAs<$<{ idNonNull: { $include: boolean } }>>()
A.exact.ofAs<{ idNonNull?: string }>().onAs<$<{ idNonNull: { $include: { if: boolean } } }>>()
A.exact.ofAs<{ idNonNull: string }>().onAs<$<{ idNonNull: { $include: true } }>>()
A.exact.ofAs<{ idNonNull: string }>().onAs<$<{ idNonNull: { $include: { if: true } } }>>()
A.exact.ofAs<{}>().onAs<$<{ idNonNull: { $include: false } }>>()
A.exact.ofAs<{}>().onAs<$<{ idNonNull: { $include: { if: false } } }>>()
A.exact.ofAs<{ id?: null | string }>().onAs<$<{ id: { $include: boolean } }>>()


// Errors
// @ts-expect-error invalid query
type Result = $<{ id2: true }>

// dprint-ignore
A.exact.ofAs<{}>().onAs<$<{ id: { $include: false } }>>()
A.exact.ofAs<{ id: null | string }>().onAs<$<{ id: { $include: true } }>>()
A.exact.ofAs<{ idNonNull?: string }>().onAs<$<{ idNonNull: { $skip: boolean } }>>()
A.exact.ofAs<{ idNonNull?: string }>().onAs<$<{ idNonNull: { $skip: { if: boolean } } }>>()
A.exact.ofAs<{}>().onAs<$<{ idNonNull: { $skip: true } }>>()
A.exact.ofAs<{}>().onAs<$<{ idNonNull: { $skip: { if: true } } }>>()
A.exact.ofAs<{ idNonNull: string }>().onAs<$<{ idNonNull: { $skip: false } }>>()
A.exact.ofAs<{ idNonNull: string }>().onAs<$<{ idNonNull: { $skip: { if: false } } }>>()
A.exact.ofAs<{ id?: null | string }>().onAs<$<{ id: { $skip: boolean } }>>()
A.exact.ofAs<{ id: null | string }>().onAs<$<{ id: { $skip: false } }>>()
A.exact.ofAs<{}>().onAs<$<{ id: { $skip: true } }>>()
A.exact.ofAs<{}>().onAs<$<{ objectNested: { $include: false } }>>()
A.exact.ofAs<{ objectNested: {} | null }>().onAs<$<{ objectNested: { $include: true } }>>()
A.exact.ofAs<{ objectNested?: {} | null }>().onAs<$<{ objectNested: { $include: boolean } }>>()
A.exact.ofAs<{ stringWithArgs: null | string }>().onAs<$<{ stringWithArgs: true }>>()
A.exact.ofAs<{ stringWithArgs: null | string }>().onAs<$<{ stringWithArgs: { $: { string: '' } } }>>()
A.exact.ofAs<{ id: null | string }>().onAs<$<{ ___: { id: true } }>>()
A.exact.ofAs<{}>().onAs<$<{ ___: { $include: false; id: true } }>>()
A.exact.ofAs<{}>().onAs<$<{ ___: { $skip: true; id: true } }>>()
A.exact.ofAs<{ id?: string | null; listIntNonNull?: number[] }>().onAs<$<{ ___: { $skip: boolean; id: true; listIntNonNull: true } }>>()
A.exact.ofAs<{ id?: string | null; listIntNonNull?: number[] }>().onAs<$<{ ___: { $include: boolean; id: true; listIntNonNull: true } }>>()
A.exact.ofAs<{ id: string | null }>().onAs<$<{ ___: { $include: true; id: true } }>>()
A.exact.ofAs<{ id: string | null }>().onAs<$<{ ___: { $skip: false; id: true } }>>()
// Error when field doesn't exist - now returns Core.Errors.ErrorFieldNotFound
type ExpectedError = Ts.Err.StaticError<
  ['ParseError', 'FieldNotFound'],
  {
    message: 'No such field on type'
    fieldName: 'id2'
    parentName: 'Query'
    availableFields: keyof Possible.$.Schema.Query['fields'] & string
    path: 'todo'
  }
>
A.exact.ofAs<{ id2: ExpectedError }>().onAs<Result>()
A.equiv.ofAs<{ interfaceHierarchyGrandparents: { a: string }[] }>().onAs<$<{ interfaceHierarchyGrandparents: { a: true } }>>()
// Can use inline fragment of an implementor interface
A.exact.ofAs<{ interfaceHierarchyGrandparents: ({} | { a: string })[] }>().onAs<$<{ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { a: true } } }>>()
A.exact.ofAs<{ interfaceHierarchyGrandparents: ({} | { a: string })[] }>().onAs<$<{ interfaceHierarchyGrandparents: { ___on_InterfaceChildA: { a: true } } }>>()
A.exact.ofAs<{ interfaceHierarchyGrandparents: ({} | { a: string })[] }>().onAs<$<{ interfaceHierarchyGrandparents: { ___on_InterfaceChildB: { a: true } } }>>()
// @ts-expect-error cannot select child interface field
A.exact.ofAs<{ interfaceHierarchyGrandparents: { a: string }[] }>().onAs<$<{ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { c1: true } } }>>()
