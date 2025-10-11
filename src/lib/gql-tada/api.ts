import type { DefinitionNode, DocumentNode, Location } from '@0no-co/graphql.web'
import { Kind, parse as _parse } from '@0no-co/graphql.web'

import type {
  addIntrospectionScalars,
  IntrospectionLikeInput,
  mapIntrospection,
  ScalarsLike,
  SchemaLike,
} from './introspection.js'

import type {
  decorateFragmentDef,
  DefinitionDecoration,
  FragmentShape,
  getFragmentsOfDocuments,
  makeFragmentRef,
  omitFragmentRefsRec,
} from './namespace.js'

import type { DocumentNodeLike, parseDocument } from './parser.js'
import type { getDocumentType } from './selection.js'
import type { DocumentDecoration, matchOr, obj, writable } from './utils.js'
import { concatLocSources } from './utils.js'
import type { getScalarType, getVariablesType } from './variables.js'

/** Abstract configuration type input for your schema and scalars.
 *
 * @remarks
 * This is used either via {@link setupSchema} or {@link initGraphQLTada} to set
 * up your schema and scalars.
 *
 * The `scalars` option is optional and can be used to set up more scalars, apart
 * from the default ones (like: Int, Float, String, Boolean).
 * It must be an object map of scalar names to their desired TypeScript types.
 *
 * @param introspection - Introspection of your schema matching {@link IntrospectionQuery}.
 * @param scalars - An object type with scalar names as keys and the corresponding scalar types as values.
 */
interface AbstractSetupSchema {
  introspection: IntrospectionLikeInput
  scalars?: ScalarsLike
  disableMasking?: boolean
}

/** Abstract type for internal configuration
 * @internal
 */
interface AbstractConfig {
  isMaskingDisabled: boolean
}

/** This is used to configure gql.tada with your introspection data and scalars.
 *
 * @remarks
 * You may extend this interface via declaration merging with your {@link IntrospectionQuery}
 * data and optionally your scalars to get proper type inference.
 * This is done by declaring a declaration for it as per the following example.
 *
 * Configuring scalars is optional and by default the standard scalrs are already
 * defined.
 *
 * This will configure the {@link graphql} export to infer types from your schema.
 * Alternatively, you may call {@link initGraphQLTada} instead.
 *
 * @param introspection - Introspection of your schema matching {@link IntrospectionQuery}.
 * @param scalars - An object type with scalar names as keys and the corresponding scalar types as values.
 *
 * @example
 * ```
 * import type { myIntrospection } from './myIntrospection';
 *
 * declare module 'gql.tada' {
 *   interface setupSchema {
 *     introspection: typeof myIntrospection;
 *     scalars: {
 *       DateTime: string;
 *       Json: any;
 *     };
 *   }
 * }
 * ```
 */
interface setupSchema extends AbstractSetupSchema {
  /*empty*/
}

interface AbstractSetupCache {
  readonly __cacheDisabled: unknown
  [key: string]: unknown
}

interface setupCache extends AbstractSetupCache {}

interface GraphQLTadaAPI<Schema extends SchemaLike, Config extends AbstractConfig> {
  /** In "multi-schema" mode this identifies the schema.
   * @internal */
  readonly __name: Schema['name']

