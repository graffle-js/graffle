import type { Client_justContext } from '../../../client/client.js'
import type { Anyware } from '../../../lib/anyware/_namespace.js'

export const create = <$Client extends Client_justContext = Client_justContext>(
  interceptor: Anyware.Interceptor.InferFromPipeline<
    Anyware.Pipeline.InferFromDefinition<$Client['_']['requestPipelineDefinition']>
  >,
) => interceptor
