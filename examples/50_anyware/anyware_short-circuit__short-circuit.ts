/**
 * This example shows how you can short circuit your anyware at any hook.
 * This is more succinct than having to manually write each hook execution
 * even past your desired one until the final result.
 */
import { Graffle } from 'graffle'
import { publicGraphQLSchemaEndpoints } from '../$/helpers.js'

Graffle
  .create()
  .transport({ url: publicGraphQLSchemaEndpoints.Pokemon })
  .anyware(async ({ encode }) => {
    const { pack } = await encode()
    const { exchange } = await pack()

    if (exchange.input.transportType !== `http`) return exchange()

    const mergedHeaders = new Headers(exchange.input.request.headers)
    mergedHeaders.set(`X-Custom-Header`, `123`)
    // Notice how we **end** with the `exchange` hook, skipping the `unpack` and `decode` hooks.
    return await exchange({
      input: {
        ...exchange.input,
        request: {
          ...exchange.input.request,
          headers: mergedHeaders,
        },
      },
    })
  })