  /** Function to create and compose GraphQL documents with result and variable types.
   *
   * @param input - A string of a GraphQL document.
   * @param fragments - An optional list of other GraphQL fragments created with this function.
   * @returns A {@link DocumentNode} with result and variables types.
   *
   * @remarks
   * This function creates a {@link DocumentNode} with result and variables types.
   * It is used with your schema in {@link setupSchema} to create a result type
   * of your queries, fragments, and variables.
   *
   * You can compose fragments into this function by passing them and a fragment
   * mask will be created for them.
   * When creating queries, the returned document of queries can be passed into GraphQL clients
   * which will then automatically infer the result and variables types.
   *
   * @example
   * ```
   * import { graphql } from 'gql.tada';
   *
   * const bookFragment = graphql(`
   *   fragment BookComponent on Book {
   *     id
   *     title
   *   }
   * `);
   *
   * const bookQuery = graphql(`
   *   query Book ($id: ID!) {
   *     book(id: $id) {
   *       id
   *       ...BookComponent
   *     }
   *   }
   * `, [bookFragment]);
   * ```
   *
   * @see {@link readFragment} for how to read from fragment masks.
   */
  <const In extends string, const Fragments extends readonly FragmentShape[]>(
    input: In,
    fragments?: Fragments,
  ): setupCache[In] extends DocumentNodeLike ? unknown extends setupCache['__cacheDisabled'] ? setupCache[In]
    : getDocumentNode<
      parseDocument<In>,
      Schema,
      getFragmentsOfDocuments<Fragments>,
      Config['isMaskingDisabled']
    >
    : getDocumentNode<
      parseDocument<In>,
      Schema,
      getFragmentsOfDocuments<Fragments>,
      Config['isMaskingDisabled']
    >

  /** Function to validate the type of a given scalar or enum value.
   *
   * @param name - The name of a scalar or enum type.
   * @param value - An optional scalar value of the given type.
   * @returns A {@link DocumentNode} with result and variables types.
   *
   * @remarks
   * This function validates that a value matches an enum or scalar type
   * as a type check.
   *
   * You can use it to retrieve the type of a given scalar or enum type
   * for use in a utility function or separate component that only
   * accepts a primitive scalar or enum value.
   *
   * Note that this function does not perform runtime checks of your
   * scalar value!
   *
   * @example
   * ```
   * import { graphql } from 'gql.tada';
   *
   * type myEnum = ReturnType<graphql.scalar<'myEnum'>>;
   *
   * const myEnumValue = graphql.scalar('myEnum', 'value');
   * ```
   */
  scalar<const Name extends string, Value>(
    name: Name,
    value: getScalarType<Name, Schema> extends Value ? Value & getScalarType<Name, Schema>
      : getScalarType<Name, Schema>,
  ): Value
  scalar<const Name extends string, Value>(
    name: Name,
    value: getScalarType<Name, Schema> extends Value ? never extends Value ? never
      : (Value & getScalarType<Name, Schema>) | null
      : getScalarType<Name, Schema> | null,
  ): Value | null
  scalar<const Name extends string, Value>(
    name: Name,
    value: getScalarType<Name, Schema> extends Value ? never extends Value ? never
      : (Value & getScalarType<Name, Schema>) | undefined
      : getScalarType<Name, Schema> | undefined,
  ): Value | undefined
  scalar<const Name extends string, Value>(
    name: Name,
    value: getScalarType<Name, Schema> extends Value ? never extends Value ? never
      : (Value & getScalarType<Name, Schema>) | null | undefined
      : getScalarType<Name, Schema> | null | undefined,
  ): Value | null | undefined
  scalar<const Name extends string>(
    name: Name,
    value: getScalarType<Name, Schema> | undefined,
  ): getScalarType<Name, Schema>

  /** Function to replace a GraphQL document with a persisted document.
   *
   * @typeParam Document - The document type of {@link TadaDocumentNode}.
   * @param id - A document ID that replaces the document for the API.
   * @returns A {@link TadaPersistedDocumentNode}.
   *
   * @remarks
   * This function may be used to replace a GraphQL document with a
   * stand-in, persisted document.
   *
   * The returned document’s value won’t contain any of the document’s
   * definitions, but its type will be equivalent to the `Document` that’s
   * been passed as a generic.
   *
   * As long as the query (type parameter of `Document`) is only referenced
   * as a type in your code, it will be omitted from your output build by
   * your bundler and the resulting GraphQL document’s ID will replace your
   * document entirely.
   *
   * @example
   * ```
   * import { graphql } from 'gql.tada';
   *
   * const query = graphql(`query MyQuery { __typename }`);
   * const persisted = graphql.persisted<typeof query>('MyQuery');
   * ```
   */
  persisted<Document extends DocumentNodeLike = never>(
    documentId: string,
    document?: Document,
  ): Document extends DocumentDecoration<infer Result, infer Variables> ? TadaPersistedDocumentNode<Result, Variables>
    : never
}

