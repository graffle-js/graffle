export type { Simplify } from 'type-fest'
export { createConstructorWithContext } from '../client/client.js'
export { type Context } from '../context/context.js'
export * from '../context/context.js'
export { Configuration } from '../context/fragments/configuration/_namespace.js'
export type {
  ConfigGetOutputError,
  HandleOutput,
  HandleOutputDocumentBuilderRootField,
} from '../context/fragments/configuration/output/handle.js'
export { Extensions } from '../context/fragments/extensions/_namespace.js'
export { addAndApplyMany } from '../context/fragments/extensions/fragment.js'
export { Scalars } from '../context/fragments/scalars/_namespace.js'
export { Transports } from '../context/fragments/transports/_namespace.js'
export * from '../extensions/DocumentBuilder/_namespace.js'
export { pipe } from '../lib/prelude.js'
export { type AssertExtendsObject, type Exact, type ExactNonEmpty, type UnionExpanded } from '../lib/prelude.js'
export { TypeFunction } from '../lib/type-function/__.js'
export { contextEmpty } from '../types/ContextEmpty.js'
export { ContextFragments } from '../types/ContextFragment.js'
export { type GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'
export { Schema } from '../types/Schema/__.js'
export * from '../types/Schema/StandardTypes/scalar.js'
export { type SchemaDrivenDataMap } from '../types/SchemaDrivenDataMap/__.js'
