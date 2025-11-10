import { tryCatch } from '../../lib/prelude.js'
import { isOperationDefinitionNode } from '../lib/graphql.js'
import type { RequestDocument } from './types.js'
/**
 * Refactored imports from `graphql` to be more specific, this helps import only the required files (100KiB)
 * instead of the entire package (greater than 500KiB) where tree-shaking is not supported.
 * @see https://github.com/jasonkuhrt/graphql-request/pull/543
 */
import type { DocumentNode } from 'graphql'
import { parse } from 'graphql'
import { print } from 'graphql'

/**
 * helpers
 */

const extractOperationName = (document: DocumentNode): string | undefined => {
  let operationName = undefined

  const defs = document.definitions.filter(isOperationDefinitionNode)

  if (defs.length === 1) {
    operationName = defs[0]!.name?.value
  }

  return operationName
}

const extractIsMutation = (document: DocumentNode): boolean => {
  let isMutation = false

  const defs = document.definitions.filter(isOperationDefinitionNode)

  if (defs.length === 1) {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison --
     * graphql@15's `OperationTypeNode` is a type, but graphql@16's `OperationTypeNode` is a native TypeScript enum
     * Therefore, we cannot use `OperationTypeNode.MUTATION` here because it wouldn't work with graphql@15
     **/
    isMutation = defs[0]!.operation === `mutation`
  }

  return isMutation
}

export const analyzeDocument = (
  document: RequestDocument,
  excludeOperationName?: boolean,
): { expression: string; operationName: string | undefined; isMutation: boolean } => {
  /**
   * Normalize boxed String objects to primitive strings for compatibility with TypedDocumentString.
   *
   * Problem: \@graphql-codegen with `documentMode: 'string'` generates a TypedDocumentString class that
   * extends the built-in String class, creating "boxed String" instances:
   *
   * @see https://github.com/dotansimha/graphql-code-generator/blob/c87b779b9b400813d733fa89dcb16724b30c6d16/packages/plugins/typescript/typed-document-node/src/index.ts#L40-L57
   *
   * ```
   * class TypedDocumentString<TResult, TVariables> extends String
   *   constructor(value: string)
   *     super(value)  // Creates a boxed String object, not a primitive string
   * ```
   *
   * Boxed Strings are objects, not primitives:
   * - `typeof "hello" === "string"` returns true
   * - `typeof new String("hello") === "string"` returns false (returns "object")
   *
   * Without normalization, TypedDocumentString instances would fail the `typeof === 'string'` check
   * and incorrectly be passed to `print()`, which expects a DocumentNode AST, causing a crash.
   *
   * Solution: Detect and convert boxed Strings to primitives using template literal coercion.
   * - Primitive strings pass through (typeof === "string")
   * - DocumentNode objects pass through (have .kind property)
   * - Boxed Strings get converted to primitives (template literal to primitive string)
   *
   * @see https://github.com/graffle-js/graffle/issues/1453
   */
  const normalizedDocument = typeof document === `string` || `kind` in document
    ? document
    : String(document)

  const expression = typeof normalizedDocument === `string` ? normalizedDocument : print(normalizedDocument)

  let isMutation = false
  let operationName = undefined

  if (excludeOperationName) {
    return { expression, isMutation, operationName }
  }

  const docNode = tryCatch(
    () => (typeof normalizedDocument === `string` ? parse(normalizedDocument) : normalizedDocument),
  )
  if (docNode instanceof Error) {
    return { expression, isMutation, operationName }
  }

  operationName = extractOperationName(docNode)
  isMutation = extractIsMutation(docNode)

  return { expression, operationName, isMutation }
}
