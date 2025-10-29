import { describe, expect, it } from 'vitest'
import { isSelectAlias, isSelectAliasOne, normalizeSelectAlias } from './SelectAlias.js'

describe('isSelectAlias', () => {
  it('detects full array syntax ["x", true]', () => {
    expect(isSelectAlias(['x', true])).toBe(true)
  })

  it('detects short array syntax ["x"]', () => {
    expect(isSelectAlias(['x'])).toBe(true)
  })

  it('detects multiple aliases', () => {
    expect(isSelectAlias([['x', true], ['y', true]])).toBe(true)
  })

  it('rejects non-array values', () => {
    expect(isSelectAlias(true)).toBe(false)
    expect(isSelectAlias({})).toBe(false)
    expect(isSelectAlias(null)).toBe(false)
  })

  it('rejects invalid arrays', () => {
    expect(isSelectAlias([])).toBe(false)
    expect(isSelectAlias([123])).toBe(false)
    expect(isSelectAlias(['x', 'y', 'z'])).toBe(false)
  })
})

describe('isSelectAliasOne', () => {
  it('identifies single alias tuple', () => {
    expect(isSelectAliasOne(['x', true])).toBe(true)
  })

  it('rejects multiple aliases', () => {
    expect(isSelectAliasOne([['x', true], ['y', true]])).toBe(false)
  })
})

describe('normalizeSelectAlias', () => {
  it('normalizes string "x" to [["x", true]]', () => {
    const result = normalizeSelectAlias('x')
    expect(result).toEqual([['x', true]])
  })

  it('normalizes short array ["x"] to [["x", true]]', () => {
    const result = normalizeSelectAlias(['x'])
    expect(result).toEqual([['x', true]])
  })

  it('keeps full array ["x", true] as [["x", true]]', () => {
    const result = normalizeSelectAlias(['x', true])
    expect(result).toEqual([['x', true]])
  })

  it('keeps multiple aliases unchanged', () => {
    const input = [['x', true], ['y', false]]
    const result = normalizeSelectAlias(input as any)
    expect(result).toEqual(input)
  })

  it('preserves selection set in full array', () => {
    const selectionSet = { id: true }
    const result = normalizeSelectAlias(['alias', selectionSet])
    expect(result).toEqual([['alias', selectionSet]])
  })
})
