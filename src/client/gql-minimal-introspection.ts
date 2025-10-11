/**
 * Minimal gql-tada introspection for raw clients without generated schema.
 *
 * Provides basic structure inference:
 * - Top-level field names are preserved
 * - Field values are typed as `unknown`
 * - Better than no types, worse than full schema
 *
 * @see https://github.com/0no-co/gql.tada/issues/490
 */
export type MinimalIntrospection = {
  name: never
  query: 'Query'
  mutation: 'Mutation'
  subscription: 'Subscription'
  types: {
    Query: {
      kind: 'OBJECT'
      name: 'Query'
      fields: {} // Unknown fields
    }
    Mutation: {
      kind: 'OBJECT'
      name: 'Mutation'
      fields: {}
    }
    Subscription: {
      kind: 'OBJECT'
      name: 'Subscription'
      fields: {}
    }
    String: { name: 'String' }
    Int: { name: 'Int' }
    Float: { name: 'Float' }
    Boolean: { name: 'Boolean' }
    ID: { name: 'ID' }
  }
}
