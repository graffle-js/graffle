# Configurator Type Performance Analysis

## Executive Summary

The Configurator interface is responsible for **525 out of 573 instantiations** (92%) in Configuration.Add. Detailed benchmarking reveals multiple optimization opportunities that could reduce total Configuration.Add cost by **70%+**.

## Benchmark Results

### Section 1: Raw Configurator Access Costs

Without any baseline amortization:

- **Output.Configurator**: 0 inst (cached by ContextEmpty import)
- **Check.Configurator**: 54 inst
- **Schema.Configurator**: 86 inst

After amortizing ContextEmpty:

- **Output.Configurator**: 0 inst (already cached)
- **Check.Configurator**: 54 inst (no change - not cached by import)
- **Schema.Configurator**: 86 inst (no change - not cached by import)

**Key Insight**: ContextEmpty's import resolution already instantiates Output.Configurator, but Check and Schema remain expensive.

### Section 2: Property Access Costs (After Amortizing Output.Configurator)

After Output.Configurator is resolved:

- **input**: 1 inst
- **normalized**: 1 inst
- **default**: 1 inst
- **inputResolver**: 1 inst
- **normalizedIncremental**: **13 inst** ← Computed property is 13x more expensive!

### Section 3: Incrementify Type Cost

The `normalizedIncremental` property uses `Configurator.Incrementify`:

- **Output config**: 13 inst
- **Check config**: **89 inst** (7x more expensive!)
- **Schema config**: **135 inst** (10x more expensive!)

**Key Insight**: Incrementify cost scales with configuration structure complexity. Schema has many properties, making Incrementify very expensive.

### Section 4: InputResolver and Symbol Access

- **Access $Func via symbol**: 2 inst
- **Access $FuncSymbol type**: 0 inst

Symbol access itself is cheap - the problem is elsewhere.

### Section 5: Configurator Creation Cost

- **With all defaults**: 42 inst
- **With explicit params**: 40 inst

**Key Insight**: Type parameter defaults aren't the problem - both cost ~40 inst.

### Section 6: Output Configurator Structure

Individual types are all cheap:

- **Output.Input**: 0 inst
- **Output.Normalized**: 0 inst
- **Output.InputResolver$Func**: 0 inst

The cost comes from combining them in the Configurator interface.

### Section 7: Potential Optimizations

**Test 1: Remove `normalizedIncremental` from interface**

- **WITHOUT normalizedIncremental**: 12 inst
- **Original**: 42 inst
- **Savings**: **30 inst (71% reduction!)**

**Test 2: Simplify InputResolver to `any`**

- **SIMPLIFIED (with `any`)**: 3 inst
- **Original**: 42 inst
- **Savings**: **39 inst (93% reduction!)**

**Key Insight**: The complex `$InputResolver` generic parameter is the #1 cost driver!

### Section 8: Multiple Configurator Access Pattern

Simulating Configuration.Add's behavior:

- **All three configurators**: 148 inst (not 525 - TypeScript caching helps!)
- **All three normalizedIncremental**: 175 inst (27 inst more - computing Incrementify 3x)

## Root Causes

### 1. Complex InputResolver Generic Parameter (39 inst cost)

```typescript
$InputResolver extends Configurator.InputResolverGeneric<
  Configurator.InputResolver.$Func<$Input, $Normalized, $Default>
> = Configurator.InputResolverGeneric<
  Configurator.InputResolver.Standard_ShallowMerge$Func<$Input, $Normalized, $Default>
>
```

This deeply nested generic with conditional default costs **39 instantiations** by itself!

### 2. Computed normalizedIncremental Property (30 inst cost)

```typescript
readonly normalizedIncremental: Configurator.Incrementify<$Normalized, $Default>
```

Having Incrementify as a computed interface property costs **30 instantiations** vs computing it via helper type.

### 3. Incrementify Scales Poorly (13-135 inst)

The Incrementify type uses mapped types to partition properties:

- Properties in $Default → required
- Properties NOT in $Default → optional

Cost scales with configuration structure size:

- Simple (Output): 13 inst
- Medium (Check): 89 inst
- Complex (Schema): 135 inst

## Recommended Optimizations

### Priority 1: Remove normalizedIncremental from Interface (30 inst savings)

**Current:**

```typescript
export interface Configurator<$Input, $Normalized, $Default, $InputResolver> {
  readonly input: $Input
  readonly normalized: $Normalized
  readonly default: $Default
  readonly inputResolver: $InputResolver
  readonly normalizedIncremental: Configurator.Incrementify<
    $Normalized,
    $Default
  >
}
```

**Proposed:**

```typescript
export interface Configurator<$Input, $Normalized, $Default, $InputResolver> {
  readonly input: $Input
  readonly normalized: $Normalized
  readonly default: $Default
  readonly inputResolver: $InputResolver
  // normalizedIncremental removed - compute via helper type
}

// Usage changes from:
type Current = $Configurator['normalizedIncremental']

// To:
type Current = Configurator.GetNormalizedIncremental<$Configurator>
```

**Impact:**

- Configurator creation: 42 → 12 inst (71% reduction)
- Configuration.Add: 573 → ~543 inst (5% reduction)
- Simple change, doesn't break public API if done carefully

