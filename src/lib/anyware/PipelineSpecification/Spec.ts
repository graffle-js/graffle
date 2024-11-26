// import type { IsUnknown } from 'type-fest'
// import type { ConfigManager } from '../../config-manager/__.js'
// import type { MaybePromise, Tuple } from '../../prelude.js'
// import type { StepDefinition } from '../StepDefinition.js'

// // dprint-ignore
// export interface PipelineSpecification<$StepSpecs extends StepDef[] = StepDef[]> {
//   steps: $StepSpecs
//   input: $StepSpecs extends Tuple.NonEmpty
//     ? $StepSpecs[0]['input']
//     : object
//   output: Awaited<
//     $StepSpecs extends Tuple.NonEmpty
//       ? Tuple.GetLastValue<$StepSpecs>['output']
//       : unknown
//   >
// }

// // // dprint-ignore
// // type InferFromStepDefinitions<
// //   $StepSpecInputs extends StepDefinition.SpecInput[] = StepDefinition.SpecInput[]
// // > = PipelineSpecification<InferStepSpecs<$StepSpecInputs>>

// // type InferStepSpecs<$StepSpecInputs extends StepDefinition.SpecInput[]> = InferStepSpecs_<undefined, $StepSpecInputs>

// // dprint-ignore
// type InferStepSpecs_<$StepSpecPrevious extends StepDef| undefined, $StepSpecInputs extends StepDefinition.SpecInput[]> =
//   $StepSpecInputs extends [infer $StepSpecInput extends StepDefinition.SpecInput, ...infer $StepSpecInputsRest extends StepDefinition.SpecInput[]]
//     ? InferStepSpecs__<{
//         name: $StepSpecInput['name']
//         slots: ConfigManager.OrDefault2<$StepSpecInput['slots'],{}>
//         input: IsUnknown<$StepSpecInput['input']> extends true
//           ? $StepSpecPrevious extends StepDef
//             ? $StepSpecPrevious['output']
//             : object
//           : $StepSpecInput['input']
//         output: MaybePromise<
//           Awaited<
//             IsUnknown<$StepSpecInput['output']> extends true
//               ? $StepSpecInputsRest extends Tuple.NonEmpty
//                 ? $StepSpecInputsRest[0]['input'] extends undefined
//                 ? unknown
//                 : $StepSpecInputsRest[0]['input']
//               : unknown
//             : $StepSpecInput['output']
//           >
//         >
//       }, $StepSpecInputsRest>
//       : []

// type InferStepSpecs__<$StepSpec extends StepDef, $StepSpecInputsRest extends StepDefinition.SpecInput[]> = [
//   $StepSpec,
//   ...InferStepSpecs_<$StepSpec, $StepSpecInputsRest>,
// ]
