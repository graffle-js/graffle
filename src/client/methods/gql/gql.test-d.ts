import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'

const client = Possible.create()

//
// Test 1: Query without variables should infer result type from GraphQL string
//

{
  const result = client.gql(`
    query {
      id
    }
  `).$send()

  Ts.Test.exact<Promise<{ id: string | null } | null>>()(result)
}

//
// Test 2: Query with required variables should infer variable types
//

{
  const sender = client.gql(`
    query GetString($string: String!) {
      stringWithRequiredArg(string: $string)
    }
  `)

  // SPEC: Variables should be required and type-checked
  const result1 = sender.$send('GetString', { string: 'test' })
  Ts.Test.exact<Promise<{ stringWithRequiredArg: string } | null>>()(result1)

  // SPEC: Should error - missing required variable
  // ACTUAL: Currently doesn't error because gql-tada parsing not working
  // @ts-expect-error - missing required variable 'string'
  const result2 = sender.$send('GetString')

  // SPEC: Should error - wrong variable type
  // @ts-expect-error - wrong type for variable 'string'
  const result3 = sender.$send('GetString', { string: 123 })
}

//
// Test 3: Query with optional variables
//

{
  const builder = client.gql(`
    query GetStringOptional($string: String) {
      string
    }
  `)

  // SPEC: Should work without variables
  const result1 = builder.$send('GetStringOptional')
  Ts.Test.exact<Promise<{ string: string | null } | null>>()(result1)

  // SPEC: Should work with variables
  const result2 = builder.$send('GetStringOptional', { string: 'test' })
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
  `).$send()

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
  `).$send()

  // SPEC: Should infer nested structure
  Ts.Test.exact<Promise<{ interface: { id: string } | null } | null>>()(result)
}
