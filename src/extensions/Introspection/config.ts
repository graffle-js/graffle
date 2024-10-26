import type { GraphQLSchema, IntrospectionOptions } from 'graphql'
import type { InputIntrospectionOptions } from '../../generator/_.js'

export type Input = {
  /**
   * The schema instance or endpoint to introspect. By default uses the value the client was constructed with.
   */
  schema?: string | URL | GraphQLSchema
  /**
   * The introspection query options. By default all kinds of information are sought.
   *
   * Where those options are known to be optional by valid GraphQL servers then they start enabled but are
   * progressively disabled upon introspection failure until success or no more known potentially
   * unsupported features remain.
   */
  options?: InputIntrospectionOptions
}

export type Config = {
  schema: null | string | URL | GraphQLSchema
  options: IntrospectionOptions
}

export const defaults = {
  schema: null,
  options: {
    descriptions: true,
    specifiedByUrl: true,
    directiveIsRepeatable: true,
    schemaDescription: true,
    inputValueDeprecation: true,
    oneOf: true,
  },
} satisfies Config

export const createConfig = (input?: Input): Config => {
  return {
    schema: input?.schema ?? defaults.schema,
    options: input?.options ?? defaults.options,
  }
}
