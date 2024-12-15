---
aside: false
---

# Opentelemetry

<!-- dprint-ignore-start -->
```ts twoslash
import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base'
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node'
import { Opentelemetry } from 'graffle/extensions/opentelemetry'
import { Graffle } from './graffle/__.js'

// Setup Opentelemetry
// 1. Initialize the OpenTelemetry provider
// 2. Register the provider to make the OpenTelemetry API use it
const exporter = new ConsoleSpanExporter()
const processor = new SimpleSpanProcessor(exporter)
const provider = new NodeTracerProvider()
provider.addSpanProcessor(processor)
provider.register()

const graffle = Graffle.create().use(Opentelemetry())
const data = await graffle.gql`query { pokemons { name } }`.send()
console.log(data)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
{
  resource: {
    attributes: {
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/22.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.28.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'f223876fb94238d6e67c7f5ad5352b14',
  parentId: '65825892207135a8',
  traceState: undefined,
  name: 'encode',
  id: 'b4f6b90f9d4cb7f9',
  kind: 0,
  timestamp: 1734293285758000,
  duration: 1165.458,
  attributes: {},
  status: { code: 0 },
  events: [],
  links: []
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{
  resource: {
    attributes: {
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/22.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.28.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'f223876fb94238d6e67c7f5ad5352b14',
  parentId: '65825892207135a8',
  traceState: undefined,
  name: 'pack',
  id: '28d86e022df6a130',
  kind: 0,
  timestamp: 1734293285761000,
  duration: 123866.625,
  attributes: {},
  status: { code: 0 },
  events: [],
  links: []
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{
  resource: {
    attributes: {
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/22.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.28.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'f223876fb94238d6e67c7f5ad5352b14',
  parentId: '65825892207135a8',
  traceState: undefined,
  name: 'exchange',
  id: '009c240ba45bff12',
  kind: 0,
  timestamp: 1734293285888000,
  duration: 60630.292,
  attributes: {},
  status: { code: 0 },
  events: [],
  links: []
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{
  resource: {
    attributes: {
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/22.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.28.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'f223876fb94238d6e67c7f5ad5352b14',
  parentId: '65825892207135a8',
  traceState: undefined,
  name: 'unpack',
  id: '1a49677d316b711e',
  kind: 0,
  timestamp: 1734293285949000,
  duration: 1003.209,
  attributes: {},
  status: { code: 0 },
  events: [],
  links: []
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{
  resource: {
    attributes: {
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/22.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.28.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'f223876fb94238d6e67c7f5ad5352b14',
  parentId: '65825892207135a8',
  traceState: undefined,
  name: 'decode',
  id: '3b7f0a2030462e74',
  kind: 0,
  timestamp: 1734293285950000,
  duration: 444.291,
  attributes: {},
  status: { code: 0 },
  events: [],
  links: []
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{
  resource: {
    attributes: {
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/22.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.28.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'f223876fb94238d6e67c7f5ad5352b14',
  parentId: undefined,
  traceState: undefined,
  name: 'request',
  id: '65825892207135a8',
  kind: 0,
  timestamp: 1734293285757000,
  duration: 193579.292,
  attributes: {},
  status: { code: 0 },
  events: [],
  links: []
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{
  pokemons: [
    { name: 'Pikachu' },
    { name: 'Charizard' },
    { name: 'Squirtle' },
    { name: 'Bulbasaur' },
    { name: 'Caterpie' },
    { name: 'Weedle' }
  ]
}
```
<!-- dprint-ignore-end -->
