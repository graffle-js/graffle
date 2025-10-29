import type { Kind as GraphQLKind } from 'graphql'

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

/** Type System Definitions */
export const SCHEMA_DEFINITION = `SchemaDefinition` as GraphQLKind.SCHEMA_DEFINITION
export const OPERATION_TYPE_DEFINITION = `OperationTypeDefinition` as GraphQLKind.OPERATION_TYPE_DEFINITION

/** Type Definitions */
export const SCALAR_TYPE_DEFINITION = `ScalarTypeDefinition` as GraphQLKind.SCALAR_TYPE_DEFINITION
export const OBJECT_TYPE_DEFINITION = `ObjectTypeDefinition` as GraphQLKind.OBJECT_TYPE_DEFINITION
export const FIELD_DEFINITION = `FieldDefinition` as GraphQLKind.FIELD_DEFINITION
export const INPUT_VALUE_DEFINITION = `InputValueDefinition` as GraphQLKind.INPUT_VALUE_DEFINITION
export const INTERFACE_TYPE_DEFINITION = `InterfaceTypeDefinition` as GraphQLKind.INTERFACE_TYPE_DEFINITION
export const UNION_TYPE_DEFINITION = `UnionTypeDefinition` as GraphQLKind.UNION_TYPE_DEFINITION
export const ENUM_TYPE_DEFINITION = `EnumTypeDefinition` as GraphQLKind.ENUM_TYPE_DEFINITION
export const ENUM_VALUE_DEFINITION = `EnumValueDefinition` as GraphQLKind.ENUM_VALUE_DEFINITION
export const INPUT_OBJECT_TYPE_DEFINITION = `InputObjectTypeDefinition` as GraphQLKind.INPUT_OBJECT_TYPE_DEFINITION

/** Directive Definitions */
export const DIRECTIVE_DEFINITION = `DirectiveDefinition` as GraphQLKind.DIRECTIVE_DEFINITION

/** Type System Extensions */
export const SCHEMA_EXTENSION = `SchemaExtension` as GraphQLKind.SCHEMA_EXTENSION

/** Type Extensions */
export const SCALAR_TYPE_EXTENSION = `ScalarTypeExtension` as GraphQLKind.SCALAR_TYPE_EXTENSION
export const OBJECT_TYPE_EXTENSION = `ObjectTypeExtension` as GraphQLKind.OBJECT_TYPE_EXTENSION
export const INTERFACE_TYPE_EXTENSION = `InterfaceTypeExtension` as GraphQLKind.INTERFACE_TYPE_EXTENSION
export const UNION_TYPE_EXTENSION = `UnionTypeExtension` as GraphQLKind.UNION_TYPE_EXTENSION
export const ENUM_TYPE_EXTENSION = `EnumTypeExtension` as GraphQLKind.ENUM_TYPE_EXTENSION
export const INPUT_OBJECT_TYPE_EXTENSION = `InputObjectTypeExtension` as GraphQLKind.INPUT_OBJECT_TYPE_EXTENSION
