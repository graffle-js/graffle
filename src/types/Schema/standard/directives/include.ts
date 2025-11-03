import type { Directive } from '../../nodes/Directive.js'
import * as Scalars from '../scalars/__.js'

export const include: Directive = {
  name: `include`,
  arguments: {
    if: {
      name: `if`,
      type: Scalars.Boolean,
    },
  },
}
