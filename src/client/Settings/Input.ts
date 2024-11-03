import type { GraphQLSchema } from 'graphql'
import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import type { SchemaDrivenDataMap } from '../../types/SchemaDrivenDataMap/__.js'
import type { WithInput } from './inputIncrementable/inputIncrementable.js'

export type URLInput = URL | string

export type InputOutputEnvelopeLonghand = {
  /**
   * @defaultValue `true`
   */
  enabled?: boolean
  errors?: {
    execution?: boolean
    other?: boolean
  }
}

/**
 * @remarks This input extends base with properties that can be filled with exports from the generated client.
 */
export type InputStatic<$Client extends GlobalRegistry.Client = GlobalRegistry.Client> =
  & InputBase<$Client>
  & {
    /**
     * The schema to use.
     *
     * TODO why don't we infer this from the runtime schemaIndex?
     *
     * @defaultValue 'default'
     */
    name?: $Client['name']
    /**
     * todo
     */
    readonly schemaMap?: SchemaDrivenDataMap | null
  }

// TODO use code generation to display
// TODO test that schema is optional when introspection was used to generate client.
// dprint-ignore
export type InputBase<$Client extends GlobalRegistry.Client> =
  | (
      & (
          GlobalRegistry.HasDefaultUrlForSchema<$Client> extends true
          ? {
              /**
               * @defaultValue The introspection URL used to generate this Graffle client.
               */
              schema?: URLInput
            }
          : {
            schema: URLInput
          }
        )
      // eslint-disable-next-line
      // @ts-ignore passes after generation
      & WithInput<{ name: $Client['name']; transport: { type: 'http'} }>
    )
  | (
      & (
          GlobalRegistry.HasDefaultUrlForSchema<$Client> extends true
          ? {
              /**
               * TODO this TSDoc is never rendered in VSCode...
               * @defaultValue The introspection URL used to generate this Graffle client.
               */
              schema?: GraphQLSchema
            }
          : { schema: GraphQLSchema }
        )
      // eslint-disable-next-line
      // @ts-ignore passes after generation
      & WithInput<{ name: $Client['name']; transport: { type: 'memory'} }>
    )
