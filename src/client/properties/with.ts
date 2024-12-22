import { type ConfigInit, updateContext } from '../Configuration/ConfigInit.js'
import { createProperties } from '../helpers.js'

export const withProperties = createProperties((builder, state) => {
  return {
    with: (configInit: ConfigInit) => {
      return builder(updateContext(state, configInit))
    },
  } as any
})
