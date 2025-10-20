import type { Grafaid } from '#lib/grafaid'
import { Docpar } from '#src/docpar/$.js'
import { Graffle } from '#src/exports/index.js'

const $ = Docpar.Var.$
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'

const client = Possible.create()

// ==================================================================================================
//                                        DOCUMENT FIXTURES
// ==================================================================================================

const singleNoVars = Possible.gql({ query: { myQuery: { id: true } } })
const singleNoVarsString = Possible.gql(`query myQuery { id }`)

const singleRequiredVars = Possible.gql({
  query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } },
})
const singleRequiredVarsString = Possible.gql(`query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }`)

const singleOptionalVars = Possible.gql({
  query: { search: { stringWithArgs: { $: { string: $ }, string: true } } },
})
const singleOptionalVarsString = Possible.gql(`query search($string: String) { stringWithArgs(string: $string) }`)

const multiNoVars = Possible.gql({
  query: { getUser: { id: true } },
  mutation: { addId: { id: true } },
})
const multiNoVarsString = Possible.gql(`query getUser { id } mutation addId { id }`)

const multiRequiredVars = Possible.gql({
  query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } },
  mutation: { setId: { idNonNull: true } },
})
const multiRequiredVarsString = Possible.gql(
  `query getById($id: ID!) { interfaceWithArgs(id: $id) { id } } mutation setId { idNonNull }`,
)

// ==================================================================================================
//                                   UNTYPED DOCUMENT
// ==================================================================================================
const untypedDoc = `query { id }` as string
type R10 = unknown

Ts.Assert.awaited.exact.of.as<R10>()(client.gql(untypedDoc).$send())
Ts.Assert.awaited.exact.of.as<R10>()(client.gql(untypedDoc).$send('anyName'))
Ts.Assert.awaited.exact.of.as<R10>()(client.gql(untypedDoc).$send({ any: 'vars' }))
Ts.Assert.awaited.exact.of.as<R10>()(client.gql(untypedDoc).$send('anyName', { any: 'vars' }))

// ==================================================================================================
//                            SINGLE OPERATION - NO VARIABLES
// ==================================================================================================
type R1 = typeof singleNoVars['operations']['result'] | null

Ts.Assert.exact.of.as<R1>()(await client.gql(singleNoVars).$send('myQuery'))
Ts.Assert.exact.of.as<R1>()(await client.gql(singleNoVars).$send())
Ts.Assert.exact.of.as<R1>()(await client.gql(singleNoVars).myQuery())
Ts.Assert.exact.of.as<R1>()(await client.gql(singleNoVarsString).$send())
// Inline string
Ts.Assert.exact.of.as<R1>()(await client.gql(`query myQuery { id }`).$send())

// Inline object
Ts.Assert.exact.of.as<R1>()(await client.gql({ query: { myQuery: { id: true } } }).$send())
// @ts-expect-error - invalid operation name
client.gql(singleNoVars).bad()
// @ts-expect-error - invalid operation name
client.gql(singleNoVars).$send('bad')
// @ts-expect-error - unexpected variables
client.gql(singleNoVars).$send({})
// @ts-expect-error - unexpected variables (string)
client.gql(singleNoVarsString).$send({})

// ==================================================================================================
//                          SINGLE OPERATION - REQUIRED VARIABLES
// ==================================================================================================
type R2 = typeof singleRequiredVars['operations']['result'] | null

Ts.Assert.exact.of.as<R2>()(await client.gql(singleRequiredVars).$send('getById', { id: '' }))
Ts.Assert.exact.of.as<R2>()(await client.gql(singleRequiredVars).$send({ id: '' }))
Ts.Assert.exact.of.as<R2>()(await client.gql(singleRequiredVars).getById({ id: '' }))
Ts.Assert.exact.of.as<R2>()(await client.gql(singleRequiredVarsString).$send({ id: '' }))
// Inline string
Ts.Assert.exact.of.as<R2>()(
  await client.gql(`query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }`).$send({ id: '' }),
)
// Inline object
Ts.Assert.exact.of.as<R2>()(
  await client.gql({ query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } } }).$send({
    id: '',
  }),
)
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
// @ts-expect-error - missing required variable 'id' (string)
client.gql(singleRequiredVarsString).$send()
// @ts-expect-error - wrong type for variable 'id' (string)
client.gql(singleRequiredVarsString).$send({ id: 0 })

