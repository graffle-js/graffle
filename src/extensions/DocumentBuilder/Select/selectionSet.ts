import type { ArgsObject } from './arguments.js'
import type { DefaultContext } from './context.js'
import type { Directive } from './Directive/__.js'
import type { Indicator } from './Indicator/__.js'
import { type SelectAlias } from './SelectAlias.js'

export type RootType<$Context = DefaultContext> = AnySelectionSet<$Context>

export type AnySelectionSet<$Context = DefaultContext> = {
  [k: string]: FieldValue<$Context> | ArgsObject<$Context>
} // & SpecialFields

// interface SpecialFields extends Directive.$Fields {
//   // todo - this requires having the schema at runtime to know which fields to select.
//   // $scalars?: SelectionSet.Indicator
//   // $?: any // ArgsObject
// }

export type FieldValue<$Context = DefaultContext> = AnySelectionSet<$Context> | Indicator.Indicator | SelectAlias<any>

export const isSelectionSet = (value: unknown): value is AnySelectionSet => {
  return typeof value === `object` && value !== null
}

export type Any<$Context = DefaultContext> = AnyExceptAlias<$Context> | SelectAlias<any>

export type AnyExceptAlias<$Context = DefaultContext> = AnySelectionSet<$Context> | Indicator.Indicator

export namespace Bases {
  export interface Base<$Context = DefaultContext> extends Directive.$Fields {}

  export interface ObjectLike<$Context = DefaultContext> extends Base<$Context> {
    /**
     * Special property to select all scalars.
     */
    $scalars?: Indicator.Indicator
  }
}

// dprint-ignore

export type TypenameSelection = { __typename: true }
