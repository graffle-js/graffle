import type { IsNever } from 'type-fest'
import type { Client } from '../client/client.js'
import type { Anyware } from '../lib/anyware/__.js'
import type { Builder } from '../lib/builder/__.js'
import { _, type AssertExtendsString } from '../lib/prelude.js'
import type { Fn } from '../lib/type-function/TypeFunction.js'
import type { RequestPipelineBase } from '../requestPipeline/RequestPipeline.js'
import type { Transport } from '../types/Transport.js'
import type { TypeHooks } from './TypeHooks.js'
import type { TypeHooksBuilderCallback } from './TypeHooks.js'

export * as TypeHooks from './TypeHooks.js'

export interface EmptyTypeHooks {
  onRequestResult: undefined
  onRequestDocumentRootType: undefined
}

export interface Extension<
  $Name extends string = string,
  $Config extends object | undefined = object | undefined,
  $BuilderExtension extends BuilderExtension | undefined = BuilderExtension | undefined,
  $TypeHooks extends TypeHooks = TypeHooks,
  $Transport extends Transport | undefined = Transport | undefined,
> extends Fn {
  /**
   * The name of the extension
   */
  name: $Name
  config: $Config
  /**
   * Anyware executed on every request.
   */
  onRequest?: Anyware.Interceptor.InferFromPipeline<RequestPipelineBase>
  /**
   * Manipulate the builder.
   * You can extend the builder with new properties at both runtime AND buildtime (types, TypeScript).
   * You can also manipulate existing properties.
   *
   * ### Runtime
   *
   * Hook into "get" events on the builder proxy. Useful for adding new methods or manipulating existing ones.
   *
   * Invoked when a non-record-like-object is reached. For example these:
   *
   * - graffle.use (property: "use")
   * - graffle.query.foo (property: "foo", path: ["query"])
   *
   * Return nothing/`undefined` to passthrough.
   *
   * Anything else returned becomes the result of the proxy "get" event.
   *
   * When there are multiple extensions with "onBuilderGet" handlers they form a execution stack starting from the first registered extension.
   * The first handler to return something short circuits the rest.
   *
   * ### Types
   *
   * There is a type parameter you can pass in which will statically extend the builder.
   */
  builder: $BuilderExtension
  transport: $Transport
  /**
   * TODO
   */
  typeHooks: $TypeHooks
}

// export const createBuilderExtension = <$BuilderExtension extends Builder.Extension | undefined = undefined>(
//   implementation: BuilderExtensionImplementation,
// ): BuilderExtension<$BuilderExtension> => {
//   return {
//     implementation,
//   } as BuilderExtension<$BuilderExtension>
// }

export type BuilderExtension<$BuilderExtension extends Builder.Extension | undefined = Builder.Extension | undefined> =
  {
    type: $BuilderExtension
    implementation: BuilderExtensionImplementation
  }

export type BuilderExtensionImplementation = (
  input: {
    path: string[]
    property: string
    client: Client
  },
) => unknown

export type ExtensionInputParameters =
  | ExtensionInputParametersNone
  | ExtensionInputParametersOptional
  | ExtensionInputParametersRequired
export type ExtensionInputParametersNone = []
export type ExtensionInputParametersOptional = [input?: object]
export type ExtensionInputParametersRequired = [input: object]

export interface ExtensionDefinition {
  name: string
  builder?: BuilderExtension
  onRequest?: Anyware.Interceptor.InferFromPipeline<RequestPipelineBase>
  // typeHooks?: () => TypeHooks
  transport?: (
    OverloadBuilder: { create: Transport.Builder.Create },
  ) => Anyware.Overload.Builder
}

export const createExtensionDefinition = <
  // $Definition extends ExtensionDefinition,
  $Name extends string,
  $TransportCallbackResult extends undefined | Anyware.Overload.Builder = undefined,
>(definition: {
  name: $Name
  // builder?: $BuilderExtension
  // onRequest?: Anyware.Interceptor.InferFromPipeline<RequestPipelineBase>
  // typeHooks?: () => $TypeHooks
  transport?(
    OverloadBuilder: { create: Transport.Builder.Create },
  ): $TransportCallbackResult
}): Extension<
  $Name,
  object,
  undefined,
  EmptyTypeHooks,
  $TransportCallbackResult extends Anyware.Overload.Builder ? {
      // todo fixme
      // Names of transports can only be strings but its wider for anyware overloads
      name: AssertExtendsString<$TransportCallbackResult['type']['discriminant'][1]>
      config: $TransportCallbackResult['type']['input']
      configInit: $TransportCallbackResult['type']['inputInit'] extends object
        ? $TransportCallbackResult['type']['inputInit']
        : {}
      requestPipelineOverload: $TransportCallbackResult['type']
    }
    : undefined
> => {
  return definition as any
}

export const createExtension = <
  $Name extends string,
  $BuilderExtension extends BuilderExtension = BuilderExtension,
  $TypeHooks extends TypeHooks = TypeHooks,
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
      builder?: $BuilderExtension
      onRequest?: Anyware.Interceptor.InferFromPipeline<RequestPipelineBase>
      typeHooks?: TypeHooksBuilderCallback<$TypeHooks> | $TypeHooks
      transport?: (
        OverloadBuilder: { create: Transport.Builder.Create },
      ) => $TransportCallbackResult
    }
  },
): ExtensionConstructor<
  $ConfigInputParameters,
  $Config,
  $Name,
  $BuilderExtension,
  TypeHooks extends $TypeHooks ? EmptyTypeHooks : $TypeHooks,
  $Custom,
  $TransportCallbackResult extends Anyware.Overload.Builder ? {
      // todo fixme
      // Names of transports can only be strings but its wider for anyware overloads
      name: AssertExtendsString<$TransportCallbackResult['type']['discriminant'][1]>
      config: $TransportCallbackResult['type']['input']
      configInit: $TransportCallbackResult['type']['inputInit'] extends object
        ? $TransportCallbackResult['type']['inputInit']
        : {}
      requestPipelineOverload: $TransportCallbackResult['type']
    }
    : undefined
> => {
  const extensionConstructor = (input?: object) => {
    const config: $Config = ((definitionInput.normalizeConfig as any)?.(input) ?? {}) as any // eslint-disable-line
    return definitionInput.create({ config }) as any
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
  $TypeHooks extends TypeHooks = TypeHooks,
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
      typeHooks: TypeHooks extends $TypeHooks ? EmptyTypeHooks : $TypeHooks
      transport: $Transport
    }
  }
  & $Custom

// type x = Parameters<ExtensionConstructor>

export type InferExtensionFromConstructor<$ExtensionConstructor extends ExtensionConstructor> = Extension<
  $ExtensionConstructor['info']['name'],
  $ExtensionConstructor['info']['config'],
  $ExtensionConstructor['info']['builder'],
  $ExtensionConstructor['info']['typeHooks']
>

// When no normalize config input prop provided AT ALL then it falls back to the constraint
type WasNotDefined<T extends ExtensionInputParameters> = IsNever<keyof Exclude<T[0], undefined>>
