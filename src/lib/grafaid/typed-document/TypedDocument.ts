import { type HasKeys, type IsHasIndexType } from '#src/lib/prelude.js'
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core'
import type { Obj } from '@wollybeard/kit'
import { type DocumentNode, type TypedQueryDocumentNode } from 'graphql'
import type { HasRequiredKeys, IsNever, IsUnknown } from 'type-fest'
import type { SomeObjectData, Variables } from '../graphql.js'

export type { SomeObjectData, Variables } from '../graphql.js'

export { type TypedQueryDocumentNode as Query } from 'graphql'

// We default to `any` because otherwise when this type is used as a constraint
// it will reject apparent subtypes. The reason I think has to do with co/contra-variant stuff
// in regards to how function parameters versus return types affect if only wider or narrower
// types are allowed.

// dprint-ignore
export type TypedDocumentLike<
  $Result extends SomeObjectData = SomeObjectData,
  $Variables extends Variables = any,
  $RequiresSDDM extends boolean = boolean
> =
  | TypedQueryDocumentNode<$Result, $Variables>
  | TypedDocumentString   <$Result, $Variables, $RequiresSDDM>
  | TypedDocumentNode     <$Result, $Variables>

export type TypedDocumentNodeLike<$Result extends SomeObjectData = SomeObjectData, $Variables extends Variables = any> =
  | TypedQueryDocumentNode<$Result, $Variables>
  | TypedDocumentNode<$Result, $Variables>

/**
 * @remarks From package \@graphql-typed-document-node/core in theory but not exported
 * @see https://github.com/dotansimha/graphql-typed-document-node/issues/163
 */
// dprint-ignore
interface TypedDocumentString<
  $Result = SomeObjectData,
  $Variables = Variables,
  $RequiresSDDM extends boolean = false
> extends String, DocumentTypeDecoration<$Result, $Variables> {
  /**
   * Phantom brand to track whether this document requires SDDM (Schema-Driven Data Map).
   * This is a compile-time-only property used to prevent SDDM documents from being
   * executed by clients without SDDM support.
   */
  readonly __sddm?: $RequiresSDDM
}

/**
 * This type is re-defined here because importing it from `@graphql-typed-document-node/core` leads to this error:
 *
 * Failed to resolve entry for package "\@graphql-typed-document-node/core". The package may have incorrect main/module/exports specified in its package.json
 *
 * @see https://github.com/dotansimha/graphql-typed-document-node
 */
// dprint-ignore
interface TypedDocumentNode<$Result = SomeObjectData, $Variables = Variables> extends DocumentNode, DocumentTypeDecoration<$Result, $Variables> {
  // nothing
}

export { type TypedDocumentNode as Node, type TypedDocumentString as String }

//
//
//
//
// Variables Helpers

// dprint-ignore
export type GetVariablesInputKind<$Variables extends Variables> =
  IsNever<$Variables>         extends true  ? VariablesInputKindNone     :
  IsHasIndexType<$Variables>  extends true  ? VariablesInputKindOptional :
  HasRequiredKeys<$Variables> extends true  ? VariablesInputKindRequired :
  HasKeys<$Variables>         extends true  ? VariablesInputKindOptional :
                                              VariablesInputKindNone

export type VariablesInputKind =
  | VariablesInputKindNone
  | VariablesInputKindRequired
  | VariablesInputKindOptional

export type VariablesInputKindNone = 'none'

export type VariablesInputKindRequired = 'required'

export type VariablesInputKindOptional = 'optional'

//
//
//
//
// Document Helpers

export const isString = <$TypedDocument extends TypedDocumentLike>(
  document: $TypedDocument,
): document is Exclude<$TypedDocument, TypedDocumentNode | TypedQueryDocumentNode> => typeof document === `string`

export const unType = (document: TypedDocumentLike): string | DocumentNode => document as any

// dprint-ignore
export type ResultOf<$Document extends TypedDocumentLike> =
  $Document extends string                                                                                ? SomeObjectData :
  $Document extends TypedQueryDocumentNode <infer $R extends SomeObjectData, infer __vars>                ? $R :
  $Document extends TypedDocumentNode      <infer $R extends SomeObjectData, infer __vars>                ? $R :
  $Document extends TypedDocumentString    <infer $R extends SomeObjectData, infer __vars, infer __sddm>  ? $R :
                                                                   never

// dprint-ignore
export type VariablesOf<$Document extends TypedDocumentLike> =
  $Document extends TypedDocumentString    <infer __result, infer $V, infer __sddm>   ? $V :
  $Document extends TypedQueryDocumentNode <infer __result, infer $V>                   ? $V :
  $Document extends TypedDocumentNode      <infer __result, infer $V>                   ? IsUnknown<$V> extends true
                                                                                           // This catches case of DocumentNode being passed
                                                                                           // which is a subtype of TypedDocumentNode, however,
                                                                                           // extracting variables from it will always yield
                                                                                           // unknown.
                                                                                           ? Variables
                                                                                           : $V :
                                                                                         never

// dprint-ignore
export type RequiresSDDMOf<$Document extends TypedDocumentLike> =
  $Document extends { __sddm?: infer $RequiresSDDM extends boolean | undefined } ?  Exclude<$RequiresSDDM, undefined> :
                                                                                    false
