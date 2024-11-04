import { analyzeFunction } from '../../analyze-function.js'
import { ContextualError } from '../../errors/ContextualError.js'
import type { HookName } from '../hook/definition.js'
import type { NonRetryingInterceptorInput } from '../Interceptor.js'

export class ErrorAnywareInterceptorEntrypoint extends ContextualError<
  'ErrorGraffleInterceptorEntryHook',
  { issue: InterceptorEntryHookIssue }
> {
  // todo add to context: parameters value parsed and raw
  constructor(context: { issue: InterceptorEntryHookIssue }) {
    super(`Interceptor must destructure the first parameter passed to it and select exactly one entrypoint.`, context)
  }
}

export const InterceptorEntryHookIssue = {
  multipleParameters: `multipleParameters`,
  noParameters: `noParameters`,
  notDestructured: `notDestructured`,
  destructuredWithoutEntryHook: `destructuredWithoutEntryHook`,
  multipleDestructuredHookNames: `multipleDestructuredHookNames`,
} as const

export type InterceptorEntryHookIssue = typeof InterceptorEntryHookIssue[keyof typeof InterceptorEntryHookIssue]

export const getEntrypoint = (
  hookNames: readonly string[],
  interceptor: NonRetryingInterceptorInput,
): ErrorAnywareInterceptorEntrypoint | HookName => {
  const x = analyzeFunction(interceptor)
  if (x.parameters.length > 1) {
    return new ErrorAnywareInterceptorEntrypoint({ issue: InterceptorEntryHookIssue.multipleParameters })
  }
  const p = x.parameters[0]
  if (!p) {
    return new ErrorAnywareInterceptorEntrypoint({ issue: InterceptorEntryHookIssue.noParameters })
  } else {
    if (p.type === `name`) {
      return new ErrorAnywareInterceptorEntrypoint({ issue: InterceptorEntryHookIssue.notDestructured })
    } else {
      if (p.names.length === 0) {
        return new ErrorAnywareInterceptorEntrypoint({ issue: InterceptorEntryHookIssue.destructuredWithoutEntryHook })
      }
      const hooks = p.names.filter(_ => hookNames.includes(_ as any))

      if (hooks.length > 1) {
        return new ErrorAnywareInterceptorEntrypoint({ issue: InterceptorEntryHookIssue.multipleDestructuredHookNames })
      }
      const hook = hooks[0]
      if (!hook) {
        return new ErrorAnywareInterceptorEntrypoint({ issue: InterceptorEntryHookIssue.destructuredWithoutEntryHook })
      } else {
        return hook
      }
    }
  }
}
