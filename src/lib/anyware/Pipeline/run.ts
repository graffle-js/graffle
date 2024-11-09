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
export const run: Run = (_pipeline, _params) => {
  // todo
  return undefined as any
}
