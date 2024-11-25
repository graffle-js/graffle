// import type { IsUnknown } from 'type-fest'
// import type { ConfigManager } from '../../config-manager/__.js'
// import type { MaybePromise, Tuple } from '../../prelude.js'
// import type { StepDef } from '../StepDef.js'

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
// //   $StepSpecInputs extends StepDef.SpecInput[] = StepDef.SpecInput[]
// // > = PipelineSpecification<InferStepSpecs<$StepSpecInputs>>

// // type InferStepSpecs<$StepSpecInputs extends StepDef.SpecInput[]> = InferStepSpecs_<undefined, $StepSpecInputs>

// // dprint-ignore
// type InferStepSpecs_<$StepSpecPrevious extends StepDef| undefined, $StepSpecInputs extends StepDef.SpecInput[]> =
//   $StepSpecInputs extends [infer $StepSpecInput extends StepDef.SpecInput, ...infer $StepSpecInputsRest extends StepDef.SpecInput[]]
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

// type InferStepSpecs__<$StepSpec extends StepDef, $StepSpecInputsRest extends StepDef.SpecInput[]> = [
//   $StepSpec,
//   ...InferStepSpecs_<$StepSpec, $StepSpecInputsRest>,
// ]
