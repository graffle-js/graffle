/**
 * This example shows how to use the `fetch` slot on `exchange` hook.
 */
import { Graffle } from 'graffle'
import { publicGraphQLSchemaEndpoints, show } from '../$/helpers.js'

const graffle = Graffle
  .create()
  .transport({ url: publicGraphQLSchemaEndpoints.Pokemon })
  .anyware(async ({ exchange }) => {
    return await exchange({
      using: {
        fetch: () => {
          return new Response(JSON.stringify({ data: { trainers: [{ name: `Jason` }] } }))
        },
      },
    })
  })

const result = await graffle.gql`
  query {
    trainers {
      name
    }
  }
`.send()

show(result)
