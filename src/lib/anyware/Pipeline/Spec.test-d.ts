import { assertEqual } from '../../assert-equal.js'
import type { PipelineSpecFromSteps } from './Spec.js'

assertEqual<
  PipelineSpecFromSteps<[]>,
  { steps: []; input: object; output: object }
>()

assertEqual<
  PipelineSpecFromSteps<[{ name: 'a' }]>,
  { steps: [{ name: 'a'; slots: undefined; input: object; output: object }]; input: object; output: object }
>()
