import { analyzeFunction } from '../../analyze-function.js'
import { ContextualError } from '../../errors/ContextualError.js'
import type { NonRetryingInterceptorInput } from '../Interceptor/Interceptor.js'
import type { Step } from '../Step/__.js'
import type { StepsIndex } from './OptimizedPipeline.js'

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

export const getEntryStep = (
  stepsIndex: StepsIndex,
  interceptor: NonRetryingInterceptorInput,
): ErrorAnywareInterceptorEntrypoint | Step => {
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
      const steps = p.names.filter(_ => stepsIndex.has(_))

      if (steps.length > 1) {
        return new ErrorAnywareInterceptorEntrypoint({ issue: InterceptorEntryHookIssue.multipleDestructuredHookNames })
      }
      const stepName = steps[0]

      if (!stepName) {
        // todo: destructured with invalid names
        return new ErrorAnywareInterceptorEntrypoint({ issue: InterceptorEntryHookIssue.multipleDestructuredHookNames })
      }

      const step = stepsIndex.get(stepName)
      if (!step) {
        return new ErrorAnywareInterceptorEntrypoint({ issue: InterceptorEntryHookIssue.destructuredWithoutEntryHook })
      } else {
        return step
      }
    }
  }
}