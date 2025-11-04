import type * as $$Utilities from '#graffle/utilities-for-generated'
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

const Date = $$Scalar.Date

const bigint = $$Scalar.bigint

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
  _tag: 'enum',
  name: 'ABCEnum',
}

const Case: $$Utilities.SchemaDrivenDataMap.Enum = {
  _tag: 'enum',
  name: 'Case',
}

const ChildAInterfaceHierarchyMember: $$Utilities.SchemaDrivenDataMap.Enum = {
  _tag: 'enum',
  name: 'ChildAInterfaceHierarchyMember',
}

const ChildBInterfaceHierarchyMember: $$Utilities.SchemaDrivenDataMap.Enum = {
  _tag: 'enum',
  name: 'ChildBInterfaceHierarchyMember',
}

const GrandparentInterfaceHierarchyMember: $$Utilities.SchemaDrivenDataMap.Enum = {
  _tag: 'enum',
  name: 'GrandparentInterfaceHierarchyMember',
}

const ParentInterfaceHierarchyMember: $$Utilities.SchemaDrivenDataMap.Enum = {
  _tag: 'enum',
  name: 'ParentInterfaceHierarchyMember',
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
  _tag: 'inputObject',
  name: 'InputObject',
  fieldsContainingCustomScalars: ['date', 'dateRequired'],
  fields: {
    abcEnum: {
      _tag: 'argumentOrInputField',
    },
    date: {
      _tag: 'argumentOrInputField',
      namedType: Date,
    },
    dateRequired: {
      _tag: 'argumentOrInputField',
      namedType: Date,
    },
    id: {
      _tag: 'argumentOrInputField',
    },
    idRequired: {
      _tag: 'argumentOrInputField',
    },
  },
}

const InputObjectCircular: $$Utilities.SchemaDrivenDataMap.InputObject = {
  _tag: 'inputObject',
  name: 'InputObjectCircular',
  fieldsContainingCustomScalars: ['circular', 'date'],
  fields: {
    circular: {
      _tag: 'argumentOrInputField',
      // namedType: InputObjectCircular <-- Assigned later to avoid potential circular dependency.
    },
    date: {
      _tag: 'argumentOrInputField',
      namedType: Date,
    },
  },
}

const InputObjectEnum: $$Utilities.SchemaDrivenDataMap.InputObject = {
  _tag: 'inputObject',
  name: 'InputObjectEnum',
  fields: {
    abcEnum: {
      _tag: 'argumentOrInputField',
    },
  },
}

const InputObjectNested: $$Utilities.SchemaDrivenDataMap.InputObject = {
  _tag: 'inputObject',
  name: 'InputObjectNested',
  fieldsContainingCustomScalars: ['InputObject'],
  fields: {
    InputObject: {
      _tag: 'argumentOrInputField',
      // namedType: InputObject <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const InputObjectNestedNonNull: $$Utilities.SchemaDrivenDataMap.InputObject = {
  _tag: 'inputObject',
  name: 'InputObjectNestedNonNull',
  fieldsContainingCustomScalars: ['InputObject'],
  fields: {
    InputObject: {
      _tag: 'argumentOrInputField',
      // namedType: InputObject <-- Assigned later to avoid potential circular dependency.
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
  _tag: 'outputObject',
  fields: {
    int: {
      _tag: 'outputField',
    },
  },
}

const DateObject1: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    date1: {
      _tag: 'outputField',
      namedType: Date,
    },
  },
}

const DateObject2: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    date2: {
      _tag: 'outputField',
      namedType: Date,
    },
  },
}

const ErrorOne: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    infoId: {
      _tag: 'outputField',
    },
    message: {
      _tag: 'outputField',
    },
  },
}

const ErrorTwo: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    infoInt: {
      _tag: 'outputField',
    },
    message: {
      _tag: 'outputField',
    },
  },
}

const Foo: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    id: {
      _tag: 'outputField',
    },
  },
}

const Object1: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    ABCEnum: {
      _tag: 'outputField',
    },
    boolean: {
      _tag: 'outputField',
    },
    float: {
      _tag: 'outputField',
    },
    id: {
      _tag: 'outputField',
    },
    int: {
      _tag: 'outputField',
    },
    string: {
      _tag: 'outputField',
    },
  },
}

