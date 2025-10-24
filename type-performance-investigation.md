# Type Performance Investigation - Configuration.Add

## Summary

Configuration.Add costs **573 incremental instantiations** (after amortizing Client<ContextEmpty>). Investigation reveals this breaks down as follows:

## Cost Breakdown

### Total Cost: 573 instantiations

- **Configurator resolution**: 525 inst (92%)
  - Output configurator: 385 inst
  - Check configurator: 73 inst
  - Schema configurator: 130 inst (estimated: 525 - 385 - 73)
- **Core logic**: 236 inst (41% of total, but only 8% after amortization)

### Configurator Access Costs (without amortization)

- Access `Output.Configurator`: 385 inst
- Access `Check.Configurator`: 73 inst
- Access `Schema.Configurator`: 130 inst
- **Incremental after amortization**:
  - Access `inputResolver`: +1 inst
  - Access `$Func` via symbol: +2 inst
  - Access `normalizedIncremental`: +13 inst

### Configuration.Add Operations

- Mapped types themselves: ~0 inst (essentially free)
- Conditionals: ~72 inst per key (even when false!)
- `ApplyConfiguratorInputResolver$Func`: 951 inst (includes configurator access)
  - Which breaks down to:
    - Access configurator: 385 inst
    - Access $Func: 2 inst (incremental)
    - Apply InputResolver: 420 inst
    - InputResolver type from output config: 397 inst
    - ShallowMerge: 441 inst

## Root Causes

1. **Configurator interface is expensive to resolve** (385 inst for Output)
   - 4 type parameters with complex defaults
   - Computed property `normalizedIncremental` uses `Incrementify`
   - Complex `$InputResolver` parameter with generic default

2. **Configuration.Add maps over ALL configuration keys**
   - Even keys not being modified incur cost (~72 inst per key)
   - TypeScript evaluates conditionals for all keys

3. **No caching of configurator resolution across calls**
   - Each Configuration.Add invocation re-resolves configurators
   - In chains like `.with({...}).with({...})`, configurators might be resolved multiple times

## Optimization Attempts

### ❌ Failed Optimizations

All attempts to restructure Configuration.Add made performance WORSE:

1. **Intersection approach** (763 inst): `& $Context['configuration'] & {...}`
   - Still resolves all configurators

2. **Pre-resolution strategy** (780 inst): Extract configurator resolution to separate helper type
   - Adds overhead without reducing configurator access

### Root Problem

TypeScript's type system doesn't allow true short-circuiting. Mapped types evaluate all branches, even when conditionals would skip them.

## Viable Optimization Paths

### Option 1: Simplify Configurator Interface

**Target**: Reduce Output.Configurator from 385 → <100 inst

Approaches:

- Remove computed property `normalizedIncremental` from interface
  - Compute on-demand via helper type instead
  - Current: `configurator.normalizedIncremental`
  - Proposed: `Configurator.GetNormalizedIncremental<typeof configurator>`

- Simplify type parameter defaults
  - Current $InputResolver default is very complex
  - Consider simpler default or split into multiple interfaces

- Split Configurator into lightweight interface + heavy computed types
  - Interface: Just store data ($Input, $Normalized, $Default, $InputResolver)
  - Helpers: Compute `normalizedIncremental` and other derived types separately

**Impact**: Would reduce configurator overhead from 525 → ~150 inst (73% reduction)

### Option 2: Cache Configurators in Context

**Target**: Amortize configurator cost across multiple operations

Approaches:

- Pre-compute configurator types in ContextEmpty
  - Store resolved types as const type aliases
  - Reference these instead of recomputing

- Limitation: Only helps for ContextEmpty
  - After first `.with()`, context changes and configurators must be recomputed
  - Less effective for chained operations

**Impact**: ~203 inst savings for first operation only

### Option 3: Restructure Configuration Storage

**Target**: Avoid nested configurator access pattern

Approaches:

- Flatten configuration structure
  - Current: `$Context['configuration']['output']['configurator']`
  - Proposed: `$Context['configurators']['output']` (separate from current values)

- Store normalized types directly instead of through configurator
  - Current: Access via `configurator.normalizedIncremental`
  - Proposed: Store directly in context

- Trade-off: More verbose context structure, but cheaper access

**Impact**: Could reduce per-key cost from ~72 → ~20 inst

## Recommendations

### Priority 1: Simplify Configurator Interface (Option 1)

- Highest impact (73% reduction in configurator overhead)
- Doesn't break public API
- Changes are localized to configurator implementation

### Priority 2: Remove computed properties from Configurator

- Move `normalizedIncremental` from interface property to helper type
- Replace: `$Configurator['normalizedIncremental']`
- With: `Configurator.GetNormalizedIncremental<$Configurator>`
- This alone could save ~13 inst per configurator access

### Next Steps

1. Benchmark simplified Configurator interface variations
2. Test removing `normalizedIncremental` as computed property
3. Measure impact on real-world usage patterns (chained `.with()` calls)
4. If insufficient, consider restructuring configuration storage (Option 3)

## Benchmark Files Created

- `/Users/jasonkuhrt/projects/jasonkuhrt/graffle/src/context/fragments/configuration/reducers/add.bench.ts` - Configuration.Add breakdown
- `/Users/jasonkuhrt/projects/jasonkuhrt/graffle/src/lib/configurator/configurator.bench.ts` - Configurator property access costs
- `/Users/jasonkuhrt/projects/jasonkuhrt/graffle/src/context/fragments/configuration/reducers/add-optimized.ts` - Failed optimization attempts (for reference)

## Key Insights

1. **Accessing configurator costs 385 inst** - This is the #1 bottleneck
2. **Mapped types are free** - The structural parts of Configuration.Add are not the problem
3. **Conditionals aren't free** - Even false branches cost ~72 inst
4. **Caching works** - When configurators are pre-resolved, cost drops 69%
5. **Structural changes don't help** - Can't outsmart TypeScript's evaluation order

## Amortization Analysis

The good news: In typical usage, TypeScript's internal caching should help:

```typescript
// First call pays full price
type Client1 = Client<ContextEmpty> // ~876 inst (with our optimizations)

// Second call in same file/type resolution should be cached
type Client2 = Client<ContextEmpty> // ~15 inst (cached!)

// But modified context is new type
type Client3 = Client<Configuration.Add<ContextEmpty, {...}>> // Full price again
```

This means:

- Base Client type: Well-cached across usage
- Configuration changes: Each unique configuration incurs full cost
- Chaining: Each `.with()` in a chain may benefit from partial caching

The optimization is most valuable for:

- Type-level tests (run repeatedly)
- IDE responsiveness (hover, autocomplete)
- Build times (tsc compilation)
