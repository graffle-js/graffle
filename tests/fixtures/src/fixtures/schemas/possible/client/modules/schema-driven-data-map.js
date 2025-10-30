import * as $$Scalar from './scalar.js';
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
const Boolean = $$Scalar.Boolean;
const Float = $$Scalar.Float;
const ID = $$Scalar.ID;
const Int = $$Scalar.Int;
const String = $$Scalar.String;
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
const Date = $$Scalar.Date;
const bigint = $$Scalar.bigint;
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
const ABCEnum = {
    k: 'enum',
    n: 'ABCEnum',
};
const Case = {
    k: 'enum',
    n: 'Case',
};
const ChildAInterfaceHierarchyMember = {
    k: 'enum',
    n: 'ChildAInterfaceHierarchyMember',
};
const ChildBInterfaceHierarchyMember = {
    k: 'enum',
    n: 'ChildBInterfaceHierarchyMember',
};
const GrandparentInterfaceHierarchyMember = {
    k: 'enum',
    n: 'GrandparentInterfaceHierarchyMember',
};
const ParentInterfaceHierarchyMember = {
    k: 'enum',
    n: 'ParentInterfaceHierarchyMember',
};
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
const InputObject = {
    n: 'InputObject',
    fcs: ['date', 'dateRequired'],
    f: {
        abcEnum: {},
        date: {
            nt: Date,
        },
        dateRequired: {
            nt: Date,
        },
        id: {},
        idRequired: {},
    },
};
const InputObjectCircular = {
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
};
const InputObjectEnum = {
    n: 'InputObjectEnum',
    f: {
        abcEnum: {},
    },
};
const InputObjectNested = {
    n: 'InputObjectNested',
    fcs: ['InputObject'],
    f: {
        InputObject: {
        // nt: InputObject, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const InputObjectNestedNonNull = {
    n: 'InputObjectNestedNonNull',
    fcs: ['InputObject'],
    f: {
        InputObject: {
        // nt: InputObject, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
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
const Bar = {
    f: {
        int: {},
    },
};
const DateObject1 = {
    f: {
        date1: {
            nt: Date,
        },
    },
};
const DateObject2 = {
    f: {
        date2: {
            nt: Date,
        },
    },
};
const ErrorOne = {
    f: {
        infoId: {},
        message: {},
    },
};
const ErrorTwo = {
    f: {
        infoInt: {},
        message: {},
    },
};
const Foo = {
    f: {
        id: {},
    },
};
const Object1 = {
    f: {
        ABCEnum: {},
        boolean: {},
        float: {},
        id: {},
        int: {},
        string: {},
    },
};
const Object1ImplementingInterface = {
    f: {
        id: {},
        int: {},
    },
};
const Object2ImplementingInterface = {
    f: {
        boolean: {},
        id: {},
    },
};
const ObjectChildA = {
    f: {
        a: {},
        b: {},
        c1: {},
        me: {},
    },
};
const ObjectChildB = {
    f: {
        a: {},
        b: {},
        c2: {},
        me: {},
    },
};
const ObjectGrandparent = {
    f: {
        a: {},
        me: {},
    },
};
const ObjectNested = {
    f: {
        id: {},
        object: {
        // nt: Object1, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const ObjectNestedWithArgs = {
    f: {
        id: {
            a: {
                filter: {
                    nt: ID,
                    it: [0],
                },
            },
        },
        object: {
            a: {
                boolean: {
                    nt: Boolean,
                    it: [0],
                },
                float: {
                    nt: Float,
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
    },
};
const ObjectParent = {
    f: {
        a: {},
        b: {},
        me: {},
    },
};
const ObjectUnion = {
    f: {
        fooBarUnion: {
        // nt: FooBarUnion, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const lowerCaseObject = {
    f: {
        id: {},
    },
};
const lowerCaseObject2 = {
    f: {
        int: {},
    },
};
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
const DateInterface1 = {
    f: {
        ...DateObject1.f,
    },
};
const Error = {
    f: {},
};
const Interface = {
    f: {},
};
const InterfaceChildA = {
    f: {},
};
const InterfaceChildB = {
    f: {},
};
const InterfaceGrandparent = {
    f: {},
};
const InterfaceParent = {
    f: {},
};
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
const DateUnion = {
    f: {
        ...DateObject1.f,
        ...DateObject2.f,
    },
};
const FooBarUnion = {
    f: {},
};
const Result = {
    f: {},
};
const lowerCaseUnion = {
    f: {},
};
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
const Query = {
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
        bigintField: {
            nt: bigint,
        },
        bigintFieldNonNull: {
            nt: bigint,
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
        objectNestedWithArgs: {
        // nt: ObjectNestedWithArgs, <-- Assigned later to avoid potential circular dependency.
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
        stringWithArgInputObjectEnum: {
            a: {
                input: {
                    nt: InputObjectEnum,
                    it: [1],
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
};
const Mutation = {
    f: {
        id: {},
        idNonNull: {},
    },
};
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
InputObjectCircular.f[`circular`].nt = InputObjectCircular;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
InputObjectNested.f[`InputObject`].nt = InputObject;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
InputObjectNestedNonNull.f[`InputObject`].nt = InputObject;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
ObjectNested.f[`object`].nt = Object1;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
ObjectNestedWithArgs.f[`object`].nt = Object1;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
ObjectUnion.f[`fooBarUnion`].nt = FooBarUnion;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`dateInterface1`].nt = DateInterface1;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`dateObject1`].nt = DateObject1;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`dateUnion`].nt = DateUnion;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`interface`].nt = Interface;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`interfaceHierarchyChildA`].nt = InterfaceChildA;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`interfaceHierarchyChildB`].nt = InterfaceChildB;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`interfaceHierarchyGrandparents`].nt = InterfaceGrandparent;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`interfaceHierarchyParents`].nt = InterfaceParent;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`interfaceNonNull`].nt = Interface;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`interfaceWithArgs`].nt = Interface;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`lowerCaseUnion`].nt = lowerCaseUnion;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`object`].nt = Object1;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`objectList`].nt = Object1;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`objectListNonNull`].nt = Object1;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`objectNested`].nt = ObjectNested;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`objectNestedWithArgs`].nt = ObjectNestedWithArgs;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`objectNonNull`].nt = Object1;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`objectWithArgs`].nt = Object1;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`result`].nt = Result;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`resultNonNull`].nt = Result;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`unionFooBar`].nt = FooBarUnion;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`unionFooBarNonNull`].nt = FooBarUnion;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`unionFooBarWithArgs`].nt = FooBarUnion;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`unionObject`].nt = ObjectUnion;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.f[`unionObjectNonNull`].nt = ObjectUnion;
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
const $schemaDrivenDataMap = {
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
};
export { $schemaDrivenDataMap as schemaDrivenDataMap };
//# sourceMappingURL=schema-driven-data-map.js.map