import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import * as $$Scalar from './scalar.js'
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

const Boolean = $$Scalar.Boolean

const Float = $$Scalar.Float

const ID = $$Scalar.ID

const Int = $$Scalar.Int

const String = $$Scalar.String

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

const Date = 'Date'

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

const ABCEnum: $$Utilities.SchemaDrivenDataMap.Enum = {
  k: 'enum',
  n: 'ABCEnum',
}

const Case: $$Utilities.SchemaDrivenDataMap.Enum = {
  k: 'enum',
  n: 'Case',
}

const ChildAInterfaceHierarchyMember: $$Utilities.SchemaDrivenDataMap.Enum = {
  k: 'enum',
  n: 'ChildAInterfaceHierarchyMember',
}

const ChildBInterfaceHierarchyMember: $$Utilities.SchemaDrivenDataMap.Enum = {
  k: 'enum',
  n: 'ChildBInterfaceHierarchyMember',
}

const GrandparentInterfaceHierarchyMember: $$Utilities.SchemaDrivenDataMap.Enum = {
  k: 'enum',
  n: 'GrandparentInterfaceHierarchyMember',
}

const ParentInterfaceHierarchyMember: $$Utilities.SchemaDrivenDataMap.Enum = {
  k: 'enum',
  n: 'ParentInterfaceHierarchyMember',
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

const InputObject: $$Utilities.SchemaDrivenDataMap.InputObject = {
  n: 'InputObject',
  fcs: ['date', 'dateRequired'],
  f: {
    date: {
      nt: Date,
    },
    dateRequired: {
      nt: Date,
    },
    id: {},
    idRequired: {},
  },
}

const InputObjectCircular: $$Utilities.SchemaDrivenDataMap.InputObject = {
  n: 'InputObjectCircular',
  fcs: ['circular', 'date'],
  f: {
    circular: {
      // nt: InputObjectCircular, <-- Assigned later to avoid potential circular dependency.
    },
    date: {
      nt: Date,
    },
  },
}

const InputObjectNested: $$Utilities.SchemaDrivenDataMap.InputObject = {
  n: 'InputObjectNested',
  fcs: ['InputObject'],
  f: {
    InputObject: {
      // nt: InputObject, <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const InputObjectNestedNonNull: $$Utilities.SchemaDrivenDataMap.InputObject = {
  n: 'InputObjectNestedNonNull',
  fcs: ['InputObject'],
  f: {
    InputObject: {
      // nt: InputObject, <-- Assigned later to avoid potential circular dependency.
    },
  },
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

const Bar: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    int: {},
  },
}

const DateObject1: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    date1: {
      nt: Date,
    },
  },
}

const DateObject2: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    date2: {
      nt: Date,
    },
  },
}

const ErrorOne: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    infoId: {},
    message: {},
  },
}

const ErrorTwo: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    infoInt: {},
    message: {},
  },
}

const Foo: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    id: {},
  },
}

const Object1: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    ABCEnum: {},
    boolean: {},
    float: {},
    id: {},
    int: {},
    string: {},
  },
}

const Object1ImplementingInterface: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    id: {},
    int: {},
  },
}

const Object2ImplementingInterface: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    boolean: {},
    id: {},
  },
}

const ObjectChildA: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    a: {},
    b: {},
    c1: {},
    me: {},
  },
}

const ObjectChildB: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    a: {},
    b: {},
    c2: {},
    me: {},
  },
}

const ObjectGrandparent: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    a: {},
    me: {},
  },
}

const ObjectNested: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    id: {},
    object: {
      // nt: Object1, <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const ObjectParent: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    a: {},
    b: {},
    me: {},
  },
}

const ObjectUnion: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    fooBarUnion: {
      // nt: FooBarUnion, <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const lowerCaseObject: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    id: {},
  },
}

const lowerCaseObject2: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    int: {},
  },
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

const DateInterface1: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    ...DateObject1.f,
  },
}

const Error: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {},
}

const Interface: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {},
}

const InterfaceChildA: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {},
}

const InterfaceChildB: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {},
}

const InterfaceGrandparent: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {},
}

const InterfaceParent: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {},
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

const DateUnion: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    ...DateObject1.f,
    ...DateObject2.f,
  },
}

const FooBarUnion: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {},
}

const Result: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {},
}

const lowerCaseUnion: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {},
}

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

