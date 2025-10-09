import type { DateScalar } from '#test/fixtures/scalars'
import { db } from '#test/schema/possible/db.js'
import { Ts } from '@wollybeard/kit'
import { test } from 'vitest'
import type * as SelectionSets from '../../extensions/DocumentBuilder/__tests__/fixtures/possible/modules/selection-sets.js'
import type { Schema } from '../../types/Schema/$.js'

type Q = SelectionSets.Query
type QWithDate = SelectionSets.Query<{
  scalars: Schema.Scalar.Registry.AddScalar<Schema.Scalar.Registry.Empty, typeof DateScalar>
}>

// dprint-ignore
test(`Query`, () => {
  Ts.Test.sub<Q>()({ __typename: true })
  Ts.Test.sub<Q>()({ __typename: true })

  // @ts-expect-error directive on root type Query
  Ts.Test.sub<Q>()({ $defer: true })

  // Scalar
  Ts.Test.sub<Q>()({ id: true })
  Ts.Test.sub<Q>()({ id: true })
  Ts.Test.sub<Q>()({ id: false })
  // Ts.Test.sub<Q>()({ id: 1 })
  // Ts.Test.sub<Q>()({ id: 0 })
  Ts.Test.sub<Q>()({ id: undefined })
  // non-null
  Ts.Test.sub<Q>()({ idNonNull: true })

  // Custom Scalar
  Ts.Test.sub<Q>()({ date: true })
  Ts.Test.sub<Q>()({ date: false })
  // Ts.Test.sub<Q>()({ date: 0 })
  // Ts.Test.sub<Q>()({ date: 1 })
  Ts.Test.sub<Q>()({ date: undefined })

  // Enum
  Ts.Test.sub<Q>()({ abcEnum: true })

  // Object
  Ts.Test.sub<Q>()({ object: { id: true } })
  // typename
  Ts.Test.sub<Q>()({ __typename: true })
  // Non-Null
  Ts.Test.sub<Q>()({ objectNonNull: { id: true } })
  // @ts-expect-error excess property check
  Ts.Test.sub<Q>()({ id2: true })
  // @ts-expect-error no a2
  Ts.Test.sub<Q>()({ object: { a2: true } })

  // Object Nested
  Ts.Test.sub<Q>()({ objectList: {  } })

  // Union
  Ts.Test.sub<Q>()({ unionFooBar: { __typename: true } })
  Ts.Test.sub<Q>()({ unionFooBar: { ___on_Foo: { __typename: true } } })
  Ts.Test.sub<Q>()({ unionFooBar: { ___on_Foo: { id: true } } })
  // @ts-expect-error no b
  Ts.Test.sub<Q>()({ unionFooBar: { ___on_Foo: { id2: true } } })
  Ts.Test.sub<Q>()({ unionFooBar: { ___on_Bar: { __typename: true } } })
  Ts.Test.sub<Q>()({ unionFooBar: { ___on_Bar: { int: true } } })
  // @ts-expect-error no a
  Ts.Test.sub<Q>()({ unionFooBar: { ___on_Bar: { int2: true } } })

  // Union fragments Case
  Ts.Test.sub<Q>()({ lowerCaseUnion: { ___on_lowerCaseObject: { id: true }, ___on_lowerCaseObject2: { int: true } } })

  // Interface
  Ts.Test.sub<Q>()({ interface: { id: true } })
  // Ts.Test.sub<Q>()({ interface: { id: { $defer: true } } })
  Ts.Test.sub<Q>()({ interface: { id: { $include: true } } })
  Ts.Test.sub<Q>()({ interface: { id: { $skip: true } } })
  // Ts.Test.sub<Q>()({ interface: { id: { $stream: true } } })
  Ts.Test.sub<Q>()({ interface: { __typename: true } })
  // Ts.Test.sub<Q>()({ interface: { __typename: { $defer: true } } })
  Ts.Test.sub<Q>()({ interface: { $scalars: true } })
  Ts.Test.sub<Q>()({ interfaceWithArgs: { $: { id: `abc` }, id: true } })
  // todo:
  // // @ts-expect-error needs fragment
  // Ts.Test.sub<Q>()({ interface: { id: true, int: true } })
  // todo:
  // // @ts-expect-error needs fragment
  // Ts.Test.sub<Q>()({ interface: { id: true, boolean: true } })
  // Ts.Test.sub<Q>()({ interface: { id: true, ___on_Object1ImplementingInterface: { int: true } } })
  // Ts.Test.sub<Q>()({ interface: { id: true, ___on_Object2ImplementingInterface: { boolean: true } } })
  // todo:
  // // @ts-expect-error incorrect implementor name
  // Ts.Test.subNoExcess<Q>()({ interface: { id: true, ___on_Object1ImplementingInterface2: { int: true } } })
  // directives work on fragments
  Ts.Test.sub<Q>()({ interface: { id: true, ___on_Object1ImplementingInterface: { $include: true } } }) // todo should REQUIRE field selection





  // Alias
  // todo test that aliases are no supported on ___on_X polymorphic fields

  // alias: enum
  Ts.Test.sub<Q>()({ abcEnum: [`enum`, true] })
  Ts.Test.sub<Q>()({ __typename: [`kind`, true] })
  Ts.Test.sub<Q>()({ __typename: [`f`, true] })
  // alias: object
  Ts.Test.sub<Q>()({ object: [`o`, { id: true }] })
  // alias multiple 1
  Ts.Test.sub<Q>()({ object: [[`o`, { id: true }]] })
  // alias multiple 2
  Ts.Test.sub<Q>()({ object: [[`o1`, { id: true }], [`o2`, { id: true }]] })
  // alias complex
  Ts.Test.sub<Q>()({ objectNested: [[`o1`, { object: {___: {id: true}} }], [`o2`, { id: {$skip:true} }]] })
  // alias Nested
  Ts.Test.sub<Q>()({ object: [`object2`, { id: [`id2`, true] }] })
  // @ts-expect-error alias invalid one too many nested arrays
  Ts.Test.sub<Q>()({ object: [[[`o`, { id: true }]]] })
  // @ts-expect-error alias invalid on union fragment
  Ts.Test.sub<Q>()({ unionFooBar: { ___on_Foo: [`x`, { id: true }] } })
  // @ts-expect-error alias invalid on interface fragment
  Ts.Test.sub<Q>()({ interface: { ___on_Object1ImplementingInterface: [`x`, { id: true }] } })

  // todo: We could achieve this by using a more expensive template literal type like `${Letter}${string}`
  // Make that an opt-in feature since it will potentially decrease the IDE performance for everyone even those not benefiting much from this.
  // //@ts-expect-error invalid alias key format
  // Ts.Test.sub<Q>()({ object: [``, { id: true }] })

  // We would have to pass the input through to Q so that it could parse the identifier. This would be complex and probably not worth it.
  // Maybe this will get easier one day.
  // // @ts-expect-error invalid alias key format
  // Ts.Test.sub<Q>()({ object: [`$$`, { id: true }] })

  // directives
  // @skip
  // on scalar
  Ts.Test.sub<Q>()({ string: { $skip: true } })
  Ts.Test.sub<Q>()({ string: { $skip: false } })
  Ts.Test.sub<Q>()({ string: { $skip: { if: true } } })
  Ts.Test.sub<Q>()({ string: { $skip: { if: false } } })
  Ts.Test.sub<Q>()({ string: { $skip: {} } })
  Ts.Test.sub<Q>()({ string: { $skip: {} } })
  Ts.Test.sub<Q>()({ object: { string: { $skip: true } } })
  // Ts.Test.sub<S>({ string: skip() })
  // on object
  Ts.Test.sub<Q>()({ object: { $skip: true, string: true } })
  // Ts.Test.sub<S>({ scalars: skip().select({ a: true }) })
  // on fragment
  Ts.Test.sub<Q>()({ unionFooBar: { ___on_Bar: { $skip: true, int: true } } })
  // @include
  Ts.Test.sub<Q>()({ string: { $include: true } })
  Ts.Test.sub<Q>()({ string: { $include: false } })
  Ts.Test.sub<Q>()({ string: { $include: { if: true } } })
  Ts.Test.sub<Q>()({ string: { $include: { if: false } } })
  Ts.Test.sub<Q>()({ string: { $include: {} } })
  Ts.Test.sub<Q>()({ string: { $include: {} } })
  // Ts.Test.sub<S>({ string: include() })

  // @defer
  // Ts.Test.sub<Q>()({ string: { $defer: true } })
  // Ts.Test.sub<Q>()({ string: { $defer: { if: true, label: `foo` } } })
  // Ts.Test.sub<Q>()({ string: { $defer: { if: true } } })
  // Ts.Test.sub<Q>()({ string: { $defer: {} } })

  // (todo limit to lists?)
  // @stream
  // Ts.Test.sub<Q>()({ string: { $stream: true } })
  // Ts.Test.sub<Q>()({ string: { $stream: { if: true, label: `foo`, initialCount: 0 } } })
  // Ts.Test.sub<Q>()({ string: { $stream: { if: true, label: `foo` } } })
  // Ts.Test.sub<Q>()({ string: { $stream: { if: true } } })
  // Ts.Test.sub<Q>()({ string: { $stream: {} } })

  // Field Group
  // On Object
  Ts.Test.sub<Q>()({ object: { ___: { int: true, id: true } } })
  Ts.Test.sub<Q>()({ object: { ___: { $skip: true, int: true, id: true } } })
  Ts.Test.sub<Q>()({ object: { ___: [{ $skip: true, int: true, id: true }] } })
  // On Root (Query)
  Ts.Test.sub<Q>()({ ___: { id: true } })
  Ts.Test.sub<Q>()({ ___: { $skip: true, id: true } })
  Ts.Test.subNoExcess<Q>()({
    // @ts-expect-error no directives on root type
    $skip: true,
    id: true
  })

  // Arguments
  // all-optional on object
  Ts.Test.sub<Q>()({ objectWithArgs: { $: {}, id: true } })
  Ts.Test.sub<Q>()({ objectWithArgs: { id: true } })
  Ts.Test.sub<Q>()({
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
  Ts.Test.sub<Q>()({ id: true })
  // builder interface
  // Ts.Test.sub<S>({ foo: args({ ... }) })
  // all-optional on scalar
  Ts.Test.sub<Q>()({ stringWithArgs: true })
  Ts.Test.sub<Q>()({ stringWithArgs: {} })
  Ts.Test.sub<Q>()({ stringWithArgs: { $: { boolean: true, float: 1, id: `id`, int: 3, string: `abc` } } })
  Ts.Test.sub<Q>()({ stringWithArgs: { $: { boolean: null, float: null, id: null, int: null, string: null } } })

  // enum arg
  Ts.Test.sub<Q>()({ stringWithArgEnum: { $: { $ABCEnum: `A` } } })
  Ts.Test.sub<Q>()({ stringWithArgEnum: { $: { $ABCEnum: `B` } } })
  Ts.Test.sub<Q>()({ stringWithArgEnum: { $: { $ABCEnum: `C` } } })
  Ts.Test.sub<Q>()({ stringWithArgEnum: { $: { $ABCEnum: null } } })
  Ts.Test.sub<Q>()({ stringWithArgEnum: { $: {} } })
  // @ts-expect-error invalid enum value
  Ts.Test.sub<Q>()({ stringWithArgEnum: { $: { ABCEnum: `D` } } })
  // @ts-expect-error invalid enum value
  Ts.Test.sub<Q>()({ stringWithArgEnum: { $: { ABCEnum: `` } } })
  // @ts-expect-error invalid enum value
  Ts.Test.sub<Q>()({ stringWithArgEnum: { $: { ABCEnum: 1 } } })

  // list arg
  Ts.Test.sub<Q>()({ stringWithListArg: { $: { ints: [1, 2, 3] } } })
  Ts.Test.sub<Q>()({ stringWithListArg: { $: { ints: [] } } })
  Ts.Test.sub<Q>()({ stringWithListArg: { $: { ints: [null] } } })
  Ts.Test.sub<Q>()({ stringWithListArg: { $: { ints: null } } })
  Ts.Test.sub<Q>()({ stringWithListArg: { $: {} } })
  // @ts-expect-error missing "ints" arg
  Ts.Test.sub<Q>()({ stringWithListArgRequired: { $: {} } })
  // @ts-expect-error missing non-null "ints" arg
  Ts.Test.sub<Q>()({ stringWithListArgRequired: { $: { ints: null } } })

  // custom scalar arg
  // @ts-expect-error wrong type
  Ts.Test.sub<Q>()({ dateArg: { $: { date: 0 } } })
  Ts.Test.sub<Q>()({ dateArg: { $: { date: null } } })
  Ts.Test.sub<Q>()({ dateArg: { $: { date: db.date0Encoded } } })
  Ts.Test.sub<QWithDate>()({ dateArg: { $: { date: db.date0 } } })

  // input object arg
  Ts.Test.sub<Q>()({ stringWithArgInputObjectRequired: { $: { input: { id: ``, idRequired: ``, dateRequired: db.date0Encoded } } } })
  Ts.Test.sub<Q>()({ stringWithArgInputObjectRequired: { $: { input: { id: null, idRequired: ``, dateRequired: db.date0Encoded } } } })
  Ts.Test.sub<Q>()({ stringWithArgInputObjectRequired: { $: { input: { idRequired: ``, dateRequired: db.date0Encoded } } } })
  Ts.Test.sub<QWithDate>()({ stringWithArgInputObjectRequired: { $: { input: { id: ``, idRequired: ``, dateRequired: db.date0 } } } })
  Ts.Test.sub<QWithDate>()({ stringWithArgInputObjectRequired: { $: { input: { id: null, idRequired: ``, dateRequired: db.date0 } } } })
  Ts.Test.sub<QWithDate>()({ stringWithArgInputObjectRequired: { $: { input: { idRequired: ``, dateRequired: db.date0 } } } })
  // @ts-expect-error missing "idRequired" field
  Ts.Test.sub<Q>()({ stringWithArgInputObjectRequired: { $: { input: {} } } })
  // type x = Exclude<Q['stringWithArgInputObjectRequired'],undefined>['$']['input']

  // all-optional + scalar + directive
  Ts.Test.sub<Q>()({ stringWithArgs: { $: { boolean: true }, $skip: true } })
  // builder interface
  // Ts.Test.sub<S>({ foo: args({ boolean: true }).skip().select({ x: 1 }) })
  // 1+ required + scalar
  Ts.Test.sub<Q>()({ stringWithRequiredArg: { $: { string: `` } } })
  // @ts-expect-error missing "string" arg
  Ts.Test.sub<Q>()({ stringWithRequiredArg: { $: {} } })
  // @ts-expect-error missing args ("$")
  Ts.Test.sub<Q>()({ stringWithRequiredArg: {} })

  // Scalars Wildcard ("client directive")
  // object
  Ts.Test.sub<Q>()({ object: { $scalars: true } })
  // @ts-expect-error no directives on scalars field
  Ts.Test.sub<Q>()({ scalars: { $scalars: { $skip: true } } })
  // union fragment
  Ts.Test.sub<Q>()({ unionFooBar: { ___on_Bar: { $scalars: true } } })
  Ts.Test.sub<Q>()({ unionFooBarWithArgs: { $: { id: `abc` }, ___on_Bar: { $scalars: true } } })

  // Ts.Test.sub<S>({ scalars: select() })

  // todo empty selection set not allowed, with arguments given
  // todo empty selection set not allowed, with directive given
  // todo empty selection set not allowed
  // // @ts-expect-error empty selection set not allowed
  // Ts.Test.sub<S>({ scalars: {} })
  // todo selection set of _only_ negative indicators should not be allowed

  // Interface Hierarchy

  Ts.Test.sub<Q>()({ interfaceHierarchyGrandparents: { a: true } })
  // Can verbosely nest inline fragments matching the interface hierarchy
  Ts.Test.sub<Q>()({ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { ___on_InterfaceChildA: { a: true }  } } })
  // Can skip intermediary implementor interfaces
  Ts.Test.sub<Q>()({ interfaceHierarchyGrandparents: { ___on_ObjectChildA: { a: true} } })
  // Cannot directly select fields from implementor interface
  // @ts-expect-error
  Ts.Test.sub<Q>()({ interfaceHierarchyGrandparents: { b: true }})
  // Nested: ^
  // @ts-expect-error
  Ts.Test.sub<Q>()({ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { c1: true } }})
})
