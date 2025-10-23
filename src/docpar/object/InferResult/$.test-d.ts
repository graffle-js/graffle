import type { RequestResult } from '#src/types/RequestResult/$.js'
import type { Registry } from '#src/types/Schema/nodes/Scalar/helpers.js'
import type { DateScalar } from '#test/fixtures/scalars'
import type { Possible } from '#test/schema/possible/client/$.js'
import type { PossibleNoCustomScalars } from '#test/schema/possible/clientNoCustomScalars/$.js'
import type { db } from '#test/schema/possible/db.js'
import { Ts } from '@wollybeard/kit'
import type { InferResult } from './$.js'

type $<$SelectionSet extends Possible.SelectionSets.Query> = RequestResult.SimplifyWithEmptyContext<
  InferResult.OperationQuery<$SelectionSet, Possible.$.Schema>
>

type $NoScalars<$SelectionSet extends PossibleNoCustomScalars.SelectionSets.Query> =
  RequestResult.SimplifyWithEmptyContext<
    InferResult.OperationQuery<$SelectionSet, PossibleNoCustomScalars.$.Schema>
  >

type $Registry = Registry.AddScalar<Registry.Empty, typeof DateScalar>
type $Context = { scalars: $Registry; variablesEnabled: false }

type $WithDate<$SelectionSet extends Possible.SelectionSets.Query<$Context>> = InferResult.OperationQuery<
  $SelectionSet,
  Possible.$.Schema<$Registry>
>

type NestedObjectAliasWithArgsTest = $<{ objectNestedWithArgs: { object: ['obj2', { $: { int: 5 }; id: true }] } }>
// dprint-ignore

type _1 = Ts.Assert.Cases<
  Ts.Assert.exact<$<{ __typename: true }>                                                                                                , { __typename: 'Query' }>,
  Ts.Assert.exact<$<{ id: true }>                                                                                                        , { id: null | string }>,
  Ts.Assert.exact<$<{ id: false }>                                                                                                       , {}>,
  Ts.Assert.exact<$<{ id: undefined }>                                                                                                   , {}>,
  Ts.Assert.exact<$<{ id: true | undefined }>                                                                                            , { id?: null | string }>,
  Ts.Assert.exact<$<{ id: boolean }>                                                                                                     , { id?: null | string }>,
  Ts.Assert.exact<$<{ idNonNull: true }>                                                                                                 , { idNonNull: string }>,
  Ts.Assert.exact<$<{ idNonNull: false }>                                                                                                , {}>,
  Ts.Assert.exact<$<{ idNonNull: undefined }>                                                                                            , {}>,
  Ts.Assert.exact<$<{ idNonNull: true | undefined }>                                                                                     , { idNonNull?: string }>,
  Ts.Assert.exact<$<{ idNonNull: boolean }>                                                                                              , { idNonNull?: string }>,
  Ts.Assert.exact<$<{ id: true; string: false }>                                                                                         , { id: null | string }>,
  Ts.Assert.exact<$<{ id: true; string: undefined }>                                                                                     , { id: null | string }>,
  Ts.Assert.exact<$NoScalars<{ date: true }>                                                                                             , { date: null | string }>,
  // TODO: should this be using simplify to all equal?
  Ts.Assert.equiv<$WithDate<{ date: true }>                                                                                      , { date: null | Date }>,
  Ts.Assert.exact<$<{ listIntNonNull: true }>                                                                                            , { listIntNonNull: number[] }>,
  Ts.Assert.exact<$<{ listInt: true }>                                                                                                   , { listInt: null|(null|number)[] }>,
  Ts.Assert.exact<$<{ listListIntNonNull: true }>                                                                                        , { listListIntNonNull: number[][] }>,
  Ts.Assert.exact<$<{ listListInt: true }>                                                                                               , { listListInt: null|((null|(null|number)[])[]) }>,
  Ts.Assert.exact<$<{ abcEnum: true }>                                                                                                   , { abcEnum: null|'A'|'B'|'C' }>,
  Ts.Assert.exact<$<{ object: { id: true } }>                                                                                            , { object: null | { id: string | null } }>,
  Ts.Assert.exact<$<{ objectNonNull: { id: true } }>                                                                                     , { objectNonNull: { id: string | null } }>,
  Ts.Assert.exact<$<{ objectWithArgs: { $: { id: 'abc' }; id: true }}>                                                                   , { objectWithArgs: null | { id: string | null } }>,
  Ts.Assert.exact<$<{ objectNonNull: { $scalars: true } }>                                                                               , { objectNonNull: { __typename: "Object1"; string: null|string; int: null|number; float: null|number; boolean: null|boolean; id: null|string; ABCEnum: null|db.ABCEnum } }>,
  Ts.Assert.exact<$<{ objectNested: { $scalars: true } }>                                                                                , { objectNested: null | { __typename: "ObjectNested"; id: null|string } }>,
  Ts.Assert.exact<$<{ objectNonNull: { __typename: true } }>                                                                             , { objectNonNull: { __typename: "Object1" } }>,
  Ts.Assert.exact<$<{ unionFooBar: { __typename: true } }>                                                                               , { unionFooBar: null | { __typename: "Foo" } | { __typename: "Bar" } }>,
  Ts.Assert.exact<$<{ unionFooBar: { ___on_Foo: { __typename: true } } }>                                                                , { unionFooBar: null | {} | { __typename: "Foo" } }>
