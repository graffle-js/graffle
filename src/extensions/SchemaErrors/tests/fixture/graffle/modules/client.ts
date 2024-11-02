import { ClientPreset } from '../../../../../../entrypoints/client.js'
import * as $$Data from './data.js'
import * as $$Scalar from './scalar.js'
import * as $$SchemaDrivenDataMap from './schema-driven-data-map.js'

export const create = ClientPreset.create({
  name: $$Data.Name,
  sddm: $$SchemaDrivenDataMap.schemaDrivenDataMap,
  scalars: $$Scalar.$registry,
  schemaUrl: $$Data.defaultSchemaUrl,
})
