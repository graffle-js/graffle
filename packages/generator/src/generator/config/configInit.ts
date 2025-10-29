import type { Grafaid } from '@graffle/graphql'
import type { Fs } from '#src/lib/fsp.js'
import type { IntrospectionOptions } from 'graphql'
import type { Extension } from '../extension/types.js'

export interface InputLint {
  /**
   * Should a warning be raised if the GraphQL schema has a custom scalar defined for which your project has no corresponding custom scalar codec?
   *
   * @defaultValue `true`
   */
  missingCustomScalarCodec?: boolean
  /**
   * Should a warning be raised if GraphQLSP is not configured in tsconfig.json?
   *
   * GraphQLSP provides IDE autocomplete and validation for GraphQL strings.
   * When enabled, the generator will check if GraphQLSP is configured and provide helpful setup instructions if missing.
   *
   * @see https://github.com/graffle-js/graffle/issues/1389 for auto-configuration feature request
   * @defaultValue `true`
   */
  missingGraphqlSP?: boolean
}

export const OutputCase = {
  pascal: `pascal`,
  camel: `camel`,
  kebab: `kebab`,
  snake: `snake`,
} as const
export type InputOutputCase = keyof typeof OutputCase

export const ImportFormat = {
  jsExtension: `jsExtension`,
  tsExtension: `tsExtension`,
  noExtension: `noExtension`,
} as const
export type InputImportFormat = keyof typeof ImportFormat

export interface ConfigInitSchemaSdl {
  type: `sdl`
  sdl: string
}
export interface ConfigInitSchemaInstance {
  type: `instance`
  instance: Grafaid.Schema.Schema
}
export interface ConfigInitSchemaSdlFile {
  type: `sdlFile`
  /**
   * Defaults to the source directory if set, otherwise the current working directory.
   */
  dirOrFilePath?: string
}
export interface ConfigInitSchemaUrl {
  type: `url`
  url: URL
  options?: InputIntrospectionOptions
  /**
   * HTTP headers that will be sent with the introspection request.
   */
  headers?: HeadersInit
}

export type ConfigInitSchema =
  | ConfigInitSchemaSdl
  | ConfigInitSchemaInstance
  | ConfigInitSchemaSdlFile
  | ConfigInitSchemaUrl

