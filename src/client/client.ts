import type { Anyware } from '#lib/anyware'
import type { TypeFunction } from '#lib/type-function'
import type { Context } from '#src/context/context.js'
import { type ContextEmpty, contextEmpty } from '#src/context/ContextEmpty.js'
import type { AddAndApplyOne } from '#src/context/fragments/extensions/reducers/addAndApplyOne.js'
import { graffleMappedResultToRequest } from '#src/extensions/DocumentBuilder/methods-instance/requestMethods.js'
import { Select } from '#src/docpar/object/Select/$.js'
import { SelectionSetGraphqlMapper } from '#src/docpar/object/SelectGraphQLMapper/$.js'
import { getOperationType } from '#src/lib/grafaid/document.js'
import type { Exact } from '#src/lib/prelude.js'
import type { RequestPipeline } from '#src/requestPipeline/RequestPipeline.js'
import { type ContextFragment, ContextFragments } from '#src/types/ContextFragment.js'
import { Str } from '@wollybeard/kit'
import { Configuration } from '../context/fragments/configuration/$.js'
import { Extensions } from '../context/fragments/extensions/$.js'
import type { Extension } from '../context/fragments/extensions/dataType/$.js'
import { Properties } from '../context/fragments/properties/$.js'
import { RequestInterceptors } from '../context/fragments/requestInterceptors/$.js'
import { Scalars } from '../context/fragments/scalars/$.js'
import { Transports } from '../context/fragments/transports/$.js'
import { createDocumentSender } from './methods/gql/DocumentSender.js'
import { GqlMethod } from './methods/gql/gql.js'
import { ScalarMethod } from './methods/scalars.js'
import { TransportMethod } from './methods/transport.js'
import { sendRequest } from './send.js'

export type ClientEmpty = Client<ContextEmpty>

export interface Client_justContext {
  _: Context
}

export type Client<
  $Context extends Context = Context,
  __ =
    & ClientBase<$Context>
    & $Context['properties']['static']
    // This will prevent buggy extensions from blowing up the whole client.
    // todo: if 'any' is returned by this then fallback to a type level warning etc.
    & Properties.RunPropertiesComputers<$Context>,
> = __

