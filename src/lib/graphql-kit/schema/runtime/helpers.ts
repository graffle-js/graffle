import { Nodes } from './__.js'

export const isAllInputObjectFieldsNullable = (node: Nodes.InputObjectType) => {
  return Object.values(node.getFields()).some(_ => !Nodes.isNonNullType(_.type))
}
