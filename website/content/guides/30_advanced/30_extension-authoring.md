# Extension Authoring

> [!NOTE]
> This documentation is coming soon. In the meantime, please refer to the existing extensions in the codebase for examples of how to create your own extensions.

## Overview

Graffle's extension system allows you to extend the client with custom functionality. Extensions can hook into various parts of the request/response lifecycle and add new methods to the client.

## Examples

For now, you can look at these built-in extensions as examples:

- [Schema Errors Extension](https://github.com/graffle-js/graffle/tree/main/src/extensions/SchemaErrors)
- [Throws Extension](https://github.com/graffle-js/graffle/tree/main/src/extensions/Throws)
- [OpenTelemetry Extension](https://github.com/graffle-js/graffle/tree/main/src/extensions/Opentelemetry)

## Basic Pattern

Extensions typically follow this pattern:

```ts
import { type Extension } from 'graffle'

export const MyExtension = () => {
  return Extension.create({
    name: 'MyExtension',
    // Extension implementation
  })
}
```

## Parameterized vs Non-Parameterized Extensions

Extensions can be **parameterized** (accept configuration) or **non-parameterized** (no configuration needed). This design choice affects how users consume your extension.

### Non-Parameterized Extensions

Extensions without configuration can be exported directly as extension data objects. Users reference them without calling:

```ts
import { Extension } from 'graffle'

export const MyExtension = Extension.create({
  name: 'MyExtension',
  // No configuration needed
})

// Usage - no function call needed
client.use(MyExtension)
```

**Examples:**

- `TransportHttp` - No base configuration required
- `TransportMemory` - No configuration needed
- `Throws` - Simple behavior toggle

### Parameterized Extensions

Extensions that accept configuration should be wrapped in a factory function. Users must call the extension to use it:

```ts
import { Extension } from 'graffle'

export const MyExtension = (config?: { option?: string }) => {
  return Extension.create({
    name: 'MyExtension',
    // Use config in your implementation
  })
}

// Usage - must call to provide config (even if config is optional)
client.use(MyExtension({ option: 'value' }))
client.use(MyExtension()) // Still must call even with no args
```

**Examples:**

- `DocumentBuilder()` - Accepts domains configuration
- `SchemaErrors()` - Accepts error handling options
- `Introspection()` - May accept introspection options
- `OpenTelemetry()` - Accepts telemetry configuration

### Choosing the Right Pattern

**Use Non-Parameterized when:**

- Extension has zero configuration options
- Behavior is purely additive without customization
- You want the simplest possible API

**Use Parameterized when:**

- Extension accepts any configuration (even if optional)
- You may add configuration options in the future
- Behavior can be customized

**Important:** Once you ship a non-parameterized extension, you cannot easily add configuration later without breaking changes. When in doubt, use a parameterized pattern with optional config.

More detailed documentation will be available soon.
