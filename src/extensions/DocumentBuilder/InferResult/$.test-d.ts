import type { RequestResult } from '#src/types/RequestResult/$.js'
import type { Registry } from '#src/types/Schema/nodes/Scalar/helpers.js'
import type { DateScalar } from '#test/fixtures/scalars'
import type { db } from '#test/schema/possible/db.js'
import { Ts } from '@wollybeard/kit'
import type { Possible } from '../__tests__/fixtures/possible/$.js'
import type { InferResult } from './$.js'

type $<$SelectionSet extends Possible.SelectionSets.Query> = RequestResult.SimplifyWithEmptyContext<
  InferResult.OperationQuery<$SelectionSet, Possible.$.Schema>
>

type $Registry = Registry.AddScalar<Registry.Empty, typeof DateScalar>
type $Context = { scalars: $Registry; variablesEnabled: false }

type $WithDate<$SelectionSet extends Possible.SelectionSets.Query<$Context>> = InferResult.OperationQuery<
  $SelectionSet,
  Possible.$.Schema<$Registry>
>

type NestedObjectAliasWithArgsTest = $<{ objectNestedWithArgs: { object: ['obj2', { $: { int: 5 }; id: true }] } }>
// dprint-ignore

type _1 = Ts.Test.Cases<
  Ts.Test.equal<$<{ __typename: true }>                                                                                                , { __typename: 'Query' }>,
  Ts.Test.equal<$<{ id: true }>                                                                                                        , { id: null | string }>,
  Ts.Test.equal<$<{ id: false }>                                                                                                       , {}>,
  Ts.Test.equal<$<{ id: undefined }>                                                                                                   , {}>,
  Ts.Test.equal<$<{ id: true | undefined }>                                                                                            , { id?: null | string }>,
  Ts.Test.equal<$<{ id: boolean }>                                                                                                     , { id?: null | string }>,
  Ts.Test.equal<$<{ idNonNull: true }>                                                                                                 , { idNonNull: string }>,
  Ts.Test.equal<$<{ idNonNull: false }>                                                                                                , {}>,
  Ts.Test.equal<$<{ idNonNull: undefined }>                                                                                            , {}>,
  Ts.Test.equal<$<{ idNonNull: true | undefined }>                                                                                     , { idNonNull?: string }>,
  Ts.Test.equal<$<{ idNonNull: boolean }>                                                                                              , { idNonNull?: string }>,
  Ts.Test.equal<$<{ id: true; string: false }>                                                                                         , { id: null | string }>,
  Ts.Test.equal<$<{ id: true; string: undefined }>                                                                                     , { id: null | string }>,
  Ts.Test.equal<$<{ date: true }>                                                                                                      , { date: null | string }>,
  // TODO: should this be using simplify to all equal?
  Ts.Test.equalComputed<$WithDate<{ date: true }>                                                                                      , { date: null | Date }>,
  Ts.Test.equal<$<{ listIntNonNull: true }>                                                                                            , { listIntNonNull: number[] }>,
  Ts.Test.equal<$<{ listInt: true }>                                                                                                   , { listInt: null|(null|number)[] }>,
  Ts.Test.equal<$<{ listListIntNonNull: true }>                                                                                        , { listListIntNonNull: number[][] }>,
  Ts.Test.equal<$<{ listListInt: true }>                                                                                               , { listListInt: null|((null|(null|number)[])[]) }>,
  Ts.Test.equal<$<{ abcEnum: true }>                                                                                                   , { abcEnum: null|'A'|'B'|'C' }>,
  Ts.Test.equal<$<{ object: { id: true } }>                                                                                            , { object: null | { id: string | null } }>,
  Ts.Test.equal<$<{ objectNonNull: { id: true } }>                                                                                     , { objectNonNull: { id: string | null } }>,
  Ts.Test.equal<$<{ objectWithArgs: { $: { id: 'abc' }; id: true }}>                                                                   , { objectWithArgs: null | { id: string | null } }>,
  Ts.Test.equal<$<{ objectNonNull: { $scalars: true } }>                                                                               , { objectNonNull: { __typename: "Object1"; string: null|string; int: null|number; float: null|number; boolean: null|boolean; id: null|string; ABCEnum: null|db.ABCEnum } }>,
  Ts.Test.equal<$<{ objectNested: { $scalars: true } }>                                                                                , { objectNested: null | { __typename: "ObjectNested"; id: null|string } }>,
  Ts.Test.equal<$<{ objectNonNull: { __typename: true } }>                                                                             , { objectNonNull: { __typename: "Object1" } }>,
  Ts.Test.equal<$<{ unionFooBar: { __typename: true } }>                                                                               , { unionFooBar: null | { __typename: "Foo" } | { __typename: "Bar" } }>,
  Ts.Test.equal<$<{ unionFooBar: { ___on_Foo: { __typename: true } } }>                                                                , { unionFooBar: null | {} | { __typename: "Foo" } }>
