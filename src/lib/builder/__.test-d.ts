import { assertEqual, assertExtends } from '../assert-equal.js'
import type { Builder } from './__.js'
import type { Private } from './private.js'

// ---------------------------------------------------------------------------------------------------------------------
{
  interface ex1_ extends Builder.Extension {
    return: {
      a: 1
    }
  }
  type B = Builder.Definition.AddExtension<Builder.Definition.Empty, ex1_>
  assertEqual<B['extensions'], [ex1_]>()
  type b = Builder.Definition.MaterializeSpecific<B>
  assertEqual<b, Private.Add<{ a: 1 }, { chain: B; context: {} }>>()
}
// ---------------------------------------------------------------------------------------------------------------------
{
  interface ex1_ extends Builder.Extension {
    return: {
      a: 1
    }
  }
  type B = Builder.Definition.AddExtensions<Builder.Definition.Empty, [ex1_]>
  assertEqual<B['extensions'], [ex1_]>()
  type b = Builder.Definition.MaterializeSpecific<B>
  assertEqual<b, Private.Add<{ a: 1 }, { chain: B; context: {} }>>()
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
  type B = Builder.Definition.AddExtension<Builder.Definition.Empty, Reflect_>
  type b = Builder.Definition.MaterializeSpecific<B>
  assertEqual<b, Private.Add<{ reflect: 'context' | 'chain' }, { chain: B; context: {} }>>()
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

  type BGeneric = Builder.Definition.MaterializeGeneric<Builder.Definition.AddExtension<Builder.Definition.Empty, Foo_>>
  type b1 = Builder.Definition.MaterializeSpecific<Builder.Definition.AddExtension<Builder.Definition.Empty, Foo_>>

  assertExtends<b1, BGeneric>()

  const b1: b1 = null as any
  type b1_ = typeof b1._
  assertEqual<b1_, { calls: [] }>()

  const b2 = b1.foo(1)
  type b2 = typeof b2
  type b2_ = typeof b2._
  assertEqual<b2_, { calls: [1] }>()
}
