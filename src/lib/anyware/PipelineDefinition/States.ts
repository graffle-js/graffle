import type { PipelineDefinition } from './$.js'

export namespace States {
  export interface Empty extends PipelineDefinition {
    steps: []
    overloads: []
  }
}
