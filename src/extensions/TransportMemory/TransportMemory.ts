import type { Extension } from '../../extension/__.js'
import { create } from '../../extension/extension.js'
import type { TypeHooksEmpty } from '../../extension/TypeHooks.js'
import type { Anyware } from '../../lib/anyware/__.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { print } from '../../lib/grafaid/document.js'
import { execute } from '../../lib/grafaid/execute.js'
import type { RequestPipeline } from '../../requestPipeline/RequestPipeline.js'
import type { ConfigurationResolver } from '../../types/ConfigurationResolver.js'

export interface TransportMemoryConstructor {
  <$ConfigurationInit extends ConfigurationInit = ConfigurationInitEmpty>(
    configurationInit?: $ConfigurationInit,
  ): TransportMemory<$ConfigurationInit>
}

export interface Configuration {
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

export type ConfigurationInit = Partial<Configuration>

export interface ConfigurationInitEmpty {}

export interface TransportMemory<$ConfigurationPartial extends Partial<Configuration>> extends Extension {
  name: `TransportMemory`
  config: Configuration
  configInit: $ConfigurationPartial
  transport: {
    name: 'memory'
    configuration: Configuration
    configurationInit: ConfigurationInit
    configurationDefaults: $ConfigurationPartial
    configurationResolver: ConfigurationResolver<
      $ConfigurationPartial,
      Configuration extends $ConfigurationPartial ? Configuration : never
    >
    requestPipelineOverload: RequestPipelineOverload
  }
  typeHooks: TypeHooksEmpty
  onRequest: undefined
  builder: undefined
}

export interface RequestPipelineOverload extends Anyware.Overload {
  discriminant: ['transportType', 'memory']
  input: Configuration
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

export const TransportMemory: TransportMemoryConstructor = create({
  name: `TransportMemory`,
  configurationResolver(currentPartial: Partial<Configuration>, init?: ConfigurationInit) {
    const newPartial: Partial<Configuration> = {
      ...currentPartial,
    }

    if (init?.schema) newPartial.schema = init.schema

    if (init?.resolverValues) {
      newPartial.resolverValues = {
        ...currentPartial?.resolverValues,
        ...init.resolverValues,
      }
    }

    return newPartial
  },
  create({ config }) {
    return {
      transport(create) {
        return create(`memory`)
          .config<Configuration>()
          .configInit<{}>()
          .defaults(config)
          .step(`pack`, {
            run: (input) => {
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
          .step(`exchange`, {
            run: async (input) => {
              const result = await execute(input)
              return {
                ...input,
                result,
              }
            },
          })
          // todo remove (need runtime passthrough logic)
          .step(`unpack`, {
            run: (input) => {
              return input
            },
          })
      },
    }
  },
})
