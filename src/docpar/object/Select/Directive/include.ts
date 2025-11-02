import { Schema } from '#src/types/Schema/_.js'
import { Obj } from '@wollybeard/kit'
import type { Definition } from './$types.js'

export const Include: Definition = {
  name: `include`,
  type: Schema.Directives.standardDirectivesByName.include,
  normalizeArguments: (input: ArgsInput): Args => {
    return typeof input === `boolean`
      ? expandShortHand(input)
      : Obj.spreadShallow(
        argumentDefaults,
        input,
      ) as Args
  },
}

interface Args {
  if: boolean
}

const expandShortHand = (value: ArgsInputShortHand): Args => {
  return {
    if: value,
  }
}

export type ArgsInput = ArgsInputShortHand | ArgsInputLonghand

type ArgsInputShortHand = boolean

type ArgsInputLonghand = {
  if?: boolean | undefined
}

export const argumentDefaults: Args = {
  if: true,
}

export interface Field {
  $include?: ArgsInput | undefined
}

export namespace FieldStates {
  export interface Positive {
    $include: true | { if: true }
  }
  export interface Negative {
    $include: false | { if: false }
  }
  export interface Variable {
    $include: boolean | { if: boolean }
  }
}
