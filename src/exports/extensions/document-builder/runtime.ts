export { DocumentBuilder } from '#src/extensions/DocumentBuilder/DocumentBuilder.js'
import { Docpar } from '#docpar'
import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import type { OperationTypeNode } from 'graphql'
export { Var } from '#src/docpar/object/var/$.js'
export const createGql = Docpar.createGql
export const createStaticRootType = Docpar.createStaticRootType
export const staticBuilderDefaults = Docpar.defaults
export type Config = Docpar.Config
export type InferOperations<
  $Document,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap,
  $Context
> = Docpar.InferOperations<
  $Document,
  $Schema,
  $ArgumentsMap,
  $Context
>
export type StaticDocumentBuilder<
  $Config extends Docpar.Config,
  $OperationType extends OperationTypeNode
> = Docpar.StaticDocumentBuilder<$Config, $OperationType>
export { $ } from '../../../docpar/object/var/var.js'
