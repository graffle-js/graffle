import type { Directive } from '../../nodes/Directive.js'
import { Scalar } from '../../nodes/Scalar/_.js'

export const skip: Directive = {
  name: `skip`,
  arguments: {
    if: {
      name: `if`,
      type: Scalar.Boolean,
    },
  },
}
