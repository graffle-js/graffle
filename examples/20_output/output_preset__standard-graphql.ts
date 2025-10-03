/**
 * This example shows how to configure output to approximate the traditional GraphQL ExecutionResult type.
 */

import { Graffle, Preset } from 'graffle'
import { show } from '../$/show.js'

const graffle = Graffle
  .create({ output: Preset.traditionalGraphqlOutput })
  .transport({ url: `http://localhost:3000/graphql` })
  .anyware(async ({ exchange }) => {
    return exchange({
      input: {
        ...exchange.input,
        request: {
          ...exchange.input.request,
          url: { _tag: 'url', value: new URL('bad') },
        },
      },
    })
  })

const result = await graffle.gql(`{ query { thisWillError } }`).send()

show(result)