export interface ClientBase<$Context extends Context> {
  /**
   * Internal client context state.
   *
   * Contains the accumulated configuration, registered transports, extensions, scalars,
   * and other internal state. This property is primarily for internal use and debugging.
   *
   * **Note**: In a future version, this property may be hidden by default and only
   * accessible when debug mode is enabled.
   */
  _: $Context
  /**
   * Execute a GraphQL document using GraphQL syntax.
   *
   * Returns a builder with operation methods. Each operation in the document becomes a method on the builder,
   * and you can also use the `.$send()` method to execute operations by name.
   *
   * @example
   * ```ts
   * // Execute via operation method
   * const builder = graffle.gql('query getPokemons { pokemons { name } }')
   * const data = await builder.getPokemons()
   * ```
   *
   * @example
   * ```ts
   * // Execute with variables using operation method
   * const builder = graffle.gql(`
   *   query getPokemons($type: PokemonType!) {
   *     pokemons(filter: { type: $type }) { name }
   *   }
   * `)
   * const data = await builder.getPokemons({ type: 'electric' })
   * ```
   *
   * @example
   * ```ts
   * // Execute via .$send() method
   * const data = await builder.$send('getPokemons', { type: 'electric' })
   * ```
   */
  gql: GqlMethod<$Context>
  /**
   * Register a custom scalar codec for encoding and decoding GraphQL scalar values.
   *
   * Scalars must be registered before they can be used in queries. The codec provides
   * `encode` and `decode` functions to transform values between JavaScript and GraphQL
   * representations.
   *
   * **Immutability**: Returns a new client instance. The original client is not modified.
   * If the operation results in no effective change, the same instance is returned for performance.
   *
   * @example
   * ```ts
   * const graffle = Graffle
   *   .create()
   *   .scalar('Date', {
   *     encode: (value: Date) => value.toISOString(),
   *     decode: (value: string) => new Date(value)
   *   })
   * ```
   *
   * @example
   * ```ts
   * // Using Schema.Scalar helper
   * import { Schema } from 'graffle'
   *
   * const DateScalar = Schema.Scalar.create('Date', {
   *   encode: (value: Date) => value.toISOString(),
   *   decode: (value: string) => new Date(value)
   * })
   *
   * const graffle = Graffle.create().scalar(DateScalar)
   * ```
   */
  scalar: undefined extends $Context['configuration']['schema']['current']['map']
    ? ScalarMethod.TypeErrorMissingSchemaMap
    : ScalarMethod<$Context>
  /**
   * Configure or change the transport layer used for GraphQL requests.
   *
   * This method has three distinct behaviors depending on what you pass:
   *
   * ## 1. Add Transport (Transport Object/Builder)
   *
   * Pass a Transport or TransportBuilder object to register a new transport type.
   * - The **first** transport registered automatically becomes the current transport
   * - **Subsequent** transports are added to the registry but do NOT become current
   * - **Error**: Cannot register a transport with a duplicate name (type error + runtime error)
   *
   * ## 2. Configure Current Transport (Configuration Object)
   *
   * Pass a configuration object to update the current transport's settings.
   * - Only available after at least one transport is registered
   * - Empty config `{}` is a **no-op** (returns the same instance)
   * - Updates transport-specific options like URL, headers, etc.
   *
   * ## 3. Switch Transport (Transport Name String)
   *
   * Pass a transport name to switch to a different registered transport.
   * - Only available after transports are registered
   * - Optionally provide configuration as a second parameter
   * - Switching to current transport without config is a **no-op** (returns the same instance)
   *
   * **Immutability**: Returns a new client instance. The original client is not modified.
   * If the operation results in no effective change, the same instance is returned for performance.
   *
   * @example
   * ```ts
   * // Add first transport (becomes current)
   * const graffle = Graffle
   *   .create()
   *   .transport({ url: 'https://api.example.com/graphql' })
   * ```
   *
   * @example
   * ```ts
   * // Add second transport (doesn't become current)
   * const graffle2 = graffle.transport(WebSocketTransport)
   * // Current is still HTTP
   * ```
   *
   * @example
   * ```ts
   * // Configure current transport
   * const graffle3 = graffle.transport({
   *   headers: { Authorization: 'Bearer token123' }
   * })
   * ```
   *
   * @example
   * ```ts
   * // Switch to registered transport by name
   * const graffle4 = graffle2.transport('WebSocketTransport')
   * ```
   *
   * @example
   * ```ts
   * // Switch and configure simultaneously
   * const graffle5 = graffle2.transport('HttpTransport', {
   *   url: 'https://new-api.example.com/graphql'
   * })
   * ```
   */
  transport: TransportMethod<$Context>
  /**
   * Add custom properties or methods to the client instance.
   *
   * Properties can be static values or computed functions that receive the client context.
   * Computed properties are recalculated each time the client is copied (e.g., when chaining methods).
   *
   * **Immutability**: Returns a new client instance. The original client is not modified.
   * If the operation results in no effective change, the same instance is returned for performance.
   *
   * @example
   * ```ts
   * // Add static properties
   * const graffle = Graffle
   *   .create()
   *   .properties({
   *     customMethod: () => console.log('Hello'),
   *     apiVersion: 'v1'
   *   })
   *
   * graffle.customMethod() // 'Hello'
   * graffle.apiVersion // 'v1'
   * ```
   *
   * @example
   * ```ts
   * // Add computed properties
   * const graffle = Graffle
   *   .create()
   *   .properties(({ client, context }) => ({
   *     currentTransport: context.transports.current
   *   }))
   * ```
   */
  // todo have the client type be passed through too? Using `this` from parent?
  properties: <$Properties extends Properties.Properties>(
    properties: $Properties | Properties.PropertiesComputer<$Context, $Properties>,
  ) => Client<
    {
      [_ in keyof $Context]: _ extends 'properties' ? Properties.Add<
          $Context,
          $Properties extends Properties.PropertiesComputer$Func ? {} : $Properties,
          $Properties extends Properties.PropertiesComputer$Func ? [$Properties] : []
        >
        : $Context[_]
    }
  >

