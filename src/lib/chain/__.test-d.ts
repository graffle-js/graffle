import { assertEqual, assertExtends } from '../assert-equal.js'
import type { Chain } from './__.js'

// ---------------------------------------------------------------------------------------------------------------------
{
  interface ex1_ extends Chain.Extension {
    return: {
      a: 1
    }
  }
  type c = Chain.Definition.Extend<Chain.Definition.Empty, ex1_>
  assertEqual<c['extensions'], [ex1_]>()
  type cm = Chain.Definition.MaterializeSpecific<c>
  assertEqual<cm, { a: 1 }>()
}
// ---------------------------------------------------------------------------------------------------------------------
{
  interface ex1_ extends Chain.Extension {
    return: {
      a: 1
    }
  }
  type c = Chain.Definition.ExtendMany<Chain.Definition.Empty, [ex1_]>
  assertEqual<c['extensions'], [ex1_]>()
  type cm = Chain.Definition.MaterializeSpecific<c>
  assertEqual<cm, { a: 1 }>()
}
// ---------------------------------------------------------------------------------------------------------------------
{
  interface Reflect_ extends Chain.Extension {
    // @ts-expect-error untyped params
    return: Reflect<this['params']>
  }
  type Reflect<$Arguments extends Chain.Extension.Parameters> = {
    reflect: keyof $Arguments
  }
  type c = Chain.Definition.MaterializeSpecific<Chain.Definition.Extend<Chain.Definition.Empty, Reflect_>>
  assertEqual<c, { reflect: 'context' | 'chain' }>()
}
// ---------------------------------------------------------------------------------------------------------------------
{
  interface FooContext {
    calls: number[]
  }
  interface FooContextEmpty extends FooContext {
    calls: []
  }
  interface Foo_ extends Chain.Extension {
    context: FooContext
    contextEmpty: FooContextEmpty
    // @ts-expect-error untyped params
    return: Foo<this['params']>
  }
  interface Foo<$Args extends Chain.Extension.Parameters<Foo_>> {
    _: $Args['context']
    foo: <const $Number extends number>(
      number: $Number,
    ) => Chain.Definition.MaterializeWithNewContext<$Args['chain'], { calls: [...$Args['context']['calls'], $Number] }>
  }

  type C = Chain.Definition.MaterializeGeneric<Chain.Definition.Extend<Chain.Definition.Empty, Foo_>>
  type c1 = Chain.Definition.MaterializeSpecific<Chain.Definition.Extend<Chain.Definition.Empty, Foo_>>

  assertExtends<c1, C>()

  const c1: c1 = null as any
  type c1_ = typeof c1._
  assertEqual<c1_, { calls: [] }>()

  const c2 = c1.foo(1)
  type c2 = typeof c2
  type c2_ = typeof c2._
  assertEqual<c2_, { calls: [1] }>()
}
