---
aside: false
---

# Transport Memory

This example shows how you can send requests against an in-memory GraphQL schema instead of one hosted over HTTP.

-

Imagine this example as server code that receives HTTP requests and internally fulfills them with requests to a GraphQL schema.

-

Included here is how to work with Graffle's lightweight client-forking model to create a request-scoped Graffle client.
By having a Graffle instance per request, the context value that the GraphQL resolvers get during execution can reflect
the user making the request.

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from 'graffle'
import { TransportMemory } from 'graffle/extensions/transport-memory'
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'

interface Context {
  database: DatabaseClient
  user: RequestingUser
}

interface RequestingUser {
  id: string
}

interface DatabaseClient {
  account: {
    findUnique: (parameters: { where: { ownerId: string } }) => DatabaseModelAccount | undefined
  }
  user: {
    findUnique: (parameters: { where: { id: string } }) => DatabaseModelUser | undefined
  }
}

interface DatabaseModelUser {
  id: string
  name: string
}

interface DatabaseModelAccount {
  id: string
  ownerId: string
}

const databaseData = {
  accounts: [{
    id: `account_abc123`,
    ownerId: `user_abc123`,
  }],
  users: [{
    id: `user_abc123`,
    name: `Kenya Hara`,
  }],
}

const DatabaseClient = {
  create: (): DatabaseClient => {
    return {
      account: {
        findUnique: (parameters: { where: { ownerId: string } }) =>
          databaseData.accounts.find((account) => account.ownerId === parameters.where.ownerId),
      },
      user: {
        findUnique: (parameters: { where: { id: string } }) =>
          databaseData.users.find((user) => user.id === parameters.where.id),
      },
    }
  },
}

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: `Query`,
    fields: {
      account: {
        type: GraphQLString,
        resolve: (_, __, context: Context) => {
          const account = context.database.account.findUnique({ where: { ownerId: context.user.id } })
          if (!account) throw new Error(`Account not found.`)
          return account.id
        },
      },
    },
  }),
})

interface Token {
  userId: string
}

const getAndValidateToken = (request: Request): Token => {
  const tokenEncoded = request.headers.get(`authorization`)?.match(/^Bearer\s+(.+)$/)?.[1]
  if (!tokenEncoded) throw new Error(`No token provided.`)
  // ... decode token securely ...
  return {
    userId: tokenEncoded,
  }
}

const database = DatabaseClient.create()

const baseGraffle = Graffle
  .create()
  .use(TransportMemory({ schema }))
  .transport(`memory`)

const handleRequest = async (request: Request) => {
  const user = {
    id: getAndValidateToken(request).userId,
  }

  const resolverContextValue = {
    database,
    user,
  }

  // Create a copy of Graffle with transport configured
  // with context data particular to this request.
  const requestScopedGraffle = baseGraffle.transport({
    resolverValues: {
      context: resolverContextValue,
    },
  })

  const data = await requestScopedGraffle.gql`
    {
      account
    }
  `.send()

  console.log(data)
}

// Server receives a request...
await handleRequest(
  new Request(`https://foo.com`, {
    headers: new Headers({ authorization: `Bearer user_abc123` }),
  }),
)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```json
{
  "account": "account_abc123"
}
```
<!-- dprint-ignore-end -->
