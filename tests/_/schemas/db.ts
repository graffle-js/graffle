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

export const db = {
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
