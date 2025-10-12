import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

type $class<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | $class$SelectionSet<_$Context>

export interface $class$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

type $class$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | $class$SelectionSet<_$Context>
>

export { type $class as class }
export { type $class$Expanded as class$Expanded }

export type fans<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  fans$SelectionSet<_$Context>

export interface fans$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Patron<_$Context> {
}

export type fans$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  fans$SelectionSet<_$Context>
>

export type id<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | id$SelectionSet<_$Context>

export interface id$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type id$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | id$SelectionSet<_$Context>
>

export type name<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | name$SelectionSet<_$Context>

export interface name$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type name$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | name$SelectionSet<_$Context>
>

export type pokemon<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = pokemon$SelectionSet<_$Context>

export interface pokemon$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Pokemon<_$Context> {
}

export type pokemon$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  pokemon$SelectionSet<_$Context>
>
