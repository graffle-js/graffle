/**
 * Tests for THE GOAL: Granular variable type errors with client.gql()
 *
 * This file tests that the client.gql() method provides granular TypeScript errors
 * for variable types when using TypedFullDocument.
 */

import { Possible } from '#test/schema/possible/client/$.js'
import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'

const client = Possible.create()

// ==================================================================================================
//                                   MANUAL TYPED FULL DOCUMENTS
// ==================================================================================================

// Manually create TypedFullDocuments by casting (simulating what gql-tada would produce)
const docWithRequiredVar = `query GetById($id: ID!) { id }` as TypedFullDocument.SingleOperation<{
  result: { id: string | null }
  variables: { id: string }
}>

const docWithOptionalVar = `query Search($name: String) { string }` as TypedFullDocument.SingleOperation<{
  result: { string: string | null }
  variables: { name?: string }
}>

const docWithNoVars = `query GetAll { id }` as TypedFullDocument.SingleOperation<{
  result: { id: string | null }
  variables: {}
}>

// ==================================================================================================
//                                   GRANULAR VARIABLE ERRORS (THE GOAL!)
// ==================================================================================================

// Test 1: Required variables
// ✅ Should work with correct variable type
client.gql(docWithRequiredVar).$send('GetById', { id: 'user-123' })

// ❌ Should error - missing required variable
// @ts-expect-error - missing required variable 'id'
client.gql(docWithRequiredVar).$send('GetById')

// ❌ Should error - wrong variable type (number instead of string)
// @ts-expect-error - wrong type for variable 'id'
client.gql(docWithRequiredVar).$send('GetById', { id: 123 })

// Test 2: Optional variables
// ✅ Should work without variables
client.gql(docWithOptionalVar).$send('Search')

// ✅ Should work with variables
client.gql(docWithOptionalVar).$send('Search', { name: 'John' })

// ❌ Should error - wrong variable type
// @ts-expect-error - wrong type for variable 'name'
client.gql(docWithOptionalVar).$send('Search', { name: 123 })

// Test 3: No variables
// ✅ Should work without variables
client.gql(docWithNoVars).$send('GetAll')

// ❌ Should error - cannot pass variables when none expected
// @ts-expect-error - no variables expected
client.gql(docWithNoVars).$send('GetAll', { id: '123' })
