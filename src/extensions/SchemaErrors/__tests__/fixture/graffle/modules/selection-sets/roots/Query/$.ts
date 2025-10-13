import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as Query from './$$.js'

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} type.
 */
export interface Query<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.RootObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.InputObjectNested` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  InputObjectNested?:
    | $Fields.InputObjectNested.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.InputObjectNested<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.InputObjectNestedNonNull` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  InputObjectNestedNonNull?:
    | $Fields.InputObjectNestedNonNull<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.InputObjectNestedNonNull<_$Context>>
  /**
   * Query enum field documentation.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ABCEnum} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.abcEnum` |
   * | **Nullability** | Optional |
   */
  abcEnum?:
    | $Fields.abcEnum.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.abcEnum<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.argInputObjectCircular` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  argInputObjectCircular?:
    | $Fields.argInputObjectCircular.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.argInputObjectCircular<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$bigint} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.bigintField` |
   * | **Nullability** | Optional |
   */
  bigintField?:
    | $Fields.bigintField.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.bigintField<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$bigint}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.bigintFieldNonNull` |
   * | **Nullability** | Required |
   */
  bigintFieldNonNull?:
    | $Fields.bigintFieldNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.bigintFieldNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.date` |
   * | **Nullability** | Optional |
   */
  date?:
    | $Fields.date.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.date<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateArg` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  dateArg?:
    | $Fields.dateArg.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateArg<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateArgInputObject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  dateArgInputObject?:
    | $Fields.dateArgInputObject.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateArgInputObject<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateArgList` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  dateArgList?:
    | $Fields.dateArgList.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateArgList<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateArgNonNull` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  dateArgNonNull?:
    | $Fields.dateArgNonNull<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateArgNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateArgNonNullList` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  dateArgNonNullList?:
    | $Fields.dateArgNonNullList<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateArgNonNullList<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateArgNonNullListNonNull` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  dateArgNonNullListNonNull?:
    | $Fields.dateArgNonNullListNonNull<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateArgNonNullListNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$DateInterface1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateInterface1` |
   * | **Nullability** | Optional |
   */
  dateInterface1?:
    | $Fields.dateInterface1.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateInterface1<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateList` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  dateList?:
    | $Fields.dateList.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateList<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateListList` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  dateListList?:
    | $Fields.dateListList.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateListList<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateListNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */
  dateListNonNull?:
    | $Fields.dateListNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateListNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateNonNull` |
   * | **Nullability** | Required |
   */
  dateNonNull?:
    | $Fields.dateNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$DateObject1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateObject1` |
   * | **Nullability** | Optional |
   */
  dateObject1?:
    | $Fields.dateObject1.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateObject1<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$DateUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.dateUnion` |
   * | **Nullability** | Optional |
   */
  dateUnion?:
    | $Fields.dateUnion.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.dateUnion<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.error` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  error?:
    | $Fields.error.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.error<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | $Fields.id.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.idNonNull` |
   * | **Nullability** | Required |
   */
  idNonNull?:
    | $Fields.idNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.idNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Interface} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.interface` |
   * | **Nullability** | Optional |
   */
  interface?:
    | $Fields.interface.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.interface<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$InterfaceChildA}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.interfaceHierarchyChildA` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */
  interfaceHierarchyChildA?:
    | $Fields.interfaceHierarchyChildA.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.interfaceHierarchyChildA<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$InterfaceChildB}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.interfaceHierarchyChildB` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */
  interfaceHierarchyChildB?:
    | $Fields.interfaceHierarchyChildB.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.interfaceHierarchyChildB<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$InterfaceGrandparent}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.interfaceHierarchyGrandparents` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */
  interfaceHierarchyGrandparents?:
    | $Fields.interfaceHierarchyGrandparents.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.interfaceHierarchyGrandparents<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$InterfaceParent}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.interfaceHierarchyParents` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */
  interfaceHierarchyParents?:
    | $Fields.interfaceHierarchyParents.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.interfaceHierarchyParents<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Interface}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.interfaceNonNull` |
   * | **Nullability** | Required |
   */
  interfaceNonNull?:
    | $Fields.interfaceNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.interfaceNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Interface} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.interfaceWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  interfaceWithArgs?:
    | $Fields.interfaceWithArgs<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.interfaceWithArgs<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.listInt` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  listInt?:
    | $Fields.listInt.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.listInt<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.listIntNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */
  listIntNonNull?:
    | $Fields.listIntNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.listIntNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.listListInt` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  listListInt?:
    | $Fields.listListInt.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.listListInt<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.listListIntNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */
  listListIntNonNull?:
    | $Fields.listListIntNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.listListIntNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$lowerCaseUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.lowerCaseUnion` |
   * | **Nullability** | Optional |
   */
  lowerCaseUnion?:
    | $Fields.lowerCaseUnion.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.lowerCaseUnion<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Object1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.object` |
   * | **Nullability** | Optional |
   */
  object?:
    | $Fields.object.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.object<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Object1}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.objectList` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  objectList?:
    | $Fields.objectList.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.objectList<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Object1}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.objectListNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */
  objectListNonNull?:
    | $Fields.objectListNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.objectListNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ObjectNested} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.objectNested` |
   * | **Nullability** | Optional |
   */
  objectNested?:
    | $Fields.objectNested.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.objectNested<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ObjectNestedWithArgs} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.objectNestedWithArgs` |
   * | **Nullability** | Optional |
   */
  objectNestedWithArgs?:
    | $Fields.objectNestedWithArgs.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.objectNestedWithArgs<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Object1}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.objectNonNull` |
   * | **Nullability** | Required |
   */
  objectNonNull?:
    | $Fields.objectNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.objectNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Object1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.objectWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 5 |
   */
  objectWithArgs?:
    | $Fields.objectWithArgs.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.objectWithArgs<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Result} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.result` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  result?:
    | $Fields.result<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.result<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Result}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.resultNonNull` |
   * | **Nullability** | Required |
   * | **Arguments** | 1 |
   */
  resultNonNull?:
    | $Fields.resultNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.resultNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.string` |
   * | **Nullability** | Optional |
   */
  string?:
    | $Fields.string.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.string<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.stringWithArgEnum` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  stringWithArgEnum?:
    | $Fields.stringWithArgEnum.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.stringWithArgEnum<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.stringWithArgInputObject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  stringWithArgInputObject?:
    | $Fields.stringWithArgInputObject.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.stringWithArgInputObject<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.stringWithArgInputObjectEnum` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  stringWithArgInputObjectEnum?:
    | $Fields.stringWithArgInputObjectEnum<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.stringWithArgInputObjectEnum<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.stringWithArgInputObjectRequired` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  stringWithArgInputObjectRequired?:
    | $Fields.stringWithArgInputObjectRequired<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.stringWithArgInputObjectRequired<_$Context>>
  /**
   * The given arguments are reflected back as a JSON string.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.stringWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 5 |
   */
  stringWithArgs?:
    | $Fields.stringWithArgs.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.stringWithArgs<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.stringWithListArg` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  stringWithListArg?:
    | $Fields.stringWithListArg.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.stringWithListArg<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.stringWithListArgRequired` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  stringWithListArgRequired?:
    | $Fields.stringWithListArgRequired<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.stringWithListArgRequired<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.stringWithRequiredArg` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  stringWithRequiredArg?:
    | $Fields.stringWithRequiredArg<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.stringWithRequiredArg<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$FooBarUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.unionFooBar` |
   * | **Nullability** | Optional |
   */
  unionFooBar?:
    | $Fields.unionFooBar.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.unionFooBar<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$FooBarUnion}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.unionFooBarNonNull` |
   * | **Nullability** | Required |
   */
  unionFooBarNonNull?:
    | $Fields.unionFooBarNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.unionFooBarNonNull<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$FooBarUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.unionFooBarWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  unionFooBarWithArgs?:
    | $Fields.unionFooBarWithArgs.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.unionFooBarWithArgs<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ObjectUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.unionObject` |
   * | **Nullability** | Optional |
   */
  unionObject?:
    | $Fields.unionObject.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.unionObject<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ObjectUnion}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.unionObjectNonNull` |
   * | **Nullability** | Required |
   */
  unionObjectNonNull?:
    | $Fields.unionObjectNonNull.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.unionObjectNonNull<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments}
   */
  ___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[]
  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}
