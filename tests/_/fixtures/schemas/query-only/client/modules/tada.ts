import type { Name } from './data.js'

export type introspection_types = {
  'Query': {
    kind: 'OBJECT'
    name: 'Query'
    fields: {
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'idNonNull': {
        name: 'idNonNull'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      }
    }
  }
  'Boolean': unknown
  'Float': unknown
  'ID': unknown
  'Int': unknown
  'String': unknown
}

export type introspection = {
  name: Name
  query: 'Query'
  mutation: never
  subscription: never
  types: introspection_types
}
