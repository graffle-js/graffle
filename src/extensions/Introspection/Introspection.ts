import { getIntrospectionQuery, type IntrospectionQuery } from 'graphql'
import type { ExtensionChainable } from '../../client/client.js'
import type { HandleOutput } from '../../client/handleOutput.js'
import type { ClientTransports, Context } from '../../entrypoints/utilities-for-generated.js'
import { type Configuration, configurationDefaults, type ConfigurationInit } from './config.js'

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
  .configuration((define) => define<ConfigurationInit, Configuration>().defaults(configurationDefaults))
  .requestResultDataTypes<IntrospectionQuery>()
  .properties<Properties>(({ config, client }) => {
    return {
      introspect: async () => {
        // todo: fixme: use config.schema!! Currently only looked at in the generator!
        const c = client.with({ output: { envelope: false, errors: { execution: `return` } } })
        let introspectionQueryDocument = getIntrospectionQuery(config.options)
        // @ts-expect-error fixme
        const result = await c.gql(introspectionQueryDocument).send()
        const featuresDropped: string[] = []
        const enabledKnownPotentiallyUnsupportedFeatures = knownPotentiallyUnsupportedFeatures.filter(_ =>
          config.options[_] !== false
        )

        // Try to find a working introspection query.
        if (result instanceof Error) {
          for (const feature of enabledKnownPotentiallyUnsupportedFeatures) {
            featuresDropped.push(feature)
            introspectionQueryDocument = getIntrospectionQuery({
              ...config.options,
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
    }
  })

interface Properties extends ExtensionChainable {
  // @ts-expect-error untyped params
  return: Properties_<this['params'][0]>
}

interface Properties_<$Context extends Context> {
  introspect: ClientTransports.PreflightCheck<
    $Context,
    () => Promise<(null | {}) & HandleOutput<$Context, IntrospectionQuery>>
  >
}

const knownPotentiallyUnsupportedFeatures = [`inputValueDeprecation`, `oneOf`] as const
