import { type ConfigInit } from '../../types/configurators/input.js'
import { Context } from '../../types/context.js'
import { createProperties } from '../helpers.js'

export const withProperties = createProperties((builder, state) => {
  return {
    with: (configInit: ConfigInit) => {
      return builder(Context.updateContextConfigInit(state, configInit))
    },
  } as any
})
