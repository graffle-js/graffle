import { getIntrospectionQuery, type IntrospectionQuery } from 'graphql'
import { Graffle } from '../entrypoints/__Graffle.js'
import type { TypedDocumentString } from '../layers/0_functions/types.js'

export const introspectionQuery = async (endpoint: URL): Promise<IntrospectionQuery> => {
  const introspectionQueryDocument = getIntrospectionQuery({
    descriptions: true,
    schemaDescription: true,
    directiveIsRepeatable: true,
    specifiedByUrl: true,
    inputValueDeprecation: true,
  }) as TypedDocumentString<IntrospectionQuery>

  const data = await Graffle.create({ schema: endpoint }).rawString({
    document: introspectionQueryDocument,
  })

  if (!data) {
    throw new Error(`No data returned for introspection query.`)
  }

  return data
}
