import { Configurator, Extension, Transport } from '../../entrypoints/extension.js'
import type { Anyware } from '../../lib/anyware/_namespace.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { print } from '../../lib/grafaid/document.js'
import { execute } from '../../lib/grafaid/execute.js'
import type { RequestPipeline } from '../../requestPipeline/RequestPipeline.js'

// ----------------------------
// Configuration
// ----------------------------

export interface ConfigurationNormalized {
  /**
   * The schema to execute documents against.
   */
  schema: Grafaid.Schema.Schema
  resolverValues?: {
    /**
     * The value to use for parent (aka. source) on _root_ resolvers.
     *
     * If a function is provided, it will be called before each request to get the root value.
     */
    root?: unknown
    /**
     * The value to use for resolver context during execution.
     *
     * If a function is provided, it will be called before each request to get the context value.
     */
    context?: object | (() => object)
  }
}

export type ConfigurationInput = Partial<ConfigurationNormalized>

type TransportMemoryConfigurator = Configurator<
  ConfigurationInput,
  ConfigurationNormalized,
  {}
>

// ----------------------------
// Transport
// ----------------------------

export interface RequestPipelineOverload extends Anyware.Overload.Data {
  discriminant: {
    name: 'transportType'
    value: 'memory'
  }
  input: ConfigurationNormalized
  inputInit: {}
  steps: {
    pack: {
      name: 'pack'
      slots: {}
      input: PackInput
      output: PackOutput
    }
    exchange: {
      name: 'exchange'
      slots: {}
      input: PackOutput
      output: ExchangeOutput
    }
    unpack: {
      name: 'unpack'
      slots: {}
      input: ExchangeOutput
      output: RequestPipeline.DecodeInput
    }
  }
}

export interface PackInput extends RequestPipeline.PackInput {
  headers?: HeadersInit
}

export interface PackOutput extends Omit<RequestPipeline.PackInput, 'request'> {
  request: Grafaid.HTTP.RequestConfig
}

export interface ExchangeOutput extends PackOutput {}

// ----------------------------
// Extension
// ----------------------------

export type TransportMemory = Extension.Data<
  `TransportMemory`,
  undefined,
  unknown,
  {},
  readonly [],
  Transport<
    'memory',
    TransportMemoryConfigurator
  >,
  undefined
>

export const TransportMemory: TransportMemory = Extension
  .create(`TransportMemory`)
  .transport(
    Transport(`memory`)
      .configurator(
        Configurator()
          .input<ConfigurationInput>()
          .normalized<ConfigurationNormalized>()
          .inputResolver(({ current, input }) => {
            const next = {
              ...current,
            }

            if (input?.schema) next.schema = input.schema

            if (input?.resolverValues) {
              next.resolverValues = {
                ...current?.resolverValues,
                ...input.resolverValues,
              }
            }

            return next
          }),
      )
      .pack({
        run(input) {
          const graphqlRequest: Grafaid.HTTP.RequestConfig = {
            operationName: input.request.operationName,
            variables: input.request.variables,
            query: print(input.request.query),
          }
          return {
            ...input,
            request: graphqlRequest,
          }
        },
      })
      .exchange({
        run: async (input) => {
          const result = await execute({
            // todo: should be type safe
            schema: input.transport.schema,
            request: input.request,
          })
          return {
            ...input,
            result,
          }
        },
      })
      .unpack({
        run(input) {
          return input
        },
      }),
  )
  .return()
