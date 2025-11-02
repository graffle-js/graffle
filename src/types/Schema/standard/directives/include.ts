import type { Directive } from '../../nodes/Directive.js'
import { Scalar } from '../../nodes/Scalar/_.js'

export const include: Directive = {
  name: `include`,
  arguments: {
    if: {
      name: `if`,
      type: Scalar.Boolean,
    },
  },
}
