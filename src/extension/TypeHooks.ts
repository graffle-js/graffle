import type { GraffleExecutionResultEnvelope } from '../client/handleOutput.js'
import type { DocumentBuilder } from '../documentBuilder/__.js'
import type { AssertExtends } from '../lib/prelude.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import type { Context } from '../types/context.js'
import type { GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'

export interface TypeHooks {
  /**
   * Manipulate the execution result of a request.
   *
   * Applies to all requests.
   */
  onRequestResult: OnRequestResult[]
  /**
   * Manipulate the root type in a document in a request.
   *
   * Applies to all requests with typed documents which is all of them except `gql` method when passed a `string`.
   *
   * The root type received is the one that the request's operation name pointed to.
   *
   * Note: There is no way to manipulate the whole document.
   */
  onRequestDocumentRootType: OnRequestDocumentRootType[]
  /**
   * Type(s) that show up in request result data.
   *
   * The purpose of this type is to stop Graffle from
   * "simplifying" (aka. "expanding") whatever type(s)
   * is/are here.
   *
   * So for example, if this type were `Date` and type `Date`
   * appeared in the request result data, then it would be left-as is.
   *
   * Multiple types can be specified with a union, for example: `IntrospectionQuery | Date`.
   */
  requestResultDataTypes: unknown
}

export interface TypeHooksEmpty extends TypeHooks {
  onRequestResult: []
  onRequestDocumentRootType: []
  requestResultDataTypes: never
}

export namespace States {
  export type Empty = TypeHooksEmpty
}

export interface TypeHooksBuilderCallback<$TypeHooks extends TypeHooks> {
  (builder: TypeHooksBuilder): TypeHooksBuilder<$TypeHooks>
}

export interface TypeHooksBuilder<$TypeHooks extends TypeHooks = TypeHooksEmpty> {
  type: $TypeHooks
  requestResultDataTypes: <$RequestResultDataTypes>() => TypeHooksBuilder<
    {
      requestResultDataTypes: $TypeHooks['requestResultDataTypes'] | $RequestResultDataTypes
      onRequestResult: $TypeHooks['onRequestResult']
      onRequestDocumentRootType: $TypeHooks['onRequestDocumentRootType']
    }
  >
  onRequestResult: <$OnRequestResult extends OnRequestResult>() => TypeHooksBuilder<
    {
      requestResultDataTypes: $TypeHooks['requestResultDataTypes']
      onRequestResult: [...$TypeHooks['onRequestResult'], $OnRequestResult]
      onRequestDocumentRootType: $TypeHooks['onRequestDocumentRootType']
    }
  >
  onRequestDocumentRootType: <$OnRequestDocumentRootType extends OnRequestDocumentRootType>() => TypeHooksBuilder<
    {
      requestResultDataTypes: $TypeHooks['requestResultDataTypes']
      onRequestResult: $TypeHooks['onRequestResult']
      onRequestDocumentRootType: [...$TypeHooks['onRequestDocumentRootType'], $OnRequestDocumentRootType]
    }
  >
}

export interface OnRequestDocumentRootType extends TypeFunction {}
export namespace OnRequestDocumentRootType {
  export interface Params {
    selectionRootType: DocumentBuilder.Select.SelectionSet.RootType
  }
}

export interface OnRequestResult extends TypeFunction {}
export namespace OnRequestResult {
  export interface Params<$Extensions extends GlobalRegistry.Extensions = GlobalRegistry.Extensions> {
    result: GraffleExecutionResultEnvelope
    registeredSchema: GlobalRegistry.Client<$Extensions>
  }
}

export type RunTypeHookOnRequestResult<
  $Context extends Context,
  $Params extends OnRequestResult.Params,
> = AssertExtends<
  TypeFunction.CallPipeline<$Context['typeHookOnRequestResult'], $Params>,
  OnRequestResult.Params
>
