import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type InputObjectNested<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | InputObjectNested$SelectionSet<_$Context>

export interface InputObjectNested$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `InputObjectNested` field. No arguments are required so you may omit this.
   */
  $?: InputObjectNested$Arguments<_$Context>
}

export interface InputObjectNested$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `InputObjectNested` |
   * | **Parent** | {@link $NamedTypes.$Query}.InputObjectNested |
   * | **Path** | `Query.InputObjectNested(input)` |
   * | **Nullability** | Optional |
   */
  input?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.InputObjectNested<_$Context> | null | undefined>
}

export type InputObjectNested$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | InputObjectNested$SelectionSet<_$Context>
>

export type InputObjectNestedNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = InputObjectNestedNonNull$SelectionSet<_$Context>

export interface InputObjectNestedNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `InputObjectNestedNonNull` field. All arguments are required so you must include this.
   */
  $: InputObjectNestedNonNull$Arguments<_$Context>
}

export interface InputObjectNestedNonNull$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `InputObjectNestedNonNull!` |
   * | **Parent** | {@link $NamedTypes.$Query}.InputObjectNestedNonNull |
   * | **Path** | `Query.InputObjectNestedNonNull(input)` |
   * | **Nullability** | Required |
   */
  input: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.InputObjectNestedNonNull<_$Context>>
}

export type InputObjectNestedNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  InputObjectNestedNonNull$SelectionSet<_$Context>
>

export type abcEnum<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | abcEnum$SelectionSet<_$Context>

export interface abcEnum$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type abcEnum$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | abcEnum$SelectionSet<_$Context>
>

export type argInputObjectCircular<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | argInputObjectCircular$SelectionSet<_$Context>

export interface argInputObjectCircular$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `argInputObjectCircular` field. No arguments are required so you may omit this.
   */
  $?: argInputObjectCircular$Arguments<_$Context>
}

export interface argInputObjectCircular$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `InputObjectCircular` |
   * | **Parent** | {@link $NamedTypes.$Query}.argInputObjectCircular |
   * | **Path** | `Query.argInputObjectCircular(input)` |
   * | **Nullability** | Optional |
   */
  input?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.InputObjectCircular<_$Context> | null | undefined>
}

export type argInputObjectCircular$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | argInputObjectCircular$SelectionSet<_$Context>
>

export type bigintField<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | bigintField$SelectionSet<_$Context>

export interface bigintField$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type bigintField$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | bigintField$SelectionSet<_$Context>
>

export type bigintFieldNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | bigintFieldNonNull$SelectionSet<_$Context>

export interface bigintFieldNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type bigintFieldNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | bigintFieldNonNull$SelectionSet<_$Context>
>

export type date<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | date$SelectionSet<_$Context>

export interface date$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type date$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | date$SelectionSet<_$Context>
>

export type dateArg<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateArg$SelectionSet<_$Context>

export interface dateArg$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `dateArg` field. No arguments are required so you may omit this.
   */
  $?: dateArg$Arguments<_$Context>
}

export interface dateArg$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Date` |
   * | **Parent** | {@link $NamedTypes.$Query}.dateArg |
   * | **Path** | `Query.dateArg(date)` |
   * | **Nullability** | Optional |
   */
  date?: $Scalars.Date<_$Context>
}

export type dateArg$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateArg$SelectionSet<_$Context>
>

export type dateArgInputObject<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateArgInputObject$SelectionSet<_$Context>

export interface dateArgInputObject$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `dateArgInputObject` field. No arguments are required so you may omit this.
   */
  $?: dateArgInputObject$Arguments<_$Context>
}

export interface dateArgInputObject$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `InputObject` |
   * | **Parent** | {@link $NamedTypes.$Query}.dateArgInputObject |
   * | **Path** | `Query.dateArgInputObject(input)` |
   * | **Nullability** | Optional |
   */
  input?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.InputObject<_$Context> | null | undefined>
}

export type dateArgInputObject$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateArgInputObject$SelectionSet<_$Context>
>

export type dateArgList<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateArgList$SelectionSet<_$Context>

export interface dateArgList$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `dateArgList` field. No arguments are required so you may omit this.
   */
  $?: dateArgList$Arguments<_$Context>
}

export interface dateArgList$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `[Date!]` |
   * | **Parent** | {@link $NamedTypes.$Query}.dateArgList |
   * | **Path** | `Query.dateArgList(date)` |
   * | **Nullability** | Optional |
   */
  date?: $$Utilities.DocumentBuilderKit.Var.Maybe<Array<$Scalars.Date<_$Context>> | null | undefined>
}

export type dateArgList$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateArgList$SelectionSet<_$Context>
>

export type dateArgNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = dateArgNonNull$SelectionSet<_$Context>

export interface dateArgNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `dateArgNonNull` field. All arguments are required so you must include this.
   */
  $: dateArgNonNull$Arguments<_$Context>
}

export interface dateArgNonNull$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Date!` |
   * | **Parent** | {@link $NamedTypes.$Query}.dateArgNonNull |
   * | **Path** | `Query.dateArgNonNull(date)` |
   * | **Nullability** | Required |
   */
  date: $Scalars.Date$NonNull<_$Context>
}

