import { initGraphQLTada } from 'gql.tada'
import { DocumentBuilder } from 'graffle/extensions/document-builder'
import { TransportHttp } from 'graffle/extensions/transport-http'
import * as $$Utilities from 'graffle/utilities-for-generated'
import * as $$Data from './data.js'
import * as $$Scalar from './scalar.js'
import * as $$SchemaDrivenDataMap from './schema-driven-data-map.js'
import * as $$Tada from './tada.js'

// Initialize gql-tada with the generated introspection types
const graphql = initGraphQLTada<{
  introspection: $$Tada.introspection
}>()

const context = $$Utilities.pipe(
  $$Utilities.contextEmpty,
  ctx => $$Utilities.Extensions.addAndApplyMany(ctx, [TransportHttp, DocumentBuilder]),
  ctx => $$Utilities.Transports.configureCurrentOrThrow(ctx, { url: $$Data.defaultSchemaUrl }),
  ctx =>
    $$Utilities.Configuration.add(ctx, {
      schema: {
        name: $$Data.Name,
        map: $$SchemaDrivenDataMap.schemaDrivenDataMap,
      },
    }),
  ctx => $$Utilities.Scalars.set(ctx, { scalars: $$Scalar.$registry }),
)

const createWithGqlTada = (input) => {
  const client = $$Utilities.createConstructorWithContext(context)(input)

  // Override the gql method to use gql-tada
  const originalGql = client.gql.bind(client)
  client.gql = (...args) => {
    // If it's a template literal call, use gql-tada
    if (args[0] && args[0].raw) {
      const document = graphql(...args)
      return {
        send: (variables) => originalGql(document).send(variables),
      }
    }
    // Otherwise use the original implementation (for TypedDocumentNode)
    return originalGql(...args)
  }

  return client
}

export const create = createWithGqlTada
