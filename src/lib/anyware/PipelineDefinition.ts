import type { StepDefinition } from './StepDefinition.js'

export interface PipelineDefinition<$StepDefinitions extends StepDefinition[] = StepDefinition[]> {
  stepDefinitions: $StepDefinitions
}
