# Extensions

Welcome to Graffle's collection of extensions.

Graffle provides a robust and flexible extension system, enabling developers to customize and enhance its functionality. Extensions allow for additional features such as file uploads, authentication handling, request transformations, and more.

By leveraging Graffle's modular architecture, developers can extend its capabilities without modifying the core functionality, ensuring maintainability and scalability.

## Understanding Extensions

Extensions in Graffle follow a structured approach:
- They are created using the `Extension.create()` method.
- They can modify the behavior of requests and responses.
- They integrate with Graffle's request pipeline to process input and output effectively.

Each extension is a self-contained module that interacts with Graffle's lifecycle to enhance its capabilities.

## Key Components of Extensions

Graffle's extension system relies on several core components:

- **Extension Definition (`extension.ts`)**: Defines the structure of an extension and provides the `create` function to register new extensions.
- **Builder (`builder.ts`)**: Allows extensions to manipulate the request lifecycle and extend the builder's functionality.
- **Type Hooks (`TypeHook.ts`)**: Enables modifications to request results and document structures.
- **Context (`context.ts`)**: Handles type-based interactions between extensions and Graffle's request system.
- **Extension Kit (`extensionkit.ts`)**: Provides utilities for managing extensions and integrating them with Graffle.

## Creating a Custom Extension

Developers can create custom extensions to fit their specific requirements. Below is an example of a simple logging extension:

```ts
import { Extension } from 'graffle/entrypoints/extensionkit';

export const Logger = Extension.create({
  name: 'Logger',
  create() {
    return {
      async onRequest({ pack }) {
        console.log('Request initiated:', pack.input);
        return await pack();
      },
      async onResponse({ pack, response }) {
        console.log('Response received:', response);
        return response;
      },
    };
  },
});
```

## Registering a Custom Extension

Once a custom extension is created, it can be integrated into a Graffle instance as follows:

```ts
import { Graffle } from 'graffle';
import { Logger } from './Logger';

const graffle = Graffle.create().use(Logger());
```

## Type Hooks in Extensions

Graffle extensions can leverage Type Hooks to modify request results dynamically. Type Hooks are defined in `TypeHook.ts` and allow for custom transformations on responses.

```ts
export interface TypeHooks {
  onRequestResult: OnRequestResult[];
  onRequestDocumentRootType: OnRequestDocumentRootType[];
  requestResultDataTypes: unknown;
}
```

Developers can extend Type Hooks in their extensions to customize how data is processed within Graffle.

## Conclusion

Graffle's extension system offers a flexible and modular approach to customization. Whether utilizing built-in extensions or developing custom ones, developers can tailor Graffle to meet their specific needs.

By leveraging `Extension.create()`, additional functionality can be integrated without modifying the core library, maintaining a clean and scalable architecture.

Understanding the core components such as the `Builder`, `Type Hooks`, and `Context` allows developers to create more powerful and efficient extensions.

