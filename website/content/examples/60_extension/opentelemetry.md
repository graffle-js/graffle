---
aside: false
---

# Opentelemetry

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

#### Outputs

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
  traceId: '3f7fc263bad566e0665cc5c75f94bb06',
  parentSpanContext: {
    traceId: '3f7fc263bad566e0665cc5c75f94bb06',
    spanId: 'fb2e9595f5f4d23a',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'encode',
  id: '311a2c113f148aa3',
  kind: 0,
  timestamp: 1762136796617000,
  duration: 592.709,
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
  traceId: '3f7fc263bad566e0665cc5c75f94bb06',
  parentSpanContext: {
    traceId: '3f7fc263bad566e0665cc5c75f94bb06',
    spanId: 'fb2e9595f5f4d23a',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'pack',
  id: '5794fab3a2e9bb94',
  kind: 0,
  timestamp: 1762136796618000,
  duration: 654.292,
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
  traceId: '3f7fc263bad566e0665cc5c75f94bb06',
  parentSpanContext: {
    traceId: '3f7fc263bad566e0665cc5c75f94bb06',
    spanId: 'fb2e9595f5f4d23a',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'exchange',
  id: 'c0dd446bf3cc1323',
  kind: 0,
  timestamp: 1762136796619000,
  duration: 19829.833,
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
  traceId: '3f7fc263bad566e0665cc5c75f94bb06',
  parentSpanContext: {
    traceId: '3f7fc263bad566e0665cc5c75f94bb06',
    spanId: 'fb2e9595f5f4d23a',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'unpack',
  id: 'f5a2518d14f76025',
  kind: 0,
  timestamp: 1762136796639000,
  duration: 801.334,
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
  traceId: '3f7fc263bad566e0665cc5c75f94bb06',
  parentSpanContext: {
    traceId: '3f7fc263bad566e0665cc5c75f94bb06',
    spanId: 'fb2e9595f5f4d23a',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'decode',
  id: 'e1f152013d7a7790',
  kind: 0,
  timestamp: 1762136796640000,
  duration: 277,
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
  traceId: '3f7fc263bad566e0665cc5c75f94bb06',
  parentSpanContext: undefined,
  traceState: undefined,
  name: 'request',
  id: 'fb2e9595f5f4d23a',
  kind: 0,
  timestamp: 1762136796617000,
  duration: 23499.333,
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