export type dateArgNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  dateArgNonNull$SelectionSet<_$Context>
>

export type dateArgNonNullList<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = dateArgNonNullList$SelectionSet<_$Context>

export interface dateArgNonNullList$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `dateArgNonNullList` field. All arguments are required so you must include this.
   */
  $: dateArgNonNullList$Arguments<_$Context>
}

export interface dateArgNonNullList$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `[Date]!` |
   * | **Parent** | {@link $NamedTypes.$Query}.dateArgNonNullList |
   * | **Path** | `Query.dateArgNonNullList(date)` |
   * | **Nullability** | Required |
   */
  date: $$Utilities.DocumentBuilderKit.Var.Maybe<Array<$Scalars.Date<_$Context>>>
}

export type dateArgNonNullList$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  dateArgNonNullList$SelectionSet<_$Context>
>

export type dateArgNonNullListNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = dateArgNonNullListNonNull$SelectionSet<_$Context>

export interface dateArgNonNullListNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `dateArgNonNullListNonNull` field. All arguments are required so you must include this.
   */
  $: dateArgNonNullListNonNull$Arguments<_$Context>
}

export interface dateArgNonNullListNonNull$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `[Date!]!` |
   * | **Parent** | {@link $NamedTypes.$Query}.dateArgNonNullListNonNull |
   * | **Path** | `Query.dateArgNonNullListNonNull(date)` |
   * | **Nullability** | Required |
   */
  date: $$Utilities.DocumentBuilderKit.Var.Maybe<Array<$Scalars.Date<_$Context>>>
}

export type dateArgNonNullListNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  dateArgNonNullListNonNull$SelectionSet<_$Context>
>

export type dateInterface1<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = dateInterface1$SelectionSet<_$Context>

export interface dateInterface1$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.DateInterface1<_$Context> {
}

export type dateInterface1$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  dateInterface1$SelectionSet<_$Context>
>

export type dateList<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateList$SelectionSet<_$Context>

export interface dateList$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type dateList$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateList$SelectionSet<_$Context>
>

export type dateListList<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateListList$SelectionSet<_$Context>

export interface dateListList$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type dateListList$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateListList$SelectionSet<_$Context>
>

export type dateListNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateListNonNull$SelectionSet<_$Context>

export interface dateListNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type dateListNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateListNonNull$SelectionSet<_$Context>
>

export type dateNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateNonNull$SelectionSet<_$Context>

export interface dateNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type dateNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | dateNonNull$SelectionSet<_$Context>
>

export type dateObject1<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = dateObject1$SelectionSet<_$Context>

export interface dateObject1$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.DateObject1<_$Context> {
}

export type dateObject1$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  dateObject1$SelectionSet<_$Context>
>

export type dateUnion<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = dateUnion$SelectionSet<_$Context>

export interface dateUnion$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.DateUnion<_$Context> {
}

export type dateUnion$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  dateUnion$SelectionSet<_$Context>
>

export type error<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | error$SelectionSet<_$Context>

export interface error$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `error` field. No arguments are required so you may omit this.
   */
  $?: error$Arguments<_$Context>
}

export interface error$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `String` |
   * | **Parent** | {@link $NamedTypes.$Query}.error |
   * | **Path** | `Query.error(case)` |
   * | **Nullability** | Optional |
   */
  case?: $Scalars.String<_$Context>
}

export type error$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | error$SelectionSet<_$Context>
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

export type idNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | idNonNull$SelectionSet<_$Context>

export interface idNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type idNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | idNonNull$SelectionSet<_$Context>
>

type $interface<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  $interface$SelectionSet<_$Context>

export interface $interface$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Interface<_$Context> {
}

type $interface$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  $interface$SelectionSet<_$Context>
>

