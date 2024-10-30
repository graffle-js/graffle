import type { TypeFunction } from '../type-function/__.js'
import type { Definition } from './_.js'
import type { ChainDefinition_ } from './Definition.js'

/**
 * Statically known data that extensions can read from and write to.
 */
export type Context = object

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
  export type Call<_ extends Extension, $Arguments extends Parameters> = TypeFunction.Call<
    _,
    $Arguments
  >

  /**
   * The parameters for chain extension. Chain extensions are "type functions", callable at the type level.
   *
   * If you pass your Extension definition then the context you have defined for it will be used to type
   * the `context` parameter.
   */
  export type Parameters<$Extension_ extends Extension = Extension> = {
    context: $Extension_['context']
    chain: ChainDefinition_
  }

  export const create = <$Extension extends Extension>(
    impl: Impl<$Extension>,
  ): Impl<$Extension> => {
    return impl
  }
}

export type Impl<$Extension extends Extension> = (
  chain: Chain<$Extension>,
  context: $Extension['context'],
) => Definition.MaterializeGeneric<Definition.ChainDefinition_<[$Extension]>>

export type Chain<$Extension extends Extension> = (
  context: $Extension['context'],
) => Definition.MaterializeGeneric<Definition.ChainDefinition_<[$Extension]>>
