import type { ExecutableStep } from '../ExecutableStep.js'
import type { Config } from './Config.js'
import type { PipelineSpec } from './Spec.js'

export * as Pipeline from './_.js'

// todo reconsider the division between these two types.
// Spec is fully declarative while this has "executable" steps
// which are spec steps with function signatures
// The problem: steps become executable but output remains in its declarative form
// One could also rename this type to "ExecutablePipeline"
// Where is this type _actually_ needed? The executable from seems to be a implementation detail?
// Can the external interface be just the spec type?
// The builder by definition includes the executable steps and infers the spec _from that_. So
//   in that case its understandable. How about we introduce an "InferSpec" type + make executable pipeline
//   have a spec property. Then use of utility types can go like: Anyware.Interceptor.Infer<Pipeline['spec']>
//   or make utility types accept spec OR executable and do the conditional branch of looking up ['spec'] within.
export interface Pipeline extends PipelineSpec {
  config: Config
  steps: ExecutableStep[]
}
