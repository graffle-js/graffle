import type { RequestResult } from '#src/types/RequestResult/$.js'
import type { Registry } from '#src/types/Schema/nodes/Scalar/helpers.js'
import type { DateScalar } from '#test/fixtures/scalars'
import type { db } from '#test/schema/possible/db.js'
import { Ts } from '@wollybeard/kit'
import type { Possible } from '#test/schema/possible/client/$.js'
import type { PossibleNoCustomScalars } from '#test/schema/possible/clientNoCustomScalars/$.js'
import type { InferResult } from './$.js'

type $<$SelectionSet extends Possible.SelectionSets.Query> = RequestResult.SimplifyWithEmptyContext<
  InferResult.OperationQuery<$SelectionSet, Possible.$.Schema>
>

type $NoScalars<$SelectionSet extends PossibleNoCustomScalars.SelectionSets.Query> = RequestResult.SimplifyWithEmptyContext<
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

type _1 = Ts.Test.Cases<
  Ts.Test.exact<$<{ __typename: true }>                                                                                                , { __typename: 'Query' }>,
  Ts.Test.exact<$<{ id: true }>                                                                                                        , { id: null | string }>,
  Ts.Test.exact<$<{ id: false }>                                                                                                       , {}>,
  Ts.Test.exact<$<{ id: undefined }>                                                                                                   , {}>,
  Ts.Test.exact<$<{ id: true | undefined }>                                                                                            , { id?: null | string }>,
  Ts.Test.exact<$<{ id: boolean }>                                                                                                     , { id?: null | string }>,
  Ts.Test.exact<$<{ idNonNull: true }>                                                                                                 , { idNonNull: string }>,
  Ts.Test.exact<$<{ idNonNull: false }>                                                                                                , {}>,
  Ts.Test.exact<$<{ idNonNull: undefined }>                                                                                            , {}>,
  Ts.Test.exact<$<{ idNonNull: true | undefined }>                                                                                     , { idNonNull?: string }>,
  Ts.Test.exact<$<{ idNonNull: boolean }>                                                                                              , { idNonNull?: string }>,
  Ts.Test.exact<$<{ id: true; string: false }>                                                                                         , { id: null | string }>,
  Ts.Test.exact<$<{ id: true; string: undefined }>                                                                                     , { id: null | string }>,
  Ts.Test.exact<$NoScalars<{ date: true }>                                                                                             , { date: null | string }>,
  // TODO: should this be using simplify to all equal?
  Ts.Test.bid<$WithDate<{ date: true }>                                                                                      , { date: null | Date }>,
  Ts.Test.exact<$<{ listIntNonNull: true }>                                                                                            , { listIntNonNull: number[] }>,
  Ts.Test.exact<$<{ listInt: true }>                                                                                                   , { listInt: null|(null|number)[] }>,
  Ts.Test.exact<$<{ listListIntNonNull: true }>                                                                                        , { listListIntNonNull: number[][] }>,
  Ts.Test.exact<$<{ listListInt: true }>                                                                                               , { listListInt: null|((null|(null|number)[])[]) }>,
  Ts.Test.exact<$<{ abcEnum: true }>                                                                                                   , { abcEnum: null|'A'|'B'|'C' }>,
  Ts.Test.exact<$<{ object: { id: true } }>                                                                                            , { object: null | { id: string | null } }>,
  Ts.Test.exact<$<{ objectNonNull: { id: true } }>                                                                                     , { objectNonNull: { id: string | null } }>,
  Ts.Test.exact<$<{ objectWithArgs: { $: { id: 'abc' }; id: true }}>                                                                   , { objectWithArgs: null | { id: string | null } }>,
  Ts.Test.exact<$<{ objectNonNull: { $scalars: true } }>                                                                               , { objectNonNull: { __typename: "Object1"; string: null|string; int: null|number; float: null|number; boolean: null|boolean; id: null|string; ABCEnum: null|db.ABCEnum } }>,
  Ts.Test.exact<$<{ objectNested: { $scalars: true } }>                                                                                , { objectNested: null | { __typename: "ObjectNested"; id: null|string } }>,
  Ts.Test.exact<$<{ objectNonNull: { __typename: true } }>                                                                             , { objectNonNull: { __typename: "Object1" } }>,
  Ts.Test.exact<$<{ unionFooBar: { __typename: true } }>                                                                               , { unionFooBar: null | { __typename: "Foo" } | { __typename: "Bar" } }>,
  Ts.Test.exact<$<{ unionFooBar: { ___on_Foo: { __typename: true } } }>                                                                , { unionFooBar: null | {} | { __typename: "Foo" } }>
