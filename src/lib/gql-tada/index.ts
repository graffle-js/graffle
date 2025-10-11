export { graphql, initGraphQLTada, maskFragments, parse, readFragment, unsafe_readResult } from './api.js'

export type {
  AbstractSetupCache,
  AbstractSetupSchema,
  configOfSetup,
  FragmentOf,
  getDocumentNode,
  GraphQLTadaAPI,
  parseDocument,
  ResultOf,
  schemaOfSetup,
  setupCache,
  setupSchema,
  TadaDocumentNode,
  TadaPersistedDocumentNode,
  VariablesOf,
} from './api.js'

export type { DocumentDecoration } from './utils.js'

// NOTE: This must be exported for `isolatedModules: true`
export type {
  addIntrospectionScalars,
  IntrospectionLikeInput,
  mapIntrospection,
  mapType as __mapType,
  ScalarsLike,
  SchemaLike,
} from './introspection.js'
export type { $tada } from './namespace.js'
