import type { Extension } from '../extension/extension.js'
import type { Anyware } from '../lib/anyware/__.js'
import type { ConfigManager } from '../lib/config-manager/__.js'
import type { Objekt, StringKeyof } from '../lib/prelude.js'
import type { RequestPipelineBaseDefinition } from '../requestPipeline/RequestPipeline.js'
import type { Schema } from '../types/Schema/__.js'
import type { SchemaDrivenDataMap } from '../types/SchemaDrivenDataMap/SchemaDrivenDataMap.js'
import type { Transport } from '../types/Transport.js'
import type { Config } from './Settings/Config.js'
import type { InputStatic } from './Settings/Input.js'
import { inputToConfig } from './Settings/InputToConfig.js'

export namespace Context {
  export namespace Updaters {
    // dprint-ignore
    export type AddTransportOptional<
      $Context extends Context,
      $Transport extends Transport | undefined,
    > =
      $Transport extends Transport
        ? AddTransport<$Context, $Transport>
        : $Context

    // dprint-ignore
    export type AddTransport<
      $Context extends Context,
      $Transport extends Transport,
    > =
      AddTransportToRegistry<
        ConfigManager.SetKey<
          $Context,
          'requestPipelineDefinition',
          Anyware.PipelineDef.Updaters.AddOverload<
            $Context['requestPipelineDefinition'],
            $Transport['requestPipelineOverload']
          >
        >,
        $Transport
      >

    // dprint-ignore
    type AddTransportToRegistry<$Context extends Context, $Transport extends Transport> =
      ConfigManager.SetKey<
        $Context,
        'transports',
        {
          configurations: $Context['transports'] extends ClientTransports.States.Empty
            ? {
                [_ in $Transport['name']]: $Transport['configInit']
              }
            : $Context['transports']['configurations']
          current: $Context['transports'] extends ClientTransports.States.Empty
            ? $Transport['name']
            : $Context['transports']['current']
          registry: $Context['transports']['registry'] & {
            [_ in $Transport['name']]: $Transport
          }
        }
      >
  }
}

export interface Context {
  name: string
  requestPipelineDefinition: Anyware.PipelineDef
  transports: ClientTransports
  /**
   * The initial input that was given to derive the config.
   */
  input: InputStatic
  config: Config
  schemaMap: SchemaDrivenDataMap | null

  // retry: Anyware.Extension2<RequestPipeline.Core, { retrying: true }> | null
  extensions: Extension[]
  scalars: Schema.Scalar.Registry
  /**
   * Type level augmentations.
   *
   * @remarks Typically added by extensions. Added here upon use for optimized type-level reads later on.
   */
  typeHooks: {
    onRequestResult: Extension.Hooks.OnRequestResult[]
    onRequestDocumentRootType: Extension.Hooks.OnRequestDocumentRootType[]
  }
}

export interface ContextEmpty extends Context {
  scalars: Schema.Scalar.Registry.Empty
  typeHooks: TypeHooksEmpty
  extensions: []
  transports: ClientTransports.States.Empty
  schemaMap: null
  input: {}
  requestPipelineDefinition: RequestPipelineBaseDefinition
}

export type TypeHooksEmpty = {
  onRequestDocumentRootType: []
  onRequestResult: []
}

export const createContext = (contextWithoutConfig: ContextWithoutConfig): Context => {
  let config: Config | null

  return {
    ...contextWithoutConfig,
    get config(): Config {
      const configFound = config ?? inputToConfig(contextWithoutConfig.input)
      return configFound as any
    },
  } as Context
}

export type ContextWithoutConfig = Omit<Context, 'config' | 'typeHooks'>

export interface ClientTransports {
  registry: ClientTransportsRegistry
  /**
   * `null` if registry is empty.
   */
  current: null | string
  configurations: ClientTransportsConfigurations
}

interface ClientTransportsRegistry {
  [name: string]: Transport
}

interface ClientTransportsConfigurations {
  [name: string]: object
}

export namespace ClientTransports {
  export namespace Errors {
    export type NoTransportsRegistered = 'Error: Transport registry is empty. Please add a transport.'

    export type PreflightCheckNoTransportsRegistered =
      'Error: You cannot send requests yet. You must setup a transport.'

    export type PreflightCheckNoTransportSelected =
      'Error: You cannot send requests yet. You must select a transport to use.'

    export type PreflightCheckTransportNotReady<$TransportName extends string> =
      `Error: You cannot send requests yet. The selected transport "${$TransportName}" is not sufficiently configured.`
  }
  // dprint-ignore
  export type PreflightCheck<$ClientTransports extends ClientTransports, $SuccessValue = true> =
    $ClientTransports extends ClientTransports.States.Empty
      ? ClientTransports.Errors.PreflightCheckNoTransportsRegistered
      : $ClientTransports['current'] extends string
        ? $ClientTransports['current'] extends keyof $ClientTransports['configurations']
          ? $ClientTransports['current'] extends keyof $ClientTransports['registry']
            ? $ClientTransports['configurations'][$ClientTransports['current']] extends $ClientTransports['registry'][$ClientTransports['current']]['config']
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
