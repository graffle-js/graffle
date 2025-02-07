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

// -------------------------------
// RequiredConfigurationTransport
// -------------------------------

export const RequiredConfigurationTransportBuilderA = Transport(`RequiredConfigurationTransportA`)
  .configurator($ => $.input<{ a?: string }>())
  .pack({ run: (input) => input })
  .exchange({ run: (input) => input })
  .unpack({ run: (input) => ({ ...input, result: { data: {} } }) })

export type RequiredConfigurationTransportBuilderA = typeof RequiredConfigurationTransportBuilderA

export const RequiredConfigurationTransportA = RequiredConfigurationTransportBuilderA.return()

export type RequiredConfigurationTransportA = typeof RequiredConfigurationTransportA

// -------------------------------
// RequiredConfigurationTransportB
// -------------------------------

export const RequiredConfigurationTransportBuilderB = Transport(`RequiredConfigurationTransportB`)
  .configurator($ => $.input<{ b?: string }>())
  .pack({ run: (input) => input })
  .exchange({ run: (input) => input })
  .unpack({ run: (input) => ({ ...input, result: { data: {} } }) })

export type RequiredConfigurationTransportBuilderB = typeof RequiredConfigurationTransportBuilderB

export const RequiredConfigurationTransportB = RequiredConfigurationTransportBuilderB.return()

export type RequiredConfigurationTransportB = typeof RequiredConfigurationTransportB