export type schemaOfSetup<Setup extends AbstractSetupSchema> = addIntrospectionScalars<
  mapIntrospection<matchOr<IntrospectionLikeInput, Setup['introspection'], never>>,
  matchOr<ScalarsLike, Setup['scalars'], {}>
>

export type configOfSetup<Setup extends AbstractSetupSchema> = {
  isMaskingDisabled: Setup['disableMasking'] extends true ? true : false
}

/** Utility to type-instantiate a `graphql` document function with.
 *
 * @remarks
 * The `initGraphQLTada` type may be used to manually instantiate a type
 * as returned by `initGraphQLTada<>()` with the same input type.
 *
 * @example
 * ```
 * import { initGraphQLTada } from 'gql.tada';
 * import type { myIntrospection } from './myIntrospection';
 *
 * export const graphql: initGraphQLTada<{
 *   introspection: typeof myIntrospection;
 *   scalars: {
 *     DateTime: string;
 *     Json: any;
 *   };
 * }> = initGraphQLTada();
 *
 * const query = graphql(`{ __typename }`);
 * ```
 */
export type initGraphQLTada<Setup extends AbstractSetupSchema> = GraphQLTadaAPI<
  schemaOfSetup<Setup>,
  configOfSetup<Setup>
>

/** Setup function to create a typed `graphql` document function with.
 *
 * @remarks
 * `initGraphQLTada` accepts an {@link AbstractSetupSchema} configuration object as a generic
 * and returns a `graphql` function that may be used to create documents typed using your
 * GraphQL schema.
 *
 * You should use and re-export the resulting function named as `graphql` or `gql` for your
 * editor and the TypeScript language server to recognize your GraphQL documents correctly.
 *
 * @example
 * ```
 * import { initGraphQLTada } from 'gql.tada';
 * import type { myIntrospection } from './myIntrospection';
 *
 * export const graphql = initGraphQLTada<{
 *   introspection: typeof myIntrospection;
 *   scalars: {
 *     DateTime: string;
 *     Json: any;
 *   };
 * }>();
 *
 * const query = graphql(`{ __typename }`);
 * ```
 */
export function initGraphQLTada<const Setup extends AbstractSetupSchema>(): initGraphQLTada<Setup> {
  type Schema = schemaOfSetup<Setup>
  type Config = configOfSetup<Setup>

  function graphql(input: string, fragments?: readonly TadaDocumentNode[]): any {
    const definitions = _parse(input).definitions as writable<DefinitionNode>[]
    const seen = new Set<unknown>()
    for (const document of fragments || []) {
      for (const definition of document.definitions) {
        if (definition.kind === Kind.FRAGMENT_DEFINITION && !seen.has(definition)) {
          definitions.push(definition)
          seen.add(definition)
        }
      }
    }

    let isFragment: boolean
    if (
      (isFragment = (definitions[0] as any).kind === Kind.FRAGMENT_DEFINITION)
      && (definitions[0] as any).directives
    ) {
      ;(definitions[0] as any).directives = (definitions[0] as any).directives.filter(
        (directive: any) => directive.name.value !== '_unmask',
      )
    }

    let loc: Location | undefined
    return {
      kind: Kind.DOCUMENT,
      definitions,
      get loc(): Location {
        // NOTE: This is only meant for graphql-tag compatibility. When fragment documents
        // are interpolated into other documents, graphql-tag blindly reads `document.loc`
        // without checking whether it's `undefined`.
        if (!loc && isFragment) {
          const body = input + concatLocSources(fragments || [])
          return {
            start: 0,
            end: body.length,
            source: {
              body: body,
              name: 'GraphQLTada',
              locationOffset: { line: 1, column: 1 },
            },
          }
        }
        return loc
      },
      set loc(_loc: Location) {
        loc = _loc
      },
    } satisfies DocumentNode
  }

  graphql.scalar = function scalar(_schema: Schema, value: any) {
    return value
  }

  graphql.persisted = function persisted(
    documentId: string,
    document?: TadaDocumentNode,
  ): TadaPersistedDocumentNode {
    return {
      kind: Kind.DOCUMENT,
      definitions: document ? document.definitions : [],
      documentId,
    }
  }

  return graphql as GraphQLTadaAPI<Schema, Config>
}

