import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { Ts } from '@wollybeard/kit'
import type { Doc } from '../__.js'
import { Core } from '../core/_.js'
import type { ParseDocument } from './parser.js'
export type { ParseDocument } from './parser.js'

/**
 * Parse GraphQL string into operations (raw, unwrapped).
 *
 * Returns a union of operations without Doc.Document wrapper.
 * For the wrapped version, use the unified Parse in docpar/parse.ts.
 *
 * @param $Input - The GraphQL document string to parse
 * @param $Context - Parser context containing schema and configuration
 *
 * @example
 * ```ts
 * type Ops = Parse<'{ id }', ParserContext<MySchema>>
 * // Returns: Operation<'default', { id: string }, {}> (raw operation, no Document wrapper)
 * ```
 */
export type Parse<
  $Input extends string,
  $Context extends Core.ParserContext.Cheap,
> = Ts.Simplify.Top<
  getDocumentOperations<parseDocument<$Input>['definitions'], $Context>
> extends infer $OperationsRecord ? $OperationsRecord extends Ts.Err.StaticError ? $OperationsRecord
  : [$OperationsRecord] extends [Record<string, any>]
    ? [$OperationsRecord[keyof $OperationsRecord]] extends [infer $Op] ? [$Op] extends [Doc.Operation] ? $Op
      : string
    : string
  : string
  : string

/**
 * parseDocument - captures the input string to pass to getDocumentOperations.
 */
export type parseDocument<$Input extends string> = {
  definitions: $Input // Capture input for single-pass parsing
}

/**
 * getDocumentOperations - performs single-pass parsing with the context.
 * Supports both schema-driven and schema-less modes.
 */
export type getDocumentOperations<
  $Definitions,
  $Context extends { schema: any },
> = $Definitions extends string ? ParseDocument<$Definitions, $Context>
  : never
