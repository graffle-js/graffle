import type { Scalar } from './$$.js'
import { IncludeDirective } from './directives/Include.js'
import { SkipDirective } from './directives/Skip.js'

export interface Directive {
  name: string
  arguments: Record<string, {
    name: string
    type: Scalar
  }>
}

export const standardDirectivesByName = {
  include: IncludeDirective,
  skip: SkipDirective,
}