>
// dprint-ignore
type _2 = Ts.Test.Cases<
  Ts.Test.exact<$<{ unionFooBar: { ___on_Foo: { id: true } } }>, { unionFooBar: null | {} | { id: null | string } }>,
  Ts.Test.exact<
    $<{ unionFooBar: { __typename: true; ___on_Foo: { id: true } } }>,
    { unionFooBar: null | { __typename: 'Bar' } | { __typename: 'Foo'; id: null | string } }
  >,
  Ts.Test.exact<
    $<{ unionFooBarWithArgs: { $: { id: `abc` }; ___on_Foo: { id: true } } }>,
    { unionFooBarWithArgs: null | {} | { id: null | string } }
  >,
  Ts.Test.exact<
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
  Ts.Test.exact<
    $<{ interface: { ___on_Object1ImplementingInterface: { id: true } } }>,
    { interface: null | { id: null | string } | {} }
  >,
  Ts.Test.exact<
    $<{ interface: { ___on_Object1ImplementingInterface: { int: true } } }>,
    { interface: null | { int: null | number } | {} }
  >,
  Ts.Test.exact<$<{ interface: { id: true } }>, { interface: null | { id: null | string } }>,
  Ts.Test.exact<
    $<{ interface: { id: true; ___on_Object1ImplementingInterface: { id: true } } }>,
    { interface: null | { id: null | string } }
  >,
  Ts.Test.exact<
    $<{ interface: { id: true; ___on_Object1ImplementingInterface: { int: true } } }>,
    { interface: null | { id: null | string } | { id: null | string; int: null | number } }
  >,
  Ts.Test.exact<
    $<{ interface: { __typename: true } }>,
    {
      interface: null | { __typename: 'Object1ImplementingInterface' } | { __typename: 'Object2ImplementingInterface' }
    }
  >,
  Ts.Test.exact<
    $<{ interface: { ___on_Object1ImplementingInterface: { __typename: true } } }>,
    { interface: null | { __typename: 'Object1ImplementingInterface' } | {} }
  >,
  Ts.Test.exact<
    $<{ interface: { $scalars: true } }>,
    {
      interface: null | { __typename: 'Object1ImplementingInterface'; id: null | string; int: null | number } | {
        __typename: 'Object2ImplementingInterface'
        id: null | string
        boolean: null | boolean
      }
    }
  >,
  Ts.Test.exact<
    $<{ interfaceWithArgs: { $: { id: 'abc' }; id: true } }>,
    { interfaceWithArgs: null | { id: null | string } }
  >,
  Ts.Test.exact<$<{ id: ['x', true] }>, { x: null | string }>,
  Ts.Test.exact<$<{ idNonNull: ['x', true] }>, { x: string }>,
  Ts.Test.exact<$<{ object: ['x', { id: true }] }>, { x: { id: null | string } | null }>,
  Ts.Test.exact<$<{ objectWithArgs: ['x', { $: { id: '' }; id: true }] }>, { x: { id: null | string } | null }>,
  Ts.Test.exact<$<{ id: [['id1', true], ['id2', true]] }>, { id1: null | string; id2: null | string }>,
  Ts.Test.exact<
    $<{ id: [['id1', true], ['id2', true]]; abcEnum: ['abcEnum1', true] }>,
    { id1: null | string; id2: null | string; abcEnum1: null | db.ABCEnum }
  >,
  Ts.Test.exact<
    $<{ unionFooBar: { ___on_Foo: { id: ['id2', true] } } }>,
    { unionFooBar: null | {} | { id2: null | string } }
  >,
  Ts.Test.exact<
    $<{ objectNested: { object: ['obj2', { id: true }] } }>,
    { objectNested: null | { obj2: { id: null | string } | null } }
  >,
  Ts.Test.exact<NestedObjectAliasWithArgsTest, { objectNestedWithArgs: null | { obj2: { id: null | string } | null } }>,
  Ts.Test.exact<$<{ idNonNull: { $include: boolean } }>, { idNonNull?: string }>,
  Ts.Test.exact<$<{ idNonNull: { $include: { if: boolean } } }>, { idNonNull?: string }>,
  Ts.Test.exact<$<{ idNonNull: { $include: true } }>, { idNonNull: string }>,
  Ts.Test.exact<$<{ idNonNull: { $include: { if: true } } }>, { idNonNull: string }>,
  Ts.Test.exact<$<{ idNonNull: { $include: false } }>, {}>,
  Ts.Test.exact<$<{ idNonNull: { $include: { if: false } } }>, {}>,
  Ts.Test.exact<$<{ id: { $include: boolean } }>, { id?: null | string }>
