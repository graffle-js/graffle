import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base'
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node'
import { OpenTelemetry } from 'graffle/extensions/opentelemetry'
import { Graffle } from '../$/graffle/_namespace.js'
import { interceptAndShowOutput, show } from '../$/helpers.js'

interceptAndShowOutput()

// Setup Opentelemetry
// 1. Initialize the OpenTelemetry provider
// 2. Register the provider to make the OpenTelemetry API use it
const exporter = new ConsoleSpanExporter()
const processor = new SimpleSpanProcessor(exporter)
const provider = new NodeTracerProvider({
  spanProcessors: [processor],
})
provider.register()

const graffle = Graffle.create().use(OpenTelemetry())
const data = await graffle.gql`query { pokemons { name } }`.send()
show(data)
