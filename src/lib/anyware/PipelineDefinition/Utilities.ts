import type { Tup } from '@wollybeard/kit'
import type { Result } from '../Result.js'
import type { PipelineDefinition } from './$.js'

export namespace Utilities {
  // dprint-ignore
  export type InferOutput<$PipelineDef extends PipelineDefinition> =
		Awaited<
			$PipelineDef['steps'] extends Tup.NonEmpty
        ? Tup.GetLastValue<$PipelineDef['steps']>['output']
        : $PipelineDef['input']
    >

  // dprint-ignore
  export type InferResult<$PipelineDef extends PipelineDefinition> =
		Result<InferOutput<$PipelineDef>>
}