const Object1ImplementingInterface: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    id: {
      _tag: 'outputField',
    },
    int: {
      _tag: 'outputField',
    },
  },
}

const Object2ImplementingInterface: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    boolean: {
      _tag: 'outputField',
    },
    id: {
      _tag: 'outputField',
    },
  },
}

const ObjectChildA: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    a: {
      _tag: 'outputField',
    },
    b: {
      _tag: 'outputField',
    },
    c1: {
      _tag: 'outputField',
    },
    me: {
      _tag: 'outputField',
    },
  },
}

const ObjectChildB: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    a: {
      _tag: 'outputField',
    },
    b: {
      _tag: 'outputField',
    },
    c2: {
      _tag: 'outputField',
    },
    me: {
      _tag: 'outputField',
    },
  },
}

const ObjectGrandparent: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    a: {
      _tag: 'outputField',
    },
    me: {
      _tag: 'outputField',
    },
  },
}

const ObjectNested: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    id: {
      _tag: 'outputField',
    },
    object: {
      _tag: 'outputField',
      // namedType: Object1 <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const ObjectNestedWithArgs: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    id: {
      _tag: 'outputField',
      arguments: {
        filter: {
          _tag: 'argumentOrInputField',
          namedType: ID,
          inlineType: [0],
        },
      },
    },
    object: {
      _tag: 'outputField',
      arguments: {
        boolean: {
          _tag: 'argumentOrInputField',
          namedType: Boolean,
          inlineType: [0],
        },
        float: {
          _tag: 'argumentOrInputField',
          namedType: Float,
          inlineType: [0],
        },
        int: {
          _tag: 'argumentOrInputField',
          namedType: Int,
          inlineType: [0],
        },
        string: {
          _tag: 'argumentOrInputField',
          namedType: String,
          inlineType: [0],
        },
      },
      // namedType: Object1 <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const ObjectParent: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    a: {
      _tag: 'outputField',
    },
    b: {
      _tag: 'outputField',
    },
    me: {
      _tag: 'outputField',
    },
  },
}

const ObjectUnion: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    fooBarUnion: {
      _tag: 'outputField',
      // namedType: FooBarUnion <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const lowerCaseObject: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    id: {
      _tag: 'outputField',
    },
  },
}

const lowerCaseObject2: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    int: {
      _tag: 'outputField',
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
//                                             Interface
// ==================================================================================================
//
//
//
//
//
//

const DateInterface1: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    ...DateObject1.fields,
  },
}

const Error: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {},
}

const Interface: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {},
}

const InterfaceChildA: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {},
}

const InterfaceChildB: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {},
}

const InterfaceGrandparent: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {},
}

const InterfaceParent: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {},
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
  _tag: 'outputObject',
  fields: {
    ...DateObject1.fields,
    ...DateObject2.fields,
  },
}

const FooBarUnion: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {},
}

const Result: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {},
}

