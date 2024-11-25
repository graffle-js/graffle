// import type { ConfigManager } from '../../config-manager/__.js'
// import type { Objekt, Tuple } from '../../prelude.js'
// import { createStepsIndex, type StepsIndex } from '../Pipeline/Pipeline.js'
// import { type Config, type Options, resolveOptions } from '../PipelineDef/Config.js'
// import type { Step } from '../Step.js'
// import type { StepDef } from '../StepDef.js'
// import type { PipelineSpecification } from './Spec.js'

// export const createWithSpec = <$PipelineSpec extends PipelineSpecification>(
//   input: {
//     options?: Options
//     steps: InferStepsInput<$PipelineSpec['steps']>
//   },
// ): InferPipelineExecutable<$PipelineSpec> => {
//   const config = resolveOptions(input.options)
//   const stepsIndex = createStepsIndex(input.steps)
//   return {
//     config,
//     stepsIndex,
//     steps: input.steps,
//   } as any
// }

// type InferPipelineExecutable<$PipelineSpec extends PipelineSpecification> = {
//   input: $PipelineSpec['input']
//   output: $PipelineSpec['output']
//   steps: InferExecutableSteps<$PipelineSpec['steps']>
//   stepsIndex: StepsIndex
//   config: Config
// }

// type InferStepsInput<$NextStepDefinitions extends StepDef[]> = InferExecutableSteps_<
//   [],
//   $NextStepDefinitions,
//   { types: false }
// >

// type InferExecutableSteps<$NextStepDefinitions extends StepDef[]> = InferExecutableSteps_<
//   [],
//   $NextStepDefinitions,
//   { types: true }
// >

// // dprint-ignore
// type InferExecutableSteps_<
//   $PreviousStepSpecs extends StepDef[],
//   $NextStepSpecs extends StepDef[],
//   $Options extends { types: boolean },
// > =
//   $NextStepSpecs extends [infer $StepSpec extends StepDef, ...infer $RestStepSpecs extends StepDef[]]
//     ? [
//         & (
//             $Options['types'] extends true
//               ? {
//                   input: $StepSpec['input']
//                   output: $StepSpec['output']
//                 }
//               : {}
//           )
//         & {
//             name: $StepSpec['name']
//             run: (parameters:
//               & {
//                   input: $StepSpec['input']
//                   previous: GetParameterPrevious<$PreviousStepSpecs>
//                 }
//               & (
//                   $StepSpec['slots'] extends Step.Slots
//                     ? {
//                         slots: $StepSpec['slots']
//                       }
//                     : {}
//                 )
//             ) => $StepSpec['output']
//           }
//         & (
//           Objekt.IsEmpty<$StepSpec['slots']> extends true
//             ? {}
//             : {
//                 slots: $StepSpec['slots']
//               }
//         )
//       , ...InferExecutableSteps_<[...$PreviousStepSpecs, $StepSpec], $RestStepSpecs, $Options>]
//     : []

// type GetParameterPrevious<$StepDefinitions extends StepDef[]> = Tuple.IntersectItems<
//   {
//     [$Index in keyof $StepDefinitions]: {
//       [$StepName in $StepDefinitions[$Index]['name']]: {
//         input: $StepDefinitions[$Index]['input']
//         output: ConfigManager.OrDefault<
//           $StepDefinitions[$Index]['output'],
//           Tuple.GetAtNextIndex<$StepDefinitions, $Index>['input']
//         >
//       }
//     }
//   }
// >
