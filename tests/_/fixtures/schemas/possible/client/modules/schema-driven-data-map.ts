import type * as $$Utilities from '#graffle/utilities-for-generated'
import * as $$Scalar from './scalar.js'
import { Schema as $$Schema } from './schema/_.js'

//
//
//
//
//
//
// ==================================================================================================
//                                               Types
// ==================================================================================================
//
//
//
//
//
//

interface ABCEnum extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'ABCEnum'
  readonly type: $$Schema.ABCEnum['members']
}

interface Case extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'Case'
  readonly type: $$Schema.Case['members']
}

interface ChildAInterfaceHierarchyMember extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'ChildAInterfaceHierarchyMember'
  readonly type: $$Schema.ChildAInterfaceHierarchyMember['members']
}

interface ChildBInterfaceHierarchyMember extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'ChildBInterfaceHierarchyMember'
  readonly type: $$Schema.ChildBInterfaceHierarchyMember['members']
}

interface GrandparentInterfaceHierarchyMember extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'GrandparentInterfaceHierarchyMember'
  readonly type: $$Schema.GrandparentInterfaceHierarchyMember['members']
}

interface ParentInterfaceHierarchyMember extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'ParentInterfaceHierarchyMember'
  readonly type: $$Schema.ParentInterfaceHierarchyMember['members']
}

interface ReservedWordsEnum extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'ReservedWordsEnum'
  readonly type: $$Schema.ReservedWordsEnum['members']
}

interface InputObject extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly _tag: 'inputObject'
  readonly name: 'InputObject'
  readonly fieldsContainingCustomScalars: ['date', 'dateRequired']
  readonly fields: {
    readonly abcEnum: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: ABCEnum
      readonly inlineType: [0]
    }
    readonly date: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.Date
      readonly inlineType: [0]
    }
    readonly dateRequired: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.Date
      readonly inlineType: [1]
    }
    readonly id: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.ID
      readonly inlineType: [0]
    }
    readonly idRequired: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.ID
      readonly inlineType: [1]
    }
  }
  readonly type: $$Schema.InputObject['type']
}

interface InputObjectCircular extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly _tag: 'inputObject'
  readonly name: 'InputObjectCircular'
  readonly fieldsContainingCustomScalars: ['circular', 'date']
  readonly fields: {
    readonly circular: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: InputObjectCircular
      readonly inlineType: [0]
    }
    readonly date: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.Date
      readonly inlineType: [0]
    }
  }
  readonly type: $$Schema.InputObjectCircular['type']
}

interface InputObjectEnum extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly _tag: 'inputObject'
  readonly name: 'InputObjectEnum'
  readonly fields: {
    readonly abcEnum: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: ABCEnum
      readonly inlineType: [0]
    }
  }
  readonly type: $$Schema.InputObjectEnum['type']
}

interface InputObjectNested extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly _tag: 'inputObject'
  readonly name: 'InputObjectNested'
  readonly fieldsContainingCustomScalars: ['InputObject']
  readonly fields: {
    readonly InputObject: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: InputObject
      readonly inlineType: [0]
    }
  }
  readonly type: $$Schema.InputObjectNested['type']
}

interface InputObjectNestedNonNull extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly _tag: 'inputObject'
  readonly name: 'InputObjectNestedNonNull'
  readonly fieldsContainingCustomScalars: ['InputObject']
  readonly fields: {
    readonly InputObject: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: InputObject
      readonly inlineType: [1]
    }
  }
  readonly type: $$Schema.InputObjectNestedNonNull['type']
}

interface Bar extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly int: {
      readonly _tag: 'outputField'
    }
  }
}

interface DateObject1 extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly date1: {
      readonly _tag: 'outputField'
      readonly namedType: $$Scalar.Date
    }
  }
}

interface DateObject2 extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly date2: {
      readonly _tag: 'outputField'
      readonly namedType: $$Scalar.Date
    }
  }
}

interface ErrorOne extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly infoId: {
      readonly _tag: 'outputField'
    }
    readonly message: {
      readonly _tag: 'outputField'
    }
  }
}

interface ErrorTwo extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly infoInt: {
      readonly _tag: 'outputField'
    }
    readonly message: {
      readonly _tag: 'outputField'
    }
  }
}

interface Foo extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly id: {
      readonly _tag: 'outputField'
    }
  }
}

interface Object1 extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly ABCEnum: {
      readonly _tag: 'outputField'
    }
    readonly boolean: {
      readonly _tag: 'outputField'
    }
    readonly float: {
      readonly _tag: 'outputField'
    }
    readonly id: {
      readonly _tag: 'outputField'
    }
    readonly int: {
      readonly _tag: 'outputField'
    }
    readonly string: {
      readonly _tag: 'outputField'
    }
  }
}

interface Object1ImplementingInterface extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly id: {
      readonly _tag: 'outputField'
    }
    readonly int: {
      readonly _tag: 'outputField'
    }
  }
}

interface Object2ImplementingInterface extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly boolean: {
      readonly _tag: 'outputField'
    }
    readonly id: {
      readonly _tag: 'outputField'
    }
  }
}

