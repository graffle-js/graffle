import type { Ts } from '@wollybeard/kit'

export const negativeIndicatorEnum = {
  false: false,
  undefined: undefined,
} as const

// We do not definite the type in a DRY way like below because it causes
// IDEs to show Values<...> in the final type making it harder to read.
// export type Negative = UnionExpanded<Values<typeof negativeIndicatorEnum>>
export type Negative = Ts.Union.Expanded<false | undefined>

export const isNegativeIndicator = (v: any): v is Negative => {
  return v === negativeIndicatorEnum.false || v === negativeIndicatorEnum.undefined
}
