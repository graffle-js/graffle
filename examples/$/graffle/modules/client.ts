import { initGraphQLTada } from 'gql.tada'
import { DocumentBuilder } from 'graffle/extensions/document-builder'
import { TransportHttp } from 'graffle/extensions/transport-http'
import * as $$Utilities from 'graffle/utilities-for-generated'
import * as $$Data from './data.js'
import * as $$Scalar from './scalar.js'
import * as $$SchemaDrivenDataMap from './schema-driven-data-map.js'
import * as $$Tada from './tada.js'

// Initialize gql-tada with the generated introspection types
type GqlTada = ReturnType<
  typeof initGraphQLTada<{
    introspection: $$Tada.introspection
  }>
>

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

const _create = $$Utilities.createConstructorWithContext(context)

export const create: typeof _create = (input) => {
  const client = _create(input) // Cast the gql method to gql-tada for type inference
  ;(client as any).gql = client.gql as any as GqlTada
  return client
}