interface ObjectChildA extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly a: {
      readonly _tag: 'outputField'
    }
    readonly b: {
      readonly _tag: 'outputField'
    }
    readonly c1: {
      readonly _tag: 'outputField'
    }
    readonly me: {
      readonly _tag: 'outputField'
    }
  }
}

interface ObjectChildB extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly a: {
      readonly _tag: 'outputField'
    }
    readonly b: {
      readonly _tag: 'outputField'
    }
    readonly c2: {
      readonly _tag: 'outputField'
    }
    readonly me: {
      readonly _tag: 'outputField'
    }
  }
}

interface ObjectGrandparent extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly a: {
      readonly _tag: 'outputField'
    }
    readonly me: {
      readonly _tag: 'outputField'
    }
  }
}

interface ObjectNested extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly id: {
      readonly _tag: 'outputField'
    }
    readonly object: {
      readonly _tag: 'outputField'
      readonly namedType: Object1
    }
  }
}

interface ObjectNestedWithArgs extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly id: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly filter: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.ID
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        filter?: $$Scalar.ID['codec']['_typeDecoded'] | null | undefined
      }
    }
    readonly object: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly boolean: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Boolean
          readonly inlineType: [0]
        }
        readonly float: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Float
          readonly inlineType: [0]
        }
        readonly int: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [0]
        }
        readonly string: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        boolean?: $$Scalar.Boolean['codec']['_typeDecoded'] | null | undefined
        float?: $$Scalar.Float['codec']['_typeDecoded'] | null | undefined
        int?: $$Scalar.Int['codec']['_typeDecoded'] | null | undefined
        string?: $$Scalar.String['codec']['_typeDecoded'] | null | undefined
      }
      readonly namedType: Object1
    }
  }
}

interface ObjectParent extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly a: {
      readonly _tag: 'outputField'
    }
    readonly b: {
      readonly _tag: 'outputField'
    }
    readonly me: {
      readonly _tag: 'outputField'
    }
  }
}

interface ObjectUnion extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly fooBarUnion: {
      readonly _tag: 'outputField'
      readonly namedType: FooBarUnion
    }
  }
}

interface lowerCaseObject extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly id: {
      readonly _tag: 'outputField'
    }
  }
}

interface lowerCaseObject2 extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly int: {
      readonly _tag: 'outputField'
    }
  }
}

interface DateInterface1 extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface Error extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface Interface extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface InterfaceChildA extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface InterfaceChildB extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface InterfaceGrandparent extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface InterfaceParent extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface DateUnion extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface FooBarUnion extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface Result extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface lowerCaseUnion extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject['fields']
}