  /**
   * Add an extension to the client to enhance its functionality.
   *
   * Extensions can add new methods, modify behavior, or integrate additional features.
   * Common extensions include DocumentBuilder for type-safe query building and SchemaErrors
   * for enhanced error handling.
   *
   * **Immutability**: Returns a new client instance. The original client is not modified.
   * If the operation results in no effective change, the same instance is returned for performance.
   *
   * @example
   * ```ts
   * import { DocumentBuilder } from 'graffle/extensions/document-builder'
   *
   * const graffle = Graffle
   *   .create()
   *   .transport({ url: 'https://api.example.com/graphql' })
   *   .use(DocumentBuilder())
   *
   * // Now you can use document builder methods
   * const data = await graffle.document({ query: { ... } }).send()
   * ```
   *
   * @example
   * ```ts
   * import { SchemaErrors } from 'graffle/extensions/schema-errors'
   *
   * const graffle = Graffle
   *   .create()
   *   .use(SchemaErrors())
   * ```
   */
  use: <extension extends Extension.Data>(extension: extension) => Client<AddAndApplyOne<$Context, extension>>
  /**
   * Add an interceptor to the request pipeline for cross-cutting concerns.
   *
   * Interceptors (called "anyware") allow you to intercept and modify requests at various stages,
   * such as adding authentication headers, logging, error handling, or retrying failed requests.
   *
   * **Immutability**: Returns a new client instance. The original client is not modified.
   * If the operation results in no effective change, the same instance is returned for performance.
   *
   * @example
   * ```ts
   * // Add authentication header
   * const graffle = Graffle
   *   .create()
   *   .anyware(async ({ pack }) => {
   *     if (pack.input.transportType !== 'http') return pack()
   *     return pack({
   *       input: {
   *         ...pack.input,
   *         headers: { Authorization: 'Bearer token123' }
   *       }
   *     })
   *   })
   * ```
   *
   * @example
   * ```ts
   * // Add request logging
   * const graffle = Graffle
   *   .create()
   *   .anyware(async ({ pack }) => {
   *     console.log('Sending request:', pack.input)
   *     const result = await pack()
   *     console.log('Response:', result)
   *     return result
   *   })
   * ```
   */
  anyware: (
    interceptor: Anyware.Interceptor.InferFromPipeline<
      Anyware.Pipeline.InferFromDefinition<$Context['requestPipelineDefinition']>
    >,
  ) => Client<$Context>
  /**
   * Configure the client with various settings.
   *
   * This method allows you to customize client behavior such as output format (envelope, errors),
   * schema mapping, and extension-specific configuration.
   *
   * **Immutability**: Returns a new client instance. The original client is not modified.
   * If the operation results in no effective change, the same instance is returned for performance.
   *
   * @example
   * ```ts
   * // Configure output handling
   * const graffle = Graffle
   *   .create()
   *   .with({
   *     output: {
   *       envelope: true,
   *       errors: { execution: 'return' }
   *     }
   *   })
   * ```
   *
   * @example
   * ```ts
   * // Configure schema
   * const graffle = Graffle
   *   .create()
   *   .with({
   *     schema: {
   *       map: schemaMap
   *     }
   *   })
   * ```
   */
  with: <
    const configurationInput extends CalcConfigurationInputForContext<$Context>,
  >(configurationInput: configurationInput) => Client<
    // @ts-expect-error Non-index type being used
    Configuration.Add<$Context, configurationInput>
  >
}

export type ExtensionChainableRegistry = {
  [name: string]: ExtensionChainable
}

export interface ExtensionChainable extends TypeFunction {}

export type ExtensionChainableArguments = [Context, object, ExtensionChainableRegistry]

// Almost identical to `with` except that input is optional.
// dprint-ignore
/**
 * Create a new Graffle client instance.
 *
 * This is the entry point for building a GraphQL client. You can optionally provide
 * initial configuration for output handling, schema mapping, or other settings.
 *
 * All configuration can also be added later using the {@link ClientBase.with} method.
 *
 * @example
 * ```ts
 * import { Graffle } from 'graffle'
 *
 * // Create with no configuration
 * const graffle = Graffle.create()
 * ```
 *
 * @example
 * ```ts
 * // Create with initial configuration
 * const graffle = Graffle.create({
 *   output: {
 *     envelope: true,
 *     errors: { execution: 'return' }
 *   }
 * })
 * ```
 */
export type Create<$Context extends Context = ContextEmpty> =
  <
    const configurationInput extends CalcConfigurationInputForContext<$Context>,
  >(configurationInput?: Exact<configurationInput, CalcConfigurationInputForContext<$Context>>) =>
    Client<
      // @ts-expect-error: Is missing standard configurators
      Configuration.Add<$Context, configurationInput>
    >

export const createConstructorWithContext = <$Context extends Context>(
  context: $Context,
): Create<$Context> =>
(configurationInput) => {
  const configurationInput_ = configurationInput as undefined | Configuration.Index.Input
  const newContext = configurationInput_
    ? ContextFragments.merge(
      context,
      Configuration.add(context, configurationInput_),
    )
    : context
  return createWithContext(newContext) as any
}

/**
 * Create a new Graffle client instance.
 *
 * @see {@link Create} for detailed documentation and examples.
 */
export const create: Create = createConstructorWithContext(contextEmpty)