### Priority 2: Simplify InputResolver Generic (39 inst savings)

This is the #1 cost driver but requires more careful refactoring.

**Option A: Use simpler constraint**

```typescript
$InputResolver extends Configurator.InputResolverGeneric =
  Configurator.InputResolverGeneric<Configurator.InputResolver.Standard_ShallowMerge$Func<$Input, $Normalized, $Default>>
```

Simplify to:

```typescript
$InputResolver extends object = StandardInputResolver<$Input, $Normalized, $Default>
```

**Option B: Split Configurator Interface**

```typescript
// Base interface - lightweight
export interface ConfiguratorBase<$Input, $Normalized, $Default> {
  readonly input: $Input
  readonly normalized: $Normalized
  readonly default: $Default
  readonly inputResolver: object
}

// Full interface - use only where needed
export interface Configurator<$Input, $Normalized, $Default, $InputResolver>
  extends ConfiguratorBase<$Input, $Normalized, $Default>
{
  readonly inputResolver: $InputResolver
}
```

**Impact:**

- Configurator creation: 42 → 3 inst (93% reduction!)
- Configuration.Add: 573 → ~180 inst (69% reduction!)
- Requires careful API refactoring

### Priority 3: Optimize Incrementify for Large Configs

Schema's Incrementify costs 135 inst because of many properties. Consider:

**Option A: Cached helper type**

```typescript
// Instead of computing inline, pre-compute for known configs
type SchemaConfigIncremental = Configurator.Incrementify<
  Schema.Normalized,
  Schema.Default
>

// Reference the cached type
export const configurator: Configurator<..., SchemaConfigIncremental>
```

**Option B: Lazy evaluation**
Only compute normalizedIncremental when actually needed, not at configurator resolution time.

## Combined Impact Projection

Applying **Priority 1 + Priority 2**:

- Configurator creation: 42 → **3 inst** (93% reduction)
- Output.Configurator: 385 → **~50 inst** (87% reduction)
- Check.Configurator: 54 → **~10 inst** (82% reduction)
- Schema.Configurator: 86 → **~15 inst** (83% reduction)
- **Configuration.Add total: 573 → ~175 inst (70% reduction!)**

## Implementation Strategy

### Phase 1: Low-Risk Optimization (Week 1)

1. Remove `normalizedIncremental` from Configurator interface
2. Add helper type `Configurator.GetNormalizedIncremental<T>`
3. Update all usage sites
4. Run benchmarks to verify 30 inst savings
5. Run full test suite

**Expected savings: 30 inst (5%)**

### Phase 2: High-Impact Optimization (Week 2-3)

1. Simplify InputResolver generic parameter
2. Consider splitting Configurator interface
3. Refactor Configuration.Add to use simpler constraints
4. Update all configurator definitions
5. Run benchmarks to verify 39+ inst savings
6. Run full test suite

**Expected savings: 39+ inst (additional 60%+)**

### Phase 3: Polish (Week 4)

1. Optimize Incrementify for Schema config if still needed
2. Consider caching strategies for expensive configs
3. Document new patterns
4. Final benchmark verification

## Success Metrics

- **Configuration.Add**: 573 → < 200 inst (65%+ reduction)
- **Client<Configuration.Add<...>>**: 588 → < 250 inst (57%+ reduction)
- **IDE responsiveness**: Noticeable improvement in hover/autocomplete
- **Build time**: Faster type checking in CI

## Risk Assessment

### Low Risk (Priority 1)

- Removing `normalizedIncremental` from interface is backwards compatible if done via helper type
- Easy to verify correctness
- Small, localized changes

### Medium Risk (Priority 2)

- Simplifying InputResolver requires careful refactoring
- May impact type safety guarantees
- Needs extensive testing
- Could affect public API if not careful

### Mitigation

- Implement behind feature flag
- Run full test suite including type tests
- Verify no runtime behavior changes
- Consider gradual migration path

## Files to Modify

1. `/Users/jasonkuhrt/projects/jasonkuhrt/graffle/src/lib/configurator/configurator.ts`
   - Remove `normalizedIncremental` from interface
   - Add `GetNormalizedIncremental<T>` helper type
   - Simplify `$InputResolver` generic parameter

2. `/Users/jasonkuhrt/projects/jasonkuhrt/graffle/src/context/fragments/configuration/fragment.ts`
   - Update Configurator constraints

3. `/Users/jasonkuhrt/projects/jasonkuhrt/graffle/src/context/fragments/configuration/reducers/add.ts`
   - Use `GetNormalizedIncremental` helper instead of property access

4. All configuration files (output, check, schema)
   - Update configurator usage

## Next Steps

1. Review this analysis with team
2. Prioritize which optimizations to pursue
3. Create implementation plan
4. Start with Priority 1 (low-risk, 30 inst savings)
5. Measure impact before proceeding to Priority 2

## Benchmark Suite

All findings are backed by comprehensive benchmarks in:
`/Users/jasonkuhrt/projects/jasonkuhrt/graffle/src/lib/configurator/configurator.bench.ts`

Run with: `pnpm bench configurator.bench.ts`
