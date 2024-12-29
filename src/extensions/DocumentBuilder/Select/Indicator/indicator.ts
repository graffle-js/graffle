import type { Simplify } from 'type-fest'
import type { UnionExpanded } from '../../../../lib/prelude.js'
import type { Directive } from '../_.js'
import { isNegativeIndicator, type Negative } from './negative.js'
import { isPositiveIndicator, type Positive } from './positive.js'

export type Indicator = UnionExpanded<Positive | Negative>

// dprint-ignore
export type IsOptionalIndicator<$SelectionSet> =
  true | undefined extends $SelectionSet
    ? true
    : boolean extends $SelectionSet
      ? true
      : false

export const isIndicator = (v: any): v is Indicator => {
  return isPositiveIndicator(v) || isNegativeIndicator(v)
}

export type NoArgsIndicator = Indicator | Directive.$Fields

export type NoArgsIndicator$Expanded = UnionExpanded<Indicator | Simplify<Directive.$Fields>>

export const isPositiveLikeFieldValue = (v: any): v is Positive => {
  return !isNegativeIndicator(v)
}