/** Alias to a GraphQL parse function returning an exact document type.
 *
 * @param input - A string of a GraphQL document
 * @returns A parsed {@link DocumentNode}.
 *
 * @remarks
 * This function accepts a GraphQL document string and parses it, just like
 * GraphQL’s `parse` function. However, its return type will be the exact
 * structure of the AST parsed in types.
 */
function parse<const In extends string>(input: In): parseDocument<In> {
  return _parse(input) as any
}

export type getDocumentNode<
  Document extends DocumentNodeLike,
  Introspection extends SchemaLike,
  Fragments extends { [name: string]: any } = {},
  isMaskingDisabled = false,
> = getDocumentType<Document, Introspection, Fragments> extends never ? never
  : TadaDocumentNode<
    getDocumentType<Document, Introspection, Fragments>,
    getVariablesType<Document, Introspection>,
    decorateFragmentDef<Document, isMaskingDisabled>
  >

/** A GraphQL `DocumentNode` with attached types for results and variables.
 *
 * @remarks
 * This is a GraphQL {@link DocumentNode} with attached types for results and variables.
 * This is used by GraphQL clients to infer the types of results and variables and provide
 * type-safety in GraphQL documents.
 *
 * You can create typed GraphQL documents using the {@link graphql} function.
 *
 * `Result` is the type of GraphQL results, as returned by GraphQL APIs for a given query.
 * `Variables` is the type of variables, as accepted by GraphQL APIs for a given query.
 *
 * @see {@link https://github.com/dotansimha/graphql-typed-document-node} for more information.
 */
interface TadaDocumentNode<
  Result = { [key: string]: any },
  Variables = { [key: string]: any },
  Decoration = void,
> extends DocumentNode, DocumentDecoration<Result, Variables>, DefinitionDecoration<Decoration> {}

/** A GraphQL persisted document with attached types for results and variables.
 *
 * @remarks
 * This type still matches a GraphQL {@link DocumentNode}, but doesn’t contain
 * any definitions. At runtime, this means that this document is empty.
 *
 * Instead of its definitions, it carries an `id` property that is typically
 * used to uniquely identify the document to your GraphQL API, without disclosing
 * the shape of the query or schema transparently.
 */
interface TadaPersistedDocumentNode<
  Result = { [key: string]: any },
  Variables = { [key: string]: any },
> extends DocumentNode, DocumentDecoration<Result, Variables> {
  definitions: readonly DefinitionNode[]
  documentId: string
}

/** A utility type returning the `Result` type of typed GraphQL documents.
 *
 * @remarks
 * This accepts a {@link TadaDocumentNode} and returns the attached `Result` type
 * of GraphQL documents.
 */
type ResultOf<Document> = Document extends DocumentDecoration<infer Result, any> ? Result : never

/** A utility type returning the `Variables` type of typed GraphQL documents.
 *
 * @remarks
 * This accepts a {@link TadaDocumentNode} and returns the attached `Variables` type
 * of GraphQL documents.
 */
type VariablesOf<Document> = Document extends DocumentDecoration<any, infer Variables> ? Variables : never

/** Creates a fragment mask for a given fragment document.
 *
 * @remarks
 * When {@link graphql} is used to create a fragment and is spread into another
 * fragment or query, their result types will only contain a “reference” to the
 * fragment. This encourages isolation and is known as “fragment masking.”
 *
 * While {@link readFragment} is used to unmask these fragment masks, this utility
 * creates a fragment mask, so you can accept the masked data in the part of your
 * codebase that defines a fragment.
 *
 * @example
 * ```
 * import { FragmentOf, graphql, readFragment } from 'gql.tada';
 *
 * const bookFragment = graphql(`
 *   fragment BookComponent on Book {
 *     id
 *     title
 *   }
 * `);
 *
 * // May be called with any GraphQL data that contains a spread of `bookFragment`
 * const getBook = (data: FragmentOf<typeof bookFragment>) => {
 *   // Unmasks the fragment and casts to the result type of `bookFragment`
 *   const book = readFragment(bookFragment, data);
 * };
 * ```
 *
 * @see {@link readFragment} for how to read from fragment masks.
 */