const Query: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    InputObjectNested: {
      a: {
        input: {
          nt: InputObjectNested,
          it: [0],
        },
      },
    },
    InputObjectNestedNonNull: {
      a: {
        input: {
          nt: InputObjectNestedNonNull,
          it: [1],
        },
      },
    },
    abcEnum: {},
    argInputObjectCircular: {
      a: {
        input: {
          nt: InputObjectCircular,
          it: [0],
        },
      },
    },
    date: {
      nt: Date,
    },
    dateArg: {
      a: {
        date: {
          nt: Date,
          it: [0],
        },
      },
      nt: Date,
    },
    dateArgInputObject: {
      a: {
        input: {
          nt: InputObject,
          it: [0],
        },
      },
      nt: Date,
    },
    dateArgList: {
      a: {
        date: {
          nt: Date,
          it: [0, [1]],
        },
      },
      nt: Date,
    },
    dateArgNonNull: {
      a: {
        date: {
          nt: Date,
          it: [1],
        },
      },
      nt: Date,
    },
    dateArgNonNullList: {
      a: {
        date: {
          nt: Date,
          it: [1, [0]],
        },
      },
      nt: Date,
    },
    dateArgNonNullListNonNull: {
      a: {
        date: {
          nt: Date,
          it: [1, [1]],
        },
      },
      nt: Date,
    },
    dateInterface1: {
      // nt: DateInterface1, <-- Assigned later to avoid potential circular dependency.
    },
    dateList: {
      nt: Date,
    },
    dateListList: {
      nt: Date,
    },
    dateListNonNull: {
      nt: Date,
    },
    dateNonNull: {
      nt: Date,
    },
    dateObject1: {
      // nt: DateObject1, <-- Assigned later to avoid potential circular dependency.
    },
    dateUnion: {
      // nt: DateUnion, <-- Assigned later to avoid potential circular dependency.
    },
    error: {
      a: {
        case: {
          nt: String,
          it: [0],
        },
      },
    },
    id: {},
    idNonNull: {},
    interface: {
      // nt: Interface, <-- Assigned later to avoid potential circular dependency.
    },
    interfaceHierarchyChildA: {
      a: {
        type: {
          nt: ChildAInterfaceHierarchyMember,
          it: [0],
        },
      },
      // nt: InterfaceChildA, <-- Assigned later to avoid potential circular dependency.
    },
    interfaceHierarchyChildB: {
      a: {
        type: {
          nt: ChildBInterfaceHierarchyMember,
          it: [0],
        },
      },
      // nt: InterfaceChildB, <-- Assigned later to avoid potential circular dependency.
    },
    interfaceHierarchyGrandparents: {
      a: {
        type: {
          nt: GrandparentInterfaceHierarchyMember,
          it: [0],
        },
      },
      // nt: InterfaceGrandparent, <-- Assigned later to avoid potential circular dependency.
    },
    interfaceHierarchyParents: {
      a: {
        type: {
          nt: ParentInterfaceHierarchyMember,
          it: [0],
        },
      },
      // nt: InterfaceParent, <-- Assigned later to avoid potential circular dependency.
    },
    interfaceNonNull: {
      // nt: Interface, <-- Assigned later to avoid potential circular dependency.
    },
    interfaceWithArgs: {
      a: {
        id: {
          nt: ID,
          it: [1],
        },
      },
      // nt: Interface, <-- Assigned later to avoid potential circular dependency.
    },
    listInt: {},
    listIntNonNull: {},
    listListInt: {},
    listListIntNonNull: {},
    lowerCaseUnion: {
      // nt: lowerCaseUnion, <-- Assigned later to avoid potential circular dependency.
    },
    object: {
      // nt: Object1, <-- Assigned later to avoid potential circular dependency.
    },
    objectList: {
      // nt: Object1, <-- Assigned later to avoid potential circular dependency.
    },
    objectListNonNull: {
      // nt: Object1, <-- Assigned later to avoid potential circular dependency.
    },
    objectNested: {
      // nt: ObjectNested, <-- Assigned later to avoid potential circular dependency.
    },
    objectNonNull: {
      // nt: Object1, <-- Assigned later to avoid potential circular dependency.
    },
    objectWithArgs: {
      a: {
        boolean: {
          nt: Boolean,
          it: [0],
        },
        float: {
          nt: Float,
          it: [0],
        },
        id: {
          nt: ID,
          it: [0],
        },
        int: {
          nt: Int,
          it: [0],
        },
        string: {
          nt: String,
          it: [0],
        },
      },
      // nt: Object1, <-- Assigned later to avoid potential circular dependency.
    },
    result: {
      a: {
        case: {
          nt: Case,
          it: [1],
        },
      },
      // nt: Result, <-- Assigned later to avoid potential circular dependency.
    },
    resultNonNull: {
      a: {
        case: {
          nt: Case,
          it: [0],
        },
      },
      // nt: Result, <-- Assigned later to avoid potential circular dependency.
    },
    string: {},
    stringWithArgEnum: {
      a: {
        ABCEnum: {
          nt: ABCEnum,
          it: [0],
        },
      },
    },
    stringWithArgInputObject: {
      a: {
        input: {
          nt: InputObject,
          it: [0],
        },
      },
    },
    stringWithArgInputObjectRequired: {
      a: {
        input: {
          nt: InputObject,
          it: [1],
        },
      },
    },
    stringWithArgs: {
      a: {
        boolean: {
          nt: Boolean,
          it: [0],
        },
        float: {
          nt: Float,
          it: [0],
        },
        id: {
          nt: ID,
          it: [0],
        },
        int: {
          nt: Int,
          it: [0],
        },
        string: {
          nt: String,
          it: [0],
        },
      },
    },
    stringWithListArg: {
      a: {
        ints: {
          nt: Int,
          it: [0, [0]],
        },
      },
    },
    stringWithListArgRequired: {
      a: {
        ints: {
          nt: Int,
          it: [1, [1]],
        },
      },
    },
    stringWithRequiredArg: {
      a: {
        string: {
          nt: String,
          it: [1],
        },
      },
    },
    unionFooBar: {
      // nt: FooBarUnion, <-- Assigned later to avoid potential circular dependency.
    },
    unionFooBarNonNull: {
      // nt: FooBarUnion, <-- Assigned later to avoid potential circular dependency.
    },
    unionFooBarWithArgs: {
      a: {
        id: {
          nt: ID,
          it: [0],
        },
      },
      // nt: FooBarUnion, <-- Assigned later to avoid potential circular dependency.
    },
    unionObject: {
      // nt: ObjectUnion, <-- Assigned later to avoid potential circular dependency.
    },
    unionObjectNonNull: {
      // nt: ObjectUnion, <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const Mutation: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    id: {},
    idNonNull: {},
  },
}

