import type { Select } from '../documentBuilder/Select/__.js'
import type { Client } from '../layers/6_client/client.js'
import type { Context } from '../layers/6_client/context.js'
import type { GraffleExecutionResultEnvelope } from '../layers/6_client/handleOutput.js'
import type { Anyware } from '../lib/anyware/__.js'
import type { Builder } from '../lib/chain/__.js'
import type { AssertExtends, ToParameters } from '../lib/prelude.js'
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
  onRequest?: Anyware.Extension2<RequestPipeline.Core>
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

export const createExtension = <
  $Name extends string,
  $BuilderExtension extends BuilderExtension | undefined = undefined,
  $TypeHooks extends TypeHooks = TypeHooks,
  $ConfigInput extends object = object,
  $Config extends object = object,
  $Custom extends object = object,
>(
  extensionInput: {
    name: $Name
    normalizeConfig?: (input?: $ConfigInput) => $Config
    custom?: $Custom
    create: (params: { config: $Config }) => {
      builder?: $BuilderExtension
      onRequest?: Anyware.Extension2<RequestPipeline.Core>
      typeHooks?: () => $TypeHooks
    }
  },
): ExtensionConstructor<
  $ConfigInput,
  $Config,
  $Name,
  $BuilderExtension,
  $TypeHooks,
  $Custom
> => {
  const extensionConstructor = (input: any) => {
    const config = (extensionInput.normalizeConfig?.(input) ?? {}) as any
    return extensionInput.create({ config }) as any
  }
  return extensionConstructor as any
}

export type ExtensionConstructor<
  $ConfigInput extends undefined | object,
  $Config extends object,
  $Name extends string,
  $BuilderExtension extends BuilderExtension | undefined = undefined,
  $TypeHooks extends TypeHooks = TypeHooks,
  $Custom extends object = object,
> =
  & ((...args: ToParameters<$ConfigInput>) => Extension<$Name, $Config, $BuilderExtension, $TypeHooks>)
  & $Custom