>

// Errors
// @ts-expect-error invalid query
type Result = $<{ id2: true }>

// dprint-ignore
type _3 = Ts.Test.Cases<
  Ts.Test.exact<$<{ id: { $include: false } }>, {}>,
  Ts.Test.exact<$<{ id: { $include: true } }>, { id: null | string }>,
  Ts.Test.exact<$<{ idNonNull: { $skip: boolean } }>, { idNonNull?: string }>,
  Ts.Test.exact<$<{ idNonNull: { $skip: { if: boolean } } }>, { idNonNull?: string }>,
  Ts.Test.exact<$<{ idNonNull: { $skip: true } }>, {}>,
  Ts.Test.exact<$<{ idNonNull: { $skip: { if: true } } }>, {}>,
  Ts.Test.exact<$<{ idNonNull: { $skip: false } }>, { idNonNull: string }>,
  Ts.Test.exact<$<{ idNonNull: { $skip: { if: false } } }>, { idNonNull: string }>,
  Ts.Test.exact<$<{ id: { $skip: boolean } }>, { id?: null | string }>,
  Ts.Test.exact<$<{ id: { $skip: false } }>, { id: null | string }>,
  Ts.Test.exact<$<{ id: { $skip: true } }>, {}>,
  Ts.Test.exact<$<{ objectNested: { $include: false } }>, {}>,
  Ts.Test.exact<$<{ objectNested: { $include: true } }>, { objectNested: {} | null }>,
  Ts.Test.exact<$<{ objectNested: { $include: boolean } }>, { objectNested?: {} | null }>,
  Ts.Test.exact<$<{ stringWithArgs: true }>, { stringWithArgs: null | string }>,
  Ts.Test.exact<$<{ stringWithArgs: { $: { string: '' } } }>, { stringWithArgs: null | string }>,
  Ts.Test.exact<$<{ ___: { id: true } }>, { id: null | string }>,
  Ts.Test.exact<$<{ ___: { $include: false; id: true } }>, {}>,
  Ts.Test.exact<$<{ ___: { $skip: true; id: true } }>, {}>,
  Ts.Test.exact<
    $<{ ___: { $skip: boolean; id: true; listIntNonNull: true } }>,
    { id?: string | null; listIntNonNull?: number[] }
  >,
  Ts.Test.exact<
    $<{ ___: { $include: boolean; id: true; listIntNonNull: true } }>,
    { id?: string | null; listIntNonNull?: number[] }
  >,
  Ts.Test.exact<$<{ ___: { $include: true; id: true } }>, { id: string | null }>,
  Ts.Test.exact<$<{ ___: { $skip: false; id: true } }>, { id: string | null }>,
  Ts.Test.exact<Result, { id2: InferResult.Errors.UnknownKey<'id2', Possible.$.Schema.Query> }>,
  Ts.Test.bid<
    $<{ interfaceHierarchyGrandparents: { a: true } }>,
    { interfaceHierarchyGrandparents: { a: string }[] }
  >,
  // Can use inline fragment of an implementor interface
  Ts.Test.exact<
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { a: true } } }>,
    { interfaceHierarchyGrandparents: ({} | { a: string })[] }
  >,
  Ts.Test.exact<
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceChildA: { a: true } } }>,
    { interfaceHierarchyGrandparents: ({} | { a: string })[] }
  >,
  Ts.Test.exact<
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceChildB: { a: true } } }>,
    { interfaceHierarchyGrandparents: ({} | { a: string })[] }
  >,
  // @ts-expect-error
  Ts.Test.exact<
    // @ts-expect-error cannot select child interface field
    $<{ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { c1: true } } }>,
    { interfaceHierarchyGrandparents: { a: string }[] }
  >
>