//
//
//
//
//
//
// ==================================================================================================
//                                       Reference Assignments
//                                (avoids circular assignment issues)
// ==================================================================================================
//
//
//
//
//
//

InputObjectCircular.f![`circular`]!.nt = InputObjectCircular
InputObjectNested.f![`InputObject`]!.nt = InputObject
InputObjectNestedNonNull.f![`InputObject`]!.nt = InputObject
ObjectNested.f[`object`]!.nt = Object1
ObjectUnion.f[`fooBarUnion`]!.nt = FooBarUnion
Query.f[`dateInterface1`]!.nt = DateInterface1
Query.f[`dateObject1`]!.nt = DateObject1
Query.f[`dateUnion`]!.nt = DateUnion
Query.f[`interface`]!.nt = Interface
Query.f[`interfaceHierarchyChildA`]!.nt = InterfaceChildA
Query.f[`interfaceHierarchyChildB`]!.nt = InterfaceChildB
Query.f[`interfaceHierarchyGrandparents`]!.nt = InterfaceGrandparent
Query.f[`interfaceHierarchyParents`]!.nt = InterfaceParent
Query.f[`interfaceNonNull`]!.nt = Interface
Query.f[`interfaceWithArgs`]!.nt = Interface
Query.f[`lowerCaseUnion`]!.nt = lowerCaseUnion
Query.f[`object`]!.nt = Object1
Query.f[`objectList`]!.nt = Object1
Query.f[`objectListNonNull`]!.nt = Object1
Query.f[`objectNested`]!.nt = ObjectNested
Query.f[`objectNonNull`]!.nt = Object1
Query.f[`objectWithArgs`]!.nt = Object1
Query.f[`result`]!.nt = Result
Query.f[`resultNonNull`]!.nt = Result
Query.f[`unionFooBar`]!.nt = FooBarUnion
Query.f[`unionFooBarNonNull`]!.nt = FooBarUnion
Query.f[`unionFooBarWithArgs`]!.nt = FooBarUnion
Query.f[`unionObject`]!.nt = ObjectUnion
Query.f[`unionObjectNonNull`]!.nt = ObjectUnion

//
//
//
//
//
//
// ==================================================================================================
//                                               Index
// ==================================================================================================
//
//
//
//
//
//

const $schemaDrivenDataMap: $$Utilities.SchemaDrivenDataMap = {
  operations: {
    query: Query,
    mutation: Mutation,
  },
  directives: {},
  types: {
    Boolean,
    Float,
    ID,
    Int,
    String,
    Date,
    ABCEnum,
    Case,
    ChildAInterfaceHierarchyMember,
    ChildBInterfaceHierarchyMember,
    GrandparentInterfaceHierarchyMember,
    ParentInterfaceHierarchyMember,
    InputObject,
    InputObjectCircular,
    InputObjectNested,
    InputObjectNestedNonNull,
    Bar,
    DateObject1,
    DateObject2,
    ErrorOne,
    ErrorTwo,
    Foo,
    Object1,
    Object1ImplementingInterface,
    Object2ImplementingInterface,
    ObjectChildA,
    ObjectChildB,
    ObjectGrandparent,
    ObjectNested,
    ObjectParent,
    ObjectUnion,
    lowerCaseObject,
    lowerCaseObject2,
    DateInterface1,
    Error,
    Interface,
    InterfaceChildA,
    InterfaceChildB,
    InterfaceGrandparent,
    InterfaceParent,
    DateUnion,
    FooBarUnion,
    Result,
    lowerCaseUnion,
    Query,
    Mutation,
  },
}

export { $schemaDrivenDataMap as schemaDrivenDataMap }
