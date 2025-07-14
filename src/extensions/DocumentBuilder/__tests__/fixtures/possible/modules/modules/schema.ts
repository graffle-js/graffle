import type { Schema as $ } from 'graffle/utilities-for-generated'
import type * as $$Utilities from 'graffle/utilities-for-generated'
import * as $$Data from './data.js'
import * as $$Scalar from './scalar.js'

export namespace Schema {
  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                                Root
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                               Query
  // --------------------------------------------------------------------------------------------------
  //

  export interface Query {
    kind: 'Object'
    name: 'Query'
    fields: {
      __typename: Query.__typename
      InputObjectNested: Query.InputObjectNested
      InputObjectNestedNonNull: Query.InputObjectNestedNonNull
      abcEnum: Query.abcEnum
      argInputObjectCircular: Query.argInputObjectCircular
      bigintField: Query.bigintField
      bigintFieldNonNull: Query.bigintFieldNonNull
      date: Query.date
      dateArg: Query.dateArg
      dateArgInputObject: Query.dateArgInputObject
      dateArgList: Query.dateArgList
      dateArgNonNull: Query.dateArgNonNull
      dateArgNonNullList: Query.dateArgNonNullList
      dateArgNonNullListNonNull: Query.dateArgNonNullListNonNull
      dateInterface1: Query.dateInterface1
      dateList: Query.dateList
      dateListList: Query.dateListList
      dateListNonNull: Query.dateListNonNull
      dateNonNull: Query.dateNonNull
      dateObject1: Query.dateObject1
      dateUnion: Query.dateUnion
      error: Query.error
      id: Query.id
      idNonNull: Query.idNonNull
      interface: Query.$interface
      interfaceHierarchyChildA: Query.interfaceHierarchyChildA
      interfaceHierarchyChildB: Query.interfaceHierarchyChildB
      interfaceHierarchyGrandparents: Query.interfaceHierarchyGrandparents
      interfaceHierarchyParents: Query.interfaceHierarchyParents
      interfaceNonNull: Query.interfaceNonNull
      interfaceWithArgs: Query.interfaceWithArgs
      listInt: Query.listInt
      listIntNonNull: Query.listIntNonNull
      listListInt: Query.listListInt
      listListIntNonNull: Query.listListIntNonNull
      lowerCaseUnion: Query.lowerCaseUnion
      object: Query.$object
      objectList: Query.objectList
      objectListNonNull: Query.objectListNonNull
      objectNested: Query.objectNested
      objectNonNull: Query.objectNonNull
      objectWithArgs: Query.objectWithArgs
      result: Query.result
      resultNonNull: Query.resultNonNull
      string: Query.$string
      stringWithArgEnum: Query.stringWithArgEnum
      stringWithArgInputObject: Query.stringWithArgInputObject
      stringWithArgInputObjectEnum: Query.stringWithArgInputObjectEnum
      stringWithArgInputObjectRequired: Query.stringWithArgInputObjectRequired
      stringWithArgs: Query.stringWithArgs
      stringWithListArg: Query.stringWithListArg
      stringWithListArgRequired: Query.stringWithListArgRequired
      stringWithRequiredArg: Query.stringWithRequiredArg
      unionFooBar: Query.unionFooBar
      unionFooBarNonNull: Query.unionFooBarNonNull
      unionFooBarWithArgs: Query.unionFooBarWithArgs
      unionObject: Query.unionObject
      unionObjectNonNull: Query.unionObjectNonNull
    }
  }

