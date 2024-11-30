import {
  type ConfigInit,
  type DefaultCheckPreflight,
  defaultCheckPreflight,
  type DefaultName,
  defaultName,
  type NormalizeConfigInit,
  normalizeConfigInit,
} from '../client/Configuration/ConfigInit.js'
import { type OutputConfig, type OutputConfigDefault, outputConfigDefault } from '../client/Configuration/Output.js'
import type { Extension } from '../extension/__.js'
import type { Anyware } from '../lib/anyware/__.js'
import type { ConfigManager } from '../lib/config-manager/__.js'
import type { Objekt, StringKeyof } from '../lib/prelude.js'
import {
  type RequestPipelineBaseDefinition,
  requestPipelineBaseDefinition,
} from '../requestPipeline/RequestPipeline.js'
import { Schema } from './Schema/__.js'
import type { SchemaDrivenDataMap } from './SchemaDrivenDataMap/SchemaDrivenDataMap.js'
import type { Transport } from './Transport.js'

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
    export type PreflightCheckNoTransportsRegistered =
      'Error: You cannot send requests yet. You must setup a transport.'

    export type PreflightCheckNoTransportSelected =
      'Error: You cannot send requests yet. You must select a transport to use.'

    export type PreflightCheckTransportNotReady<$TransportName extends string> =
      `Error: You cannot send requests yet. The selected transport "${$TransportName}" is not sufficiently configured.`
  }

  // dprint-ignore
  export type PreflightCheck<
    $Context extends Context,
    $SuccessValue = true,
  > =
    $Context['checkPreflight'] extends false
      ? $SuccessValue
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

export namespace Context {
  export namespace States {
    export interface Empty extends Context {
      name: DefaultName
      scalars: Schema.Scalar.Registry.Empty
      extensions: []
      transports: ClientTransports.States.Empty
      checkPreflight: DefaultCheckPreflight
      schemaMap: null
      input: {}
      requestPipelineDefinition: RequestPipelineBaseDefinition
      output: OutputConfigDefault
      // type-only properties
      typeHookOnRequestDocumentRootType: []
      typeHookOnRequestResult: []
    }

    export const contextEmpty: Empty = {
      name: defaultName,
      requestPipelineDefinition: requestPipelineBaseDefinition,
      transports: ClientTransports.States.empty,
      checkPreflight: defaultCheckPreflight,
      input: {},
      output: outputConfigDefault,
      schemaMap: null,
      extensions: [],
      scalars: Schema.Scalar.Registry.empty,
      // type-only properties
      // typeHookOnRequestDocumentRootType: [],
      // typeHookOnRequestResult: [],
    } as Empty
  }
  export namespace Updaters {
    export type AddConfigInit<
      $Context extends Context,
      $ConfigInit extends ConfigInit,
    > = ConfigManager.SetKeysOptional<
      $Context,
      NormalizeConfigInit<$ConfigInit>
    >

    export const addConfigInit = <
      $Context extends Context,
      $ConfigInit extends ConfigInit,
    >(context: $Context, configInit: $ConfigInit): AddConfigInit<$Context, $ConfigInit> => {
      const newConfig = normalizeConfigInit(configInit)
      return {
        ...context,
        ...newConfig,
      } as any
    }

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
          Anyware.PipelineDefinition.Updaters.AddOverload<
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
          configurations:
            & Omit<$Context['transports']['configurations'], $Transport['name']>
            & {
                [_ in $Transport['name']]: $Transport['configInit']
              }
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

export interface ContextValueLevel {
  name: string
  requestPipelineDefinition: Anyware.PipelineDefinition
  transports: ClientTransports
  /**
   * If enabled, this will cause request methods to be statically unavailable if
   * a transport is not correctly configured.
   *
   * @defaultValue `true`
   */
  checkPreflight?: boolean
  /**
   * The initial input that was given to derive the config.
   */
  input: ConfigInit
  output: OutputConfig
  schemaMap: SchemaDrivenDataMap | null
  extensions: Extension[]
  scalars: Schema.Scalar.Registry
}

export interface Context extends ContextValueLevel {
  /**
   * Type level augmentations.
   *
   * @remarks Typically added by extensions. Added here upon use for optimized type-level reads later on.
   */
  typeHookOnRequestResult: Extension.TypeHooks.OnRequestResult[]
  typeHookOnRequestDocumentRootType: Extension.TypeHooks.OnRequestDocumentRootType[]
}
