import { Chain } from '../../../lib/chain/__.js'
import type { ConfigManager } from '../../../lib/config-manager/__.js'
import { mergeHeadersInit, mergeRequestInit } from '../../../lib/http.js'
import { type Context } from '../context.js'
import type { AddIncrementalInput, WithInput } from '../Settings/inputIncrementable/inputIncrementable.js'

export interface With_ extends Chain.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: With<this['params']>
}

export interface With<$Args extends Chain.Extension.Parameters<With_>> {
  /**
   * TODO With Docs.
   */
  with: <$Input extends WithInput<$Args['context']['config']>>(
    input: $Input,
    // todo fixme
    // eslint-disable-next-line
    // @ts-ignore Passes after generation
  ) => Chain.Definition.MaterializeWithNewContext<
    $Args['chain'],
    ConfigManager.SetAtPath<$Args['context'], ['config'], AddIncrementalInput<$Args['context']['config'], $Input>>
  >
}

export const withProperties = Chain.Extension.create<With_>((builder, state) => {
  return {
    with: (input: WithInput) => {
      return builder({
        ...state,
        // @ts-expect-error fixme
        input: {
          ...state.input,
          output: input.output,
          transport: {
            ...state.input.transport,
            ...input.transport,
            headers: mergeHeadersInit(state.input.transport?.headers, input.transport?.headers),
            raw: mergeRequestInit(state.input.transport?.raw, input.transport?.raw),
          },
        },
      })
    },
  }
})
