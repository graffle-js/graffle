import type { ContextEmpty } from '#src/context/ContextEmpty.js'
import { bench } from '@ark/attest'
import { Configuration } from '../context/fragments/configuration/_.js'
import { Transports } from '../context/fragments/transports/_.js'
import type { Client } from './client.js'

// Baseline: amortize the base cost of Client<ContextEmpty>
// Without this baseline, Client<ContextEmpty> costs ~876 instantiations
// The baseline caches the expensive ClientBase interface resolution
type _baseline = Client<ContextEmpty>

// Test: Incremental cost of Client<ContextEmpty> after baseline amortization
// This measures just the marginal cost beyond the base Client interface
bench('Client<ContextEmpty>', () => {
  return {} as Client<ContextEmpty>
}).types([15, 'instantiations'])

// Test: Configuration.Add - applying configuration changes
// This is expensive because:
// - Configurator resolution: ~525 inst (92% of cost!)
//   - Output configurator: 385 inst
//   - Check configurator: 73 inst
//   - Schema configurator: 130 inst
// - Core Configuration.Add logic: ~236 inst
// See: type-performance-investigation.md for full breakdown
bench('Configuration.Add', () => {
  type Result = Client<
    Configuration.Add<ContextEmpty, { output: { defaults: { errorChannel: `return` } } }>
  >
  return {} as Result
}).types([573, 'instantiations'])

// Test: Transports.Configure - setting up transport
// Much cheaper than Configuration.Add because transport configurators are simpler
bench('Transports.Configure', () => {
  type Result = Client<
    Transports.Configure<ContextEmpty, 'http', { url: string }>
  >
  return {} as Result
}).types([121, 'instantiations'])
