import { getIntrospectionQuery, type IntrospectionQuery } from 'graphql'
import type { ExtensionChainable } from '../../client/client.js'
import type { HandleOutput } from '../../client/handleOutput.js'
import { create } from '../../entrypoints/extensionkit.js'
import type { ClientTransports } from '../../entrypoints/utilities-for-generated.js'
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
  create: ({ config }) => {
    return {
      builder: (builder) =>
        builder<BuilderExtension>(({ path, property, client }) => {
          if (!(path.length === 0 && property === `introspect`)) return
          const clientCatching = client.with({ output: { envelope: false, errors: { execution: `return` } } })

          return async () => {
            let introspectionQueryDocument = getIntrospectionQuery(config.options)
            // @ts-expect-error fixme
            const result = await clientCatching.gql(introspectionQueryDocument).send()
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
                const result = await clientCatching.gql(introspectionQueryDocument).send()
                if (!(result instanceof Error)) break
              }
            }

            // Send the query again with the host configuration for output.
            // TODO rather than having to make this query again expose a way to send a value through the output handler here.
            // TODO expose the featuresDropped info on the envelope so that upstream can communicate to users what happened
            // finally at runtime.
            // @ts-expect-error fixme
            return await client.gql(introspectionQueryDocument).send()
          }
        }),
    }
  },
})

interface BuilderExtension extends ExtensionChainable {
  name: `introspect`
  return: ClientTransports.PreflightCheck<
    // @ts-expect-error untyped params
    this['params'][0],
    // @ts-expect-error untyped params
    () => Promise<(null | {}) & HandleOutput<this['params'][0], IntrospectionQuery>>
  >
}

const knownPotentiallyUnsupportedFeatures = [`inputValueDeprecation`, `oneOf`] as const
