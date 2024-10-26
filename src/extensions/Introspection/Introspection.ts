import { getIntrospectionQuery, type IntrospectionQuery } from 'graphql'
import type { Extension, SimplifyNullable } from '../../entrypoints/main.js'
import { createExtension } from '../../layers/6_client/extension/extension.js'
import type { FnParametersProperty } from '../../layers/6_client/fluent.js'
import type { HandleOutput } from '../../layers/6_client/handleOutput.js'
import type { Fluent } from '../../lib/fluent/__.js'
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

  return createExtension<IntrospectionExtension>({
    name: `Introspection`,
    onBuilderGet: ({ path, property, client }) => {
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
    },
  })
}

type IntrospectionExtension = Extension<{
  property: IntrospectFn
}>

interface IntrospectFn extends Fluent.FnProperty<`introspect`> {
  // @ts-expect-error untyped params
  return: Introspect<this['params']>
}

interface Introspect<$Args extends FnParametersProperty> {
  (): Promise<SimplifyNullable<HandleOutput<$Args['state']['context'], IntrospectionQuery>>>
}