const lowerCaseUnion: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {},
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
  _tag: 'outputObject',
  fields: {
    InputObjectNested: {
      _tag: 'outputField',
      arguments: {
        input: {
          _tag: 'argumentOrInputField',
          namedType: InputObjectNested,
          inlineType: [0],
        },
      },
    },
    InputObjectNestedNonNull: {
      _tag: 'outputField',
      arguments: {
        input: {
          _tag: 'argumentOrInputField',
          namedType: InputObjectNestedNonNull,
          inlineType: [1],
        },
      },
    },
    abcEnum: {
      _tag: 'outputField',
    },
    argInputObjectCircular: {
      _tag: 'outputField',
      arguments: {
        input: {
          _tag: 'argumentOrInputField',
          namedType: InputObjectCircular,
          inlineType: [0],
        },
      },
    },
    bigintField: {
      _tag: 'outputField',
      namedType: bigint,
    },
    bigintFieldNonNull: {
      _tag: 'outputField',
      namedType: bigint,
    },
    date: {
      _tag: 'outputField',
      namedType: Date,
    },
    dateArg: {
      _tag: 'outputField',
      arguments: {
        date: {
          _tag: 'argumentOrInputField',
          namedType: Date,
          inlineType: [0],
        },
      },
      namedType: Date,
    },
    dateArgInputObject: {
      _tag: 'outputField',
      arguments: {
        input: {
          _tag: 'argumentOrInputField',
          namedType: InputObject,
          inlineType: [0],
        },
      },
      namedType: Date,
    },
    dateArgList: {
      _tag: 'outputField',
      arguments: {
        date: {
          _tag: 'argumentOrInputField',
          namedType: Date,
          inlineType: [0, [1]],
        },
      },
      namedType: Date,
    },
    dateArgNonNull: {
      _tag: 'outputField',
      arguments: {
        date: {
          _tag: 'argumentOrInputField',
          namedType: Date,
          inlineType: [1],
        },
      },
      namedType: Date,
    },
    dateArgNonNullList: {
      _tag: 'outputField',
      arguments: {
        date: {
          _tag: 'argumentOrInputField',
          namedType: Date,
          inlineType: [1, [0]],
        },
      },
      namedType: Date,
    },
    dateArgNonNullListNonNull: {
      _tag: 'outputField',
      arguments: {
        date: {
          _tag: 'argumentOrInputField',
          namedType: Date,
          inlineType: [1, [1]],
        },
      },
      namedType: Date,
    },
    dateInterface1: {
      _tag: 'outputField',
      // namedType: DateInterface1 <-- Assigned later to avoid potential circular dependency.
    },
    dateList: {
      _tag: 'outputField',
      namedType: Date,
    },
    dateListList: {
      _tag: 'outputField',
      namedType: Date,
    },
    dateListNonNull: {
      _tag: 'outputField',
      namedType: Date,
    },
    dateNonNull: {
      _tag: 'outputField',
      namedType: Date,
    },
    dateObject1: {
      _tag: 'outputField',
      // namedType: DateObject1 <-- Assigned later to avoid potential circular dependency.
    },
    dateUnion: {
      _tag: 'outputField',
      // namedType: DateUnion <-- Assigned later to avoid potential circular dependency.
    },
    error: {
      _tag: 'outputField',
      arguments: {
        case: {
          _tag: 'argumentOrInputField',
          namedType: String,
          inlineType: [0],
        },
      },
    },
    id: {
      _tag: 'outputField',
    },
    idNonNull: {
      _tag: 'outputField',
    },
    interface: {
      _tag: 'outputField',
      // namedType: Interface <-- Assigned later to avoid potential circular dependency.
    },
    interfaceHierarchyChildA: {
      _tag: 'outputField',
      arguments: {
        type: {
          _tag: 'argumentOrInputField',
          namedType: ChildAInterfaceHierarchyMember,
          inlineType: [0],
        },
      },
      // namedType: InterfaceChildA <-- Assigned later to avoid potential circular dependency.
    },
    interfaceHierarchyChildB: {
      _tag: 'outputField',
      arguments: {
        type: {
          _tag: 'argumentOrInputField',
          namedType: ChildBInterfaceHierarchyMember,
          inlineType: [0],
        },
      },
      // namedType: InterfaceChildB <-- Assigned later to avoid potential circular dependency.
    },
    interfaceHierarchyGrandparents: {
      _tag: 'outputField',
      arguments: {
        type: {
          _tag: 'argumentOrInputField',
          namedType: GrandparentInterfaceHierarchyMember,
          inlineType: [0],
        },
      },
      // namedType: InterfaceGrandparent <-- Assigned later to avoid potential circular dependency.
    },
    interfaceHierarchyParents: {
      _tag: 'outputField',
      arguments: {
        type: {
          _tag: 'argumentOrInputField',
          namedType: ParentInterfaceHierarchyMember,
          inlineType: [0],
        },
      },
      // namedType: InterfaceParent <-- Assigned later to avoid potential circular dependency.
    },
    interfaceNonNull: {
      _tag: 'outputField',
      // namedType: Interface <-- Assigned later to avoid potential circular dependency.
    },
    interfaceWithArgs: {
      _tag: 'outputField',
      arguments: {
        id: {
          _tag: 'argumentOrInputField',
          namedType: ID,
          inlineType: [1],
        },
      },
      // namedType: Interface <-- Assigned later to avoid potential circular dependency.
    },
    listInt: {
      _tag: 'outputField',
    },
    listIntNonNull: {
      _tag: 'outputField',
    },
    listListInt: {
      _tag: 'outputField',
    },
    listListIntNonNull: {
      _tag: 'outputField',
    },
    lowerCaseUnion: {
      _tag: 'outputField',
      // namedType: lowerCaseUnion <-- Assigned later to avoid potential circular dependency.
    },
    object: {
      _tag: 'outputField',
      // namedType: Object1 <-- Assigned later to avoid potential circular dependency.
    },
    objectList: {
      _tag: 'outputField',
      // namedType: Object1 <-- Assigned later to avoid potential circular dependency.
    },
    objectListNonNull: {
      _tag: 'outputField',
      // namedType: Object1 <-- Assigned later to avoid potential circular dependency.
    },
    objectNested: {
      _tag: 'outputField',
      // namedType: ObjectNested <-- Assigned later to avoid potential circular dependency.
    },
    objectNestedWithArgs: {
      _tag: 'outputField',
      // namedType: ObjectNestedWithArgs <-- Assigned later to avoid potential circular dependency.
    },
    objectNonNull: {
      _tag: 'outputField',
      // namedType: Object1 <-- Assigned later to avoid potential circular dependency.
    },
    objectWithArgs: {
      _tag: 'outputField',
      arguments: {
        boolean: {
          _tag: 'argumentOrInputField',
          namedType: Boolean,
          inlineType: [0],
        },
        float: {
          _tag: 'argumentOrInputField',
          namedType: Float,
          inlineType: [0],
        },
        id: {
          _tag: 'argumentOrInputField',
          namedType: ID,
          inlineType: [0],
        },
        int: {
          _tag: 'argumentOrInputField',
          namedType: Int,
          inlineType: [0],
        },
        string: {
          _tag: 'argumentOrInputField',
          namedType: String,
          inlineType: [0],
        },
      },
      // namedType: Object1 <-- Assigned later to avoid potential circular dependency.
    },
    result: {
      _tag: 'outputField',
      arguments: {
        case: {
          _tag: 'argumentOrInputField',
          namedType: Case,
          inlineType: [1],
        },
      },
      // namedType: Result <-- Assigned later to avoid potential circular dependency.
    },
    resultNonNull: {
      _tag: 'outputField',
      arguments: {
        case: {
          _tag: 'argumentOrInputField',
          namedType: Case,
          inlineType: [0],
        },
      },
      // namedType: Result <-- Assigned later to avoid potential circular dependency.
    },
    string: {
      _tag: 'outputField',
    },
    stringWithArgEnum: {
      _tag: 'outputField',
      arguments: {
        ABCEnum: {
          _tag: 'argumentOrInputField',
          namedType: ABCEnum,
          inlineType: [0],
        },
      },
    },
    stringWithArgInputObject: {
      _tag: 'outputField',
      arguments: {
        input: {
          _tag: 'argumentOrInputField',
          namedType: InputObject,
          inlineType: [0],
        },
      },
    },
    stringWithArgInputObjectEnum: {
      _tag: 'outputField',
      arguments: {
        input: {
          _tag: 'argumentOrInputField',
          namedType: InputObjectEnum,
          inlineType: [1],
        },
      },
    },
    stringWithArgInputObjectRequired: {
      _tag: 'outputField',
      arguments: {
        input: {
          _tag: 'argumentOrInputField',
          namedType: InputObject,
          inlineType: [1],
        },
      },
    },
    stringWithArgs: {
      _tag: 'outputField',
      arguments: {
        boolean: {
          _tag: 'argumentOrInputField',
          namedType: Boolean,
          inlineType: [0],
        },
        float: {
          _tag: 'argumentOrInputField',
          namedType: Float,
          inlineType: [0],
        },
        id: {
          _tag: 'argumentOrInputField',
          namedType: ID,
          inlineType: [0],
        },
        int: {
          _tag: 'argumentOrInputField',
          namedType: Int,
          inlineType: [0],
        },
        string: {
          _tag: 'argumentOrInputField',
          namedType: String,
          inlineType: [0],
        },
      },
    },
    stringWithListArg: {
      _tag: 'outputField',
      arguments: {
        ints: {
          _tag: 'argumentOrInputField',
          namedType: Int,
          inlineType: [0, [0]],
        },
      },
    },
    stringWithListArgRequired: {
      _tag: 'outputField',
      arguments: {
        ints: {
          _tag: 'argumentOrInputField',
          namedType: Int,
          inlineType: [1, [1]],
        },
      },
    },
    stringWithRequiredArg: {
      _tag: 'outputField',
      arguments: {
        string: {
          _tag: 'argumentOrInputField',
          namedType: String,
          inlineType: [1],
        },
      },
    },
    unionFooBar: {
      _tag: 'outputField',
      // namedType: FooBarUnion <-- Assigned later to avoid potential circular dependency.
    },
    unionFooBarNonNull: {
      _tag: 'outputField',
      // namedType: FooBarUnion <-- Assigned later to avoid potential circular dependency.
    },
    unionFooBarWithArgs: {
      _tag: 'outputField',
      arguments: {
        id: {
          _tag: 'argumentOrInputField',
          namedType: ID,
          inlineType: [0],
        },
      },
      // namedType: FooBarUnion <-- Assigned later to avoid potential circular dependency.
    },
    unionObject: {
      _tag: 'outputField',
      // namedType: ObjectUnion <-- Assigned later to avoid potential circular dependency.
    },
    unionObjectNonNull: {
      _tag: 'outputField',
      // namedType: ObjectUnion <-- Assigned later to avoid potential circular dependency.
    },
  },
}

