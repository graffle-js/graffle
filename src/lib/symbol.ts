/**
 * Check if an object has a symbol property with a specific name and value.
 *
 * This utility handles cases where symbols might be different instances due to module loading
 * issues (e.g., when using vitest or other tools that may load the same module multiple times).
 *
 * @param value - The object to check
 * @param symbol - The symbol to look for
 * @param expectedValue - The expected value of the symbol property
 * @param symbolName - The expected name of the symbol (e.g., "Transport" for Symbol(Transport))
 * @returns true if the object has the symbol property with the expected value
 */
export const hasSymbolProperty = (
  value: unknown,
  symbol: symbol,
  expectedValue: unknown,
  symbolName: string,
): boolean => {
  if (typeof value !== `object` || value === null) {
    return false
  }

  // First try direct symbol check (fast path)
  if ((value as any)[symbol] === expectedValue) {
    return true
  }

  // Fallback: check for any symbol with the matching name and value
  // This handles cases where the symbol might be different instances due to module loading
  const symbols = Object.getOwnPropertySymbols(value)
  const expectedSymbolString = `Symbol(${symbolName})`

  for (const sym of symbols) {
    if (sym.toString() === expectedSymbolString && (value as any)[sym] === expectedValue) {
      return true
    }
  }

  return false
}
