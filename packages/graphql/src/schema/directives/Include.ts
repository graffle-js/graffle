import type { Directive } from '../Directive.js'
import { Scalar } from '../nodes/Scalar/Scalar.js'

export const IncludeDirective: Directive = {
  name: `include`,
  arguments: {
    if: {
      name: `if`,
      type: Scalar.Boolean,
    },
  },
}
