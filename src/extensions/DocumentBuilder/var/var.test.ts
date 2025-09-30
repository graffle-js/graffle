import { Ts } from '@wollybeard/kit'
import { Test } from '@wollybeard/kit/test'
import { describe, expect, test } from 'vitest'
import { Var } from './$.js'

const as = <$value>(value?: unknown): $value => value as any
const $var = Var.$var

describe('Builder type defaults', () => {
  test('bare type accepts any state (widest)', () => {
    type AcceptsAny = Var.Builder
    Ts.assert<AcceptsAny>()(as<Var.Builder<unknown, Var.BuilderStateEmpty>>())
    Ts.assert<AcceptsAny>()(as<Var.Builder<number, { default: 5; required: true; name: 'test' }>>())
    Ts.assert<AcceptsAny>()(as<Var.Builder<string, Var.BuilderState>>())
  })
  test('$var starts with empty state', () => {
    Ts.assertEqual<Var.Builder<unknown, Var.BuilderStateEmpty>>()($var)
  })
})

describe('Builder type inference', () => {
  test('infers type from default value', () => {
    const marker1 = $var.default(42)
    Ts.assert<Var.Builder<unknown, { default: 42; required: undefined; name: undefined }>>()(marker1)

    const marker2 = $var.default('hello')
    Ts.assert<Var.Builder<unknown, { default: 'hello'; required: undefined; name: undefined }>>()(marker2)

    const marker3 = $var.default(true)
    Ts.assert<Var.Builder<unknown, { default: true; required: undefined; name: undefined }>>()(marker3)

    const marker4 = $var.default(null)
    Ts.assert<Var.Builder<unknown, { default: null; required: undefined; name: undefined }>>()(marker4)

    const marker5 = $var.default([1, 2, 3])
    Ts.assert<Var.Builder<unknown, { default: number[]; required: undefined; name: undefined }>>()(marker5)
  })

  test('preserves type through chaining', () => {
    const marker1 = $var.default(42).name('limit')
    Ts.assert<Var.Builder<unknown, { default: 42; required: undefined; name: 'limit' }>>()(marker1)

    const marker2 = $var.name('userId').default('abc123')
    Ts.assert<Var.Builder<unknown, { default: 'abc123'; required: undefined; name: 'userId' }>>()(marker2)

    const marker3 = $var.default(10).optional()
    Ts.assert<Var.Builder<unknown, { default: 10; required: false; name: undefined }>>()(marker3)

    const marker4 = $var.default('test').required()
    Ts.assert<Var.Builder<unknown, { default: 'test'; required: true; name: undefined }>>()(marker4)

    const marker5 = $var.name('pageSize').default(20).required()
    Ts.assert<Var.Builder<unknown, { default: 20; required: true; name: 'pageSize' }>>()(marker5)
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

// TODO: Test that .default().required() is invalid - it's contradictory to have
// a default value (making the variable optional) and then mark it as required.
// This combination should either be a type error or runtime error.

// dprint-ignore
Test.describe('Builder runtime behavior')
  .i<Var.Builder>()
  .o<Var.BuilderState>()
  .casesIn('chain order does not matter')(
    [[$var.default(0).name('a')],                            { name: 'a', default: 0, required: undefined }],
    [[$var.name('a').default(0)],                            { name: 'a', default: 0, required: undefined }],
  )
  .cases(
    [[$var.name('customName')],                      { name: 'customName', default: undefined, required: undefined }],
    [[$var.default(100)],                            { name: undefined, default: 100, required: undefined }],
    [[$var.default(42)],                             { name: undefined, default: 42, required: undefined }],
    [[$var.default('hello')],                        { name: undefined, default: 'hello', required: undefined }],
    [[$var.default(true)],                           { name: undefined, default: true, required: undefined }],
    [[$var.required()],                              { name: undefined, default: undefined, required: true }],
    [[$var.default(10).name('limit')],               { name: 'limit', default: 10, required: undefined }],
  )
  .test((marker, expected) => {
    expect(marker._).toEqual(expected)
  })