export { type $interface as interface }
export { type $interface$Expanded as interface$Expanded }

export type interfaceHierarchyChildA<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceHierarchyChildA$SelectionSet<_$Context>

export interface interfaceHierarchyChildA$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.InterfaceChildA<_$Context> {
  /**
   * Arguments for `interfaceHierarchyChildA` field. No arguments are required so you may omit this.
   */
  $?: interfaceHierarchyChildA$Arguments<_$Context>
}

export interface interfaceHierarchyChildA$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `ChildAInterfaceHierarchyMember` |
   * | **Parent** | {@link $NamedTypes.$Query}.interfaceHierarchyChildA |
   * | **Path** | `Query.interfaceHierarchyChildA(type)` |
   * | **Nullability** | Optional |
   */
  $type?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.ChildAInterfaceHierarchyMember | null | undefined>
}

export type interfaceHierarchyChildA$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  interfaceHierarchyChildA$SelectionSet<_$Context>
>

export type interfaceHierarchyChildB<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceHierarchyChildB$SelectionSet<_$Context>

export interface interfaceHierarchyChildB$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.InterfaceChildB<_$Context> {
  /**
   * Arguments for `interfaceHierarchyChildB` field. No arguments are required so you may omit this.
   */
  $?: interfaceHierarchyChildB$Arguments<_$Context>
}

export interface interfaceHierarchyChildB$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `ChildBInterfaceHierarchyMember` |
   * | **Parent** | {@link $NamedTypes.$Query}.interfaceHierarchyChildB |
   * | **Path** | `Query.interfaceHierarchyChildB(type)` |
   * | **Nullability** | Optional |
   */
  $type?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.ChildBInterfaceHierarchyMember | null | undefined>
}

export type interfaceHierarchyChildB$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  interfaceHierarchyChildB$SelectionSet<_$Context>
>

export type interfaceHierarchyGrandparents<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceHierarchyGrandparents$SelectionSet<_$Context>

export interface interfaceHierarchyGrandparents$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.InterfaceGrandparent<_$Context> {
  /**
   * Arguments for `interfaceHierarchyGrandparents` field. No arguments are required so you may omit this.
   */
  $?: interfaceHierarchyGrandparents$Arguments<_$Context>
}

export interface interfaceHierarchyGrandparents$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `GrandparentInterfaceHierarchyMember` |
   * | **Parent** | {@link $NamedTypes.$Query}.interfaceHierarchyGrandparents |
   * | **Path** | `Query.interfaceHierarchyGrandparents(type)` |
   * | **Nullability** | Optional |
   */
  $type?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.GrandparentInterfaceHierarchyMember | null | undefined>
}

export type interfaceHierarchyGrandparents$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  interfaceHierarchyGrandparents$SelectionSet<_$Context>
>

export type interfaceHierarchyParents<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceHierarchyParents$SelectionSet<_$Context>

export interface interfaceHierarchyParents$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.InterfaceParent<_$Context> {
  /**
   * Arguments for `interfaceHierarchyParents` field. No arguments are required so you may omit this.
   */
  $?: interfaceHierarchyParents$Arguments<_$Context>
}

export interface interfaceHierarchyParents$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `ParentInterfaceHierarchyMember` |
   * | **Parent** | {@link $NamedTypes.$Query}.interfaceHierarchyParents |
   * | **Path** | `Query.interfaceHierarchyParents(type)` |
   * | **Nullability** | Optional |
   */
  $type?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.ParentInterfaceHierarchyMember | null | undefined>
}

export type interfaceHierarchyParents$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  interfaceHierarchyParents$SelectionSet<_$Context>
>

export type interfaceNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceNonNull$SelectionSet<_$Context>

export interface interfaceNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Interface<_$Context> {
}

export type interfaceNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  interfaceNonNull$SelectionSet<_$Context>
>

export type interfaceWithArgs<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceWithArgs$SelectionSet<_$Context>

export interface interfaceWithArgs$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Interface<_$Context> {
  /**
   * Arguments for `interfaceWithArgs` field. All arguments are required so you must include this.
   */
  $: interfaceWithArgs$Arguments<_$Context>
}

export interface interfaceWithArgs$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `ID!` |
   * | **Parent** | {@link $NamedTypes.$Query}.interfaceWithArgs |
   * | **Path** | `Query.interfaceWithArgs(id)` |
   * | **Nullability** | Required |
   */
  id: $Scalars.ID$NonNull<_$Context>
}

