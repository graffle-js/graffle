import { getIntrospectionQuery, type IntrospectionQuery } from 'graphql'
import type { GraphQLSchema, IntrospectionOptions } from 'graphql'
import type { HandleOutput } from '../../client/handleOutput.js'
import { Extension } from '../../entrypoints/extension.js'
import type { ClientTransports } from '../../entrypoints/utilities-for-generated.js'
import type { InputIntrospectionOptions } from '../../generator/_.js'

export type ConfigurationInput = {
  /**
   * The schema instance or endpoint to introspect.
   * By default uses the value the client was constructed with.
   */
  schema?: SchemaTarget
  /**
   * The introspection query options. By default all kinds of information are sought.
   *
   * Where those options are known to be optional by valid GraphQL servers then they start enabled but are
   * progressively disabled upon introspection failure until success or no more known potentially
   * unsupported features remain.
   */
  options?: InputIntrospectionOptions
}

export interface ConfigurationNormalized {
  schema: SchemaTarget | undefined
  options: IntrospectionOptions
}

type SchemaTarget = string | URL | GraphQLSchema

/**
 * This extension adds a `.introspect` method to the client that will return the introspected schema.
 *
 * @example
 *
 * ```ts
 * import { Introspection } from 'graffle/extensions/introspection'
 *
 * const graffle = new Graffle({
 *   schema: 'http://localhost:3000/graphql',
 * })
 * .use(Introspection())
 *
 * const data = await graffle.introspect()
 * ```
 */
export const Introspection = Extension
  .create(`Introspection`)
  .configuration((__) =>
    __
      .typeOfInput<ConfigurationInput>()
      .typeOfNormalized<ConfigurationNormalized>()
      .default({
        schema: undefined,
        options: {
          descriptions: true,
          specifiedByUrl: true,
          directiveIsRepeatable: true,
          schemaDescription: true,
          inputValueDeprecation: true,
          oneOf: true,
        },
      })
  )
  .constructor(({ configuration, client }) => {
    return {
      properties: {
        introspect: async () => {
          // todo: fixme: use config.schema!! Currently only looked at in the generator!
          const c = client.with({ output: { envelope: false, errors: { execution: `return` } } })
          let introspectionQueryDocument = getIntrospectionQuery(configuration.options)
          // @ts-expect-error fixme
          const result = await c.gql(introspectionQueryDocument).send()
          const featuresDropped: string[] = []
          const enabledKnownPotentiallyUnsupportedFeatures = knownPotentiallyUnsupportedFeatures.filter(_ =>
            configuration.options[_] !== false
          )

          // Try to find a working introspection query.
          if (result instanceof Error) {
            for (const feature of enabledKnownPotentiallyUnsupportedFeatures) {
              featuresDropped.push(feature)
              introspectionQueryDocument = getIntrospectionQuery({
                ...configuration.options,
                [feature]: false,
              })
              // @ts-expect-error fixme
              const result = await c.gql(introspectionQueryDocument).send()
              if (!(result instanceof Error)) break
            }
          }

          // Send the query again with the host configuration for output.
          // TODO rather than having to make this query again expose a way to send a value through the output handler here.
          // TODO expose the featuresDropped info on the envelope so that upstream can communicate to users what happened
          // finally at runtime.
          // @ts-expect-error fixme
          return await client.gql(introspectionQueryDocument).send()
        },
      },
    }
  })
  .typeOfProperties<Properties>()
  .typeOfNoExpandResultDataType<IntrospectionQuery>()

interface Properties extends Extension.PropertiesTypeFunction {
  // @ts-expect-error untyped params
  return: Properties_<this['parameters']>
}

interface Properties_<
  $Parameters extends Extension.PropertiesTypeFunctionParameters,
> {
  introspect: ClientTransports.PreflightCheck<
    $Parameters['context'],
    () => Promise<(null | {}) & HandleOutput<$Parameters['context'], IntrospectionQuery>>
  >
}

const knownPotentiallyUnsupportedFeatures = [`inputValueDeprecation`, `oneOf`] as const
