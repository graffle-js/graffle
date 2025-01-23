import type { RequestPipelineBaseInterceptor } from '../requestPipeline/__.js'
import type { Configurator } from './configurator.js'
import type { ConstructorParameters } from './extension.js'

export * as Extension from './_exports.js'

export interface Extension<
  $Name extends string = string,
  $Configurator extends undefined | Configurator = undefined | Configurator,
  $NoExpandResultDataType = unknown,
  $Properties extends object | undefined = object | undefined,
> // $Transport extends Transport | undefined = Transport | undefined,
// $TypeHooks extends TypeHooks = TypeHooks,
{
  name: $Name
  configurator?: $Configurator
  constructor?: (parameters: ConstructorParameters) => {
    requestInterceptor?: RequestPipelineBaseInterceptor
    properties?: object
  }
  requestInterceptor?: RequestPipelineBaseInterceptor
  noExpandResultDataType?: $NoExpandResultDataType
  properties?: $Properties
  // transport: $Transport
  // typeHooks: $TypeHooks
}
