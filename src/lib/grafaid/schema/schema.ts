import {
  type GraphQLArgument,
  GraphQLEnumType,
  type GraphQLEnumValue,
  type GraphQLField,
  type GraphQLInputField,
  GraphQLInterfaceType,
  GraphQLList,
  type GraphQLNamedType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLUnionType,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isObjectType,
  isUnionType,
} from 'graphql'
import { GraphQLInputObjectType, isScalarType } from 'graphql'

export {
  buildClientSchema,
  buildSchema,
  getNamedType,
  getNullableType,
  type GraphQLArgument as Argument,
  GraphQLEnumType as EnumType,
  type GraphQLEnumValue as EnumValue,
  type GraphQLField as Field,
  type GraphQLInputField as InputField,
  GraphQLInputObjectType as InputObjectType,
  type GraphQLInputType as InputTypes,
  GraphQLInterfaceType as InterfaceType,
  GraphQLList as ListType,
  type GraphQLNamedType as NamedTypes,
  GraphQLNonNull as NonNullType,
  GraphQLObjectType as ObjectType,
  GraphQLScalarType as ScalarType,
  GraphQLSchema as Schema,
  type GraphQLType as Types,
  GraphQLUnionType as UnionType,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isListType,
  isNamedType,
  isNonNullType,
  isNullableType,
  isObjectType,
  isRequiredArgument,
  isRequiredInputField,
  isScalarType,
  isUnionType,
  printSchema as print,
} from 'graphql'

export * as Args from './args.js'

export * as CustomScalars from './customScalars.js'

export * from './KindMap/__.js'

export * from './typeGuards.js'

export * from './scalars.js'

export type DeprecatableNodes = GraphQLEnumValue | InputOrOutputField

export const isDeprecatableNode = (node: object): node is DeprecatableNodes => {
  return `deprecationReason` in node
}

export type InputOrOutputField = GraphQLField<any, any> | GraphQLInputField

export type AnyNamedClassName = keyof NamedNameToClass

export type NamedNameToClass = typeof NamedNameToClass

export type NameToClass = typeof NameToClass

export const NamedNameToClass = {
  GraphQLScalarType: GraphQLScalarType,
  GraphQLObjectType: GraphQLObjectType,
  GraphQLInterfaceType: GraphQLInterfaceType,
  GraphQLUnionType: GraphQLUnionType,
  GraphQLEnumType: GraphQLEnumType,
  GraphQLInputObjectType: GraphQLInputObjectType,
} as const

export const NameToClass = {
  GraphQLNonNull: GraphQLNonNull,
  GraphQLList: GraphQLList,
  ...NamedNameToClass,
} as const

export type FieldTypes = GraphQLField<any, any> | GraphQLInputField
export type DescribableTypes =
  | GraphQLNamedType
  | InputOrOutputField

export type InputFieldLikeTypes = GraphQLArgument | GraphQLInputField

export const NameToClassNamedType = {
  GraphQLScalarType: GraphQLScalarType,
  GraphQLObjectType: GraphQLObjectType,
  GraphQLInterfaceType: GraphQLInterfaceType,
  GraphQLUnionType: GraphQLUnionType,
  GraphQLEnumType: GraphQLEnumType,
  GraphQLInputObjectType: GraphQLInputObjectType,
}

export type NameToClassNamedType = typeof NameToClassNamedType

export type NodeName = keyof NameToClass

// export type AnyClass = InstanceType<NameToClass[keyof NameToClass]>

// dprint-ignore
export type ClassToName<C> =
    C extends GraphQLScalarType ? `GraphQLScalarType`
  : C extends GraphQLObjectType ? `GraphQLObjectType`
  : C extends GraphQLInterfaceType ? `GraphQLInterfaceType`
  : C extends GraphQLUnionType ? `GraphQLUnionType`
  : C extends GraphQLEnumType ? `GraphQLEnumType`
  : C extends GraphQLInputObjectType ? `GraphQLInputObjectType`
  : C extends GraphQLList<any> ? `GraphQLList`
  : C extends GraphQLNonNull<any> ? `GraphQLNonNull`
  : never

export const getTypeKind = <$Node extends GraphQLNamedType>(node: $Node): ClassToName<$Node> => {
  switch (true) {
    case isObjectType(node):
      return `GraphQLObjectType` as ClassToName<$Node>
    case isInputObjectType(node):
      return `GraphQLInputObjectType` as ClassToName<$Node>
    case isUnionType(node):
      return `GraphQLUnionType` as ClassToName<$Node>
    case isInterfaceType(node):
      return `GraphQLInterfaceType` as ClassToName<$Node>
    case isEnumType(node):
      return `GraphQLEnumType` as ClassToName<$Node>
    case isScalarType(node):
      return `GraphQLScalarType` as ClassToName<$Node>
    default:
      throw new Error(`Unknown node kind: ${String(node)}`)
  }
}

export const TypeKind = {
  Scalar: `Scalar`,
  Enum: `Enum`,
  Object: `Object`,
  InputObject: `InputObject`,
  Union: `Union`,
  Interface: `Interface`,
}

export namespace TypeKind {
  export type Enum = `Enum`
  export type InputObject = `InputObject`
  export type Object = `Object`
  export type Union = `Union`
  export type Interface = `Interface`
}

export type TypeNamedKind = keyof typeof TypeKind

export type NamedTypeKind = TypeNamedKind | `Root`
