import { createConstructorWithContext } from '../../../../../../src/client/client.js'
import { ClientPreset, create as createBase } from '../../../../../../src/entrypoints/client.js'
import { TransportHttp } from '../../../../../../src/extensions/TransportHttp/TransportHttp.js'
import * as $$Data from './data.js'
import * as $$Scalar from './scalar.js'
import * as $$SchemaDrivenDataMap from './schema-driven-data-map.js'

export const create = createConstructorWithContext(
  createBase({
    name: $$Data.Name,
    schemaMap: $$SchemaDrivenDataMap.schemaDrivenDataMap,
    scalars: $$Scalar.$registry,
  })
    .use(TransportHttp({
      url: $$Data.defaultSchemaUrl,
    }))
    ._,
)
