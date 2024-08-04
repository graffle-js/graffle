/* eslint-disable */

import { CountriesClient } from './generated-clients/countries/__.js'

// todo: if used introspection query to get schema, then default schema to that URL.
// todo: https://github.com/jasonkuhrt/graphql-request/issues/1015
const countriesClient = CountriesClient.create({ schema: `https://countries.trevorblades.com/graphql` })
  .use({
    name: `CustomFetch`,
    anyware: async ({ exchange }) => {
      return await exchange({
        using: {
          fetch: async () => {
            return new Response(JSON.stringify({ data: { countries: [{ name: `Canada Mocked!` }] } }))
          },
        },
      })
    },
  })

const countries = await countriesClient.query.countries({ name: true })

console.log(countries)