export type interfaceWithArgs$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  interfaceWithArgs$SelectionSet<_$Context>
>

export type listInt<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | listInt$SelectionSet<_$Context>

export interface listInt$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type listInt$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | listInt$SelectionSet<_$Context>
>

export type listIntNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | listIntNonNull$SelectionSet<_$Context>

export interface listIntNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type listIntNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | listIntNonNull$SelectionSet<_$Context>
>

export type listListInt<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | listListInt$SelectionSet<_$Context>

export interface listListInt$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type listListInt$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | listListInt$SelectionSet<_$Context>
>

export type listListIntNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | listListIntNonNull$SelectionSet<_$Context>

export interface listListIntNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type listListIntNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | listListIntNonNull$SelectionSet<_$Context>
>

export type lowerCaseUnion<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = lowerCaseUnion$SelectionSet<_$Context>

export interface lowerCaseUnion$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.lowerCaseUnion<_$Context> {
}

export type lowerCaseUnion$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  lowerCaseUnion$SelectionSet<_$Context>
>

type $object<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  $object$SelectionSet<_$Context>

export interface $object$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Object1<_$Context> {
}

type $object$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  $object$SelectionSet<_$Context>
>

export { type $object as object }
export { type $object$Expanded as object$Expanded }

export type objectList<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = objectList$SelectionSet<_$Context>

export interface objectList$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Object1<_$Context> {
}

export type objectList$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  objectList$SelectionSet<_$Context>
>

export type objectListNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = objectListNonNull$SelectionSet<_$Context>

export interface objectListNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Object1<_$Context> {
}

export type objectListNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  objectListNonNull$SelectionSet<_$Context>
>

export type objectNested<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = objectNested$SelectionSet<_$Context>

export interface objectNested$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.ObjectNested<_$Context> {
}

export type objectNested$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  objectNested$SelectionSet<_$Context>
>

export type objectNestedWithArgs<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = objectNestedWithArgs$SelectionSet<_$Context>

export interface objectNestedWithArgs$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.ObjectNestedWithArgs<_$Context> {
}

export type objectNestedWithArgs$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  objectNestedWithArgs$SelectionSet<_$Context>
>

export type objectNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = objectNonNull$SelectionSet<_$Context>

export interface objectNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Object1<_$Context> {
}

export type objectNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  objectNonNull$SelectionSet<_$Context>
>

export type objectWithArgs<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = objectWithArgs$SelectionSet<_$Context>

export interface objectWithArgs$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Object1<_$Context> {
  /**
   * Arguments for `objectWithArgs` field. No arguments are required so you may omit this.
   */
  $?: objectWithArgs$Arguments<_$Context>
}

export interface objectWithArgs$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Boolean` |
   * | **Parent** | {@link $NamedTypes.$Query}.objectWithArgs |
   * | **Path** | `Query.objectWithArgs(boolean)` |
   * | **Nullability** | Optional |
   */
  boolean?: $Scalars.Boolean<_$Context>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Float` |
   * | **Parent** | {@link $NamedTypes.$Query}.objectWithArgs |
   * | **Path** | `Query.objectWithArgs(float)` |
   * | **Nullability** | Optional |
   */
  float?: $Scalars.Float<_$Context>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `ID` |
   * | **Parent** | {@link $NamedTypes.$Query}.objectWithArgs |
   * | **Path** | `Query.objectWithArgs(id)` |
   * | **Nullability** | Optional |
   */
  id?: $Scalars.ID<_$Context>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Int` |
   * | **Parent** | {@link $NamedTypes.$Query}.objectWithArgs |
   * | **Path** | `Query.objectWithArgs(int)` |
   * | **Nullability** | Optional |
   */
  int?: $Scalars.Int<_$Context>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `String` |
   * | **Parent** | {@link $NamedTypes.$Query}.objectWithArgs |
   * | **Path** | `Query.objectWithArgs(string)` |
   * | **Nullability** | Optional |
   */
  string?: $Scalars.String<_$Context>
}

export type objectWithArgs$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  objectWithArgs$SelectionSet<_$Context>
>

export type result<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = result$SelectionSet<_$Context>

export interface result$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Result<_$Context> {
  /**
   * Arguments for `result` field. All arguments are required so you must include this.
   */
  $: result$Arguments<_$Context>
}

export interface result$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Case!` |
   * | **Parent** | {@link $NamedTypes.$Query}.result |
   * | **Path** | `Query.result(case)` |
   * | **Nullability** | Required |
   */
  $case: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.Case>
}

