import type { Grafaid } from '../../lib/grafaid/__.js'
import type { Extension } from '../extension/types.js'

export interface InputLint {
  /**
   * Should a warning be raised if the GraphQL schema has a custom scalar defined for which your project has no corresponding custom scalar codec?
   *
   * @defaultValue `true`
   */
  missingCustomScalarCodec?: boolean
}

export interface Input {
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
  name?: string
  /**
   * Control various checks that Graffle performs. For example you could disable the warning about missing custom scalar codecs.
   */
  lint?: InputLint
  /**
   * The directory path which paths will be considered relative to.
   *
   * By default, is the process current working directory.
   */
  currentWorkingDirectory?: string
  /**
   * The schema to use for generation. Can be an existing SDL file on disk, a schema instance already in memory, or an endpoint that will be introspected.
   */
  schema: Grafaid.Schema.Schema | {
    type: 'sdl'
    /**
     * Defaults to the source directory if set, otherwise the current working directory.
     */
    dirOrFilePath?: string
  } | {
    type: 'url'
    url: URL
  }
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
  outputSDL?: boolean | string
  /**
   * Directory path to where the generated code should be output.
   *
   * Defaults to the current working directory.
   */
  outputDirPath?: string
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
  defaultSchemaUrl?: boolean | URL
  /**
   * Directory to look for custom scalar codecs.
   *
   * Defaults to the current working directory.
   */
  sourceDirPath?: string
  /**
   * File path to your custom scalar codecs module.
   *
   * If not set, Graffle will look for a file called `customScalarCodecs.ts` in the project directory.
   */
  customScalarCodecs?: string
  /**
   * Override import paths to graffle package within the generated code.
   * Used by Graffle test suite to have generated clients point to source
   * code. Probably not useful to you.
   */
  libraryPaths?: InputLibraryPaths
  /**
   * Should custom scalars definitions be imported into the generated output?
   */
  customScalars?: boolean
  /**
   * Should the generated code be formatted?
   */
  format?: boolean
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
    noDocPolicy?: 'message' | 'ignore'
  }
  /**
   * Graffle gentime extensions to use. Most Graffle extensions are runtime only but some
   * are or have gentime components.
   */
  extensions?: Extension[]
}

export interface InputLibraryPaths {
  client?: string
  schema?: string
  scalars?: string
  utilitiesForGenerated?: string
}
