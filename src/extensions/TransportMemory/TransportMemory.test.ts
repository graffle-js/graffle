// import { expectTypeOf } from 'vitest'
import { Graffle } from '#graffle'
import { test } from '#test/helpers'
// import { Transport } from '#/types/Transport'

// test(`anyware hooks are typed to memory transport`, () => {
//   Graffle.create({ schema }).anyware(async ({ encode }) => {
//     expectTypeOf(encode.input.transportType).toEqualTypeOf<Transport>()
//     const { pack } = await encode()
//     expectTypeOf(pack.input.transportType).toEqualTypeOf(Transport.memory)
//     const { exchange } = await pack()
//     expectTypeOf(exchange.input.transportType).toEqualTypeOf(Transport.memory)
//     const { unpack } = await exchange()
//     expectTypeOf(unpack.input.transportType).toEqualTypeOf(Transport.memory)
//     // @ts-expect-error any
//     unpack.input.response
//     const { decode } = await unpack()
//     expectTypeOf(decode.input.transportType).toEqualTypeOf(Transport.memory)
//     // @ts-expect-error any
//     decode.input.response
//     const result = await decode()
//     if (!(result instanceof Error)) {
//       // @ts-expect-error any
//       result.response
//     }
//     return result
//   })
// })

// todo this is a client test.
test(`cannot set unknown properties`, ({ schemas: { possible: schema } }) => {
  // todo: This error is poor for the user. It refers to schema not being a URL. The better message would be that headers is not allowed with memory transport.
  // @ts-expect-error headers not allowed with GraphQL schema
  Graffle.create().transport({ schema, headers: { 'x-foo': `bar` } })
})
