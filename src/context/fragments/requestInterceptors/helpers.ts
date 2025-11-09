import type { Configurator } from '#graffle/extension-exports'
import type { Client_justContext, ClientEmpty } from '#src/client/client.js'
import type { RequestPipeline } from '#src/requestPipeline/RequestPipeline.js'
import { Ware } from '@wollybeard/kit'
// The following import is to fix
// src/context/fragments/requestInterceptors/helpers.ts:8:14 - error TS2742: The inferred type of 'create' cannot be named without a reference to '../../../../node_modules/@wollybeard/kit/build/utils/ts/err.js'. This is likely not portable. A type annotation is necessary.
import type * as _ from '@wollybeard/kit/ts'
import type { Context } from '../../context.js'
import type { ContextComputerParameters } from '../types.js'

export const create = <$Client extends Client_justContext = ClientEmpty>(
  interceptor: Ware.Interceptor.InferFromPipeline<
    Ware.Pipeline.InferFromDefinition<$Client['_']['requestPipelineDefinition']>
  >,
) => interceptor

export type RequestInterceptorComputer<
  $Context extends Context = Context,
  $Configuration extends Configurator.Configuration = Configurator.Configuration,
> = (
  parameters: ContextComputerParameters<$Context, $Configuration>,
) => RequestPipeline.BaseInterceptor
