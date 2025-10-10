import * as $$Data from './data.js'
import * as $$Scalar from './scalar.js'
import * as $$SchemaDrivenDataMap from './schema-driven-data-map.js'
import * as $$Tada from './tada.js'

import { DocumentBuilder } from '#graffle/extensions/document-builder'
import { TransportHttp } from '#graffle/extensions/transport-http'
import * as $$Utilities from '#graffle/utilities-for-generated'
import { initGraphQLTada } from 'gql.tada'

// Initialize gql-tada with the generated introspection types and custom scalars
type GqlTada = ReturnType<
  typeof initGraphQLTada<{
    introspection: $$Tada.introspection
    scalars: {
      [K in keyof $$Scalar.$Registry['map']]: $$Utilities.Schema.Scalar.GetDecoded<$$Scalar.$Registry['map'][K]>
    }
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

export const create = _create as typeof _create & {
  (input?: Parameters<typeof _create>[0]): Omit<ReturnType<typeof _create>, 'gql'> & { gql: GqlTada }
}
