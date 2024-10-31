import { assertEqual, assertExtends } from '../assert-equal.js'
import type { Builder } from './__.js'

// ---------------------------------------------------------------------------------------------------------------------
{
  interface ex1_ extends Builder.Extension {
    return: {
      a: 1
    }
  }
  type c = Builder.Definition.Extend<Builder.Definition.Empty, ex1_>
  assertEqual<c['extensions'], [ex1_]>()
  type cm = Builder.Definition.MaterializeSpecific<c>
  assertEqual<cm, { a: 1 }>()
}
// ---------------------------------------------------------------------------------------------------------------------
{
  interface ex1_ extends Builder.Extension {
    return: {
      a: 1
    }
  }
  type c = Builder.Definition.ExtendMany<Builder.Definition.Empty, [ex1_]>
  assertEqual<c['extensions'], [ex1_]>()
  type cm = Builder.Definition.MaterializeSpecific<c>
  assertEqual<cm, { a: 1 }>()
}
// ---------------------------------------------------------------------------------------------------------------------
{
  interface Reflect_ extends Builder.Extension {
    // @ts-expect-error untyped params
    return: Reflect<this['params']>
  }
  type Reflect<$Arguments extends Builder.Extension.Parameters> = {
    reflect: keyof $Arguments
  }
  type c = Builder.Definition.MaterializeSpecific<Builder.Definition.Extend<Builder.Definition.Empty, Reflect_>>
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
  interface Foo_ extends Builder.Extension {
    context: FooContext
    contextEmpty: FooContextEmpty
    // @ts-expect-error untyped params
    return: Foo<this['params']>
  }
  interface Foo<$Args extends Builder.Extension.Parameters<Foo_>> {
    _: $Args['context']
    foo: <const $Number extends number>(
      number: $Number,
    ) => Builder.Definition.MaterializeWithNewContext<
      $Args['chain'],
      { calls: [...$Args['context']['calls'], $Number] }
    >
  }

  type C = Builder.Definition.MaterializeGeneric<Builder.Definition.Extend<Builder.Definition.Empty, Foo_>>
  type c1 = Builder.Definition.MaterializeSpecific<Builder.Definition.Extend<Builder.Definition.Empty, Foo_>>

  assertExtends<c1, C>()

  const c1: c1 = null as any
  type c1_ = typeof c1._
  assertEqual<c1_, { calls: [] }>()

  const c2 = c1.foo(1)
  type c2 = typeof c2
  type c2_ = typeof c2._
  assertEqual<c2_, { calls: [1] }>()
}
