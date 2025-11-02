import type { Directive } from '../../nodes/Directive.js'
import { Scalar } from '../../nodes/Scalar/Scalar.js'

export const skip: Directive = {
  name: `skip`,
  arguments: {
    if: {
      name: `if`,
      type: Scalar.Boolean,
    },
  },
}
