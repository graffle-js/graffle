import type { Grafaid } from '../../../lib/grafaid/$.js'
import {
  isTemplateStringArguments,
  joinTemplateStringArrayAndArgs,
  type TemplateStringsArguments,
} from '../../../lib/template-string.js'
import { type DocumentController } from './send.js'

// dprint-ignore
/**
 * Execute a GraphQL document using GraphQL syntax.
 *
 * This interface defines the method signatures for accepting GraphQL documents as strings
 * or template literals. Returns a {@link DocumentController} for sending the request.
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
    <$Document extends Grafaid.Document.Typed.TypedDocumentLike>(document: $Document                            ): DocumentController<$Context, $Document>
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
