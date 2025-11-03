import { createStaticRootType } from '#graffle/extensions/document-builder'
import { GraphqlKit } from '#graffle/utilities-for-generated'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Scalar from './scalar.js'
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js'
import type * as SelectionSets from './selection-sets/$.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from './schema/$.js'

/**
 * Context for static document type inference.
 *
 * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
 */
interface StaticDocumentContext {
  typeHookRequestResultDataTypes: never
  scalars: $$Scalar.$Registry
}

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL  document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 * id: true,
 * name: true,
 * email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 * $: { id: $ },
 * name: true,
 * posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */

export interface QueryBuilder {
  $batch: <const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>>(
    selection: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<$SelectionSet, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<$SelectionSet, ArgumentsMap.ArgumentsMap>
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.InputObjectNested` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.InputObjectNested()
   * ```
   */
  InputObjectNested: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['InputObjectNested'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ InputObjectNested: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { InputObjectNested: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.InputObjectNestedNonNull` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.InputObjectNestedNonNull()
   * ```
   */
  InputObjectNestedNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['InputObjectNestedNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ InputObjectNestedNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { InputObjectNestedNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * Query enum field documentation.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ABCEnum} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.abcEnum` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.abcEnum()
   * ```
   */
  abcEnum: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['abcEnum'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ abcEnum: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { abcEnum: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.argInputObjectCircular` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.argInputObjectCircular()
   * ```
   */
  argInputObjectCircular: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['argInputObjectCircular'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ argInputObjectCircular: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { argInputObjectCircular: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.bigint} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.bigintField` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.bigintField()
   * ```
   */
  bigintField: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['bigintField'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ bigintField: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { bigintField: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.bigint}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.bigintFieldNonNull` |
   * | **Nullability** | Required |
   *
   * @example
   * ```ts
   * const doc = query.bigintFieldNonNull()
   * ```
   */
  bigintFieldNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['bigintFieldNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ bigintFieldNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { bigintFieldNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.date` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.date()
   * ```
   */
  date: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['date'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ date: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { date: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArg` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.dateArg()
   * ```
   */
  dateArg: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['dateArg'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateArg: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateArg: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArgInputObject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.dateArgInputObject()
   * ```
   */
  dateArgInputObject: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['dateArgInputObject'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateArgInputObject: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateArgInputObject: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArgList` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.dateArgList()
   * ```
   */
  dateArgList: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['dateArgList'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateArgList: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateArgList: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArgNonNull` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.dateArgNonNull()
   * ```
   */
  dateArgNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['dateArgNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateArgNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateArgNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArgNonNullList` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.dateArgNonNullList()
   * ```
   */
  dateArgNonNullList: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['dateArgNonNullList'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateArgNonNullList: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateArgNonNullList: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArgNonNullListNonNull` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.dateArgNonNullListNonNull()
   * ```
   */
  dateArgNonNullListNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['dateArgNonNullListNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<
        { dateArgNonNullListNonNull: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateArgNonNullListNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DateInterface1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateInterface1` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.dateInterface1({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  dateInterface1: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['dateInterface1'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateInterface1: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateInterface1: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateList` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.dateList()
   * ```
   */
  dateList: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['dateList'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateList: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateList: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateListList` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.dateListList()
   * ```
   */
  dateListList: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['dateListList'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateListList: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateListList: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateListNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.dateListNonNull()
   * ```
   */
  dateListNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['dateListNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateListNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateListNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateNonNull` |
   * | **Nullability** | Required |
   *
   * @example
   * ```ts
   * const doc = query.dateNonNull()
   * ```
   */
  dateNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['dateNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DateObject1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateObject1` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.dateObject1({
   * date1: true
   * })
   * ```
   */
  dateObject1: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['dateObject1'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateObject1: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateObject1: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DateUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateUnion` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.dateUnion({
   * __typename: true,
   * ___on_SomeType: {
   * // ... fields for this type
   * }
   * })
   * ```
   */
  dateUnion: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['dateUnion'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ dateUnion: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateUnion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.error` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.error()
   * ```
   */
  error: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['error'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ error: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { error: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.id` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.id()
   * ```
   */
  id: <const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ id: Exclude<$SelectionSet, undefined> }, ArgumentsMap.ArgumentsMap>
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.idNonNull` |
   * | **Nullability** | Required |
   *
   * @example
   * ```ts
   * const doc = query.idNonNull()
   * ```
   */
  idNonNull: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['idNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ idNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { idNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Interface} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interface` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.interface({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  interface: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['interface'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ interface: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { interface: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InterfaceChildA}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceHierarchyChildA` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.interfaceHierarchyChildA({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  interfaceHierarchyChildA: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['interfaceHierarchyChildA'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ interfaceHierarchyChildA: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { interfaceHierarchyChildA: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InterfaceChildB}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceHierarchyChildB` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.interfaceHierarchyChildB({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  interfaceHierarchyChildB: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['interfaceHierarchyChildB'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ interfaceHierarchyChildB: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { interfaceHierarchyChildB: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InterfaceGrandparent}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceHierarchyGrandparents` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.interfaceHierarchyGrandparents({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  interfaceHierarchyGrandparents: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['interfaceHierarchyGrandparents'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<
        { interfaceHierarchyGrandparents: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { interfaceHierarchyGrandparents: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InterfaceParent}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceHierarchyParents` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.interfaceHierarchyParents({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  interfaceHierarchyParents: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['interfaceHierarchyParents'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<
        { interfaceHierarchyParents: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { interfaceHierarchyParents: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Interface}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceNonNull` |
   * | **Nullability** | Required |
   *
   * @example
   * ```ts
   * const doc = query.interfaceNonNull({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  interfaceNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['interfaceNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ interfaceNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { interfaceNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Interface} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.interfaceWithArgs({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  interfaceWithArgs: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['interfaceWithArgs'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ interfaceWithArgs: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { interfaceWithArgs: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Int}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.listInt` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.listInt()
   * ```
   */
  listInt: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['listInt'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ listInt: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { listInt: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Int}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.listIntNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.listIntNonNull()
   * ```
   */
  listIntNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['listIntNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ listIntNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { listIntNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Int}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.listListInt` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.listListInt()
   * ```
   */
  listListInt: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['listListInt'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ listListInt: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { listListInt: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Int}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.listListIntNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.listListIntNonNull()
   * ```
   */
  listListIntNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['listListIntNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ listListIntNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { listListIntNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.lowerCaseUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.lowerCaseUnion` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.lowerCaseUnion({
   * __typename: true,
   * ___on_SomeType: {
   * // ... fields for this type
   * }
   * })
   * ```
   */
  lowerCaseUnion: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['lowerCaseUnion'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ lowerCaseUnion: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { lowerCaseUnion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.object` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.object({
   * ABCEnum: true,
   * boolean: true,
   * float: true,
   * // ...
   * })
   * ```
   */
  object: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['object'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ object: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { object: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object1}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectList` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.objectList({
   * ABCEnum: true,
   * boolean: true,
   * float: true,
   * // ...
   * })
   * ```
   */
  objectList: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['objectList'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ objectList: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { objectList: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object1}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectListNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.objectListNonNull({
   * ABCEnum: true,
   * boolean: true,
   * float: true,
   * // ...
   * })
   * ```
   */
  objectListNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['objectListNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ objectListNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { objectListNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectNested} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectNested` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.objectNested({
   * id: true,
   * object: true
   * })
   * ```
   */
  objectNested: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['objectNested'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ objectNested: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { objectNested: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectNestedWithArgs} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectNestedWithArgs` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.objectNestedWithArgs({
   * id: true,
   * object: true
   * })
   * ```
   */
  objectNestedWithArgs: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['objectNestedWithArgs'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ objectNestedWithArgs: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { objectNestedWithArgs: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object1}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectNonNull` |
   * | **Nullability** | Required |
   *
   * @example
   * ```ts
   * const doc = query.objectNonNull({
   * ABCEnum: true,
   * boolean: true,
   * float: true,
   * // ...
   * })
   * ```
   */
  objectNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['objectNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ objectNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { objectNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 5 |
   *
   * @example
   * ```ts
   * const doc = query.objectWithArgs({
   * // $: { ...variables }
   * ABCEnum: true,
   * boolean: true,
   * float: true,
   * // ...
   * })
   * ```
   */
  objectWithArgs: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['objectWithArgs'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ objectWithArgs: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { objectWithArgs: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Result} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.result` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.result({
   * __typename: true,
   * ___on_SomeType: {
   * // ... fields for this type
   * }
   * })
   * ```
   */
  result: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['result'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ result: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { result: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Result}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.resultNonNull` |
   * | **Nullability** | Required |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.resultNonNull({
   * __typename: true,
   * ___on_SomeType: {
   * // ... fields for this type
   * }
   * })
   * ```
   */
  resultNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['resultNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ resultNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { resultNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.string` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.string()
   * ```
   */
  string: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['string'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ string: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { string: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithArgEnum` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.stringWithArgEnum()
   * ```
   */
  stringWithArgEnum: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['stringWithArgEnum'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ stringWithArgEnum: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithArgEnum: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithArgInputObject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.stringWithArgInputObject()
   * ```
   */
  stringWithArgInputObject: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['stringWithArgInputObject'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ stringWithArgInputObject: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithArgInputObject: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithArgInputObjectEnum` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.stringWithArgInputObjectEnum()
   * ```
   */
  stringWithArgInputObjectEnum: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['stringWithArgInputObjectEnum'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<
        { stringWithArgInputObjectEnum: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithArgInputObjectEnum: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithArgInputObjectRequired` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.stringWithArgInputObjectRequired()
   * ```
   */
  stringWithArgInputObjectRequired: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['stringWithArgInputObjectRequired'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<
        { stringWithArgInputObjectRequired: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithArgInputObjectRequired: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * The given arguments are reflected back as a JSON string.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 5 |
   *
   * @example
   * ```ts
   * const doc = query.stringWithArgs()
   * ```
   */
  stringWithArgs: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['stringWithArgs'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ stringWithArgs: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithArgs: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithListArg` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.stringWithListArg()
   * ```
   */
  stringWithListArg: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['stringWithListArg'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ stringWithListArg: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithListArg: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithListArgRequired` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.stringWithListArgRequired()
   * ```
   */
  stringWithListArgRequired: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['stringWithListArgRequired'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<
        { stringWithListArgRequired: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithListArgRequired: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithRequiredArg` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.stringWithRequiredArg()
   * ```
   */
  stringWithRequiredArg: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['stringWithRequiredArg'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ stringWithRequiredArg: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithRequiredArg: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.FooBarUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.unionFooBar` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.unionFooBar({
   * __typename: true,
   * ___on_SomeType: {
   * // ... fields for this type
   * }
   * })
   * ```
   */
  unionFooBar: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['unionFooBar'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ unionFooBar: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { unionFooBar: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.FooBarUnion}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.unionFooBarNonNull` |
   * | **Nullability** | Required |
   *
   * @example
   * ```ts
   * const doc = query.unionFooBarNonNull({
   * __typename: true,
   * ___on_SomeType: {
   * // ... fields for this type
   * }
   * })
   * ```
   */
  unionFooBarNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['unionFooBarNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ unionFooBarNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { unionFooBarNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.FooBarUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.unionFooBarWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.unionFooBarWithArgs({
   * __typename: true,
   * ___on_SomeType: {
   * // ... fields for this type
   * }
   * })
   * ```
   */
  unionFooBarWithArgs: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['unionFooBarWithArgs'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ unionFooBarWithArgs: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { unionFooBarWithArgs: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.unionObject` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.unionObject({
   * fooBarUnion: true
   * })
   * ```
   */
  unionObject: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['unionObject'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ unionObject: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { unionObject: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectUnion}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.unionObjectNonNull` |
   * | **Nullability** | Required |
   *
   * @example
   * ```ts
   * const doc = query.unionObjectNonNull({
   * fooBarUnion: true
   * })
   * ```
   */
  unionObjectNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['unionObjectNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ unionObjectNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { unionObjectNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >
}

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL  document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 * id: true,
 * name: true,
 * email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 * $: { id: $ },
 * name: true,
 * posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const query: QueryBuilder = createStaticRootType(GraphqlKit.Document.Ast.OperationType.QUERY, { sddm }) as any

/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document  with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 * $: { input: $ },
 * id: true,
 * name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */

export interface MutationBuilder {
  $batch: <const $SelectionSet extends SelectionSets.Mutation<$$Utilities.Docpar.Object.Select.StaticBuilderContext>>(
    selection: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationMutation<$SelectionSet, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromMutation<$SelectionSet, ArgumentsMap.ArgumentsMap>
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.id` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = mutation.id()
   * ```
   */
  id: <const $SelectionSet extends SelectionSets.Mutation<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromMutation<
        { id: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.idNonNull` |
   * | **Nullability** | Required |
   *
   * @example
   * ```ts
   * const doc = mutation.idNonNull()
   * ```
   */
  idNonNull: <
    const $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['idNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationMutation<{ idNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromMutation<
        { idNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >
}

/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document  with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 * $: { input: $ },
 * id: true,
 * name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const mutation: MutationBuilder = createStaticRootType(GraphqlKit.Document.Ast.OperationType.MUTATION, {
  sddm,
}) as any
