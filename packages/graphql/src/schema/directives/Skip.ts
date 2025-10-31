import type { Directive } from '../Directive.js'
import { Scalar } from '../nodes/Scalar/Scalar.js'

export const SkipDirective: Directive = {
  name: `skip`,
  arguments: {
    if: {
      name: `if`,
      type: Scalar.Boolean,
    },
  },
}
