import type { Possible } from '#test/schema/possible/client/$.js'
import type { PossibleNoCustomScalars } from '#test/schema/possible/clientNoCustomScalars/$.js'
import { db } from '#test/schema/possible/db.js'
import { Ts } from '@wollybeard/kit'
import { test } from 'vitest'

type Q = PossibleNoCustomScalars.SelectionSets.Query
type QWithDate = Possible.SelectionSets.Query

// dprint-ignore
test(`Query`, () => {
  Ts.Test.sub.is<Q>()({ __typename: true })
  Ts.Test.sub.is<Q>()({ __typename: true })

  // @ts-expect-error directive on root type Query
  Ts.Test.sub.is<Q>()({ $defer: true })

  // Scalar
  Ts.Test.sub.is<Q>()({ id: true })
  Ts.Test.sub.is<Q>()({ id: true })
  Ts.Test.sub.is<Q>()({ id: false })
  // Ts.Test.sub.is<Q>()({ id: 1 })
  // Ts.Test.sub.is<Q>()({ id: 0 })
  Ts.Test.sub.is<Q>()({ id: undefined })
  // non-null
  Ts.Test.sub.is<Q>()({ idNonNull: true })

  // Custom Scalar
  Ts.Test.sub.is<Q>()({ date: true })
  Ts.Test.sub.is<Q>()({ date: false })
  // Ts.Test.sub.is<Q>()({ date: 0 })
  // Ts.Test.sub.is<Q>()({ date: 1 })
  Ts.Test.sub.is<Q>()({ date: undefined })

  // Enum
  Ts.Test.sub.is<Q>()({ abcEnum: true })

  // Object
  Ts.Test.sub.is<Q>()({ object: { id: true } })
  // typename
  Ts.Test.sub.is<Q>()({ __typename: true })
  // Non-Null
  Ts.Test.sub.is<Q>()({ objectNonNull: { id: true } })
  // @ts-expect-error excess property check
  Ts.Test.sub.is<Q>()({ id2: true })
  // @ts-expect-error no a2
  Ts.Test.sub.is<Q>()({ object: { a2: true } })

  // Object Nested
  Ts.Test.sub.is<Q>()({ objectList: {  } })

  // Union
  Ts.Test.sub.is<Q>()({ unionFooBar: { __typename: true } })
  Ts.Test.sub.is<Q>()({ unionFooBar: { ___on_Foo: { __typename: true } } })
  Ts.Test.sub.is<Q>()({ unionFooBar: { ___on_Foo: { id: true } } })
  // @ts-expect-error no b
  Ts.Test.sub.is<Q>()({ unionFooBar: { ___on_Foo: { id2: true } } })
  Ts.Test.sub.is<Q>()({ unionFooBar: { ___on_Bar: { __typename: true } } })
  Ts.Test.sub.is<Q>()({ unionFooBar: { ___on_Bar: { int: true } } })
  // @ts-expect-error no a
  Ts.Test.sub.is<Q>()({ unionFooBar: { ___on_Bar: { int2: true } } })

  // Union fragments Case
  Ts.Test.sub.is<Q>()({ lowerCaseUnion: { ___on_lowerCaseObject: { id: true }, ___on_lowerCaseObject2: { int: true } } })

  // Interface
  Ts.Test.sub.is<Q>()({ interface: { id: true } })
  // Ts.Test.sub.is<Q>()({ interface: { id: { $defer: true } } })
  Ts.Test.sub.is<Q>()({ interface: { id: { $include: true } } })
  Ts.Test.sub.is<Q>()({ interface: { id: { $skip: true } } })
  // Ts.Test.sub.is<Q>()({ interface: { id: { $stream: true } } })
  Ts.Test.sub.is<Q>()({ interface: { __typename: true } })
  // Ts.Test.sub.is<Q>()({ interface: { __typename: { $defer: true } } })
  Ts.Test.sub.is<Q>()({ interface: { $scalars: true } })
  Ts.Test.sub.is<Q>()({ interfaceWithArgs: { $: { id: `abc` }, id: true } })
  // todo:
  // // @ts-expect-error needs fragment
  // Ts.Test.sub.is<Q>()({ interface: { id: true, int: true } })
  // todo:
  // // @ts-expect-error needs fragment
  // Ts.Test.sub.is<Q>()({ interface: { id: true, boolean: true } })
  // Ts.Test.sub.is<Q>()({ interface: { id: true, ___on_Object1ImplementingInterface: { int: true } } })
  // Ts.Test.sub.is<Q>()({ interface: { id: true, ___on_Object2ImplementingInterface: { boolean: true } } })
  // todo:
  // // @ts-expect-error incorrect implementor name
  // Ts.Test.subNoExcess<Q>()({ interface: { id: true, ___on_Object1ImplementingInterface2: { int: true } } })
  // directives work on fragments
  Ts.Test.sub.is<Q>()({ interface: { id: true, ___on_Object1ImplementingInterface: { $include: true } } }) // todo should REQUIRE field selection





  // Alias
  // todo test that aliases are no supported on ___on_X polymorphic fields

  // alias: enum
  Ts.Test.sub.is<Q>()({ abcEnum: [`enum`, true] })
  Ts.Test.sub.is<Q>()({ __typename: [`kind`, true] })
  Ts.Test.sub.is<Q>()({ __typename: [`f`, true] })
  // alias: object
  Ts.Test.sub.is<Q>()({ object: [`o`, { id: true }] })
  // alias multiple 1
  Ts.Test.sub.is<Q>()({ object: [[`o`, { id: true }]] })
  // alias multiple 2
  Ts.Test.sub.is<Q>()({ object: [[`o1`, { id: true }], [`o2`, { id: true }]] })
  // alias complex
  Ts.Test.sub.is<Q>()({ objectNested: [[`o1`, { object: {___: {id: true}} }], [`o2`, { id: {$skip:true} }]] })
  // alias Nested
  Ts.Test.sub.is<Q>()({ object: [`object2`, { id: [`id2`, true] }] })
  // @ts-expect-error alias invalid one too many nested arrays
  Ts.Test.sub.is<Q>()({ object: [[[`o`, { id: true }]]] })
  // @ts-expect-error alias invalid on union fragment
  Ts.Test.sub.is<Q>()({ unionFooBar: { ___on_Foo: [`x`, { id: true }] } })
  // @ts-expect-error alias invalid on interface fragment
  Ts.Test.sub.is<Q>()({ interface: { ___on_Object1ImplementingInterface: [`x`, { id: true }] } })

  // todo: We could achieve this by using a more expensive template literal type like `${Letter}${string}`
  // Make that an opt-in feature since it will potentially decrease the IDE performance for everyone even those not benefiting much from this.
  // //@ts-expect-error invalid alias key format
  // Ts.Test.sub.is<Q>()({ object: [``, { id: true }] })

  // We would have to pass the input through to Q so that it could parse the identifier. This would be complex and probably not worth it.
  // Maybe this will get easier one day.
  // // @ts-expect-error invalid alias key format
  // Ts.Test.sub.is<Q>()({ object: [`$$`, { id: true }] })

  // directives
  // @skip
  // on scalar
  Ts.Test.sub.is<Q>()({ string: { $skip: true } })
  Ts.Test.sub.is<Q>()({ string: { $skip: false } })
  Ts.Test.sub.is<Q>()({ string: { $skip: { if: true } } })
  Ts.Test.sub.is<Q>()({ string: { $skip: { if: false } } })
  Ts.Test.sub.is<Q>()({ string: { $skip: {} } })
  Ts.Test.sub.is<Q>()({ string: { $skip: {} } })
  Ts.Test.sub.is<Q>()({ object: { string: { $skip: true } } })
  // Ts.Test.sub.is<S>({ string: skip() })
  // on object
  Ts.Test.sub.is<Q>()({ object: { $skip: true, string: true } })
  // Ts.Test.sub.is<S>({ scalars: skip().select({ a: true }) })
  // on fragment
  Ts.Test.sub.is<Q>()({ unionFooBar: { ___on_Bar: { $skip: true, int: true } } })
  // @include
  Ts.Test.sub.is<Q>()({ string: { $include: true } })
  Ts.Test.sub.is<Q>()({ string: { $include: false } })
  Ts.Test.sub.is<Q>()({ string: { $include: { if: true } } })
  Ts.Test.sub.is<Q>()({ string: { $include: { if: false } } })
  Ts.Test.sub.is<Q>()({ string: { $include: {} } })
  Ts.Test.sub.is<Q>()({ string: { $include: {} } })
  // Ts.Test.sub.is<S>({ string: include() })

  // @defer
  // Ts.Test.sub.is<Q>()({ string: { $defer: true } })
  // Ts.Test.sub.is<Q>()({ string: { $defer: { if: true, label: `foo` } } })
  // Ts.Test.sub.is<Q>()({ string: { $defer: { if: true } } })
  // Ts.Test.sub.is<Q>()({ string: { $defer: {} } })

  // (todo limit to lists?)
  // @stream
  // Ts.Test.sub.is<Q>()({ string: { $stream: true } })
  // Ts.Test.sub.is<Q>()({ string: { $stream: { if: true, label: `foo`, initialCount: 0 } } })
  // Ts.Test.sub.is<Q>()({ string: { $stream: { if: true, label: `foo` } } })
  // Ts.Test.sub.is<Q>()({ string: { $stream: { if: true } } })
  // Ts.Test.sub.is<Q>()({ string: { $stream: {} } })

  // Field Group
  // On Object
  Ts.Test.sub.is<Q>()({ object: { ___: { int: true, id: true } } })
  Ts.Test.sub.is<Q>()({ object: { ___: { $skip: true, int: true, id: true } } })
  Ts.Test.sub.is<Q>()({ object: { ___: [{ $skip: true, int: true, id: true }] } })
  // On Root (Query)
  Ts.Test.sub.is<Q>()({ ___: { id: true } })
  Ts.Test.sub.is<Q>()({ ___: { $skip: true, id: true } })
  Ts.Test.sub.noExcess<Q, {
    // @ts-expect-error no directives on root type
    $skip: true,
    id: true
  }>()

  // Arguments
  // all-optional on object
  Ts.Test.sub.is<Q>()({ objectWithArgs: { $: {}, id: true } })
  Ts.Test.sub.is<Q>()({ objectWithArgs: { id: true } })
  Ts.Test.sub.is<Q>()({
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
  Ts.Test.sub.is<Q>()({ id: true })
  // builder interface
  // Ts.Test.sub.is<S>({ foo: args({ ... }) })
  // all-optional on scalar
  Ts.Test.sub.is<Q>()({ stringWithArgs: true })
  Ts.Test.sub.is<Q>()({ stringWithArgs: {} })
  Ts.Test.sub.is<Q>()({ stringWithArgs: { $: { boolean: true, float: 1, id: `id`, int: 3, string: `abc` } } })
  Ts.Test.sub.is<Q>()({ stringWithArgs: { $: { boolean: null, float: null, id: null, int: null, string: null } } })

  // enum arg
  Ts.Test.sub.is<Q>()({ stringWithArgEnum: { $: { $ABCEnum: `A` } } })
  Ts.Test.sub.is<Q>()({ stringWithArgEnum: { $: { $ABCEnum: `B` } } })
  Ts.Test.sub.is<Q>()({ stringWithArgEnum: { $: { $ABCEnum: `C` } } })
  Ts.Test.sub.is<Q>()({ stringWithArgEnum: { $: { $ABCEnum: null } } })
  Ts.Test.sub.is<Q>()({ stringWithArgEnum: { $: {} } })
  // @ts-expect-error invalid enum value
  Ts.Test.sub.is<Q>()({ stringWithArgEnum: { $: { ABCEnum: `D` } } })
  // @ts-expect-error invalid enum value
  Ts.Test.sub.is<Q>()({ stringWithArgEnum: { $: { ABCEnum: `` } } })
  // @ts-expect-error invalid enum value
  Ts.Test.sub.is<Q>()({ stringWithArgEnum: { $: { ABCEnum: 1 } } })

  // list arg
  Ts.Test.sub.is<Q>()({ stringWithListArg: { $: { ints: [1, 2, 3] } } })
  Ts.Test.sub.is<Q>()({ stringWithListArg: { $: { ints: [] } } })
  Ts.Test.sub.is<Q>()({ stringWithListArg: { $: { ints: [null] } } })
  Ts.Test.sub.is<Q>()({ stringWithListArg: { $: { ints: null } } })
  Ts.Test.sub.is<Q>()({ stringWithListArg: { $: {} } })
  // @ts-expect-error missing "ints" arg
  Ts.Test.sub.is<Q>()({ stringWithListArgRequired: { $: {} } })
  // @ts-expect-error missing non-null "ints" arg
  Ts.Test.sub.is<Q>()({ stringWithListArgRequired: { $: { ints: null } } })

  // custom scalar arg
  // @ts-expect-error wrong type
  Ts.Test.sub.is<Q>()({ dateArg: { $: { date: 0 } } })
  Ts.Test.sub.is<Q>()({ dateArg: { $: { date: null } } })
  Ts.Test.sub.is<Q>()({ dateArg: { $: { date: db.date0Encoded } } })
  Ts.Test.sub.is<QWithDate>()({ dateArg: { $: { date: db.date0 } } })

  // input object arg
  Ts.Test.sub.is<Q>()({ stringWithArgInputObjectRequired: { $: { input: { id: ``, idRequired: ``, dateRequired: db.date0Encoded } } } })
  Ts.Test.sub.is<Q>()({ stringWithArgInputObjectRequired: { $: { input: { id: null, idRequired: ``, dateRequired: db.date0Encoded } } } })
  Ts.Test.sub.is<Q>()({ stringWithArgInputObjectRequired: { $: { input: { idRequired: ``, dateRequired: db.date0Encoded } } } })
  Ts.Test.sub.is<QWithDate>()({ stringWithArgInputObjectRequired: { $: { input: { id: ``, idRequired: ``, dateRequired: db.date0 } } } })
  Ts.Test.sub.is<QWithDate>()({ stringWithArgInputObjectRequired: { $: { input: { id: null, idRequired: ``, dateRequired: db.date0 } } } })
  Ts.Test.sub.is<QWithDate>()({ stringWithArgInputObjectRequired: { $: { input: { idRequired: ``, dateRequired: db.date0 } } } })
  // @ts-expect-error missing "idRequired" field
  Ts.Test.sub.is<Q>()({ stringWithArgInputObjectRequired: { $: { input: {} } } })
  // type x = Exclude<Q['stringWithArgInputObjectRequired'],undefined>['$']['input']

  // all-optional + scalar + directive
  Ts.Test.sub.is<Q>()({ stringWithArgs: { $: { boolean: true }, $skip: true } })
  // builder interface
  // Ts.Test.sub.is<S>({ foo: args({ boolean: true }).skip().select({ x: 1 }) })
  // 1+ required + scalar
  Ts.Test.sub.is<Q>()({ stringWithRequiredArg: { $: { string: `` } } })
  // @ts-expect-error missing "string" arg
  Ts.Test.sub.is<Q>()({ stringWithRequiredArg: { $: {} } })
  // @ts-expect-error missing args ("$")
  Ts.Test.sub.is<Q>()({ stringWithRequiredArg: {} })

  // Scalars Wildcard ("client directive")
  // object
  Ts.Test.sub.is<Q>()({ object: { $scalars: true } })
  // @ts-expect-error no directives on scalars field
  Ts.Test.sub.is<Q>()({ scalars: { $scalars: { $skip: true } } })
  // union fragment
  Ts.Test.sub.is<Q>()({ unionFooBar: { ___on_Bar: { $scalars: true } } })
  Ts.Test.sub.is<Q>()({ unionFooBarWithArgs: { $: { id: `abc` }, ___on_Bar: { $scalars: true } } })

  // Ts.Test.sub.is<S>({ scalars: select() })

  // todo empty selection set not allowed, with arguments given
  // todo empty selection set not allowed, with directive given
  // todo empty selection set not allowed
  // // @ts-expect-error empty selection set not allowed
  // Ts.Test.sub.is<S>({ scalars: {} })
  // todo selection set of _only_ negative indicators should not be allowed

  // Interface Hierarchy

  Ts.Test.sub.is<Q>()({ interfaceHierarchyGrandparents: { a: true } })
  // Can verbosely nest inline fragments matching the interface hierarchy
  Ts.Test.sub.is<Q>()({ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { ___on_InterfaceChildA: { a: true }  } } })
  // Can skip intermediary implementor interfaces
  Ts.Test.sub.is<Q>()({ interfaceHierarchyGrandparents: { ___on_ObjectChildA: { a: true} } })
  // Cannot directly select fields from implementor interface
  // @ts-expect-error
  Ts.Test.sub.is<Q>()({ interfaceHierarchyGrandparents: { b: true }})
  // Nested: ^
  // @ts-expect-error
  Ts.Test.sub.is<Q>()({ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { c1: true } }})
})
