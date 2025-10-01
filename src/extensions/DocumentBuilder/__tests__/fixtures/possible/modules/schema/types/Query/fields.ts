import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

export interface __typename extends $.Schema.OutputField {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'Query'
  }
}

export interface InputObjectNested extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'InputObjectNested'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [0]
      namedType: $Schema.InputObjectNested
    }
  }
  inlineType: [0]
  namedType: $Schema.ID
}

export interface InputObjectNestedNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'InputObjectNestedNonNull'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [1]
      namedType: $Schema.InputObjectNestedNonNull
    }
  }
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * Query enum field documentation.
 */
export interface abcEnum extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'abcEnum'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ABCEnum
}

export interface argInputObjectCircular extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'argInputObjectCircular'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [0]
      namedType: $Schema.InputObjectCircular
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

export interface bigintField extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'bigintField'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.bigint
}

export interface bigintFieldNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'bigintFieldNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.bigint
}

export interface date extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'date'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Date
}

export interface dateArg extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArg'
  arguments: {
    date: {
      kind: 'InputField'
      name: 'date'
      inlineType: [0]
      namedType: $Schema.Date
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

export interface dateArgInputObject extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArgInputObject'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [0]
      namedType: $Schema.InputObject
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

export interface dateArgList extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArgList'
  arguments: {
    date: {
      kind: 'InputField'
      name: 'date'
      inlineType: [0, [1]]
      namedType: $Schema.Date
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

export interface dateArgNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArgNonNull'
  arguments: {
    date: {
      kind: 'InputField'
      name: 'date'
      inlineType: [1]
      namedType: $Schema.Date
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

export interface dateArgNonNullList extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArgNonNullList'
  arguments: {
    date: {
      kind: 'InputField'
      name: 'date'
      inlineType: [1, [0]]
      namedType: $Schema.Date
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

export interface dateArgNonNullListNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateArgNonNullListNonNull'
  arguments: {
    date: {
      kind: 'InputField'
      name: 'date'
      inlineType: [1, [1]]
      namedType: $Schema.Date
    }
  }
  inlineType: [0]
  namedType: $Schema.Date
}

export interface dateInterface1 extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateInterface1'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.DateInterface1
}

export interface dateList extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateList'
  arguments: {}
  inlineType: [0, [1]]
  namedType: $Schema.Date
}

export interface dateListList extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateListList'
  arguments: {}
  inlineType: [0, [1, [1]]]
  namedType: $Schema.Date
}

export interface dateListNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateListNonNull'
  arguments: {}
  inlineType: [1, [1]]
  namedType: $Schema.Date
}

export interface dateNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Date
}

export interface dateObject1 extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateObject1'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.DateObject1
}

export interface dateUnion extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'dateUnion'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.DateUnion
}

export interface error extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'error'
  arguments: {
    case: {
      kind: 'InputField'
      name: 'case'
      inlineType: [0]
      namedType: $Schema.String
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

export interface id extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

export interface idNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'idNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.ID
}

export interface $interface extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interface'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Interface
}

export interface interfaceHierarchyChildA extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceHierarchyChildA'
  arguments: {
    type: {
      kind: 'InputField'
      name: 'type'
      inlineType: [0]
      namedType: $Schema.ChildAInterfaceHierarchyMember
    }
  }
  inlineType: [1, [1]]
  namedType: $Schema.InterfaceChildA
}

export interface interfaceHierarchyChildB extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceHierarchyChildB'
  arguments: {
    type: {
      kind: 'InputField'
      name: 'type'
      inlineType: [0]
      namedType: $Schema.ChildBInterfaceHierarchyMember
    }
  }
  inlineType: [1, [1]]
  namedType: $Schema.InterfaceChildB
}

export interface interfaceHierarchyGrandparents extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceHierarchyGrandparents'
  arguments: {
    type: {
      kind: 'InputField'
      name: 'type'
      inlineType: [0]
      namedType: $Schema.GrandparentInterfaceHierarchyMember
    }
  }
  inlineType: [1, [1]]
  namedType: $Schema.InterfaceGrandparent
}

export interface interfaceHierarchyParents extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceHierarchyParents'
  arguments: {
    type: {
      kind: 'InputField'
      name: 'type'
      inlineType: [0]
      namedType: $Schema.ParentInterfaceHierarchyMember
    }
  }
  inlineType: [1, [1]]
  namedType: $Schema.InterfaceParent
}

export interface interfaceNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Interface
}

export interface interfaceWithArgs extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'interfaceWithArgs'
  arguments: {
    id: {
      kind: 'InputField'
      name: 'id'
      inlineType: [1]
      namedType: $Schema.ID
    }
  }
  inlineType: [0]
  namedType: $Schema.Interface
}

export interface listInt extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'listInt'
  arguments: {}
  inlineType: [0, [0]]
  namedType: $Schema.Int
}

export interface listIntNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'listIntNonNull'
  arguments: {}
  inlineType: [1, [1]]
  namedType: $Schema.Int
}

