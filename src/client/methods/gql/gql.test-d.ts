import type { Grafaid } from '#lib/grafaid'
import { $ } from '#src/extensions/DocumentBuilder/var/var.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'

const client = Possible.create()

// ==================================================================================================
//                                        DOCUMENT FIXTURES
// ==================================================================================================

const singleNoVars = Possible.gql({ query: { myQuery: { id: true } } })
const singleNoVarsTada = Possible.gql(`query myQuery { id }`)

const singleRequiredVars = Possible.gql({
  query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } },
})
const singleRequiredVarsTada = Possible.gql(`query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }`)

const singleOptionalVars = Possible.gql({
  query: { search: { stringWithArgs: { $: { string: $ }, string: true } } },
})
const singleOptionalVarsTada = Possible.gql(`query search($string: String) { stringWithArgs(string: $string) }`)

const multiNoVars = Possible.gql({
  query: { getUser: { id: true } },
  mutation: { addId: { id: true } },
})
const multiNoVarsTada = Possible.gql(`query getUser { id } mutation addId { id }`)

const multiRequiredVars = Possible.gql({
  query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } },
  mutation: { setId: { idNonNull: true } },
})
const multiRequiredVarsTada = Possible.gql(
  `query getById($id: ID!) { interfaceWithArgs(id: $id) { id } } mutation setId { idNonNull }`,
)

// ==================================================================================================
//                                   UNTYPED DOCUMENT
// ==================================================================================================
const untypedDoc = `query { id }` as string
type R10 = unknown

Ts.Test.exact<R10>()(await client.gql(untypedDoc).$send())
Ts.Test.exact<R10>()(await client.gql(untypedDoc).$send('anyName'))
Ts.Test.exact<R10>()(await client.gql(untypedDoc).$send({ any: 'vars' }))
Ts.Test.exact<R10>()(await client.gql(untypedDoc).$send('anyName', { any: 'vars' }))

// ==================================================================================================
//                            SINGLE OPERATION - NO VARIABLES
// ==================================================================================================
type R1 = typeof singleNoVars['__operation']['result'] | null

Ts.Test.exact<R1>()(await client.gql(singleNoVars).$send('myQuery'))
Ts.Test.exact<R1>()(await client.gql(singleNoVars).$send())
Ts.Test.exact<R1>()(await client.gql(singleNoVars).myQuery())
Ts.Test.exact<R1>()(await client.gql(singleNoVarsTada).$send())
// @ts-expect-error - invalid operation name
client.gql(singleNoVars).bad()
// @ts-expect-error - invalid operation name
client.gql(singleNoVars).$send('bad')
// @ts-expect-error - unexpected variables
client.gql(singleNoVars).$send({})
// @ts-expect-error - unexpected variables (tada)
client.gql(singleNoVarsTada).$send({})

// ==================================================================================================
//                          SINGLE OPERATION - REQUIRED VARIABLES
// ==================================================================================================
type R2 = typeof singleRequiredVars['__operation']['result'] | null
// Tada includes __typename for interface types (deviation from DocumentBuilder)
type R2Tada = {
  interfaceWithArgs: {
    __typename?: 'Object1ImplementingInterface' | undefined
    id: string | null
  } | {
    __typename?: 'Object2ImplementingInterface' | undefined
    id: string | null
  } | null
} | null

Ts.Test.exact<R2>()(await client.gql(singleRequiredVars).$send('getById', { id: '' }))
Ts.Test.exact<R2>()(await client.gql(singleRequiredVars).$send({ id: '' }))
Ts.Test.exact<R2>()(await client.gql(singleRequiredVars).getById({ id: '' }))
Ts.Test.exact<R2Tada>()(await client.gql(singleRequiredVarsTada).$send({ id: '' }))
// @ts-expect-error - invalid operation name
client.gql(singleRequiredVars).$send('bad')
// @ts-expect-error - missing required variable 'id'
client.gql(singleRequiredVars).$send('getById')
// @ts-expect-error - wrong type for variable 'id'
client.gql(singleRequiredVars).$send('getById', { id: 0 })
// @ts-expect-error - wrong type for variable 'id'
client.gql(singleRequiredVars).$send({ id: 0 })
// @ts-expect-error - missing required variable 'id'
client.gql(singleRequiredVars).getById()
// @ts-expect-error - missing required variable 'id' (tada)
client.gql(singleRequiredVarsTada).$send()
// @ts-expect-error - wrong type for variable 'id' (tada)
client.gql(singleRequiredVarsTada).$send({ id: 0 })

// ==================================================================================================
//                          SINGLE OPERATION - OPTIONAL VARIABLES
// ==================================================================================================
type R3 = typeof singleOptionalVars['__operation']['result'] | null