// ==================================================================================================
//                          SINGLE OPERATION - OPTIONAL VARIABLES
// ==================================================================================================
type R3 = typeof singleOptionalVars['operations']['result'] | null

Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVars).$send('search'))
Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVars).$send('search', {}))
Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVars).$send('search', { string: 'hello' }))
Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVars).$send())
Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVars).$send({}))
Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVars).$send({ string: 'hello' }))
Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVars).search())
Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVars).search({}))
Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVars).search({ string: 'hello' }))
Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVarsString).$send())
Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVarsString).$send({}))
Ts.Assert.exact.of.as<R3>()(await client.gql(singleOptionalVarsString).$send({ string: 'hello' }))
// Inline string
Ts.Assert.exact.of.as<R3>()(
  await client.gql(`query search($string: String) { stringWithArgs(string: $string) }`).$send(),
)
Ts.Assert.exact.of.as<R3>()(
  await client.gql(`query search($string: String) { stringWithArgs(string: $string) }`).$send({ string: 'hello' }),
)
// Inline object
Ts.Assert.exact.of.as<R3>()(
  await client.gql({ query: { search: { stringWithArgs: { $: { string: $ }, string: true } } } }).$send(),
)
// TODO: Inline object with variables has type inference limitation
// Workaround: assign to const first, then pass to gql()
// Ts.Assert.equiv.is<R3>()(
//   await client.gql({ query: { search: { stringWithArgs: { $: { string: $ }, string: true } } } }).$send({
//     string: 'hello',
//   }),
// )
// @ts-expect-error - invalid operation name
client.gql(singleOptionalVars).$send('bad')
// @ts-expect-error - wrong type for variable 'string'
client.gql(singleOptionalVars).$send('search', { string: 0 })
// @ts-expect-error - wrong type for variable 'string' (string)
client.gql(singleOptionalVarsString).$send({ string: 0 })

// ==================================================================================================
//                            MULTI OPERATION - NO VARIABLES
// ==================================================================================================
type R4 = Extract<typeof multiNoVars['operations'], { name: 'getUser' }>['result'] | null
type R5 = Extract<typeof multiNoVars['operations'], { name: 'addId' }>['result'] | null

Ts.Assert.exact.of.as<R4>()(await client.gql(multiNoVars).$send('getUser'))
Ts.Assert.exact.of.as<R5>()(await client.gql(multiNoVars).$send('addId'))
Ts.Assert.exact.of.as<R4>()(await client.gql(multiNoVars).getUser())
Ts.Assert.exact.of.as<R5>()(await client.gql(multiNoVars).addId())
// Multi-op string documents require operation name
Ts.Assert.exact.of.as<R4>()(await client.gql(multiNoVarsString).$send('getUser'))
// Inline string - multi-op requires operation name
Ts.Assert.exact.of.as<R4>()(await client.gql(`query getUser { id } mutation addId { id }`).$send('getUser'))
// Inline object
Ts.Assert.exact.of.as<R4>()(
  await client.gql({ query: { getUser: { id: true } }, mutation: { addId: { id: true } } }).$send('getUser'),
)
Ts.Assert.exact.of.as<R5>()(
  await client.gql({ query: { getUser: { id: true } }, mutation: { addId: { id: true } } }).$send('addId'),
)
// @ts-expect-error - invalid operation name
client.gql(multiNoVars).bad()
// @ts-expect-error - invalid operation name
client.gql(multiNoVars).$send('bad')
// @ts-expect-error - unexpected variables
client.gql(multiNoVars).$send('getUser', {})
// @ts-expect-error - name required
client.gql(multiNoVars).$send()
// @ts-expect-error - unexpected variables (string multi-op)
client.gql(multiNoVarsString).$send('getUser', {})

// ==================================================================================================
//                            MULTI OPERATION - WITH VARIABLES
// ==================================================================================================
type R6a = Extract<typeof multiRequiredVars['operations'], { name: 'getById' }>['result'] | null
type R6b = Extract<typeof multiRequiredVars['operations'], { name: 'setId' }>['result'] | null

Ts.Assert.exact.of.as<R6a>()(await client.gql(multiRequiredVars).$send('getById', { id: 'user-123' }))
Ts.Assert.exact.of.as<R6b>()(await client.gql(multiRequiredVars).$send('setId'))
Ts.Assert.exact.of.as<R6a>()(await client.gql(multiRequiredVars).getById({ id: 'user-123' }))
Ts.Assert.exact.of.as<R6b>()(await client.gql(multiRequiredVars).setId())
// Multi-op string documents require operation name
Ts.Assert.exact.of.as<R6a>()(await client.gql(multiRequiredVarsString).$send('getById', { id: 'user-123' }))
// Inline string - multi-op requires operation name
Ts.Assert.exact.of.as<R6a>()(
  await client
    .gql(`query getById($id: ID!) { interfaceWithArgs(id: $id) { id } } mutation setId { idNonNull }`)
    .$send('getById', { id: 'user-123' }),
)
const x = await client
  .gql({
    query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } },
    mutation: { setId: { idNonNull: true } },
  })
  .$send('getById', { id: 'user-123' })
