import type { Possible } from '#test/schema/possible/client/$.js'
import type { ParseDocument } from './parser.js'

// Get the actual schema from Possible client
type PossibleSchema = Possible.$.Schema

// Test a simple query with explicit inline string
type TestQuery = 'query myQuery { id }'
type Result = ParseDocument<TestQuery, PossibleSchema>

// Check what we're getting - this should show what the parser returns
type _Test = Result

// Also test that the schema Root.query is correct
type QueryRoot = PossibleSchema['Root']['query']
type _TestQueryRoot = QueryRoot
