# Credits

Graffle builds upon insights and learnings from previous GraphQL client projects. While Graffle's implementation has evolved into its own distinct system with different design decisions, we acknowledge the valuable contributions these projects made to the GraphQL TypeScript ecosystem.

## Type System

Graffle's type-level GraphQL document parsing and type inference system was **inspired by and drew foundational concepts from** [gql.tada](https://gql-tada.0no.co/) by the [urql team](https://github.com/urql-graphql/urql).

The initial implementation in Graffle benefited from studying gql.tada's approach to:
- Type-level GraphQL document parsing
- Selection set type inference
- Fragment composition
- Variable type extraction

Graffle's implementation (in `src/lib/gql-tada/`) **continues to evolve into its own distinct system**, with ongoing modifications, customizations, and different design decisions to meet Graffle's specific needs. Key differences include:

- **Multi-operation document support** - Graffle extracts and types all operations from a document ([related issue](https://github.com/0no-co/gql.tada/issues/489))
- **No fragment masking** - Graffle does not enforce fragment masking, preferring a simpler mental model
- **Schema-less/minimal schema mode** - Progressive type inference without requiring full schema upfront ([related issue](https://github.com/0no-co/gql.tada/issues/490))

The foundational concepts and insights from the Tada team's work were invaluable in developing this system.

**Original Project**: https://github.com/0no-co/gql.tada
**License**: MIT
**Authors**: The urql/0no.co team

## Document Builder API

Graffle's Document Builder (type-safe query building API) traces its lineage to [Prisma Client](https://www.prisma.io/client), which **pioneered the concept of fluent, chainable APIs with full type safety** in database tooling.

Prisma Client was developed at Prisma under the leadership of CEO [Johannes Schicklin](https://github.com/schickling) and lead engineer [Tim Suchanek](https://github.com/timsuchanek), along with their team and community feedback. Together they created a beautiful API that inspired developers around the world with its groundbreaking approach to type-safe database access. This design philosophy influenced the broader TypeScript ecosystem, including GraphQL clients.

[GenQL](https://genql.dev/) by [remorses](https://github.com/remorses) brought these concepts to GraphQL, adapting Prisma's fluent API pattern for GraphQL query building. GenQL's work demonstrated how this approach could work effectively for GraphQL APIs and served as useful reference material for Graffle's development.

Graffle's Document Builder continues to evolve with different design decisions, including:

- **Enhanced type safety** - Stricter excess property checks ([#158](https://github.com/remorses/genql/issues/158))
- **Better union types** - More precise union return type inference ([#108](https://github.com/remorses/genql/issues/108))
- **Custom scalar handling** - Full custom scalar codec support ([#155](https://github.com/remorses/genql/issues/155))
- **Correct `__typename` types** - Accurate literal types for `__typename` fields ([#51](https://github.com/remorses/genql/issues/51))
- **GraphQL alias support** - Full support for field aliasing ([#55](https://github.com/remorses/genql/issues/55))
- **Interface-aware union handling** - Shared interface field access on union types ([#54](https://github.com/remorses/genql/issues/54))
- **Arguments API** - Alternative syntax for passing arguments ([#23](https://github.com/remorses/genql/issues/23))
- **Schema description forwarding** - JSDoc generation from GraphQL schema descriptions ([#4](https://github.com/remorses/genql/issues/4))
- **TypeScript generation** - Direct TypeScript output without transpilation ([#90](https://github.com/remorses/genql/issues/90))

**Prisma Client**: https://www.prisma.io/client
**GenQL**: https://github.com/remorses/genql

## GraphQL Community & Ecosystem

Graffle is built on top of [GraphQL](https://graphql.org/), a query language and specification that continues to evolve and shape how we build APIs. We're grateful to the GraphQL community—including the specification authors, maintainers, library creators, and countless contributors—for creating and nurturing an ecosystem that enables projects like Graffle to exist.

GraphQL as a technology, spec, and idea represents a collaborative effort across the industry, and Graffle benefits from the collective wisdom, tooling, and innovations that the community continues to develop.

**GraphQL Specification**: https://spec.graphql.org/
**GraphQL Foundation**: https://graphql.org/foundation/
