import type { Obj } from '@wollybeard/kit'

export const positiveIndicatorEnum = {
  true: true,
} as const

export type Positive = Obj.values<typeof positiveIndicatorEnum>[number]

export const isPositiveIndicator = (v: any): v is Positive => {
  return v === positiveIndicatorEnum.true
}