export const createWithContext = <$Context extends Context>(
  context: $Context,
): Client<$Context> => {
  // todo remove null input?
  const copy = (fragment: null | ContextFragment) => {
    const newContext = fragment === null ? context : ContextFragments.merge(context, fragment) as Context // todo no cast
    if (newContext === context) return client
    return createWithContext(newContext) as any
  }

  const client: Client<$Context> = {
    ...({} as Client<$Context>),
    _: context,
    anyware(interceptor) {
      const interceptor_ = interceptor as any as RequestPipeline.BaseInterceptor
      return copy(RequestInterceptors.add(context, { static: [interceptor_], computed: [] }))
    },
    properties(properties) {
      const isComputed = typeof properties === `function`
      const static_ = !isComputed
        ? properties
        : undefined
      const computed = isComputed
        ? [properties]
        : undefined
      return copy(Properties.add(context, { static: static_, computed: computed as any }))
    },
    use(extension) {
      return copy(Extensions.addAndApplyMany(context, [extension]))
    },
    scalar: ((...args: ScalarMethod.Arguments) => {
      const scalar = ScalarMethod.normalizeArguments(args)
      return copy(Scalars.contextAdd(context, scalar))
    }) as any,
    with(configurationInput) {
      const configurationInput_ = configurationInput as Configuration.Index.Input
      return copy(Configuration.add(context, configurationInput_))
    },
    transport: ((...args: TransportMethod.Arguments) => {
      const input = TransportMethod.normalizeArguments(args)
      // let fragment2: ContextFragmentTransports
      switch (input[0]) {
        case TransportMethod.overloadCase.configureCurrent: {
          return copy(Transports.configureCurrentOrThrow(context, input[1]))
        }
        case TransportMethod.overloadCase.setCurrent: {
          return copy(Transports.setCurrentAndOptionallyConfigure(context, input[1], input[2]))
        }
        case TransportMethod.overloadCase.addType: {
          return copy(Transports.addMany(context, [input[1]]))
        }
      }
    }) as any,
    gql: ((...args: GqlMethod.Arguments) => {
      // Reject template literal syntax at runtime
      if (Str.Tpl.isCallInput(args)) {
        throw new Error(
          `Template literal syntax is not supported. Use call expression syntax instead:\n`
            + `  wrong   -> graffle.gql\`query { id }\`\n`
            + `  correct -> graffle.gql('query { id }')`,
        )
      }

      const normalized = GqlMethod.normalizeArguments(args)

      return createDocumentSender(async (operationName: string | undefined, variables?: any) => {
        if (!context.transports.current) throw new Error(`No transport selected`)

        let request
        if (normalized.type === 'object') {
          // For document objects: use the full SelectionSetGraphqlMapper flow
          const documentNormalized = Select.Document.normalizeOrThrow(normalized.document)
          const encoded = SelectionSetGraphqlMapper.toGraphQL(documentNormalized, {
            sddm: context.configuration.schema.current.map,
            scalars: context.scalars.map,
          })

          // Reuse the shared helper that handles variable extraction and operation analysis
          request = graffleMappedResultToRequest(encoded, operationName)
        } else {
          // For TypedDocumentLike (strings): manually build the request
          const query = normalized.document as string
          const operationType = getOperationType({ query, operationName })
          if (!operationType) throw new Error(`Could not get operation type`)

          request = {
            operation: operationType,
            query,
            variables,
            operationName,
          }
        }

        return sendRequest(context, request)
      })
    }) as any,
  }

  Object.assign(client, context.properties.static)

  context.properties.computed.forEach(propertiesComputer => {
    Object.assign(
      client,
      propertiesComputer({
        configuration: context.configuration,
        context,
        client: client as any,
      }),
    )
  })

  // todo: access computed properties from context
  context.extensions.forEach(extension => {
    // const configurationIndex = context.configuration as ConfigurationIndex
    // const configurationIndexEntry = configurationIndex[_.name]
    // if (!configurationIndexEntry && _.configurator) throw new Error(`Configuration entry for ${_.name} not found`)

    const propertiesComputed = extension.propertiesComputed.reduce((acc, propertiesComputer) => {
      return {
        ...acc,
        ...propertiesComputer({
          // configuration: configurationIndexEntry?.current,
          configuration: context.configuration,
          client: client as any,
          context,
        }),
      }
    }, {})

    Object.assign(client, propertiesComputed)
  })

  return client
}

export type CalcConfigurationInputForContext<$Context extends Context> = {
  readonly [_ in keyof $Context['configuration']]?:
    // @ts-expect-error Non-index type being used
    $Context['configuration'][_]['configurator']['input']
}
