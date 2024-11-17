import { Anyware } from '../../lib/anyware/__.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { print } from '../../lib/grafaid/document.js'
import { execute } from '../../lib/grafaid/execute.js' // todo
import type { RequestPipelineBaseContext } from '../RequestPipeline.js'

export const memoryTransport = Anyware.Extension
  .create<RequestPipelineBaseContext>()
  .overload(overload =>
    overload
      .create({
        discriminant: [`transportType`, `memory`],
      })
      .extendInput<{ schema: Grafaid.Schema.Schema }>()
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
      // todo this should not be needed, default is already a passthrough.
      .step(`unpack`, {
        run: (input) => input,
      })
  )
