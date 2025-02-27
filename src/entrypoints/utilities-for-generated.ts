export type { Simplify } from 'type-fest'
export { createConstructorWithContext } from '../client/client.js'
export { Configuration } from '../client/properties/configuration/_namespace.js'
export { Extensions } from '../client/properties/extensions/__.js'
export { addAndApplyMany } from '../client/properties/extensions/fragment.js'
export type {
  ConfigGetOutputError,
  HandleOutput,
  HandleOutputDocumentBuilderRootField,
} from '../client/properties/output/handle.js'
export { Scalars } from '../client/properties/scalars/_namespace.js'
export { Transports } from '../client/properties/transports/_namespace.js'
export * from '../extensions/DocumentBuilder/__.js'
export { pipe } from '../lib/prelude.js'
export { type AssertExtendsObject, type Exact, type ExactNonEmpty, type UnionExpanded } from '../lib/prelude.js'
export { TypeFunction } from '../lib/type-function/__.js'
export { type Context } from '../types/context.js'
export * from '../types/context.js'
export { contextEmpty } from '../types/ContextEmpty.js'
export { ContextFragments } from '../types/ContextFragment.js'
export { type GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'
export { Schema } from '../types/Schema/__.js'
export * from '../types/Schema/StandardTypes/scalar.js'
export { type SchemaDrivenDataMap } from '../types/SchemaDrivenDataMap/__.js'
