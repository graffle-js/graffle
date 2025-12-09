import { expect, test } from 'vitest'
import { unType } from './__.js'

test('unType normalizes boxed String to primitive string', () => {
  // Simulate TypedDocumentString from @graphql-codegen which extends String
  // eslint-disable-next-line no-new-wrappers
  const boxedString = new String('query { foo }')

  const result = unType(boxedString as any)

  expect(typeof result).toBe('string')
  expect(result).toBe('query { foo }')
})
