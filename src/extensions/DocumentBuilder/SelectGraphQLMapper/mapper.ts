import type { SchemaDrivenDataMap } from '../../../types/SchemaDrivenDataMap/_namespace.js'
import type { OperationContext } from './context.js'

export type GraphQLPreOperationMapper<
  $SDDMNode extends SchemaDrivenDataMap.Node,
  $Return,
  $Args extends [...any[]] = [],
> = (
  ...args: [
    sddmNode: undefined | $SDDMNode,
    ...$Args,
  ]
) => $Return

export type GraphQLPostOperationMapper<
  $SDDMNode extends SchemaDrivenDataMap.Node,
  $Return,
  $Args extends [...any[]] = [],
  $ContextExtension extends object = {},
> = (
  ...args: [
    context: OperationContext & $ContextExtension,
    sddmNode: undefined | $SDDMNode,
    ...$Args,
  ]
) => $Return