type FragmentOf<Document extends FragmentShape> = makeFragmentRef<Document>

type resultOrFragmentOf<Document extends FragmentShape> = FragmentOf<Document> | ResultOf<Document>

// Removed __typename narrowing logic - no longer performing type narrowing based on __typename presence
// Original implementation (lines 493-497):
// type resultOfT<Document extends FragmentShape, T = unknown> = Document extends DocumentDecoration<infer Result, any>
//   ? '__typename' extends keyof T ? Result extends { __typename?: T['__typename'] } ? Result
//     : never
//   : Result
//   : never
type resultOfT<Document extends FragmentShape, T = unknown> = Document extends DocumentDecoration<infer Result, any>
  ? Result
  : never

type resultOfFragmentsRec<
  Fragments extends readonly any[],
  Result = {},
> = Fragments extends readonly [infer Fragment, ...infer Rest] ? resultOfFragmentsRec<Rest, ResultOf<Fragment> & Result>
  : Result

type fragmentRefsOfFragmentsRec<
  Fragments extends readonly any[],
  FragmentRefs = {},
> = Fragments extends readonly [infer Fragment, ...infer Rest]
  ? fragmentRefsOfFragmentsRec<Rest, makeFragmentRef<Fragment> & FragmentRefs>
  : obj<FragmentRefs>

/** Unmasks a fragment mask for a given fragment document and data.
 *
 * @param _document - A GraphQL document of a fragment, created using {@link graphql}.
 * @param fragment - A mask of the fragment, which can be wrapped in arrays, or nullable.
 * @returns The unmasked data of the fragment.
 *
 * @remarks
 * When {@link graphql} is used to create a fragment and is spread into another
 * fragment or query, their result types will only contain a “reference” to the
 * fragment. This encourages isolation and is known as “fragment masking.”
 *
 * This means that you must use {@link readFragment} to unmask these fragment masks
 * and get to the data. This encourages isolation and only using the data you define
 * a part of your codebase to require.
 *
 * @example
 * ```
 * import { FragmentOf, graphql, readFragment } from 'gql.tada';
 *
 * const bookFragment = graphql(`
 *   fragment BookComponent on Book {
 *     id
 *     title
 *   }
 * `);
 *
 * const getBook = (data: FragmentOf<typeof bookFragment> | null) => {
 *   // Unmasks the fragment and casts to the result type of `bookFragment`
 *   // This is intersected with `| null` in this case, due to the input type.
 *   const book = readFragment(bookFragment, data);
 * };
 *
 * const bookQuery = graphql(`
 *   query Book ($id: ID!) {
 *     book(id: $id) {
 *       id
 *       ...BookComponent
 *     }
 *   }
 * `, [bookFragment]);
 *
 * const getQuery = (data: ResultOf<typeof bookQuery>) => {
 *   getBook(data?.book);
 * };
 * ```
 *
 * @see {@link readFragment} for how to read from fragment masks.
 */
function readFragment<const Document extends FragmentShape = never>(
  _document: Document,
  fragment: never,
): resultOfT<Document>

function readFragment<
  const Document extends FragmentShape,
  const T extends resultOrFragmentOf<Document> | null | undefined | {},
>(
  _document: Document,
  fragments: readonly T[],
): readonly (T extends resultOrFragmentOf<Document> ? resultOfT<Document, T> : T)[]
function readFragment<
  const Document extends FragmentShape,
  const T extends resultOrFragmentOf<Document> | null | undefined | {},
>(
  _document: Document,
  fragment: T,
): T extends resultOrFragmentOf<Document> ? resultOfT<Document, T> : T