>
// dprint-ignore
type _2 = Ts.Test.Cases<
  Ts.Test.equal<$<{ unionFooBar: { ___on_Foo: { id: true } } }>, { unionFooBar: null | {} | { id: null | string } }>,
  Ts.Test.equal<
    $<{ unionFooBar: { __typename: true; ___on_Foo: { id: true } } }>,
    { unionFooBar: null | { __typename: 'Bar' } | { __typename: 'Foo'; id: null | string } }
  >,
  Ts.Test.equal<
    $<{ unionFooBarWithArgs: { $: { id: `abc` }; ___on_Foo: { id: true } } }>,
    { unionFooBarWithArgs: null | {} | { id: null | string } }
  >,
  Ts.Test.equal<
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
  Ts.Test.equal<
    $<{ interface: { ___on_Object1ImplementingInterface: { id: true } } }>,
    { interface: null | { id: null | string } | {} }
  >,
  Ts.Test.equal<
    $<{ interface: { ___on_Object1ImplementingInterface: { int: true } } }>,
    { interface: null | { int: null | number } | {} }
  >,
  Ts.Test.equal<$<{ interface: { id: true } }>, { interface: null | { id: null | string } }>,
  Ts.Test.equal<
    $<{ interface: { id: true; ___on_Object1ImplementingInterface: { id: true } } }>,
    { interface: null | { id: null | string } }
  >,
  Ts.Test.equal<
    $<{ interface: { id: true; ___on_Object1ImplementingInterface: { int: true } } }>,
    { interface: null | { id: null | string } | { id: null | string; int: null | number } }
  >,
  Ts.Test.equal<
    $<{ interface: { __typename: true } }>,
    {
      interface: null | { __typename: 'Object1ImplementingInterface' } | { __typename: 'Object2ImplementingInterface' }
    }
  >,
  Ts.Test.equal<
    $<{ interface: { ___on_Object1ImplementingInterface: { __typename: true } } }>,
    { interface: null | { __typename: 'Object1ImplementingInterface' } | {} }
  >,
  Ts.Test.equal<
    $<{ interface: { $scalars: true } }>,
    {
      interface: null | { __typename: 'Object1ImplementingInterface'; id: null | string; int: null | number } | {
        __typename: 'Object2ImplementingInterface'
        id: null | string
        boolean: null | boolean
      }
    }
  >,
  Ts.Test.equal<
    $<{ interfaceWithArgs: { $: { id: 'abc' }; id: true } }>,
    { interfaceWithArgs: null | { id: null | string } }
  >,
  Ts.Test.equal<$<{ id: ['x', true] }>, { x: null | string }>,
  Ts.Test.equal<$<{ idNonNull: ['x', true] }>, { x: string }>,
  Ts.Test.equal<$<{ object: ['x', { id: true }] }>, { x: { id: null | string } | null }>,
  Ts.Test.equal<$<{ objectWithArgs: ['x', { $: { id: '' }; id: true }] }>, { x: { id: null | string } | null }>,
  Ts.Test.equal<$<{ id: [['id1', true], ['id2', true]] }>, { id1: null | string; id2: null | string }>,
  Ts.Test.equal<
    $<{ id: [['id1', true], ['id2', true]]; abcEnum: ['abcEnum1', true] }>,
    { id1: null | string; id2: null | string; abcEnum1: null | db.ABCEnum }
  >,
  Ts.Test.equal<
    $<{ unionFooBar: { ___on_Foo: { id: ['id2', true] } } }>,
    { unionFooBar: null | {} | { id2: null | string } }
  >,
  Ts.Test.equal<
    $<{ objectNested: { object: ['obj2', { id: true }] } }>,
    { objectNested: null | { obj2: { id: null | string } | null } }
  >,
  Ts.Test.equal<NestedObjectAliasWithArgsTest, { objectNestedWithArgs: null | { obj2: { id: null | string } | null } }>,
  Ts.Test.equal<$<{ idNonNull: { $include: boolean } }>, { idNonNull?: string }>,
  Ts.Test.equal<$<{ idNonNull: { $include: { if: boolean } } }>, { idNonNull?: string }>,
  Ts.Test.equal<$<{ idNonNull: { $include: true } }>, { idNonNull: string }>,
  Ts.Test.equal<$<{ idNonNull: { $include: { if: true } } }>, { idNonNull: string }>,
  Ts.Test.equal<$<{ idNonNull: { $include: false } }>, {}>,
  Ts.Test.equal<$<{ idNonNull: { $include: { if: false } } }>, {}>,
  Ts.Test.equal<$<{ id: { $include: boolean } }>, { id?: null | string }>
