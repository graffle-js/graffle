import { DocumentBuilder } from '../../../../../src/entrypoints/extensions/document-builder/runtime.js'
import { TransportHttp } from '../../../../../src/entrypoints/extensions/transport-http/runtime.js'
import * as $$Utilities from '../../../../../src/entrypoints/utilities-for-generated.js'
import * as $$Data from './data.js'
import * as $$Scalar from './scalar.js'
import * as $$SchemaDrivenDataMap from './schema-driven-data-map.js'

const context = $$Utilities.contextAddOneExtension(
  $$Utilities.contextAddOneExtension(
    {
      ...$$Utilities.Context.States.empty,
      name: $$Data.Name,
      schemaMap: $$SchemaDrivenDataMap.schemaDrivenDataMap,
      scalars: $$Scalar.$registry,
    },
    TransportHttp({
      url: $$Data.defaultSchemaUrl,
    }),
  ),
  DocumentBuilder(),
)

export const create = $$Utilities.createConstructorWithContext(
  context,
)
