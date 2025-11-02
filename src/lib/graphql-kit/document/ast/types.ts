import type {
  ArgumentNode,
  BooleanValueNode,
  DirectiveNode,
  DocumentNode,
  EnumValueNode,
  FieldNode,
  FloatValueNode,
  FragmentSpreadNode,
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
import * as Kind from './kind.js'

export type {
  ArgumentNode,
  BooleanValueNode,
  DefinitionNode,
  DirectiveNode,
  DocumentNode,
  FieldNode,
  FloatValueNode,
  FragmentSpreadNode,
  InlineFragmentNode,
  IntValueNode,
  ListValueNode,
  NameNode,
  NullValueNode,
  ObjectFieldNode,
  ObjectValueNode,
  OperationDefinitionNode,
  OperationTypeDefinitionNode,
  SelectionNode,
  SelectionSetNode,
  StringValueNode,
  ValueNode,
  VariableDefinitionNode,
  VariableNode,
} from 'graphql'

export type $Any =
  | DirectiveNode
  | NameNode
  | ValueNode
  | VariableDefinitionNode
  | SelectionSetNode
  | InlineFragmentNode
  | OperationDefinitionNode
  | NamedTypeNode
  | FieldNode
  | FragmentSpreadNode
  | DocumentNode
  | ArgumentNode
  | EnumValueNode
  | ListValueNode
  | NullValueNode
  | ObjectValueNode
  | ObjectFieldNode
  | VariableNode
  | StringValueNode
  | IntValueNode
  | FloatValueNode
  | BooleanValueNode

export namespace $KindGroups {
  export type StandardScalar =
    | typeof Kind.STRING
    | typeof Kind.INT
    | typeof Kind.BOOLEAN
    | typeof Kind.FLOAT
}
