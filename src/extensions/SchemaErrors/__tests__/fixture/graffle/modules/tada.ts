import type { Name } from './data.js'

export type introspection_types = {
  'Query': {
    kind: 'OBJECT'
    name: 'Query'
    fields: {
      'InputObjectNested': { name: 'InputObjectNested'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'InputObjectNestedNonNull': {
        name: 'InputObjectNestedNonNull'
        type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
      }
      'abcEnum': { name: 'abcEnum'; type: { kind: 'ENUM'; name: 'ABCEnum'; ofType: null } }
      'argInputObjectCircular': {
        name: 'argInputObjectCircular'
        type: { kind: 'SCALAR'; name: 'String'; ofType: null }
      }
      'bigintField': { name: 'bigintField'; type: { kind: 'SCALAR'; name: 'bigint'; ofType: null } }
      'bigintFieldNonNull': {
        name: 'bigintFieldNonNull'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'bigint'; ofType: null } }
      }
      'date': { name: 'date'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
      'dateArg': { name: 'dateArg'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
      'dateArgInputObject': { name: 'dateArgInputObject'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
      'dateArgList': { name: 'dateArgList'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
      'dateArgNonNull': { name: 'dateArgNonNull'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
      'dateArgNonNullList': { name: 'dateArgNonNullList'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
      'dateArgNonNullListNonNull': {
        name: 'dateArgNonNullListNonNull'
        type: { kind: 'SCALAR'; name: 'Date'; ofType: null }
      }
      'dateInterface1': { name: 'dateInterface1'; type: { kind: 'INTERFACE'; name: 'DateInterface1'; ofType: null } }
      'dateList': {
        name: 'dateList'
        type: {
          kind: 'LIST'
          name: never
          ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
        }
      }
      'dateListList': {
        name: 'dateListList'
        type: {
          kind: 'LIST'
          name: never
          ofType: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
            }
          }
        }
      }
      'dateListNonNull': {
        name: 'dateListNonNull'
        type: {
          kind: 'NON_NULL'
          name: never
          ofType: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
          }
        }
      }
      'dateNonNull': {
        name: 'dateNonNull'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
      }
      'dateObject1': { name: 'dateObject1'; type: { kind: 'OBJECT'; name: 'DateObject1'; ofType: null } }
      'dateUnion': { name: 'dateUnion'; type: { kind: 'UNION'; name: 'DateUnion'; ofType: null } }
      'error': { name: 'error'; type: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'idNonNull': {
        name: 'idNonNull'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      }
      'interface': { name: 'interface'; type: { kind: 'INTERFACE'; name: 'Interface'; ofType: null } }
      'interfaceHierarchyChildA': {
        name: 'interfaceHierarchyChildA'
        type: {
          kind: 'NON_NULL'
          name: never
          ofType: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'INTERFACE'; name: 'InterfaceChildA'; ofType: null }
            }
          }
        }
      }
      'interfaceHierarchyChildB': {
        name: 'interfaceHierarchyChildB'
        type: {
          kind: 'NON_NULL'
          name: never
          ofType: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'INTERFACE'; name: 'InterfaceChildB'; ofType: null }
            }
          }
        }
      }
      'interfaceHierarchyGrandparents': {
        name: 'interfaceHierarchyGrandparents'
        type: {
          kind: 'NON_NULL'
          name: never
          ofType: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'INTERFACE'; name: 'InterfaceGrandparent'; ofType: null }
            }
          }
        }
      }
      'interfaceHierarchyParents': {
        name: 'interfaceHierarchyParents'
        type: {
          kind: 'NON_NULL'
          name: never
          ofType: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'INTERFACE'; name: 'InterfaceParent'; ofType: null }
            }
          }
        }
      }
      'interfaceNonNull': {
        name: 'interfaceNonNull'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INTERFACE'; name: 'Interface'; ofType: null } }
      }
      'interfaceWithArgs': { name: 'interfaceWithArgs'; type: { kind: 'INTERFACE'; name: 'Interface'; ofType: null } }
      'listInt': {
        name: 'listInt'
        type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
      }
      'listIntNonNull': {
        name: 'listIntNonNull'
        type: {
          kind: 'NON_NULL'
          name: never
          ofType: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
          }
        }
      }
      'listListInt': {
        name: 'listListInt'
        type: {
          kind: 'LIST'
          name: never
          ofType: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
        }
      }
      'listListIntNonNull': {
        name: 'listListIntNonNull'
        type: {
          kind: 'NON_NULL'
          name: never
          ofType: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: {
                kind: 'LIST'
                name: never
                ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
              }
            }
          }
        }
      }
      'lowerCaseUnion': { name: 'lowerCaseUnion'; type: { kind: 'UNION'; name: 'lowerCaseUnion'; ofType: null } }
      'object': { name: 'object'; type: { kind: 'OBJECT'; name: 'Object1'; ofType: null } }
      'objectList': {
        name: 'objectList'
        type: {
          kind: 'LIST'
          name: never
          ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Object1'; ofType: null } }
        }
      }
      'objectListNonNull': {
        name: 'objectListNonNull'
        type: {
          kind: 'NON_NULL'
          name: never
          ofType: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Object1'; ofType: null } }
          }
        }
      }
      'objectNested': { name: 'objectNested'; type: { kind: 'OBJECT'; name: 'ObjectNested'; ofType: null } }
      'objectNestedWithArgs': {
        name: 'objectNestedWithArgs'
        type: { kind: 'OBJECT'; name: 'ObjectNestedWithArgs'; ofType: null }
      }
      'objectNonNull': {
        name: 'objectNonNull'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Object1'; ofType: null } }
      }
      'objectWithArgs': { name: 'objectWithArgs'; type: { kind: 'OBJECT'; name: 'Object1'; ofType: null } }
      'result': { name: 'result'; type: { kind: 'UNION'; name: 'Result'; ofType: null } }
      'resultNonNull': {
        name: 'resultNonNull'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'UNION'; name: 'Result'; ofType: null } }
      }
      'string': { name: 'string'; type: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      'stringWithArgEnum': { name: 'stringWithArgEnum'; type: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      'stringWithArgInputObject': {
        name: 'stringWithArgInputObject'
        type: { kind: 'SCALAR'; name: 'String'; ofType: null }
      }
      'stringWithArgInputObjectEnum': {
        name: 'stringWithArgInputObjectEnum'
        type: { kind: 'SCALAR'; name: 'String'; ofType: null }
      }
      'stringWithArgInputObjectRequired': {
        name: 'stringWithArgInputObjectRequired'
        type: { kind: 'SCALAR'; name: 'String'; ofType: null }
      }
      'stringWithArgs': { name: 'stringWithArgs'; type: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      'stringWithListArg': { name: 'stringWithListArg'; type: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      'stringWithListArgRequired': {
        name: 'stringWithListArgRequired'
        type: { kind: 'SCALAR'; name: 'String'; ofType: null }
      }
      'stringWithRequiredArg': { name: 'stringWithRequiredArg'; type: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      'unionFooBar': { name: 'unionFooBar'; type: { kind: 'UNION'; name: 'FooBarUnion'; ofType: null } }
      'unionFooBarNonNull': {
        name: 'unionFooBarNonNull'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'UNION'; name: 'FooBarUnion'; ofType: null } }
      }
      'unionFooBarWithArgs': { name: 'unionFooBarWithArgs'; type: { kind: 'UNION'; name: 'FooBarUnion'; ofType: null } }
      'unionObject': { name: 'unionObject'; type: { kind: 'OBJECT'; name: 'ObjectUnion'; ofType: null } }
      'unionObjectNonNull': {
        name: 'unionObjectNonNull'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'ObjectUnion'; ofType: null } }
      }
    }
  }
  'Mutation': {
    kind: 'OBJECT'
    name: 'Mutation'
    fields: {
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'idNonNull': {
        name: 'idNonNull'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      }
    }
  }
  'Bar': {
    kind: 'OBJECT'
    name: 'Bar'
    fields: {
      'int': { name: 'int'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
    }
  }
  'DateObject1': {
    kind: 'OBJECT'
    name: 'DateObject1'
    fields: {
      'date1': { name: 'date1'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
    }
  }
  'DateObject2': {
    kind: 'OBJECT'
    name: 'DateObject2'
    fields: {
      'date2': { name: 'date2'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
    }
  }
  'ErrorOne': {
    kind: 'OBJECT'
    name: 'ErrorOne'
    fields: {
      'infoId': { name: 'infoId'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'message': {
        name: 'message'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
    }
  }
  'ErrorTwo': {
    kind: 'OBJECT'
    name: 'ErrorTwo'
    fields: {
      'infoInt': { name: 'infoInt'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
      'message': {
        name: 'message'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
    }
  }
  'Foo': {
    kind: 'OBJECT'
    name: 'Foo'
    fields: {
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
    }
  }
  'Object1': {
    kind: 'OBJECT'
    name: 'Object1'
    fields: {
      'ABCEnum': { name: 'ABCEnum'; type: { kind: 'ENUM'; name: 'ABCEnum'; ofType: null } }
      'boolean': { name: 'boolean'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null } }
      'float': { name: 'float'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null } }
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'int': { name: 'int'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
      'string': { name: 'string'; type: { kind: 'SCALAR'; name: 'String'; ofType: null } }
    }
  }
  'Object1ImplementingInterface': {
    kind: 'OBJECT'
    name: 'Object1ImplementingInterface'
    fields: {
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'int': { name: 'int'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
    }
  }
  'Object2ImplementingInterface': {
    kind: 'OBJECT'
    name: 'Object2ImplementingInterface'
    fields: {
      'boolean': { name: 'boolean'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null } }
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
    }
  }
  'ObjectChildA': {
    kind: 'OBJECT'
    name: 'ObjectChildA'
    fields: {
      'a': {
        name: 'a'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'b': {
        name: 'b'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'c1': {
        name: 'c1'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'me': {
        name: 'me'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null } }
      }
    }
  }
  'ObjectChildB': {
    kind: 'OBJECT'
    name: 'ObjectChildB'
    fields: {
      'a': {
        name: 'a'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'b': {
        name: 'b'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'c2': {
        name: 'c2'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'me': {
        name: 'me'
        type: {
          kind: 'NON_NULL'
          name: never
          ofType: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
          }
        }
      }
    }
  }
  'ObjectGrandparent': {
    kind: 'OBJECT'
    name: 'ObjectGrandparent'
    fields: {
      'a': {
        name: 'a'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'me': {
        name: 'me'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
      }
    }
  }
  'ObjectNested': {
    kind: 'OBJECT'
    name: 'ObjectNested'
    fields: {
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'object': { name: 'object'; type: { kind: 'OBJECT'; name: 'Object1'; ofType: null } }
    }
  }
  'ObjectNestedWithArgs': {
    kind: 'OBJECT'
    name: 'ObjectNestedWithArgs'
    fields: {
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'object': { name: 'object'; type: { kind: 'OBJECT'; name: 'Object1'; ofType: null } }
    }
  }
  'ObjectParent': {
    kind: 'OBJECT'
    name: 'ObjectParent'
    fields: {
      'a': {
        name: 'a'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'b': {
        name: 'b'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'me': {
        name: 'me'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
    }
  }
  'ObjectUnion': {
    kind: 'OBJECT'
    name: 'ObjectUnion'
    fields: {
      'fooBarUnion': { name: 'fooBarUnion'; type: { kind: 'UNION'; name: 'FooBarUnion'; ofType: null } }
    }
  }
  'lowerCaseObject': {
    kind: 'OBJECT'
    name: 'lowerCaseObject'
    fields: {
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
    }
  }
  'lowerCaseObject2': {
    kind: 'OBJECT'
    name: 'lowerCaseObject2'
    fields: {
      'int': { name: 'int'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
    }
  }
  'DateInterface1': {
    kind: 'INTERFACE'
    name: 'DateInterface1'
    fields: {
      'date1': { name: 'date1'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
    }
    possibleTypes: 'DateObject1'
  }
  'Error': {
    kind: 'INTERFACE'
    name: 'Error'
    fields: {
      'message': {
        name: 'message'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
    }
    possibleTypes: 'ErrorOne' | 'ErrorTwo'
  }
  'Interface': {
    kind: 'INTERFACE'
    name: 'Interface'
    fields: {
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
    }
    possibleTypes: 'Object1ImplementingInterface' | 'Object2ImplementingInterface'
  }
  'InterfaceChildA': {
    kind: 'INTERFACE'
    name: 'InterfaceChildA'
    fields: {
      'a': {
        name: 'a'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'b': {
        name: 'b'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'c1': {
        name: 'c1'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
    }
    possibleTypes: 'ObjectChildA'
  }
  'InterfaceChildB': {
    kind: 'INTERFACE'
    name: 'InterfaceChildB'
    fields: {
      'a': {
        name: 'a'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'b': {
        name: 'b'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'c2': {
        name: 'c2'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
    }
    possibleTypes: 'ObjectChildB'
  }
  'InterfaceGrandparent': {
    kind: 'INTERFACE'
    name: 'InterfaceGrandparent'
    fields: {
      'a': {
        name: 'a'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
    }
    possibleTypes: 'ObjectChildA' | 'ObjectChildB' | 'ObjectGrandparent' | 'ObjectParent'
  }
  'InterfaceParent': {
    kind: 'INTERFACE'
    name: 'InterfaceParent'
    fields: {
      'a': {
        name: 'a'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'b': {
        name: 'b'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
    }
    possibleTypes: 'ObjectChildA' | 'ObjectChildB' | 'ObjectParent'
  }
  'DateUnion': { kind: 'UNION'; name: 'DateUnion'; fields: {}; possibleTypes: 'DateObject1' | 'DateObject2' }
  'FooBarUnion': { kind: 'UNION'; name: 'FooBarUnion'; fields: {}; possibleTypes: 'Bar' | 'Foo' }
  'Result': { kind: 'UNION'; name: 'Result'; fields: {}; possibleTypes: 'ErrorOne' | 'ErrorTwo' | 'Object1' }
  'lowerCaseUnion': {
    kind: 'UNION'
    name: 'lowerCaseUnion'
    fields: {}
    possibleTypes: 'lowerCaseObject' | 'lowerCaseObject2'
  }
  'ABCEnum': { name: 'ABCEnum'; enumValues: 'A' | 'B' | 'C' }
  'Case': { name: 'Case'; enumValues: 'ErrorOne' | 'ErrorTwo' | 'Object1' }
  'ChildAInterfaceHierarchyMember': { name: 'ChildAInterfaceHierarchyMember'; enumValues: 'InterfaceChildA' }
  'ChildBInterfaceHierarchyMember': { name: 'ChildBInterfaceHierarchyMember'; enumValues: 'InterfaceChildB' }
  'GrandparentInterfaceHierarchyMember': {
    name: 'GrandparentInterfaceHierarchyMember'
    enumValues: 'InterfaceChildA' | 'InterfaceChildB' | 'InterfaceGrandparent' | 'InterfaceParent'
  }
  'ParentInterfaceHierarchyMember': {
    name: 'ParentInterfaceHierarchyMember'
    enumValues: 'InterfaceChildA' | 'InterfaceChildB' | 'InterfaceParent'
  }
  'InputObject': {
    kind: 'INPUT_OBJECT'
    name: 'InputObject'
    isOneOf: false
    inputFields: [
      { name: 'abcEnum'; type: { kind: 'ENUM'; name: 'ABCEnum'; ofType: null }; defaultValue: null },
      { name: 'date'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null }; defaultValue: null },
      {
        name: 'dateRequired'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
        defaultValue: null
      },
      { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null }; defaultValue: null },
      {
        name: 'idRequired'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
        defaultValue: null
      },
    ]
  }
  'InputObjectCircular': {
    kind: 'INPUT_OBJECT'
    name: 'InputObjectCircular'
    isOneOf: false
    inputFields: [
      {
        name: 'circular'
        type: { kind: 'INPUT_OBJECT'; name: 'InputObjectCircular'; ofType: null }
        defaultValue: null
      },
      { name: 'date'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null }; defaultValue: null },
    ]
  }
  'InputObjectEnum': {
    kind: 'INPUT_OBJECT'
    name: 'InputObjectEnum'
    isOneOf: false
    inputFields: [
      { name: 'abcEnum'; type: { kind: 'ENUM'; name: 'ABCEnum'; ofType: null }; defaultValue: null },
    ]
  }
  'InputObjectNested': {
    kind: 'INPUT_OBJECT'
    name: 'InputObjectNested'
    isOneOf: false
    inputFields: [
      { name: 'InputObject'; type: { kind: 'INPUT_OBJECT'; name: 'InputObject'; ofType: null }; defaultValue: null },
    ]
  }
  'InputObjectNestedNonNull': {
    kind: 'INPUT_OBJECT'
    name: 'InputObjectNestedNonNull'
    isOneOf: false
    inputFields: [
      {
        name: 'InputObject'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'InputObject'; ofType: null } }
        defaultValue: null
      },
    ]
  }
  'Date': unknown
  'bigint': unknown
  'Boolean': unknown
  'Float': unknown
  'ID': unknown
  'Int': unknown
  'String': unknown
}

export type introspection = {
  name: Name
  query: 'Query'
  mutation: 'Mutation'
  subscription: never
  types: introspection_types
}
