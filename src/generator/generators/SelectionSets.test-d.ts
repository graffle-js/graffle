import { assertType, test } from 'vitest'
import type { DateScalar } from '../../../tests/_/fixtures/scalars.js'
import { db } from '../../../tests/_/schemas/db.js'
import type * as SelectionSets from '../../../tests/_/schemas/kitchen-sink/graffle/modules/selection-sets.js'
import type { Schema } from '../../types/Schema/__.js'

type Q = SelectionSets.Query
type QWithDate = SelectionSets.Query<Schema.Scalar.Registry.AddScalar<Schema.Scalar.Registry.Empty, typeof DateScalar>>

// dprint-ignore
test(`Query`, () => {
  assertType<Q>({ __typename: true })

  // @ts-expect-error directive on root type Query
  assertType<Q>({ $defer: true })

  // Scalar
  assertType<Q>({ id: true })
  assertType<Q>({ id: true })
  assertType<Q>({ id: false })
  // assertType<Q>({ id: 1 })
  // assertType<Q>({ id: 0 })
  assertType<Q>({ id: undefined })
  // non-null
  assertType<Q>({ idNonNull: true })

  // Custom Scalar
  assertType<Q>({ date: true })
  assertType<Q>({ date: false })
  // assertType<Q>({ date: 0 })
  // assertType<Q>({ date: 1 })
  assertType<Q>({ date: undefined })
  
  // Enum
  assertType<Q>({ abcEnum: true })

  // Object
  assertType<Q>({ object: { id: true } })
  // typename
  assertType<Q>({ __typename: true })
  // Non-Null
  assertType<Q>({ objectNonNull: { id: true } })
  // @ts-expect-error excess property check
  assertType<Q>({ id2: true })
  // @ts-expect-error no a2
  assertType<Q>({ object: { a2: true } })
  
  // Object Nested
  assertType<Q>({ objectList: {  } })

  // Union
  assertType<Q>({ unionFooBar: { __typename: true } })
  assertType<Q>({ unionFooBar: { ___on_Foo: { __typename: true } } })
  assertType<Q>({ unionFooBar: { ___on_Foo: { id: true } } })
  // @ts-expect-error no b
  assertType<Q>({ unionFooBar: { ___on_Foo: { id2: true } } })
  assertType<Q>({ unionFooBar: { ___on_Bar: { __typename: true } } })
  assertType<Q>({ unionFooBar: { ___on_Bar: { int: true } } })
  // @ts-expect-error no a
  assertType<Q>({ unionFooBar: { ___on_Bar: { int2: true } } })

  // Union fragments Case
  assertType<Q>({ lowerCaseUnion: { ___on_lowerCaseObject: { id: true }, ___on_lowerCaseObject2: { int: true } } })

  // Interface
  assertType<Q>({ interface: { id: true } })
  // assertType<Q>({ interface: { id: { $defer: true } } })
  assertType<Q>({ interface: { id: { $include: true } } })
  assertType<Q>({ interface: { id: { $skip: true } } })
  // assertType<Q>({ interface: { id: { $stream: true } } })
  assertType<Q>({ interface: { __typename: true } })
  // assertType<Q>({ interface: { __typename: { $defer: true } } })
  assertType<Q>({ interface: { $scalars: true } })
  assertType<Q>({ interfaceWithArgs: { $: { id: `abc` }, id: true } })
  // @ts-expect-error needs fragment
  assertType<Q>({ interface: { id: true, int: true } })
  // @ts-expect-error needs fragment
  assertType<Q>({ interface: { id: true, boolean: true } })
  assertType<Q>({ interface: { id: true, ___on_Object1ImplementingInterface: { int: true } } })
  assertType<Q>({ interface: { id: true, ___on_Object2ImplementingInterface: { boolean: true } } })
  // @ts-expect-error incorrect implementor name
  assertType<Q>({ interface: { id: true, ___on_Object1ImplementingInterface2: { int: true } } })
  // directives work on fragments
  assertType<Q>({ interface: { id: true, ___on_Object1ImplementingInterface: { $include: true } } }) // todo should REQUIRE field selection
  




  // Alias
  // todo test that aliases are no supported on ___on_X polymorphic fields
  
  // alias: enum
  assertType<Q>({ abcEnum: [`enum`, true] })
  assertType<Q>({ __typename: [`kind`, true] })
  assertType<Q>({ __typename: [`f`, true] })
  // alias: object
  assertType<Q>({ object: [`o`, { id: true }] })
  // alias multiple 1
  assertType<Q>({ object: [[`o`, { id: true }]] })
  // alias multiple 2
  assertType<Q>({ object: [[`o1`, { id: true }], [`o2`, { id: true }]] })
  // alias complex
  assertType<Q>({ objectNested: [[`o1`, { object: {___: {id: true}} }], [`o2`, { id: {$skip:true} }]] })
  // alias Nested
  assertType<Q>({ object: [`object2`, { id: [`id2`, true] }] })
  // @ts-expect-error alias invalid one too many nested arrays
  assertType<Q>({ object: [[[`o`, { id: true }]]] })
  // @ts-expect-error alias invalid on union fragment
  assertType<Q>({ unionFooBar: { ___on_Foo: [`x`, { id: true }] } })
  // @ts-expect-error alias invalid on interface fragment
  assertType<Q>({ interface: { ___on_Object1ImplementingInterface: [`x`, { id: true }] } })

  // todo: We could achieve this by using a more expensive template literal type like `${Letter}${string}`
  // Make that an opt-in feature since it will potentially decrease the IDE performance for everyone even those not benefiting much from this.
  // //@ts-expect-error invalid alias key format
  // assertType<Q>({ object: [``, { id: true }] })
  
  // We would have to pass the input through to Q so that it could parse the identifier. This would be complex and probably not worth it.
  // Maybe this will get easier one day.
  // // @ts-expect-error invalid alias key format
  // assertType<Q>({ object: [`$$`, { id: true }] })

  // directives
  // @skip
  // on scalar
  assertType<Q>({ string: { $skip: true } })
  assertType<Q>({ string: { $skip: false } })
  assertType<Q>({ string: { $skip: { if: true } } })
  assertType<Q>({ string: { $skip: { if: false } } })
  assertType<Q>({ string: { $skip: {} } })
  assertType<Q>({ string: { $skip: {} } })
  assertType<Q>({ object: { string: { $skip: true } } })
  // assertType<S>({ string: skip() })
  // on object
  assertType<Q>({ object: { $skip: true, string: true } })
  // assertType<S>({ scalars: skip().select({ a: true }) })
  // on fragment
  assertType<Q>({ unionFooBar: { ___on_Bar: { $skip: true, int: true } } })
  // @include
  assertType<Q>({ string: { $include: true } })
  assertType<Q>({ string: { $include: false } })
  assertType<Q>({ string: { $include: { if: true } } })
  assertType<Q>({ string: { $include: { if: false } } })
  assertType<Q>({ string: { $include: {} } })
  assertType<Q>({ string: { $include: {} } })
  // assertType<S>({ string: include() })

  // @defer
  // assertType<Q>({ string: { $defer: true } })
  // assertType<Q>({ string: { $defer: { if: true, label: `foo` } } })
  // assertType<Q>({ string: { $defer: { if: true } } })
  // assertType<Q>({ string: { $defer: {} } })

  // (todo limit to lists?)
  // @stream
  // assertType<Q>({ string: { $stream: true } })
  // assertType<Q>({ string: { $stream: { if: true, label: `foo`, initialCount: 0 } } })
  // assertType<Q>({ string: { $stream: { if: true, label: `foo` } } })
  // assertType<Q>({ string: { $stream: { if: true } } })
  // assertType<Q>({ string: { $stream: {} } })

  // Field Group
  // On Object
  assertType<Q>({ object: { ___: { int: true, id: true } } })
  assertType<Q>({ object: { ___: { $skip: true, int: true, id: true } } })
  assertType<Q>({ object: { ___: [{ $skip: true, int: true, id: true }] } })
  // On Root (Query)
  assertType<Q>({ ___: { id: true } })
  assertType<Q>({ ___: { $skip: true, id: true } })
  // @ts-expect-error no directives on root type
  assertType<Q>({ $skip: true, id: true })

  // Arguments
  // all-optional on object
  assertType<Q>({ objectWithArgs: { $: {}, id: true } })
  assertType<Q>({ objectWithArgs: { id: true } })
  assertType<Q>({
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
  assertType<Q>({ id: true })
  // builder interface
  // assertType<S>({ foo: args({ ... }) })
  // all-optional on scalar
  assertType<Q>({ stringWithArgs: true })
  assertType<Q>({ stringWithArgs: {} })
  assertType<Q>({ stringWithArgs: { $: { boolean: true, float: 1, id: `id`, int: 3, string: `abc` } } })
  assertType<Q>({ stringWithArgs: { $: { boolean: null, float: null, id: null, int: null, string: null } } })

  // enum arg
  assertType<Q>({ stringWithArgEnum: { $: { $ABCEnum: `A` } } })
  assertType<Q>({ stringWithArgEnum: { $: { $ABCEnum: `B` } } })
  assertType<Q>({ stringWithArgEnum: { $: { $ABCEnum: `C` } } })
  assertType<Q>({ stringWithArgEnum: { $: { $ABCEnum: null } } })
  assertType<Q>({ stringWithArgEnum: { $: {} } })
  // @ts-expect-error invalid enum value
  assertType<Q>({ stringWithArgEnum: { $: { ABCEnum: `D` } } })
  // @ts-expect-error invalid enum value
  assertType<Q>({ stringWithArgEnum: { $: { ABCEnum: `` } } })
  // @ts-expect-error invalid enum value
  assertType<Q>({ stringWithArgEnum: { $: { ABCEnum: 1 } } })

  // list arg
  assertType<Q>({ stringWithListArg: { $: { ints: [1, 2, 3] } } })
  assertType<Q>({ stringWithListArg: { $: { ints: [] } } })
  assertType<Q>({ stringWithListArg: { $: { ints: [null] } } })
  assertType<Q>({ stringWithListArg: { $: { ints: null } } })
  assertType<Q>({ stringWithListArg: { $: {} } })
  // @ts-expect-error missing "ints" arg
  assertType<Q>({ stringWithListArgRequired: { $: {} } })
  // @ts-expect-error missing non-null "ints" arg
  assertType<Q>({ stringWithListArgRequired: { $: { ints: null } } })
  
  // custom scalar arg
  // @ts-expect-error wrong type
  assertType<Q>({ dateArg: { $: { date: 0 } } })
  assertType<Q>({ dateArg: { $: { date: null } } })
  assertType<Q>({ dateArg: { $: { date: db.date0Encoded } } })
  assertType<QWithDate>({ dateArg: { $: { date: db.date0 } } })

  // input object arg
  assertType<Q>({ stringWithArgInputObjectRequired: { $: { input: { id: ``, idRequired: ``, dateRequired: db.date0Encoded } } } })
  assertType<Q>({ stringWithArgInputObjectRequired: { $: { input: { id: null, idRequired: ``, dateRequired: db.date0Encoded } } } })
  assertType<Q>({ stringWithArgInputObjectRequired: { $: { input: { idRequired: ``, dateRequired: db.date0Encoded } } } })
  assertType<QWithDate>({ stringWithArgInputObjectRequired: { $: { input: { id: ``, idRequired: ``, dateRequired: db.date0 } } } })
  assertType<QWithDate>({ stringWithArgInputObjectRequired: { $: { input: { id: null, idRequired: ``, dateRequired: db.date0 } } } })
  assertType<QWithDate>({ stringWithArgInputObjectRequired: { $: { input: { idRequired: ``, dateRequired: db.date0 } } } })

  // @ts-expect-error missing "idRequired" field
  assertType<Q>({ stringWithArgInputObjectRequired: { $: { input: {} } } })
  // type x = Exclude<Q['stringWithArgInputObjectRequired'],undefined>['$']['input']

  // all-optional + scalar + directive
  assertType<Q>({ stringWithArgs: { $: { boolean: true }, $skip: true } })
  // builder interface
  // assertType<S>({ foo: args({ boolean: true }).skip().select({ x: 1 }) })
  // 1+ required + scalar
  assertType<Q>({ stringWithRequiredArg: { $: { string: `` } } })
  // @ts-expect-error missing "string" arg
  assertType<Q>({ stringWithRequiredArg: { $: {} } })
  // @ts-expect-error missing args ("$")
  assertType<Q>({ stringWithRequiredArg: {} })

  // Scalars Wildcard ("client directive")
  // object
  assertType<Q>({ object: { $scalars: true } })
  // @ts-expect-error no directives on scalars field
  assertType<Q>({ scalars: { $scalars: { $skip: true } } })
  // union fragment
  assertType<Q>({ unionFooBar: { ___on_Bar: { $scalars: true } } })
  assertType<Q>({ unionFooBarWithArgs: { $: { id: `abc` }, ___on_Bar: { $scalars: true } } })

  // assertType<S>({ scalars: select() })

  // todo empty selection set not allowed, with arguments given
  // todo empty selection set not allowed, with directive given
  // todo empty selection set not allowed
  // // @ts-expect-error empty selection set not allowed
  // assertType<S>({ scalars: {} })
  // todo selection set of _only_ negative indicators should not be allowed

  // Interface Hierarchy
 
  assertType<Q>({ interfaceHierarchyGrandparents: { a: true } })
  // Can verbosely nest inline fragments matching the interface hierarchy
  assertType<Q>({ interfaceHierarchyGrandparents: { ___on_InterfaceParent: { ___on_InterfaceChildA: { a: true }  } } })
  // Can skip intermediary implementor interfaces
  assertType<Q>({ interfaceHierarchyGrandparents: { ___on_ObjectChildA: { a: true} } })
  // Cannot directly select fields from implementor interface
  assertType<Q>({ interfaceHierarchyGrandparents: {
    // @ts-expect-error
    b: true
  }})
  // Nested: ^
  assertType<Q>({ interfaceHierarchyGrandparents: {
    ___on_InterfaceParent: {
      // @ts-expect-error
      c1: true
    }
  }})
})
