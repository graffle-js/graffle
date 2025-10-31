import type { Configurator } from '@wollybeard/kit'
import type { Client_justContext, ClientEmpty } from '#~/client/client.js'
import type { RequestPipeline } from '#~/requestPipeline/RequestPipeline.js'
import { Ware } from '@wollybeard/kit'
import type { Context } from '../../context.js'
import type { ContextComputerParameters } from '../types.js'

// Type complexity simplified - actual types enforced in client package
export const create = <$Client extends Client_justContext = ClientEmpty>(
  interceptor: any,
) => interceptor

export type RequestInterceptorComputer<
  $Context extends Context = Context,
  $Configuration extends Configurator.Configuration = Configurator.Configuration,
> = (
  parameters: ContextComputerParameters<$Context, $Configuration>,
) => RequestPipeline.BaseInterceptor
