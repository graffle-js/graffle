::: details Example

<div class="ExampleSnippet">
<a href="../../examples/extension/opentelemetry">Opentelemetry</a>

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

<!-- dprint-ignore-start -->
```txt
{
  resource: {
    attributes: {
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/22.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.27.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'bb8c4e12fdc1f5805d69be36a53a100b',
  parentId: '348308cb866a029e',
  traceState: undefined,
  name: 'encode',
  id: 'fefeb20d017244b5',
  kind: 0,
  timestamp: 1731940680202000,
  duration: 1878.458,
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
      'telemetry.sdk.version': '1.27.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'bb8c4e12fdc1f5805d69be36a53a100b',
  parentId: '348308cb866a029e',
  traceState: undefined,
  name: 'pack',
  id: '611ff53dafa0a19f',
  kind: 0,
  timestamp: 1731940680205000,
  duration: 13698.125,
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
      'telemetry.sdk.version': '1.27.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'bb8c4e12fdc1f5805d69be36a53a100b',
  parentId: '348308cb866a029e',
  traceState: undefined,
  name: 'exchange',
  id: 'd8a08e2cc6311962',
  kind: 0,
  timestamp: 1731940680220000,
  duration: 30053.208,
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
      'telemetry.sdk.version': '1.27.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'bb8c4e12fdc1f5805d69be36a53a100b',
  parentId: '348308cb866a029e',
  traceState: undefined,
  name: 'unpack',
  id: '3e150641505c9f50',
  kind: 0,
  timestamp: 1731940680250000,
  duration: 1485.916,
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
      'telemetry.sdk.version': '1.27.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'bb8c4e12fdc1f5805d69be36a53a100b',
  parentId: '348308cb866a029e',
  traceState: undefined,
  name: 'decode',
  id: 'a0d9979dd8146e51',
  kind: 0,
  timestamp: 1731940680252000,
  duration: 486.834,
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
      'telemetry.sdk.version': '1.27.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: 'bb8c4e12fdc1f5805d69be36a53a100b',
  parentId: undefined,
  traceState: undefined,
  name: 'request',
  id: '348308cb866a029e',
  kind: 0,
  timestamp: 1731940680202000,
  duration: 50357.583,
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

</div>
:::
