import { trace, type Tracer } from '@opentelemetry/api'
import { create } from '../../extension/extension.js'
import { createConfig } from './config.js'

export const Opentelemetry = create({
  name: `Opentelemetry`,
  normalizeConfig: createConfig,
  create: ({ config }) => {
    const tracer = trace.getTracer(config.tracerName)
    const startActiveGraffleSpan = startActiveSpan(tracer)
    return {
      onRequest: async ({ encode }) => {
        encode.input
        return await startActiveGraffleSpan(`request`, async () => {
          const { pack } = await startActiveGraffleSpan(`encode`, encode)
          const { exchange } = await startActiveGraffleSpan(`pack`, pack)
          const { unpack } = await startActiveGraffleSpan(`exchange`, exchange)
          const { decode } = await startActiveGraffleSpan(`unpack`, unpack)
          const result = await startActiveGraffleSpan(`decode`, decode)
          return result
        })
      },
    }
  },
})

const startActiveSpan = (tracer: Tracer) => <Result>(name: string, fn: () => Promise<Result>): Promise<Result> => {
  return tracer.startActiveSpan(name, async (span) => {
    const result = await fn()
    span.end()
    return result
  })
}
