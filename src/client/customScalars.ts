import type { ExecutionResult } from 'graphql'
import { standardScalarTypeNames } from '../lib/graphql.js'
import { mapValues } from '../lib/prelude.js'
import type { Object$2, Schema } from '../Schema/__.js'
import { Output } from '../Schema/__.js'
import { readMaybeThunk } from '../Schema/core/helpers.js'
import type { SelectionSet } from './SelectionSet/__.js'
import type { Args } from './SelectionSet/SelectionSet.js'
import type { GraphQLObjectSelection } from './SelectionSet/toGraphQLDocumentString.js'

namespace SSValue {
  export type Obj = {
    $?: Args2
  }
  export type Args2 = Record<string, Arg>
  export type Arg = boolean | Arg[] | { [key: string]: Arg }
}

export const encode = (
  input: {
    index: Schema.Object$2
    documentObject: SelectionSet.Print.GraphQLObjectSelection
  },
): GraphQLObjectSelection => {
  return Object.fromEntries(
    Object.entries(input.documentObject).map(([fieldName, fieldValue]) => {
      if (typeof fieldValue === `object`) {
        if (`$` in fieldValue) {
          const field = input.index.fields[fieldName]
          if (!field?.args) throw new Error(`Field has no args: ${fieldName}`)
          if (!field) throw new Error(`Field not found: ${fieldName}`) // eslint-disable-line
          // @ts-expect-error fixme
          fieldValue.$ = encodeCustomScalarsArgs(field.args, fieldValue.$)
          return [fieldName, fieldValue]
        }
        // todo test nested inputs case
        return [fieldName, encode({ index: input.index, documentObject: fieldValue })]
      }
      return [fieldName, fieldValue]
    }),
  )
}

const encodeCustomScalarsArgs = (indexArgs: Args<any>, valueArgs: SSValue.Args2): object => {
  return Object.fromEntries(
    Object.entries(valueArgs).map(([argName, argValue]) => {
      // @ts-expect-error fixme
      const indexArg = indexArgs.fields[argName] // eslint-disable-line
      if (!indexArg) throw new Error(`Arg not found: ${argName}`)
      return [argName, encodeCustomScalarsArgValue(indexArg, argValue)]
    }),
  )
}

const encodeCustomScalarsArgValue = (indexArgMaybeThunk: Schema.Input.Any, argValue: null | SSValue.Arg): any => {
  if (argValue === null) return null // todo could check if index agrees is nullable.
  const indexArg = readMaybeThunk(indexArgMaybeThunk)
  switch (indexArg.kind) {
    case `nullable`:
      return encodeCustomScalarsArgValue(indexArg.type, argValue)
    case `list`: {
      if (!Array.isArray(argValue)) throw new Error(`Expected array. Got: ${String(argValue)}`)
      return argValue.map(_ => encodeCustomScalarsArgValue(indexArg.type, _))
    }
    case `InputObject`: {
      // dprint-ignore
      if (typeof argValue !== `object` || Array.isArray(argValue)) throw new Error(`Expected object. Got: ${String(argValue)}`)
      const fields = Object.fromEntries(Object.entries(indexArg.fields).map(([k, v]) => [k, v.type])) // eslint-disable-line
      return encodeCustomScalarsArgs({ fields }, argValue)
    }
    case `Enum`: {
      return argValue
    }
    case `Scalar`: {
      // @ts-expect-error fixme
      return indexArg.codec.encode(argValue)
    }
    default:
      throw new Error(`Unsupported arg kind: ${JSON.stringify(indexArg)}`)
  }
}

export const decode = <$Data extends ExecutionResult['data']>(index: Schema.Object$2, data: $Data): $Data => {
  if (!data) return data
  return mapValues(data, (v, fieldName) => {
    const indexField = index.fields[fieldName]
    if (!indexField) throw new Error(`Field not found: ${String(fieldName)}`)

    const type = readMaybeThunk(indexField.type)
    const typeWithoutNonNull = Output.unwrapNullable(type) as Output.Named | Output.List<any>
    const v2 = decodeCustomScalarValue(typeWithoutNonNull, v as any) // eslint-disable-line
    return v2
  }) as $Data
}

// @ts-expect-error fixme
const decodeCustomScalarValue = (
  indexType: Output.Any,
  fieldValue: string | boolean | null | number | GraphQLObject | GraphQLObject[],
) => {
  if (fieldValue === null) return null

  const indexTypeDethunked = readMaybeThunk(indexType)
  const typeWithoutNonNull = Output.unwrapNullable(indexTypeDethunked) as Exclude<Output.Any, Output.Nullable<any>>

  if (typeWithoutNonNull.kind === `list`) {
    assertArray(fieldValue)
    return fieldValue.map((v2: any) => {
      return decodeCustomScalarValue(typeWithoutNonNull.type, v2)
    })
  }

  if (typeWithoutNonNull.kind === `Scalar`) {
    if ((typeWithoutNonNull.name in standardScalarTypeNames)) {
      // todo test this case
      return fieldValue
    }
    if (typeof fieldValue === `object`) throw new Error(`Expected scalar. Got: ${String(fieldValue)}`)
    // @ts-expect-error fixme
    return typeWithoutNonNull.codec.decode(fieldValue)
  }

  if (typeWithoutNonNull.kind === `typename`) {
    return fieldValue
  }

  assertGraphQLObject(fieldValue)

  if (typeWithoutNonNull.kind === `Object`) {
    return decode(typeWithoutNonNull, fieldValue)
  }

  if (typeWithoutNonNull.kind === `Interface` || typeWithoutNonNull.kind === `Union`) {
    const possibleObjects = typeWithoutNonNull.kind === `Interface`
      ? typeWithoutNonNull.implementors
      : typeWithoutNonNull.members
    // todo handle aliases -- will require having the selection set available for reference too :/
    // eslint-disable-next-line
    // @ts-ignore infinite depth issue
    // eslint-disable-next-line
    const ObjectType = possibleObjects.find((ObjectType) => {
      if (fieldValue.__typename === ObjectType.fields.__typename.type.type) return true
      if (Object.keys(fieldValue).every(fieldName => ObjectType.fields[fieldName] !== undefined)) return true
      return false
    }) as undefined | Object$2
    if (!ObjectType) throw new Error(`Could not pick object for ${typeWithoutNonNull.kind} selection`)
    return decode(ObjectType, fieldValue)
  }

  return fieldValue
}

// eslint-disable-next-line
function assertArray(v: unknown): asserts v is unknown[] {
  if (!Array.isArray(v)) throw new Error(`Expected array. Got: ${String(v)}`)
}

// eslint-disable-next-line
function assertObject(v: unknown): asserts v is object {
  if (v === null || typeof v !== `object`) throw new Error(`Expected object. Got: ${String(v)}`)
}

// eslint-disable-next-line
function assertGraphQLObject(v: unknown): asserts v is GraphQLObject {
  assertObject(v)
  if (`__typename` in v && typeof v.__typename !== `string`) {
    throw new Error(`Expected string __typename or undefined. Got: ${String(v.__typename)}`)
  }
}

type GraphQLObject = {
  __typename?: string
}
