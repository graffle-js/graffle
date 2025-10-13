export { DocumentBuilder } from '#src/extensions/DocumentBuilder/DocumentBuilder.js'
import { Docpar } from '#docpar'
export { Var } from '#src/docpar/object/var/$.js'
export const createGql = Docpar.createGql
export const createStaticRootType = Docpar.createStaticRootType
export const staticBuilderDefaults = Docpar.defaults
export type Config = Docpar.Config
export type InferOperations<$Document, $Schema, $ArgumentsMap, $Context> = Docpar.InferOperations<$Document, $Schema, $ArgumentsMap, $Context>
export type StaticDocumentBuilder<$Config, $OperationType> = Docpar.StaticDocumentBuilder<$Config, $OperationType>
export { $ } from '../../../docpar/object/var/$.js'
