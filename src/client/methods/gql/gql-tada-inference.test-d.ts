/**
 * Type-level tests for gql-tada string literal parsing in client.gql()
 *
 * According to the spec, client.gql() should provide full gql-tada inference
 * for generated clients, parsing GraphQL string literals at the type level.
 *
 * @see docs/issues/2025-10-09-gql-tada-integration/DEPRECATED-PRD.md
 * @see docs/issues/2025-10-09-gql-tada-integration/how.md (lines 248-302)
 */

import { Graffle } from '#graffle'
import { TransportMemory } from '#src/extensions/TransportMemory/TransportMemory.js'
import { possibleSchema } from '#test/schema/possible/schema.js'
import { Ts } from '@wollybeard/kit'

const client = Graffle
  .create()
  .use(TransportMemory)
  .transport(`memory`, { schema: possibleSchema })
  .with({ output: { envelope: false } })

//
// Test 1: Query without variables should infer result type from GraphQL string
//

{
  const result = client.gql(`
    query {
      id
    }
  `).send()

  // SPEC: Should infer Promise<{ id: string | null } | null>
  // ACTUAL: Currently infers Promise<unknown> because gql-tada parsing not working
  Ts.Test.exact<Promise<{ id: string | null } | null>>()(result)
}

//
// Test 2: Query with required variables should infer variable types
//

{
  const query = client.gql(`
    query GetString($string: String!) {
      stringWithRequiredArg(string: $string)
    }
  `)

  // SPEC: Variables should be required and type-checked
  const result1 = query.send({ string: 'test' })
  Ts.Test.exact<Promise<{ stringWithRequiredArg: string } | null>>()(result1)

  // SPEC: Should error - missing required variable
  // ACTUAL: Currently doesn't error because gql-tada parsing not working
  // @ts-expect-error - missing required variable 'string'
  const result2 = query.send()

  // SPEC: Should error - wrong variable type
  // @ts-expect-error - wrong type for variable 'string'
  const result3 = query.send({ string: 123 })
}

//
// Test 3: Query with optional variables
//

{
  const query = client.gql(`
    query GetStringOptional($string: String) {
      string
    }
  `)

  // SPEC: Should work without variables
  const result1 = query.send()
  Ts.Test.exact<Promise<{ string: string | null } | null>>()(result1)

  // SPEC: Should work with variables
  const result2 = query.send({ string: 'test' })
  Ts.Test.exact<Promise<{ string: string | null } | null>>()(result2)
}

//
// Test 4: Multiple field selection should be inferred from GraphQL string
//

{
  const result = client.gql(`
    query {
      id
      string
    }
  `).send()

  // SPEC: Should infer both fields
  Ts.Test.exact<Promise<{ id: string | null; string: string | null } | null>>()(result)
}

//
// Test 5: Nested field selection from GraphQL string
//

{
  const result = client.gql(`
    query {
      interface {
        id
      }
    }
  `).send()

  // SPEC: Should infer nested structure
  Ts.Test.exact<Promise<{ interface: { id: string } | null } | null>>()(result)
}