const Mutation: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  _tag: 'outputObject',
  fields: {
    id: {
      _tag: 'outputField',
    },
    idNonNull: {
      _tag: 'outputField',
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
//                                       Reference Assignments
//                                (avoids circular assignment issues)
// ==================================================================================================
//
//
//
//
//
//

// TODO: Contribute helper to Utilities to cast readonly data to mutable at type level.
// These assignments are needed to avoid circular references during module initialization.
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
InputObjectCircular.fields![`circular`]!.namedType = InputObjectCircular
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
InputObjectNested.fields![`InputObject`]!.namedType = InputObject
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
InputObjectNestedNonNull.fields![`InputObject`]!.namedType = InputObject
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
ObjectNested.fields[`object`]!.namedType = Object1
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
ObjectNestedWithArgs.fields[`object`]!.namedType = Object1
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
ObjectUnion.fields[`fooBarUnion`]!.namedType = FooBarUnion
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`dateInterface1`]!.namedType = DateInterface1
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`dateObject1`]!.namedType = DateObject1
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`dateUnion`]!.namedType = DateUnion
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`interface`]!.namedType = Interface
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`interfaceHierarchyChildA`]!.namedType = InterfaceChildA
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`interfaceHierarchyChildB`]!.namedType = InterfaceChildB
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`interfaceHierarchyGrandparents`]!.namedType = InterfaceGrandparent
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`interfaceHierarchyParents`]!.namedType = InterfaceParent
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`interfaceNonNull`]!.namedType = Interface
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`interfaceWithArgs`]!.namedType = Interface
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`lowerCaseUnion`]!.namedType = lowerCaseUnion
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`object`]!.namedType = Object1
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`objectList`]!.namedType = Object1
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`objectListNonNull`]!.namedType = Object1
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`objectNested`]!.namedType = ObjectNested
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`objectNestedWithArgs`]!.namedType = ObjectNestedWithArgs
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`objectNonNull`]!.namedType = Object1
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`objectWithArgs`]!.namedType = Object1
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`result`]!.namedType = Result
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`resultNonNull`]!.namedType = Result
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`unionFooBar`]!.namedType = FooBarUnion
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`unionFooBarNonNull`]!.namedType = FooBarUnion
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`unionFooBarWithArgs`]!.namedType = FooBarUnion
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`unionObject`]!.namedType = ObjectUnion
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`unionObjectNonNull`]!.namedType = ObjectUnion

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
  inputTypes: {
    Boolean,
    Float,
    ID,
    Int,
    String,
    Date,
    bigint,
    ABCEnum,
    Case,
    ChildAInterfaceHierarchyMember,
    ChildBInterfaceHierarchyMember,
    GrandparentInterfaceHierarchyMember,
    ParentInterfaceHierarchyMember,
    InputObject,
    InputObjectCircular,
    InputObjectEnum,
    InputObjectNested,
    InputObjectNestedNonNull,
  },
  outputTypes: {
    Boolean,
    Float,
    ID,
    Int,
    String,
    Date,
    bigint,
    ABCEnum,
    Case,
    ChildAInterfaceHierarchyMember,
    ChildBInterfaceHierarchyMember,
    GrandparentInterfaceHierarchyMember,
    ParentInterfaceHierarchyMember,
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
    ObjectNestedWithArgs,
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