export type result$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  result$SelectionSet<_$Context>
>

export type resultNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = resultNonNull$SelectionSet<_$Context>

export interface resultNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Result<_$Context> {
  /**
   * Arguments for `resultNonNull` field. No arguments are required so you may omit this.
   */
  $?: resultNonNull$Arguments<_$Context>
}

export interface resultNonNull$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Case` |
   * | **Parent** | {@link $NamedTypes.$Query}.resultNonNull |
   * | **Path** | `Query.resultNonNull(case)` |
   * | **Nullability** | Optional |
   */
  $case?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.Case | null | undefined>
}

export type resultNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  resultNonNull$SelectionSet<_$Context>
>

type $string<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | $string$SelectionSet<_$Context>

export interface $string$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

type $string$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | $string$SelectionSet<_$Context>
>

export { type $string as string }
export { type $string$Expanded as string$Expanded }

export type stringWithArgEnum<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | stringWithArgEnum$SelectionSet<_$Context>

export interface stringWithArgEnum$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `stringWithArgEnum` field. No arguments are required so you may omit this.
   */
  $?: stringWithArgEnum$Arguments<_$Context>
}

export interface stringWithArgEnum$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `ABCEnum` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithArgEnum |
   * | **Path** | `Query.stringWithArgEnum(ABCEnum)` |
   * | **Nullability** | Optional |
   */
  $ABCEnum?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.ABCEnum | null | undefined>
}

export type stringWithArgEnum$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | stringWithArgEnum$SelectionSet<_$Context>
>

export type stringWithArgInputObject<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | stringWithArgInputObject$SelectionSet<_$Context>

export interface stringWithArgInputObject$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `stringWithArgInputObject` field. No arguments are required so you may omit this.
   */
  $?: stringWithArgInputObject$Arguments<_$Context>
}

export interface stringWithArgInputObject$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `InputObject` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithArgInputObject |
   * | **Path** | `Query.stringWithArgInputObject(input)` |
   * | **Nullability** | Optional |
   */
  input?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.InputObject<_$Context> | null | undefined>
}

export type stringWithArgInputObject$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | stringWithArgInputObject$SelectionSet<_$Context>
>

export type stringWithArgInputObjectEnum<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = stringWithArgInputObjectEnum$SelectionSet<_$Context>

export interface stringWithArgInputObjectEnum$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `stringWithArgInputObjectEnum` field. All arguments are required so you must include this.
   */
  $: stringWithArgInputObjectEnum$Arguments<_$Context>
}

export interface stringWithArgInputObjectEnum$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `InputObjectEnum!` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithArgInputObjectEnum |
   * | **Path** | `Query.stringWithArgInputObjectEnum(input)` |
   * | **Nullability** | Required |
   */
  input: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.InputObjectEnum<_$Context>>
}

export type stringWithArgInputObjectEnum$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  stringWithArgInputObjectEnum$SelectionSet<_$Context>
>

export type stringWithArgInputObjectRequired<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = stringWithArgInputObjectRequired$SelectionSet<_$Context>

export interface stringWithArgInputObjectRequired$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `stringWithArgInputObjectRequired` field. All arguments are required so you must include this.
   */
  $: stringWithArgInputObjectRequired$Arguments<_$Context>
}

export interface stringWithArgInputObjectRequired$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `InputObject!` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithArgInputObjectRequired |
   * | **Path** | `Query.stringWithArgInputObjectRequired(input)` |
   * | **Nullability** | Required |
   */
  input: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.InputObject<_$Context>>
}

export type stringWithArgInputObjectRequired$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  stringWithArgInputObjectRequired$SelectionSet<_$Context>
>

export type stringWithArgs<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | stringWithArgs$SelectionSet<_$Context>

export interface stringWithArgs$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `stringWithArgs` field. No arguments are required so you may omit this.
   */
  $?: stringWithArgs$Arguments<_$Context>
}

export interface stringWithArgs$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Boolean` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithArgs |
   * | **Path** | `Query.stringWithArgs(boolean)` |
   * | **Nullability** | Optional |
   */
  boolean?: $Scalars.Boolean<_$Context>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Float` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithArgs |
   * | **Path** | `Query.stringWithArgs(float)` |
   * | **Nullability** | Optional |
   */
  float?: $Scalars.Float<_$Context>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `ID` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithArgs |
   * | **Path** | `Query.stringWithArgs(id)` |
   * | **Nullability** | Optional |
   */
  id?: $Scalars.ID<_$Context>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Int` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithArgs |
   * | **Path** | `Query.stringWithArgs(int)` |
   * | **Nullability** | Optional |
   * | **⚠ Deprecated** | Example of argument deprecation reason here. |
   */
  int?: $Scalars.Int<_$Context>
  /**
   * Example of some argument documentation here.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `String` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithArgs |
   * | **Path** | `Query.stringWithArgs(string)` |
   * | **Nullability** | Optional |
   */
  string?: $Scalars.String<_$Context>
}

