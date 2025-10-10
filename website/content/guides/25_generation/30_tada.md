# Tada

Graffle leverages [gql-tada](https://gql-tada.0no.co)'s tooling to generate introspection types, enabling type safety even when using native GraphQL syntax (as opposed to e.g. [Document Builder](/guides/methods/document)).

## Usage

Graffle offers two interfaces for creaeting documents with native GraphQL syntax:

|          | Static                            | Instance                   |
| -------- | --------------------------------- | -------------------------- |
| Usage    | `client.send(Graffle.gql('...'))` | `client.gql('...').send()` |
| Use-Case | Reusable documents                | One-off queries            |
| Docs     | [todo](...)                       | [todo]()                   |

Read their respective docs to learn more.

// TODO remove this section, it should go in the real docs for this interface

## Static Interface

The generated `Graffle.gql()` function creates typed documents. This is good for

- Defining ahead of time, at module scope, etc., organizing centrally or some grouping strategy
- Sharing queries across components
- Testing documents in isolation if needed

Example:

```typescript
import { Graffle } from './graffle/_exports.js'

// Define a type-safe query using the generated gql() function
const GetUserDocument = Graffle.gql(`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`)

// Create your Graffle client with transport
const client = Graffle.create()

// Execute with client.send() - variables are type-checked!
const result = await client.send(GetUserDocument, { id: '123' })

// Result is fully typed
console.log(result?.user?.name)
```

// TODO remove this section, it should go in the real docs for this interface

### Instance

The `client.gql()` method allows chaining `.send()`. This is good for

- Concise syntax for one-off queries
- Colocating operations and execution

```typescript
import { Graffle } from './graffle/_exports.js'

const client = Graffle.create()

// Define and execute in one expression
const result = await client.gql(`
    query GetUser($id: ID!) {
      user(id: $id) {
        id
        name
        email
      }
    }
  `)
  .send({ id: '123' })

// Result is fully typed
console.log(result?.user?.name)
```

### Editor Validation and autocomplete (Optional)

You can make your editor validate and autocomplete GraphQL native documents by using the GraphQLSP plugin. Graffle CLI will check your configuration and provide helpful setup instructions if it is not correctly configured. To disable this check, set `lint.missingGraphqlSP: false` in your `graffle.config.ts`. The steps are:

1. Install the GraphQL LSP plugin:

   ```sh
   npm add -D @0no-co/graphqlsp
   ```

2. Configure the GraphQLSP TypeScript plugin in your `tsconfig.json`.

   ```json
   {
     "compilerOptions": {
       "plugins": [
         {
           "name": "@0no-co/graphqlsp",
           "schema": "./path/to/your/schema/as/sdl/schema.graphql"
         }
       ]
     }
   }
   ```

3. (optional) As you can see you must point to your schema as an SDL file. If you don't already have that, Graffle can generate one for you:

   ```ts
   // graffle.config.ts
   export default {
     schema: '...', // Your schema source (URL, file, etc.)
     outputSDL: true, // Graffle will generate an SDL file
   }
   ```

Note: We want Graffle to support configuring this for you, see [#1389](https://github.com/graffle-js/graffle/issues/1389).

## Limitations

### No Tagged Template Literal Support

Graffle's gql-tada integration requires call expression syntax (`Graffle.gql("...")`) instead of tagged template syntax (`` Graffle.gql`...` ``). TypeScript cannot infer const string literals from `TemplateStringsArray`, which gql-tada's type-level parser requires. See [TypeScript Issue #33304](https://github.com/microsoft/TypeScript/issues/33304).

```typescript
// ✅ Works - Call expression syntax
const query = Graffle.gql(`query { user { id } }`)

// ❌ Doesn't work - Tagged template syntax
const query = Graffle.gql`query { user { id } }`
//                        ^ Type error: template literal not supported
```

The same limitation applies to the instance API:

```typescript
// ✅ Works
client.gql(`query { user { id } }`).send()

// ❌ Doesn't work
client.gql`query { user { id } }`.send()
```

### Single Operation Documents Only

gql-tada's type parser can parse documents with multiple named operations, but only infers types for the first operation ([gql.tada #489](https://github.com/0no-co/gql.tada/issues/489)). This means each `.gql()` call should contain **one operation only** (one query, mutation, or subscription).

```typescript
// ❌ Multi-operation document - only first operation gets types
const doc = Graffle.gql(`
  query GetUser { user { id } }
  query GetPosts { posts { id } }
`)
```

**Workaround:** Use Graffle's static document builder (`.document()`) for multi-operation documents. The document builder provides superior multi-operation support with full type-level tracking of all operation names, variables, and results:

```typescript
import { Graffle } from './graffle/_exports.js'

// ✅ Multi-operation document with builder
const doc = Graffle.document({
  query: {
    GetUser: {
      user: (args) =>
        args({ $: { id: 'ID!' } }, {
          id: true,
          name: true,
        }),
    },
    GetPosts: {
      posts: {
        id: true,
        title: true,
      },
    },
  },
})

// Execute specific operation
const userData = await client.send(doc).run('GetUser', { id: '123' })
const postsData = await client.send(doc).run('GetPosts')
```

## Architecture

Graffle uses gql-tada's format to generate a `tada.ts` module with introspection types. This module exports types that describe your GraphQL schema in a format that gql-tada understands.

```
graffle/
├── modules/
│   ├── tada.ts       # gql-tada introspection types
│   └── ...
```

The generated `tada.ts` file contains:

- `introspection_types` - Type definitions for all GraphQL types in your schema
- `introspection` - The main introspection type used by gql-tada
