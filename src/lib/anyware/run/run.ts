import { createRunner } from '../_.js'
import type { Pipeline } from '../Pipeline/__.js'
import type { Params } from './runner.js'

type Run = <
  $Pipeline extends Pipeline.ExecutablePipeline,
  $Params extends Params<$Pipeline['spec']>,
>(
  pipeline: $Pipeline,
  params?: $Params,
) => Promise<$Pipeline['output']>

/**
 * todo
 */
export const run: Run = async (pipeline, params) => {
  const runner = createRunner(pipeline)
  return await runner(params as any) as any
}