export interface ConfigInit {
  /**
   * File system API to use.
   *
   * By default uses the Node.js file system API.
   */
  fs?: Fs | undefined
  /**
   * What naming convention to use for generated files and directories.
   *
   * @defaultValue `kebab`
   */
  outputCase?: InputOutputCase | undefined
  /**
   * The name of the client. This will affect:
   *
   * 1. The field name the generated client is referenced under in the global registry.
   * 2. The exported namespace name.
   * 3. Possible use by extensions. For example the Opentelemetry extension augments span attributes with this value.
   *
   * By default the globally registered name is "default" and the exported namespace name is "Graffle".
   *
   * Tip: Typically you would only set this if you had multiple Graffle clients (for different GraphQL schemas) in your project.
   */
  name?: string | undefined
  /**
   * The namespace name to use.
   *
   * - If `true` then match the `name` if given.
   * - If `false` then use the default value.
   * - If a string then use that value.
   *
   * @defaultValue `Graffle`
   */
  nameNamespace?: boolean | string | undefined
  /**
   * Control various checks that Graffle performs. For example you could disable the warning about missing custom scalar codecs.
   */
  lint?: InputLint
  /**
   * The directory path which paths will be considered relative to.
   *
   * By default, is the process current working directory.
   */
  currentWorkingDirectory?: string | undefined
  /**
   * The schema to use for generation. Can be one of:
   *
   * 1. An existing SDL file on disk,
   * 2. A schema instance already in memory,
   * 3. An endpoint that will be introspected.
   */
  schema: ConfigInitSchema
  /**
   * If the schema comes from a non-sdl-file source like a GraphQL endpoint URL, should a derived SDL file be written to disk?
   *
   * When `boolean`:
   *
   * If true, an SDL file will be written into the output directory.
   *
   * When `string`:
   *
   * The path to write the SDL file to.
   * If a directory, then a file called "schema.graphql" will be written into it.
   * If a file, then it will be written as such.
   *
   * @defaultValue `false`
   */
  outputSDL?: boolean | string | undefined
  /**
   * Directory path to where the generated code should be output.
   *
   * Defaults to the current working directory.
   */
  outputDirPath?: string | undefined
  /**
   * Control over the client configuration's default schema. Since an introspection URL can be used for `schema`,
   * this option allows you to have this URL propagated to the generated client configuration for your convenience.
   * As well, its possible to set an explicit URL.
   *
   * When `boolean`:
   *
   * If a GraphQL endpoint is given for `schema`, should it be set as the default URL in the generated client.
   * If true then the client will default to using this URL when sending requests.
   *
   * When `URL`:
   *
   * A GraphQL endpoint to be used as the default URL in the generated client for requests.
   *
   * @defaultValue `true`
   */
  defaultSchemaUrl?: boolean | URL | undefined
  /**
   * Directory to look for custom scalar codecs.
   *
   * Defaults to the current working directory.
   */
  sourceDirPath?: string | undefined
  /**
   * File path to your scalars module.
   *
   * If not set, Graffle will look for a file called `scalars.ts` in the project directory.
   */
  scalars?: string | undefined
  /**
   * How should import identifiers be generated? Can be one of:
   *
   * 1. `jsExtension` e.g. `import ... from './bar.js'`
   * 2. `tsExtension` e.g. `import ... from './bar.ts'`
   * 3. `noExtension` e.g. `import ... from './bar'`
   *
   * @defaultValue `jsExtension`
   *
   * @remarks
   *
   * A user request for this option can be found at https://github.com/graffle-js/graffle/issues/1282.
   *
   * There is a planned feature to have a default be dynamic according to the state of your project's tsconfig.json.
   * See https://github.com/graffle-js/graffle/issues/1283.
   */
  importFormat?: InputImportFormat | undefined
  /**
   * Override import paths to graffle package within the generated code.
   * Used by Graffle test suite to have generated clients point to source
   * code. Probably not useful to you.
   */
  libraryPaths?: ConfigInitLibraryPaths | undefined
  /**
   * Should custom scalars definitions be imported into the generated output?
   */
  customScalars?: boolean | undefined
  /**
   * Should the generated code be formatted?
   */
  format?: boolean | undefined
  /**
   * Control over how TSDoc (JSDoc) comments are handled.
   */
  TSDoc?: {
    /**
     * When there is no documentation for a documentable node (type, field, enum value, ...) in the GraphQL schema
     * what should Graffle show for the JSDoc of the corresponding elements in the generated code?
     *
     * - `message`: Show a message mentioning the lack of documentation and the opportunity for it.
     * - `ignore`: Ignore the lack of documentation and show nothing.
     */
    noDocPolicy?: 'message' | 'ignore' | undefined
  } | undefined
  /**
   * Graffle gentime extensions to use. Most Graffle extensions are runtime only but some
   * are or have gentime components.
   */
  extensions?: Extension[] | undefined
  /**
   * Configure how root field methods are organized in the generated client.
   * Multiple organizations can be enabled simultaneously.
   */
  methodsOrganization?: {
    /**
     * Enable logical organization by operation type (query/mutation).
     *
     * @defaultValue `true`
     */
    logical?: boolean | undefined
    /**
     * Enable domain-based organization by resource/entity.
     * Requires explicit rules defining how fields are grouped into domains.
     *
     * @defaultValue `false`
     */
    domains?: DomainGroupingConfig | false | undefined
  } | undefined
  /**
   * Esoteric options that are not designed for use by regular users and use-cases.
   */
  advanced?: {
    /**
     * For large schemas an extends clause on interface definitions can lead to hitting TypeScript's depth limit e.g.:
     *
     * ```
     * Excessive stack depth comparing types 'topic' and 'OutputField<string, InputFields | null, InlineType, NamedOutputTypes>'
     * ```
     *
     * Enabling this can help debug generated code because it makes TypeScript check that the generated types adhere to the expected
     * schema types.
     *
     * @defaultValue `false`
     */
    schemaInterfaceExtendsEnabled?: boolean | undefined
  } | undefined
}

export interface InputIntrospectionOptions extends IntrospectionOptions {
  /**
   * Whether to include descriptions in the introspection result.
   * @defaultValue `true`
   */
  descriptions?: boolean
  /**
   * Whether to include `specifiedByURL` in the introspection result.
   * @defaultValue `true`
   */
  specifiedByUrl?: boolean
  /**
   * Whether to include `isRepeatable` flag on directives.
   * @defaultValue `true`
   */
  directiveIsRepeatable?: boolean
  /**
   * Whether to include `description` field on schema.
   * @defaultValue `true`
   */
  schemaDescription?: boolean
  /**
   * Whether target GraphQL server support deprecation of input values.
   *
   * By default an attempt will be made to introspect this information
   * and if it fails then fallback to false for this option.
   */
  inputValueDeprecation?: boolean
  /**
   * Whether target GraphQL server supports `@oneOf` input objects.
   *
   * By default an attempt will be made to introspect this information
   * and if it fails then fallback to false for this option.
   */
  oneOf?: boolean
}

export interface ConfigInitLibraryPaths {
  client?: string
  schema?: string
  scalars?: string
  utilitiesForGenerated: string
  extensionTransportHttp: string
  extensionDocumentBuilder: string
}

export type LibraryPathsKeys = keyof ConfigInitLibraryPaths

export const libraryPathKeys = {
  client: `client`,
  scalars: `scalars`,
  schema: `schema`,
  utilitiesForGenerated: `utilitiesForGenerated`,
  extensionTransportHttp: `extensionTransportHttp`,
  extensionDocumentBuilder: `extensionDocumentBuilder`,
} satisfies Record<LibraryPathsKeys, LibraryPathsKeys>

/**
 * Configuration for domain-based method organization.
 */
