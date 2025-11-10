export type { Parse } from '#src/lib/graphql-kit/document/docpar/object/parse.js'
export { Var } from '#src/lib/graphql-kit/document/docpar/object/var/_.js'
export { $ } from '#src/lib/graphql-kit/document/docpar/object/var/var.js'

export { DocumentBuilder } from '#src/extensions/DocumentBuilder/DocumentBuilder.js'
export {
  $$mutation,
  $$query,
  $$subscription,
  createRootFieldExecutor,
  executeRootField,
} from '#src/extensions/DocumentBuilder/methods-instance/requestMethods.js'
export {
  type Config,
  createStaticRootType,
  defaults as staticBuilderDefaults,
  type StaticDocumentBuilder,
} from '#src/lib/graphql-kit/document/docpar/object/root-type.js'
export { createGql } from '#src/static/gql.js'
