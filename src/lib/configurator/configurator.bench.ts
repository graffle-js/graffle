import { bench } from '@ark/attest'
import { Configurator } from './configurator.js'

// ==============================================================================
// Configurator Type Performance
// ==============================================================================
//
// This measures the instantiation cost of the Configurator interface itself.
//
// Current cost: ~57 instantiations for basic configurator
//
// Cost drivers:
// 1. Complex $InputResolver generic parameter: ~39 inst (93%)
// 2. Computed normalizedIncremental property: ~30 inst (when accessed)
//
// Optimization potential (see configurator-performance-analysis.md):
// - Remove normalizedIncremental from interface: 57 → ~15 inst (74% reduction)
// - Simplify InputResolver generic: 57 → ~5 inst (91% reduction)
// - Combined: ~90%+ reduction possible
//
// ==============================================================================

// Test configurator creation with simple types
type TestInput = {
  a?: string
  b?: number
}

type TestNormalized = {
  a: string
  b: number
}

type TestDefault = {
  a: 'default'
}

// Benchmark: Creating a Configurator type directly
bench('Configurator > create type', () => {
  const _ = {} as Configurator<TestInput, TestNormalized, TestDefault>
}).types([57, 'instantiations'])

// Benchmark: Builder API - separate file to avoid caching
// Note: Builder has its own benchmark file to measure in isolation
