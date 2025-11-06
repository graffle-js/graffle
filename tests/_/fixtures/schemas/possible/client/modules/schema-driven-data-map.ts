import type * as $$Utilities from '#graffle/utilities-for-generated'
import * as $$Scalar from './scalar.js'
import type { TypeInputsIndex } from './type-inputs-index.js'

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
}

interface Case extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'Case'
}

interface ChildAInterfaceHierarchyMember extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'ChildAInterfaceHierarchyMember'
}

interface ChildBInterfaceHierarchyMember extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'ChildBInterfaceHierarchyMember'
}

interface GrandparentInterfaceHierarchyMember extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'GrandparentInterfaceHierarchyMember'
}

interface ParentInterfaceHierarchyMember extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: 'enum'
  readonly name: 'ParentInterfaceHierarchyMember'
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
      readonly $type: 'A' | 'B' | 'C' | null | undefined
    }
    readonly date: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.Date
      readonly inlineType: [0]
      readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Date['codec']> | null | undefined
    }
    readonly dateRequired: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.Date
      readonly inlineType: [1]
      readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Date['codec']>
    }
    readonly id: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.ID
      readonly inlineType: [0]
      readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.ID['codec']> | null | undefined
    }
    readonly idRequired: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.ID
      readonly inlineType: [1]
      readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.ID['codec']>
    }
  }
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
      readonly $type: TypeInputsIndex['InputObjectCircular'] | null | undefined
    }
    readonly date: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: $$Scalar.Date
      readonly inlineType: [0]
      readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Date['codec']> | null | undefined
    }
  }
}

interface InputObjectEnum extends $$Utilities.SchemaDrivenDataMap.InputObject {
  readonly _tag: 'inputObject'
  readonly name: 'InputObjectEnum'
  readonly fields: {
    readonly abcEnum: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: ABCEnum
      readonly inlineType: [0]
      readonly $type: 'A' | 'B' | 'C' | null | undefined
    }
  }
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
      readonly $type: TypeInputsIndex['InputObject'] | null | undefined
    }
  }
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
      readonly $type: TypeInputsIndex['InputObject']
    }
  }
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
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.ID['codec']> | null | undefined
        }
      }
    }
    readonly object: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly boolean: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Boolean
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Boolean['codec']> | null | undefined
        }
        readonly float: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Float
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Float['codec']> | null | undefined
        }
        readonly int: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Int['codec']> | null | undefined
        }
        readonly string: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.String['codec']> | null | undefined
        }
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
          readonly $type: TypeInputsIndex['InputObjectNested'] | null | undefined
        }
      }
    }
    readonly InputObjectNestedNonNull: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly input: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: InputObjectNestedNonNull
          readonly inlineType: [1]
          readonly $type: TypeInputsIndex['InputObjectNestedNonNull']
        }
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
          readonly $type: TypeInputsIndex['InputObjectCircular'] | null | undefined
        }
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
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Date['codec']> | null | undefined
        }
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
          readonly $type: TypeInputsIndex['InputObject'] | null | undefined
        }
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
          readonly $type: readonly ($$Utilities.Codec.GetDecoded<$$Scalar.Date['codec']>)[] | null | undefined
        }
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
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Date['codec']>
        }
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
          readonly $type: readonly ($$Utilities.Codec.GetDecoded<$$Scalar.Date['codec']>)[]
        }
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
          readonly $type: readonly ($$Utilities.Codec.GetDecoded<$$Scalar.Date['codec']>)[]
        }
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
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.String['codec']> | null | undefined
        }
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
          readonly $type: 'InterfaceChildA' | null | undefined
        }
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
          readonly $type: 'InterfaceChildB' | null | undefined
        }
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
          readonly $type:
            | 'InterfaceChildA'
            | 'InterfaceChildB'
            | 'InterfaceGrandparent'
            | 'InterfaceParent'
            | null
            | undefined
        }
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
          readonly $type: 'InterfaceChildA' | 'InterfaceChildB' | 'InterfaceParent' | null | undefined
        }
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
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.ID['codec']>
        }
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
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Boolean['codec']> | null | undefined
        }
        readonly float: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Float
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Float['codec']> | null | undefined
        }
        readonly id: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.ID
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.ID['codec']> | null | undefined
        }
        readonly int: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Int['codec']> | null | undefined
        }
        readonly string: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.String['codec']> | null | undefined
        }
      }
      readonly namedType: Object1
    }
    readonly result: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly case: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: Case
          readonly inlineType: [1]
          readonly $type: 'ErrorOne' | 'ErrorTwo' | 'Object1'
        }
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
          readonly $type: 'ErrorOne' | 'ErrorTwo' | 'Object1' | null | undefined
        }
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
          readonly $type: 'A' | 'B' | 'C' | null | undefined
        }
      }
    }
    readonly stringWithArgInputObject: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly input: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: InputObject
          readonly inlineType: [0]
          readonly $type: TypeInputsIndex['InputObject'] | null | undefined
        }
      }
    }
    readonly stringWithArgInputObjectEnum: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly input: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: InputObjectEnum
          readonly inlineType: [1]
          readonly $type: TypeInputsIndex['InputObjectEnum']
        }
      }
    }
    readonly stringWithArgInputObjectRequired: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly input: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: InputObject
          readonly inlineType: [1]
          readonly $type: TypeInputsIndex['InputObject']
        }
      }
    }
    readonly stringWithArgs: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly boolean: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Boolean
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Boolean['codec']> | null | undefined
        }
        readonly float: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Float
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Float['codec']> | null | undefined
        }
        readonly id: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.ID
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.ID['codec']> | null | undefined
        }
        readonly int: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.Int['codec']> | null | undefined
        }
        readonly string: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [0]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.String['codec']> | null | undefined
        }
      }
    }
    readonly stringWithListArg: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly ints: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [0, [0]]
          readonly $type: readonly ($$Utilities.Codec.GetDecoded<$$Scalar.Int['codec']>)[] | null | undefined
        }
      }
    }
    readonly stringWithListArgRequired: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly ints: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.Int
          readonly inlineType: [1, [1]]
          readonly $type: readonly ($$Utilities.Codec.GetDecoded<$$Scalar.Int['codec']>)[]
        }
      }
    }
    readonly stringWithRequiredArg: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly string: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: $$Scalar.String
          readonly inlineType: [1]
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.String['codec']>
        }
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
          readonly $type: $$Utilities.Codec.GetDecoded<$$Scalar.ID['codec']> | null | undefined
        }
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
}

