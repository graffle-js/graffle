import type { Scalar } from '../__.js'

export interface Directive {
  name: string
  arguments: Record<string, {
    name: string
    type: Scalar
  }>
}
