import { Extension } from '../../../src/entrypoints/extension.js'

// ----------------------------
// ATransportBuilder
// ----------------------------

export const ATransportBuilder = Extension.Transport.create(`ATransport`)
  .configurator($ => $.input<{ a?: number }>().normalized<{ a?: number }>())
  .pack({ run: (input) => input })
  .exchange({ run: (input) => input })
  .unpack({ run: (input) => ({ ...input, result: { data: {} } }) })

export type ATransportBuilder = typeof ATransportBuilder

export const ATransport = ATransportBuilder.return()

export type ATransport = typeof ATransport

// ----------------------------
// BTransportBuilder
// ----------------------------

export const BTransportBuilder = Extension.Transport.create(`BTransport`)
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

export const RequiredConfigurationTransportBuilderA = Extension.Transport.create(`RequiredConfigurationTransportA`)
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

export const RequiredConfigurationTransportBuilderB = Extension.Transport.create(`RequiredConfigurationTransportB`)
  .configurator($ => $.input<{ b?: string }>())
  .pack({ run: (input) => input })
  .exchange({ run: (input) => input })
  .unpack({ run: (input) => ({ ...input, result: { data: {} } }) })

export type RequiredConfigurationTransportBuilderB = typeof RequiredConfigurationTransportBuilderB

export const RequiredConfigurationTransportB = RequiredConfigurationTransportBuilderB.return()

export type RequiredConfigurationTransportB = typeof RequiredConfigurationTransportB
