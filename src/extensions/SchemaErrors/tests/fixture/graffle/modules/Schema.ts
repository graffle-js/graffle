import type { Schema as $ } from '../../../../../../entrypoints/utilities-for-generated.js'
import type * as $$Utilities from '../../../../../../entrypoints/utilities-for-generated.js'
import type * as Data from './Data.js'
import type * as MethodsRoot from './MethodsRoot.js'
import type * as $Scalar from './Scalar.js'

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

  //                                              Mutation
  // --------------------------------------------------------------------------------------------------
  //

  export interface Mutation extends $.OutputObject {
    name: 'Mutation'
    fields: {
      __typename: Mutation.__typename
      id: Mutation.id
      idNonNull: Mutation.idNonNull
    }
  }

  export namespace Mutation {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Mutation'
      }
    }

    export interface id extends $.OutputField {
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface idNonNull extends $.OutputField {
      name: 'idNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$ID
    }
  }

  //                                               Query
  // --------------------------------------------------------------------------------------------------
  //

  export interface Query extends $.OutputObject {
    name: 'Query'
    fields: {
      __typename: Query.__typename
      InputObjectNested: Query.InputObjectNested
      InputObjectNestedNonNull: Query.InputObjectNestedNonNull
      abcEnum: Query.abcEnum
      argInputObjectCircular: Query.argInputObjectCircular
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
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Query'
      }
    }

    export interface InputObjectNested extends $.OutputField {
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

    export interface InputObjectNestedNonNull extends $.OutputField {
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
    export interface abcEnum extends $.OutputField {
      name: 'abcEnum'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ABCEnum
    }

    export interface argInputObjectCircular extends $.OutputField {
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

    export interface date extends $.OutputField {
      name: 'date'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateArg extends $.OutputField {
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

    export interface dateArgInputObject extends $.OutputField {
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

    export interface dateArgList extends $.OutputField {
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

    export interface dateArgNonNull extends $.OutputField {
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

    export interface dateArgNonNullList extends $.OutputField {
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

    export interface dateArgNonNullListNonNull extends $.OutputField {
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

    export interface dateInterface1 extends $.OutputField {
      name: 'dateInterface1'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$DateInterface1
    }

    export interface dateList extends $.OutputField {
      name: 'dateList'
      arguments: {}
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateListList extends $.OutputField {
      name: 'dateListList'
      arguments: {}
      inlineType: [0, [1, [1]]]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateListNonNull extends $.OutputField {
      name: 'dateListNonNull'
      arguments: {}
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateNonNull extends $.OutputField {
      name: 'dateNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateObject1 extends $.OutputField {
      name: 'dateObject1'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$DateObject1
    }

    export interface dateUnion extends $.OutputField {
      name: 'dateUnion'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$DateUnion
    }

    export interface error extends $.OutputField {
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

    export interface id extends $.OutputField {
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface idNonNull extends $.OutputField {
      name: 'idNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$ID
    }

    export interface $interface extends $.OutputField {
      name: 'interface'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Interface
    }

    export interface interfaceNonNull extends $.OutputField {
      name: 'interfaceNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Interface
    }

    export interface interfaceWithArgs extends $.OutputField {
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

    export interface listInt extends $.OutputField {
      name: 'listInt'
      arguments: {}
      inlineType: [0, [0]]
      namedType: $$NamedTypes.$$Int
    }

    export interface listIntNonNull extends $.OutputField {
      name: 'listIntNonNull'
      arguments: {}
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$Int
    }

    export interface listListInt extends $.OutputField {
      name: 'listListInt'
      arguments: {}
      inlineType: [0, [0, [0]]]
      namedType: $$NamedTypes.$$Int
    }

    export interface listListIntNonNull extends $.OutputField {
      name: 'listListIntNonNull'
      arguments: {}
      inlineType: [1, [1, [1]]]
      namedType: $$NamedTypes.$$Int
    }

    export interface lowerCaseUnion extends $.OutputField {
      name: 'lowerCaseUnion'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$lowerCaseUnion
    }

    export interface $object extends $.OutputField {
      name: 'object'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Object1
    }

    export interface objectList extends $.OutputField {
      name: 'objectList'
      arguments: {}
      inlineType: [0, [1]]
      namedType: $$NamedTypes.$$Object1
    }

    export interface objectListNonNull extends $.OutputField {
      name: 'objectListNonNull'
      arguments: {}
      inlineType: [1, [1]]
      namedType: $$NamedTypes.$$Object1
    }

    export interface objectNested extends $.OutputField {
      name: 'objectNested'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ObjectNested
    }

    export interface objectNonNull extends $.OutputField {
      name: 'objectNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$Object1
    }

    export interface objectWithArgs extends $.OutputField {
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

    export interface result extends $.OutputField {
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

    export interface resultNonNull extends $.OutputField {
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

    export interface $string extends $.OutputField {
      name: 'string'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }

    export interface stringWithArgEnum extends $.OutputField {
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

    export interface stringWithArgInputObject extends $.OutputField {
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

    export interface stringWithArgInputObjectRequired extends $.OutputField {
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
    export interface stringWithArgs extends $.OutputField {
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

    export interface stringWithListArg extends $.OutputField {
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

    export interface stringWithListArgRequired extends $.OutputField {
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

    export interface stringWithRequiredArg extends $.OutputField {
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

    export interface unionFooBar extends $.OutputField {
      name: 'unionFooBar'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$FooBarUnion
    }

    export interface unionFooBarNonNull extends $.OutputField {
      name: 'unionFooBarNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$FooBarUnion
    }

    export interface unionFooBarWithArgs extends $.OutputField {
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

    export interface unionObject extends $.OutputField {
      name: 'unionObject'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ObjectUnion
    }

    export interface unionObjectNonNull extends $.OutputField {
      name: 'unionObjectNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$ObjectUnion
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

  export interface Bar extends $.OutputObject {
    name: 'Bar'
    fields: {
      __typename: Bar.__typename
      int: Bar.int
    }
  }

  export namespace Bar {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Bar'
      }
    }

    export interface int extends $.OutputField {
      name: 'int'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Int
    }
  }

  //                                            DateObject1
  // --------------------------------------------------------------------------------------------------
  //

  export interface DateObject1 extends $.OutputObject {
    name: 'DateObject1'
    fields: {
      __typename: DateObject1.__typename
      date1: DateObject1.date1
    }
  }

  export namespace DateObject1 {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'DateObject1'
      }
    }

    export interface date1 extends $.OutputField {
      name: 'date1'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }
  }

  //                                            DateObject2
  // --------------------------------------------------------------------------------------------------
  //

  export interface DateObject2 extends $.OutputObject {
    name: 'DateObject2'
    fields: {
      __typename: DateObject2.__typename
      date2: DateObject2.date2
    }
  }

  export namespace DateObject2 {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'DateObject2'
      }
    }

    export interface date2 extends $.OutputField {
      name: 'date2'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }
  }

  //                                              ErrorOne
  // --------------------------------------------------------------------------------------------------
  //

  export interface ErrorOne extends $.OutputObject {
    name: 'ErrorOne'
    fields: {
      __typename: ErrorOne.__typename
      infoId: ErrorOne.infoId
      message: ErrorOne.message
    }
  }

  export namespace ErrorOne {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ErrorOne'
      }
    }

    export interface infoId extends $.OutputField {
      name: 'infoId'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface message extends $.OutputField {
      name: 'message'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$String
    }
  }

  //                                              ErrorTwo
  // --------------------------------------------------------------------------------------------------
  //

  export interface ErrorTwo extends $.OutputObject {
    name: 'ErrorTwo'
    fields: {
      __typename: ErrorTwo.__typename
      infoInt: ErrorTwo.infoInt
      message: ErrorTwo.message
    }
  }

  export namespace ErrorTwo {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ErrorTwo'
      }
    }

    export interface infoInt extends $.OutputField {
      name: 'infoInt'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Int
    }

    export interface message extends $.OutputField {
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
  export interface Foo extends $.OutputObject {
    name: 'Foo'
    fields: {
      __typename: Foo.__typename
      id: Foo.id
    }
  }

  export namespace Foo {
    export interface __typename extends $.OutputField {
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
    export interface id extends $.OutputField {
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }
  }

  //                                              Object1
  // --------------------------------------------------------------------------------------------------
  //

  export interface Object1 extends $.OutputObject {
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
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Object1'
      }
    }

    export interface ABCEnum extends $.OutputField {
      name: 'ABCEnum'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ABCEnum
    }

    export interface $boolean extends $.OutputField {
      name: 'boolean'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Boolean
    }

    export interface float extends $.OutputField {
      name: 'float'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Float
    }

    export interface id extends $.OutputField {
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface int extends $.OutputField {
      name: 'int'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Int
    }

    export interface $string extends $.OutputField {
      name: 'string'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$String
    }
  }

  //                                    Object1ImplementingInterface
  // --------------------------------------------------------------------------------------------------
  //

  export interface Object1ImplementingInterface extends $.OutputObject {
    name: 'Object1ImplementingInterface'
    fields: {
      __typename: Object1ImplementingInterface.__typename
      id: Object1ImplementingInterface.id
      int: Object1ImplementingInterface.int
    }
  }

  export namespace Object1ImplementingInterface {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Object1ImplementingInterface'
      }
    }

    export interface id extends $.OutputField {
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface int extends $.OutputField {
      name: 'int'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Int
    }
  }

  //                                    Object2ImplementingInterface
  // --------------------------------------------------------------------------------------------------
  //

  export interface Object2ImplementingInterface extends $.OutputObject {
    name: 'Object2ImplementingInterface'
    fields: {
      __typename: Object2ImplementingInterface.__typename
      boolean: Object2ImplementingInterface.$boolean
      id: Object2ImplementingInterface.id
    }
  }

  export namespace Object2ImplementingInterface {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Object2ImplementingInterface'
      }
    }

    export interface $boolean extends $.OutputField {
      name: 'boolean'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Boolean
    }

    export interface id extends $.OutputField {
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }
  }

  //                                            ObjectNested
  // --------------------------------------------------------------------------------------------------
  //

  export interface ObjectNested extends $.OutputObject {
    name: 'ObjectNested'
    fields: {
      __typename: ObjectNested.__typename
      id: ObjectNested.id
      object: ObjectNested.$object
    }
  }

  export namespace ObjectNested {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ObjectNested'
      }
    }

    export interface id extends $.OutputField {
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface $object extends $.OutputField {
      name: 'object'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$Object1
    }
  }

  //                                            ObjectUnion
  // --------------------------------------------------------------------------------------------------
  //

  export interface ObjectUnion extends $.OutputObject {
    name: 'ObjectUnion'
    fields: {
      __typename: ObjectUnion.__typename
      fooBarUnion: ObjectUnion.fooBarUnion
    }
  }

  export namespace ObjectUnion {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'ObjectUnion'
      }
    }

    export interface fooBarUnion extends $.OutputField {
      name: 'fooBarUnion'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$FooBarUnion
    }
  }

  //                                          lowerCaseObject
  // --------------------------------------------------------------------------------------------------
  //

  export interface lowerCaseObject extends $.OutputObject {
    name: 'lowerCaseObject'
    fields: {
      __typename: lowerCaseObject.__typename
      id: lowerCaseObject.id
    }
  }

  export namespace lowerCaseObject {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'lowerCaseObject'
      }
    }

    export interface id extends $.OutputField {
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }
  }

  //                                          lowerCaseObject2
  // --------------------------------------------------------------------------------------------------
  //

  export interface lowerCaseObject2 extends $.OutputObject {
    name: 'lowerCaseObject2'
    fields: {
      __typename: lowerCaseObject2.__typename
      int: lowerCaseObject2.int
    }
  }

  export namespace lowerCaseObject2 {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'lowerCaseObject2'
      }
    }

    export interface int extends $.OutputField {
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

  export interface InputObject extends $.InputObject {
    name: 'InputObject'
    isAllFieldsNullable: true
    fields: {
      date: InputObject.date
      dateRequired: InputObject.dateRequired
      id: InputObject.id
      idRequired: InputObject.idRequired
    }
  }

  export namespace InputObject {
    export interface date extends $.InputField {
      name: 'date'
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }

    export interface dateRequired extends $.InputField {
      name: 'dateRequired'
      inlineType: [1]
      namedType: $$NamedTypes.$$Date
    }

    export interface id extends $.InputField {
      name: 'id'
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface idRequired extends $.InputField {
      name: 'idRequired'
      inlineType: [1]
      namedType: $$NamedTypes.$$ID
    }
  }

  //                                        InputObjectCircular
  // --------------------------------------------------------------------------------------------------
  //

  export interface InputObjectCircular extends $.InputObject {
    name: 'InputObjectCircular'
    isAllFieldsNullable: true
    fields: {
      circular: InputObjectCircular.circular
      date: InputObjectCircular.date
    }
  }

  export namespace InputObjectCircular {
    export interface circular extends $.InputField {
      name: 'circular'
      inlineType: [0]
      namedType: $$NamedTypes.$$InputObjectCircular
    }

    export interface date extends $.InputField {
      name: 'date'
      inlineType: [0]
      namedType: $$NamedTypes.$$Date
    }
  }

  //                                         InputObjectNested
  // --------------------------------------------------------------------------------------------------
  //

  export interface InputObjectNested extends $.InputObject {
    name: 'InputObjectNested'
    isAllFieldsNullable: true
    fields: {
      InputObject: InputObjectNested.InputObject
    }
  }

  export namespace InputObjectNested {
    export interface InputObject extends $.InputField {
      name: 'InputObject'
      inlineType: [0]
      namedType: $$NamedTypes.$$InputObject
    }
  }

  //                                      InputObjectNestedNonNull
  // --------------------------------------------------------------------------------------------------
  //

  export interface InputObjectNestedNonNull extends $.InputObject {
    name: 'InputObjectNestedNonNull'
    isAllFieldsNullable: false
    fields: {
      InputObject: InputObjectNestedNonNull.InputObject
    }
  }

  export namespace InputObjectNestedNonNull {
    export interface InputObject extends $.InputField {
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

  export interface DateInterface1 extends $.Interface {
    name: 'DateInterface1'
    implementors: [DateObject1]
    implementorsUnion: DateObject1
    implementorsIndex: {
      DateObject1: DateObject1
    }
  }

  //                                               Error
  // --------------------------------------------------------------------------------------------------
  //

  export interface Error extends $.Interface {
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

  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //

  export interface Interface extends $.Interface {
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

  export interface DateUnion extends $.Union {
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
  export interface FooBarUnion extends $.Union {
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

  export interface Result extends $.Union {
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

  export interface lowerCaseUnion extends $.Union {
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
  export interface ABCEnum extends $.Enum {
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

  export interface Case extends $.Enum {
    name: 'Case'
    members: ['ErrorOne', 'ErrorTwo', 'Object1']
    membersUnion:
      | 'ErrorOne'
      | 'ErrorTwo'
      | 'Object1'
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

  export type Date = $Scalar.Date

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

  //                                              Boolean
  // --------------------------------------------------------------------------------------------------
  //

  export type Boolean = $.StandardTypes.Boolean

  //                                               Float
  // --------------------------------------------------------------------------------------------------
  //

  export type Float = $.StandardTypes.Float

  //                                                 ID
  // --------------------------------------------------------------------------------------------------
  //

  export type ID = $.StandardTypes.ID

  //                                                Int
  // --------------------------------------------------------------------------------------------------
  //

  export type Int = $.StandardTypes.Int

  //                                               String
  // --------------------------------------------------------------------------------------------------
  //

  export type String = $.StandardTypes.String

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
    export type $$Mutation = Mutation
    export type $$Query = Query
    export type $$Bar = Bar
    export type $$DateObject1 = DateObject1
    export type $$DateObject2 = DateObject2
    export type $$ErrorOne = ErrorOne
    export type $$ErrorTwo = ErrorTwo
    export type $$Foo = Foo
    export type $$Object1 = Object1
    export type $$Object1ImplementingInterface = Object1ImplementingInterface
    export type $$Object2ImplementingInterface = Object2ImplementingInterface
    export type $$ObjectNested = ObjectNested
    export type $$ObjectUnion = ObjectUnion
    export type $$lowerCaseObject = lowerCaseObject
    export type $$lowerCaseObject2 = lowerCaseObject2
    export type $$InputObject = InputObject
    export type $$InputObjectCircular = InputObjectCircular
    export type $$InputObjectNested = InputObjectNested
    export type $$InputObjectNestedNonNull = InputObjectNestedNonNull
    export type $$DateInterface1 = DateInterface1
    export type $$Error = Error
    export type $$Interface = Interface
    export type $$DateUnion = DateUnion
    export type $$FooBarUnion = FooBarUnion
    export type $$Result = Result
    export type $$lowerCaseUnion = lowerCaseUnion
    export type $$ABCEnum = ABCEnum
    export type $$Case = Case
    export type $$Date = Date
    export type $$Boolean = Boolean
    export type $$Float = Float
    export type $$ID = ID
    export type $$Int = Int
    export type $$String = String
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

export interface Schema<$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty>
  extends $
{
  name: Data.Name
  RootTypesPresent: ['Mutation', 'Query']
  RootUnion: Schema.Mutation | Schema.Query
  Root: {
    Query: Schema.Query
    Mutation: Schema.Mutation
    Subscription: null
  }
  allTypes: {
    Mutation: Schema.Mutation
    Query: Schema.Query
    ABCEnum: Schema.ABCEnum
    Case: Schema.Case
    Bar: Schema.Bar
    DateObject1: Schema.DateObject1
    DateObject2: Schema.DateObject2
    ErrorOne: Schema.ErrorOne
    ErrorTwo: Schema.ErrorTwo
    Foo: Schema.Foo
    Object1: Schema.Object1
    Object1ImplementingInterface: Schema.Object1ImplementingInterface
    Object2ImplementingInterface: Schema.Object2ImplementingInterface
    ObjectNested: Schema.ObjectNested
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
    ObjectNested: Schema.ObjectNested
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
  }
  scalars: $Scalars
  extensions: {
    SchemaErrors: {
      objectNames: 'ErrorOne' | 'ErrorTwo'
    }
  }
}
