import { GraphQLError } from 'graphql'
import { Errors } from '../../../src/lib/errors/__.js'

const date0 = new Date(0)

// const error = { errors: [{ message: `Something went wrong.` }] }
const errorAggregate = new Errors.ContextualAggregateError(`One or more errors in the execution result.`, {}, [
  new GraphQLError(`Something went wrong.`),
])

const ErrorOneError = new Error(`Failure on field result: ErrorOne`)
const ErrorTwoError = new Error(`Failure on field result: ErrorTwo`)

const id = `abc`

const int = 123

const string = `hi`

const float = 123.456

const boolean = true

const ABCEnum = {
  A: `A`,
  B: `B`,
  C: `C`,
} as const

const Object1 = {
  string,
  int,
  float,
  boolean,
  id,
  ABCEnum: ABCEnum.A,
}

const Foo = {
  id,
}

export const InterfaceChildAEnum = {
  InterfaceChildA: `InterfaceChildA`,
} as const

export const InterfaceChildBEnum = {
  InterfaceChildB: `InterfaceChildB`,
} as const

export const InterfaceParentEnum = {
  InterfaceParent: `InterfaceParent`,
  ...InterfaceChildAEnum,
  ...InterfaceChildBEnum,
} as const

export const GrandparentInterfaceHierarchyMemberEnum = {
  InterfaceGrandparent: `InterfaceGrandparent`,
  ...InterfaceParentEnum,
} as const

export namespace db {
  export interface InterfaceGrandparent {
    a: string
  }

  export interface InterfaceParent extends InterfaceGrandparent {
    b: string
  }

  export interface InterfaceChildA extends InterfaceParent {
    c1: string
  }

  export interface InterfaceChildB extends InterfaceParent {
    c2: string
  }

  export interface ObjectGrandparent extends InterfaceGrandparent {
    type: `ObjectGrandparent`
    me: number
  }

  export interface ObjectParent extends InterfaceParent {
    type: `ObjectParent`
    me: string
  }

  export interface ObjectChildA extends InterfaceChildA {
    type: `ObjectChildA`
    me: boolean
  }

  export interface ObjectChildB extends InterfaceChildB {
    type: `ObjectChildB`
    me: number[]
  }
}

const interfaceGrandparent1: db.ObjectGrandparent = {
  type: `ObjectGrandparent`,
  a: `a1`,
  me: 123,
}

const interfaceParent1: db.ObjectParent = {
  type: `ObjectParent`,
  a: `a1`,
  b: `b1`,
  me: `me1`,
}

const interfaceChildA1: db.ObjectChildA = {
  type: `ObjectChildA`,
  a: `a1`,
  b: `b1`,
  c1: `c1`,
  me: true,
}

const interfaceChildB1: db.ObjectChildB = {
  type: `ObjectChildB`,
  a: `a1`,
  b: `b1`,
  c2: `c2`,
  me: [1, 2, 3],
}

export const db = {
  interfaceHierarchMembers: {
    interfaceGrandparent1,
    interfaceParent1,
    interfaceChildA1,
    interfaceChildB1,
  },
  interfaceHierarchLists: {
    [GrandparentInterfaceHierarchyMemberEnum.InterfaceGrandparent]: {
      mixed: [interfaceGrandparent1, interfaceParent1, interfaceChildA1, interfaceChildB1],
    },
    [GrandparentInterfaceHierarchyMemberEnum.InterfaceParent]: {
      mixed: [interfaceParent1, interfaceChildA1, interfaceChildB1],
    },
    [GrandparentInterfaceHierarchyMemberEnum.InterfaceChildA]: {
      mixed: [interfaceChildA1],
    },
    [GrandparentInterfaceHierarchyMemberEnum.InterfaceChildB]: {
      mixed: [interfaceChildB1],
    },
  },
  lowerCaseObject: {
    id,
  },
  lowerCaseObject2: {
    int,
  },
  Interface: { id },
  ABCEnum: ABCEnum.A,
  ErrorOne: { message: `errorOne`, infoId: id },
  ErrorTwo: { message: `errorOne`, infoInt: int },
  ErrorOneError,
  ErrorTwoError,
  int,
  id,
  id1: id,
  string,
  date0: new Date(0),
  date0Encoded: new Date(0).toISOString(),
  date1: new Date(1),
  date1Encoded: new Date(1).toISOString(),
  Foo,
  Bar: {
    int,
  },
  Object1,
  ObjectNested: {
    id,
    nested: Object1,
  },
  ObjectUnion: {
    fooBarUnion: Foo,
  },
  DateInterface1: {
    date1: date0,
  },
  errorAggregate,
} as const

export namespace db {
  export type ABCEnum = (typeof ABCEnum)[keyof typeof ABCEnum]
}
