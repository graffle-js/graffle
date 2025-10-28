import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from './schema/$.js'
import type * as $$SelectionSets from './selection-sets/$.js'

/**
 * Build and execute type-safe native GraphQL documents.
 *
 * Accepts a document definition with multiple operations and returns
 * a document runner that can execute those operations with full type safety.
 *
 * # Usage
 *
 * Use the document method to build native GraphQL documents containing
 * one or more operations (queries, mutations, subscriptions). The returned
 * runner provides methods to execute each operation with inferred types.
 *
 * @example
 * ```ts
 * const doc = client.document({
 *   getPokemon: { query: { pokemon: { name: true } } },
 *   addPokemon: { mutation: { addPokemon: { $: { name: 'Pikachu' }, id: true } } }
 * })
 *
 * const result1 = await doc.run('getPokemon')
 * const result2 = await doc.run('addPokemon')
 * ```
 */

export interface Document<$Context extends $$Utilities.Context> {
  <$Document>(
    document: $$Utilities.NoExcessNonEmpty<
      $Document,
      $$SelectionSets.$Document<
        { scalars: $Context['scalars'] }
      >
    >,
  ): $$Utilities.DocumentRunner<
    $Context,
    $$Schema.Schema,
    // @ts-expect-error We use Exact instead of constraint on this function. TypeScript does not see that as
    // Satisfying the constraint on the DocumentRunner type.
    $Document
  >
}

/**
 * Higher-kinded type for document builder method.
 *
 * Internal type used for type-level computation in the document builder.
 */
export interface BuilderMethodsDocumentFn extends $$Utilities.Kind.Kind {
  // @ts-expect-error parameter is Untyped.
  return: Document<this['parameters']>
}