interface Query extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly InputObjectNested: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly input: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: InputObjectNested
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        input?: SchemaDrivenDataMap['inputTypes']['InputObjectNested']['type'] | null | undefined
      }
    }
    readonly InputObjectNestedNonNull: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly input: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: InputObjectNestedNonNull
          readonly inlineType: [1]
        }
      }
      readonly $argumentsType: {
        input: SchemaDrivenDataMap['inputTypes']['InputObjectNestedNonNull']['type']
      }
    }
    readonly abcEnum: {
      readonly _tag: 'outputField'
    }
    readonly argInputObjectCircular: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly input: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: InputObjectCircular
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        input?: SchemaDrivenDataMap['inputTypes']['InputObjectCircular']['type'] | null | undefined
      }
    }
    readonly bigintField: {
      readonly _tag: 'outputField'
      readonly namedType: $$Scalar.bigint
    }
    readonly bigintFieldNonNull: {
      readonly _tag: 'outputField'
      readonly namedType: $$Scalar.bigint
    }
    readonly date: {
      readonly _tag: 'outputField'
      readonly namedType: $$Scalar.Date
    }
    readonly dateArg: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly date: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Date
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        date?: $$Scalar.Date['codec']['_typeDecoded'] | null | undefined
      }
      readonly namedType: $$Scalar.Date
    }
    readonly dateArgInputObject: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly input: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: InputObject
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        input?: SchemaDrivenDataMap['inputTypes']['InputObject']['type'] | null | undefined
      }
      readonly namedType: $$Scalar.Date
    }
    readonly dateArgList: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly date: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Date
          readonly inlineType: [0, [1]]
        }
      }
      readonly $argumentsType: {
        date?: readonly ($$Scalar.Date['codec']['_typeDecoded'])[] | null | undefined
      }
      readonly namedType: $$Scalar.Date
    }
    readonly dateArgNonNull: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly date: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Date
          readonly inlineType: [1]
        }
      }
      readonly $argumentsType: {
        date: $$Scalar.Date['codec']['_typeDecoded']
      }
      readonly namedType: $$Scalar.Date
    }
    readonly dateArgNonNullList: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly date: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Date
          readonly inlineType: [1, [0]]
        }
      }
      readonly $argumentsType: {
        date: readonly ($$Scalar.Date['codec']['_typeDecoded'])[]
      }
      readonly namedType: $$Scalar.Date
    }
    readonly dateArgNonNullListNonNull: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly date: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Date
          readonly inlineType: [1, [1]]
        }
      }
      readonly $argumentsType: {
        date: readonly ($$Scalar.Date['codec']['_typeDecoded'])[]
      }
      readonly namedType: $$Scalar.Date
    }
    readonly dateInterface1: {
      readonly _tag: 'outputField'
      readonly namedType: DateInterface1
    }
    readonly dateList: {
      readonly _tag: 'outputField'
      readonly namedType: $$Scalar.Date
    }
    readonly dateListList: {
      readonly _tag: 'outputField'
      readonly namedType: $$Scalar.Date
    }
    readonly dateListNonNull: {
      readonly _tag: 'outputField'
      readonly namedType: $$Scalar.Date
    }
    readonly dateNonNull: {
      readonly _tag: 'outputField'
      readonly namedType: $$Scalar.Date
    }
    readonly dateObject1: {
      readonly _tag: 'outputField'
      readonly namedType: DateObject1
    }
    readonly dateUnion: {
      readonly _tag: 'outputField'
      readonly namedType: DateUnion
    }
    readonly error: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly case: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        case?: $$Scalar.String['codec']['_typeDecoded'] | null | undefined
      }
    }
    readonly id: {
      readonly _tag: 'outputField'
    }
    readonly idNonNull: {
      readonly _tag: 'outputField'
    }
    readonly interface: {
      readonly _tag: 'outputField'
      readonly namedType: Interface
    }
    readonly interfaceHierarchyChildA: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly type: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: ChildAInterfaceHierarchyMember
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        type?: ChildAInterfaceHierarchyMember['type'] | null | undefined
      }
      readonly namedType: InterfaceChildA
    }
    readonly interfaceHierarchyChildB: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly type: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: ChildBInterfaceHierarchyMember
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        type?: ChildBInterfaceHierarchyMember['type'] | null | undefined
      }
      readonly namedType: InterfaceChildB
    }
    readonly interfaceHierarchyGrandparents: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly type: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: GrandparentInterfaceHierarchyMember
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        type?: GrandparentInterfaceHierarchyMember['type'] | null | undefined
      }
      readonly namedType: InterfaceGrandparent
    }
    readonly interfaceHierarchyParents: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly type: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: ParentInterfaceHierarchyMember
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        type?: ParentInterfaceHierarchyMember['type'] | null | undefined
      }
      readonly namedType: InterfaceParent
    }
    readonly interfaceNonNull: {
      readonly _tag: 'outputField'
      readonly namedType: Interface
    }
    readonly interfaceWithArgs: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly id: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.ID
          readonly inlineType: [1]
        }
      }
      readonly $argumentsType: {
        id: $$Scalar.ID['codec']['_typeDecoded']
      }
      readonly namedType: Interface
    }
    readonly listInt: {
      readonly _tag: 'outputField'
    }
    readonly listIntNonNull: {
      readonly _tag: 'outputField'
    }
    readonly listListInt: {
      readonly _tag: 'outputField'
    }
    readonly listListIntNonNull: {
      readonly _tag: 'outputField'
    }
    readonly lowerCaseUnion: {
      readonly _tag: 'outputField'
      readonly namedType: lowerCaseUnion
    }
    readonly object: {
      readonly _tag: 'outputField'
      readonly namedType: Object1
    }
    readonly objectList: {
      readonly _tag: 'outputField'
      readonly namedType: Object1
    }
    readonly objectListNonNull: {
      readonly _tag: 'outputField'
      readonly namedType: Object1
    }
    readonly objectNested: {
      readonly _tag: 'outputField'
      readonly namedType: ObjectNested
    }
    readonly objectNestedWithArgs: {
      readonly _tag: 'outputField'
      readonly argumentsDescendant: ObjectNestedWithArgs
      readonly namedType: ObjectNestedWithArgs
    }
    readonly objectNonNull: {
      readonly _tag: 'outputField'
      readonly namedType: Object1
    }
    readonly objectWithArgs: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly boolean: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Boolean
          readonly inlineType: [0]
        }
        readonly float: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Float
          readonly inlineType: [0]
        }
        readonly id: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.ID
          readonly inlineType: [0]
        }
        readonly int: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [0]
        }
        readonly string: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        boolean?: $$Scalar.Boolean['codec']['_typeDecoded'] | null | undefined
        float?: $$Scalar.Float['codec']['_typeDecoded'] | null | undefined
        id?: $$Scalar.ID['codec']['_typeDecoded'] | null | undefined
        int?: $$Scalar.Int['codec']['_typeDecoded'] | null | undefined
        string?: $$Scalar.String['codec']['_typeDecoded'] | null | undefined
      }
      readonly namedType: Object1
    }
    readonly reservedWordsEnum: {
      readonly _tag: 'outputField'
    }
    readonly result: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly case: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: Case
          readonly inlineType: [1]
        }
      }
      readonly $argumentsType: {
        case: Case['type']
      }
      readonly namedType: Result
    }
    readonly resultNonNull: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly case: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: Case
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        case?: Case['type'] | null | undefined
      }
      readonly namedType: Result
    }
    readonly string: {
      readonly _tag: 'outputField'
    }
    readonly stringWithArgEnum: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly ABCEnum: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: ABCEnum
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        ABCEnum?: ABCEnum['type'] | null | undefined
      }
    }
    readonly stringWithArgInputObject: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly input: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: InputObject
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        input?: SchemaDrivenDataMap['inputTypes']['InputObject']['type'] | null | undefined
      }
    }
    readonly stringWithArgInputObjectEnum: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly input: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: InputObjectEnum
          readonly inlineType: [1]
        }
      }
      readonly $argumentsType: {
        input: SchemaDrivenDataMap['inputTypes']['InputObjectEnum']['type']
      }
    }
    readonly stringWithArgInputObjectRequired: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly input: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: InputObject
          readonly inlineType: [1]
        }
      }
      readonly $argumentsType: {
        input: SchemaDrivenDataMap['inputTypes']['InputObject']['type']
      }
    }
    readonly stringWithArgs: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly boolean: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Boolean
          readonly inlineType: [0]
        }
        readonly float: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Float
          readonly inlineType: [0]
        }
        readonly id: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.ID
          readonly inlineType: [0]
        }
        readonly int: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [0]
        }
        readonly string: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        boolean?: $$Scalar.Boolean['codec']['_typeDecoded'] | null | undefined
        float?: $$Scalar.Float['codec']['_typeDecoded'] | null | undefined
        id?: $$Scalar.ID['codec']['_typeDecoded'] | null | undefined
        int?: $$Scalar.Int['codec']['_typeDecoded'] | null | undefined
        string?: $$Scalar.String['codec']['_typeDecoded'] | null | undefined
      }
    }
    readonly stringWithListArg: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly ints: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [0, [0]]
        }
      }
      readonly $argumentsType: {
        ints?: readonly ($$Scalar.Int['codec']['_typeDecoded'])[] | null | undefined
      }
    }
    readonly stringWithListArgRequired: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly ints: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [1, [1]]
        }
      }
      readonly $argumentsType: {
        ints: readonly ($$Scalar.Int['codec']['_typeDecoded'])[]
      }
    }
    readonly stringWithRequiredArg: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly string: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [1]
        }
      }
      readonly $argumentsType: {
        string: $$Scalar.String['codec']['_typeDecoded']
      }
    }
    readonly unionFooBar: {
      readonly _tag: 'outputField'
      readonly namedType: FooBarUnion
    }
    readonly unionFooBarNonNull: {
      readonly _tag: 'outputField'
      readonly namedType: FooBarUnion
    }
    readonly unionFooBarWithArgs: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly id: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.ID
          readonly inlineType: [0]
        }
      }
      readonly $argumentsType: {
        id?: $$Scalar.ID['codec']['_typeDecoded'] | null | undefined
      }
      readonly namedType: FooBarUnion
    }
    readonly unionObject: {
      readonly _tag: 'outputField'
      readonly namedType: ObjectUnion
    }
    readonly unionObjectNonNull: {
      readonly _tag: 'outputField'
      readonly namedType: ObjectUnion
    }
  }
}

