import type { Extension } from '../../extension/__.js'
import { create } from '../../extension/extension.js'
import type { TypeHooksEmpty } from '../../extension/TypeHooks.js'
import type { Anyware } from '../../lib/anyware/__.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { print } from '../../lib/grafaid/document.js'
import { execute } from '../../lib/grafaid/execute.js'
import type { PartialOrUndefined } from '../../lib/prelude.js'
import type { RequestPipeline } from '../../requestPipeline/RequestPipeline.js'

export interface TransportMemoryConstructor {
  <$ConfigInit extends ConfigInit = ConfigInitEmpty>(
    configInit?: $ConfigInit,
  ): TransportMemory<$ConfigInit>
}

export interface Configuration {
  schema: Grafaid.Schema.Schema
}

export type ConfigInit = PartialOrUndefined<Configuration>

export interface ConfigInitEmpty {}

export interface TransportMemory<$ConfigInit extends ConfigInit = ConfigInitEmpty> extends Extension {
  name: `TransportMemory`
  config: Configuration
  configInit: $ConfigInit
  transport: {
    name: 'memory'
    config: Configuration
    configInit: $ConfigInit
    configDefaults: PartialOrUndefined<Configuration>
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
  normalizeConfig: (input?: { schema?: Grafaid.Schema.Schema }) => ({
    schema: input?.schema ?? undefined,
  }),

  create({ config }) {
    return {
      transport(create) {
        return create(`memory`)
          .config<{ schema: Grafaid.Schema.Schema }>()
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