>
// dprint-ignore
type _2 = Ts.Assert.Cases<
  Ts.Assert.exact<$<{ unionFooBar: { ___on_Foo: { id: true } } }>, { unionFooBar: null | {} | { id: null | string } }>,
  Ts.Assert.exact<
    $<{ unionFooBar: { __typename: true; ___on_Foo: { id: true } } }>,
    { unionFooBar: null | { __typename: 'Bar' } | { __typename: 'Foo'; id: null | string } }
  >,
  Ts.Assert.exact<
    $<{ unionFooBarWithArgs: { $: { id: `abc` }; ___on_Foo: { id: true } } }>,
    { unionFooBarWithArgs: null | {} | { id: null | string } }
  >,
  Ts.Assert.exact<
    $<{
      lowerCaseUnion: { __typename: true; ___on_lowerCaseObject: { id: true }; ___on_lowerCaseObject2: { int: true } }
    }>,
    {
      lowerCaseUnion: null | { __typename: 'lowerCaseObject'; id: null | string } | {
        __typename: 'lowerCaseObject2'
        int: null | number
      }
    }
  >,
  Ts.Assert.exact<
    $<{ interface: { ___on_Object1ImplementingInterface: { id: true } } }>,
    { interface: null | { id: null | string } | {} }
  >,
  Ts.Assert.exact<
    $<{ interface: { ___on_Object1ImplementingInterface: { int: true } } }>,
    { interface: null | { int: null | number } | {} }
  >,
  Ts.Assert.exact<$<{ interface: { id: true } }>, { interface: null | { id: null | string } }>,
  Ts.Assert.exact<
    $<{ interface: { id: true; ___on_Object1ImplementingInterface: { id: true } } }>,
    { interface: null | { id: null | string } }
  >,
  Ts.Assert.exact<
    $<{ interface: { id: true; ___on_Object1ImplementingInterface: { int: true } } }>,
    { interface: null | { id: null | string } | { id: null | string; int: null | number } }
  >,
  Ts.Assert.exact<
    $<{ interface: { __typename: true } }>,
    {
      interface: null | { __typename: 'Object1ImplementingInterface' } | { __typename: 'Object2ImplementingInterface' }
    }
  >,
  Ts.Assert.exact<
    $<{ interface: { ___on_Object1ImplementingInterface: { __typename: true } } }>,
    { interface: null | { __typename: 'Object1ImplementingInterface' } | {} }
  >,
  Ts.Assert.exact<
    $<{ interface: { $scalars: true } }>,
    {
      interface: null | { __typename: 'Object1ImplementingInterface'; id: null | string; int: null | number } | {
        __typename: 'Object2ImplementingInterface'
        id: null | string
        boolean: null | boolean
      }
    }
  >,
  Ts.Assert.exact<
    $<{ interfaceWithArgs: { $: { id: 'abc' }; id: true } }>,
    { interfaceWithArgs: null | { id: null | string } }
  >,
  Ts.Assert.exact<$<{ id: ['x', true] }>, { x: null | string }>,
  Ts.Assert.exact<$<{ idNonNull: ['x', true] }>, { x: string }>,
  Ts.Assert.exact<$<{ object: ['x', { id: true }] }>, { x: { id: null | string } | null }>,
  Ts.Assert.exact<$<{ objectWithArgs: ['x', { $: { id: '' }; id: true }] }>, { x: { id: null | string } | null }>,
  Ts.Assert.exact<$<{ id: [['id1', true], ['id2', true]] }>, { id1: null | string; id2: null | string }>,
  Ts.Assert.exact<
    $<{ id: [['id1', true], ['id2', true]]; abcEnum: ['abcEnum1', true] }>,
    { id1: null | string; id2: null | string; abcEnum1: null | db.ABCEnum }
  >,
  Ts.Assert.exact<
    $<{ unionFooBar: { ___on_Foo: { id: ['id2', true] } } }>,
    { unionFooBar: null | {} | { id2: null | string } }
  >,
  Ts.Assert.exact<
    $<{ objectNested: { object: ['obj2', { id: true }] } }>,
    { objectNested: null | { obj2: { id: null | string } | null } }
  >,
  Ts.Assert.exact<NestedObjectAliasWithArgsTest, { objectNestedWithArgs: null | { obj2: { id: null | string } | null } }>,
  Ts.Assert.exact<$<{ idNonNull: { $include: boolean } }>, { idNonNull?: string }>,
  Ts.Assert.exact<$<{ idNonNull: { $include: { if: boolean } } }>, { idNonNull?: string }>,
  Ts.Assert.exact<$<{ idNonNull: { $include: true } }>, { idNonNull: string }>,
  Ts.Assert.exact<$<{ idNonNull: { $include: { if: true } } }>, { idNonNull: string }>,
  Ts.Assert.exact<$<{ idNonNull: { $include: false } }>, {}>,
  Ts.Assert.exact<$<{ idNonNull: { $include: { if: false } } }>, {}>,
  Ts.Assert.exact<$<{ id: { $include: boolean } }>, { id?: null | string }>
