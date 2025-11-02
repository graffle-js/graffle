import type { Kind as GraphQLKind } from 'graphql'

export type Kind = GraphQLKind

/** Document Structure */
export const NAME = `Name` as GraphQLKind.NAME
export const DOCUMENT = `Document` as GraphQLKind.DOCUMENT
export const OPERATION_DEFINITION = `OperationDefinition` as GraphQLKind.OPERATION_DEFINITION
export const VARIABLE_DEFINITION = `VariableDefinition` as GraphQLKind.VARIABLE_DEFINITION
export const SELECTION_SET = `SelectionSet` as GraphQLKind.SELECTION_SET
export const FIELD = `Field` as GraphQLKind.FIELD
export const ARGUMENT = `Argument` as GraphQLKind.ARGUMENT

/** Fragments */
export const FRAGMENT_SPREAD = `FragmentSpread` as GraphQLKind.FRAGMENT_SPREAD
export const INLINE_FRAGMENT = `InlineFragment` as GraphQLKind.INLINE_FRAGMENT
export const FRAGMENT_DEFINITION = `FragmentDefinition` as GraphQLKind.FRAGMENT_DEFINITION

/** Values */
export const VARIABLE = `Variable` as GraphQLKind.VARIABLE
export const INT = `IntValue` as GraphQLKind.INT
export const FLOAT = `FloatValue` as GraphQLKind.FLOAT
export const STRING = `StringValue` as GraphQLKind.STRING
export const BOOLEAN = `BooleanValue` as GraphQLKind.BOOLEAN
export const NULL = `NullValue` as GraphQLKind.NULL
export const ENUM = `EnumValue` as GraphQLKind.ENUM
export const LIST = `ListValue` as GraphQLKind.LIST
export const OBJECT = `ObjectValue` as GraphQLKind.OBJECT
export const OBJECT_FIELD = `ObjectField` as GraphQLKind.OBJECT_FIELD

/** Directives */
export const DIRECTIVE = `Directive` as GraphQLKind.DIRECTIVE

/** Types */
export const NAMED_TYPE = `NamedType` as GraphQLKind.NAMED_TYPE
export const LIST_TYPE = `ListType` as GraphQLKind.LIST_TYPE
export const NON_NULL_TYPE = `NonNullType` as GraphQLKind.NON_NULL_TYPE
