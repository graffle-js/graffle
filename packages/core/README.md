# @graffle/core

Graffle-specific shared infrastructure including context system, extension base, and core types.

This package provides the foundational building blocks for Graffle clients and extensions.

## Features

- **Context System**: Manage client configuration and state
- **Extension Base**: Base class for creating Graffle extensions
- **Global Registry**: Type-safe global registry for generated clients
- **Request Result Types**: Type definitions for request results
- **Shared Utilities**: Common utilities used across Graffle packages

## Installation

```bash
npm install @graffle/core @graffle/document @graffle/graphql
# or
pnpm add @graffle/core @graffle/document @graffle/graphql
```

## Usage

```typescript
import { Core } from '@graffle/core'

// Use: Core.Extension, Core.Context, Core.GlobalRegistry
```

## License

MIT
