import type { Directive } from '../../nodes/Directive.js'
import * as Scalars from '../scalars/__.js'

export const skip: Directive = {
  name: `skip`,
  arguments: {
    if: {
      name: `if`,
      type: Scalars.Boolean,
    },
  },
}
