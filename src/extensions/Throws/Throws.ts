import { createBuilderExtension, createExtension } from '../../entrypoints/extensionkit.js'
import { type AssertExtends, type BuilderConfig, type WithInput } from '../../entrypoints/main.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
// todo: no deep imports, rethink these utilities and/or how they are exported from the graffle package.
import type { Context } from '../../layers/6_client/context.js'
import type { Builder } from '../../lib/builder/__.js'

export const Throws = createExtension({
  name: `Throws`,
  create: () => {
    return {
      builder: createBuilderExtension<BuilderExtension>(({ client, property, path }) => {
        if (property !== `throws` || path.length !== 0) return undefined

        // todo redesign input to allow to force throw always
        // todo pull pre-configured config from core
        const throwsifiedInput: WithInput = {
          output: {
            envelope: {
              enabled: client._.config.output.envelope.enabled,
              // @ts-expect-error
              errors: { execution: false, other: false, schema: false },
            },
            // @ts-expect-error
            errors: { execution: `throw`, other: `throw`, schema: `throw` },
          },
        }
        return () => client.with(throwsifiedInput)
      }),
    }
  },
})

interface BuilderExtension extends Builder.Extension {
  context: Context
  return: BuilderExtension_<AssertExtends<this['params'], Builder.Extension.Parameters<BuilderExtension>>>
}

interface BuilderExtension_<$Args extends Builder.Extension.Parameters<BuilderExtension>> {
  /**
   * TODO
   */
  // @ts-expect-error fixme
  throws: () => IncrementWthNewConfig<$Args, ThrowsifyConfig<$Args['context']['config']>>
}

type ThrowsifyConfig<$BuilderConfig extends BuilderConfig> = ConfigManager.SetOne<
  $BuilderConfig,
  ['output', 'errors'],
  { other: 'throw'; execution: 'throw' }
>
