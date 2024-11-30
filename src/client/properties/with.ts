import { createProperties } from '../helpers.js'

export const withProperties = createProperties((builder, state) => {
  return {
    with: (input: any) => {
      return builder({
        ...state,
        input: {
          ...state.input,
          output: input.output,
        },
      })
    },
  } as any
})
