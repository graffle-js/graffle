import { Builder } from '../../lib/builder/__.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { _ } from '../../lib/prelude.js'
import type { ClientTransports } from '../context.js'
import { type Context } from '../context.js'

export interface BuilderExtensionTransport extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: BuilderExtensionTransport_<this['params']>
}

// dprint-ignore
interface BuilderExtensionTransport_<$Args extends Builder.Extension.Parameters<BuilderExtensionTransport>> {
  /**
   * TODO
   */
  transport: TransportMethod<$Args>
  // /**
  //  * Register a new Transport.
  //  * TODO
  //  */
  // addTransport:
  //   <$Transport extends Transport>
  //     (transport: $Transport) =>
  //       Builder.Definition.MaterializeWith<
  //         $Args['definition'],
  //         Context.Updaters.AddTransport<
  //           $Args['context'],
  //           $Transport
  //         >
  //       >
}

// dprint-ignore
type TransportMethod<$Args extends Builder.Extension.Parameters<BuilderExtensionTransport>> =
  $Args['context']['transports'] extends ClientTransports.States.NonEmpty
    ? {
        /**
         * Configure the current transport.
         * TODO
         */
        <$Config extends Partial<$Args['context']['transports']['registry'][$Args['context']['transports']['current']]['config']>>
        // <$Config extends object>
          (config: $Config):
            Builder.Definition.MaterializeWith<
              $Args['definition'],
              // $Args['context']
              $Args['context']
              & {
                transports: {
                  configurations: {
                    [_ in $Args['context']['transports']['current']]: $Config
                  }
                }
              }

              // ConfigManager.SetKey<
              //   $Args['context'],
              //   'transports',
              //   $Args['context']['transports'] & {x:$Config}

              //   // {
              //   //   configurations: $Args['context']['transports']['configurations']
              //   //   registry: $Args['context']['transports']['registry']
              //   //   current: $Args['context']['transports']['current']
              //   // }
              //   // ['transports', 'configurations', $Args['context']['transports']['current']],
              //   // $Config
              //   // $Args['context']['transport']['registry'][$Transport['name']]['config'] & { [_ in $Transport['name']]: $Transport }
              // >
            >
        /**
         * Set the current Transport, selected from amongst the registered ones, and optionally change its configuration.
         * TODO
         */
        <
          $Name extends ClientTransports.GetNames<$Args['context']['transports']>,
          $Config extends $Args['context']['transports']['registry'][$Name]['config']
        >
          (name: $Name, config?: $Config):
            Builder.Definition.MaterializeWith<
              $Args['definition'],
              ConfigManager.SetKey<
                $Args['context'],
                'transports',
                {
                  configurations: $Args['context']['transports']['configurations']
                  registry: $Args['context']['transports']['registry']
                  // update:
                  current: $Name,
                }
              >
            >
      }
    : never

export const BuilderExtensionTransport = Builder.Extension.create<BuilderExtensionTransport>((builder, state) => {
  return {
    addTransport: (transport: any) => {
      const newState = {
        ...state,
        transport: {
          ...state.transports,
          registry: {
            ...state.transports.registry,
            [transport.name]: transport,
          },
        },
      }
      if (!state.transports.current) {
        newState.transport.current = transport.name
        newState.transport.configurations[transport.name] = {} // todo initial configuration...
      }
      return builder(newState)
    },
    setTransport: (name: string, config?: any) => {
      return builder({
        ...state,
        transports: {
          ...state.transports,
          configurations: {
            ...state.transports.configurations,
            [name]: config ?? state.transports.configurations[name],
          },
          current: name,
        },
      })
    },
  }
})
