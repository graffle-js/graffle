// TODO this is a hack remove
export { type Typed as TypedDocument } from '../lib/graphql-kit/document/typed/_.js'
// todo figure this export out. Was just put there to resolve a type error about "...cannot be named..."
export { type Client, type Create } from '#src/client/client.js'
export type * from '#src/lib/graphql-kit/http/http.js'
export type * from '#src/requestPipeline/RequestPipeline.js'
export type * from '#src/types/Schema/scalars/__.js'
export type { Ware } from '@wollybeard/kit'
export { type Normalized } from '../context/fragments/configuration/output/__.js'
export type * from '../docpar/object/Select/context.js'
export type {
  AnyExceptAlias as SelectionSetAnyExceptAlias,
  AnySelectionSet,
  FieldValue as SelectionSetFieldValue,
  RootType as SelectionSetRootType,
  TypenameSelection,
} from '../docpar/object/Select/selectionSet.js'
export { $ } from '../docpar/object/var/var.js'
export type {
  ConfigurationInput as DocumentBuilderConfigurationInput,
  Properties as DocumentBuilderProperties,
} from '../extensions/DocumentBuilder/DocumentBuilder.js'
export { DocumentBuilder } from '../extensions/DocumentBuilder/DocumentBuilder.js'
export { TransportHttp } from '../extensions/TransportHttp/TransportHttp.js'
export type * from '../extensions/TransportHttp/TransportHttp.js'
// export { Data } from '#src/context/fragments/transports/dataType/data.js'
export * as Preset from './_Preset.js'
export * as Graffle from './graffle.js'

// The inferred type of 'Date' cannot be named without a reference
// to './node_modules/graffle/build/types/Schema/$$.js'.
// This is likely not portable. A type annotation is necessary. (ts 2742)
export { Scalar } from '../types/Schema/__.js'
// error TS2742: The inferred type of 'create' cannot be named without a reference to '.pnpm/@wollybeard+kit@0.78.3_@effect+platform@0.91.1_effect@3.17.14__effect@3.17.14/node_modules/@wollybeard/kit/prom'. This is likely not portable. A type annotation is necessary.
// 44 export const create = $$Utilities.createConstructorWithContext(context)
//                 ~~~~~~
export * from '@wollybeard/kit/prom'
