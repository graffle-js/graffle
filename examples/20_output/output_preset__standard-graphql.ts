/**
 * This example shows how to configure output to approximate the traditional GraphQL ExecutionResult type.
 */

import { Graffle, Preset } from 'graffle'
import { show } from '../$/show.js'

const graffle = Graffle
  .create({ output: Preset.traditionalGraphqlOutput })
  .transport({ url: `...` })

const result = await graffle.gql(`{ query { thisWillError } }`).send()

show(result)
