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
    declare let _: any

    type EmptyRegistry = Registry<{}, any, any>

    // Standard scalars should resolve to their types
    Ts.Test.exact<typeof StringScalar, LookupCustomScalarOrFallbackToUnknown<'String', EmptyRegistry>>()(_ as typeof StringScalar)
    Ts.Test.exact<typeof Int, LookupCustomScalarOrFallbackToUnknown<'Int', EmptyRegistry>>()(_ as typeof Int)
    Ts.Test.exact<typeof Float, LookupCustomScalarOrFallbackToUnknown<'Float', EmptyRegistry>>()(_ as typeof Float)
    Ts.Test.exact<typeof ID, LookupCustomScalarOrFallbackToUnknown<'ID', EmptyRegistry>>()(_ as typeof ID)
  })

  test('custom scalars in registry are resolved', () => {
    declare let _: any

    type DateScalar = Scalar<'Date', Date, string>
    type RegistryWithDate = Registry<{ Date: DateScalar }, string, Date>

    // Custom scalar in registry should resolve
    Ts.Test.exact<DateScalar, LookupCustomScalarOrFallbackToUnknown<'Date', RegistryWithDate>>()(_ as DateScalar)
  })

  test('unknown custom scalars default to UnknownScalar', () => {
    declare let _: any

    type EmptyRegistry = Registry<{}, any, any>

    // Unknown custom scalar should default to UnknownScalar
    type Result = LookupCustomScalarOrFallbackToUnknown<'UnknownCustomScalar', EmptyRegistry>

    // Should be UnknownScalar (not String)
    Ts.Test.exact<typeof UnknownScalar, Result>()(_ as typeof UnknownScalar)
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
