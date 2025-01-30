import { Transport } from '../../../src/entrypoints/main.js'

// ----------------------------
// ATransportBuilder
// ----------------------------

export const ATransportBuilder = Transport(`ATransport`)
  .configurator($ => $.input<{ a?: number }>())
  .pack({ run: () => ({}) })
  .exchange({ run: () => ({}) })
  .unpack({ run: () => ({}) })

export type ATransportBuilder = typeof ATransportBuilder

export const ATransport = ATransportBuilder.return()

export type ATransport = typeof ATransport

// ----------------------------
// BTransportBuilder
// ----------------------------

export const BTransportBuilder = Transport(`BTransport`)
  .configurator($ => $.input<{ b?: string }>())
  .pack({ run: () => ({}) })
  .exchange({ run: () => ({}) })
  .unpack({ run: () => ({}) })

export type BTransportBuilder = typeof BTransportBuilder

export const BTransport = BTransportBuilder.return()

export type BTransport = typeof BTransport
