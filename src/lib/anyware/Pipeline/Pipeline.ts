import type { IsUnknown, Simplify } from 'type-fest'
import type { ExcludeUndefined, Tuple } from '../../prelude.js'
import type { PipelineDef } from '../_.js'
import type { Overload } from '../Overload/__.js'
import type { Config } from '../PipelineDef/Config.js'
import type { Step } from '../Step.js'
import type { StepDef } from '../StepDef.js'
import type { StepRunner } from '../StepRunner.js'

export interface Pipeline {
  config: Config
  input: object
  steps: Step[]
  stepsIndex: StepsIndex
  output: any
}

export type StepsIndex<
  $Name extends Step['name'] = Step['name'],
  $ExecutableStep extends Step = Step,
> = Map<$Name, $ExecutableStep>

export const createStepsIndex = <$Steps extends Step[]>(steps: $Steps): StepsIndex => {
  return new Map(steps.map(step => [step.name, step]))
}

export namespace Pipeline {
  export const create = <$PipelineSpec extends PipelineDef>(
    pipeline: $PipelineSpec,
  ): Simplify<InferFromDefinition<$PipelineSpec>> => {
    let steps = pipeline.steps as unknown as Step[]
    if (pipeline.overloads.length > 0) {
      steps = steps.map((step): Step => {
        const stepOverloads = pipeline.overloads
          .map(overload => {
            const stepOverload = overload.steps[step.name]
            if (!stepOverload) return null
            return {
              ...(stepOverload as unknown as Step),
              discriminant: overload.discriminant,
            }
          })
          .filter(_ => _ !== null)

        const stepWithOverloads = {
          name: step.name,
          run: (...args: Parameters<StepRunner>) => {
            const input = args[0] as Record<string, unknown>
            const stepOverload = stepOverloads.find(stepOverload => {
              return input[stepOverload.discriminant[0]] === stepOverload.discriminant[1]
            })
            if (stepOverload) return stepOverload.run(...args)
            return step.run(...args)
          },
          slots: {
            ...step.slots,
            ...stepOverloads.reduce((acc, stepOverload) => {
              return {
                ...acc,
                ...stepOverload.slots,
              }
            }, {}),
          },
        }

        return stepWithOverloads as Step
      })
    }

    const stepsIndex = createStepsIndex(steps)

    return {
      ...pipeline,
      steps, // todo: it is a bug to not have this here, but removing it and no anyware test breaks!
      stepsIndex,
    } as any
  }

  // dprint-ignore
  export type InferFromDefinition<$PipelineDef extends PipelineDef> =
    InferFromDefinition_<$PipelineDef, InferSteps<$PipelineDef>>
  // dprint-ignore
  export type InferFromDefinition_<
    $PipelineDef extends PipelineDef,
    $Steps extends Step[],
  > = {
    config: $PipelineDef['config']
    steps: $Steps
    stepsIndex: StepsIndex<
      $PipelineDef['steps'][number]['name'],
      $Steps[number]
    >
    input: $Steps extends Tuple.NonEmpty
      ? $Steps[0]['input']
      : $PipelineDef['input']
    output: 
      $Steps extends Tuple.NonEmpty
        ? Awaited<Tuple.GetLastValue<$Steps>['output']>
        : $PipelineDef['input']
  }
}

// dprint-ignore
type InferSteps<$PipelineDef extends PipelineDef> =
  InferSteps_<$PipelineDef['steps'], $PipelineDef>
// dprint-ignore
type InferSteps_<
  $StepDefs extends StepDef[],
  $PipelineDef extends PipelineDef,
> = {
  [$Index in keyof $StepDefs]: {
    name: $StepDefs[$Index]['name']
    input: Simplify<
      Tuple.IsEmpty<$PipelineDef['overloads']> extends true
        ? $StepDefs[$Index]['input']
        : InferStepInput<
            $Index,
            $StepDefs[$Index],
            $PipelineDef['overloads'][number]
          >
    >
    output: Simplify<
      Tuple.IsEmpty<$PipelineDef['overloads']> extends true
        ? $StepDefs[$Index]['output']
        : InferStepOutput<
            $StepDefs[$Index],
            $PipelineDef['overloads'][number]
          >
    >
    slots: Tuple.IsEmpty<$PipelineDef['overloads']> extends true
          ? $StepDefs[$Index]['slots']
          : InferStepSlots<
              $StepDefs[$Index],
              $PipelineDef['overloads']
            >
    run: IsUnknown<$StepDefs[$Index]['run']> extends true
      ? StepRunner
      : ExcludeUndefined<$StepDefs[$Index]['run']>
  }
}

type InferStepSlots<$Step extends StepDef, $Overloads extends Overload[]> =
  & $Step['slots']
  & InferStepSlots_<$Step, $Overloads>
// dprint-ignore
type InferStepSlots_<$Step extends StepDef, $Overloads extends Overload[]> =
  Tuple.IntersectItems<{
    [$Index in keyof $Overloads]:
      IsUnknown<$Overloads[$Index]['steps'][$Step['name']]> extends true
        ? unknown
        : $Overloads[$Index]['steps'][$Step['name']]['slots']
  }>

// dprint-ignore
type InferStepOutput<$Step extends StepDef, $Overload extends Overload> = $Overload extends never ? never :
  & $Step['output']
  & { [_ in $Overload['discriminant'][0]]: $Overload['discriminant'][1] }
  & $Overload['steps'][$Step['name']]['output']

// dprint-ignore
type InferStepInput<
  $StepIndex extends Tuple.IndexKey,
  $StepDef extends StepDef,
  $Overload extends Overload,
> = $Overload extends never ? never :
  & $StepDef['input']
  // Overload Contributions:
  // 1. The discriminant:
  & { [_ in $Overload['discriminant'][0]]: $Overload['discriminant'][1] }
  // 2. This specific step:
  & $Overload['steps'][$StepDef['name']]['input']
  // 3. If this is the first step, then the pipeline input contributions, if any:
  & ($StepIndex extends '0' ? $Overload['input'] : {})
