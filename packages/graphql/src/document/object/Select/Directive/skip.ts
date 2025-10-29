import { Schema } from '@graffle/graphql/schema-types'
import type { Definition } from './$types.js'

export const Skip: Definition = {
  name: `skip`,
  type: Schema.Directives.standardDirectivesByName.skip,
  normalizeArguments: (args: ArgsInput): Args => {
    return {
      if: typeof args === `boolean` ? args : args.if === undefined ? true : args.if,
    }
  },
}

interface Args {
  if: boolean
}

export type ArgsInput = InputShortHand | InputLonghand

type InputShortHand = boolean

type InputLonghand = {
  if?: boolean | undefined
}

export interface Field {
  $skip?: ArgsInput | undefined
}

export namespace FieldStates {
  export interface Positive {
    $skip: true | { if: true }
  }
  export interface Negative {
    $skip: false | { if: false }
  }
  export interface Variable {
    $skip: boolean | { if: boolean }
  }
}
