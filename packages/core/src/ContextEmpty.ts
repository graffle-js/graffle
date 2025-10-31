import { Arr } from '@wollybeard/kit'
import type { Context } from './context.js'
import { Configuration } from './fragments/configuration/_.js'
import { Extensions } from './fragments/extensions/_.js'
import { Properties } from './fragments/properties/_.js'
import { RequestInterceptors } from './fragments/requestInterceptors/_.js'
import { Scalars } from './fragments/scalars/_.js'
import { Transports } from './fragments/transports/_.js'

export interface ContextEmpty extends Context {
  readonly properties: Properties.ContextFragmentEmpty['properties']
  readonly transports: Transports.ContextFragmentTransportsEmpty['transports']
  readonly requestPipelineDefinition: Transports.ContextFragmentTransportsEmpty['requestPipelineDefinition']
  readonly extensions: Extensions.ContextFragmentEmpty['extensions']
  readonly extensionsIndex: Extensions.ContextFragmentEmpty['extensionsIndex']
  readonly scalars: Scalars.ContextFragmentEmpty['scalars']
  readonly configuration: Configuration.ContextFragmentEmpty['configuration']
  // type-level properties
  // todo merge typehooks empty from extension type here to DRY
  readonly typeHookOnRequestDocumentRootType: Arr.EmptyArray
  readonly typeHookOnRequestResult: Arr.EmptyArray
  readonly typeHookRequestResultDataTypes: never
}

export const contextEmpty: ContextEmpty = Object.freeze({
  ...Properties.contextFragmentEmpty,
  ...Transports.contextFragmentTransportsEmpty,
  ...RequestInterceptors.contextFragmentEmpty,
  ...Extensions.contextFragmentEmpty,
  ...Scalars.contextFragmentScalarsEmpty,
  ...Configuration.contextFragmentEmpty,
  typeHookOnRequestDocumentRootType: null as any,
  typeHookOnRequestResult: null as any,
  typeHookRequestResultDataTypes: null as never,
})
