import { create } from '../../extension/extension.js'
import { createProperties } from '../helpers.js'

export const anywareProperties = createProperties((builder, context) => {
  return {
    anyware: (interceptor) => {
      return builder({
        ...context,
        extensions: [
          ...context.extensions,
          create({
            name: `InlineAnyware`,
            create: () => ({ onRequest: interceptor }),
          })(),
        ],
      })
    },
  }
})
