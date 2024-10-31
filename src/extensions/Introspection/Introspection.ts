import { getIntrospectionQuery, type IntrospectionQuery } from 'graphql'
import { createBuilderExtension, createExtension } from '../../entrypoints/extensionkit.js'
import type { SimplifyNullable } from '../../entrypoints/main.js'
import type { Context } from '../../layers/6_client/context.js'
import type { HandleOutput } from '../../layers/6_client/handleOutput.js'
import type { Builder } from '../../lib/chain/__.js'
import { createConfig, type Input } from './config.js'

const knownPotentiallyUnsupportedFeatures = [`inputValueDeprecation`, `oneOf`] as const

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
export const Introspection = (input?: Input) => {
  const config = createConfig(input)

  return createExtension({
    name: `Introspection`,
    builder: createBuilderExtension<BuilderExtension>(({ path, property, client }) => {
      if (!(path.length === 0 && property === `introspect`)) return
      const clientCatching = client.with({ output: { envelope: false, errors: { execution: `return` } } })

      return async () => {
        let introspectionQueryDocument = getIntrospectionQuery(config.options)
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
            const result = await clientCatching.gql(introspectionQueryDocument).send()
            if (!(result instanceof Error)) break
          }
        }

        // Send the query again with the host configuration for output.
        // TODO rather than having to make this query again expose a way to send a value through the output handler here.
        // TODO expose the featuresDropped info on the envelope so that upstream can communicate to users what happened
        // finally at runtime.
        return await client.gql(introspectionQueryDocument).send()
      }
    }),
  })
}

interface BuilderExtension extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: BuilderExtension_<this['params']>
}

interface BuilderExtension_<$Args extends Builder.Extension.Parameters<BuilderExtension>> {
  introspect: () => Promise<SimplifyNullable<HandleOutput<$Args['context'], IntrospectionQuery>>>
}