interface Mutation extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly id: {
      readonly _tag: 'outputField'
    }
    readonly idNonNull: {
      readonly _tag: 'outputField'
    }
  }
}

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

const ABCEnum: ABCEnum = {
  _tag: 'enum',
  name: 'ABCEnum',
  type: null as any as 'A' | 'B' | 'C',
}

const Case: Case = {
  _tag: 'enum',
  name: 'Case',
  type: null as any as 'ErrorOne' | 'ErrorTwo' | 'Object1',
}

const ChildAInterfaceHierarchyMember: ChildAInterfaceHierarchyMember = {
  _tag: 'enum',
  name: 'ChildAInterfaceHierarchyMember',
  type: null as any as 'InterfaceChildA',
}

const ChildBInterfaceHierarchyMember: ChildBInterfaceHierarchyMember = {
  _tag: 'enum',
  name: 'ChildBInterfaceHierarchyMember',
  type: null as any as 'InterfaceChildB',
}

const GrandparentInterfaceHierarchyMember: GrandparentInterfaceHierarchyMember = {
  _tag: 'enum',
  name: 'GrandparentInterfaceHierarchyMember',
  type: null as any as 'InterfaceChildA' | 'InterfaceChildB' | 'InterfaceGrandparent' | 'InterfaceParent',
}

const ParentInterfaceHierarchyMember: ParentInterfaceHierarchyMember = {
  _tag: 'enum',
  name: 'ParentInterfaceHierarchyMember',
  type: null as any as 'InterfaceChildA' | 'InterfaceChildB' | 'InterfaceParent',
}

const ReservedWordsEnum: ReservedWordsEnum = {
  _tag: 'enum',
  name: 'ReservedWordsEnum',
  type: null as any as 'as' | 'in' | 'is',
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

const InputObject: InputObject = {
  _tag: 'inputObject',
  name: 'InputObject',
  fieldsContainingCustomScalars: ['date', 'dateRequired'],
  fields: {
    abcEnum: {
      _tag: 'argumentOrInputField',
      namedType: ABCEnum,
      inlineType: [0],
    },
    date: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.Date,
      inlineType: [0],
    },
    dateRequired: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.Date,
      inlineType: [1],
    },
    id: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.ID,
      inlineType: [0],
    },
    idRequired: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.ID,
      inlineType: [1],
    },
  },
  type: {
    abcEnum: null as any as ABCEnum['type'] | null | undefined,
    date: null as any as $$Scalar.Date['codec']['_typeDecoded'] | null | undefined,
    dateRequired: null as any as $$Scalar.Date['codec']['_typeDecoded'],
    id: null as any as $$Scalar.ID['codec']['_typeDecoded'] | null | undefined,
    idRequired: null as any as $$Scalar.ID['codec']['_typeDecoded'],
  },
}

