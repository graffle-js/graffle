/* eslint-disable */

import { describe, expect, test } from 'vitest'
import type { ContextualAggregateError } from '../errors/ContextualAggregateError.js'
import { _ } from '../prelude.js'
import { type Interceptor, Pipeline } from './_.js'
import { initialInput } from './__.test-helpers.js'

const run = async (interceptor: (...args: any[]) => any) => {
  const pipeline = Pipeline.create()
  return Pipeline.run(pipeline, {
    initialInput,
    interceptors: [interceptor],
  })
}

describe(`invalid destructuring cases`, () => {
  test(`noParameters`, async () => {
    const result = await run(() => _) as ContextualAggregateError
    expect({
      result,
      errors: result.errors,
      context: result.errors[0]?.context,
    }).toMatchInlineSnapshot(`
      {
        "context": {
          "issue": "noParameters",
        },
        "errors": [
          [ContextualError: Interceptor must destructure the first parameter passed to it and select exactly one entrypoint.],
        ],
        "result": [ContextualAggregateError: One or more extensions are invalid.],
      }
    `)
  })
  test(`destructuredWithoutEntryHook`, async () => {
    const result = await run(async ({ x }) => {
      return _
    }) as ContextualAggregateError
    expect({
      result,
      errors: result.errors,
      context: result.errors[0]?.context,
    }).toMatchInlineSnapshot(
      `
      {
        "context": {
          "issue": "destructuredWithoutEntryHook",
        },
        "errors": [
          [ContextualError: Interceptor must destructure the first parameter passed to it and select exactly one entrypoint.],
        ],
        "result": [ContextualAggregateError: One or more extensions are invalid.],
      }
    `,
    )
  })
  test(`multipleParameters`, async () => {
    const result = await run(async ({ x }, y) => {}) as ContextualAggregateError
    expect({
      result,
      errors: result.errors,
      context: result.errors[0]?.context,
    }).toMatchInlineSnapshot(
      `
      {
        "context": {
          "issue": "multipleParameters",
        },
        "errors": [
          [ContextualError: Interceptor must destructure the first parameter passed to it and select exactly one entrypoint.],
        ],
        "result": [ContextualAggregateError: One or more extensions are invalid.],
      }
    `,
    )
  })
  test(`notDestructured`, async () => {
    const result = await run(async (_) => {}) as ContextualAggregateError
    expect({
      result,
      errors: result.errors,
      context: result.errors[0]?.context,
    }).toMatchInlineSnapshot(`
      {
        "context": {
          "issue": "notDestructured",
        },
        "errors": [
          [ContextualError: Interceptor must destructure the first parameter passed to it and select exactly one entrypoint.],
        ],
        "result": [ContextualAggregateError: One or more extensions are invalid.],
      }
    `)
  })
  test(`multipleDestructuredHookNames`, async () => {
    const result = await run(async ({ a, b }) => {}) as ContextualAggregateError
    expect({
      result,
      errors: result.errors,
      context: result.errors[0]?.context,
    }).toMatchInlineSnapshot(`
      {
        "context": {
          "issue": "multipleDestructuredHookNames",
        },
        "errors": [
          [ContextualError: Interceptor must destructure the first parameter passed to it and select exactly one entrypoint.],
        ],
        "result": [ContextualAggregateError: One or more extensions are invalid.],
      }
    `)
  })
})
