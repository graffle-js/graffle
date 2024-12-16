::: details Example

<div class="ExampleSnippet">
<a href="../../examples/extension/opentelemetry">Opentelemetry</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

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
      'telemetry.sdk.version': '1.29.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '9f1dd3465bee320e11285dab4fd18c0a',
  parentId: 'fff65363c3906c5f',
  traceState: undefined,
  name: 'encode',
  id: '0932a4af7db7f676',
  kind: 0,
  timestamp: 1734313684255000,
  duration: 886.584,
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
      'telemetry.sdk.version': '1.29.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '9f1dd3465bee320e11285dab4fd18c0a',
  parentId: 'fff65363c3906c5f',
  traceState: undefined,
  name: 'pack',
  id: '2dac90b2b7dae9cf',
  kind: 0,
  timestamp: 1734313684257000,
  duration: 9667.791,
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
      'telemetry.sdk.version': '1.29.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '9f1dd3465bee320e11285dab4fd18c0a',
  parentId: 'fff65363c3906c5f',
  traceState: undefined,
  name: 'exchange',
  id: 'c9162ca6e544cf37',
  kind: 0,
  timestamp: 1734313684267000,
  duration: 15232.833,
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
      'telemetry.sdk.version': '1.29.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '9f1dd3465bee320e11285dab4fd18c0a',
  parentId: 'fff65363c3906c5f',
  traceState: undefined,
  name: 'unpack',
  id: 'c360e1de02b2f249',
  kind: 0,
  timestamp: 1734313684283000,
  duration: 773.625,
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
      'telemetry.sdk.version': '1.29.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '9f1dd3465bee320e11285dab4fd18c0a',
  parentId: 'fff65363c3906c5f',
  traceState: undefined,
  name: 'decode',
  id: '6f38295d85844fd0',
  kind: 0,
  timestamp: 1734313684283000,
  duration: 400.083,
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
      'telemetry.sdk.version': '1.29.0'
    }
  },
  instrumentationScope: { name: 'graffle', version: undefined, schemaUrl: undefined },
  traceId: '9f1dd3465bee320e11285dab4fd18c0a',
  parentId: undefined,
  traceState: undefined,
  name: 'request',
  id: 'fff65363c3906c5f',
  kind: 0,
  timestamp: 1734313684255000,
  duration: 29236.834,
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
