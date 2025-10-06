import { Extension } from '#graffle/extension'
import { trace, type Tracer } from '@opentelemetry/api'

export const OpenTelemetry = Extension
  .create(`openTelemetry`)
  .configurator(
    Extension.Configurator()
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
  .requestInterceptorDependingOn(({ configuration }) => {
    const tracer = trace.getTracer(configuration.openTelemetry.current.tracerName)
    const startActiveGraffleSpan = startActiveSpan(tracer)

    return async ({ encode }) => {
      return await startActiveGraffleSpan(`request`, async () => {
        const { pack } = await startActiveGraffleSpan(`encode`, encode)
        const { exchange } = await startActiveGraffleSpan(`pack`, pack)
        const { unpack } = await startActiveGraffleSpan(`exchange`, exchange)
        const { decode } = await startActiveGraffleSpan(`unpack`, unpack)
        const result = await startActiveGraffleSpan(`decode`, decode)
        return result
      })
    }
  })
  .return()

const startActiveSpan = (tracer: Tracer) => <Result>(name: string, fn: () => Promise<Result>): Promise<Result> => {
  return tracer.startActiveSpan(name, async (span) => {
    const result = await fn()
    span.end()
    return result
  })
}
