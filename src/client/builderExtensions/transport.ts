import { Builder } from '../../lib/builder/__.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { type Context, type Transport } from '../context.js'

export interface BuilderExtensionTransport extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: BuilderExtensionSetTransportReturn<this['params']>
}

// dprint-ignore
interface BuilderExtensionSetTransportReturn<$Args extends Builder.Extension.Parameters<BuilderExtensionTransport>> {
  /**
   * TODO
   */
  transport: TransportMethod<$Args>
  /**
   * Register a new Transport.
   * TODO
   */
  addTransport:
        <$Transport extends Transport>
          (transport: $Transport) =>
            Builder.Definition.MaterializeWith<
              $Args['definition'],
              ConfigManager.SetKey<
                $Args['context'],
                'transport',
                {
                  configurations: $Args['context']['transport'] extends Context.Transport.State.Empty
                    ? {
                        [_ in $Transport['name']]: $Transport['config'] // todo: initial config...
                      }
                    : $Args['context']['transport']['configurations']
                  current: $Args['context']['transport'] extends Context.Transport.State.Empty
                    ? $Transport['name']
                    : $Args['context']['transport']['current']
                  registry: $Args['context']['transport']['registry'] & {
                    [_ in $Transport['name']]: $Transport
                  }
                }
              >
            >
}

// dprint-ignore
type TransportMethod<$Args extends Builder.Extension.Parameters<BuilderExtensionTransport>> =
  $Args['context']['transport'] extends Context.Transport.State.NonEmpty
    ? {
        /**
         * Configure the current transport.
         * TODO
         */
        <$Config extends $Args['context']['transport']['registry'][$Args['context']['transport']['current']]['config']>
          (config: $Config):
            Builder.Definition.MaterializeWith<
              $Args['definition'],
              ConfigManager.SetKeyAtPath<
                $Args['context'],
                ['transport', 'configurations', $Args['context']['transport']['current']],
                $Config
                // $Args['context']['transport']['registry'][$Transport['name']]['config'] & { [_ in $Transport['name']]: $Transport }
              >
            >
        /**
         * Set the current Transport, selected from amongst the registered ones, and optionally change its configuration.
         * TODO
         */
        <
          $Name extends Context.Transport.GetNames<$Args['context']['transport']>,
          $Config extends $Args['context']['transport']['registry'][$Name]['config']
        >
          (name: $Name, config?: $Config):
            Builder.Definition.MaterializeWith<
              $Args['definition'],
              ConfigManager.SetKey<
                $Args['context'],
                'transport',
                {
                  configurations: $Args['context']['transport']['configurations']
                  registry: $Args['context']['transport']['registry']
                  // update:
                  current: $Name,
                }
              >
            >
      }
    : never

export const builderExtensionSetTransport = Builder.Extension.create<BuilderExtensionTransport>((builder, state) => {
  return {
    addTransport: (transport: any) => {
      const newState = {
        ...state,
        transport: {
          ...state.transport,
          registry: {
            ...state.transport.registry,
            [transport.name]: transport,
          },
        },
      }
      if (!state.transport.current) {
        newState.transport.current = transport.name
        newState.transport.configurations[transport.name] = {} // todo initial configuration...
      }
      return builder(newState)
    },
    setTransport: (name: string, config?: any) => {
      return builder({
        ...state,
        transport: {
          ...state.transport,
          configurations: {
            ...state.transport.configurations,
            [name]: config ?? state.transport.configurations[name],
          },
          current: name,
        },
      })
    },
  }
})
