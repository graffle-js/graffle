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
  traceId: 'c9d9ae22b6f3fe9d8cf83be7f1df5397',
  parentSpanContext: {
    traceId: 'c9d9ae22b6f3fe9d8cf83be7f1df5397',
    spanId: 'e94e442731e263fe',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'encode',
  id: '4418147221dc9328',
  kind: 0,
  timestamp: 1762136147432000,
  duration: 567.917,
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
  traceId: 'c9d9ae22b6f3fe9d8cf83be7f1df5397',
  parentSpanContext: {
    traceId: 'c9d9ae22b6f3fe9d8cf83be7f1df5397',
    spanId: 'e94e442731e263fe',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'pack',
  id: 'ca9a875ee65e741a',
  kind: 0,
  timestamp: 1762136147433000,
  duration: 637.417,
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
  traceId: 'c9d9ae22b6f3fe9d8cf83be7f1df5397',
  parentSpanContext: {
    traceId: 'c9d9ae22b6f3fe9d8cf83be7f1df5397',
    spanId: 'e94e442731e263fe',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'exchange',
  id: '86024b55a9b5ed93',
  kind: 0,
  timestamp: 1762136147434000,
  duration: 37637.208,
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
  traceId: 'c9d9ae22b6f3fe9d8cf83be7f1df5397',
  parentSpanContext: {
    traceId: 'c9d9ae22b6f3fe9d8cf83be7f1df5397',
    spanId: 'e94e442731e263fe',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'unpack',
  id: 'dc96cde6a4c729a3',
  kind: 0,
  timestamp: 1762136147472000,
  duration: 727.084,
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
  traceId: 'c9d9ae22b6f3fe9d8cf83be7f1df5397',
  parentSpanContext: {
    traceId: 'c9d9ae22b6f3fe9d8cf83be7f1df5397',
    spanId: 'e94e442731e263fe',
    traceFlags: 1,
    traceState: undefined
  },
  traceState: undefined,
  name: 'decode',
  id: '9a0423c4e7ba11b2',
  kind: 0,
  timestamp: 1762136147472000,
  duration: 398,
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
  traceId: 'c9d9ae22b6f3fe9d8cf83be7f1df5397',
  parentSpanContext: undefined,
  traceState: undefined,
  name: 'request',
  id: 'e94e442731e263fe',
  kind: 0,
  timestamp: 1762136147432000,
  duration: 41287.167,
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
