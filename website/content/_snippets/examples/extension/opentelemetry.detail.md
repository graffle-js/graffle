::: details Example

<div class="ExampleSnippet">
<a href="../../examples/extension/opentelemetry">Opentelemetry</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base'
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node'
import { Opentelemetry } from 'graffle/extensions/opentelemetry'

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
  traceId: '2357d71574e918c7fd944f549c0fd82a',
  parentId: '9dbfcbd3347ba956',
  traceState: undefined,
  name: 'encode',
  id: '9b2959f540fd868f',
  kind: 0,
  timestamp: 1734300413923000,
  duration: 764.375,
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
  traceId: '2357d71574e918c7fd944f549c0fd82a',
  parentId: '9dbfcbd3347ba956',
  traceState: undefined,
  name: 'pack',
  id: 'a79398f8ef990a11',
  kind: 0,
  timestamp: 1734300413924000,
  duration: 21935.583,
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
  traceId: '2357d71574e918c7fd944f549c0fd82a',
  parentId: '9dbfcbd3347ba956',
  traceState: undefined,
  name: 'exchange',
  id: 'b9536fe2979c3382',
  kind: 0,
  timestamp: 1734300413947000,
  duration: 26963.334,
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
  traceId: '2357d71574e918c7fd944f549c0fd82a',
  parentId: '9dbfcbd3347ba956',
  traceState: undefined,
  name: 'unpack',
  id: 'cb87e1ca76490a54',
  kind: 0,
  timestamp: 1734300413974000,
  duration: 800.833,
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
  traceId: '2357d71574e918c7fd944f549c0fd82a',
  parentId: '9dbfcbd3347ba956',
  traceState: undefined,
  name: 'decode',
  id: '50d651dabfa0e532',
  kind: 0,
  timestamp: 1734300413975000,
  duration: 360.666,
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
  traceId: '2357d71574e918c7fd944f549c0fd82a',
  parentId: undefined,
  traceState: undefined,
  name: 'request',
  id: '9dbfcbd3347ba956',
  kind: 0,
  timestamp: 1734300413922000,
  duration: 52894.708,
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
