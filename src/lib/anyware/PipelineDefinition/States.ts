import type { PipelineDefinition } from './__.js'

export namespace States {
  export interface Empty extends PipelineDefinition {
    steps: []
    overloads: []
  }
}
