# Extensions

Graffle's extension system allows you to customize and enhance your GraphQL client with powerful, composable features. All extensions listed below are first-party and ship with the `graffle` package.

## Document Building

### [Document Builder](./document-builder.md)

Build type-safe GraphQL documents using TypeScript instead of GQL syntax. Includes tailored methods for root fields, batch operations, and static document generation for use with other GraphQL clients.

**Key Features:**
- Type-safe document construction
- Automatic result type inference
- Static document builder (compile-time, no runtime client needed)
- Variable extraction with `$var` markers
- Full support for aliases, arguments, and nested selections

## Schema Design Patterns

### [Schema Errors](./schema-errors.md)

First-class support for schemas that encode errors into their design using union types. Result fields can be made to throw on errors or automatically map to error classes.

**Key Features:**
- Automatic `__typename` injection
- Type-safe error handling with `isError` helper
- Configurable error object detection
- Automatic message field querying from error interfaces

## Transport

### [Transport HTTP](./transport-http.md)

HTTP transport implementing the [GraphQL Over HTTP](https://github.com/graphql/graphql-over-http) specification. Included in `minimal` and `basic` presets.

**Key Features:**
- GET and POST method modes
- Relative URL support (browser and frameworks)
- Configurable headers and fetch options
- Anyware hooks for request/response manipulation

### [Transport Memory](./transport-memory.md)

In-memory transport for executing documents against local GraphQL schemas. Invokes `execute` from the `graphql` package directly.

**Key Features:**
- Zero network overhead
- Perfect for testing and development
- Works with any `GraphQLSchema` instance

## Developer Experience

### [Introspection](./introspection.md)

Adds an `introspect` method to conveniently introspect the schema programmatically.

**Key Features:**
- Simple schema introspection
- Returns standard GraphQL introspection query result

### [Throws](./throws.md)

Decorates the client with a `.throws()` method for adjusting output to throw on any error encountered. Convenient for specific use cases without changing your base configuration.

**Key Features:**
- Chain `.throws()` on any query or mutation
- Automatically configures error handling to throw mode
- Cleaner alternative to verbose `with({ output: ... })` calls

## File Operations

### [Upload](./upload.md)

Adds support for the [GraphQL Multipart Request](https://github.com/jaydenseric/graphql-multipart-request-spec) specification, enabling file uploads via GraphQL.

**Key Features:**
- Spec-compliant file upload implementation
- Works with any GraphQL server supporting multipart requests

## Observability

### [OpenTelemetry](./opentelemetry.md)

Instruments GraphQL requests with [OpenTelemetry](https://opentelemetry.io) tracing. Creates spans for the entire request lifecycle and each hook.

**Key Features:**
- Request-level spans
- Per-hook span tracking (encode, pack, exchange, unpack, decode)
- Configurable tracer name
- Works with standard OpenTelemetry ecosystem

**Note:** Use this extension before all others to ensure complete span coverage.

## Creating Extensions

To learn how to create your own extensions, see the [Extension Development Guide](/guides/20_topics/extensions.md).