// Inline object
Ts.Assert.exact.of.as<R6a>()(
  await client
    .gql({
      query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } },
      mutation: { setId: { idNonNull: true } },
    })
    .$send('getById', { id: 'user-123' }),
)
Ts.Assert.exact.of.as<R6b>()(
  await client
    .gql({
      query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } },
      mutation: { setId: { idNonNull: true } },
    })
    .$send('setId'),
)
// @ts-expect-error - invalid operation name
client.gql(multiRequiredVars).$send('bad')
// @ts-expect-error - missing required variable 'id'
client.gql(multiRequiredVars).$send('getById')
// @ts-expect-error - wrong type for variable 'id'
client.gql(multiRequiredVars).$send('getById', { id: 0 })
// @ts-expect-error - name required
client.gql(multiNoVars).$send()
// @ts-expect-error - missing required variable 'id' (string multi-op)
client.gql(multiRequiredVarsString).$send('getById')
// @ts-expect-error - wrong type for variable 'id' (string multi-op)
client.gql(multiRequiredVarsString).$send('getById', { id: 0 })

// ==================================================================================================
//                       TYPED DOCUMENT LIKE VARIANTS (TypedDocumentNode, etc.)
// ==================================================================================================

// TypedDocumentString
declare const typedDocString: Grafaid.Document.Typed.String<{ id: string | null }, { userId: string }>
Ts.Assert.exact.of.as<{ id: string | null } | null>()(await client.gql(typedDocString).$send({ userId: '123' }))

// TypedDocumentNode
declare const typedDocNode: Grafaid.Document.Typed.Node<{ name: string | null }, { id: string }>
Ts.Assert.exact.of.as<{ name: string | null } | null>()(await client.gql(typedDocNode).$send({ id: '456' }))

// TypedQueryDocumentNode
declare const typedQueryDocNode: Grafaid.Document.Typed.Query<{ title: string | null }, {}>
Ts.Assert.exact.of.as<{ title: string | null } | null>()(await client.gql(typedQueryDocNode).$send())

// ==================================================================================================
//                                   SDDM TYPE SAFETY
// ==================================================================================================

// Document that requires SDDM (has custom scalars with RequiresSDDM = true)
declare const sddmDoc: Grafaid.Document.Typed.String<{ id: string | null }, {}, true>

// Client with SDDM support - should work
const clientWithSDDM = Possible.create()
Ts.Assert.exact.of.as<{ id: string | null } | null>()(await clientWithSDDM.gql(sddmDoc).$send())

const clientWithoutSDDM = Graffle.create().transport({ url: 'https://example.com/graphql' })
// @ts-expect-error - plain client lacks SDDM support, document requires it
clientWithoutSDDM.gql(sddmDoc)

// ==================================================================================================
//                           TRANSPORT PREFLIGHT CHECKS
// ==================================================================================================

import type { Context } from '#src/context/$.js'
import { ATransport, RequiredConfigurationTransportA, RequiredConfigurationTransportB } from '#test/fixtures/transports'
import { g0 } from '#test/helpers'

const g1 = g0.transport(ATransport)
const g2 = g0.transport(RequiredConfigurationTransportA).transport(RequiredConfigurationTransportB)

// .gql() is callable, but $send is not available if no transports registered
Ts.Assert.exact.of.as<Context.Configuration.Check.Errors.PreflightCheckNoTransportsRegistered>()(
  g0.gql('query { __typename }').$send,
)
// dprint-ignore
// $send not available if current transport not ready
Ts.Assert.exact.of.as<Context.Configuration.Check.Errors.PreflightCheckTransportNotReady<RequiredConfigurationTransportA['name']>>()(g2.gql('query { __typename }').$send)
// dprint-ignore
// ... Reflects name of currently selected transport
Ts.Assert.exact.of.as<Context.Configuration.Check.Errors.PreflightCheckTransportNotReady<RequiredConfigurationTransportB['name']>>()(g2.transport(RequiredConfigurationTransportB.name).gql('query { __typename }').$send)