Ts.Test.exact<R3>()(await client.gql(singleOptionalVars).$send('search'))
Ts.Test.exact<R3>()(await client.gql(singleOptionalVars).$send('search', {}))
Ts.Test.exact<R3>()(await client.gql(singleOptionalVars).$send('search', { string: 'hello' }))
Ts.Test.exact<R3>()(await client.gql(singleOptionalVars).$send())
Ts.Test.exact<R3>()(await client.gql(singleOptionalVars).$send({}))
Ts.Test.exact<R3>()(await client.gql(singleOptionalVars).$send({ string: 'hello' }))
Ts.Test.exact<R3>()(await client.gql(singleOptionalVars).search())
Ts.Test.exact<R3>()(await client.gql(singleOptionalVars).search({}))
Ts.Test.exact<R3>()(await client.gql(singleOptionalVars).search({ string: 'hello' }))
Ts.Test.exact<R3>()(await client.gql(singleOptionalVarsTada).$send())
Ts.Test.exact<R3>()(await client.gql(singleOptionalVarsTada).$send({}))
Ts.Test.exact<R3>()(await client.gql(singleOptionalVarsTada).$send({ string: 'hello' }))
// @ts-expect-error - invalid operation name
client.gql(singleOptionalVars).$send('bad')
// @ts-expect-error - wrong type for variable 'string'
client.gql(singleOptionalVars).$send('search', { string: 0 })
// @ts-expect-error - wrong type for variable 'string' (tada)
client.gql(singleOptionalVarsTada).$send({ string: 0 })

// ==================================================================================================
//                            MULTI OPERATION - NO VARIABLES
// ==================================================================================================
type R4 = typeof multiNoVars['__operations']['getUser']['result'] | null
type R5 = typeof multiNoVars['__operations']['addId']['result'] | null

Ts.Test.exact<R4>()(await client.gql(multiNoVars).$send('getUser'))
Ts.Test.exact<R5>()(await client.gql(multiNoVars).$send('addId'))
Ts.Test.exact<R4>()(await client.gql(multiNoVars).getUser())
Ts.Test.exact<R5>()(await client.gql(multiNoVars).addId())
// Tada only supports first operation in multi-op documents (known limitation)
Ts.Test.exact<R4>()(await client.gql(multiNoVarsTada).$send())
// @ts-expect-error - invalid operation name
client.gql(multiNoVars).bad()
// @ts-expect-error - invalid operation name
client.gql(multiNoVars).$send('bad')
// @ts-expect-error - unexpected variables
client.gql(multiNoVars).$send('getUser', {})
// @ts-expect-error - name required
client.gql(multiNoVars).$send()
// @ts-expect-error - unexpected variables (tada - first op only)
client.gql(multiNoVarsTada).$send({})

// ==================================================================================================
//                            MULTI OPERATION - WITH VARIABLES
// ==================================================================================================
type R6a = typeof multiRequiredVars['__operations']['getById']['result'] | null
type R6b = typeof multiRequiredVars['__operations']['setId']['result'] | null
// Tada includes __typename for interface types (deviation from DocumentBuilder)
type R6aTada = {
  interfaceWithArgs: {
    __typename?: 'Object1ImplementingInterface' | undefined
    id: string | null
  } | {
    __typename?: 'Object2ImplementingInterface' | undefined
    id: string | null
  } | null
} | null

Ts.Test.exact<R6a>()(await client.gql(multiRequiredVars).$send('getById', { id: 'user-123' }))
Ts.Test.exact<R6b>()(await client.gql(multiRequiredVars).$send('setId'))
Ts.Test.exact<R6a>()(await client.gql(multiRequiredVars).getById({ id: 'user-123' }))
Ts.Test.exact<R6b>()(await client.gql(multiRequiredVars).setId())
// Tada only supports first operation in multi-op documents (known limitation)
Ts.Test.exact<R6aTada>()(await client.gql(multiRequiredVarsTada).$send({ id: 'user-123' }))
// @ts-expect-error - invalid operation name
client.gql(multiRequiredVars).$send('bad')
// @ts-expect-error - missing required variable 'id'
client.gql(multiRequiredVars).$send('getById')
// @ts-expect-error - wrong type for variable 'id'
client.gql(multiRequiredVars).$send('getById', { id: 0 })
// @ts-expect-error - name required
client.gql(multiNoVars).$send()
// @ts-expect-error - missing required variable 'id' (tada - first op only)
client.gql(multiRequiredVarsTada).$send()
// @ts-expect-error - wrong type for variable 'id' (tada - first op only)
client.gql(multiRequiredVarsTada).$send({ id: 0 })

// ==================================================================================================
//                       TYPED DOCUMENT LIKE VARIANTS (TypedDocumentNode, etc.)
// ==================================================================================================

// TypedDocumentString (what gql-tada returns)
declare const typedDocString: Grafaid.Document.Typed.String<{ id: string | null }, { userId: string }>
Ts.Test.exact<{ id: string | null } | null>()(await client.gql(typedDocString).$send({ userId: '123' }))

// TypedDocumentNode (standard from @graphql-typed-document-node/core)
declare const typedDocNode: Grafaid.Document.Typed.Node<{ name: string | null }, { id: string }>
Ts.Test.exact<{ name: string | null } | null>()(await client.gql(typedDocNode).$send({ id: '456' }))

// TypedQueryDocumentNode (from graphql package)
declare const typedQueryDocNode: Grafaid.Document.Typed.Query<{ title: string | null }, {}>
Ts.Test.exact<{ title: string | null } | null>()(await client.gql(typedQueryDocNode).$send())
