/**
 * This example shows how to configure output to approximate the traditional GraphQL ExecutionResult type.
 */

import { Graffle, Preset } from 'graffle'
import { show } from '../$/show.js'

const graffle = Graffle
  .create({ output: Preset.traditionalGraphqlOutput })
  .transport({ url: `http://localhost:3000/graphql` })

// This example demonstrates that invalid GraphQL documents are caught statically at compile-time.
// The field 'query' doesn't exist on the Query type - this error is caught before runtime.
// @ts-expect-error - intentionally invalid document: field 'query' doesn't exist on Query type
const result = await graffle.gql(`{ query { thisWillError } }`).$send()

show(result)
