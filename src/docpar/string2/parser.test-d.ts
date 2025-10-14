/**
 * Type-level tests for the string2 parser (single-pass GraphQL parser)
 */

import type { Possible } from '#test/schema/possible/client/$.js'
import type { Ts } from '@wollybeard/kit'
import type { ParseDocument } from './parser.js'

// Get the actual schema from Possible client
type PossibleSchema = Possible.$.Schema

// ==================================================================================================
//                                   Basic Field Selection
// ==================================================================================================

type _ = Ts.Test.Cases<
  // Test 1: Simplest possible query - anonymous query with single scalar field
  Ts.Test.exact<
    ParseDocument<'{ id }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          id: string | null
        }
        variables: {}
      }
    }
  >,

  // Test 2: Named query with single scalar field
  Ts.Test.exact<
    ParseDocument<'query myQuery { id }', PossibleSchema>,
    {
      myQuery: {
        name: 'myQuery'
        result: {
          id: string | null
        }
        variables: {}
      }
    }
  >,

  // Test 3: Multiple scalar fields
  Ts.Test.exact<
    ParseDocument<'{ id idNonNull }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          id: string | null
          idNonNull: string
        }
        variables: {}
      }
    }
  >,

  // Test 4: Query with custom scalar (Date)
  Ts.Test.exact<
    ParseDocument<'{ date }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          date: Date | null
        }
        variables: {}
      }
    }
  >,

  // Test 5: Query with spaces/formatting (from actual gql test)
  Ts.Test.exact<
    ParseDocument<'query myQuery { date }', PossibleSchema>,
    {
      myQuery: {
        name: 'myQuery'
        result: {
          date: Date | null
        }
        variables: {}
      }
    }
  >,

  // Test 6: Non-null field
  Ts.Test.exact<
    ParseDocument<'{ idNonNull }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          idNonNull: string
        }
        variables: {}
      }
    }
  >
>

// ==================================================================================================
//                                   Nested Object Selection
// ==================================================================================================

type _Nested = Ts.Test.Cases<
  // Test 1: Single nested object with one field
  Ts.Test.exact<
    ParseDocument<'{ object { id } }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          object: {
            id: string | null
          } | null
        }
        variables: {}
      }
    }
  >,

  // Test 2: Nested object with multiple fields
  Ts.Test.exact<
    ParseDocument<'{ object { id string } }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          object: {
            id: string | null
            string: string | null
          } | null
        }
        variables: {}
      }
    }
  >,

  // Test 3: Multiple nested objects at same level
  Ts.Test.exact<
    ParseDocument<'{ object { id } objectNested { id } }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          object: {
            id: string | null
          } | null
          objectNested: {
            id: string | null
          } | null
        }
        variables: {}
      }
    }
  >,

  // Test 4: Deep nesting (3 levels)
  Ts.Test.exact<
    ParseDocument<'{ objectNested { object { id } } }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          objectNested: {
            object: {
              id: string | null
            } | null
          } | null
        }
        variables: {}
      }
    }
  >
>

// ==================================================================================================
//                                   Field Arguments
// ==================================================================================================

type _Arguments = Ts.Test.Cases<
  // Test 1: Field with single argument
  Ts.Test.exact<
    ParseDocument<'{ stringWithArgs(string: "hello") }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          stringWithArgs: string | null
        }
        variables: {}
      }
    }
  >,

  // Test 2: Field with required argument
  Ts.Test.exact<
    ParseDocument<'{ stringWithRequiredArg(string: "required") }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          stringWithRequiredArg: string | null
        }
        variables: {}
      }
    }
  >,

  // Test 3: Field with multiple arguments - TODO: Add test when we have a field with multiple args
  // Ts.Test.exact<
  //   ParseDocument<'{ fieldWithMultiArgs(arg1: "a", arg2: 42) }', PossibleSchema>,
  //   { ... }
  // >,

  // Test 4: Nested object with arguments
  Ts.Test.exact<
    ParseDocument<'{ objectWithArgs(id: "123") { id } }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          objectWithArgs: {
            id: string | null
          } | null
        }
        variables: {}
      }
    }
  >
>

// ==================================================================================================
//                                   Multiple Operations
// ==================================================================================================

type _MultiOp = Ts.Test.Cases<
  // Test 1: Two queries
  Ts.Test.exact<
    ParseDocument<'query A { id } query B { string }', PossibleSchema>,
    {
      A: {
        name: 'A'
        result: {
          id: string | null
        }
        variables: {}
      }
      B: {
        name: 'B'
        result: {
          string: string | null
        }
        variables: {}
      }
    }
  >,

  // Test 2: Query and mutation
  Ts.Test.exact<
    ParseDocument<'query GetId { id } mutation SetId { idNonNull }', PossibleSchema>,
    {
      GetId: {
        name: 'GetId'
        result: {
          id: string | null
        }
        variables: {}
      }
      SetId: {
        name: 'SetId'
        result: {
          idNonNull: string
        }
        variables: {}
      }
    }
  >
>

// ==================================================================================================
//                                   Mutations
// ==================================================================================================

type _Mutations = Ts.Test.Cases<
  // Test 1: Simple mutation
  Ts.Test.exact<
    ParseDocument<'mutation { id }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          id: string | null
        }
        variables: {}
      }
    }
  >,

  // Test 2: Named mutation
  Ts.Test.exact<
    ParseDocument<'mutation SetId { idNonNull }', PossibleSchema>,
    {
      SetId: {
        name: 'SetId'
        result: {
          idNonNull: string
        }
        variables: {}
      }
    }
  >
>

// ==================================================================================================
//                                   Special Types (Enums, Unions, etc.)
// ==================================================================================================

type _SpecialTypes = Ts.Test.Cases<
  // Test 1: Enum field
  Ts.Test.exact<
    ParseDocument<'{ abcEnum }', PossibleSchema>,
    {
      default: {
        name: 'default'
        result: {
          abcEnum: 'A' | 'B' | 'C' | null
        }
        variables: {}
      }
    }
  >

  // TODO: Add union and interface tests when parser supports them
  // Ts.Test.exact<
  //   ParseDocument<'{ unionFooBar { ... on Foo { id } } }', PossibleSchema>,
  //   { ... }
  // >
>
