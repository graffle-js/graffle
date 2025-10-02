import type { Overload } from '../Overload/$.js'

export * as Extension from './$$.js'

export interface Extension {
  overloads: Overload.Data[]
}