const InputObjectCircular: InputObjectCircular = {
  _tag: 'inputObject',
  name: 'InputObjectCircular',
  fieldsContainingCustomScalars: ['circular', 'date'],
  fields: {
    circular: {
      _tag: 'argumentOrInputField',
      namedType: null as any as InputObjectCircular,
      inlineType: [0],
    },
    date: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.Date,
      inlineType: [0],
    },
  },
  type: {
    circular: null as any as SchemaDrivenDataMap['inputTypes']['InputObjectCircular']['type'] | null | undefined,
    date: null as any as $$Scalar.Date['codec']['_typeDecoded'] | null | undefined,
  },
}

const InputObjectEnum: InputObjectEnum = {
  _tag: 'inputObject',
  name: 'InputObjectEnum',
  fields: {
    abcEnum: {
      _tag: 'argumentOrInputField',
      namedType: ABCEnum,
      inlineType: [0],
    },
  },
  type: {
    abcEnum: null as any as ABCEnum['type'] | null | undefined,
  },
}

const InputObjectNested: InputObjectNested = {
  _tag: 'inputObject',
  name: 'InputObjectNested',
  fieldsContainingCustomScalars: ['InputObject'],
  fields: {
    InputObject: {
      _tag: 'argumentOrInputField',
      namedType: null as any as InputObject,
      inlineType: [0],
    },
  },
  type: {
    InputObject: null as any as SchemaDrivenDataMap['inputTypes']['InputObject']['type'] | null | undefined,
  },
}