>

// Errors
// @ts-expect-error invalid query
type Result = $<{ id2: true }>

// dprint-ignore
type _3 = Ts.Test.Cases<
  Ts.Test.equal<$<{ id: { $include: false } }>, {}>,
  Ts.Test.equal<$<{ id: { $include: true } }>, { id: null | string }>,
  Ts.Test.equal<$<{ idNonNull: { $skip: boolean } }>, { idNonNull?: string }>,
  Ts.Test.equal<$<{ idNonNull: { $skip: { if: boolean } } }>, { idNonNull?: string }>,
  Ts.Test.equal<$<{ idNonNull: { $skip: true } }>, {}>,
  Ts.Test.equal<$<{ idNonNull: { $skip: { if: true } } }>, {}>,
  Ts.Test.equal<$<{ idNonNull: { $skip: false } }>, { idNonNull: string }>,
  Ts.Test.equal<$<{ idNonNull: { $skip: { if: false } } }>, { idNonNull: string }>,
  Ts.Test.equal<$<{ id: { $skip: boolean } }>, { id?: null | string }>,
  Ts.Test.equal<$<{ id: { $skip: false } }>, { id: null | string }>,
  Ts.Test.equal<$<{ id: { $skip: true } }>, {}>,
  Ts.Test.equal<$<{ objectNested: { $include: false } }>, {}>,
  Ts.Test.equal<$<{ objectNested: { $include: true } }>, { objectNested: {} | null }>,
  Ts.Test.equal<$<{ objectNested: { $include: boolean } }>, { objectNested?: {} | null }>,
  Ts.Test.equal<$<{ stringWithArgs: true }>, { stringWithArgs: null | string }>,
  Ts.Test.equal<$<{ stringWithArgs: { $: { string: '' } } }>, { stringWithArgs: null | string }>,
  Ts.Test.equal<$<{ ___: { id: true } }>, { id: null | string }>,
  Ts.Test.equal<$<{ ___: { $include: false; id: true } }>, {}>,
  Ts.Test.equal<$<{ ___: { $skip: true; id: true } }>, {}>,
  Ts.Test.equal<
    $<{ ___: { $skip: boolean; id: true; listIntNonNull: true } }>,
    { id?: string | null; listIntNonNull?: number[] }
  >,
  Ts.Test.equal<
    $<{ ___: { $include: boolean; id: true; listIntNonNull: true } }>,
    { id?: string | null; listIntNonNull?: number[] }
  >,
  Ts.Test.equal<$<{ ___: { $include: true; id: true } }>, { id: string | null }>,
  Ts.Test.equal<$<{ ___: { $skip: false; id: true } }>, { id: string | null }>,
  Ts.Test.equal<Result, { id2: InferResult.Errors.UnknownKey<'id2', Possible.$.Schema.Query> }>,
  Ts.Test.equalComputed<
    $<{ interfaceHierarchyGrandparents: { a: true } }>,
    { interfaceHierarchyGrandparents: { a: string }[] }
  >,
  // Can use inline fragment of an implementor interface
  Ts.Test.equal<
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { a: true } } }>,
    { interfaceHierarchyGrandparents: ({} | { a: string })[] }
  >,
  Ts.Test.equal<
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceChildA: { a: true } } }>,
    { interfaceHierarchyGrandparents: ({} | { a: string })[] }
  >,
  Ts.Test.equal<
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceChildB: { a: true } } }>,
    { interfaceHierarchyGrandparents: ({} | { a: string })[] }
  >,
  // @ts-expect-error
  Ts.Test.equal<
    // @ts-expect-error cannot select child interface field
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { c1: true } } }>,
    { interfaceHierarchyGrandparents: { a: string }[] }
  >
>
