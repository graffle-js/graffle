import type { Extension } from '../extension/$.js'
import type { Anyware } from '../lib/anyware/_namespace.js'
import type { Objekt, StringKeyof } from '../lib/prelude.js'
import {
  type RequestPipelineBaseDefinition,
  requestPipelineBaseDefinition,
  type RequestPipelineBaseInterceptor,
} from '../requestPipeline/RequestPipeline.js'
import type { Configurator } from './configurator.js'
import { Configurators } from './configurators/_namespace.js'
import { Schema } from './Schema/__.js'
import type { Transport } from './Transport.js'

export interface Context {
  configuration: {
    output: {
      configurator: Configurators.Output.OutputConfigurator
      current: Configurators.Output.OutputConfigurator['default']
    }
    check: {
      configurator: Configurators.Check.CheckConfigurator
      current: Configurators.Check.CheckConfigurator['default']
    }
    schema: {
      configurator: Configurators.Schema.SchemaConfigurator
      current: Configurators.Schema.SchemaConfigurator['default']
    }
  }
  requestPipelineDefinition: Anyware.PipelineDefinition
  requestPipelineInterceptors: RequestPipelineBaseInterceptor[]
  transports: ClientTransports
  scalars: Schema.Scalar.Registry
  extensions: Extension[]
  extensionsIndex: {
    [extensionName: string]: Extension
  }
  // Type Level Properties
  /**
   * Type level augmentations.
   *
   * @remarks Typically added by extensions. Added here upon use for optimized type-level reads later on.
   */
  // typeHookOnRequestResult: Extension.TypeHooks.OnRequestResult[]
  // typeHookOnRequestDocumentRootType: Extension.TypeHooks.OnRequestDocumentRootType[]
  typeHookRequestResultDataTypes: unknown
}

export interface ClientTransports {
  registry: ClientTransportsRegistry
  /**
   * `null` if registry is empty.
   */
  current: null | string
  configurations: ClientTransportsConfigurations
}

export interface ClientTransportsRegistry {
  [name: string]: Transport
}

export interface ClientTransportsConfigurations {
  [name: string]: Configurator.Configuration
}

export namespace ClientTransports {
  export namespace Errors {
    export type PreflightCheckNoTransportsRegistered =
      'Error: You cannot send requests yet. You must setup a transport.'

    export type PreflightCheckNoTransportSelected =
      'Error: You cannot send requests yet. You must select a transport to use.'

    export type PreflightCheckTransportNotReady<$TransportName extends string> =
      `Error: You cannot send requests yet. The selected transport "${$TransportName}" is not sufficiently configured.`
  }

  // dprint-ignore
  export type PreflightCheck<
    $Context,
    $SuccessValue = true,
  > =
    // @ts-expect-error context constraint missing to avoid TS compare depth limit
    $Context['checkPreflight'] extends false
      ? $SuccessValue
      // @ts-expect-error context constraint missing to avoid TS compare depth limit
      : PreflightCheck_<$Context['transports'], $SuccessValue>
  // dprint-ignore
  export type PreflightCheck_<
    $ClientTransports extends ClientTransports,
    $SuccessValue = true,
  > =
    $ClientTransports extends ClientTransports.States.Empty
      ? ClientTransports.Errors.PreflightCheckNoTransportsRegistered
      : $ClientTransports['current'] extends string
        ? $ClientTransports['current'] extends keyof $ClientTransports['configurations']
          ? $ClientTransports['current'] extends keyof $ClientTransports['registry']
            ? $ClientTransports['configurations'][$ClientTransports['current']] extends $ClientTransports['registry'][$ClientTransports['current']]['configurator']['normalized']
              ? $SuccessValue
              : ClientTransports.Errors.PreflightCheckTransportNotReady<$ClientTransports['current']>
            : never // Should never happen
          : never // Should never happen
        : ClientTransports.Errors.PreflightCheckNoTransportSelected

  // dprint-ignore
  export type GetNames<$ClientTransports extends ClientTransports> =
      Objekt.IsEmpty<$ClientTransports['registry']> extends true
        ? 'Error: Transport registry is empty. Please add a transport.'
        : StringKeyof<$ClientTransports['registry']>

  export namespace States {
    export interface Empty {
      registry: {}
      configurations: {}
      current: null
    }
    export const empty: Empty = {
      registry: {},
      configurations: {},
      current: null,
    }

    export interface NonEmpty {
      registry: ClientTransportsRegistry
      configurations: ClientTransportsConfigurations
      current: string
    }
  }
}

export namespace Context {
  export namespace States {
    export interface Empty extends Context {
      scalars: Schema.Scalar.Registry.Empty
      extensions: []
      extensionsIndex: {}
      transports: ClientTransports.States.Empty
      requestPipelineDefinition: RequestPipelineBaseDefinition
      // type-level properties
      // todo merge typehooks empty from extension type here to DRY
      typeHookOnRequestDocumentRootType: []
      typeHookOnRequestResult: []
      typeHookRequestResultDataTypes: never
    }

    export const empty: Empty = {
      configuration: {
        output: {
          configurator: Configurators.Output.configurator,
          current: Configurators.Output.configurator.default,
        },
        check: {
          configurator: Configurators.Check.configurator,
          current: Configurators.Check.configurator.default,
        },
        schema: {
          configurator: Configurators.Schema.configurator,
          current: Configurators.Schema.configurator.default,
        },
      },
      requestPipelineDefinition: requestPipelineBaseDefinition,
      requestPipelineInterceptors: [],
      transports: ClientTransports.States.empty,
      extensions: [],
      extensionsIndex: {},
      scalars: Schema.Scalar.Registry.empty,
      typeHookOnRequestDocumentRootType: null as any,
      typeHookOnRequestResult: null as any,
      typeHookRequestResultDataTypes: null as never,
    }
  }
  export namespace Updaters {
    // dprint-ignore
    export type AddTransportOptional<
      $ClientTransports extends ClientTransports,
      $Transport extends Transport | undefined,
    > =
      $Transport extends Transport
        ? {
            configurations:
              & Omit<$ClientTransports['configurations'], $Transport['name']>
              & {
                  [_ in $Transport['name']]: $Transport['configurator']['default']
                }
            current: $ClientTransports extends ClientTransports.States.Empty
              ? $Transport['name']
              : $ClientTransports['current']
            registry: $ClientTransports['registry'] & {
              [_ in $Transport['name']]: $Transport
            }
          }
        : $ClientTransports
  }
}
