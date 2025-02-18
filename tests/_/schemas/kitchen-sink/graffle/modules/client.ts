import { Transports } from '../../../../../../src/client/properties/transports/_namespace.js'
import { DocumentBuilder } from '../../../../../../src/entrypoints/extensions/document-builder/runtime.js'
import { TransportHttp } from '../../../../../../src/entrypoints/extensions/transport-http/runtime.js'
import * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import * as $$Data from './data.js'
import * as $$Scalar from './scalar.js'
import * as $$SchemaDrivenDataMap from './schema-driven-data-map.js'

const initialContext = {
  ...$$Utilities.Context.States.empty,
  name: $$Data.Name,
  schemaMap: $$SchemaDrivenDataMap.schemaDrivenDataMap,
  scalars: $$Scalar.$registry,
}

const c1 = $$Utilities.Extensions.contextAddMany(initialContext, [TransportHttp, DocumentBuilder])
const c2 = $$Data.defaultSchemaUrl
  ? $$Utilities.Transports.contextConfigureCurrent(c1, { url: $$Data.defaultSchemaUrl })
  : c1

export const create = $$Utilities.createConstructorWithContext(c2)
