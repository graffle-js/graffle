/**
 * TODO: These tests need to be rewritten for the new builder API.
 *
 * The old API used .send() on a DocumentController. The new API uses operation methods on a GqlBuilder.
 * These tests extensively check TypedDocumentNode type inference with various variable configurations,
 * but don't have explicit operation names which makes them hard to adapt to the new API.
 *
 * Options for rewriting:
 * 1. Add operation names to all test documents
 * 2. Use .$send() with inferred operation names
 * 3. Focus on testing the builder's operation method types instead
 */

import type { Grafaid } from '#lib/grafaid'
import type { Context } from '#src/context/$.js'
import { ATransport, RequiredConfigurationTransportA, RequiredConfigurationTransportB } from '#test/fixtures/transports'
import { g0 } from '#test/helpers'
import { Ts } from '@wollybeard/kit'

const g1 = g0.transport(ATransport)
const g2 = g0.transport(RequiredConfigurationTransportA).transport(RequiredConfigurationTransportB)

type DData = { id: 0 }

//
// Preflight checks still work
//

// Not available if no transports registered
Ts.Test.exact<Context.Configuration.Check.Errors.PreflightCheckNoTransportsRegistered>()(g0.gql)
// dprint-ignore
// Not available if current transport not ready
Ts.Test.exact<Context.Configuration.Check.Errors.PreflightCheckTransportNotReady<RequiredConfigurationTransportA['name']>>()(g2.gql)
// dprint-ignore
// ... Reflects name of currently selected transport
Ts.Test.exact<Context.Configuration.Check.Errors.PreflightCheckTransportNotReady<RequiredConfigurationTransportB['name']>>()(g2.transport(RequiredConfigurationTransportB.name).gql)

// TODO: Add tests for the new builder API with operation methods
