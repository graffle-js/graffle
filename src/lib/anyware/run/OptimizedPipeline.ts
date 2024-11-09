import type { ExecutableStep } from '../ExecutableStep.js'
import type { Pipeline } from '../Pipeline/__.js'
import type { Step } from '../Step.js'

export type StepsIndex = Map<Step.Name, ExecutableStep>

export interface OptimizedPipeline extends Pipeline {
  stepsIndex: StepsIndex
}

export const optimizePipeline = (pipeline: Pipeline): OptimizedPipeline => {
  const stepsIndex = new Map(pipeline.steps.map(step => [step.name, step]))
  return { ...pipeline, stepsIndex }
}
