import { createRunner } from '../_.js'
import type { Interceptor } from '../Interceptor/Interceptor.js'
import type { Pipeline } from './__.js'
import type { Result } from './Result.js'

interface Params {
  initialInput: object
  interceptors: Interceptor[]
}

type Run = <
  $Pipeline extends Pipeline.PipelineExecutable,
  $Params extends Params,
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
