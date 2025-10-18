import * as $$Data from './data.js'
import * as $$Domains from './domains/index.js'
import * as $$Scalar from './scalar.js'
import * as $$SchemaDrivenDataMap from './schema-driven-data-map.js'

import { DocumentBuilder } from '#graffle/extensions/document-builder'
import { TransportHttp } from '#graffle/extensions/transport-http'
import * as $$Utilities from '#graffle/utilities-for-generated'

const context = $$Utilities.pipe(
  $$Utilities.contextEmpty,
  ctx => $$Utilities.Extensions.addAndApplyMany(ctx, [TransportHttp, DocumentBuilder({ domains: $$Domains })]),
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

/**
 * Create a Graffle client for the pokemon GraphQL schema.
 *
 * Pre-configured with:
 * - HTTP transport to {@link $$Data.defaultSchemaUrl}
 * - Document builder for type-safe queries
 * - Schema-driven data mapping
 * - Custom scalar codecs
 * - GraphQL string parsing via integrated type system
 *
 * @param input - Optional client configuration to override defaults
 *
 * @example
 * ```ts
 * import { create } from './graffle/client.js'
 *
 * const client = create()
 * const result = await client.query.pokemon({ name: true })
 * ```
 */
export const create = $$Utilities.createConstructorWithContext(context)
