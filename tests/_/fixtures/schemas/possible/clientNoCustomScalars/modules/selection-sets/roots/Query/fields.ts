import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type InputObjectNested<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | InputObjectNested.$SelectionSet<_$Context>

export namespace InputObjectNested {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `InputObjectNested` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    input?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.InputObjectNested<_$Context> | null | undefined>
  }

  /**
   * This is the "expanded" version of the `InputObjectNested` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type InputObjectNestedNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = InputObjectNestedNonNull.$SelectionSet<_$Context>

export namespace InputObjectNestedNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `InputObjectNestedNonNull` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    input: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.InputObjectNestedNonNull<_$Context>>
  }

  /**
   * This is the "expanded" version of the `InputObjectNestedNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type abcEnum<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | abcEnum.$SelectionSet<_$Context>

export namespace abcEnum {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `abcEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type argInputObjectCircular<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | argInputObjectCircular.$SelectionSet<_$Context>

export namespace argInputObjectCircular {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `argInputObjectCircular` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    input?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.InputObjectCircular<_$Context> | null | undefined>
  }

  /**
   * This is the "expanded" version of the `argInputObjectCircular` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type bigintField<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | bigintField.$SelectionSet<_$Context>

export namespace bigintField {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `bigintField` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type bigintFieldNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | bigintFieldNonNull.$SelectionSet<_$Context>

export namespace bigintFieldNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `bigintFieldNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type date<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | date.$SelectionSet<_$Context>

export namespace date {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `date` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type dateArg<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | dateArg.$SelectionSet<_$Context>

export namespace dateArg {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `dateArg` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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

  /**
   * This is the "expanded" version of the `dateArg` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type dateArgInputObject<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | dateArgInputObject.$SelectionSet<_$Context>

export namespace dateArgInputObject {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `dateArgInputObject` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    input?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.InputObject<_$Context> | null | undefined>
  }

  /**
   * This is the "expanded" version of the `dateArgInputObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type dateArgList<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | dateArgList.$SelectionSet<_$Context>

export namespace dateArgList {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `dateArgList` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    date?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<Array<$Scalars.Date<_$Context>> | null | undefined>
  }

  /**
   * This is the "expanded" version of the `dateArgList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type dateArgNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = dateArgNonNull.$SelectionSet<_$Context>

export namespace dateArgNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `dateArgNonNull` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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

  /**
   * This is the "expanded" version of the `dateArgNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type dateArgNonNullList<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = dateArgNonNullList.$SelectionSet<_$Context>

export namespace dateArgNonNullList {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `dateArgNonNullList` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    date: $$Utilities.Docpar.Object.Var.MaybeSchemaful<Array<$Scalars.Date<_$Context>>>
  }

  /**
   * This is the "expanded" version of the `dateArgNonNullList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type dateArgNonNullListNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = dateArgNonNullListNonNull.$SelectionSet<_$Context>

export namespace dateArgNonNullListNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `dateArgNonNullListNonNull` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    date: $$Utilities.Docpar.Object.Var.MaybeSchemaful<Array<$Scalars.Date<_$Context>>>
  }

  /**
   * This is the "expanded" version of the `dateArgNonNullListNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type dateInterface1<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = dateInterface1.$SelectionSet<_$Context>

export namespace dateInterface1 {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.DateInterface1<_$Context> {
  }

  /**
   * This is the "expanded" version of the `dateInterface1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type dateList<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | dateList.$SelectionSet<_$Context>

export namespace dateList {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `dateList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type dateListList<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | dateListList.$SelectionSet<_$Context>

export namespace dateListList {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `dateListList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type dateListNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | dateListNonNull.$SelectionSet<_$Context>

export namespace dateListNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `dateListNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type dateNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | dateNonNull.$SelectionSet<_$Context>

export namespace dateNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `dateNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type dateObject1<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = dateObject1.$SelectionSet<_$Context>

export namespace dateObject1 {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.DateObject1<_$Context> {
  }

  /**
   * This is the "expanded" version of the `dateObject1` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type dateUnion<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  dateUnion.$SelectionSet<_$Context>

export namespace dateUnion {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.DateUnion<_$Context> {
  }

  /**
   * This is the "expanded" version of the `dateUnion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type error<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | error.$SelectionSet<_$Context>

export namespace error {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `error` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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

  /**
   * This is the "expanded" version of the `error` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type id<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | id.$SelectionSet<_$Context>

export namespace id {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type idNonNull<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | idNonNull.$SelectionSet<_$Context>

export namespace idNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `idNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

type $interface<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $interface.$SelectionSet<_$Context>

namespace $interface {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Interface<_$Context> {
  }

  /**
   * This is the "expanded" version of the `interface` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type { $interface as interface }

export type interfaceHierarchyChildA<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceHierarchyChildA.$SelectionSet<_$Context>

export namespace interfaceHierarchyChildA {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.InterfaceChildA<_$Context> {
    /**
     * Arguments for `interfaceHierarchyChildA` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    $type?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.ChildAInterfaceHierarchyMember | null | undefined>
  }

  /**
   * This is the "expanded" version of the `interfaceHierarchyChildA` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type interfaceHierarchyChildB<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceHierarchyChildB.$SelectionSet<_$Context>

export namespace interfaceHierarchyChildB {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.InterfaceChildB<_$Context> {
    /**
     * Arguments for `interfaceHierarchyChildB` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    $type?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.ChildBInterfaceHierarchyMember | null | undefined>
  }

  /**
   * This is the "expanded" version of the `interfaceHierarchyChildB` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type interfaceHierarchyGrandparents<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceHierarchyGrandparents.$SelectionSet<_$Context>

export namespace interfaceHierarchyGrandparents {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.InterfaceGrandparent<_$Context> {
    /**
     * Arguments for `interfaceHierarchyGrandparents` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    $type?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.GrandparentInterfaceHierarchyMember | null | undefined>
  }

  /**
   * This is the "expanded" version of the `interfaceHierarchyGrandparents` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type interfaceHierarchyParents<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceHierarchyParents.$SelectionSet<_$Context>

export namespace interfaceHierarchyParents {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.InterfaceParent<_$Context> {
    /**
     * Arguments for `interfaceHierarchyParents` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    $type?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.ParentInterfaceHierarchyMember | null | undefined>
  }

  /**
   * This is the "expanded" version of the `interfaceHierarchyParents` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type interfaceNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceNonNull.$SelectionSet<_$Context>

export namespace interfaceNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Interface<_$Context> {
  }

  /**
   * This is the "expanded" version of the `interfaceNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type interfaceWithArgs<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = interfaceWithArgs.$SelectionSet<_$Context>

export namespace interfaceWithArgs {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Interface<_$Context> {
    /**
     * Arguments for `interfaceWithArgs` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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

  /**
   * This is the "expanded" version of the `interfaceWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type listInt<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | listInt.$SelectionSet<_$Context>

export namespace listInt {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `listInt` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type listIntNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | listIntNonNull.$SelectionSet<_$Context>

export namespace listIntNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `listIntNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type listListInt<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | listListInt.$SelectionSet<_$Context>

export namespace listListInt {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `listListInt` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type listListIntNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | listListIntNonNull.$SelectionSet<_$Context>

export namespace listListIntNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `listListIntNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type lowerCaseUnion<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = lowerCaseUnion.$SelectionSet<_$Context>

export namespace lowerCaseUnion {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.lowerCaseUnion<_$Context> {
  }

  /**
   * This is the "expanded" version of the `lowerCaseUnion` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

type $object<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $object.$SelectionSet<_$Context>

namespace $object {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Object1<_$Context> {
  }

  /**
   * This is the "expanded" version of the `object` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type { $object as object }

export type objectList<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  objectList.$SelectionSet<_$Context>

export namespace objectList {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Object1<_$Context> {
  }

  /**
   * This is the "expanded" version of the `objectList` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type objectListNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = objectListNonNull.$SelectionSet<_$Context>

export namespace objectListNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Object1<_$Context> {
  }

  /**
   * This is the "expanded" version of the `objectListNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type objectNested<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = objectNested.$SelectionSet<_$Context>

export namespace objectNested {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.ObjectNested<_$Context> {
  }

  /**
   * This is the "expanded" version of the `objectNested` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type objectNestedWithArgs<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = objectNestedWithArgs.$SelectionSet<_$Context>

export namespace objectNestedWithArgs {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.ObjectNestedWithArgs<_$Context> {
  }

  /**
   * This is the "expanded" version of the `objectNestedWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type objectNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = objectNonNull.$SelectionSet<_$Context>

export namespace objectNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Object1<_$Context> {
  }

  /**
   * This is the "expanded" version of the `objectNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type objectWithArgs<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = objectWithArgs.$SelectionSet<_$Context>

export namespace objectWithArgs {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Object1<_$Context> {
    /**
     * Arguments for `objectWithArgs` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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

  /**
   * This is the "expanded" version of the `objectWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type result<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  result.$SelectionSet<_$Context>

export namespace result {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Result<_$Context> {
    /**
     * Arguments for `result` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    $case: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.Case>
  }

  /**
   * This is the "expanded" version of the `result` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type resultNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = resultNonNull.$SelectionSet<_$Context>

export namespace resultNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Result<_$Context> {
    /**
     * Arguments for `resultNonNull` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    $case?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.Case | null | undefined>
  }

  /**
   * This is the "expanded" version of the `resultNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

type $string<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | $string.$SelectionSet<_$Context>

namespace $string {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `string` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type { $string as string }

export type stringWithArgEnum<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | stringWithArgEnum.$SelectionSet<_$Context>

export namespace stringWithArgEnum {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgEnum` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    $ABCEnum?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.ABCEnum | null | undefined>
  }

  /**
   * This is the "expanded" version of the `stringWithArgEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type stringWithArgInputObject<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | stringWithArgInputObject.$SelectionSet<_$Context>

export namespace stringWithArgInputObject {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgInputObject` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    input?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.InputObject<_$Context> | null | undefined>
  }

  /**
   * This is the "expanded" version of the `stringWithArgInputObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type stringWithArgInputObjectEnum<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = stringWithArgInputObjectEnum.$SelectionSet<_$Context>

export namespace stringWithArgInputObjectEnum {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgInputObjectEnum` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    input: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.InputObjectEnum<_$Context>>
  }

  /**
   * This is the "expanded" version of the `stringWithArgInputObjectEnum` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type stringWithArgInputObjectRequired<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = stringWithArgInputObjectRequired.$SelectionSet<_$Context>

export namespace stringWithArgInputObjectRequired {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgInputObjectRequired` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    input: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.InputObject<_$Context>>
  }

  /**
   * This is the "expanded" version of the `stringWithArgInputObjectRequired` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type stringWithArgs<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | stringWithArgs.$SelectionSet<_$Context>

export namespace stringWithArgs {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `stringWithArgs` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
     * @deprecated Example of argument deprecation reason here.
     *
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

  /**
   * This is the "expanded" version of the `stringWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type stringWithListArg<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | stringWithListArg.$SelectionSet<_$Context>

export namespace stringWithListArg {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `stringWithListArg` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    ints?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
  }

  /**
   * This is the "expanded" version of the `stringWithListArg` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

export type stringWithListArgRequired<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = stringWithListArgRequired.$SelectionSet<_$Context>

export namespace stringWithListArgRequired {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `stringWithListArgRequired` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    ints: $$Utilities.Docpar.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>>>
  }

  /**
   * This is the "expanded" version of the `stringWithListArgRequired` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type stringWithRequiredArg<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = stringWithRequiredArg.$SelectionSet<_$Context>

export namespace stringWithRequiredArg {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `stringWithRequiredArg` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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

  /**
   * This is the "expanded" version of the `stringWithRequiredArg` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type unionFooBar<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = unionFooBar.$SelectionSet<_$Context>

export namespace unionFooBar {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.FooBarUnion<_$Context> {
  }

  /**
   * This is the "expanded" version of the `unionFooBar` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type unionFooBarNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = unionFooBarNonNull.$SelectionSet<_$Context>

export namespace unionFooBarNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.FooBarUnion<_$Context> {
  }

  /**
   * This is the "expanded" version of the `unionFooBarNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type unionFooBarWithArgs<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = unionFooBarWithArgs.$SelectionSet<_$Context>

export namespace unionFooBarWithArgs {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.FooBarUnion<_$Context> {
    /**
     * Arguments for `unionFooBarWithArgs` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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

  /**
   * This is the "expanded" version of the `unionFooBarWithArgs` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type unionObject<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = unionObject.$SelectionSet<_$Context>

export namespace unionObject {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.ObjectUnion<_$Context> {
  }

  /**
   * This is the "expanded" version of the `unionObject` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type unionObjectNonNull<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = unionObjectNonNull.$SelectionSet<_$Context>

export namespace unionObjectNonNull {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.ObjectUnion<_$Context> {
  }

  /**
   * This is the "expanded" version of the `unionObjectNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}
