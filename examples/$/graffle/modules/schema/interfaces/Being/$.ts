import type { Patron, Pokemon, Trainer } from '../../$$.js'
import type * as $Fields from './fields.js'

export * as Being from './fields.js'

export interface Being {
  kind: 'Interface'
  name: 'Being'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
    name: $Fields.name
  }
  implementors: [Patron, Pokemon, Trainer]
  implementorsUnion:
    | Patron
    | Pokemon
    | Trainer
  implementorsIndex: {
    Patron: Patron
    Pokemon: Pokemon
    Trainer: Trainer
  }
}
