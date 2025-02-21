import { Configuration } from '../client/properties/configuration/_namespace.js'
import { Extensions } from '../client/properties/extensions/__.js'
import { Properties } from '../client/properties/properties/__.js'
import { RequestInterceptors } from '../client/properties/requestInterceptors/__.js'
import { Scalars } from '../client/properties/scalars/_namespace.js'
import { Transports } from '../client/properties/transports/_namespace.js'
import { type EmptyArray } from '../lib/prelude.js'
import type { Context } from './context.js'

export interface ContextEmpty extends Context {
  readonly properties: Properties.ContextFragmentPropertiesEmpty['properties']
  readonly transports: Transports.ContextFragmentTransportsEmpty['transports']
  readonly requestPipelineDefinition: Transports.ContextFragmentTransportsEmpty['requestPipelineDefinition']
  readonly extensions: Extensions.ContextFragmentEmpty['extensions']
  readonly extensionsIndex: Extensions.ContextFragmentEmpty['extensionsIndex']
  readonly scalars: Scalars.ContextFragmentEmpty['scalars']
  readonly configuration: Configuration.ContextFragmentConfigurationEmpty['configuration']
  // type-level properties
  // todo merge typehooks empty from extension type here to DRY
  readonly typeHookOnRequestDocumentRootType: EmptyArray
  readonly typeHookOnRequestResult: EmptyArray
  readonly typeHookRequestResultDataTypes: never
}

export const contextEmpty: ContextEmpty = Object.freeze({
  ...Properties.contextFragmentPropertiesEmpty,
  ...Transports.contextFragmentTransportsEmpty,
  ...RequestInterceptors.contextFragmentRequestInterceptorsEmpty,
  ...Extensions.contextFragmentEmpty,
  ...Scalars.contextFragmentScalarsEmpty,
  ...Configuration.contextFragmentConfigurationEmpty,
  typeHookOnRequestDocumentRootType: null as any,
  typeHookOnRequestResult: null as any,
  typeHookRequestResultDataTypes: null as never,
})
