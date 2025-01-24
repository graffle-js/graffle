import type { IsNever } from 'type-fest'
import type { ExtensionChainable } from '../client/client.js'
import type { Context } from '../entrypoints/utilities-for-generated.js'
import { Anyware } from '../lib/anyware/_namespace.js'
import { type AssertExtendsString } from '../lib/prelude.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import type { RequestPipelineBaseInterceptor } from '../requestPipeline/RequestPipeline.js'
import type { ConfigurationResolver } from '../types/ConfigurationResolver.js'
import { Transport } from '../types/Transport.js'
import type { Extension } from './__.js'
import { BuilderExtension } from './builder.js'
import { type TypeHooks, type TypeHooksBuilder, typeHooksBuilder, type TypeHooksEmpty } from './TypeHooks.js'

export * from './context.js'

export * as TypeHooks from './TypeHooks.js'

export namespace States {
  export type WithBuilder = Extension<string, object, BuilderExtension, any, any>
}

export type ExtensionInputParameters =
  | ExtensionInputParametersNone
  | ExtensionInputParametersOptional
  | ExtensionInputParametersRequired
export type ExtensionInputParametersNone = []
export type ExtensionInputParametersOptional = [input?: object]
export type ExtensionInputParametersRequired = [input: object]

export interface ExtensionDefinition {
  name: string
  builder?: BuilderExtension // | BuilderExtension.CreatorCallback
  onRequest?: RequestPipelineBaseInterceptor
  // typeHooks?: () => TypeHooks
  transport?: (
    OverloadBuilder: { create: Transport.Builder.Create },
  ) => Anyware.Overload.Builder
}

// todo: rename to "define"
export const create = <
  $Name extends string,
  $BuilderExtension extends BuilderExtension | undefined = BuilderExtension | undefined,
  $TypeHooks extends TypeHooks = TypeHooksEmpty,
  $ConfigInputParameters extends ExtensionInputParameters = ExtensionInputParameters,
  $Config extends object = object,
  $Custom extends object = object,
  $TransportCallbackResult extends undefined | Anyware.Overload.Builder = undefined,
  $ConfigurationDefaults extends object = {},
>(
  definition: {
    name: $Name
    configurationDefaults?: $ConfigurationDefaults
    configurationResolver?: (current: object, ...args: $ConfigInputParameters) => $Config
    custom?: $Custom
    create: (
      parameters: {
        config: $Config & $ConfigurationDefaults
        builder: BuilderExtension.CreateCallback
        typeHooks: TypeHooksBuilder
      },
    ) => {
      builder?: $BuilderExtension
      typeHooks?: TypeHooksBuilder<$TypeHooks>
      onRequest?: RequestPipelineBaseInterceptor
      transport?: (
        OverloadBuilder: Transport.Builder.Create,
      ) => $TransportCallbackResult
    }
  },
): ExtensionConstructor<
  $ConfigInputParameters,
  $Config,
  $Name,
  $BuilderExtension,
  $TypeHooks,
  $Custom,
  $TransportCallbackResult extends Anyware.Overload.Builder ? {
      configurationResolver: ConfigurationResolver
      // todo fixme
      // Names of transports can only be strings but its wider for anyware overloads
      name: AssertExtendsString<$TransportCallbackResult['type']['discriminant'][1]>
      // configAfterCreate: {} // todo
      configurationDefaults: {} // todo: $TransportCallbackResult['type']['inputDefaults']
      requestPipelineOverload: $TransportCallbackResult['type']
      // types
      configuration: $TransportCallbackResult['type']['input']
      configurationInit: $TransportCallbackResult['type']['inputInit'] extends object
        ? $TransportCallbackResult['type']['inputInit']
        : {}
    }
    : undefined
> => {
  const extensionConstructor = (newConfigurationInit?: object) => {
    // todo: "ConfigurationResolver" is an extension-scope concept, but it is being used in this constructor
    // as if transport-scope. See the the transport variable below for example.
    // It is a hack that will lead to confusion, bugs, etc.
    const configurationResolver = definition.configurationResolver as undefined | ConfigurationResolver
      ?? Transport.defaultConfigurationResolver

    const currentConfigurationPartial = definition.configurationDefaults ?? {}
    const config = configurationResolver(currentConfigurationPartial, newConfigurationInit) as
      & $Config
      & $ConfigurationDefaults
    const extensionBuilder = definition.create({
      config,
      builder: BuilderExtension.createCallback,
      typeHooks: typeHooksBuilder,
    })
    const builder = extensionBuilder.builder
    const overload = extensionBuilder.transport?.((name) =>
      Anyware.Overload.create({ discriminant: [`transportType`, name] })
    )?.type
    const transport: Transport | undefined = overload
      ? {
        name: overload.discriminant[1] as string,
        configuration: overload.input,
        configurationDefaults: overload.inputDefaults ?? {},
        requestPipelineOverload: overload,
        configurationResolver,
        // configAfterCreate: undefined as any,
        configurationInit: undefined as any,
      }
      : undefined
    const extension: Extension = {
      name: definition.name,
      config,
      onRequest: extensionBuilder.onRequest,
      builder,
      transport,
      // todo: remove this from runtime, its JUST for types.
      typeHooks: {
        requestResultDataTypes: null,
        onRequestDocumentRootType: [],
        onRequestResult: [],
      },
    }
    return extension
  }
  extensionConstructor.info = {
    name: definition.name,
  }
  return extensionConstructor as any
}

// type IsOptionalParameters<T extends ExtensionInputParameters> = [] extends T ? true : false

export type ExtensionConstructor<
  $ConfigInputParameters extends ExtensionInputParameters = ExtensionInputParameters,
  $Config extends object = object,
  $Name extends string = string,
  $BuilderExtension extends BuilderExtension | undefined = BuilderExtension | undefined,
  $TypeHooks extends TypeHooks = TypeHooksEmpty,
  $Custom extends object = object,
  $Transport extends undefined | Transport = undefined,
> =
  & {
    (
      ...args:
        // ExtensionInputParameters extends $ConfigInputParameters ? [] : $ConfigInputParameters
        WasNotDefined<$ConfigInputParameters> extends true ? [] : $ConfigInputParameters
    ): Extension<$Name, $Config, $BuilderExtension, $TypeHooks, $Transport>
    info: {
      name: $Name
      configInputParameters: $ConfigInputParameters
      config: $Config
      builder: $BuilderExtension
      typeHooks: $TypeHooks
      transport: $Transport
    }
  }
  & $Custom

export type InferExtensionFromConstructor<$ExtensionConstructor extends ExtensionConstructor> = Extension<
  $ExtensionConstructor['info']['name'],
  $ExtensionConstructor['info']['config'],
  $ExtensionConstructor['info']['builder'],
  $ExtensionConstructor['info']['typeHooks']
>

// When no normalize config input prop provided AT ALL then it falls back to the constraint
type WasNotDefined<T extends ExtensionInputParameters> = IsNever<keyof Exclude<T[0], undefined>>

// dprint-ignore
export type ApplyAndMergeBuilderExtensions<$Extensions extends Extension[], $Context extends Context> =
  $Extensions extends [infer $ExtensionFirst extends Extension, ...infer $ExtensionRest extends Extension[]]
    ?
      & (
          $ExtensionFirst['builder'] extends BuilderExtension<ExtensionChainable>
            ?
              TypeFunction.Call<
                $ExtensionFirst['builder']['type'],
                [$Context]
              >
            : {}
        )
      & ApplyAndMergeBuilderExtensions<$ExtensionRest, $Context>
    : {}
