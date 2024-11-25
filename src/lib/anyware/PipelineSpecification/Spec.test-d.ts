// import { assertEqual } from '../../assert-equal.js'
// import type { MaybePromise } from '../../prelude.js'
// import type { PipelineSpecFromSteps } from '../PipelineSpecification/Spec.js'

// assertEqual<
//   PipelineSpecFromSteps<[]>,
//   { steps: []; input: object; output: unknown }
// >()

// assertEqual<
//   PipelineSpecFromSteps<[{ name: 'a' }]>,
//   { steps: [{ name: 'a'; slots: {}; input: object; output: unknown }]; input: object; output: unknown }
// >()

// assertEqual<
//   PipelineSpecFromSteps<[{ name: 'a'; output: 1 }]>,
//   {
//     steps: [{ name: 'a'; slots: {}; input: object; output: MaybePromise<1> }]
//     input: object
//     output: 1
//     // ^^^^^^ pipeline output inferred from last step output
//   }
// >()

// assertEqual<
//   PipelineSpecFromSteps<[{ name: 'a' }, { name: 'b'; input: { x: 1 } }]>,
//   {
//     steps: [
//       { name: 'a'; slots: {}; input: object; output: MaybePromise<{ x: 1 }> },
//       // step output inferred from next step input  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//       { name: 'b'; slots: {}; input: { x: 1 }; output: unknown },
//     ]
//     input: object
//     output: unknown
//   }
// >()

// assertEqual<
//   PipelineSpecFromSteps<[{ name: 'a'; output: Promise<1> }]>,
//   //                                  ^^^^^^^^^^^^^^^^^^ Step promised output flattened within MaybePromise
//   {
//     steps: [{ name: 'a'; slots: {}; input: object; output: MaybePromise<1> }]
//     //                                                            ^^^^^^^^^^^^^^^
//     input: object
//     output: 1
//     //      ^^^^^^^^^ Pipeline output strips Promise type
//   }
// >()
