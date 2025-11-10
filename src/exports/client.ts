export { type Client, create } from '#src/client/client.js'
export { Var } from '#src/lib/graphql-kit/document/__.js'
export { create as createSelect, select } from '#src/select/select.js'
// TODO remove this hacky export
export { type Typed as TypedDocument } from '../lib/graphql-kit/document/typed/_.js'
// TODO: GraphqlKit should be exported/used directly
export { type Typed } from '../lib/graphql-kit/document/typed/_.js'
