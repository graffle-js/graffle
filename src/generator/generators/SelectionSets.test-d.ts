import type { Possible } from '#test/schema/possible/client/$.js'
import type { PossibleNoCustomScalars } from '#test/schema/possible/clientNoCustomScalars/$.js'
import { db } from '#test/schema/possible/db.js'
import { Ts } from '@wollybeard/kit'
import { test } from 'vitest'

type Q = PossibleNoCustomScalars.SelectionSets.Query
type QWithDate = Possible.SelectionSets.Query

// dprint-ignore
test(`Query`, () => {
  Ts.Assert.sub.of.as<Q>()({ __typename: true })
  Ts.Assert.sub.of.as<Q>()({ __typename: true })

  // @ts-expect-error directive on root type Query
  Ts.Assert.sub.of.as<Q>()({ $defer: true })

  // Scalar
  Ts.Assert.sub.of.as<Q>()({ id: true })
  Ts.Assert.sub.of.as<Q>()({ id: true })
  Ts.Assert.sub.of.as<Q>()({ id: false })
  // Ts.Assert.sub.of.as<Q>()({ id: 1 })
  // Ts.Assert.sub.of.as<Q>()({ id: 0 })
  Ts.Assert.sub.of.as<Q>()({ id: undefined })
  // non-null
  Ts.Assert.sub.of.as<Q>()({ idNonNull: true })

  // Custom Scalar
  Ts.Assert.sub.of.as<Q>()({ date: true })
  Ts.Assert.sub.of.as<Q>()({ date: false })
  // Ts.Assert.sub.of.as<Q>()({ date: 0 })
  // Ts.Assert.sub.of.as<Q>()({ date: 1 })
  Ts.Assert.sub.of.as<Q>()({ date: undefined })

  // Enum
  Ts.Assert.sub.of.as<Q>()({ abcEnum: true })

  // Object
  Ts.Assert.sub.of.as<Q>()({ object: { id: true } })
  // typename
  Ts.Assert.sub.of.as<Q>()({ __typename: true })
  // Non-Null
  Ts.Assert.sub.of.as<Q>()({ objectNonNull: { id: true } })
  // @ts-expect-error excess property check
  Ts.Assert.sub.of.as<Q>()({ id2: true })
  // @ts-expect-error no a2
  Ts.Assert.sub.of.as<Q>()({ object: { a2: true } })

  // Object Nested
  Ts.Assert.sub.of.as<Q>()({ objectList: {  } })

  // Union
  Ts.Assert.sub.of.as<Q>()({ unionFooBar: { __typename: true } })
  Ts.Assert.sub.of.as<Q>()({ unionFooBar: { ___on_Foo: { __typename: true } } })
  Ts.Assert.sub.of.as<Q>()({ unionFooBar: { ___on_Foo: { id: true } } })
  // @ts-expect-error no b
  Ts.Assert.sub.of.as<Q>()({ unionFooBar: { ___on_Foo: { id2: true } } })
  Ts.Assert.sub.of.as<Q>()({ unionFooBar: { ___on_Bar: { __typename: true } } })
  Ts.Assert.sub.of.as<Q>()({ unionFooBar: { ___on_Bar: { int: true } } })
  // @ts-expect-error no a
  Ts.Assert.sub.of.as<Q>()({ unionFooBar: { ___on_Bar: { int2: true } } })

  // Union fragments Case
  Ts.Assert.sub.of.as<Q>()({ lowerCaseUnion: { ___on_lowerCaseObject: { id: true }, ___on_lowerCaseObject2: { int: true } } })

  // Interface
  Ts.Assert.sub.of.as<Q>()({ interface: { id: true } })
  // Ts.Assert.sub.of.as<Q>()({ interface: { id: { $defer: true } } })
  Ts.Assert.sub.of.as<Q>()({ interface: { id: { $include: true } } })
  Ts.Assert.sub.of.as<Q>()({ interface: { id: { $skip: true } } })
  // Ts.Assert.sub.of.as<Q>()({ interface: { id: { $stream: true } } })
  Ts.Assert.sub.of.as<Q>()({ interface: { __typename: true } })
  // Ts.Assert.sub.of.as<Q>()({ interface: { __typename: { $defer: true } } })
  Ts.Assert.sub.of.as<Q>()({ interface: { $scalars: true } })
  Ts.Assert.sub.of.as<Q>()({ interfaceWithArgs: { $: { id: `abc` }, id: true } })
  // todo:
  // // @ts-expect-error needs fragment
  // Ts.Assert.sub.of.as<Q>()({ interface: { id: true, int: true } })
  // todo:
  // // @ts-expect-error needs fragment
  // Ts.Assert.sub.of.as<Q>()({ interface: { id: true, boolean: true } })
  // Ts.Assert.sub.of.as<Q>()({ interface: { id: true, ___on_Object1ImplementingInterface: { int: true } } })
  // Ts.Assert.sub.of.as<Q>()({ interface: { id: true, ___on_Object2ImplementingInterface: { boolean: true } } })
  // todo:
  // // @ts-expect-error incorrect implementor name
  // Ts.Assert.subNoExcess<Q>()({ interface: { id: true, ___on_Object1ImplementingInterface2: { int: true } } })
  // directives work on fragments
  Ts.Assert.sub.of.as<Q>()({ interface: { id: true, ___on_Object1ImplementingInterface: { $include: true } } }) // todo should REQUIRE field selection





  // Alias
  // todo test that aliases are no supported on ___on_X polymorphic fields

  // alias: enum
  Ts.Assert.sub.of.as<Q>()({ abcEnum: [`enum`, true] })
  Ts.Assert.sub.of.as<Q>()({ __typename: [`kind`, true] })
  Ts.Assert.sub.of.as<Q>()({ __typename: [`f`, true] })
  // alias: object
  Ts.Assert.sub.of.as<Q>()({ object: [`o`, { id: true }] })
  // alias multiple 1
  Ts.Assert.sub.of.as<Q>()({ object: [[`o`, { id: true }]] })
  // alias multiple 2
  Ts.Assert.sub.of.as<Q>()({ object: [[`o1`, { id: true }], [`o2`, { id: true }]] })
  // alias complex
  Ts.Assert.sub.of.as<Q>()({ objectNested: [[`o1`, { object: {___: {id: true}} }], [`o2`, { id: {$skip:true} }]] })
  // alias Nested
  Ts.Assert.sub.of.as<Q>()({ object: [`object2`, { id: [`id2`, true] }] })
  // @ts-expect-error alias invalid one too many nested arrays
  Ts.Assert.sub.of.as<Q>()({ object: [[[`o`, { id: true }]]] })
  // @ts-expect-error alias invalid on union fragment
  Ts.Assert.sub.of.as<Q>()({ unionFooBar: { ___on_Foo: [`x`, { id: true }] } })
  // @ts-expect-error alias invalid on interface fragment
  Ts.Assert.sub.of.as<Q>()({ interface: { ___on_Object1ImplementingInterface: [`x`, { id: true }] } })

  // todo: We could achieve this by using a more expensive template literal type like `${Letter}${string}`
  // Make that an opt-in feature since it will potentially decrease the IDE performance for everyone even those not benefiting much from this.
  // //@ts-expect-error invalid alias key format
  // Ts.Assert.sub.of.as<Q>()({ object: [``, { id: true }] })

  // We would have to pass the input through to Q so that it could parse the identifier. This would be complex and probably not worth it.
  // Maybe this will get easier one day.
  // // @ts-expect-error invalid alias key format
  // Ts.Assert.sub.of.as<Q>()({ object: [`$$`, { id: true }] })

  // directives
  // @skip
  // on scalar
  Ts.Assert.sub.of.as<Q>()({ string: { $skip: true } })
  Ts.Assert.sub.of.as<Q>()({ string: { $skip: false } })
  Ts.Assert.sub.of.as<Q>()({ string: { $skip: { if: true } } })
  Ts.Assert.sub.of.as<Q>()({ string: { $skip: { if: false } } })
  Ts.Assert.sub.of.as<Q>()({ string: { $skip: {} } })
  Ts.Assert.sub.of.as<Q>()({ string: { $skip: {} } })
  Ts.Assert.sub.of.as<Q>()({ object: { string: { $skip: true } } })
  // Ts.Assert.sub<S>({ string: skip() })
  // on object
  Ts.Assert.sub.of.as<Q>()({ object: { $skip: true, string: true } })
  // Ts.Assert.sub<S>({ scalars: skip().select({ a: true }) })
  // on fragment
  Ts.Assert.sub.of.as<Q>()({ unionFooBar: { ___on_Bar: { $skip: true, int: true } } })
  // @include
  Ts.Assert.sub.of.as<Q>()({ string: { $include: true } })
  Ts.Assert.sub.of.as<Q>()({ string: { $include: false } })
  Ts.Assert.sub.of.as<Q>()({ string: { $include: { if: true } } })
  Ts.Assert.sub.of.as<Q>()({ string: { $include: { if: false } } })
  Ts.Assert.sub.of.as<Q>()({ string: { $include: {} } })
  Ts.Assert.sub.of.as<Q>()({ string: { $include: {} } })
  // Ts.Assert.sub<S>({ string: include() })

  // @defer
  // Ts.Assert.sub.of.as<Q>()({ string: { $defer: true } })
  // Ts.Assert.sub.of.as<Q>()({ string: { $defer: { if: true, label: `foo` } } })
  // Ts.Assert.sub.of.as<Q>()({ string: { $defer: { if: true } } })
  // Ts.Assert.sub.of.as<Q>()({ string: { $defer: {} } })

  // (todo limit to lists?)
  // @stream
  // Ts.Assert.sub.of.as<Q>()({ string: { $stream: true } })
  // Ts.Assert.sub.of.as<Q>()({ string: { $stream: { if: true, label: `foo`, initialCount: 0 } } })
  // Ts.Assert.sub.of.as<Q>()({ string: { $stream: { if: true, label: `foo` } } })
  // Ts.Assert.sub.of.as<Q>()({ string: { $stream: { if: true } } })
  // Ts.Assert.sub.of.as<Q>()({ string: { $stream: {} } })

  // Field Group
  // On Object
  Ts.Assert.sub.of.as<Q>()({ object: { ___: { int: true, id: true } } })
  Ts.Assert.sub.of.as<Q>()({ object: { ___: { $skip: true, int: true, id: true } } })
  Ts.Assert.sub.of.as<Q>()({ object: { ___: [{ $skip: true, int: true, id: true }] } })
  // On Root (Query)
  Ts.Assert.sub.of.as<Q>()({ ___: { id: true } })
  Ts.Assert.sub.of.as<Q>()({ ___: { $skip: true, id: true } })
  Ts.Assert.subNoExcess<Q>()({
    // @ts-expect-error no directives on root type
    $skip: true,
    id: true
  })

  // Arguments
  // all-optional on object
  Ts.Assert.sub.of.as<Q>()({ objectWithArgs: { $: {}, id: true } })
  Ts.Assert.sub.of.as<Q>()({ objectWithArgs: { id: true } })
  Ts.Assert.sub.of.as<Q>()({
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
  Ts.Assert.sub.of.as<Q>()({ id: true })
  // builder interface
  // Ts.Assert.sub<S>({ foo: args({ ... }) })
  // all-optional on scalar
  Ts.Assert.sub.of.as<Q>()({ stringWithArgs: true })
  Ts.Assert.sub.of.as<Q>()({ stringWithArgs: {} })
  Ts.Assert.sub.of.as<Q>()({ stringWithArgs: { $: { boolean: true, float: 1, id: `id`, int: 3, string: `abc` } } })
  Ts.Assert.sub.of.as<Q>()({ stringWithArgs: { $: { boolean: null, float: null, id: null, int: null, string: null } } })

  // enum arg
  Ts.Assert.sub.of.as<Q>()({ stringWithArgEnum: { $: { $ABCEnum: `A` } } })
  Ts.Assert.sub.of.as<Q>()({ stringWithArgEnum: { $: { $ABCEnum: `B` } } })
  Ts.Assert.sub.of.as<Q>()({ stringWithArgEnum: { $: { $ABCEnum: `C` } } })
  Ts.Assert.sub.of.as<Q>()({ stringWithArgEnum: { $: { $ABCEnum: null } } })
  Ts.Assert.sub.of.as<Q>()({ stringWithArgEnum: { $: {} } })
  // @ts-expect-error invalid enum value
  Ts.Assert.sub.of.as<Q>()({ stringWithArgEnum: { $: { ABCEnum: `D` } } })
  // @ts-expect-error invalid enum value
  Ts.Assert.sub.of.as<Q>()({ stringWithArgEnum: { $: { ABCEnum: `` } } })
  // @ts-expect-error invalid enum value
  Ts.Assert.sub.of.as<Q>()({ stringWithArgEnum: { $: { ABCEnum: 1 } } })

  // list arg
  Ts.Assert.sub.of.as<Q>()({ stringWithListArg: { $: { ints: [1, 2, 3] } } })
  Ts.Assert.sub.of.as<Q>()({ stringWithListArg: { $: { ints: [] } } })
  Ts.Assert.sub.of.as<Q>()({ stringWithListArg: { $: { ints: [null] } } })
  Ts.Assert.sub.of.as<Q>()({ stringWithListArg: { $: { ints: null } } })
  Ts.Assert.sub.of.as<Q>()({ stringWithListArg: { $: {} } })
  // @ts-expect-error missing "ints" arg
  Ts.Assert.sub.of.as<Q>()({ stringWithListArgRequired: { $: {} } })
  // @ts-expect-error missing non-null "ints" arg
  Ts.Assert.sub.of.as<Q>()({ stringWithListArgRequired: { $: { ints: null } } })

  // custom scalar arg
  Ts.Assert.sub.of.as<Q>()({ dateArg: { $: { date: 0 } } })
  Ts.Assert.sub.of.as<Q>()({ dateArg: { $: { date: null } } })
  Ts.Assert.sub.of.as<Q>()({ dateArg: { $: { date: db.date0Encoded } } })
  Ts.Assert.sub.of.as<QWithDate>()({ dateArg: { $: { date: db.date0 } } })

  // input object arg
  Ts.Assert.sub.of.as<Q>()({ stringWithArgInputObjectRequired: { $: { input: { id: ``, idRequired: ``, dateRequired: db.date0Encoded } } } })
  Ts.Assert.sub.of.as<Q>()({ stringWithArgInputObjectRequired: { $: { input: { id: null, idRequired: ``, dateRequired: db.date0Encoded } } } })
  Ts.Assert.sub.of.as<Q>()({ stringWithArgInputObjectRequired: { $: { input: { idRequired: ``, dateRequired: db.date0Encoded } } } })
  Ts.Assert.sub.of.as<QWithDate>()({ stringWithArgInputObjectRequired: { $: { input: { id: ``, idRequired: ``, dateRequired: db.date0 } } } })
  Ts.Assert.sub.of.as<QWithDate>()({ stringWithArgInputObjectRequired: { $: { input: { id: null, idRequired: ``, dateRequired: db.date0 } } } })
  Ts.Assert.sub.of.as<QWithDate>()({ stringWithArgInputObjectRequired: { $: { input: { idRequired: ``, dateRequired: db.date0 } } } })
  // @ts-expect-error missing "idRequired" field
  Ts.Assert.sub.of.as<Q>()({ stringWithArgInputObjectRequired: { $: { input: {} } } })
  // type x = Exclude<Q['stringWithArgInputObjectRequired'],undefined>['$']['input']

  // all-optional + scalar + directive
  Ts.Assert.sub.of.as<Q>()({ stringWithArgs: { $: { boolean: true }, $skip: true } })
  // builder interface
  // Ts.Assert.sub<S>({ foo: args({ boolean: true }).skip().select({ x: 1 }) })
  // 1+ required + scalar
  Ts.Assert.sub.of.as<Q>()({ stringWithRequiredArg: { $: { string: `` } } })
  // @ts-expect-error missing "string" arg
  Ts.Assert.sub.of.as<Q>()({ stringWithRequiredArg: { $: {} } })
  // @ts-expect-error missing args ("$")
  Ts.Assert.sub.of.as<Q>()({ stringWithRequiredArg: {} })

  // Scalars Wildcard ("client directive")
  // object
  Ts.Assert.sub.of.as<Q>()({ object: { $scalars: true } })
  // @ts-expect-error no directives on scalars field
  Ts.Assert.sub.of.as<Q>()({ scalars: { $scalars: { $skip: true } } })
  // union fragment
  Ts.Assert.sub.of.as<Q>()({ unionFooBar: { ___on_Bar: { $scalars: true } } })
  Ts.Assert.sub.of.as<Q>()({ unionFooBarWithArgs: { $: { id: `abc` }, ___on_Bar: { $scalars: true } } })

  // Ts.Assert.sub<S>({ scalars: select() })

  // todo empty selection set not allowed, with arguments given
  // todo empty selection set not allowed, with directive given
  // todo empty selection set not allowed
  // // @ts-expect-error empty selection set not allowed
  // Ts.Assert.sub<S>({ scalars: {} })
  // todo selection set of _only_ negative indicators should not be allowed

  // Interface Hierarchy

  Ts.Assert.sub.of.as<Q>()({ interfaceHierarchyGrandparents: { a: true } })
  // Can verbosely nest inline fragments matching the interface hierarchy
  Ts.Assert.sub.of.as<Q>()({ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { ___on_InterfaceChildA: { a: true }  } } })
  // Can skip intermediary implementor interfaces
  Ts.Assert.sub.of.as<Q>()({ interfaceHierarchyGrandparents: { ___on_ObjectChildA: { a: true} } })
  // Cannot directly select fields from implementor interface
  // @ts-expect-error
  Ts.Assert.sub.of.as<Q>()({ interfaceHierarchyGrandparents: { b: true }})
  // Nested: ^
  // @ts-expect-error
  Ts.Assert.sub.of.as<Q>()({ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { c1: true } }})
})