export interface DomainGroupingConfig {
  /**
   * Rules for organizing fields into domain namespaces.
   * Rules are evaluated in order. By default, fields can match multiple rules.
   */
  rules: FieldGroupingRule[]
  /**
   * How to handle method name conflicts when merging sub-namespaces.
   *
   * When multiple sub-namespaces (e.g., `pokemon.query` and `pokemon.list`)
   * are merged into a single property (e.g., `pokemon`), conflicts may occur
   * if they both define methods with the same name.
   *
   * Policies:
   * - `'fail'`: Throw an error on conflict (default)
   * - `'merge'`: Auto-increment conflicting names (e.g., `get` → `get`, `get2`) [TODO: Not yet implemented]
   * - `'drop'`: Keep only the first occurrence, drop duplicates [TODO: Not yet implemented]
   *
   * @defaultValue `'fail'`
   */
  onMergeConflict?: 'fail' | 'merge' | 'drop'
}

/**
 * Rule for organizing a root field into a namespace-based method.
 */
export interface FieldGroupingRule {
  /**
   * Pattern to match against field names. Can be a string (exact match) or RegExp.
   *
   * When using RegExp, capture groups can be referenced in `path` and `methodName`.
   */
  pattern: string | RegExp
  /**
   * The namespace path to organize this field under.
   *
   * Can be:
   * - String: `'args.no'` creates namespace `$.args.no.*` (dot prefix is implied)
   * - String with explicit prefix: `'.args.no'` same as above
   * - String: `'api.v2.pokemon'` for nested paths → `$.api.v2.pokemon.*`
   * - String: `'.'` for root level → `$.*`
   * - Array: `['pokemon', 'poke']` creates aliases - multiple namespaces with the same methods
   * - Null: Discard field (don't generate method, suppress warnings)
   *
   * When `pattern` is a RegExp, you can reference capture groups using `$name` or `$1` syntax.
   *
   * @example
   * ```ts
   * // Single namespace
   * { pattern: 'pokemonByName', path: 'pokemon' }
   * // → graffle.$.pokemon.pokemonByName
   *
   * // Nested namespace (dot-notation)
   * { pattern: 'pokemonByName', path: 'api.v2.pokemon' }
   * // → graffle.$.api.v2.pokemon.pokemonByName
   *
   * // Namespace aliases (array)
   * { pattern: 'pokemonByName', path: ['pokemon', 'poke'] }
   * // → graffle.$.pokemon.pokemonByName AND graffle.$.poke.pokemonByName
   *
   * // Root-level
   * { pattern: 'pokemonByName', path: '.' }
   * // → graffle.$.pokemonByName
   *
   * // Discard field
   * { pattern: /legacy/, path: null }
   * // → Not generated, no warnings
   *
   * // With named capture group
   * { pattern: /^(?<resource>\w+)ByName$/, path: '$resource' }
   * // pokemonByName → graffle.$.pokemon.*
   *
   * // With indexed capture group
   * { pattern: /^(\w+)ByName$/, path: '$1' }
   * // trainerByName → graffle.$.trainer.*
   * ```
   */
  path?: string | string[] | null
  /**
   * The method name(s) to use within the namespace.
   *
   * Can be:
   * - String: Single method name (can include capture group references when `pattern` is RegExp)
   * - Array: Multiple method names (creates aliases)
   * - Function: Receives fieldName, operationType, and optionally the RegExp match object
   *
   * @example
   * ```ts
   * // Single name
   * methodName: 'getOne'
   *
   * // Multiple names (aliases)
   * methodName: ['getOne', 'get', 'find']
   *
   * // With capture groups
   * { pattern: /^pokemonBy(\w+)$/, methodName: 'getBy$1' }
   * // pokemonByName → getByName
   *
   * // Function without captures
   * methodName: (fieldName, operationType) =>
   *   operationType === 'query' ? 'get' : 'create'
   *
   * // Function with captures
   * methodName: (fieldName, operationType, match) =>
   *   match?.groups?.action === 'add' ? 'create' : 'update'
   * ```
   */
  methodName?:
    | string
    | string[]
    | ((
      fieldName: string,
      operationType: 'query' | 'mutation',
      match?: RegExpExecArray,
    ) => string)
  /**
   * Whether this rule should consume the field, preventing it from matching subsequent rules.
   *
   * - `false` (default): Field continues to subsequent rules and can match multiple
   * - `true`: Stop processing this field after match
   * - `true` + `path: null`: Discard field and hide from "unmatched field" warnings
   *
   * @defaultValue `false`
   *
   * @example
   * ```ts
   * // Multi-categorization (default)
   * { pattern: /^date/, path: 'feat.date' }
   * { pattern: /^date/, path: 'type.scalar' }
   * // dateField appears in both feat.date AND type.scalar
   *
   * // First-match-wins with consume
   * { pattern: 'specificField', path: 'special', consume: true }
   * { pattern: /Field/, path: 'generic' }
   * // specificField only in 'special', otherField in 'generic'
   *
   * // Discard and suppress warnings
   * { pattern: /^internal/, path: null, consume: true }
   * // internalField is hidden, no warnings
   * ```
   */
  consume?: boolean
}
