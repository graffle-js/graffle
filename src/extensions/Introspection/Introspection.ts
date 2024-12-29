import { getIntrospectionQuery, type IntrospectionQuery } from 'graphql'
import type { ExtensionChainable } from '../../client/client.js'
import type { HandleOutput } from '../../client/handleOutput.js'
import { create } from '../../entrypoints/extensionkit.js'
import type { ClientTransports, Context } from '../../entrypoints/utilities-for-generated.js'
import { type ConfigInput, createConfig } from './config.js'

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
export const Introspection = create({
  name: `Introspection`,
  normalizeConfig: (input?: ConfigInput) => {
    const config = createConfig(input)
    return config
  },
  create: ({ config, builder, typeHooks }) => {
    return {
      typeHooks: typeHooks.requestResultDataTypes<IntrospectionQuery>(),
      builder: builder<BuilderExtension>(({ client }) => {
        return {
          introspect: async () => {
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
      }),
    }
  },
})

interface BuilderExtension extends ExtensionChainable {
  // @ts-expect-error untyped params
  return: BuilderExtension_<this['params'][0]>
}

interface BuilderExtension_<$Context extends Context> {
  introspect: ClientTransports.PreflightCheck<
    $Context,
    () => Promise<(null | {}) & HandleOutput<$Context, IntrospectionQuery>>
  >
}

const knownPotentiallyUnsupportedFeatures = [`inputValueDeprecation`, `oneOf`] as const
