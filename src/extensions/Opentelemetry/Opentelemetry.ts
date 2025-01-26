import { trace, type Tracer } from '@opentelemetry/api'
import { Configurator, Extension } from '../../entrypoints/extension.js'

export const OpenTelemetry = Extension(`OpenTelemetry`)
  .configurator(
    Configurator()
      .input<{
        /**
         * @defaultValue `"opentelemetry"`
         */
        tracerName?: string
      }>()
      .default({
        tracerName: `graffle`,
      }),
  )
  .constructor(({ configuration }) => {
    const tracer = trace.getTracer(configuration.tracerName)
    const startActiveGraffleSpan = startActiveSpan(tracer)

    return {
      async requestInterceptor({ encode }) {
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
  })

const startActiveSpan = (tracer: Tracer) => <Result>(name: string, fn: () => Promise<Result>): Promise<Result> => {
  return tracer.startActiveSpan(name, async (span) => {
    const result = await fn()
    span.end()
    return result
  })
}
