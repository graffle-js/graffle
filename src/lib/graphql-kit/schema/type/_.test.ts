import { Codec } from '#src/types/Codec/_.js'
import { Assert } from '@wollybeard/kit'
import { describe, expect, test } from 'vitest'
import { Type } from './_.js'

describe('LookupCustomScalarOrFallbackToUnknown', () => {
  test('standard scalars are resolved correctly', () => {
    type EmptyRegistry = Type.Scalars.Registry<{}, any, any>

    // Standard scalars should resolve to their types
    Assert.exact.ofAs<Type.LookupCustomScalarOrFallbackToUnknown<'String', EmptyRegistry>>()
      .on(Type.Standard.Scalars.String)
    Assert.exact.ofAs<Type.LookupCustomScalarOrFallbackToUnknown<'Int', EmptyRegistry>>()
      .on(Type.Standard.Scalars.Int)
    Assert.exact.ofAs<Type.LookupCustomScalarOrFallbackToUnknown<'Float', EmptyRegistry>>()
      .on(Type.Standard.Scalars.Float)
    Assert.exact.ofAs<Type.LookupCustomScalarOrFallbackToUnknown<'ID', EmptyRegistry>>()
      .on(Type.Standard.Scalars.ID)
  })

  test('custom scalars in registry are resolved', () => {
    type DateScalar = Type.Scalar<'Date', Date, string>
    type RegistryWithDate = Type.Scalars.Registry<{ Date: DateScalar }, string, Date>

    const DateScalar: DateScalar = {
      kind: 'Scalar',
      name: 'Date',
      codec: Codec.create({ encode: () => '', decode: () => new Date() }),
    }

    // Custom scalar in registry should resolve
    Assert.exact.ofAs<Type.LookupCustomScalarOrFallbackToUnknown<'Date', RegistryWithDate>>()
      .on(DateScalar)
  })

  test('unknown custom scalars default to UnknownScalar', () => {
    type EmptyRegistry = Type.Scalars.Registry<{}, any, any>

    // Unknown custom scalar should default to UnknownScalar (not String)
    Assert.exact.ofAs<Type.LookupCustomScalarOrFallbackToUnknown<'UnknownCustomScalar', EmptyRegistry>>()
      .on(Type.Scalars.UnknownScalar)
  })
})

describe('lookupCustomScalarOrFallbackToUnknown (runtime)', () => {
  test('returns standard scalars for standard names', () => {
    expect(Type.lookupCustomScalarOrFallbackToUnknown({}, 'String')).toBe(Type.Standard.Scalars.String)
    expect(Type.lookupCustomScalarOrFallbackToUnknown({}, 'Int')).toBe(Type.Standard.Scalars.Int)
    expect(Type.lookupCustomScalarOrFallbackToUnknown({}, 'Float')).toBe(Type.Standard.Scalars.Float)
    expect(Type.lookupCustomScalarOrFallbackToUnknown({}, 'ID')).toBe(Type.Standard.Scalars.ID)
  })

  test('returns custom scalar if present in map', () => {
    const DateScalar = {
      kind: 'Scalar' as const,
      name: 'Date',
      codec: Codec.create({ encode: () => '', decode: () => new Date() }),
    }
    const scalars = { Date: DateScalar }

    expect(Type.lookupCustomScalarOrFallbackToUnknown(scalars, 'Date')).toBe(DateScalar)
  })

  test('returns UnknownScalar for unknown custom scalar', () => {
    const result = Type.lookupCustomScalarOrFallbackToUnknown({}, 'UnknownCustomScalar')

    // Should return UnknownScalar (not String)
    expect(result).toBe(Type.Scalars.UnknownScalar)
    expect(result.name).toBe('__unknown__')
  })
})
