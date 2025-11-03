import { type GraphQLField, type GraphQLInputField as InputField } from 'graphql'

export {
  type GraphQLArgument as Argument,
  GraphQLEnumType as EnumType,
  type GraphQLEnumValue as EnumValue,
  type GraphQLField as Field,
  type GraphQLInputField as InputField,
  GraphQLInputObjectType as InputObject,
  GraphQLInterfaceType as InterfaceType,
  GraphQLList as ListType,
  GraphQLNonNull as NonNullType,
  GraphQLObjectType as ObjectType,
  GraphQLScalarType as ScalarType,
  GraphQLSchema as Schema,
  GraphQLUnionType as UnionType,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isListType,
  isNonNullType,
  isNullableType,
  isObjectType,
  isRequiredArgument,
  isRequiredInputField,
  isScalarType,
  isUnionType,
} from 'graphql'

export type OutputField<TSource = any, TContext = any, TArgs = any> = GraphQLField<TSource, TContext, TArgs>

export const isOutputField = (value: object): value is OutputField => {
  return `args` in value
}
