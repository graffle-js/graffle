import type { Context } from '../context/context.js'
import { type ContextEmpty, contextEmpty } from '../context/ContextEmpty.js'
import { Configuration } from '../context/fragments/configuration/$.js'
import { Extensions } from '../context/fragments/extensions/$.js'
import type { Extension } from '../context/fragments/extensions/dataType/$.js'
import type { AddAndApplyOne } from '../context/fragments/extensions/reducers/addAndApplyOne.js'
import { Properties } from '../context/fragments/properties/$.js'
import { RequestInterceptors } from '../context/fragments/requestInterceptors/$.js'
import { Scalars } from '../context/fragments/scalars/$.js'
import { Transports } from '../context/fragments/transports/$.js'
import type { Anyware } from '../lib/anyware/$.js'
import { getOperationType } from '../lib/grafaid/document.js'
import type { Exact } from '../lib/prelude.js'
import type { TypeFunction } from '../lib/type-function/$.js'
import type { RequestPipeline } from '../requestPipeline/RequestPipeline.js'
import { type ContextFragment, ContextFragments } from '../types/ContextFragment.js'
import { GqlMethod } from './methods/gql/gql.js'
import { GqlMethodSendMethod } from './methods/gql/send.js'
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
  _: $Context
  /**
   * Execute a GraphQL document using GraphQL syntax.
   *
   * This method accepts a GraphQL document as a string or template literal and returns a document controller
   * that allows you to send the request with {@link DocumentController.send}.
   *
   * For multiple operations in one document, specify the operation name when calling `send()`.
   * For operations with variables, pass them to `send()`.
   *
   * @example
   * ```ts
   * const data = await graffle.gql`{ pokemons { name } }`.send()
   * ```
   *
   * @example
   * ```ts
   * const data = await graffle.gql`
   *   query ($type: PokemonType!) {
   *     pokemons(filter: { type: $type }) { name }
   *   }
   * `.send({ type: 'electric' })
   * ```
   */
  gql: Configuration.Check.Preflight<
    $Context,
    GqlMethod<$Context>
  >
  /**
   * Register a custom scalar codec for encoding and decoding GraphQL scalar values.
   *
   * Scalars must be registered before they can be used in queries. The codec provides
   * `encode` and `decode` functions to transform values between JavaScript and GraphQL
   * representations.
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
   * Use this method to:
   * - Add a new transport type (e.g., HTTP, WebSocket)
   * - Select which registered transport to use
   * - Configure the current or selected transport (e.g., set URL, headers)
   *
   * @example
   * ```ts
   * // Set HTTP transport with URL
   * const graffle = Graffle
   *   .create()
   *   .transport({ url: 'https://api.example.com/graphql' })
   * ```
   *
   * @example
   * ```ts
   * // Configure headers
   * const graffle = Graffle
   *   .create()
   *   .transport({
   *     url: 'https://api.example.com/graphql',
   *     headers: { Authorization: 'Bearer token123' }
   *   })
   * ```
   *
   * @example
   * ```ts
   * // Switch to a different registered transport
   * const graffle = Graffle
   *   .create()
   *   .transport(HttpTransport)
   *   .transport(WebSocketTransport)
   *   .transport('HttpTransport') // Switch back to HTTP
   * ```
   */
  transport: TransportMethod<$Context>
  /**
   * Add custom properties or methods to the client instance.
   *
   * Properties can be static values or computed functions that receive the client context.
   * Computed properties are recalculated each time the client is copied (e.g., when chaining methods).
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
      const { document: query } = GqlMethod.normalizeArguments(args)

      return {
        send: async (...args: GqlMethodSendMethod.Arguments) => {
          if (!context.transports.current) throw new Error(`No transport selected`)

          const { operationName, variables } = GqlMethodSendMethod.normalizeArguments(args)
          const request = {
            query,
            variables,
            operationName,
          }
          const operationType = getOperationType(request)
          if (!operationType) throw new Error(`Could not get operation type`)

          const analyzedRequest = {
            operation: operationType,
            query,
            variables,
            operationName,
          }

          return sendRequest(context, analyzedRequest)
        },
      }
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
