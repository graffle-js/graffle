import { inspect } from 'node:util'

export const dump = (value: unknown) => {
  console.log(inspect(value, { depth: null }))
}