export type stringWithArgs$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | stringWithArgs$SelectionSet<_$Context>
>

export type stringWithListArg<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | stringWithListArg$SelectionSet<_$Context>

export interface stringWithListArg$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `stringWithListArg` field. No arguments are required so you may omit this.
   */
  $?: stringWithListArg$Arguments<_$Context>
}

export interface stringWithListArg$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `[Int]` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithListArg |
   * | **Path** | `Query.stringWithListArg(ints)` |
   * | **Nullability** | Optional |
   */
  ints?: $$Utilities.DocumentBuilderKit.Var.Maybe<Array<$Scalars.Int<_$Context>> | null | undefined>
}

export type stringWithListArg$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | stringWithListArg$SelectionSet<_$Context>
>

export type stringWithListArgRequired<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = stringWithListArgRequired$SelectionSet<_$Context>

export interface stringWithListArgRequired$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `stringWithListArgRequired` field. All arguments are required so you must include this.
   */
  $: stringWithListArgRequired$Arguments<_$Context>
}

export interface stringWithListArgRequired$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `[Int!]!` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithListArgRequired |
   * | **Path** | `Query.stringWithListArgRequired(ints)` |
   * | **Nullability** | Required |
   */
  ints: $$Utilities.DocumentBuilderKit.Var.Maybe<Array<$Scalars.Int<_$Context>>>
}

export type stringWithListArgRequired$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  stringWithListArgRequired$SelectionSet<_$Context>
>

export type stringWithRequiredArg<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = stringWithRequiredArg$SelectionSet<_$Context>

export interface stringWithRequiredArg$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `stringWithRequiredArg` field. All arguments are required so you must include this.
   */
  $: stringWithRequiredArg$Arguments<_$Context>
}

export interface stringWithRequiredArg$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `String!` |
   * | **Parent** | {@link $NamedTypes.$Query}.stringWithRequiredArg |
   * | **Path** | `Query.stringWithRequiredArg(string)` |
   * | **Nullability** | Required |
   */
  string: $Scalars.String$NonNull<_$Context>
}

export type stringWithRequiredArg$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  stringWithRequiredArg$SelectionSet<_$Context>
>

export type unionFooBar<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = unionFooBar$SelectionSet<_$Context>

export interface unionFooBar$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.FooBarUnion<_$Context> {
}

export type unionFooBar$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  unionFooBar$SelectionSet<_$Context>
>

export type unionFooBarNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = unionFooBarNonNull$SelectionSet<_$Context>

export interface unionFooBarNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.FooBarUnion<_$Context> {
}

export type unionFooBarNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  unionFooBarNonNull$SelectionSet<_$Context>
>

export type unionFooBarWithArgs<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = unionFooBarWithArgs$SelectionSet<_$Context>

export interface unionFooBarWithArgs$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.FooBarUnion<_$Context> {
  /**
   * Arguments for `unionFooBarWithArgs` field. No arguments are required so you may omit this.
   */
  $?: unionFooBarWithArgs$Arguments<_$Context>
}

export interface unionFooBarWithArgs$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `ID` |
   * | **Parent** | {@link $NamedTypes.$Query}.unionFooBarWithArgs |
   * | **Path** | `Query.unionFooBarWithArgs(id)` |
   * | **Nullability** | Optional |
   */
  id?: $Scalars.ID<_$Context>
}

export type unionFooBarWithArgs$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  unionFooBarWithArgs$SelectionSet<_$Context>
>

export type unionObject<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = unionObject$SelectionSet<_$Context>

export interface unionObject$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.ObjectUnion<_$Context> {
}

export type unionObject$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  unionObject$SelectionSet<_$Context>
>

export type unionObjectNonNull<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = unionObjectNonNull$SelectionSet<_$Context>

export interface unionObjectNonNull$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.ObjectUnion<_$Context> {
}

export type unionObjectNonNull$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  unionObjectNonNull$SelectionSet<_$Context>
>