// Reading arrays of fragments with required generic
function readFragment<const Document extends FragmentShape>(
  fragment: readonly resultOrFragmentOf<Document>[],
): readonly ResultOf<Document>[]
function readFragment<const Document extends FragmentShape>(
  fragment: readonly (resultOrFragmentOf<Document> | null)[],
): readonly (ResultOf<Document> | null)[]
function readFragment<const Document extends FragmentShape>(
  fragment: readonly (resultOrFragmentOf<Document> | undefined)[],
): readonly (ResultOf<Document> | undefined)[]
function readFragment<const Document extends FragmentShape>(
  fragment: readonly (resultOrFragmentOf<Document> | null | undefined)[],
): readonly (ResultOf<Document> | null | undefined)[]
// Reading arrays of fragments with required generic with optional `{}` type
function readFragment<const Document extends FragmentShape>(
  fragment: readonly (resultOrFragmentOf<Document> | {})[],
): readonly (ResultOf<Document> | {})[]
function readFragment<const Document extends FragmentShape>(
  fragment: readonly (resultOrFragmentOf<Document> | null | {})[],
): readonly (ResultOf<Document> | null | {})[]
function readFragment<const Document extends FragmentShape>(
  fragment: readonly (resultOrFragmentOf<Document> | undefined | {})[],
): readonly (ResultOf<Document> | undefined | {})[]
function readFragment<const Document extends FragmentShape>(
  fragment: readonly (resultOrFragmentOf<Document> | null | undefined | {})[],
): readonly (ResultOf<Document> | null | undefined | {})[]
// Reading fragments with required generic
function readFragment<const Document extends FragmentShape>(
  fragment: resultOrFragmentOf<Document>,
): ResultOf<Document>
function readFragment<const Document extends FragmentShape>(
  fragment: resultOrFragmentOf<Document> | null,
): ResultOf<Document> | null
function readFragment<const Document extends FragmentShape>(
  fragment: resultOrFragmentOf<Document> | undefined,
): ResultOf<Document> | undefined
function readFragment<const Document extends FragmentShape>(
  fragment: resultOrFragmentOf<Document> | null | undefined,
): ResultOf<Document> | null | undefined
// Reading fragments with required generic with optional `{}` type
function readFragment<const Document extends FragmentShape>(
  fragment: resultOrFragmentOf<Document> | {},
): ResultOf<Document> | {}
function readFragment<const Document extends FragmentShape>(
  fragment: resultOrFragmentOf<Document> | null | {},
): ResultOf<Document> | null | {}
function readFragment<const Document extends FragmentShape>(
  fragment: resultOrFragmentOf<Document> | undefined | {},
): ResultOf<Document> | undefined | {}
function readFragment<const Document extends FragmentShape>(
  fragment: resultOrFragmentOf<Document> | null | undefined | {},
): ResultOf<Document> | null | undefined | {}

function readFragment(...args: [unknown] | [unknown, unknown]) {
  return args.length === 2 ? args[1] : args[0]
}

/** For testing, masks fragment data for given data and fragments.
 *
 * @param _fragments - A list of GraphQL documents of fragments, created using {@link graphql}.
 * @param data - The combined result data of the fragments, which can be wrapped in arrays.
 * @returns The masked data of the fragments.
 *
 * @remarks
 * When creating test data, you may define data for fragments that’s unmasked, making it
 * unusable in parent fragments or queries that require masked data.
 *
 * This means that you may have to use {@link maskFragments} to mask your data first
 * for TypeScript to not report an error.
 *
 * @example
 * ```
 * import { FragmentOf, ResultOf, graphql, maskFragments } from 'gql.tada';
 *
 * const bookFragment = graphql(`
 *   fragment BookComponent on Book {
 *     id
 *     title
 *   }
 * `);
 *
 * const data = maskFragments([bookFragment], { id: 'id', title: 'book' });
 * ```
 *
 * @see {@link readFragment} for how to read from fragment masks (i.e. the reverse)
 */