  export namespace Query {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Query'
      }
    }

    export interface InputObjectNested {
      kind: 'OutputField'
      name: 'InputObjectNested'
      arguments: {
        input: {
          kind: 'InputField'
          name: 'input'
          inlineType: [0]
          namedType: $$NamedTypes.$$InputObjectNested
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface InputObjectNestedNonNull {
      kind: 'OutputField'
      name: 'InputObjectNestedNonNull'
      arguments: {
        input: {
          kind: 'InputField'
          name: 'input'
          inlineType: [1]
          namedType: $$NamedTypes.$$InputObjectNestedNonNull
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    /**
     * Query enum field documentation.
     */
    export interface abcEnum {
      kind: 'OutputField'
      name: 'abcEnum'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ABCEnum
    }

    export interface argInputObjectCircular {
      kind: 'OutputField'
      name: 'argInputObjectCircular'
      arguments: {
        input: {
          kind: 'InputField'
          name: 'input'
          inlineType: [0]
          namedType: $$NamedTypes.$$InputObjectCircular
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface bigintField {
      kind: 'OutputField'
      name: 'bigintField'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$bigint
    }

    export interface bigintFieldNonNull {
      kind: 'OutputField'
      name: 'bigintFieldNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$bigint
    }

    export interface date {
      kind: 'OutputField'
      name: 'date'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateArg {
      kind: 'OutputField'
      name: 'dateArg'
      arguments: {
        date: {
          kind: 'InputField'
          name: 'date'
          inlineType: [0]
          namedType: $$NamedTypes.$$Date
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateArgInputObject {
      kind: 'OutputField'
      name: 'dateArgInputObject'
      arguments: {
        input: {
          kind: 'InputField'
          name: 'input'
          inlineType: [0]
          namedType: $$NamedTypes.$$InputObject
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateArgList {
      kind: 'OutputField'
      name: 'dateArgList'
      arguments: {
        date: {
          kind: 'InputField'
          name: 'date'
          inlineType: [0, [1]]
          namedType: $$NamedTypes.$$Date
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateArgNonNull {
      kind: 'OutputField'
      name: 'dateArgNonNull'
      arguments: {
        date: {
          kind: 'InputField'
          name: 'date'
          inlineType: [1]
          namedType: $$NamedTypes.$$Date
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateArgNonNullList {
      kind: 'OutputField'
      name: 'dateArgNonNullList'
      arguments: {
        date: {
          kind: 'InputField'
          name: 'date'
          inlineType: [1, [0]]
          namedType: $$NamedTypes.$$Date
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateArgNonNullListNonNull {
      kind: 'OutputField'
      name: 'dateArgNonNullListNonNull'
      arguments: {
        date: {
          kind: 'InputField'
          name: 'date'
          inlineType: [1, [1]]
          namedType: $$NamedTypes.$$Date
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateInterface1 {
      kind: 'OutputField'
      name: 'dateInterface1'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$DateInterface1
    }

    export interface dateList {
      kind: 'OutputField'
      name: 'dateList'
      arguments: {}
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateListList {
      kind: 'OutputField'
      name: 'dateListList'
      arguments: {}
      inlineType: [0, [1, [1]]]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateListNonNull {
      kind: 'OutputField'
      name: 'dateListNonNull'
      arguments: {}
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateNonNull {
      kind: 'OutputField'
      name: 'dateNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateObject1 {
      kind: 'OutputField'
      name: 'dateObject1'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$DateObject1
    }

    export interface dateUnion {
      kind: 'OutputField'
      name: 'dateUnion'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$DateUnion
    }

    export interface error {
      kind: 'OutputField'
      name: 'error'
      arguments: {
        case: {
          kind: 'InputField'
          name: 'case'
          inlineType: [0]
          namedType: $$NamedTypes.$$String
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface id {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface idNonNull {
      kind: 'OutputField'
      name: 'idNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$ID
    }

    export interface $interface {
      kind: 'OutputField'
      name: 'interface'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Interface
    }

    export interface interfaceHierarchyChildA {
      kind: 'OutputField'
      name: 'interfaceHierarchyChildA'
      arguments: {
        type: {
          kind: 'InputField'
          name: 'type'
          inlineType: [0]
          namedType: $$NamedTypes.$$ChildAInterfaceHierarchyMember
        }
      }
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$InterfaceChildA
    }

    export interface interfaceHierarchyChildB {
      kind: 'OutputField'
      name: 'interfaceHierarchyChildB'
      arguments: {
        type: {
          kind: 'InputField'
          name: 'type'
          inlineType: [0]
          namedType: $$NamedTypes.$$ChildBInterfaceHierarchyMember
        }
      }
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$InterfaceChildB
    }

    export interface interfaceHierarchyGrandparents {
      kind: 'OutputField'
      name: 'interfaceHierarchyGrandparents'
      arguments: {
        type: {
          kind: 'InputField'
          name: 'type'
          inlineType: [0]
          namedType: $$NamedTypes.$$GrandparentInterfaceHierarchyMember
        }
      }
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$InterfaceGrandparent
    }

    export interface interfaceHierarchyParents {
      kind: 'OutputField'
      name: 'interfaceHierarchyParents'
      arguments: {
        type: {
          kind: 'InputField'
          name: 'type'
          inlineType: [0]
          namedType: $$NamedTypes.$$ParentInterfaceHierarchyMember
        }
      }
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$InterfaceParent
    }

    export interface interfaceNonNull {
      kind: 'OutputField'
      name: 'interfaceNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Interface
    }

    export interface interfaceWithArgs {
      kind: 'OutputField'
      name: 'interfaceWithArgs'
      arguments: {
        id: {
          kind: 'InputField'
          name: 'id'
          inlineType: [1]
          namedType: $$NamedTypes.$$ID
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$Interface
    }

    export interface listInt {
      kind: 'OutputField'
      name: 'listInt'
      arguments: {}
      inlineType: [0, [0]]
      namedType: $$NamedTypes.$$Int
    }

    export interface listIntNonNull {
      kind: 'OutputField'
      name: 'listIntNonNull'
      arguments: {}
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$Int
    }

    export interface listListInt {
      kind: 'OutputField'
      name: 'listListInt'
      arguments: {}
      inlineType: [0, [0, [0]]]
      namedType: $$NamedTypes.$$Int
    }

    export interface listListIntNonNull {
      kind: 'OutputField'
      name: 'listListIntNonNull'
      arguments: {}
      inlineType: [1, [1, [1]]]
      namedType: $$NamedTypes.$$Int
    }

    export interface lowerCaseUnion {
      kind: 'OutputField'
      name: 'lowerCaseUnion'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$lowerCaseUnion
    }

    export interface $object {
      kind: 'OutputField'
      name: 'object'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Object1
    }

    export interface objectList {
      kind: 'OutputField'
      name: 'objectList'
      arguments: {}
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$Object1
    }

    export interface objectListNonNull {
      kind: 'OutputField'
      name: 'objectListNonNull'
      arguments: {}
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$Object1
    }

    export interface objectNested {
      kind: 'OutputField'
      name: 'objectNested'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ObjectNested
    }

    export interface objectNonNull {
      kind: 'OutputField'
      name: 'objectNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Object1
    }

    export interface objectWithArgs {
      kind: 'OutputField'
      name: 'objectWithArgs'
      arguments: {
        boolean: {
          kind: 'InputField'
          name: 'boolean'
          inlineType: [0]
          namedType: $$NamedTypes.$$Boolean
        }
        float: {
          kind: 'InputField'
          name: 'float'
          inlineType: [0]
          namedType: $$NamedTypes.$$Float
        }
        id: {
          kind: 'InputField'
          name: 'id'
          inlineType: [0]
          namedType: $$NamedTypes.$$ID
        }
        int: {
          kind: 'InputField'
          name: 'int'
          inlineType: [0]
          namedType: $$NamedTypes.$$Int
        }
        string: {
          kind: 'InputField'
          name: 'string'
          inlineType: [0]
          namedType: $$NamedTypes.$$String
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$Object1
    }

    export interface result {
      kind: 'OutputField'
      name: 'result'
      arguments: {
        case: {
          kind: 'InputField'
          name: 'case'
          inlineType: [1]
          namedType: $$NamedTypes.$$Case
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$Result
    }

    export interface resultNonNull {
      kind: 'OutputField'
      name: 'resultNonNull'
      arguments: {
        case: {
          kind: 'InputField'
          name: 'case'
          inlineType: [0]
          namedType: $$NamedTypes.$$Case
        }
      }
      inlineType: [1]
      namedType: $$NamedTypes.$$Result
    }

    export interface $string {
      kind: 'OutputField'
      name: 'string'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface stringWithArgEnum {
      kind: 'OutputField'
      name: 'stringWithArgEnum'
      arguments: {
        ABCEnum: {
          kind: 'InputField'
          name: 'ABCEnum'
          inlineType: [0]
          namedType: $$NamedTypes.$$ABCEnum
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface stringWithArgInputObject {
      kind: 'OutputField'
      name: 'stringWithArgInputObject'
      arguments: {
        input: {
          kind: 'InputField'
          name: 'input'
          inlineType: [0]
          namedType: $$NamedTypes.$$InputObject
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface stringWithArgInputObjectEnum {
      kind: 'OutputField'
      name: 'stringWithArgInputObjectEnum'
      arguments: {
        input: {
          kind: 'InputField'
          name: 'input'
          inlineType: [1]
          namedType: $$NamedTypes.$$InputObjectEnum
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface stringWithArgInputObjectRequired {
      kind: 'OutputField'
      name: 'stringWithArgInputObjectRequired'
      arguments: {
        input: {
          kind: 'InputField'
          name: 'input'
          inlineType: [1]
          namedType: $$NamedTypes.$$InputObject
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    /**
     * The given arguments are reflected back as a JSON string.
     */
    export interface stringWithArgs {
      kind: 'OutputField'
      name: 'stringWithArgs'
      arguments: {
        boolean: {
          kind: 'InputField'
          name: 'boolean'
          inlineType: [0]
          namedType: $$NamedTypes.$$Boolean
        }
        float: {
          kind: 'InputField'
          name: 'float'
          inlineType: [0]
          namedType: $$NamedTypes.$$Float
        }
        id: {
          kind: 'InputField'
          name: 'id'
          inlineType: [0]
          namedType: $$NamedTypes.$$ID
        }
        /**
         * @deprecated Example of argument deprecation reason here.
         */
        int: {
          kind: 'InputField'
          name: 'int'
          inlineType: [0]
          namedType: $$NamedTypes.$$Int
        }
        /**
         * Example of some argument documentation here.
         */
        string: {
          kind: 'InputField'
          name: 'string'
          inlineType: [0]
          namedType: $$NamedTypes.$$String
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface stringWithListArg {
      kind: 'OutputField'
      name: 'stringWithListArg'
      arguments: {
        ints: {
          kind: 'InputField'
          name: 'ints'
          inlineType: [0, [0]]
          namedType: $$NamedTypes.$$Int
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface stringWithListArgRequired {
      kind: 'OutputField'
      name: 'stringWithListArgRequired'
      arguments: {
        ints: {
          kind: 'InputField'
          name: 'ints'
          inlineType: [1, [1]]
          namedType: $$NamedTypes.$$Int
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface stringWithRequiredArg {
      kind: 'OutputField'
      name: 'stringWithRequiredArg'
      arguments: {
        string: {
          kind: 'InputField'
          name: 'string'
          inlineType: [1]
          namedType: $$NamedTypes.$$String
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface unionFooBar {
      kind: 'OutputField'
      name: 'unionFooBar'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$FooBarUnion
    }

    export interface unionFooBarNonNull {
      kind: 'OutputField'
      name: 'unionFooBarNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$FooBarUnion
    }

    export interface unionFooBarWithArgs {
      kind: 'OutputField'
      name: 'unionFooBarWithArgs'
      arguments: {
        id: {
          kind: 'InputField'
          name: 'id'
          inlineType: [0]
          namedType: $$NamedTypes.$$ID
        }
      }
      inlineType: [0]
      namedType: $$NamedTypes.$$FooBarUnion
    }

    export interface unionObject {
      kind: 'OutputField'
      name: 'unionObject'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ObjectUnion
    }

    export interface unionObjectNonNull {
      kind: 'OutputField'
      name: 'unionObjectNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$ObjectUnion
    }
  }

  //                                              Mutation
  // --------------------------------------------------------------------------------------------------
  //

  export interface Mutation {
    kind: 'Object'
    name: 'Mutation'
    fields: {
      __typename: Mutation.__typename
      id: Mutation.id
      idNonNull: Mutation.idNonNull
    }
  }

  export namespace Mutation {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Mutation'
      }
    }

    export interface id {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface idNonNull {
      kind: 'OutputField'
      name: 'idNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$ID
    }
  }

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            OutputObject
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                                Bar
  // --------------------------------------------------------------------------------------------------
  //

  export interface Bar {
    kind: 'Object'
    name: 'Bar'
    fields: {
      __typename: Bar.__typename
      int: Bar.int
    }
  }

  export namespace Bar {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Bar'
      }
    }

    export interface int {
      kind: 'OutputField'
      name: 'int'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Int
    }
  }

  //                                            DateObject1
  // --------------------------------------------------------------------------------------------------
  //

  export interface DateObject1 {
    kind: 'Object'
    name: 'DateObject1'
    fields: {
      __typename: DateObject1.__typename
      date1: DateObject1.date1
    }
  }

  export namespace DateObject1 {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'DateObject1'
      }
    }

    export interface date1 {
      kind: 'OutputField'
      name: 'date1'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }
  }

  //                                            DateObject2
  // --------------------------------------------------------------------------------------------------
  //

  export interface DateObject2 {
    kind: 'Object'
    name: 'DateObject2'
    fields: {
      __typename: DateObject2.__typename
      date2: DateObject2.date2
    }
  }

  export namespace DateObject2 {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'DateObject2'
      }
    }

    export interface date2 {
      kind: 'OutputField'
      name: 'date2'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }
  }

  //                                              ErrorOne
  // --------------------------------------------------------------------------------------------------
  //

  export interface ErrorOne {
    kind: 'Object'
    name: 'ErrorOne'
    fields: {
      __typename: ErrorOne.__typename
      infoId: ErrorOne.infoId
      message: ErrorOne.message
    }
  }

  export namespace ErrorOne {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ErrorOne'
      }
    }

    export interface infoId {
      kind: 'OutputField'
      name: 'infoId'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface message {
      kind: 'OutputField'
      name: 'message'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }
  }

  //                                              ErrorTwo
  // --------------------------------------------------------------------------------------------------
  //

  export interface ErrorTwo {
    kind: 'Object'
    name: 'ErrorTwo'
    fields: {
      __typename: ErrorTwo.__typename
      infoInt: ErrorTwo.infoInt
      message: ErrorTwo.message
    }
  }

  export namespace ErrorTwo {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ErrorTwo'
      }
    }

    export interface infoInt {
      kind: 'OutputField'
      name: 'infoInt'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Int
    }

    export interface message {
      kind: 'OutputField'
      name: 'message'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }
  }

  //                                                Foo
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Object documentation.
   */
  export interface Foo {
    kind: 'Object'
    name: 'Foo'
    fields: {
      __typename: Foo.__typename
      id: Foo.id
    }
  }

  export namespace Foo {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Foo'
      }
    }

    /**
     * Field documentation.
     *
     * @deprecated Field a is deprecated.
     */
    export interface id {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }
  }

  //                                              Object1
  // --------------------------------------------------------------------------------------------------
  //

  export interface Object1 {
    kind: 'Object'
    name: 'Object1'
    fields: {
      __typename: Object1.__typename
      ABCEnum: Object1.ABCEnum
      boolean: Object1.$boolean
      float: Object1.float
      id: Object1.id
      int: Object1.int
      string: Object1.$string
    }
  }

  export namespace Object1 {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Object1'
      }
    }

    export interface ABCEnum {
      kind: 'OutputField'
      name: 'ABCEnum'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ABCEnum
    }

    export interface $boolean {
      kind: 'OutputField'
      name: 'boolean'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Boolean
    }

    export interface float {
      kind: 'OutputField'
      name: 'float'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Float
    }

    export interface id {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface int {
      kind: 'OutputField'
      name: 'int'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Int
    }

    export interface $string {
      kind: 'OutputField'
      name: 'string'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }
  }

  //                                    Object1ImplementingInterface
  // --------------------------------------------------------------------------------------------------
  //

  export interface Object1ImplementingInterface {
    kind: 'Object'
    name: 'Object1ImplementingInterface'
    fields: {
      __typename: Object1ImplementingInterface.__typename
      id: Object1ImplementingInterface.id
      int: Object1ImplementingInterface.int
    }
  }

  export namespace Object1ImplementingInterface {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Object1ImplementingInterface'
      }
    }

    export interface id {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface int {
      kind: 'OutputField'
      name: 'int'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Int
    }
  }

  //                                    Object2ImplementingInterface
  // --------------------------------------------------------------------------------------------------
  //

  export interface Object2ImplementingInterface {
    kind: 'Object'
    name: 'Object2ImplementingInterface'
    fields: {
      __typename: Object2ImplementingInterface.__typename
      boolean: Object2ImplementingInterface.$boolean
      id: Object2ImplementingInterface.id
    }
  }

  export namespace Object2ImplementingInterface {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Object2ImplementingInterface'
      }
    }

    export interface $boolean {
      kind: 'OutputField'
      name: 'boolean'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Boolean
    }

    export interface id {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }
  }

  //                                            ObjectChildA
  // --------------------------------------------------------------------------------------------------
  //

  export interface ObjectChildA {
    kind: 'Object'
    name: 'ObjectChildA'
    fields: {
      __typename: ObjectChildA.__typename
      a: ObjectChildA.a
      b: ObjectChildA.b
      c1: ObjectChildA.c1
      me: ObjectChildA.me
    }
  }

  export namespace ObjectChildA {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ObjectChildA'
      }
    }

    export interface a {
      kind: 'OutputField'
      name: 'a'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface b {
      kind: 'OutputField'
      name: 'b'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface c1 {
      kind: 'OutputField'
      name: 'c1'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface me {
      kind: 'OutputField'
      name: 'me'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Boolean
    }
  }

  //                                            ObjectChildB
  // --------------------------------------------------------------------------------------------------
  //

  export interface ObjectChildB {
    kind: 'Object'
    name: 'ObjectChildB'
    fields: {
      __typename: ObjectChildB.__typename
      a: ObjectChildB.a
      b: ObjectChildB.b
      c2: ObjectChildB.c2
      me: ObjectChildB.me
    }
  }

  export namespace ObjectChildB {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ObjectChildB'
      }
    }

    export interface a {
      kind: 'OutputField'
      name: 'a'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface b {
      kind: 'OutputField'
      name: 'b'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface c2 {
      kind: 'OutputField'
      name: 'c2'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface me {
      kind: 'OutputField'
      name: 'me'
      arguments: {}
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$Int
    }
  }

  //                                         ObjectGrandparent
  // --------------------------------------------------------------------------------------------------
  //

  export interface ObjectGrandparent {
    kind: 'Object'
    name: 'ObjectGrandparent'
    fields: {
      __typename: ObjectGrandparent.__typename
      a: ObjectGrandparent.a
      me: ObjectGrandparent.me
    }
  }

  export namespace ObjectGrandparent {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ObjectGrandparent'
      }
    }

    export interface a {
      kind: 'OutputField'
      name: 'a'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface me {
      kind: 'OutputField'
      name: 'me'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Int
    }
  }

  //                                            ObjectNested
  // --------------------------------------------------------------------------------------------------
  //

  export interface ObjectNested {
    kind: 'Object'
    name: 'ObjectNested'
    fields: {
      __typename: ObjectNested.__typename
      id: ObjectNested.id
      object: ObjectNested.$object
    }
  }

  export namespace ObjectNested {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ObjectNested'
      }
    }

    export interface id {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface $object {
      kind: 'OutputField'
      name: 'object'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Object1
    }
  }

  //                                            ObjectParent
  // --------------------------------------------------------------------------------------------------
  //

  export interface ObjectParent {
    kind: 'Object'
    name: 'ObjectParent'
    fields: {
      __typename: ObjectParent.__typename
      a: ObjectParent.a
      b: ObjectParent.b
      me: ObjectParent.me
    }
  }

  export namespace ObjectParent {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ObjectParent'
      }
    }

    export interface a {
      kind: 'OutputField'
      name: 'a'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface b {
      kind: 'OutputField'
      name: 'b'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface me {
      kind: 'OutputField'
      name: 'me'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }
  }

  //                                            ObjectUnion
  // --------------------------------------------------------------------------------------------------
  //

  export interface ObjectUnion {
    kind: 'Object'
    name: 'ObjectUnion'
    fields: {
      __typename: ObjectUnion.__typename
      fooBarUnion: ObjectUnion.fooBarUnion
    }
  }

  export namespace ObjectUnion {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ObjectUnion'
      }
    }

    export interface fooBarUnion {
      kind: 'OutputField'
      name: 'fooBarUnion'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$FooBarUnion
    }
  }

  //                                          lowerCaseObject
  // --------------------------------------------------------------------------------------------------
  //

  export interface lowerCaseObject {
    kind: 'Object'
    name: 'lowerCaseObject'
    fields: {
      __typename: lowerCaseObject.__typename
      id: lowerCaseObject.id
    }
  }

  export namespace lowerCaseObject {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'lowerCaseObject'
      }
    }

    export interface id {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }
  }

  //                                          lowerCaseObject2
  // --------------------------------------------------------------------------------------------------
  //

  export interface lowerCaseObject2 {
    kind: 'Object'
    name: 'lowerCaseObject2'
    fields: {
      __typename: lowerCaseObject2.__typename
      int: lowerCaseObject2.int
    }
  }

  export namespace lowerCaseObject2 {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'lowerCaseObject2'
      }
    }

    export interface int {
      kind: 'OutputField'
      name: 'int'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Int
    }
  }

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            InputObject
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                            InputObject
  // --------------------------------------------------------------------------------------------------
  //

  export interface InputObject {
    kind: 'InputObject'
    name: 'InputObject'
    isAllFieldsNullable: true
    fields: {
      abcEnum: InputObject.abcEnum
      date: InputObject.date
      dateRequired: InputObject.dateRequired
      id: InputObject.id
      idRequired: InputObject.idRequired
    }
  }

  export namespace InputObject {
    export interface abcEnum {
      kind: 'InputField'
      name: 'abcEnum'
      inlineType: [0]
      namedType: $$NamedTypes.$$ABCEnum
    }

    export interface date {
      kind: 'InputField'
      name: 'date'
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateRequired {
      kind: 'InputField'
      name: 'dateRequired'
      inlineType: [1]
      namedType: $$NamedTypes.$$Date
    }

    export interface id {
      kind: 'InputField'
      name: 'id'
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface idRequired {
      kind: 'InputField'
      name: 'idRequired'
      inlineType: [1]
      namedType: $$NamedTypes.$$ID
    }
  }

  //                                        InputObjectCircular
  // --------------------------------------------------------------------------------------------------
  //

  export interface InputObjectCircular {
    kind: 'InputObject'
    name: 'InputObjectCircular'
    isAllFieldsNullable: true
    fields: {
      circular: InputObjectCircular.circular
      date: InputObjectCircular.date
    }
  }

  export namespace InputObjectCircular {
    export interface circular {
      kind: 'InputField'
      name: 'circular'
      inlineType: [0]
      namedType: $$NamedTypes.$$InputObjectCircular
    }

    export interface date {
      kind: 'InputField'
      name: 'date'
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }
  }

  //                                          InputObjectEnum
  // --------------------------------------------------------------------------------------------------
  //

  export interface InputObjectEnum {
    kind: 'InputObject'
    name: 'InputObjectEnum'
    isAllFieldsNullable: true
    fields: {
      abcEnum: InputObjectEnum.abcEnum
    }
  }

  export namespace InputObjectEnum {
    export interface abcEnum {
      kind: 'InputField'
      name: 'abcEnum'
      inlineType: [0]
      namedType: $$NamedTypes.$$ABCEnum
    }
  }

  //                                         InputObjectNested
  // --------------------------------------------------------------------------------------------------
  //

  export interface InputObjectNested {
    kind: 'InputObject'
    name: 'InputObjectNested'
    isAllFieldsNullable: true
    fields: {
      InputObject: InputObjectNested.InputObject
    }
  }

  export namespace InputObjectNested {
    export interface InputObject {
      kind: 'InputField'
      name: 'InputObject'
      inlineType: [0]
      namedType: $$NamedTypes.$$InputObject
    }
  }

  //                                      InputObjectNestedNonNull
  // --------------------------------------------------------------------------------------------------
  //

  export interface InputObjectNestedNonNull {
    kind: 'InputObject'
    name: 'InputObjectNestedNonNull'
    isAllFieldsNullable: false
    fields: {
      InputObject: InputObjectNestedNonNull.InputObject
    }
  }

  export namespace InputObjectNestedNonNull {
    export interface InputObject {
      kind: 'InputField'
      name: 'InputObject'
      inlineType: [1]
      namedType: $$NamedTypes.$$InputObject
    }
  }

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                             Interface
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                           DateInterface1
  // --------------------------------------------------------------------------------------------------
  //

  export interface DateInterface1 {
    kind: 'Interface'
    fields: {
      date1: DateInterface1.date1
    }
    name: 'DateInterface1'
    implementors: [DateObject1]
    implementorsUnion: DateObject1
    implementorsIndex: {
      DateObject1: DateObject1
    }
  }

  export namespace DateInterface1 {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'DateInterface1'
      }
    }

    export interface date1 {
      kind: 'OutputField'
      name: 'date1'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }
  }

  //                                               Error
  // --------------------------------------------------------------------------------------------------
  //

  export interface Error {
    kind: 'Interface'
    fields: {
      message: Error.message
    }
    name: 'Error'
    implementors: [ErrorOne, ErrorTwo]
    implementorsUnion:
      | ErrorOne
      | ErrorTwo
    implementorsIndex: {
      ErrorOne: ErrorOne
      ErrorTwo: ErrorTwo
    }
  }

  export namespace Error {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Error'
      }
    }

    export interface message {
      kind: 'OutputField'
      name: 'message'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }
  }

  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //

  export interface Interface {
    kind: 'Interface'
    fields: {
      id: Interface.id
    }
    name: 'Interface'
    implementors: [Object1ImplementingInterface, Object2ImplementingInterface]
    implementorsUnion:
      | Object1ImplementingInterface
      | Object2ImplementingInterface
    implementorsIndex: {
      Object1ImplementingInterface: Object1ImplementingInterface
      Object2ImplementingInterface: Object2ImplementingInterface
    }
  }

  export namespace Interface {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Interface'
      }
    }

    export interface id {
      kind: 'OutputField'
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }
  }

  //                                          InterfaceChildA
  // --------------------------------------------------------------------------------------------------
  //

  export interface InterfaceChildA {
    kind: 'Interface'
    fields: {
      a: InterfaceChildA.a
      b: InterfaceChildA.b
      c1: InterfaceChildA.c1
    }
    name: 'InterfaceChildA'
    implementors: [ObjectChildA]
    implementorsUnion: ObjectChildA
    implementorsIndex: {
      ObjectChildA: ObjectChildA
    }
  }

  export namespace InterfaceChildA {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'InterfaceChildA'
      }
    }

    export interface a {
      kind: 'OutputField'
      name: 'a'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface b {
      kind: 'OutputField'
      name: 'b'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface c1 {
      kind: 'OutputField'
      name: 'c1'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }
  }

  //                                          InterfaceChildB
  // --------------------------------------------------------------------------------------------------
  //

  export interface InterfaceChildB {
    kind: 'Interface'
    fields: {
      a: InterfaceChildB.a
      b: InterfaceChildB.b
      c2: InterfaceChildB.c2
    }
    name: 'InterfaceChildB'
    implementors: [ObjectChildB]
    implementorsUnion: ObjectChildB
    implementorsIndex: {
      ObjectChildB: ObjectChildB
    }
  }

  export namespace InterfaceChildB {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'InterfaceChildB'
      }
    }

    export interface a {
      kind: 'OutputField'
      name: 'a'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface b {
      kind: 'OutputField'
      name: 'b'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface c2 {
      kind: 'OutputField'
      name: 'c2'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }
  }

  //                                        InterfaceGrandparent
  // --------------------------------------------------------------------------------------------------
  //

  export interface InterfaceGrandparent {
    kind: 'Interface'
    fields: {
      a: InterfaceGrandparent.a
    }
    name: 'InterfaceGrandparent'
    implementors: [
      ObjectChildA,
      ObjectChildB,
      ObjectGrandparent,
      ObjectParent,
      InterfaceChildA,
      InterfaceChildB,
      InterfaceParent,
    ]
    implementorsUnion:
      | ObjectChildA
      | ObjectChildB
      | ObjectGrandparent
      | ObjectParent
      | InterfaceChildA
      | InterfaceChildB
      | InterfaceParent
    implementorsIndex: {
      ObjectChildA: ObjectChildA
      ObjectChildB: ObjectChildB
      ObjectGrandparent: ObjectGrandparent
      ObjectParent: ObjectParent
      InterfaceChildA: InterfaceChildA
      InterfaceChildB: InterfaceChildB
      InterfaceParent: InterfaceParent
    }
  }

  export namespace InterfaceGrandparent {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'InterfaceGrandparent'
      }
    }

    export interface a {
      kind: 'OutputField'
      name: 'a'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }
  }

  //                                          InterfaceParent
  // --------------------------------------------------------------------------------------------------
  //

  export interface InterfaceParent {
    kind: 'Interface'
    fields: {
      a: InterfaceParent.a
      b: InterfaceParent.b
    }
    name: 'InterfaceParent'
    implementors: [ObjectChildA, ObjectChildB, ObjectParent, InterfaceChildA, InterfaceChildB]
    implementorsUnion:
      | ObjectChildA
      | ObjectChildB
      | ObjectParent
      | InterfaceChildA
      | InterfaceChildB
    implementorsIndex: {
      ObjectChildA: ObjectChildA
      ObjectChildB: ObjectChildB
      ObjectParent: ObjectParent
      InterfaceChildA: InterfaceChildA
      InterfaceChildB: InterfaceChildB
    }
  }

  export namespace InterfaceParent {
    export interface __typename {
      kind: 'OutputField'
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'InterfaceParent'
      }
    }

    export interface a {
      kind: 'OutputField'
      name: 'a'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }

    export interface b {
      kind: 'OutputField'
      name: 'b'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }
  }

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                               Union
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                             DateUnion
  // --------------------------------------------------------------------------------------------------
  //

  export interface DateUnion {
    kind: 'Union'
    name: 'DateUnion'
    members: [DateObject1, DateObject2]
    membersUnion:
      | DateObject1
      | DateObject2
    membersIndex: {
      DateObject1: DateObject1
      DateObject2: DateObject2
    }
  }

  //                                            FooBarUnion
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Union documentation.
   */
  export interface FooBarUnion {
    kind: 'Union'
    name: 'FooBarUnion'
    members: [Bar, Foo]
    membersUnion:
      | Bar
      | Foo
    membersIndex: {
      Bar: Bar
      Foo: Foo
    }
  }

  //                                               Result
  // --------------------------------------------------------------------------------------------------
  //

  export interface Result {
    kind: 'Union'
    name: 'Result'
    members: [ErrorOne, ErrorTwo, Object1]
    membersUnion:
      | ErrorOne
      | ErrorTwo
      | Object1
    membersIndex: {
      ErrorOne: ErrorOne
      ErrorTwo: ErrorTwo
      Object1: Object1
    }
  }

  //                                           lowerCaseUnion
  // --------------------------------------------------------------------------------------------------
  //

  export interface lowerCaseUnion {
    kind: 'Union'
    name: 'lowerCaseUnion'
    members: [lowerCaseObject, lowerCaseObject2]
    membersUnion:
      | lowerCaseObject
      | lowerCaseObject2
    membersIndex: {
      lowerCaseObject: lowerCaseObject
      lowerCaseObject2: lowerCaseObject2
    }
  }

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                                Enum
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                              ABCEnum
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Enum documentation.
   *
   * Members
   * "A" - (DEPRECATED: Enum value A is deprecated.)
   * "B" - Enum B member documentation.
   * "C" - (DEPRECATED: Enum value C is deprecated.)
   */
  export interface ABCEnum {
    kind: 'Enum'
    name: 'ABCEnum'
    members: ['A', 'B', 'C']
    membersUnion:
      | 'A'
      | 'B'
      | 'C'
  }

  //                                                Case
  // --------------------------------------------------------------------------------------------------
  //

  export interface Case {
    kind: 'Enum'
    name: 'Case'
    members: ['ErrorOne', 'ErrorTwo', 'Object1']
    membersUnion:
      | 'ErrorOne'
      | 'ErrorTwo'
      | 'Object1'
  }

  //                                   ChildAInterfaceHierarchyMember
  // --------------------------------------------------------------------------------------------------
  //

  export interface ChildAInterfaceHierarchyMember {
    kind: 'Enum'
    name: 'ChildAInterfaceHierarchyMember'
    members: ['InterfaceChildA']
    membersUnion: 'InterfaceChildA'
  }

  //                                   ChildBInterfaceHierarchyMember
  // --------------------------------------------------------------------------------------------------
  //

  export interface ChildBInterfaceHierarchyMember {
    kind: 'Enum'
    name: 'ChildBInterfaceHierarchyMember'
    members: ['InterfaceChildB']
    membersUnion: 'InterfaceChildB'
  }

  //                                GrandparentInterfaceHierarchyMember
  // --------------------------------------------------------------------------------------------------
  //

  export interface GrandparentInterfaceHierarchyMember {
    kind: 'Enum'
    name: 'GrandparentInterfaceHierarchyMember'
    members: ['InterfaceChildA', 'InterfaceChildB', 'InterfaceGrandparent', 'InterfaceParent']
    membersUnion:
      | 'InterfaceChildA'
      | 'InterfaceChildB'
      | 'InterfaceGrandparent'
      | 'InterfaceParent'
  }

  //                                   ParentInterfaceHierarchyMember
  // --------------------------------------------------------------------------------------------------
  //

  export interface ParentInterfaceHierarchyMember {
    kind: 'Enum'
    name: 'ParentInterfaceHierarchyMember'
    members: ['InterfaceChildA', 'InterfaceChildB', 'InterfaceParent']
    membersUnion:
      | 'InterfaceChildA'
      | 'InterfaceChildB'
      | 'InterfaceParent'
  }

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            ScalarCustom
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                                Date
  // --------------------------------------------------------------------------------------------------
  //

  export type Date = $$Scalar.Date

  //                                               bigint
  // --------------------------------------------------------------------------------------------------
  //

  export type $bigint = $$Scalar.$bigint

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                           ScalarStandard
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                                Int
  // --------------------------------------------------------------------------------------------------
  //

  export type Int = $.StandardTypes.Int

  //                                               String
  // --------------------------------------------------------------------------------------------------
  //

  export type String = $.StandardTypes.String

  //                                                 ID
  // --------------------------------------------------------------------------------------------------
  //

  export type ID = $.StandardTypes.ID

  //                                              Boolean
  // --------------------------------------------------------------------------------------------------
  //

  export type Boolean = $.StandardTypes.Boolean

  //                                               Float
  // --------------------------------------------------------------------------------------------------
  //

  export type Float = $.StandardTypes.Float

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                         Named Types Index
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  /**
   * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
   *     name clashing between the field name and the object name.
   *
   *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
   *     would end up with an error of `export interface Foo extends Foo ...`
   */

  namespace $$NamedTypes {
    export type $$Query = Query
    export type $$Mutation = Mutation
    export type $$Bar = Bar
    export type $$DateObject1 = DateObject1
    export type $$DateObject2 = DateObject2
    export type $$ErrorOne = ErrorOne
    export type $$ErrorTwo = ErrorTwo
    export type $$Foo = Foo
    export type $$Object1 = Object1
    export type $$Object1ImplementingInterface = Object1ImplementingInterface
    export type $$Object2ImplementingInterface = Object2ImplementingInterface
    export type $$ObjectChildA = ObjectChildA
    export type $$ObjectChildB = ObjectChildB
    export type $$ObjectGrandparent = ObjectGrandparent
    export type $$ObjectNested = ObjectNested
    export type $$ObjectParent = ObjectParent
    export type $$ObjectUnion = ObjectUnion
    export type $$lowerCaseObject = lowerCaseObject
    export type $$lowerCaseObject2 = lowerCaseObject2
    export type $$InputObject = InputObject
    export type $$InputObjectCircular = InputObjectCircular
    export type $$InputObjectEnum = InputObjectEnum
    export type $$InputObjectNested = InputObjectNested
    export type $$InputObjectNestedNonNull = InputObjectNestedNonNull
    export type $$DateInterface1 = DateInterface1
    export type $$Error = Error
    export type $$Interface = Interface
    export type $$InterfaceChildA = InterfaceChildA
    export type $$InterfaceChildB = InterfaceChildB
    export type $$InterfaceGrandparent = InterfaceGrandparent
    export type $$InterfaceParent = InterfaceParent
    export type $$DateUnion = DateUnion
    export type $$FooBarUnion = FooBarUnion
    export type $$Result = Result
    export type $$lowerCaseUnion = lowerCaseUnion
    export type $$ABCEnum = ABCEnum
    export type $$Case = Case
    export type $$ChildAInterfaceHierarchyMember = ChildAInterfaceHierarchyMember
    export type $$ChildBInterfaceHierarchyMember = ChildBInterfaceHierarchyMember
    export type $$GrandparentInterfaceHierarchyMember = GrandparentInterfaceHierarchyMember
    export type $$ParentInterfaceHierarchyMember = ParentInterfaceHierarchyMember
    export type $$Date = Date
    export type $$bigint = $bigint
    export type $$Int = Int
    export type $$String = String
    export type $$ID = ID
    export type $$Boolean = Boolean
    export type $$Float = Float
  }
}

//
//
//
//
//
//
// ==================================================================================================
//                                               Schema
// ==================================================================================================
//
//
//
//
//
//

export interface Schema<$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Scalar.$Registry> {
  name: $$Data.Name
  operationsAvailable: ['query', 'mutation']
  RootUnion:
    | Schema.Query
    | Schema.Mutation
  Root: {
    query: Schema.Query
    mutation: Schema.Mutation
    subscription: null
  }
  allTypes: {
    Query: Schema.Query
    Mutation: Schema.Mutation
    ABCEnum: Schema.ABCEnum
    Case: Schema.Case
    ChildAInterfaceHierarchyMember: Schema.ChildAInterfaceHierarchyMember
    ChildBInterfaceHierarchyMember: Schema.ChildBInterfaceHierarchyMember
    GrandparentInterfaceHierarchyMember: Schema.GrandparentInterfaceHierarchyMember
    ParentInterfaceHierarchyMember: Schema.ParentInterfaceHierarchyMember
    Bar: Schema.Bar
    DateObject1: Schema.DateObject1
    DateObject2: Schema.DateObject2
    ErrorOne: Schema.ErrorOne
    ErrorTwo: Schema.ErrorTwo
    Foo: Schema.Foo
    Object1: Schema.Object1
    Object1ImplementingInterface: Schema.Object1ImplementingInterface
    Object2ImplementingInterface: Schema.Object2ImplementingInterface
    ObjectChildA: Schema.ObjectChildA
    ObjectChildB: Schema.ObjectChildB
    ObjectGrandparent: Schema.ObjectGrandparent
    ObjectNested: Schema.ObjectNested
    ObjectParent: Schema.ObjectParent
    ObjectUnion: Schema.ObjectUnion
    lowerCaseObject: Schema.lowerCaseObject
    lowerCaseObject2: Schema.lowerCaseObject2
    DateUnion: Schema.DateUnion
    FooBarUnion: Schema.FooBarUnion
    Result: Schema.Result
    lowerCaseUnion: Schema.lowerCaseUnion
    DateInterface1: Schema.DateInterface1
    Error: Schema.Error
    Interface: Schema.Interface
    InterfaceChildA: Schema.InterfaceChildA
    InterfaceChildB: Schema.InterfaceChildB
    InterfaceGrandparent: Schema.InterfaceGrandparent
    InterfaceParent: Schema.InterfaceParent
  }
  objects: {
    Bar: Schema.Bar
    DateObject1: Schema.DateObject1
    DateObject2: Schema.DateObject2
    ErrorOne: Schema.ErrorOne
    ErrorTwo: Schema.ErrorTwo
    Foo: Schema.Foo
    Object1: Schema.Object1
    Object1ImplementingInterface: Schema.Object1ImplementingInterface
    Object2ImplementingInterface: Schema.Object2ImplementingInterface
    ObjectChildA: Schema.ObjectChildA
    ObjectChildB: Schema.ObjectChildB
    ObjectGrandparent: Schema.ObjectGrandparent
    ObjectNested: Schema.ObjectNested
    ObjectParent: Schema.ObjectParent
    ObjectUnion: Schema.ObjectUnion
    lowerCaseObject: Schema.lowerCaseObject
    lowerCaseObject2: Schema.lowerCaseObject2
  }
  unions: {
    DateUnion: Schema.DateUnion
    FooBarUnion: Schema.FooBarUnion
    Result: Schema.Result
    lowerCaseUnion: Schema.lowerCaseUnion
  }
  interfaces: {
    DateInterface1: Schema.DateInterface1
    Error: Schema.Error
    Interface: Schema.Interface
    InterfaceChildA: Schema.InterfaceChildA
    InterfaceChildB: Schema.InterfaceChildB
    InterfaceGrandparent: Schema.InterfaceGrandparent
    InterfaceParent: Schema.InterfaceParent
  }
  scalarNamesUnion:
    | 'Date'
    | 'bigint'
    | 'Int'
    | 'String'
    | 'ID'
    | 'Boolean'
    | 'Float'
  scalars: {
    Date: Schema.Date
    bigint: Schema.bigint
    Int: Schema.Int
    String: Schema.String
    ID: Schema.ID
    Boolean: Schema.Boolean
    Float: Schema.Float
  }
  scalarRegistry: $Scalars
  extensions: $$Utilities.GlobalRegistry.TypeExtensions
}
