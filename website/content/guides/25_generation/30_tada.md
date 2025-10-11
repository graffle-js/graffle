# LSP Setup for GraphQL Documents

When using Graffle's `.gql()` method with GraphQL document syntax, you can enhance your development experience with editor validation and autocomplete by configuring the GraphQLSP LSP plugin.

::: info
This is **optional** - Graffle provides full type safety at compile time without the LSP. The LSP adds real-time editor feedback as you write GraphQL documents.
:::

## Setup

### 1. Install GraphQLSP

```sh
npm add -D @0no-co/graphqlsp
```

### 2. Configure TypeScript Plugin

Add the GraphQLSP plugin to your `tsconfig.json`:

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

### 3. Generate SDL File (Optional)

If you don't already have your schema as an SDL file, Graffle can generate one for you:

```ts
// graffle.config.ts
export default {
  schema: '...', // Your schema source (URL, file, etc.)
  outputSDL: true, // Graffle will generate an SDL file
}
```

::: tip
Graffle CLI will check your GraphQLSP configuration and provide helpful setup instructions if it's not correctly configured. To disable this check, set `lint.missingGraphqlSP: false` in your `graffle.config.ts`.
:::

## What You Get

With GraphQLSP configured, you'll get:

- **Real-time validation** - Syntax errors, type mismatches, and unknown fields highlighted as you type
- **Autocomplete** - Field suggestions, argument names, and enum values
- **Go to definition** - Navigate from field usage to schema definition
- **Schema-aware hints** - Hover over fields to see types and documentation

## Related

- [Requests Guide](/guides/methods/requests) - Learn about using `.gql()` and `.send()`
- [GraphQLSP Documentation](https://github.com/0no-co/GraphQLSP) - Full LSP plugin documentation

## Future Improvements

We want Graffle to configure GraphQLSP for you automatically. Track progress in [#1389](https://github.com/graffle-js/graffle/issues/1389).
