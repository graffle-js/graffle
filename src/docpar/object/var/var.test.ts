import { Ts } from '@wollybeard/kit'
import { Test } from '@wollybeard/kit/test'
import { describe, expect, test } from 'vitest'
import { Var } from './$.js'

const as = <$value>(value?: unknown): $value => value as any
const $var = Var.$

// Helper to test assignability (for positive tests)
const accepts = <$Expected>() => <$Actual extends $Expected>(_value: $Actual) => {}

// Helper to test non-assignability (for negative tests with @ts-expect-error)
const rejects = <$Expected>() => (_value: $Expected) => {}

describe('Builder type defaults', () => {
  test('bare type accepts any state (widest)', () => {
    type AcceptsAny = Var.Builder
    Ts.Test.sub<AcceptsAny>()(as<Var.Builder<unknown, Var.BuilderStateEmpty>>())
    Ts.Test.sub<AcceptsAny>()(as<Var.Builder<number, { default: 5; required: true; name: 'test' }>>())
    Ts.Test.sub<AcceptsAny>()(as<Var.Builder<string, Var.BuilderState>>())
  })
  test('$var starts with empty state', () => {
    Ts.Test.sub<Var.Builder<unknown, Var.BuilderStateEmpty>>()($var)
  })
})

describe('Builder type inference', () => {
  test('infers type from default value', () => {
    const marker1 = $var.default(42)
    Ts.Test.sub<Var.Builder<42, { default: 42; required: undefined; name: undefined }>>()(marker1)

    const marker2 = $var.default('hello')
    Ts.Test.sub<Var.Builder<'hello', { default: 'hello'; required: undefined; name: undefined }>>()(marker2)

    const marker3 = $var.default(true)
    Ts.Test.sub<Var.Builder<true, { default: true; required: undefined; name: undefined }>>()(marker3)

    const marker4 = $var.default(null)
    Ts.Test.sub<Var.Builder<null, { default: null; required: undefined; name: undefined }>>()(marker4)

    const marker5 = $var.default([1, 2, 3])
    Ts.Test.sub<
      Var.Builder<readonly [1, 2, 3], { default: readonly [1, 2, 3]; required: undefined; name: undefined }>
    >()(
      marker5,
    )
  })

  test('preserves narrowed type through chaining', () => {
    const marker1 = $var.default(42).name('limit')
    Ts.Test.sub<Var.Builder<42, { default: 42; required: undefined; name: 'limit' }>>()(marker1)

    const marker2 = $var.name('userId').default('abc123')
    Ts.Test.sub<Var.Builder<'abc123', { default: 'abc123'; required: undefined; name: 'userId' }>>()(marker2)

    const marker4 = $var.default('test').required()
    Ts.Test.sub<Var.Builder<'test', { default: 'test'; required: true; name: undefined }>>()(marker4)

    const marker5 = $var.name('pageSize').default(20).required()
    Ts.Test.sub<Var.Builder<20, { default: 20; required: true; name: 'pageSize' }>>()(marker5)
  })
})

test('type parameter constrains the default value type', () => {
  // @ts-expect-error
  as<Var.Builder<number>>($var).default('invalid')
  // @ts-expect-error
  as<Var.Builder<{ complex: ['y', 'e', 's'] }>>($var).default('invalid')
  // OK
  as<Var.Builder<{ complex: ['y', 'e', 's'] }>>($var).default({ complex: ['y', 'e', 's'] })
})

describe('Type narrowing validation', () => {
  test('narrowed builder rejects incompatible type assignments', () => {
    // Incompatible literal types should be rejected
    // @ts-expect-error - Builder<1> should not be assignable to Builder<string>
    rejects<Var.Builder<string>>()($var.default(1))

    // @ts-expect-error - Builder<'test'> should not be assignable to Builder<number>
    rejects<Var.Builder<number>>()($var.default('test'))

    // @ts-expect-error - Builder<true> should not be assignable to Builder<string>
    rejects<Var.Builder<string>>()($var.default(true))

    // Compatible literal types should work (covariance)
    accepts<Var.Builder<number>>()($var.default(42))
    accepts<Var.Builder<string>>()($var.default('hello'))
    accepts<Var.Builder<boolean>>()($var.default(true))
  })

  test('narrowed type is preserved through chaining', () => {
    // @ts-expect-error - type narrowing should persist through .name()
    rejects<Var.Builder<string>>()($var.default(1).name('myVar'))

    // @ts-expect-error - type narrowing should persist through .required()
    rejects<Var.Builder<string>>()($var.default(42).required())

    // Chaining preserves compatible types (covariance)
    accepts<Var.Builder<number>>()($var.default(100).name('limit'))
    accepts<Var.Builder<string>>()($var.name('id').default('abc'))
  })
})

// TODO: Test that .default().required() is invalid - it's contradictory to have
// a default value (making the variable optional) and then mark it as required.
// This combination should either be a type error or runtime error.

// dprint-ignore
Test.describe('Builder runtime behavior')
  .inputType<Var.Builder>()
  .outputType<Var.BuilderState>()
  .describe('chain order does not matter', [
    [$var.default(0).name('a'),                            { name: 'a', default: 0, required: undefined }],
    [$var.name('a').default(0),                            { name: 'a', default: 0, required: undefined }],
  ])
  .cases(
    [$var.name('customName'),                      { name: 'customName', default: undefined, required: undefined }],
    [$var.default(100),                            { name: undefined, default: 100, required: undefined }],
    [$var.default(42),                             { name: undefined, default: 42, required: undefined }],
    [$var.default('hello'),                        { name: undefined, default: 'hello', required: undefined }],
    [$var.default(true),                           { name: undefined, default: true, required: undefined }],
    [$var.required(),                              { name: undefined, default: undefined, required: true }],
    [$var.default(10).name('limit'),               { name: 'limit', default: 10, required: undefined }],
  )
  .test(({ input, output }) => {
    expect(input._).toEqual(output)
  })