export interface listListInt extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'listListInt'
  arguments: {}
  inlineType: [0, [0, [0]]]
  namedType: $Schema.Int
}

export interface listListIntNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'listListIntNonNull'
  arguments: {}
  inlineType: [1, [1, [1]]]
  namedType: $Schema.Int
}

export interface lowerCaseUnion extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'lowerCaseUnion'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.lowerCaseUnion
}

export interface $object extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'object'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Object1
}

export interface objectList extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectList'
  arguments: {}
  inlineType: [0, [1]]
  namedType: $Schema.Object1
}

export interface objectListNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectListNonNull'
  arguments: {}
  inlineType: [1, [1]]
  namedType: $Schema.Object1
}

export interface objectNested extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectNested'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ObjectNested
}

export interface objectNestedWithArgs extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectNestedWithArgs'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ObjectNestedWithArgs
}

export interface objectNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Object1
}

export interface objectWithArgs extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'objectWithArgs'
  arguments: {
    boolean: {
      kind: 'InputField'
      name: 'boolean'
      inlineType: [0]
      namedType: $Schema.Boolean
    }
    float: {
      kind: 'InputField'
      name: 'float'
      inlineType: [0]
      namedType: $Schema.Float
    }
    id: {
      kind: 'InputField'
      name: 'id'
      inlineType: [0]
      namedType: $Schema.ID
    }
    int: {
      kind: 'InputField'
      name: 'int'
      inlineType: [0]
      namedType: $Schema.Int
    }
    string: {
      kind: 'InputField'
      name: 'string'
      inlineType: [0]
      namedType: $Schema.String
    }
  }
  inlineType: [0]
  namedType: $Schema.Object1
}

export interface result extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'result'
  arguments: {
    case: {
      kind: 'InputField'
      name: 'case'
      inlineType: [1]
      namedType: $Schema.Case
    }
  }
  inlineType: [0]
  namedType: $Schema.Result
}

export interface resultNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'resultNonNull'
  arguments: {
    case: {
      kind: 'InputField'
      name: 'case'
      inlineType: [0]
      namedType: $Schema.Case
    }
  }
  inlineType: [1]
  namedType: $Schema.Result
}

export interface $string extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'string'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.String
}

export interface stringWithArgEnum extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithArgEnum'
  arguments: {
    ABCEnum: {
      kind: 'InputField'
      name: 'ABCEnum'
      inlineType: [0]
      namedType: $Schema.ABCEnum
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

export interface stringWithArgInputObject extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithArgInputObject'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [0]
      namedType: $Schema.InputObject
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

export interface stringWithArgInputObjectEnum extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithArgInputObjectEnum'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [1]
      namedType: $Schema.InputObjectEnum
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

export interface stringWithArgInputObjectRequired extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithArgInputObjectRequired'
  arguments: {
    input: {
      kind: 'InputField'
      name: 'input'
      inlineType: [1]
      namedType: $Schema.InputObject
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * The given arguments are reflected back as a JSON string.
 */
export interface stringWithArgs extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithArgs'
  arguments: {
    boolean: {
      kind: 'InputField'
      name: 'boolean'
      inlineType: [0]
      namedType: $Schema.Boolean
    }
    float: {
      kind: 'InputField'
      name: 'float'
      inlineType: [0]
      namedType: $Schema.Float
    }
    id: {
      kind: 'InputField'
      name: 'id'
      inlineType: [0]
      namedType: $Schema.ID
    }
    /**
     * @deprecated Example of argument deprecation reason here.
     */
    int: {
      kind: 'InputField'
      name: 'int'
      inlineType: [0]
      namedType: $Schema.Int
    }
    /**
     * Example of some argument documentation here.
     */
    string: {
      kind: 'InputField'
      name: 'string'
      inlineType: [0]
      namedType: $Schema.String
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

export interface stringWithListArg extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithListArg'
  arguments: {
    ints: {
      kind: 'InputField'
      name: 'ints'
      inlineType: [0, [0]]
      namedType: $Schema.Int
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

export interface stringWithListArgRequired extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithListArgRequired'
  arguments: {
    ints: {
      kind: 'InputField'
      name: 'ints'
      inlineType: [1, [1]]
      namedType: $Schema.Int
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

export interface stringWithRequiredArg extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'stringWithRequiredArg'
  arguments: {
    string: {
      kind: 'InputField'
      name: 'string'
      inlineType: [1]
      namedType: $Schema.String
    }
  }
  inlineType: [0]
  namedType: $Schema.String
}

export interface unionFooBar extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'unionFooBar'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.FooBarUnion
}

export interface unionFooBarNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'unionFooBarNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.FooBarUnion
}

export interface unionFooBarWithArgs extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'unionFooBarWithArgs'
  arguments: {
    id: {
      kind: 'InputField'
      name: 'id'
      inlineType: [0]
      namedType: $Schema.ID
    }
  }
  inlineType: [0]
  namedType: $Schema.FooBarUnion
}

export interface unionObject extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'unionObject'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ObjectUnion
}

export interface unionObjectNonNull extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'unionObjectNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.ObjectUnion
}
