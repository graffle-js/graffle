import { Nodes } from '../runtime/__.js'
import { standardScalarTypeNames } from './scalars.js'

export const isScalarTypeCustom = (node: Nodes.ScalarType): boolean => {
  return !(node.name in standardScalarTypeNames)
}

export const isScalarTypeAndCustom = (node: unknown): node is Nodes.ScalarType => {
  return Nodes.isScalarType(node) && isScalarTypeCustom(node)
}
