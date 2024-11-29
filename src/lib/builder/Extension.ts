// import type { TypeFunction } from '../type-function/__.js'
// import type { Definition } from './_.js'
// import type { Definition_ } from './Definition.js'

// /**
//  * Statically known data that extensions can read from/write to.
//  */
// export type Context = object

// /**
//  * A builder extension.
//  *
//  * A builder extension is a "type function" that upon invocation
//  * can contribute properties to the builder instance.
//  */
// export interface Extension extends TypeFunction {
//   /**
//    * The context that this extension contributes.
//    */
//   context: Context
//   /**
//    * The context in its most empty form.
//    *
//    * The definition of "most empty" is owned by the extension.
//    *
//    * For example if context is `{ count: number[] }` then an extension
//    * may decide that contextEmpty is `{}` or `{ count: [] }` or just
//    * the same (`{ count: number[] }`).
//    */
//   contextEmpty: Context
// }

// export namespace Extension {
//   export type Invoke<_ extends Extension, $Arguments extends Parameters> = TypeFunction.Call<_, $Arguments>

//   /**
//    * The parameters for an extension invocation (recall: builder extensions are "type functions".
//    *
//    * If you pass your Extension definition then its context will be used to type
//    * the `context` parameter.
//    */
//   export type Parameters<$Extension_ extends Extension = Extension> = {
//     /**
//      * The context type as specified by this extension.
//      *
//      * Note that the type here could be more specific (subtype) upon later
//      * use in the materialized builder context. For example this or other extensions
//      * may contribute methods that return the builder with a new context.
//      */
//     context: $Extension_['context']
//     // todo rename to definition
//     /**
//      * The definition of the builder.
//      *
//      * If you need to reference the builder with a changed (or same)
//      * context then you'll need this definition.
//      *
//      * @example
//      *
//      * ```ts
//      * interface BuilderExtension extends Builder.Extension {
//      *   context: { value: string }
//      *   return: BuilderExtension_<this['params']>
//      * }
//      * interface BuilderExtension_<$Arguments extends Builder.Extension.Parameters<BuilderExtension>> {
//      *   passthrough: () => Builder.Definition.MaterializeWith<$Arguments['definition'], $Arguments['context']>
//      *   append: <$Value>(value: $Value) =>
//      *     Builder.Definition.MaterializeWith<
//      *       $Arguments['definition'],
//      *       { value: `${$Arguments['context']['value']}${$Value}` }
//      *     >
//      * }
//      * ```
//      */
//     definition: Definition_
//     /**
//      * The current builder.
//      *
//      * After materialization this type becomes the specifically produced builder type.
//      *
//      * If your extension needs to reference the builder without affecting its context then
//      * use this type. For example your extension has a method that returns the builder.
//      *
//      * If your extension needs to reference the builder **with a changed context** then you must
//      * materialize it from the definition. See the {@link Parameters.definition} parameter.
//      */
//     // todo so far we couldn't achieve this without hitting infinite instantiation TS limitation.
//     // builder: object
//   }

//   /**
//    * Create a builder extension.
//    *
//    * The returned object will be merged into the builder.
//    *
//    * You receive the private state of the builder to work with as you wish.
//    *
//    * For example use the builder instance to return a new builder with updated state.
//    *
//    * TODO The state cannot be mutated.
//    */
//   export const create = <$Extension extends Extension>(
//     implementor: Implementor<$Extension>,
//   ): Implementor<$Extension> => {
//     return implementor
//   }

//   export type Implementor<$Extension extends Extension> = (
//     /**
//      * The host builder instance.
//      *
//      * Invoke with context data to return a new builder copy.
//      *
//      * TODO this JSDoc does not show up on user side when they pass in an actual function. Ask on StackOverflow how to fix this (need to create a minimal repro therefore (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore)).
//      */
//     builder: Builder<$Extension>,
//     /**
//      * The current state of context.
//      *
//      * TODO Cannot be mutated.
//      */
//     context: $Extension['context'],
//   ) => object

//   /**
//    * foobar
//    */
//   export type Builder<$Extension extends Extension> = (
//     context: $Extension['context'],
//   ) => Definition.MaterializeGeneric<Definition.Definition_<[$Extension]>>
// }
