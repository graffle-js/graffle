import { Ts } from '@wollybeard/kit'
import { describe, expect, test } from 'vitest'
import { createCodec } from '../Codec.js'
import { Schema } from './_.js'

describe('LookupCustomScalarOrFallbackToUnknown', () => {
  test('standard scalars are resolved correctly', () => {
    type EmptyRegistry = Schema.Scalar.Registry<{}, any, any>

    // Standard scalars should resolve to their types
    Ts.Assert.exact.ofAs<Schema.LookupCustomScalarOrFallbackToUnknown<'String', EmptyRegistry>>()
      .on(Schema.Standard.Scalars.String)
    Ts.Assert.exact.ofAs<Schema.LookupCustomScalarOrFallbackToUnknown<'Int', EmptyRegistry>>()
      .on(Schema.Standard.Scalars.Int)
    Ts.Assert.exact.ofAs<Schema.LookupCustomScalarOrFallbackToUnknown<'Float', EmptyRegistry>>()
      .on(Schema.Standard.Scalars.Float)
    Ts.Assert.exact.ofAs<Schema.LookupCustomScalarOrFallbackToUnknown<'ID', EmptyRegistry>>()
      .on(Schema.Standard.Scalars.ID)
  })

  test('custom scalars in registry are resolved', () => {
    type DateScalar = Schema.Scalar<'Date', Date, string>
    type RegistryWithDate = Schema.Scalar.Registry<{ Date: DateScalar }, string, Date>

    const DateScalar: DateScalar = {
      kind: 'Scalar',
      name: 'Date',
      codec: createCodec({ encode: () => '', decode: () => new Date() }),
    }

    // Custom scalar in registry should resolve
    Ts.Assert.exact.ofAs<Schema.LookupCustomScalarOrFallbackToUnknown<'Date', RegistryWithDate>>()
      .on(DateScalar)
  })

  test('unknown custom scalars default to UnknownScalar', () => {
    type EmptyRegistry = Schema.Scalar.Registry<{}, any, any>

    // Unknown custom scalar should default to UnknownScalar (not String)
    Ts.Assert.exact.ofAs<Schema.LookupCustomScalarOrFallbackToUnknown<'UnknownCustomScalar', EmptyRegistry>>()
      .on(Schema.Scalar.UnknownScalar)
  })
})

describe('lookupCustomScalarOrFallbackToUnknown (runtime)', () => {
  test('returns standard scalars for standard names', () => {
    expect(Schema.lookupCustomScalarOrFallbackToUnknown({}, 'String')).toBe(Schema.Standard.Scalars.String)
    expect(Schema.lookupCustomScalarOrFallbackToUnknown({}, 'Int')).toBe(Schema.Standard.Scalars.Int)
    expect(Schema.lookupCustomScalarOrFallbackToUnknown({}, 'Float')).toBe(Schema.Standard.Scalars.Float)
    expect(Schema.lookupCustomScalarOrFallbackToUnknown({}, 'ID')).toBe(Schema.Standard.Scalars.ID)
  })

  test('returns custom scalar if present in map', () => {
    const DateScalar = {
      kind: 'Scalar' as const,
      name: 'Date',
      codec: createCodec({ encode: () => '', decode: () => new Date() }),
    }
    const scalars = { Date: DateScalar }

    expect(Schema.lookupCustomScalarOrFallbackToUnknown(scalars, 'Date')).toBe(DateScalar)
  })

  test('returns UnknownScalar for unknown custom scalar', () => {
    const result = Schema.lookupCustomScalarOrFallbackToUnknown({}, 'UnknownCustomScalar')

    // Should return UnknownScalar (not String)
    expect(result).toBe(Schema.Scalar.UnknownScalar)
    expect(result.name).toBe('__unknown__')
  })
})
