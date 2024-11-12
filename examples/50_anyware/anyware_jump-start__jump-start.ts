/**
 * This example shows how you can jump start your anyware into any hook.
 * This is more succinct than having to manually write each hook execution
 * until your reach your desired one.
 */
import { Graffle } from '../../src/entrypoints/main.js'
import { publicGraphQLSchemaEndpoints } from '../$/helpers.js'

Graffle
  .create({ schema: publicGraphQLSchemaEndpoints.Pokemon })
  // Notice how we **start** with the `exchange` hook, skipping the `encode` and `pack` hooks.
  .anyware(async ({ exchange }) => {
    //              ^^^^^^^^
    if (exchange.input.transportType !== `http`) return exchange()

    const mergedHeaders = new Headers(exchange.input.request.headers)
    mergedHeaders.set(`X-Custom-Header`, `123`)

    const { unpack } = await exchange({
      input: {
        ...exchange.input,
        headers: mergedHeaders,
      },
    })
    const { decode } = await unpack()
    const result = await decode()
    return result
  })
