import type { ConfigManager } from '../../config-manager/__.js'
import type { Tuple } from '../../prelude.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { Pipeline } from './__.js'

// dprint-ignore
export type GetNextStepParameterPrevious<$Pipeline extends Pipeline> =
  $Pipeline['steps'] extends [any, ...any[]]
    ? GetNextStepPrevious_<$Pipeline['steps']>
    : undefined

export type GetNextStepPrevious_<$StepDefinitions extends StepDefinition[]> = Tuple.IntersectItems<
  {
    [$Index in keyof $StepDefinitions]: {
      [$StepName in $StepDefinitions[$Index]['name']]: {
        input: $StepDefinitions[$Index]['input']
        output: ConfigManager.OrDefault<
          $StepDefinitions[$Index]['output'],
          Tuple.GetAtNextIndex<$StepDefinitions, $Index>['input']
        >
      }
    }
  }
>
