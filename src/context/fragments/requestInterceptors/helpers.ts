import type { Configurator } from '#graffle/extension-exports'
import type { Anyware } from '#lib/anyware'
import type { Client_justContext, ClientEmpty } from '#src/client/client.js'
import type { RequestPipeline } from '#src/requestPipeline/RequestPipeline.js'
import type { Context } from '../../context.js'
import type { ContextComputerParameters } from '../types.js'

export * from '@wollybeard/kit'
import * as Ts from '@wollybeard/kit'
// export * from '@wollybeard/kit/ts'
export { Simplify } from '@wollybeard/kit/ts'
import { Simplify } from '@wollybeard/kit/ts'

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
