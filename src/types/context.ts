import { type ConfigInit, type ConfigInitOutputEnvelopeLonghand } from '../client/Configuration/ConfigInit.js'
import { type OutputConfig, type OutputConfigDefault, outputConfigDefault } from '../client/Configuration/Output.js'
import type { Extension } from '../extension/__.js'
import type { Anyware } from '../lib/anyware/_namespace.js'
import type { Objekt, StringKeyof } from '../lib/prelude.js'
import {
  type RequestPipelineBaseDefinition,
  requestPipelineBaseDefinition,
} from '../requestPipeline/RequestPipeline.js'
import { GlobalRegistry } from './GlobalRegistry/GlobalRegistry.js'
import { Schema } from './Schema/__.js'
import type { SchemaDrivenDataMap } from './SchemaDrivenDataMap/SchemaDrivenDataMap.js'
import type { Transport } from './Transport.js'

export interface Context extends ContextTypeLevel, ContextValueLevel {}

export interface ContextTypeLevel {
  /**
   * Type level augmentations.
   *
   * @remarks Typically added by extensions. Added here upon use for optimized type-level reads later on.
   */
  typeHookOnRequestResult: Extension.TypeHooks.OnRequestResult[]
  typeHookOnRequestDocumentRootType: Extension.TypeHooks.OnRequestDocumentRootType[]
  typeHookRequestResultDataTypes: unknown
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
  [name: string]: ClientTransportsConfiguration
}

export type ClientTransportsConfiguration = object

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
            ? $ClientTransports['configurations'][$ClientTransports['current']] extends $ClientTransports['registry'][$ClientTransports['current']]['configuration']
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

export type DefaultCheckPreflight = true

export const defaultCheckPreflight: DefaultCheckPreflight = true

export type DefaultName = GlobalRegistry.DefaultClientName

export const defaultName = GlobalRegistry.defaultClientName

export namespace Context {
  export const updateContextConfigInit = (
    context: Context,
    configInit: ConfigInit,
  ): Context => {
    const outputEnvelopeLonghand: ConfigInitOutputEnvelopeLonghand | undefined =
      typeof configInit.output?.envelope === `object`
        ? { enabled: true, ...configInit.output.envelope }
        : typeof configInit.output?.envelope === `boolean`
        ? { enabled: configInit.output.envelope }
        : undefined

    const newConfig = {
      name: configInit.name ?? context?.name ?? defaultName,
      schemaMap: configInit.schemaMap ?? context.schemaMap,
      output: {
        defaults: {
          errorChannel: configInit.output?.defaults?.errorChannel ?? context.output.defaults.errorChannel,
        },
        envelope: {
          enabled: outputEnvelopeLonghand?.enabled ?? context.output.envelope.enabled,
          errors: {
            execution: outputEnvelopeLonghand?.errors?.execution ?? context.output.envelope.errors.execution,
            other: outputEnvelopeLonghand?.errors?.other ?? context.output.envelope.errors.other,
            // @ts-expect-error
            schema: outputEnvelopeLonghand?.errors?.schema ?? context.output.envelope.errors.schema,
          },
        },
        errors: {
          execution: configInit.output?.errors?.execution ?? context.output.errors.execution,
          other: configInit.output?.errors?.other ?? context.output.errors.other,
          // @ts-expect-error conditional type
          schema: configInit.output?.errors?.schema ?? context.output.errors.schema,
        },
      },
    }

    return Context.withTypeLevel({
      ...context,
      ...newConfig,
    })
  }
  export const withTypeLevel = (contextValueLevel: ContextValueLevel): Context => contextValueLevel as any

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
      // type-level properties
      // todo merge typehooks empty from extension type here to DRY
      typeHookOnRequestDocumentRootType: []
      typeHookOnRequestResult: []
      typeHookRequestResultDataTypes: never
    }

    export const empty: Empty = {
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
                  [_ in $Transport['name']]: $Transport['configurationDefaults']
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
