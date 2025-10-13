# TypeScript Type Diagnostics

## Quick Check

**Check specific file:**

```bash
./scripts/check-file-types.sh examples/10_transport-http/transport-http_abort.ts
```

**Check entire project:**

```bash
pnpm ts:check:stats
```

## Tools

### 1. `pnpm ts:check:stats` - Quick Stats

Shows instantiation counts and type checker time.

**When to use:** Quick sanity check for type performance.

**Output:**

```
Files:              500
Lines of Library:   200000
Instantiations:     150000
Time in Type Checker: 5.2s
```

**What it means:**

- **Instantiations** = amount of type work. Higher = slower.
- **Time in Type Checker** = actual compilation time spent on types.

### 2. `pnpm ts:check:trace` - Generate Detailed Trace

Creates detailed trace of where TypeScript spends time.

**When to use:** Need to identify specific type hot spots.

**Usage:**

```bash
pnpm ts:check:trace
pnpm ts:analyze
```

**Output:** Opens detailed breakdown showing which types are expensive.

### 3. `./scripts/check-file-types.sh` - Single File Check

Quick check for a specific file.

**When to use:** Debugging types in one file.

**Example:**

```bash
./scripts/check-file-types.sh src/client/methods/transport.ts
```

## Interpreting Results

### Instantiation Counts

- **< 1,000**: Fast, no issues
- **1,000 - 10,000**: Normal for complex types
- **10,000 - 50,000**: Watch for performance issues
- **> 50,000**: Likely hitting performance problems

### Common Problems

**Large unions in constraints:**

```typescript
// SLOW: Quadratic comparison
type Process<T extends Type1 | Type2 | ... | Type50> = ...

// FAST: Structural constraint
type Process<T extends BaseType> = ...
```

**Intersection constraints:**

```typescript
// SLOW: Not cached
type Process<T extends Base & { x: X } & { y: Y }> = ...

// FAST: Cached
interface Constraint extends Base { x: X; y: Y }
type Process<T extends Constraint> = ...
```

**Deep conditional nesting:**

- TypeScript evaluates conditionals eagerly
- Lift conditionals out or use mapped types

## Workflow

### Debugging Type Issues

1. **Run quick check:**
   ```bash
   ./scripts/check-file-types.sh path/to/file.ts
   ```

2. **If instantiations > 10,000, generate trace:**
   ```bash
   pnpm ts:check:trace
   pnpm ts:analyze
   ```

3. **Identify hot spots** in trace output

4. **Apply fixes:**
   - Replace intersection constraints with interfaces
   - Remove large union constraints
   - Simplify conditional types

5. **Verify improvement:**
   ```bash
   ./scripts/check-file-types.sh path/to/file.ts
   ```

### Before Committing

Run full check to catch regressions:

```bash
pnpm check:types
```

## Tools Used

- **`tsc --extendedDiagnostics`** - Official TypeScript compiler stats
- **`tsc --generateTrace`** - Official TypeScript trace generation
- **`@typescript/analyze-trace`** - Microsoft's trace analyzer

These are the state-of-the-art tools for TypeScript type performance analysis.
