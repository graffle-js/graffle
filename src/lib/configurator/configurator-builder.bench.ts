import { bench } from '@ark/attest'
import { Configurator } from './configurator.js'

// ==============================================================================
// Configurator Builder API Type Performance
// ==============================================================================
//
// This measures the type cost of using the builder API:
// Configurator().input<T>().normalized<N>().default(d).return()
//
// Result: 114 instantiations vs 57 for direct type creation (2x overhead)
//
// The builder adds cost from:
// 1. Builder interface types
// 2. Progressive type refinement through method chaining
// 3. Type conversions in .return()
//
// For runtime use this overhead is acceptable, but type-level tests
// should use direct Configurator<T, N, D> creation to avoid this cost.
//
// ==============================================================================

// Test the builder API in isolation
bench('Configurator > builder API', () => {
  const _ = Configurator()
    .input<{ a?: 1 | true }>()
    .normalized<{ a: 1 }>()
    .default({ a: 1 })
    .return()
  return {} as typeof _
}).types([114, 'instantiations']) // 2x more expensive than direct creation
