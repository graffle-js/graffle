import type { Context } from '../context/context.js'
import { Configuration } from '../context/fragments/configuration/_namespace.js'
import { Extensions } from '../context/fragments/extensions/_namespace.js'
import { Properties } from '../context/fragments/properties/_namespace.js'
import { RequestInterceptors } from '../context/fragments/requestInterceptors/_namespace.js'
import { Scalars } from '../context/fragments/scalars/_namespace.js'
import { Transports } from '../context/fragments/transports/_namespace.js'
import { type EmptyArray } from '../lib/prelude.js'

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
  readonly typeHookOnRequestDocumentRootType: EmptyArray
  readonly typeHookOnRequestResult: EmptyArray
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
