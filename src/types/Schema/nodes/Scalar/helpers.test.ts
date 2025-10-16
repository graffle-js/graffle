import { Ts } from '@wollybeard/kit'
import { describe, expect, test } from 'vitest'
import { Float, ID, Int, String as StringScalar } from '../../StandardTypes/scalar.js'
import { createCodec } from './codec.js'
import {
  type LookupCustomScalarOrFallbackToUnknown,
  lookupCustomScalarOrFallbackToUnknown,
  UnknownScalar,
} from './helpers.js'
import type { Registry } from './helpers.js'
import type { Scalar } from './Scalar.js'

describe('LookupCustomScalarOrFallbackToUnknown', () => {
  test('standard scalars are resolved correctly', () => {
    type EmptyRegistry = Registry<{}, any, any>

    // Standard scalars should resolve to their types
    Ts.Test.exact<LookupCustomScalarOrFallbackToUnknown<'String', EmptyRegistry>>()(StringScalar)
    Ts.Test.exact<LookupCustomScalarOrFallbackToUnknown<'Int', EmptyRegistry>>()(Int)
    Ts.Test.exact<LookupCustomScalarOrFallbackToUnknown<'Float', EmptyRegistry>>()(Float)
    Ts.Test.exact<LookupCustomScalarOrFallbackToUnknown<'ID', EmptyRegistry>>()(ID)
  })

  test('custom scalars in registry are resolved', () => {
    type DateScalar = Scalar<'Date', Date, string>
    type RegistryWithDate = Registry<{ Date: DateScalar }, string, Date>

    const DateScalar: DateScalar = {
      kind: 'Scalar',
      name: 'Date',
      codec: createCodec({ encode: () => '', decode: () => new Date() }),
    }

    // Custom scalar in registry should resolve
    Ts.Test.exact<LookupCustomScalarOrFallbackToUnknown<'Date', RegistryWithDate>>()(DateScalar)
  })

  test('unknown custom scalars default to UnknownScalar', () => {
    type EmptyRegistry = Registry<{}, any, any>

    // Unknown custom scalar should default to UnknownScalar (not String)
    Ts.Test.exact<LookupCustomScalarOrFallbackToUnknown<'UnknownCustomScalar', EmptyRegistry>>()(UnknownScalar)
  })
})

describe('lookupCustomScalarOrFallbackToUnknown (runtime)', () => {
  test('returns standard scalars for standard names', () => {
    expect(lookupCustomScalarOrFallbackToUnknown({}, 'String')).toBe(StringScalar)
    expect(lookupCustomScalarOrFallbackToUnknown({}, 'Int')).toBe(Int)
    expect(lookupCustomScalarOrFallbackToUnknown({}, 'Float')).toBe(Float)
    expect(lookupCustomScalarOrFallbackToUnknown({}, 'ID')).toBe(ID)
  })

  test('returns custom scalar if present in map', () => {
    const DateScalar = {
      kind: 'Scalar' as const,
      name: 'Date',
      codec: createCodec({ encode: () => '', decode: () => new Date() }),
    }
    const scalars = { Date: DateScalar }

    expect(lookupCustomScalarOrFallbackToUnknown(scalars, 'Date')).toBe(DateScalar)
  })

  test('returns UnknownScalar for unknown custom scalar', () => {
    const result = lookupCustomScalarOrFallbackToUnknown({}, 'UnknownCustomScalar')

    // Should return UnknownScalar (not String)
    expect(result).toBe(UnknownScalar)
    expect(result.name).toBe('__unknown__')
  })
})
