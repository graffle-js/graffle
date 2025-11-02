import { Extension } from '#graffle/extension'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { execute } from '#src/lib/graphql-kit/execute.js'
import type { RequestPipeline } from '#src/requestPipeline/RequestPipeline.js'
import { Ware } from '@wollybeard/kit'

// ----------------------------
// Configuration
// ----------------------------

export interface ConfigurationNormalized {
  /**
   * The schema to execute documents against.
   */
  schema: GraphqlKit.Schema.Schema
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
    context?: object | (() => object) | undefined
  } | undefined
}

export type ConfigurationInput = Partial<ConfigurationNormalized>

type TransportMemoryConfigurator = Extension.Configurator.Configurator<
  ConfigurationInput,
  ConfigurationNormalized,
  {}
>

// ----------------------------
// Transport
// ----------------------------

export interface RequestPipelineOverload extends Ware.Overload.Data {
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
  request: GraphqlKit.HTTP.RequestConfig
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
  readonly [
    Extension.Transport.Data<
      'memory',
      TransportMemoryConfigurator
    >,
  ],
  undefined
>

export const TransportMemory: TransportMemory = Extension
  .create(`TransportMemory`)
  .transport(
    Extension.Transport.create(`memory`)
      .configurator(
        Extension.Configurator.create()
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
          const graphqlRequest: GraphqlKit.HTTP.RequestConfig = {
            operationName: input.request.operationName,
            variables: input.request.variables,
            query: GraphqlKit.Document.print(input.request.query),
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
            schema: input.transport.schema,
            request: input.request,
            resolverValues: input.transport.resolverValues, // todo: test case that this is passed correctly
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
