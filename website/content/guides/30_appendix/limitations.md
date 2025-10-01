---
title: Limitations
---

# Limitations

This page documents GraphQL features and capabilities that are not yet supported in Graffle's core client. Extension-specific limitations are documented in their respective pages.

## Core Features Not Yet Supported

### Subscriptions

GraphQL subscriptions are not yet supported in Graffle. There is currently no transport implementation that can execute subscription operations, though the static document builder can generate subscription documents.

**Status:** Planned
**Tracking:** [Issue #1096](https://github.com/graffle-js/graffle/issues/1096)

**Current Workaround:** Use another GraphQL client for subscriptions, or pass generated subscription documents from Graffle's static document builder to another client.

### OneOf Input Objects

The `@oneOf` directive for input objects is not yet supported. This directive ensures exactly one field of an input object is provided.

**Status:** Planned
**Tracking:** [Issue #1120](https://github.com/graffle-js/graffle/issues/1120)

### Named Fragments

Support for named fragments (fragment definitions and spreads) is unclear. While inline fragments are fully supported (see [Document Builder - Inline Fragments](/extensions/document-builder#inline-fragments)), named fragment support has not been documented or demonstrated.

**Status:** Unknown
**Related:** [Issue #240](https://github.com/graffle-js/graffle/issues/240)

## Planned Features

These features are planned for future releases:

| Feature | Description | Tracking |
|---------|-------------|----------|
| Request Batching | Automatic batching of multiple GraphQL requests into a single network call. Each request is currently sent separately. | [#1017](https://github.com/graffle-js/graffle/issues/1017) |
| Automatic Persisted Queries (APQ) | Reduce bandwidth by sending query hashes instead of full query strings. | [#269](https://github.com/graffle-js/graffle/issues/269) |
| graphql-config Support | Integration with [`graphql-config`](https://the-guild.dev/graphql/config) for configuration management. | [#948](https://github.com/graffle-js/graffle/issues/948) |

## Other Limitations

### Incremental Delivery (@defer/@stream)

The experimental `@defer` and `@stream` directives for incremental delivery are planned as a future extension.

**Tracking:** [Issue #1134](https://github.com/graffle-js/graffle/issues/1134)

---

For extension-specific limitations, see the documentation for each extension:

- [Document Builder](/extensions/document-builder)
- [Transport HTTP](/extensions/transport-http)
- [Transport Memory](/extensions/transport-memory)
- [Schema Errors](/extensions/schema-errors)

For the complete list of planned features and enhancements, see the [open issues on GitHub](https://github.com/graffle-js/graffle/issues).
