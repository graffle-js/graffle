import type * as $Fields from './fields.js'

export * as Mutation from './fields.js'

/**
 * Root mutation type for modifying Pokemon data.
 */
export interface Mutation {
  kind: 'Object'
  name: 'Mutation'
  fields: {
    __typename: $Fields.__typename
    addPokemon: $Fields.addPokemon
  }
}
