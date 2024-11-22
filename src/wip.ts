// import type { Transport } from '../../src/client/context.js'
// import { Graffle } from '../../src/entrypoints/main.js'
// import { publicGraphQLSchemaEndpoints, show } from '../$/helpers.js'

// interface HttpTransport extends Transport {
//   name: 'http'
//   config: {
//     foo: boolean
//   }
// }

// const HttpTransport = (): HttpTransport => ({
//   name: `http` as const,
//   config: {
//     foo: true,
//   },
// })

// // -----------------------------------------------------------------------------

// const graffle = Graffle.create({
//   schema: publicGraphQLSchemaEndpoints.Pokemon,
// })
//   .addTransport(HttpTransport())
//   .transport({ foo: true })
//   .transport(`http`)
//   .transport({ foo: false })

// const data = await graffle.gql`
//   {
//     pokemons {
//       name
//     }
//   }
// `.send()

// show(data)
