import type { Grafaid } from '../../../lib/grafaid/__.js'
import {
  isTemplateStringArguments,
  joinTemplateStringArrayAndArgs,
  type TemplateStringsArguments,
} from '../../../lib/template-string.js'
import { type DocumentController } from './send.js'

// dprint-ignore
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
