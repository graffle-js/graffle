import { __, type ExcludeUndefined } from '../lib/prelude.js'
import type { RequestPipelineBaseInterceptor } from '../requestPipeline/__.js'
import type { Context } from '../types/context.js'
import type { Extension } from './_namespace.js'
import type { Configurator } from './configurator.js'

// dprint-ignore
interface Builder<
  $Extension extends Extension,
  _$ConfigurationNormalized = undefined extends $Extension['configurator'] ? never : ExcludeUndefined<$Extension['configurator']>['normalized']
> {

  /**
   * todo
   */
  configurator: <$Configurator extends Configurator>(
    callback: Configurator.BuilderProviderCallback<$Configurator>,
  ) => Builder<{
    name: $Extension['name']
    configurator: $Configurator
    onRequest: $Extension['onRequest']
  }>

  /**
   * todo
   */
  requestInterceptor: (
    callback: (
      state: {
        configuration: _$ConfigurationNormalized
        context: Context
      },
    ) => RequestPipelineBaseInterceptor,
  ) => Builder<$Extension>

    /**
     * todo
     */
  extension: $Extension
}

export const create = <$Name extends string>(name: $Name): Builder<{
  name: $Name
  onRequest: undefined
  configurator: undefined
}> => {
  return __(name)
}
