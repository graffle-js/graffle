// import { assertEqual, assertExtends } from '../assert-equal.js'
// import type { Private } from '../private.js'
// import type { Builder } from './__.js'

// // ---------------------------------------------------------------------------------------------------------------------
// {
//   interface ex1_ extends Builder.Extension {
//     return: {
//       a: 1
//     }
//   }
//   type B = Builder.Definition.AddExtension<Builder.Definition.Empty, ex1_>
//   assertEqual<B['extensions'], [ex1_]>()
//   type b = Builder.Definition.MaterializeEmpty<B>
//   type expectedPrivateState = {
//     definition: B
//     context: {}
//   }
//   assertEqual<b, Private.Add<expectedPrivateState, { a: 1 }>>()
// }
// // ---------------------------------------------------------------------------------------------------------------------
// {
//   interface ex1_ extends Builder.Extension {
//     return: {
//       a: 1
//     }
//   }
//   type B = Builder.Definition.AddExtensions<Builder.Definition.Empty, [ex1_]>
//   assertEqual<B['extensions'], [ex1_]>()
//   type b = Builder.Definition.MaterializeEmpty<B>
//   type expectedPrivateState = {
//     definition: B
//     context: {}
//   }
//   assertEqual<b, Private.Add<expectedPrivateState, { a: 1 }>>()
// }
// // ---------------------------------------------------------------------------------------------------------------------
// {
//   interface Reflect_ extends Builder.Extension {
//     // @ts-expect-error untyped params
//     return: Reflect<this['params']>
//   }
//   type Reflect<$Arguments extends Builder.Extension.Parameters> = {
//     arguments: $Arguments
//   }
//   type B = Builder.Definition.AddExtension<Builder.Definition.Empty, Reflect_>
//   type b = Builder.Definition.MaterializeEmpty<B>
//   type expectedPrivateState = {
//     definition: B
//     context: {}
//   }
//   type expectedContext = {
//     arguments: {
//       context: {}
//       definition: B
//     }
//   }
//   assertEqual<
//     b,
//     Private.Add<expectedPrivateState, expectedContext>
//   >()
// }
// // ---------------------------------------------------------------------------------------------------------------------
// {
//   interface FooContext {
//     calls: number[]
//   }
//   interface FooContextEmpty extends FooContext {
//     calls: []
//   }
//   interface FooExtension extends Builder.Extension {
//     context: FooContext
//     contextEmpty: FooContextEmpty
//     // @ts-expect-error untyped params
//     return: FooExtension_<this['params']>
//   }
//   interface FooExtension_<$Args extends Builder.Extension.Parameters<FooExtension>> {
//     _: $Args['context']
//     foo: <const $Number extends number>(
//       number: $Number,
//     ) => Builder.Definition.MaterializeWith<
//       $Args['definition'],
//       { calls: [...$Args['context']['calls'], $Number] }
//     >
//   }

//   type bGeneric = Builder.Definition.MaterializeGeneric<
//     Builder.Definition.AddExtension<Builder.Definition.Empty, FooExtension>
//   >
//   type bEmpty = Builder.Definition.MaterializeEmpty<
//     Builder.Definition.AddExtension<Builder.Definition.Empty, FooExtension>
//   >

//   assertExtends<bEmpty, bGeneric>()

//   const bEmpty: bEmpty = null as any
//   type bEmpty_ = typeof bEmpty._
//   assertEqual<bEmpty_, { calls: [] }>()

//   const b = bEmpty.foo(1)
//   type b = typeof b
//   type b_ = typeof b._
//   assertEqual<b_, { calls: [1] }>()
// }