>

// Errors
// @ts-expect-error invalid query
type Result = $<{ id2: true }>

// dprint-ignore
type _3 = Ts.Assert.Cases<
  Ts.Assert.exact<$<{ id: { $include: false } }>, {}>,
  Ts.Assert.exact<$<{ id: { $include: true } }>, { id: null | string }>,
  Ts.Assert.exact<$<{ idNonNull: { $skip: boolean } }>, { idNonNull?: string }>,
  Ts.Assert.exact<$<{ idNonNull: { $skip: { if: boolean } } }>, { idNonNull?: string }>,
  Ts.Assert.exact<$<{ idNonNull: { $skip: true } }>, {}>,
  Ts.Assert.exact<$<{ idNonNull: { $skip: { if: true } } }>, {}>,
  Ts.Assert.exact<$<{ idNonNull: { $skip: false } }>, { idNonNull: string }>,
  Ts.Assert.exact<$<{ idNonNull: { $skip: { if: false } } }>, { idNonNull: string }>,
  Ts.Assert.exact<$<{ id: { $skip: boolean } }>, { id?: null | string }>,
  Ts.Assert.exact<$<{ id: { $skip: false } }>, { id: null | string }>,
  Ts.Assert.exact<$<{ id: { $skip: true } }>, {}>,
  Ts.Assert.exact<$<{ objectNested: { $include: false } }>, {}>,
  Ts.Assert.exact<$<{ objectNested: { $include: true } }>, { objectNested: {} | null }>,
  Ts.Assert.exact<$<{ objectNested: { $include: boolean } }>, { objectNested?: {} | null }>,
  Ts.Assert.exact<$<{ stringWithArgs: true }>, { stringWithArgs: null | string }>,
  Ts.Assert.exact<$<{ stringWithArgs: { $: { string: '' } } }>, { stringWithArgs: null | string }>,
  Ts.Assert.exact<$<{ ___: { id: true } }>, { id: null | string }>,
  Ts.Assert.exact<$<{ ___: { $include: false; id: true } }>, {}>,
  Ts.Assert.exact<$<{ ___: { $skip: true; id: true } }>, {}>,
  Ts.Assert.exact<
    $<{ ___: { $skip: boolean; id: true; listIntNonNull: true } }>,
    { id?: string | null; listIntNonNull?: number[] }
  >,
  Ts.Assert.exact<
    $<{ ___: { $include: boolean; id: true; listIntNonNull: true } }>,
    { id?: string | null; listIntNonNull?: number[] }
  >,
  Ts.Assert.exact<$<{ ___: { $include: true; id: true } }>, { id: string | null }>,
  Ts.Assert.exact<$<{ ___: { $skip: false; id: true } }>, { id: string | null }>,
  Ts.Assert.exact<Result, { id2: InferResult.Errors.UnknownKey<'id2', Possible.$.Schema.Query> }>,
  Ts.Assert.equiv<
    $<{ interfaceHierarchyGrandparents: { a: true } }>,
    { interfaceHierarchyGrandparents: { a: string }[] }
  >,
  // Can use inline fragment of an implementor interface
  Ts.Assert.exact<
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { a: true } } }>,
    { interfaceHierarchyGrandparents: ({} | { a: string })[] }
  >,
  Ts.Assert.exact<
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceChildA: { a: true } } }>,
    { interfaceHierarchyGrandparents: ({} | { a: string })[] }
  >,
  Ts.Assert.exact<
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceChildB: { a: true } } }>,
    { interfaceHierarchyGrandparents: ({} | { a: string })[] }
  >,
  // @ts-expect-error
  Ts.Assert.exact<
    // @ts-expect-error cannot select child interface field
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { c1: true } } }>,
    { interfaceHierarchyGrandparents: { a: string }[] }
  >
>
