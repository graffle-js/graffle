import { DocumentBuilder } from '../../../../../src/exports/extensions/document-builder/runtime.js'
import { TransportHttp } from '../../../../../src/exports/extensions/transport-http/runtime.js'
import * as $$Utilities from '../../../../../src/exports/utilities-for-generated.js'
import * as $$Data from './data.js'
import * as $$Scalar from './scalar.js'
import * as $$SchemaDrivenDataMap from './schema-driven-data-map.js'

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

export const create = $$Utilities.createConstructorWithContext(context)
