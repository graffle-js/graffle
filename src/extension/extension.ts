import type { IsNever } from 'type-fest'
import type { Client } from '../client/client.js'
import type { Context } from '../client/context.js'
import type { GraffleExecutionResultEnvelope } from '../client/handleOutput.js'
import type { Select } from '../documentBuilder/Select/__.js'
import type { Anyware } from '../lib/anyware/__.js'
import type { Builder } from '../lib/builder/__.js'
import type { AssertExtends } from '../lib/prelude.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import type { Fn } from '../lib/type-function/TypeFunction.js'
import type { RequestPipeline } from '../requestPipeline/__.js'
import type { GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'

export interface TypeHooks {
  /**
   * Manipulate the execution result of a request.
   *
   * Applies to all requests.
   */
  onRequestResult?: Extension.Hooks.OnRequestResult
  /**
   * Manipulate the root type in a document in a request.
   *
   * Applies to all requests with typed documents which is all of them except `gql` method when passed a `string`.
   *
   * The root type received is the one that the request's operation name pointed to.
   *
   * Note: There is no way to manipulate the whole document.
   */
  onRequestDocumentRootType?: Extension.Hooks.OnRequestDocumentRootType
}

export type RunTypeHookOnRequestResult<
  $Context extends Context,
  $Params extends Extension.Hooks.OnRequestResult.Params,
> = AssertExtends<
  TypeFunction.CallPipeline<$Context['typeHooks']['onRequestResult'], $Params>,
  Extension.Hooks.OnRequestResult.Params
>

export interface EmptyTypeHooks {
  onRequestResult: undefined
  onRequestDocumentRootType: undefined
}

export interface Extension<
  $Name extends string = string,
  $Config extends object | undefined = object | undefined,
  $BuilderExtension extends BuilderExtension | undefined = BuilderExtension | undefined,
  $TypeHooks extends TypeHooks = TypeHooks,
> extends Fn {
  /**
   * The name of the extension
   */
  name: $Name
  config: $Config
  /**
   * Anyware executed on every request.
   */
  onRequest?: Anyware.Extension2<RequestPipeline.RequestPipeline>
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
  /**
   * TODO
   */
  typeHooks: $TypeHooks
}

export namespace Extension {
  export namespace Hooks {
    export interface OnRequestDocumentRootType extends Fn {}
    export namespace OnRequestDocumentRootType {
      export interface Params {
        selectionRootType: Select.SelectionSet.RootType
      }
    }
    export interface OnRequestResult extends Fn {}
    export namespace OnRequestResult {
      export interface Params<$Extensions extends GlobalRegistry.Extensions = GlobalRegistry.Extensions> {
        result: GraffleExecutionResultEnvelope
        registeredSchema: GlobalRegistry.Client<$Extensions>
      }
    }
  }
}

export const createTypeHooks = <$TypeHooks extends TypeHooks = TypeHooks>(): $TypeHooks => {
  return undefined as any as $TypeHooks
}

export const createBuilderExtension = <$BuilderExtension extends Builder.Extension | undefined = undefined>(
  implementation: BuilderExtensionImplementation,
): BuilderExtension<$BuilderExtension> => {
  return {
    implementation,
  } as BuilderExtension<$BuilderExtension>
}

export type BuilderExtension<$BuilderExtension extends Builder.Extension | undefined = Builder.Extension | undefined> =
  {
    type: $BuilderExtension
    implementation: BuilderExtensionImplementation
  }

export type BuilderExtensionImplementation = (
  input: {
    path: string[]
    property: string
    client: Client<Context>
  },
) => unknown

export type ExtensionInputParameters =
  | ExtensionInputParametersNone
  | ExtensionInputParametersOptional
  | ExtensionInputParametersRequired
export type ExtensionInputParametersNone = []
export type ExtensionInputParametersOptional = [input?: object]
export type ExtensionInputParametersRequired = [input: object]

export const createExtension = <
  $Name extends string,
  $BuilderExtension extends BuilderExtension = BuilderExtension,
  $TypeHooks extends TypeHooks = TypeHooks,
  $ConfigInputParameters extends ExtensionInputParameters = ExtensionInputParameters,
  $Config extends object = object,
  $Custom extends object = object,
> // $x extends undefined | ((...args: $ConfigInputParameters) => $Config) = undefined,
// $Input extends {
//   name: $Name
//   normalizeConfig?: (...args: $ConfigInputParameters) => $Config
//   custom?: $Custom
//   create: (params: { config: $Config }) => {
//     builder?: $BuilderExtension
//     onRequest?: Anyware.Extension2<RequestPipeline.Core>
//     typeHooks?: () => $TypeHooks
//   }
// } = any
(
  // definitionInput: $Input,
  definitionInput: {
    name: $Name
    normalizeConfig?: (...args: $ConfigInputParameters) => $Config
    // normalizeConfig?: $x
    custom?: $Custom
    create: (params: { config: $Config }) => {
      builder?: $BuilderExtension
      onRequest?: Anyware.Extension2<RequestPipeline.RequestPipeline>
      typeHooks?: () => $TypeHooks
    }
  },
): ExtensionConstructor<
  $ConfigInputParameters,
  $Config,
  $Name,
  $BuilderExtension,
  TypeHooks extends $TypeHooks ? EmptyTypeHooks : $TypeHooks,
  $Custom
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
> =
  & {
    (
      ...args:
        // ExtensionInputParameters extends $ConfigInputParameters ? [] : $ConfigInputParameters
        WasNotDefined<$ConfigInputParameters> extends true ? [] : $ConfigInputParameters
    ): Extension<$Name, $Config, $BuilderExtension, $TypeHooks>
    info: {
      name: $Name
      configInputParameters: $ConfigInputParameters
      config: $Config
      builder: $BuilderExtension
      typeHooks: TypeHooks extends $TypeHooks ? EmptyTypeHooks : $TypeHooks
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
