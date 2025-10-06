import type { Client_justContext, ClientEmpty } from '#/client/client'
import type { RequestPipeline } from '#/requestPipeline/RequestPipeline'
import type { Configurator } from '#graffle/extension-exports'
import type { Anyware } from '#lib/anyware'
import type { Context } from '../../context.js'
import type { ContextComputerParameters } from '../types.js'

export const create = <$Client extends Client_justContext = ClientEmpty>(
  interceptor: Anyware.Interceptor.InferFromPipeline<
    Anyware.Pipeline.InferFromDefinition<$Client['_']['requestPipelineDefinition']>
  >,
) => interceptor

export type RequestInterceptorComputer<
  $Context extends Context = Context,
  $Configuration extends Configurator.Configuration = Configurator.Configuration,
> = (
  parameters: ContextComputerParameters<$Context, $Configuration>,
) => RequestPipeline.BaseInterceptor
