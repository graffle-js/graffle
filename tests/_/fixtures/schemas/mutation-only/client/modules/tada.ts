export type introspection_types = {
  'Mutation': {
    kind: 'OBJECT'
    name: 'Mutation'
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
  name: never
  query: 'never'
  mutation: 'Mutation'
  subscription: never
  types: introspection_types
}
