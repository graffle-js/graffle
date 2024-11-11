import { createRunner } from '../_.js'
import type { Pipeline } from '../Pipeline/__.js'
import type { Result } from '../Pipeline/Result.js'
import type { Params } from './runner.js'

type Run = <
  $Pipeline extends Pipeline.PipelineExecutable,
  $Params extends Params<$Pipeline>,
>(
  pipeline: $Pipeline,
  params?: $Params,
) => Promise<
  Result<$Pipeline['output']>
>

/**
 * todo
 */
export const run: Run = async (pipeline, params) => {
  const runner = createRunner(pipeline)
  return await runner(params as any) as any
}
