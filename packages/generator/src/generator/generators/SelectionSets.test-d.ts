import type { Possible } from '#test/schema/possible/client/$.js'
import type { PossibleNoCustomScalars } from '#test/schema/possible/clientNoCustomScalars/$.js'
import { db } from '#test/schema/possible/db.js'
import { Ts } from '@wollybeard/kit'
import { test } from 'vitest'

type Q = PossibleNoCustomScalars.SelectionSets.Query
type QWithDate = Possible.SelectionSets.Query

declare const Q: Q
declare const QWithDate: QWithDate

const t = Ts.Assert.sub.of(Q).on

test(`Query`, () => {
  t({ __typename: true })
  t({ __typename: true })

  // @ts-expect-error directive on root type Query
  t({ $defer: true })

  // Scalar
  t({ id: true })
  t({ id: true })
  t({ id: false })
  // t({ id: 1 })
  // t({ id: 0 })
  t({ id: undefined })
  // non-null
  t({ idNonNull: true })

  // Custom Scalar
  t({ date: true })
  t({ date: false })
  // t({ date: 0 })
  // t({ date: 1 })
  t({ date: undefined })

  // Enum
  t({ abcEnum: true })

  // Object
  t({ object: { id: true } })
  // typename
  t({ __typename: true })
  // Non-Null
  t({ objectNonNull: { id: true } })
  // @ts-expect-error excess property check
  t({ id2: true })
  // @ts-expect-error no a2
  t({ object: { a2: true } })

  // Object Nested
  t({ objectList: {} })

  // Union
  t({ unionFooBar: { __typename: true } })
  t({ unionFooBar: { ___on_Foo: { __typename: true } } })
  t({ unionFooBar: { ___on_Foo: { id: true } } })
  // @ts-expect-error no b
  t({ unionFooBar: { ___on_Foo: { id2: true } } })
  t({ unionFooBar: { ___on_Bar: { __typename: true } } })
  t({ unionFooBar: { ___on_Bar: { int: true } } })
  // @ts-expect-error no a
  t({ unionFooBar: { ___on_Bar: { int2: true } } })

  // Union fragments Case
  t({ lowerCaseUnion: { ___on_lowerCaseObject: { id: true }, ___on_lowerCaseObject2: { int: true } } })

  // Interface
  t({ interface: { id: true } })
  // t({ interface: { id: { $defer: true } } })
  t({ interface: { id: { $include: true } } })
  t({ interface: { id: { $skip: true } } })
  // t({ interface: { id: { $stream: true } } })
  t({ interface: { __typename: true } })
  // t({ interface: { __typename: { $defer: true } } })
  t({ interface: { $scalars: true } })
  t({ interfaceWithArgs: { $: { id: `abc` }, id: true } })
  // todo:
  // // @ts-expect-error needs fragment
  // t({ interface: { id: true, int: true } })
  // todo:
  // // @ts-expect-error needs fragment
  // t({ interface: { id: true, boolean: true } })
  // t({ interface: { id: true, ___on_Object1ImplementingInterface: { int: true } } })
  // t({ interface: { id: true, ___on_Object2ImplementingInterface: { boolean: true } } })
  // todo:
  // // @ts-expect-error incorrect implementor name
  // Ts.Assert.subNoExcess<Q>().on({ interface: { id: true, ___on_Object1ImplementingInterface2: { int: true } } })
  // directives work on fragments
  t({ interface: { id: true, ___on_Object1ImplementingInterface: { $include: true } } }) // todo should REQUIRE field selection

  // Alias
  // todo test that aliases are no supported on ___on_X polymorphic fields

  // alias: enum
  t({ abcEnum: [`enum`, true] })
  t({ __typename: [`kind`, true] })
  t({ __typename: [`f`, true] })
  // alias: object
  t({ object: [`o`, { id: true }] })
  // alias multiple 1
  t({ object: [[`o`, { id: true }]] })
  // alias multiple 2
  t({ object: [[`o1`, { id: true }], [`o2`, { id: true }]] })
  // alias complex
  t({ objectNested: [[`o1`, { object: { ___: { id: true } } }], [`o2`, { id: { $skip: true } }]] })
  // alias Nested
  t({ object: [`object2`, { id: [`id2`, true] }] })
  // @ts-expect-error alias invalid one too many nested arrays
  t({ object: [[[`o`, { id: true }]]] })
  // @ts-expect-error alias invalid on union fragment
  t({ unionFooBar: { ___on_Foo: [`x`, { id: true }] } })
  // @ts-expect-error alias invalid on interface fragment
  t({ interface: { ___on_Object1ImplementingInterface: [`x`, { id: true }] } })

  // todo: We could achieve this by using a more expensive template literal type like `${Letter}${string}`
  // Make that an opt-in feature since it will potentially decrease the IDE performance for everyone even those not benefiting much from this.
  // //@ts-expect-error invalid alias key format
  // t({ object: [``, { id: true }] })

  // We would have to pass the input through to Q so that it could parse the identifier. This would be complex and probably not worth it.
  // Maybe this will get easier one day.
  // // @ts-expect-error invalid alias key format
  // t({ object: [`$$`, { id: true }] })

  // directives
  // @skip
  // on scalar
  t({ string: { $skip: true } })
  t({ string: { $skip: false } })
  t({ string: { $skip: { if: true } } })
  t({ string: { $skip: { if: false } } })
  t({ string: { $skip: {} } })
  t({ string: { $skip: {} } })
  t({ object: { string: { $skip: true } } })
  // Ts.Assert.sub<S>({ string: skip() })
  // on object
  t({ object: { $skip: true, string: true } })
  // Ts.Assert.sub<S>({ scalars: skip().select({ a: true }) })
  // on fragment
  t({ unionFooBar: { ___on_Bar: { $skip: true, int: true } } })
  // @include
  t({ string: { $include: true } })
  t({ string: { $include: false } })
  t({ string: { $include: { if: true } } })
  t({ string: { $include: { if: false } } })
  t({ string: { $include: {} } })
  t({ string: { $include: {} } })
  // Ts.Assert.sub<S>({ string: include() })

  // @defer
  // t({ string: { $defer: true } })
  // t({ string: { $defer: { if: true, label: `foo` } } })
  // t({ string: { $defer: { if: true } } })
  // t({ string: { $defer: {} } })

  // (todo limit to lists?)
  // @stream
  // t({ string: { $stream: true } })
  // t({ string: { $stream: { if: true, label: `foo`, initialCount: 0 } } })
  // t({ string: { $stream: { if: true, label: `foo` } } })
  // t({ string: { $stream: { if: true } } })
  // t({ string: { $stream: {} } })

  // Field Group
  // On Object
  t({ object: { ___: { int: true, id: true } } })
  t({ object: { ___: { $skip: true, int: true, id: true } } })
  t({ object: { ___: [{ $skip: true, int: true, id: true }] } })
  // On Root (Query)
  t({ ___: { id: true } })
  t({ ___: { $skip: true, id: true } })
  Ts.Assert.sub.noExcessAs<Q>().on({
    // @ts-expect-error no directives on root type
    $skip: true,
    id: true,
  })

  // Arguments
  // all-optional on object
  t({ objectWithArgs: { $: {}, id: true } })
  t({ objectWithArgs: { id: true } })
  t({
    objectWithArgs: {
      $: {
        boolean: true,
        float: 1,
        id: `id`,
        int: 3,
        string: `abc`,
      },
      id: true,
    },
  })
  t({ id: true })
  // builder interface
  // Ts.Assert.sub<S>({ foo: args({ ... }) })
  // all-optional on scalar
  t({ stringWithArgs: true })
  t({ stringWithArgs: {} })
  t({ stringWithArgs: { $: { boolean: true, float: 1, id: `id`, int: 3, string: `abc` } } })
  t({ stringWithArgs: { $: { boolean: null, float: null, id: null, int: null, string: null } } })

  // enum arg
  t({ stringWithArgEnum: { $: { $ABCEnum: `A` } } } as const)
  t({ stringWithArgEnum: { $: { $ABCEnum: `B` } } } as const)
  t({ stringWithArgEnum: { $: { $ABCEnum: `C` } } } as const)
  t({ stringWithArgEnum: { $: { $ABCEnum: null } } })
  t({ stringWithArgEnum: { $: {} } })
  // @ts-expect-error invalid enum value
  t({ stringWithArgEnum: { $: { ABCEnum: `D` } } })
  // @ts-expect-error invalid enum value
  t({ stringWithArgEnum: { $: { ABCEnum: `` } } })
  // @ts-expect-error invalid enum value
  t({ stringWithArgEnum: { $: { ABCEnum: 1 } } })

  // list arg
  t({ stringWithListArg: { $: { ints: [1, 2, 3] } } })
  t({ stringWithListArg: { $: { ints: [] } } })
  t({ stringWithListArg: { $: { ints: [null] } } })
  t({ stringWithListArg: { $: { ints: null } } })
  t({ stringWithListArg: { $: {} } })
  // @ts-expect-error missing "ints" arg
  t({ stringWithListArgRequired: { $: {} } })
  // @ts-expect-error missing non-null "ints" arg
  t({ stringWithListArgRequired: { $: { ints: null } } })

  // custom scalar arg
  t({ dateArg: { $: { date: 0 } } })
  t({ dateArg: { $: { date: null } } })
  t({ dateArg: { $: { date: db.date0Encoded } } })
  Ts.Assert.sub.ofAs<QWithDate>().on({ dateArg: { $: { date: db.date0 } } })

  // input object arg
  t({ stringWithArgInputObjectRequired: { $: { input: { id: ``, idRequired: ``, dateRequired: db.date0Encoded } } } })
  t({ stringWithArgInputObjectRequired: { $: { input: { id: null, idRequired: ``, dateRequired: db.date0Encoded } } } })
  t({ stringWithArgInputObjectRequired: { $: { input: { idRequired: ``, dateRequired: db.date0Encoded } } } })
  Ts.Assert.sub.ofAs<QWithDate>().on({
    stringWithArgInputObjectRequired: { $: { input: { id: ``, idRequired: ``, dateRequired: db.date0 } } },
  })
  Ts.Assert.sub.ofAs<QWithDate>().on({
    stringWithArgInputObjectRequired: { $: { input: { id: null, idRequired: ``, dateRequired: db.date0 } } },
  })
  Ts.Assert.sub.ofAs<QWithDate>().on({
    stringWithArgInputObjectRequired: { $: { input: { idRequired: ``, dateRequired: db.date0 } } },
  })
  // @ts-expect-error missing "idRequired" field
  t({ stringWithArgInputObjectRequired: { $: { input: {} } } })
  // type x = Exclude<Q['stringWithArgInputObjectRequired'],undefined>['$']['input']

  // all-optional + scalar + directive
  t({ stringWithArgs: { $: { boolean: true }, $skip: true } })
  // builder interface
  // Ts.Assert.sub<S>({ foo: args({ boolean: true }).skip().select({ x: 1 }) })
  // 1+ required + scalar
  t({ stringWithRequiredArg: { $: { string: `` } } })
  // @ts-expect-error missing "string" arg
  t({ stringWithRequiredArg: { $: {} } })
  // @ts-expect-error missing args ("$")
  t({ stringWithRequiredArg: {} })

  // Scalars Wildcard ("client directive")
  // object
  t({ object: { $scalars: true } })
  // @ts-expect-error no directives on scalars field
  t({ scalars: { $scalars: { $skip: true } } })
  // union fragment
  t({ unionFooBar: { ___on_Bar: { $scalars: true } } })
  t({ unionFooBarWithArgs: { $: { id: `abc` }, ___on_Bar: { $scalars: true } } })

  // Ts.Assert.sub<S>({ scalars: select() })

  // todo empty selection set not allowed, with arguments given
  // todo empty selection set not allowed, with directive given
  // todo empty selection set not allowed
  // // @ts-expect-error empty selection set not allowed
  // Ts.Assert.sub<S>({ scalars: {} })
  // todo selection set of _only_ negative indicators should not be allowed

  // Interface Hierarchy

  t({ interfaceHierarchyGrandparents: { a: true } })
  // Can verbosely nest inline fragments matching the interface hierarchy
  t({ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { ___on_InterfaceChildA: { a: true } } } })
  // Can skip intermediary implementor interfaces
  t({ interfaceHierarchyGrandparents: { ___on_ObjectChildA: { a: true } } })
  // Cannot directly select fields from implementor interface
  // @ts-expect-error
  t({ interfaceHierarchyGrandparents: { b: true } })
  // Nested: ^
  // @ts-expect-error
  t({ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { c1: true } } })
})
