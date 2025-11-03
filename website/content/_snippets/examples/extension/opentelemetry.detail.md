::: details Example

<div class="ExampleSnippet">
<a href="../../examples/extension/extension_opentelemetry__opentelemetry">Opentelemetry</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base'
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node'
import { OpenTelemetry } from 'graffle/extensions/opentelemetry'
import { Graffle } from './graffle/$.js'

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
const data = await graffle.gql('query { pokemons { name } }').$send()
console.log(data)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{
  resource: {
    attributes: {
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/24.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '2.2.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '3e17217f49169e4d01c122eddda62f2a',
  parentSpanContext: {
    traceId: '3e17217f49169e4d01c122eddda62f2a',
    spanId: 'd00634f351910fc8',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'encode',
  id: '6e31476462f3ada2',
  kind: 0,
  timestamp: 1762136989111000,
  duration: 505.958,
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
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/24.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '2.2.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '3e17217f49169e4d01c122eddda62f2a',
  parentSpanContext: {
    traceId: '3e17217f49169e4d01c122eddda62f2a',
    spanId: 'd00634f351910fc8',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'pack',
  id: '31034e7b73571641',
  kind: 0,
  timestamp: 1762136989112000,
  duration: 598.125,
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
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/24.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '2.2.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '3e17217f49169e4d01c122eddda62f2a',
  parentSpanContext: {
    traceId: '3e17217f49169e4d01c122eddda62f2a',
    spanId: 'd00634f351910fc8',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'exchange',
  id: '70e3e6655a76f6b3',
  kind: 0,
  timestamp: 1762136989113000,
  duration: 18329.709,
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
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/24.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '2.2.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '3e17217f49169e4d01c122eddda62f2a',
  parentSpanContext: {
    traceId: '3e17217f49169e4d01c122eddda62f2a',
    spanId: 'd00634f351910fc8',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'unpack',
  id: 'c60961d928d4cf69',
  kind: 0,
  timestamp: 1762136989131000,
  duration: 763.167,
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
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/24.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '2.2.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '3e17217f49169e4d01c122eddda62f2a',
  parentSpanContext: {
    traceId: '3e17217f49169e4d01c122eddda62f2a',
    spanId: 'd00634f351910fc8',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'decode',
  id: '4bd0c74af37c4520',
  kind: 0,
  timestamp: 1762136989132000,
  duration: 390.834,
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
      'service.name': 'unknown_service:/Users/jasonkuhrt/Library/pnpm/nodejs/24.11.0/bin/node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '2.2.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '3e17217f49169e4d01c122eddda62f2a',
  parentSpanContext: undefined,
  traceState: undefined,
  name: 'request',
  id: 'd00634f351910fc8',
  kind: 0,
  timestamp: 1762136989111000,
  duration: 21801.5,
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
