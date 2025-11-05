export type { Parse } from '#src/docpar/object/Parse.js'
export { Var } from '#src/docpar/object/var/$.js'
export { $ } from '#src/docpar/object/var/var.js'

export {
  type Config,
  createStaticRootType,
  defaults as staticBuilderDefaults,
  type StaticDocumentBuilder,
} from '#src/docpar/object/rootType.js'
export { DocumentBuilder } from '#src/extensions/DocumentBuilder/DocumentBuilder.js'
export {
  $$mutation,
  $$query,
  $$subscription,
  createRootFieldExecutor,
  executeRootField,
} from '#src/extensions/DocumentBuilder/methods-instance/requestMethods.js'
export { createGql } from '#src/static/gql.js'
