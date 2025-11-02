import type {
  ArgumentNode,
  BooleanValueNode,
  DirectiveNode,
  DocumentNode,
  EnumValueNode,
  FieldNode,
  FloatValueNode,
  InlineFragmentNode,
  IntValueNode,
  ListValueNode,
  NamedTypeNode,
  NameNode,
  NullValueNode,
  ObjectFieldNode,
  ObjectValueNode,
  OperationDefinitionNode,
  SelectionSetNode,
  StringValueNode,
  ValueNode,
  VariableDefinitionNode,
  VariableNode,
} from 'graphql'
import type { HasRequiredKeys } from 'type-fest'
import * as Kind from './kind.js'

export type Constructor<$Node> = (
  ...input: HasRequiredKeys<Omit<$Node, 'kind'>> extends true ? [Omit<$Node, 'kind'>] : [] | [Omit<$Node, 'kind'>]
) => $Node

export const Directive: Constructor<DirectiveNode> = (directive) => {
  return {
    kind: Kind.DIRECTIVE,
    ...directive,
  }
}

export const Name: Constructor<NameNode> = (name) => {
  return {
    kind: Kind.NAME,
    ...name,
  }
}

export const Value = (value: ValueNode) => {
  return value
}

export const Argument: Constructor<ArgumentNode> = (argument) => {
  return {
    kind: Kind.ARGUMENT,
    ...argument,
  }
}

export const Document: Constructor<DocumentNode> = (document) => {
  return {
    kind: Kind.DOCUMENT,
    ...document,
  }
}

export const OperationDefinition: Constructor<OperationDefinitionNode> = (operationDefinition) => {
  return {
    kind: Kind.OPERATION_DEFINITION,
    ...operationDefinition,
  }
}

export const SelectionSet: Constructor<SelectionSetNode> = (selectionSet) => {
  return {
    kind: Kind.SELECTION_SET,
    ...selectionSet,
  }
}

export const VariableDefinition: Constructor<VariableDefinitionNode> = (variableDefinition) => {
  return {
    kind: Kind.VARIABLE_DEFINITION,
    ...variableDefinition,
  }
}

export const InlineFragment: Constructor<InlineFragmentNode> = (inlineFragment) => {
  return {
    kind: Kind.INLINE_FRAGMENT,
    ...inlineFragment,
  }
}

export const NamedType: Constructor<NamedTypeNode> = (namedType) => {
  return {
    kind: Kind.NAMED_TYPE,
    ...namedType,
  }
}

export const Field: Constructor<FieldNode> = (field) => {
  return {
    kind: Kind.FIELD,
    ...field,
  }
}

export const EnumValue: Constructor<EnumValueNode> = (enumValue) => {
  return {
    kind: Kind.ENUM,
    ...enumValue,
  }
}

export const IntValue: Constructor<IntValueNode> = (intValue) => {
  return {
    kind: Kind.INT,
    ...intValue,
  }
}

export const FloatValue: Constructor<FloatValueNode> = (floatValue) => {
  return {
    kind: Kind.FLOAT,
    ...floatValue,
  }
}

export const StringValue: Constructor<StringValueNode> = (stringValue) => {
  return {
    kind: Kind.STRING,
    ...stringValue,
  }
}

export const BooleanValue: Constructor<BooleanValueNode> = (booleanValue) => {
  return {
    kind: Kind.BOOLEAN,
    ...booleanValue,
  }
}

export const Variable: Constructor<VariableNode> = (variable) => {
  return {
    kind: Kind.VARIABLE,
    ...variable,
  }
}

export const ListValue: Constructor<ListValueNode> = (listValue) => {
  return {
    kind: Kind.LIST,
    ...listValue,
  }
}

export const NullValue: Constructor<NullValueNode> = () => {
  return {
    kind: Kind.NULL,
  }
}

export const ObjectValue: Constructor<ObjectValueNode> = (objectValue) => {
  return {
    kind: Kind.OBJECT,
    ...objectValue,
  }
}

export const ObjectField: Constructor<ObjectFieldNode> = (objectField) => {
  return {
    kind: Kind.OBJECT_FIELD,
    ...objectField,
  }
}
