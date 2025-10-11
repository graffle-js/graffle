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

More detailed documentation will be available soon.
