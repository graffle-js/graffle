/**
 * This example shows how to use the `searchParams` slot on the `pack` hook.
 */
import { Graffle } from '../../src/entrypoints/main.js'
import { publicGraphQLSchemaEndpoints, show } from '../$/helpers.js'

const graffle = Graffle
  .create({ schema: publicGraphQLSchemaEndpoints.Pokemon, transport: { methodMode: `getReads` } })
  .anyware(async ({ pack }) => {
    return await pack({
      using: {
        searchParams: (graphqlRequest) => {
          return {
            query: graphqlRequest.query,
            operationName: `getPokemons`,
          }
        },
      },
    })
  })

const result = await graffle.gql`
    query getTrainers {
      trainers { name }
    }
    query getPokemons {
      pokemons { name }
    }
  `
  .send(`getTrainers`)

show(result)
