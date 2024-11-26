import type { Tuple } from '../../prelude.js'
import type { Result } from '../Result.js'
import type { PipelineDefinition } from './__.js'

export namespace Utilities {
  // dprint-ignore
  export type InferOutput<$PipelineDef extends PipelineDefinition> =
		Awaited<
			$PipelineDef['steps'] extends Tuple.NonEmpty
        ? Tuple.GetLastValue<$PipelineDef['steps']>['output']
        : $PipelineDef['input']
    >

  // dprint-ignore
  export type InferResult<$PipelineDef extends PipelineDefinition> =
		Result<InferOutput<$PipelineDef>>
}
