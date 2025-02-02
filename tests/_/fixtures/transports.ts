import { Transport } from '../../../src/entrypoints/main.js'

// ----------------------------
// ATransportBuilder
// ----------------------------

export const ATransportBuilder = Transport(`ATransport`)
  .configurator($ => $.input<{ a?: number }>().normalized<{ a?: number }>())
  .pack({ run: (input) => input })
  .exchange({ run: (input) => input })
  .unpack({ run: (input) => ({ ...input, result: { data: {} } }) })

export type ATransportBuilder = typeof ATransportBuilder

export const ATransport = ATransportBuilder.return()
ATransport.discriminant

export type ATransport = typeof ATransport

// ----------------------------
// BTransportBuilder
// ----------------------------

export const BTransportBuilder = Transport(`BTransport`)
  .configurator($ => $.input<{ b?: string }>().normalized<{ b?: string }>())
  .pack({ run: (input) => input })
  .exchange({ run: (input) => input })
  .unpack({ run: (input) => ({ ...input, result: { data: {} } }) })

export type BTransportBuilder = typeof BTransportBuilder

export const BTransport = BTransportBuilder.return()

export type BTransport = typeof BTransport