const Case: Case = {
  _tag: 'enum',
  name: 'Case',
}

const ChildAInterfaceHierarchyMember: ChildAInterfaceHierarchyMember = {
  _tag: 'enum',
  name: 'ChildAInterfaceHierarchyMember',
}

const ChildBInterfaceHierarchyMember: ChildBInterfaceHierarchyMember = {
  _tag: 'enum',
  name: 'ChildBInterfaceHierarchyMember',
}

const GrandparentInterfaceHierarchyMember: GrandparentInterfaceHierarchyMember = {
  _tag: 'enum',
  name: 'GrandparentInterfaceHierarchyMember',
}

const ParentInterfaceHierarchyMember: ParentInterfaceHierarchyMember = {
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

const InputObject: InputObject = {
  _tag: 'inputObject',
  name: 'InputObject',
  fieldsContainingCustomScalars: ['date', 'dateRequired'],
  fields: {
    abcEnum: {
      _tag: 'argumentOrInputField',
      namedType: ABCEnum,
      inlineType: [0],
      $type: null as any,
    },
    date: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.Date,
      inlineType: [0],
      $type: null as any,
    },
    dateRequired: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.Date,
      inlineType: [1],
      $type: null as any,
    },
    id: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.ID,
      inlineType: [0],
      $type: null as any,
    },
    idRequired: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.ID,
      inlineType: [1],
      $type: null as any,
    },
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
      $type: null as any,
    },
    date: {
      _tag: 'argumentOrInputField',
      namedType: $$Scalar.Date,
      inlineType: [0],
      $type: null as any,
    },
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
      $type: null as any,
    },
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
      $type: null as any,
    },
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
      $type: null as any,
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
          $type: null as any,
        },
      },
    },
    object: {
      _tag: 'outputField',
      arguments: {
        boolean: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Boolean,
          inlineType: [0],
          $type: null as any,
        },
        float: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Float,
          inlineType: [0],
          $type: null as any,
        },
        int: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [0],
          $type: null as any,
        },
        string: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [0],
          $type: null as any,
        },
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
          $type: null as any,
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
          $type: null as any,
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
          $type: null as any,
        },
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
          $type: null as any,
        },
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
          $type: null as any,
        },
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
          $type: null as any,
        },
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
          $type: null as any,
        },
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
          $type: null as any,
        },
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
          $type: null as any,
        },
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
          $type: null as any,
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
      namedType: null as any as Interface,
    },
    interfaceHierarchyChildA: {
      _tag: 'outputField',
      arguments: {
        type: {
          _tag: 'argumentOrInputField',
          namedType: ChildAInterfaceHierarchyMember,
          inlineType: [0],
          $type: null as any,
        },
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
          $type: null as any,
        },
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
          $type: null as any,
        },
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
          $type: null as any,
        },
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
          $type: null as any,
        },
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
          $type: null as any,
        },
        float: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Float,
          inlineType: [0],
          $type: null as any,
        },
        id: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.ID,
          inlineType: [0],
          $type: null as any,
        },
        int: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [0],
          $type: null as any,
        },
        string: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [0],
          $type: null as any,
        },
      },
      namedType: null as any as Object1,
    },
    result: {
      _tag: 'outputField',
      arguments: {
        case: {
          _tag: 'argumentOrInputField',
          namedType: Case,
          inlineType: [1],
          $type: null as any,
        },
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
          $type: null as any,
        },
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
          $type: null as any,
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
          $type: null as any,
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
          $type: null as any,
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
          $type: null as any,
        },
      },
    },
    stringWithArgs: {
      _tag: 'outputField',
      arguments: {
        boolean: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Boolean,
          inlineType: [0],
          $type: null as any,
        },
        float: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Float,
          inlineType: [0],
          $type: null as any,
        },
        id: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.ID,
          inlineType: [0],
          $type: null as any,
        },
        int: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [0],
          $type: null as any,
        },
        string: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [0],
          $type: null as any,
        },
      },
    },
    stringWithListArg: {
      _tag: 'outputField',
      arguments: {
        ints: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [0, [0]],
          $type: null as any,
        },
      },
    },
    stringWithListArgRequired: {
      _tag: 'outputField',
      arguments: {
        ints: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.Int,
          inlineType: [1, [1]],
          $type: null as any,
        },
      },
    },
    stringWithRequiredArg: {
      _tag: 'outputField',
      arguments: {
        string: {
          _tag: 'argumentOrInputField',
          namedType: $$Scalar.String,
          inlineType: [1],
          $type: null as any,
        },
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
          $type: null as any,
        },
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
export type { SchemaDrivenDataMap }
