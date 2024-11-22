import type { Anyware } from '../lib/anyware/__.js'
import type { ConfigManager } from '../lib/config-manager/__.js'
import { __ } from '../lib/prelude.js'
import type { RequestPipelineBaseContext } from '../requestPipeline/RequestPipeline.js'

export interface TransportExtension {
  name: string
}

export namespace TransportExtension {
  export const create = <$Name extends string>(name: $Name): Builder<{ name: $Name; config: {} }> => {
    name
    __()
  }
}

interface Context {
  name: string
  config: object
}

interface Builder<$Context extends Context> {
  config: <$Config extends object>() => Builder<ConfigManager.UpdateAtKey<$Context, 'config', $Config>>
  pipeline: <$OverloadBuilder extends Anyware.Overload.Builder<RequestPipelineBaseContext>>(
    pipelineCallback: (
      pipeline: Anyware.Overload.Builder<RequestPipelineBaseContext, {
        discriminant: ['transportType', $Context['name']]
        input: $Context['config']
        steps: {}
      }>,
    ) => $OverloadBuilder,
  ) => Builder<$Context>
}
