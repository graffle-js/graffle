// import type { Anyware } from '../../../lib/anyware/__.js'
// import type { Chain } from '../../../lib/chain/__.js'
// import type { RequestPipeline } from '../../../requestPipeline/__.js'
// import { defineProperties, type FnParametersProperty } from '../fluent.js'

// export interface FnRetry extends Chain.Extension<`retry`> {
//   // @ts-expect-error untyped params
//   return: Retry<this['params']>
// }

// export interface Retry<$Args extends FnParametersProperty> {
//   /**
//    * TODO Retry Docs.
//    */
//   (extension: Anyware.Extension2<RequestPipeline.Core, { retrying: true }>): Chain.IncrementNothing<$Args>
// }

// export const retryProperties = defineProperties((builder, state) => {
//   return {
//     retry: (anyware: Anyware.Extension2<RequestPipeline.Core, { retrying: true }>) => {
//       return builder({ ...state, retry: anyware })
//     },
//   }
// })
