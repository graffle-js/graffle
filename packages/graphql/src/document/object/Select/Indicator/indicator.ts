import type { Ts } from '@wollybeard/kit'
import type { Directive } from '../$$.js'
import { isNegativeIndicator, type Negative } from './negative.js'
import { isPositiveIndicator, type Positive } from './positive.js'

export type Indicator = Ts.Union.Expanded<Positive | Negative>

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

export type NoArgsIndicator$Expanded = Ts.Union.Expanded<Indicator | Ts.Simplify.Top<Directive.$Fields>>

export const isPositiveLikeFieldValue = (v: any): v is Positive => {
  return !isNegativeIndicator(v)
}
