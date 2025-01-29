import { Transport } from '../../../src/entrypoints/main.js'

export const ATransportBuilder = Transport(`ATransport`)
  .pack({ run: () => ({}) })
  .exchange({ run: () => ({}) })
  .unpack({ run: () => ({}) })

export type ATransportBuilder = typeof ATransportBuilder

export const ATransport = ATransportBuilder.return()

export type ATransport = typeof ATransport
