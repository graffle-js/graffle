import type { Grafaid } from '../../../lib/grafaid/$.js'
import {
  isTemplateStringArguments,
  joinTemplateStringArrayAndArgs,
  type TemplateStringsArguments,
} from '../../../lib/template-string.js'
import { type DocumentController } from './send.js'

/**
 * Validates that documents requiring SDDM are only used with SDDM-enabled contexts.
 *
 * This is a compile-time check that prevents documents generated with SDDM
 * (Schema-Driven Data Map) from being executed by clients without SDDM support.
 * SDDM documents contain type metadata and custom scalar information that require
 * the full schema to be available for proper encoding/decoding.
 *
 * Note: Documents with RequiresSDDM=false can be used with any client.
 * Documents with RequiresSDDM=true require clients configured with schema.map.
 */
// dprint-ignore
type HasSDDM<$Context> =
  $Context extends { configuration: { schema: { current: { map: infer $Map } } } }
    ? $Map extends undefined ? false : true
    : false

// dprint-ignore
type ValidateSDDMRequirement<$Document extends Grafaid.Document.Typed.TypedDocumentLike, $Context> =
  Grafaid.Document.Typed.RequiresSDDMOf<$Document> extends true
    ? HasSDDM<$Context> extends true
      ? $Document
      : `❌ This document requires SDDM. Configure client with schema.map`
    : $Document

// dprint-ignore
/**
 * Execute a GraphQL document using GraphQL syntax.
 *
 * This interface defines the method signatures for accepting GraphQL documents as strings
 * or template literals. Returns a {@link DocumentController} for sending the request.
 *
 * **Immutability**: Returns a new client instance. The original client is not modified.
 * If the operation results in no effective change, the same instance is returned for performance.
 *
 * @example
 * ```ts
 * // String document
 * const doc = graffle.gql('{ pokemons { name } }')
 * const data = await doc.send()
 * ```
 *
 * @example
 * ```ts
 * // Template literal
 * const data = await graffle.gql`{ pokemons { name } }`.send()
 * ```
 */
export interface GqlMethod<$Context> {
    <$Document extends Grafaid.Document.Typed.TypedDocumentLike>(document: ValidateSDDMRequirement<$Document, $Context>): DocumentController<$Context, $Document>
    <$Document extends Grafaid.Document.Typed.TypedDocumentLike>(parts: TemplateStringsArray, ...args: unknown[]): DocumentController<$Context, $Document>
  }

export namespace GqlMethod {
  export type Arguments = [Grafaid.Document.Typed.TypedDocumentLike] | TemplateStringsArguments

  export const normalizeArguments = (args: Arguments) => {
    const document = isTemplateStringArguments(args) ? joinTemplateStringArrayAndArgs(args) : args[0]
    return {
      document,
    }
  }
}