const InputObjectNestedNonNull: InputObjectNestedNonNull = {
  _tag: 'inputObject',
  name: 'InputObjectNestedNonNull',
  fieldsContainingCustomScalars: ['InputObject'],
  fields: {
    InputObject: {
      _tag: 'argumentOrInputField',
      namedType: null as any as InputObject,
      inlineType: [1],
    },
  },
  type: {
    InputObject: null as any as SchemaDrivenDataMap['inputTypes']['InputObject']['type'],
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

const Bar: Bar = {
  _tag: 'outputObject',
  fields: {
    int: {
      _tag: 'outputField',
    },
  },
}

const DateObject1: DateObject1 = {
  _tag: 'outputObject',
  fields: {
    date1: {
      _tag: 'outputField',
      namedType: $$Scalar.Date,
    },
  },
}

const DateObject2: DateObject2 = {
  _tag: 'outputObject',
  fields: {
    date2: {
      _tag: 'outputField',
      namedType: $$Scalar.Date,
    },
  },
}

const ErrorOne: ErrorOne = {
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

const ErrorTwo: ErrorTwo = {
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

const Foo: Foo = {
  _tag: 'outputObject',
  fields: {
    id: {
      _tag: 'outputField',
    },
  },
}

const Object1: Object1 = {
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

const Object1ImplementingInterface: Object1ImplementingInterface = {
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

const Object2ImplementingInterface: Object2ImplementingInterface = {
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

const ObjectChildA: ObjectChildA = {
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

const ObjectChildB: ObjectChildB = {
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

const ObjectGrandparent: ObjectGrandparent = {
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

const ObjectNested: ObjectNested = {
  _tag: 'outputObject',
  fields: {
    id: {
      _tag: 'outputField',
    },
    object: {
      _tag: 'outputField',
      namedType: null as any as Object1,
    },
  },
}

const ObjectNestedWithArgs: ObjectNestedWithArgs = {
  _tag: 'outputObject',
  fields: {
    id: {
      _tag: 'outputField',
      arguments: {
        filter: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.ID,
          inlineType: [0],
        },
      },
      $argumentsType: {
        filter: null as any as $$Scalar.ID['codec']['_typeDecoded'] | null | undefined,
      },
    },
    object: {
      _tag: 'outputField',
      arguments: {
        boolean: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Boolean,
          inlineType: [0],
        },
        float: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Float,
          inlineType: [0],
        },
        int: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [0],
        },
        string: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [0],
        },
      },
      $argumentsType: {
        boolean: null as any as $$Scalar.Boolean['codec']['_typeDecoded'] | null | undefined,
        float: null as any as $$Scalar.Float['codec']['_typeDecoded'] | null | undefined,
        int: null as any as $$Scalar.Int['codec']['_typeDecoded'] | null | undefined,
        string: null as any as $$Scalar.String['codec']['_typeDecoded'] | null | undefined,
      },
      namedType: null as any as Object1,
    },
  },
}

const ObjectParent: ObjectParent = {
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

const ObjectUnion: ObjectUnion = {
  _tag: 'outputObject',
  fields: {
    fooBarUnion: {
      _tag: 'outputField',
      namedType: null as any as FooBarUnion,
    },
  },
}

const lowerCaseObject: lowerCaseObject = {
  _tag: 'outputObject',
  fields: {
    id: {
      _tag: 'outputField',
    },
  },
}

const lowerCaseObject2: lowerCaseObject2 = {
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

const DateInterface1: DateInterface1 = {
  _tag: 'outputObject',
  fields: {
    ...DateObject1.fields,
  },
}

const Error: Error = {
  _tag: 'outputObject',
  fields: {},
}

const Interface: Interface = {
  _tag: 'outputObject',
  fields: {},
}

const InterfaceChildA: InterfaceChildA = {
  _tag: 'outputObject',
  fields: {},
}

const InterfaceChildB: InterfaceChildB = {
  _tag: 'outputObject',
  fields: {},
}

const InterfaceGrandparent: InterfaceGrandparent = {
  _tag: 'outputObject',
  fields: {},
}

const InterfaceParent: InterfaceParent = {
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

const DateUnion: DateUnion = {
  _tag: 'outputObject',
  fields: {
    ...DateObject1.fields,
    ...DateObject2.fields,
  },
}

const FooBarUnion: FooBarUnion = {
  _tag: 'outputObject',
  fields: {},
}

const Result: Result = {
  _tag: 'outputObject',
  fields: {},
}

const lowerCaseUnion: lowerCaseUnion = {
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

const Query: Query = {
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
      $argumentsType: {
        input: null as any as SchemaDrivenDataMap['inputTypes']['InputObjectNested']['type'] | null | undefined,
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
      $argumentsType: {
        input: null as any as SchemaDrivenDataMap['inputTypes']['InputObjectNestedNonNull']['type'],
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
      $argumentsType: {
        input: null as any as SchemaDrivenDataMap['inputTypes']['InputObjectCircular']['type'] | null | undefined,
      },
    },
    bigintField: {
      _tag: 'outputField',
      namedType: $$Scalar.bigint,
    },
    bigintFieldNonNull: {
      _tag: 'outputField',
      namedType: $$Scalar.bigint,
    },
    date: {
      _tag: 'outputField',
      namedType: $$Scalar.Date,
    },
    dateArg: {
      _tag: 'outputField',
      arguments: {
        date: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Date,
          inlineType: [0],
        },
      },
      $argumentsType: {
        date: null as any as $$Scalar.Date['codec']['_typeDecoded'] | null | undefined,
      },
      namedType: $$Scalar.Date,
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
      $argumentsType: {
        input: null as any as SchemaDrivenDataMap['inputTypes']['InputObject']['type'] | null | undefined,
      },
      namedType: $$Scalar.Date,
    },
    dateArgList: {
      _tag: 'outputField',
      arguments: {
        date: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Date,
          inlineType: [0, [1]],
        },
      },
      $argumentsType: {
        date: null as any as readonly ($$Scalar.Date['codec']['_typeDecoded'])[] | null | undefined,
      },
      namedType: $$Scalar.Date,
    },
    dateArgNonNull: {
      _tag: 'outputField',
      arguments: {
        date: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Date,
          inlineType: [1],
        },
      },
      $argumentsType: {
        date: null as any as $$Scalar.Date['codec']['_typeDecoded'],
      },
      namedType: $$Scalar.Date,
    },
    dateArgNonNullList: {
      _tag: 'outputField',
      arguments: {
        date: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Date,
          inlineType: [1, [0]],
        },
      },
      $argumentsType: {
        date: null as any as readonly ($$Scalar.Date['codec']['_typeDecoded'])[],
      },
      namedType: $$Scalar.Date,
    },
    dateArgNonNullListNonNull: {
      _tag: 'outputField',
      arguments: {
        date: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Date,
          inlineType: [1, [1]],
        },
      },
      $argumentsType: {
        date: null as any as readonly ($$Scalar.Date['codec']['_typeDecoded'])[],
      },
      namedType: $$Scalar.Date,
    },
    dateInterface1: {
      _tag: 'outputField',
      namedType: null as any as DateInterface1,
    },
    dateList: {
      _tag: 'outputField',
      namedType: $$Scalar.Date,
    },
    dateListList: {
      _tag: 'outputField',
      namedType: $$Scalar.Date,
    },
    dateListNonNull: {
      _tag: 'outputField',
      namedType: $$Scalar.Date,
    },
    dateNonNull: {
      _tag: 'outputField',
      namedType: $$Scalar.Date,
    },
    dateObject1: {
      _tag: 'outputField',
      namedType: null as any as DateObject1,
    },
    dateUnion: {
      _tag: 'outputField',
      namedType: null as any as DateUnion,
    },
    error: {
      _tag: 'outputField',
      arguments: {
        case: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [0],
        },
      },
      $argumentsType: {
        case: null as any as $$Scalar.String['codec']['_typeDecoded'] | null | undefined,
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
      namedType: null as any as Interface,
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
      $argumentsType: {
        type: null as any as ChildAInterfaceHierarchyMember['type'] | null | undefined,
      },
      namedType: null as any as InterfaceChildA,
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
      $argumentsType: {
        type: null as any as ChildBInterfaceHierarchyMember['type'] | null | undefined,
      },
      namedType: null as any as InterfaceChildB,
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
      $argumentsType: {
        type: null as any as GrandparentInterfaceHierarchyMember['type'] | null | undefined,
      },
      namedType: null as any as InterfaceGrandparent,
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
      $argumentsType: {
        type: null as any as ParentInterfaceHierarchyMember['type'] | null | undefined,
      },
      namedType: null as any as InterfaceParent,
    },
    interfaceNonNull: {
      _tag: 'outputField',
      namedType: null as any as Interface,
    },
    interfaceWithArgs: {
      _tag: 'outputField',
      arguments: {
        id: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.ID,
          inlineType: [1],
        },
      },
      $argumentsType: {
        id: null as any as $$Scalar.ID['codec']['_typeDecoded'],
      },
      namedType: null as any as Interface,
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
      namedType: null as any as lowerCaseUnion,
    },
    object: {
      _tag: 'outputField',
      namedType: null as any as Object1,
    },
    objectList: {
      _tag: 'outputField',
      namedType: null as any as Object1,
    },
    objectListNonNull: {
      _tag: 'outputField',
      namedType: null as any as Object1,
    },
    objectNested: {
      _tag: 'outputField',
      namedType: null as any as ObjectNested,
    },
    objectNestedWithArgs: {
      _tag: 'outputField',
      argumentsDescendant: null as any as ObjectNestedWithArgs,
      namedType: null as any as ObjectNestedWithArgs,
    },
    objectNonNull: {
      _tag: 'outputField',
      namedType: null as any as Object1,
    },
    objectWithArgs: {
      _tag: 'outputField',
      arguments: {
        boolean: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Boolean,
          inlineType: [0],
        },
        float: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Float,
          inlineType: [0],
        },
        id: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.ID,
          inlineType: [0],
        },
        int: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [0],
        },
        string: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [0],
        },
      },
      $argumentsType: {
        boolean: null as any as $$Scalar.Boolean['codec']['_typeDecoded'] | null | undefined,
        float: null as any as $$Scalar.Float['codec']['_typeDecoded'] | null | undefined,
        id: null as any as $$Scalar.ID['codec']['_typeDecoded'] | null | undefined,
        int: null as any as $$Scalar.Int['codec']['_typeDecoded'] | null | undefined,
        string: null as any as $$Scalar.String['codec']['_typeDecoded'] | null | undefined,
      },
      namedType: null as any as Object1,
    },
    reservedWordsEnum: {
      _tag: 'outputField',
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
      $argumentsType: {
        case: null as any as Case['type'],
      },
      namedType: null as any as Result,
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
      $argumentsType: {
        case: null as any as Case['type'] | null | undefined,
      },
      namedType: null as any as Result,
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
      $argumentsType: {
        ABCEnum: null as any as ABCEnum['type'] | null | undefined,
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
      $argumentsType: {
        input: null as any as SchemaDrivenDataMap['inputTypes']['InputObject']['type'] | null | undefined,
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
      $argumentsType: {
        input: null as any as SchemaDrivenDataMap['inputTypes']['InputObjectEnum']['type'],
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
      $argumentsType: {
        input: null as any as SchemaDrivenDataMap['inputTypes']['InputObject']['type'],
      },
    },
    stringWithArgs: {
      _tag: 'outputField',
      arguments: {
        boolean: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Boolean,
          inlineType: [0],
        },
        float: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Float,
          inlineType: [0],
        },
        id: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.ID,
          inlineType: [0],
        },
        int: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [0],
        },
        string: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [0],
        },
      },
      $argumentsType: {
        boolean: null as any as $$Scalar.Boolean['codec']['_typeDecoded'] | null | undefined,
        float: null as any as $$Scalar.Float['codec']['_typeDecoded'] | null | undefined,
        id: null as any as $$Scalar.ID['codec']['_typeDecoded'] | null | undefined,
        int: null as any as $$Scalar.Int['codec']['_typeDecoded'] | null | undefined,
        string: null as any as $$Scalar.String['codec']['_typeDecoded'] | null | undefined,
      },
    },
    stringWithListArg: {
      _tag: 'outputField',
      arguments: {
        ints: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [0, [0]],
        },
      },
      $argumentsType: {
        ints: null as any as readonly ($$Scalar.Int['codec']['_typeDecoded'])[] | null | undefined,
      },
    },
    stringWithListArgRequired: {
      _tag: 'outputField',
      arguments: {
        ints: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [1, [1]],
        },
      },
      $argumentsType: {
        ints: null as any as readonly ($$Scalar.Int['codec']['_typeDecoded'])[],
      },
    },
    stringWithRequiredArg: {
      _tag: 'outputField',
      arguments: {
        string: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [1],
        },
      },
      $argumentsType: {
        string: null as any as $$Scalar.String['codec']['_typeDecoded'],
      },
    },
    unionFooBar: {
      _tag: 'outputField',
      namedType: null as any as FooBarUnion,
    },
    unionFooBarNonNull: {
      _tag: 'outputField',
      namedType: null as any as FooBarUnion,
    },
    unionFooBarWithArgs: {
      _tag: 'outputField',
      arguments: {
        id: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.ID,
          inlineType: [0],
        },
      },
      $argumentsType: {
        id: null as any as $$Scalar.ID['codec']['_typeDecoded'] | null | undefined,
      },
      namedType: null as any as FooBarUnion,
    },
    unionObject: {
      _tag: 'outputField',
      namedType: null as any as ObjectUnion,
    },
    unionObjectNonNull: {
      _tag: 'outputField',
      namedType: null as any as ObjectUnion,
    },
  },
}

