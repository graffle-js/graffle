import { type GraphQLField, type GraphQLInputField } from 'graphql'

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

export type FieldTypes = GraphQLField<any, any> | GraphQLInputField
