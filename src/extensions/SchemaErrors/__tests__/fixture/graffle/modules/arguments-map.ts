import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
import type * as TypeInputsIndex from './type-inputs-index.js'

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

export type InputObject = {
  readonly n: 'InputObject'
  readonly f: {
    readonly abcEnum: {
      readonly nt: 'ABCEnum'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ABCEnum | undefined
    }
    readonly date: {
      readonly nt: 'Date'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Date | undefined
    }
    readonly dateRequired: {
      readonly nt: 'Date'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Date
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly idRequired: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type InputObjectCircular = {
  readonly n: 'InputObjectCircular'
  readonly f: {
    readonly circular: {
      readonly nt: 'InputObjectCircular'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.InputObjectCircular | undefined
    }
    readonly date: {
      readonly nt: 'Date'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Date | undefined
    }
  }
}

export type InputObjectEnum = {
  readonly n: 'InputObjectEnum'
  readonly f: {
    readonly abcEnum: {
      readonly nt: 'ABCEnum'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ABCEnum | undefined
    }
  }
}

export type InputObjectNested = {
  readonly n: 'InputObjectNested'
  readonly f: {
    readonly InputObject: {
      readonly nt: 'InputObject'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.InputObject | undefined
    }
  }
}

export type InputObjectNestedNonNull = {
  readonly n: 'InputObjectNestedNonNull'
  readonly f: {
    readonly InputObject: {
      readonly nt: 'InputObject'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.InputObject
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
//                                            OutputObject
// ==================================================================================================
//
//
//
//
//
//

export type ObjectNestedWithArgs = {
  readonly f: {
    readonly id: {
      readonly a: {
        readonly filter: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
    readonly object: {
      readonly a: {
        readonly boolean: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly float: {
          readonly nt: 'Float'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Float | undefined
        }
        readonly int: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly string: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
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
//                                             Interface
// ==================================================================================================
//
//
//
//
//
//

// No Interface types with arguments in your schema.

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

// No Union types with arguments in your schema.

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

export type Query = {
  readonly f: {
    readonly InputObjectNested: {
      readonly a: {
        readonly input: {
          readonly nt: 'InputObjectNested'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.InputObjectNested | undefined
        }
      }
    }
    readonly InputObjectNestedNonNull: {
      readonly a: {
        readonly input: {
          readonly nt: 'InputObjectNestedNonNull'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.InputObjectNestedNonNull
        }
      }
    }
    readonly argInputObjectCircular: {
      readonly a: {
        readonly input: {
          readonly nt: 'InputObjectCircular'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.InputObjectCircular | undefined
        }
      }
    }
    readonly dateArg: {
      readonly a: {
        readonly date: {
          readonly nt: 'Date'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Date | undefined
        }
      }
    }
    readonly dateArgInputObject: {
      readonly a: {
        readonly input: {
          readonly nt: 'InputObject'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.InputObject | undefined
        }
      }
    }
    readonly dateArgList: {
      readonly a: {
        readonly date: {
          readonly nt: 'Date'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.Date[] | undefined
        }
      }
    }
    readonly dateArgNonNull: {
      readonly a: {
        readonly date: {
          readonly nt: 'Date'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Date
        }
      }
    }
    readonly dateArgNonNullList: {
      readonly a: {
        readonly date: {
          readonly nt: 'Date'
          readonly it: readonly [1, [0]]
          readonly $t: readonly TypeInputsIndex.Date[]
        }
      }
    }
    readonly dateArgNonNullListNonNull: {
      readonly a: {
        readonly date: {
          readonly nt: 'Date'
          readonly it: readonly [1, [1]]
          readonly $t: readonly TypeInputsIndex.Date[]
        }
      }
    }
    readonly error: {
      readonly a: {
        readonly case: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly interfaceHierarchyChildA: {
      readonly a: {
        readonly type: {
          readonly nt: 'ChildAInterfaceHierarchyMember'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ChildAInterfaceHierarchyMember | undefined
        }
      }
    }
    readonly interfaceHierarchyChildB: {
      readonly a: {
        readonly type: {
          readonly nt: 'ChildBInterfaceHierarchyMember'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ChildBInterfaceHierarchyMember | undefined
        }
      }
    }
    readonly interfaceHierarchyGrandparents: {
      readonly a: {
        readonly type: {
          readonly nt: 'GrandparentInterfaceHierarchyMember'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.GrandparentInterfaceHierarchyMember | undefined
        }
      }
    }
    readonly interfaceHierarchyParents: {
      readonly a: {
        readonly type: {
          readonly nt: 'ParentInterfaceHierarchyMember'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ParentInterfaceHierarchyMember | undefined
        }
      }
    }
    readonly interfaceWithArgs: {
      readonly a: {
        readonly id: {
          readonly nt: 'ID'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ID
        }
      }
    }
    readonly objectWithArgs: {
      readonly a: {
        readonly boolean: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly float: {
          readonly nt: 'Float'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Float | undefined
        }
        readonly id: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly int: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly string: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly result: {
      readonly a: {
        readonly case: {
          readonly nt: 'Case'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Case
        }
      }
    }
    readonly resultNonNull: {
      readonly a: {
        readonly case: {
          readonly nt: 'Case'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Case | undefined
        }
      }
    }
    readonly stringWithArgEnum: {
      readonly a: {
        readonly ABCEnum: {
          readonly nt: 'ABCEnum'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ABCEnum | undefined
        }
      }
    }
    readonly stringWithArgInputObject: {
      readonly a: {
        readonly input: {
          readonly nt: 'InputObject'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.InputObject | undefined
        }
      }
    }
    readonly stringWithArgInputObjectEnum: {
      readonly a: {
        readonly input: {
          readonly nt: 'InputObjectEnum'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.InputObjectEnum
        }
      }
    }
    readonly stringWithArgInputObjectRequired: {
      readonly a: {
        readonly input: {
          readonly nt: 'InputObject'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.InputObject
        }
      }
    }
    readonly stringWithArgs: {
      readonly a: {
        readonly boolean: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly float: {
          readonly nt: 'Float'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Float | undefined
        }
        readonly id: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly int: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly string: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly stringWithListArg: {
      readonly a: {
        readonly ints: {
          readonly nt: 'Int'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.Int[] | undefined
        }
      }
    }
    readonly stringWithListArgRequired: {
      readonly a: {
        readonly ints: {
          readonly nt: 'Int'
          readonly it: readonly [1, [1]]
          readonly $t: readonly TypeInputsIndex.Int[]
        }
      }
    }
    readonly stringWithRequiredArg: {
      readonly a: {
        readonly string: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly unionFooBarWithArgs: {
      readonly a: {
        readonly id: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
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
//                                               Index
// ==================================================================================================
//
//
//
//
//
//

export type ArgumentsMap = {
  query: Query
  mutation: { f: {} }
}
