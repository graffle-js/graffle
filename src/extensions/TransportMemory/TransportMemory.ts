import { createExtension } from '../../extension/extension.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { print } from '../../lib/grafaid/document.js'
import { execute } from '../../lib/grafaid/execute.js'

export const TransportMemory = createExtension({
  name: `TransportMemory`,
  normalizeConfig: (input?: { schema?: Grafaid.Schema.Schema }) => ({
    schema: input?.schema ?? undefined,
  }),
  create: () => {
    return {
      transport: ($) =>
        $
          .create(`memory`)
          .config<{ schema: Grafaid.Schema.Schema }>()
          .configInit<{}>()
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
          }),
    }
  },
})
