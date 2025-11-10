import type * as $ from '#graffle/utilities-for-generated'
import * as $$Data from '../data.js'
import * as $$Scalar from '../scalar.js'
import * as $Types from './__.js'

export * as Schema from './__.js'

export interface Schema<$Scalars extends $.Schema.Scalars.Registry = $$Scalar.$Registry> extends $.Schema {
  name: $$Data.Name
  operationsAvailable: [$.GraphqlKit.Schema.OperationType.QUERY, $.GraphqlKit.Schema.OperationType.MUTATION]
  RootUnion:
    | $Types.Query
    | $Types.Mutation
  Root: {
    query: $Types.Query
    mutation: $Types.Mutation
    subscription: null
  }
  allTypes: {
    Query: $Types.Query
    Mutation: $Types.Mutation
    ABCEnum: $Types.ABCEnum
    Case: $Types.Case
    ChildAInterfaceHierarchyMember: $Types.ChildAInterfaceHierarchyMember
    ChildBInterfaceHierarchyMember: $Types.ChildBInterfaceHierarchyMember
    GrandparentInterfaceHierarchyMember: $Types.GrandparentInterfaceHierarchyMember
    ParentInterfaceHierarchyMember: $Types.ParentInterfaceHierarchyMember
    Bar: $Types.Bar
    DateObject1: $Types.DateObject1
    DateObject2: $Types.DateObject2
    ErrorOne: $Types.ErrorOne
    ErrorTwo: $Types.ErrorTwo
    Foo: $Types.Foo
    Object1: $Types.Object1
    Object1ImplementingInterface: $Types.Object1ImplementingInterface
    Object2ImplementingInterface: $Types.Object2ImplementingInterface
    ObjectChildA: $Types.ObjectChildA
    ObjectChildB: $Types.ObjectChildB
    ObjectGrandparent: $Types.ObjectGrandparent
    ObjectNested: $Types.ObjectNested
    ObjectNestedWithArgs: $Types.ObjectNestedWithArgs
    ObjectParent: $Types.ObjectParent
    ObjectUnion: $Types.ObjectUnion
    lowerCaseObject: $Types.lowerCaseObject
    lowerCaseObject2: $Types.lowerCaseObject2
    DateUnion: $Types.DateUnion
    FooBarUnion: $Types.FooBarUnion
    Result: $Types.Result
    lowerCaseUnion: $Types.lowerCaseUnion
    DateInterface1: $Types.DateInterface1
    Error: $Types.Error
    Interface: $Types.Interface
    InterfaceChildA: $Types.InterfaceChildA
    InterfaceChildB: $Types.InterfaceChildB
    InterfaceGrandparent: $Types.InterfaceGrandparent
    InterfaceParent: $Types.InterfaceParent
  }
  objects: {
    Bar: $Types.Bar
    DateObject1: $Types.DateObject1
    DateObject2: $Types.DateObject2
    ErrorOne: $Types.ErrorOne
    ErrorTwo: $Types.ErrorTwo
    Foo: $Types.Foo
    Object1: $Types.Object1
    Object1ImplementingInterface: $Types.Object1ImplementingInterface
    Object2ImplementingInterface: $Types.Object2ImplementingInterface
    ObjectChildA: $Types.ObjectChildA
    ObjectChildB: $Types.ObjectChildB
    ObjectGrandparent: $Types.ObjectGrandparent
    ObjectNested: $Types.ObjectNested
    ObjectNestedWithArgs: $Types.ObjectNestedWithArgs
    ObjectParent: $Types.ObjectParent
    ObjectUnion: $Types.ObjectUnion
    lowerCaseObject: $Types.lowerCaseObject
    lowerCaseObject2: $Types.lowerCaseObject2
  }
  unions: {
    DateUnion: $Types.DateUnion
    FooBarUnion: $Types.FooBarUnion
    Result: $Types.Result
    lowerCaseUnion: $Types.lowerCaseUnion
  }
  interfaces: {
    DateInterface1: $Types.DateInterface1
    Error: $Types.Error
    Interface: $Types.Interface
    InterfaceChildA: $Types.InterfaceChildA
    InterfaceChildB: $Types.InterfaceChildB
    InterfaceGrandparent: $Types.InterfaceGrandparent
    InterfaceParent: $Types.InterfaceParent
  }
  scalarNamesUnion:
    | 'Date'
    | 'bigint'
    | 'Boolean'
    | 'Float'
    | 'ID'
    | 'Int'
    | 'String'
  scalars: {
    Date: $Types.Date
    bigint: $Types.bigint
    Boolean: $Types.Boolean
    Float: $Types.Float
    ID: $Types.ID
    Int: $Types.Int
    String: $Types.String
  }
  scalarRegistry: $Scalars
  extensions: {
    SchemaErrors: {
      objectNames: 'ErrorOne' | 'ErrorTwo'
    }
  }
}
