import type { TypeFunction } from '../type-function/__.js'
import type { Definition } from './_.js'
import type { Definition_ } from './Definition.js'

/**
 * Statically known data that extensions can read from and write to.
 */
export type Context = object

/**
 * A builder extension.
 *
 * A builder extension is a "type function" that upon invocation
 * can contribute properties to the builder instance.
 */
export interface Extension extends TypeFunction.Fn {
  /**
   * The context that this extension contributes.
   */
  context: Context
  /**
   * The context in its most empty form.
   *
   * The definition of "most empty" is owned by the extension.
   *
   * For example if context is `{ count: number[] }` then an extension may decide that contextEmpty is `{}` or `{ count: [] }` or just the same (`{ count: number[] }`).
   */
  contextEmpty: Context
}

export namespace Extension {
  export type Invoke<_ extends Extension, $Arguments extends Parameters> = TypeFunction.Call<_, $Arguments>

  /**
   * The parameters for chain extension. Chain extensions are "type functions", callable at the type level.
   *
   * If you pass your Extension definition then the context you have defined for it will be used to type
   * the `context` parameter.
   */
  export type Parameters<$Extension_ extends Extension = Extension> = {
    context: $Extension_['context']
    chain: Definition_
  }

  /**
   * Create a builder extension.
   *
   * The returned object will be merged into the builder.
   *
   * You receive the private state of the builder to work with as you wish.
   *
   * For example use the builder instance to return a new builder with updated state.
   *
   * TODO The state cannot be mutated.
   */
  export const create = <$Extension extends Extension>(
    implementor: Implementor<$Extension>,
  ): Implementor<$Extension> => {
    return implementor
  }

  export type Implementor<$Extension extends Extension> = (
    /**
     * The host builder instance.
     *
     * Invoke with context data to return a new builder copy.
     *
     * TODO this JSDoc does not show up on user side when they pass in an actual function. Ask on StackOverflow how to fix this (need to create a minimal repro therefore (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore) (need to create a minimal repro therefore)).
     */
    builder: Builder<$Extension>,
    /**
     * The current state of context.
     *
     * TODO Cannot be mutated.
     */
    context: $Extension['context'],
  ) => object

  /**
   * foobar
   */
  export type Builder<$Extension extends Extension> = (
    context: $Extension['context'],
  ) => Definition.MaterializeGeneric<Definition.Definition_<[$Extension]>>
}