function maskFragments<const Fragments extends readonly FragmentShape[]>(
  _fragments: Fragments,
  fragment: resultOfFragmentsRec<Fragments>,
): fragmentRefsOfFragmentsRec<Fragments>
function maskFragments<const Fragments extends readonly FragmentShape[]>(
  _fragments: Fragments,
  fragment: resultOfFragmentsRec<Fragments> | null,
): fragmentRefsOfFragmentsRec<Fragments> | null
function maskFragments<const Fragments extends readonly FragmentShape[]>(
  _fragments: Fragments,
  fragment: resultOfFragmentsRec<Fragments> | undefined,
): fragmentRefsOfFragmentsRec<Fragments> | undefined
function maskFragments<const Fragments extends readonly FragmentShape[]>(
  _fragments: Fragments,
  fragment: resultOfFragmentsRec<Fragments> | null | undefined,
): fragmentRefsOfFragmentsRec<Fragments> | null | undefined
function maskFragments<const Fragments extends readonly FragmentShape[]>(
  _fragments: Fragments,
  fragment: readonly resultOfFragmentsRec<Fragments>[],
): readonly fragmentRefsOfFragmentsRec<Fragments>[]
function maskFragments<const Fragments extends readonly FragmentShape[]>(
  _fragments: Fragments,
  fragment: readonly (resultOfFragmentsRec<Fragments> | null)[],
): readonly (fragmentRefsOfFragmentsRec<Fragments> | null)[]
function maskFragments<const Fragments extends readonly FragmentShape[]>(
  _fragments: Fragments,
  fragment: readonly (resultOfFragmentsRec<Fragments> | undefined)[],
): readonly (fragmentRefsOfFragmentsRec<Fragments> | undefined)[]
function maskFragments<const Fragments extends readonly FragmentShape[]>(
  _fragments: Fragments,
  fragment: readonly (resultOfFragmentsRec<Fragments> | null | undefined)[],
): readonly (fragmentRefsOfFragmentsRec<Fragments> | null | undefined)[]
function maskFragments(_fragments: unknown, data: unknown) {
  return data
}

/** For testing, converts document data without fragment refs to their result type.
 *
 * @param _document - A GraphQL document, created using {@link graphql}.
 * @param data - The result data of the GraphQL document with optional fragment refs.
 * @returns The masked result data of the document.
 *
 * @remarks
 * When creating test data, you may define data for documents that’s unmasked, but
 * need to cast the data to match the result type of your document.
 *
 * This means that you may have to use {@link unsafe_readResult} to cast
 * them to the result type, instead of doing `as any as ResultOf<typeof document>`.
 *
 * This function is inherently unsafe, since it doesn't check that your document
 * actually contains the masked fragment data!
 *
 * @example
 * ```
 * import { FragmentOf, ResultOf, graphql, unsafe_readResult } from 'gql.tada';
 *
 * const bookFragment = graphql(`
 *   fragment BookComponent on Book {
 *     id
 *     title
 *   }
 * `);
 *
 * const query = graphql(`
 *   query {
 *     book {
 *       ...BookComponent
 *     }
 *   }
 * `, [bookFragment]);
 *
 * const data = unsafe_readResult(query, { book: { id: 'id', title: 'book' } });
 * ```
 *
 * @see {@link readFragment} for how to read from fragment masks (i.e. the reverse)
 */
function unsafe_readResult<
  const Document extends DocumentDecoration<any, any>,
  const Data extends omitFragmentRefsRec<ResultOf<Document>>,
>(_document: Document, data: Data): ResultOf<Document> {
  return data as any
}

const graphql: initGraphQLTada<setupSchema> = initGraphQLTada()

export { graphql, maskFragments, parse, readFragment, unsafe_readResult }

export type {
  AbstractSetupCache,
  AbstractSetupSchema,
  FragmentOf,
  GraphQLTadaAPI,
  parseDocument,
  ResultOf,
  setupCache,
  setupSchema,
  TadaDocumentNode,
  TadaPersistedDocumentNode,
  VariablesOf,
}
