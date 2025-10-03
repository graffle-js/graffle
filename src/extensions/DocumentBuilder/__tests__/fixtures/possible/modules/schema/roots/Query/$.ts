import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as Query from './fields.js'

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 58 |
 */
export interface Query extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'Query'
  fields: {
    __typename: $Fields.__typename
    InputObjectNested: $Fields.InputObjectNested
    InputObjectNestedNonNull: $Fields.InputObjectNestedNonNull
    abcEnum: $Fields.abcEnum
    argInputObjectCircular: $Fields.argInputObjectCircular
    bigintField: $Fields.bigintField
    bigintFieldNonNull: $Fields.bigintFieldNonNull
    date: $Fields.date
    dateArg: $Fields.dateArg
    dateArgInputObject: $Fields.dateArgInputObject
    dateArgList: $Fields.dateArgList
    dateArgNonNull: $Fields.dateArgNonNull
    dateArgNonNullList: $Fields.dateArgNonNullList
    dateArgNonNullListNonNull: $Fields.dateArgNonNullListNonNull
    dateInterface1: $Fields.dateInterface1
    dateList: $Fields.dateList
    dateListList: $Fields.dateListList
    dateListNonNull: $Fields.dateListNonNull
    dateNonNull: $Fields.dateNonNull
    dateObject1: $Fields.dateObject1
    dateUnion: $Fields.dateUnion
    error: $Fields.error
    id: $Fields.id
    idNonNull: $Fields.idNonNull
    interface: $Fields.interface
    interfaceHierarchyChildA: $Fields.interfaceHierarchyChildA
    interfaceHierarchyChildB: $Fields.interfaceHierarchyChildB
    interfaceHierarchyGrandparents: $Fields.interfaceHierarchyGrandparents
    interfaceHierarchyParents: $Fields.interfaceHierarchyParents
    interfaceNonNull: $Fields.interfaceNonNull
    interfaceWithArgs: $Fields.interfaceWithArgs
    listInt: $Fields.listInt
    listIntNonNull: $Fields.listIntNonNull
    listListInt: $Fields.listListInt
    listListIntNonNull: $Fields.listListIntNonNull
    lowerCaseUnion: $Fields.lowerCaseUnion
    object: $Fields.object
    objectList: $Fields.objectList
    objectListNonNull: $Fields.objectListNonNull
    objectNested: $Fields.objectNested
    objectNestedWithArgs: $Fields.objectNestedWithArgs
    objectNonNull: $Fields.objectNonNull
    objectWithArgs: $Fields.objectWithArgs
    result: $Fields.result
    resultNonNull: $Fields.resultNonNull
    string: $Fields.string
    stringWithArgEnum: $Fields.stringWithArgEnum
    stringWithArgInputObject: $Fields.stringWithArgInputObject
    stringWithArgInputObjectEnum: $Fields.stringWithArgInputObjectEnum
    stringWithArgInputObjectRequired: $Fields.stringWithArgInputObjectRequired
    stringWithArgs: $Fields.stringWithArgs
    stringWithListArg: $Fields.stringWithListArg
    stringWithListArgRequired: $Fields.stringWithListArgRequired
    stringWithRequiredArg: $Fields.stringWithRequiredArg
    unionFooBar: $Fields.unionFooBar
    unionFooBarNonNull: $Fields.unionFooBarNonNull
    unionFooBarWithArgs: $Fields.unionFooBarWithArgs
    unionObject: $Fields.unionObject
    unionObjectNonNull: $Fields.unionObjectNonNull
  }
}
