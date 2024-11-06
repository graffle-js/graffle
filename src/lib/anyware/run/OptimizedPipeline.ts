import type { Pipeline } from '../Pipeline/__.js'
import type { Step } from '../Step/__.js'

export type StepsIndex = Map<Step.Name, Step>

export interface OptimizedPipeline extends Pipeline {
  stepsIndex: StepsIndex
}
export const optimizePipeline = (pipeline: Pipeline): OptimizedPipeline => {
  const stepsIndex = new Map(pipeline.steps.map(step => [step.name, step]))
  return { ...pipeline, stepsIndex }
}
