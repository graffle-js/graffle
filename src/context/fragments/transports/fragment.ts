import type { Configurator } from '../../../lib/configurator/configurator.js'
import { type EmptyObject, emptyObject } from '../../../lib/prelude.js'
import type { RequestPipeline } from '../../../requestPipeline/RequestPipeline.js'
import { requestPipelineBaseDefinition } from '../../../requestPipeline/RequestPipeline.js'
import type { Transport } from './dataType/_namespace.js'

export interface ContextTransportsEmpty extends ContextTransports {
  readonly registry: EmptyObject
  readonly configurations: EmptyObject
  readonly current: undefined
}

export const contextTransportsEmpty: ContextTransportsEmpty = Object.freeze({
  registry: emptyObject,
  configurations: emptyObject,
  current: undefined,
})

export interface ContextTransportsNonEmpty {
  readonly registry: ContextTransports_Registry
  readonly configurations: ContextTransports_Configurations
  readonly current: string
}

export interface ContextTransports {
  readonly registry: ContextTransports_Registry
  /**
   * `undefined` if registry is empty.
   */
  readonly current: undefined | string
  readonly configurations: ContextTransports_Configurations
}

// todo: should be readonly? otherwise comment about why.

export interface ContextTransports_Registry {
  [name: string]: Transport.Data
}

export interface ContextTransports_Configurations {
  [name: string]: Configurator.Configuration
}

export interface ContextFragment {
  readonly requestPipelineDefinition: RequestPipeline.BaseDefinition
  readonly transports: ContextTransports
}

export interface ContextFragmentTransportsEmpty extends ContextFragment {
  readonly requestPipelineDefinition: RequestPipeline.BaseDefinitionEmpty
  readonly transports: ContextTransportsEmpty
}

export const contextFragmentTransportsEmpty: ContextFragmentTransportsEmpty = Object.freeze({
  requestPipelineDefinition: requestPipelineBaseDefinition,
  transports: contextTransportsEmpty,
})
