import type { IsNever } from 'type-fest'
import { Anyware } from '../lib/anyware/__.js'
import { _, type AssertExtendsString } from '../lib/prelude.js'
import type { RequestPipelineBaseInterceptor } from '../requestPipeline/RequestPipeline.js'
import type { Transport } from '../types/Transport.js'
import type { Extension } from './__.js'
import { BuilderExtension } from './builder.js'
import type { TypeHooks, TypeHooksEmpty } from './TypeHooks.js'
import type { TypeHooksBuilderCallback } from './TypeHooks.js'

export * as TypeHooks from './TypeHooks.js'

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

export const create = <
  $Name extends string,
  $BuilderExtension extends BuilderExtension | undefined = BuilderExtension | undefined,
  $TypeHooks extends TypeHooks = TypeHooksEmpty,
  $ConfigInputParameters extends ExtensionInputParameters = ExtensionInputParameters,
  $Config extends object = object,
  $Custom extends object = object,
  $TransportCallbackResult extends undefined | Anyware.Overload.Builder = undefined,
>(
  definitionInput: {
    name: $Name
    normalizeConfig?: (...args: $ConfigInputParameters) => $Config
    custom?: $Custom
    create: (params: { config: $Config }) => {
      builder?: BuilderExtension.CreatorCallback<$BuilderExtension> // | $BuilderExtension  // todo
      onRequest?: RequestPipelineBaseInterceptor
      typeHooks?: TypeHooksBuilderCallback<$TypeHooks> | $TypeHooks
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
      // todo fixme
      // Names of transports can only be strings but its wider for anyware overloads
      name: AssertExtendsString<$TransportCallbackResult['type']['discriminant'][1]>
      config: $TransportCallbackResult['type']['input']
      configInit: $TransportCallbackResult['type']['inputInit'] extends object
        ? $TransportCallbackResult['type']['inputInit']
        : {}
      configDefaults: $TransportCallbackResult['type']['inputDefaults']
      requestPipelineOverload: $TransportCallbackResult['type']
    }
    : undefined
> => {
  const extensionConstructor = (input?: object) => {
    const config: $Config = ((definitionInput.normalizeConfig as any)?.(input) ?? {}) as any // eslint-disable-line
    const extensionBuilder = definitionInput.create({ config })
    const builder = extensionBuilder.builder?.(BuilderExtension.create)
    const overload = extensionBuilder.transport?.((name) =>
      Anyware.Overload.create({ discriminant: [`transportType`, name] })
      // eslint-disable-next-line
    )?.type
    const transport: Transport | undefined = overload
      ? {
        name: overload.discriminant[1] as string,
        config: overload.input,
        configInit: undefined as any,
        configDefaults: overload.inputDefaults,
        requestPipelineOverload: overload,
      }
      : undefined
    const extension: Extension = {
      name: definitionInput.name,
      config,
      onRequest: extensionBuilder.onRequest,
      builder,
      transport,
      // todo: remove this from runtime, its JUST for types.
      typeHooks: {
        onRequestDocumentRootType: [],
        onRequestResult: [],
      },
    }
    return extension
  }
  extensionConstructor.info = {
    name: definitionInput.name,
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
