/**
 * This example shows how to use the `body` slot on the `pack` hook.
 */
import { Graffle } from '../../src/entrypoints/main.js'
import { publicGraphQLSchemaEndpoints, show } from '../$/helpers.js'

const graffle = Graffle
  .create()
  .transport({ url: publicGraphQLSchemaEndpoints.Pokemon })
  .anyware(async ({ pack }) => {
    return await pack({
      using: {
        body: (graphqlRequest) => {
          return JSON.stringify({
            ...graphqlRequest,
            operationName: `trainers`,
          })
        },
      },
    })
  })

const result = await graffle.gql`
    query pokemons {
      pokemons { name }
    }
    query trainers {
      trainers { name }
    }
  `.send(`pokemons`)

show(result)
