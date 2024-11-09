import { assertEqual } from '../../assert-equal.js'
import type { MaybePromise } from '../../prelude.js'
import type { Config } from './Config.js'
import { createWithSpec } from './createWithSpec.js'
import type { StepsIndex } from './Executable.js'
import type { PipelineSpecFromSteps } from './Spec.js'

{
  type Spec = PipelineSpecFromSteps<[]>
  const p = createWithSpec<Spec>({ steps: [] })
  assertEqual<typeof p, { config: Config; input: object; output: unknown; steps: []; stepsIndex: StepsIndex }>()
}

{
  type Spec = PipelineSpecFromSteps<[{ name: 'a'; output: 1 }]>
  const p = createWithSpec<Spec>({ steps: [{ name: `a`, run: () => 1 }] })
  type p = typeof p
  assertEqual<
    p,
    {
      config: Config
      input: object
      output: 1
      steps: [
        { run: (...arg: any[]) => any; name: `a`; input: object; output: MaybePromise<1> },
      ]
      stepsIndex: StepsIndex
    }
  >()
}
