# @graffle/graphql

Generic GraphQL utilities for schema analysis, document operations, and type definitions.

This package provides tree-shakeable, reusable GraphQL tools that can be used standalone or as part of the Graffle ecosystem.

## Features

- **Schema Utilities**: Schema introspection, analysis, and type operations
- **Document Utilities**: GraphQL document parsing and manipulation
- **HTTP Helpers**: HTTP request/response utilities for GraphQL
- **Execution Helpers**: GraphQL execution utilities
- **Type Definitions**: Complete TypeScript type definitions for GraphQL schemas

## Installation

```bash
npm install @graffle/graphql graphql
# or
pnpm add @graffle/graphql graphql
```

## Usage

```typescript
import * as Graphql from '@graffle/graphql'
import * as Schema from '@graffle/graphql/schema'
import * as Document from '@graffle/graphql/document'
```

## License

MIT
