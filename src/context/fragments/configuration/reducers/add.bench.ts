import type { ContextEmpty } from '#src/context/ContextEmpty.js'
import { bench } from '@ark/attest'
import type { Configuration } from '../../configuration/$.js'

// ==============================================================================
// Configuration.Add Type Performance
// ==============================================================================
//
// Configuration.Add is expensive because it accesses all three configurators:
// - Output: 385 inst (complex InputResolver generic + normalizedIncremental)
// - Check: 54 inst
// - Schema: 86 inst
// Total configurator overhead: 525 inst (92% of total!)
//
// See configurator-performance-analysis.md for optimization strategies
//
// ==============================================================================

// Baseline: amortize ContextEmpty
type _baseline = ContextEmpty

// Baseline: amortize all three configurators (shows true incremental cost)
type _baseline2 = ContextEmpty['configuration']['output']['configurator']
type _baseline3 = ContextEmpty['configuration']['check']['configurator']
type _baseline4 = ContextEmpty['configuration']['schema']['configurator']

// Configuration.Add with configurators amortized (shows core logic cost)
bench('Configuration.Add (core logic only)', () => {
  type Result = Configuration.Add<ContextEmpty, { output: { defaults: { errorChannel: `return` } } }>
  return {} as Result
}).types([236, 'instantiations']) // Core logic after amortizing configurators