const Mutation: Mutation = {
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
Query.fields[`objectNestedWithArgs`]!.argumentsDescendant = ObjectNestedWithArgs
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

interface SchemaDrivenDataMap extends $$Utilities.SchemaDrivenDataMap {
  readonly operations: {
    readonly query: Query
    readonly mutation: Mutation
  }
  readonly directives: {}
  readonly inputTypes: {
    readonly Boolean: $$Scalar.Boolean
    readonly Float: $$Scalar.Float
    readonly ID: $$Scalar.ID
    readonly Int: $$Scalar.Int
    readonly String: $$Scalar.String
    readonly Date: $$Scalar.Date
    readonly bigint: $$Scalar.bigint
    readonly ABCEnum: ABCEnum
    readonly Case: Case
    readonly ChildAInterfaceHierarchyMember: ChildAInterfaceHierarchyMember
    readonly ChildBInterfaceHierarchyMember: ChildBInterfaceHierarchyMember
    readonly GrandparentInterfaceHierarchyMember: GrandparentInterfaceHierarchyMember
    readonly ParentInterfaceHierarchyMember: ParentInterfaceHierarchyMember
    readonly ReservedWordsEnum: ReservedWordsEnum
    readonly InputObject: InputObject
    readonly InputObjectCircular: InputObjectCircular
    readonly InputObjectEnum: InputObjectEnum
    readonly InputObjectNested: InputObjectNested
    readonly InputObjectNestedNonNull: InputObjectNestedNonNull
  }
  readonly outputTypes: {
    readonly Boolean: $$Scalar.Boolean
    readonly Float: $$Scalar.Float
    readonly ID: $$Scalar.ID
    readonly Int: $$Scalar.Int
    readonly String: $$Scalar.String
    readonly Date: $$Scalar.Date
    readonly bigint: $$Scalar.bigint
    readonly ABCEnum: ABCEnum
    readonly Case: Case
    readonly ChildAInterfaceHierarchyMember: ChildAInterfaceHierarchyMember
    readonly ChildBInterfaceHierarchyMember: ChildBInterfaceHierarchyMember
    readonly GrandparentInterfaceHierarchyMember: GrandparentInterfaceHierarchyMember
    readonly ParentInterfaceHierarchyMember: ParentInterfaceHierarchyMember
    readonly ReservedWordsEnum: ReservedWordsEnum
    readonly Bar: Bar
    readonly DateObject1: DateObject1
    readonly DateObject2: DateObject2
    readonly ErrorOne: ErrorOne
    readonly ErrorTwo: ErrorTwo
    readonly Foo: Foo
    readonly Object1: Object1
    readonly Object1ImplementingInterface: Object1ImplementingInterface
    readonly Object2ImplementingInterface: Object2ImplementingInterface
    readonly ObjectChildA: ObjectChildA
    readonly ObjectChildB: ObjectChildB
    readonly ObjectGrandparent: ObjectGrandparent
    readonly ObjectNested: ObjectNested
    readonly ObjectNestedWithArgs: ObjectNestedWithArgs
    readonly ObjectParent: ObjectParent
    readonly ObjectUnion: ObjectUnion
    readonly lowerCaseObject: lowerCaseObject
    readonly lowerCaseObject2: lowerCaseObject2
    readonly DateInterface1: DateInterface1
    readonly Error: Error
    readonly Interface: Interface
    readonly InterfaceChildA: InterfaceChildA
    readonly InterfaceChildB: InterfaceChildB
    readonly InterfaceGrandparent: InterfaceGrandparent
    readonly InterfaceParent: InterfaceParent
    readonly DateUnion: DateUnion
    readonly FooBarUnion: FooBarUnion
    readonly Result: Result
    readonly lowerCaseUnion: lowerCaseUnion
    readonly Query: Query
    readonly Mutation: Mutation
  }
  readonly scalarTypes: {
    readonly Boolean: $$Scalar.Boolean
    readonly Float: $$Scalar.Float
    readonly ID: $$Scalar.ID
    readonly Int: $$Scalar.Int
    readonly String: $$Scalar.String
    readonly Date: $$Scalar.Date
    readonly bigint: $$Scalar.bigint
  }
}

const $schemaDrivenDataMap: SchemaDrivenDataMap = {
  operations: {
    query: Query,
    mutation: Mutation,
  },
  directives: {},
  inputTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
    Date: $$Scalar.Date,
    bigint: $$Scalar.bigint,
    ABCEnum,
    Case,
    ChildAInterfaceHierarchyMember,
    ChildBInterfaceHierarchyMember,
    GrandparentInterfaceHierarchyMember,
    ParentInterfaceHierarchyMember,
    ReservedWordsEnum,
    InputObject,
    InputObjectCircular,
    InputObjectEnum,
    InputObjectNested,
    InputObjectNestedNonNull,
  },
  outputTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
    Date: $$Scalar.Date,
    bigint: $$Scalar.bigint,
    ABCEnum,
    Case,
    ChildAInterfaceHierarchyMember,
    ChildBInterfaceHierarchyMember,
    GrandparentInterfaceHierarchyMember,
    ParentInterfaceHierarchyMember,
    ReservedWordsEnum,
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
  scalarTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
    Date: $$Scalar.Date,
    bigint: $$Scalar.bigint,
  },
}

export { $schemaDrivenDataMap as schemaDrivenDataMap }
export type { SchemaDrivenDataMap }
