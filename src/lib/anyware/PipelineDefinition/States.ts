import type { PipelineDefinition } from './_namespace.js'

export namespace States {
  export interface Empty extends PipelineDefinition {
    steps: []
    overloads: []
  }
}
