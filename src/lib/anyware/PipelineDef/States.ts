import type { PipelineDef } from './__.js'

export namespace States {
  export interface Empty extends PipelineDef {
    steps: []
    overloads: []
  }
}
