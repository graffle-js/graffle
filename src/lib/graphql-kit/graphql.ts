import { Lang } from '@wollybeard/kit'
import type { GraphQLNamedType } from 'graphql'
import { isEnumType, isInputObjectType, isInterfaceType, isObjectType, isScalarType, isUnionType } from 'graphql'
import type { KindMap } from './schema/schema.js'
import { isScalarTypeCustom } from './schema/schema.js'

export {
  type ExecutionResult,
  type FormattedExecutionResult,
  GraphQLError,
  type GraphQLFormattedError as FormattedExecutionResultError,
} from 'graphql'

export const getTypeAndKind = (
  node: GraphQLNamedType,
): {
  typeName: string
  kindName: KindMap.KindName
} => {
  const typeName = node.name

  let kindName: KindMap.KindName

  if (isScalarType(node)) {
    kindName = isScalarTypeCustom(node) ? `ScalarCustom` : `ScalarStandard`
  } else if (isUnionType(node)) {
    kindName = `Union`
  } else if (isInterfaceType(node)) {
    kindName = `Interface`
  } else if (isObjectType(node)) {
    kindName = `OutputObject`
  } else if (isInputObjectType(node)) {
    kindName = `InputObject`
  } else if (isEnumType(node)) {
    kindName = `Enum`
  } else {
    throw Lang.neverCase(node)
  }
  return { typeName, kindName }
}
