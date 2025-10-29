import type { ArgsObject } from './arguments.js'
import type { Context } from './context.js'
import type { Directive } from './Directive/$.js'
import type { Indicator } from './Indicator/$.js'
import { type SelectAlias } from './SelectAlias.js'

export type RootType<$Context = Context> = AnySelectionSet<$Context>

export type AnySelectionSet<$Context = Context, $Keys extends string = string> = {
  [k in $Keys]?: FieldValue<$Context> | ArgsObject<$Context>
} // & SpecialFields

// interface SpecialFields extends Directive.$Fields {
//   // todo - this requires having the schema at runtime to know which fields to select.
//   // $scalars?: SelectionSet.Indicator
//   // $?: any // ArgsObject
// }

export type FieldValue<$Context = Context> = AnySelectionSet<$Context> | Indicator.Indicator | SelectAlias<any>

export const isSelectionSet = (value: unknown): value is AnySelectionSet => {
  return typeof value === `object` && value !== null
}

export type Any<$Context = Context> = AnyExceptAlias<$Context> | SelectAlias<any>

export type AnyExceptAlias<$Context = Context> = AnySelectionSet<$Context> | Indicator.Indicator

export namespace Bases {
  export interface Base<$Context = Context> {}

  export interface ObjectLike<$Context = Context> extends Base<$Context>, Directive.$Fields {
    /**
     * Special property to select all scalars.
     */
    $scalars?: Indicator.Indicator
  }

  /**
   * Base for root types (Query, Mutation, Subscription).
   * Root types don't support directives directly - only through inline fragments.
   */
  export interface RootObjectLike<$Context = Context> extends Base<$Context> {
    /**
     * Special property to select all scalars.
     */
    $scalars?: Indicator.Indicator
  }
}

// dprint-ignore

export type TypenameSelection = { __typename: true }
