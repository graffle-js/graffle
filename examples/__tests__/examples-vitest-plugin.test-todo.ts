// import { Graffle } from 'graffle'
// import { beforeEach, expect, test } from 'vitest'
// import { testExamples } from '../../tools/vitest-plugin-examples/index.js'

// // Custom encoders for examples with dynamic values
// const encoders = {
//   '10_transport-http/transport-http_extension_headers__dynamicHeaders.ts': (value: string) => {
//     return value.replace(/'x-sent-at-time', '\d+'/gi, `'x-sent-at-time', 'DYNAMIC_VALUE'`)
//   },
//   '20_output/output_envelope.ts': (value: string) => {
//     return value.replace(/Headers \{[^}]*\}/g, 'DYNAMIC_VALUE')
//   },
//   '20_output/output_preset__standard-graphql.ts': (value: string) => {
//     return value.replace(/Headers \{[^}]*\}/g, 'DYNAMIC_VALUE')
//   },
//   '60_extension/extension_opentelemetry__opentelemetry.ts': (value: string) => {
//     return value
//       .replace(/(id: )'.+'/g, `$1'...'`)
//       .replace(/(traceId: )'.+'/g, `$1'...'`)
//       .replace(/(parentId: )'.+'/g, `$1'...'`)
//       .replace(/(timestamp: ).+,/g, `$10,`)
//       .replace(/(duration: ).+,/g, `$10.0,`)
//       .replace(/(service\.name': )'.+'/g, `$1'...'`)
//       .replace(/('telemetry\.sdk\.version': )'.+'/g, `$1'...'`)
//   },
// }

// // Create the test runner with configuration
// const runAllExamples = testExamples({
//   pattern: './*/*.ts',
//   outputDir: './__outputs-new__',
//   ignore: ['./$', './__outputs__', './__outputs-new__', './__tests__'],
//   encoders,
//   beforeEach: async () => {
//     // Reset database before each example to ensure consistent state
//     const pokemonServerUrl = process.env['POKEMON_SCHEMA_URL'] || 'http://localhost:3000/graphql'
//     const graffle = Graffle.create({ schema: { name: 'none' } }).transport({ url: pokemonServerUrl })
//     await graffle.gql('mutation { resetData }').$send()
//   },
// })

// test(
//   'examples using vitest plugin',
//   async () => {
//     const results = await runAllExamples()

//     console.log(`Found ${results.length} examples`)

//     // Fail if no examples were found
//     expect(results.length).toBeGreaterThan(0)

//     // Create snapshot for each example
//     for (const result of results) {
//       const snapshotName = `${result.file.group}/${result.file.name}`
//       console.log(`Testing example: ${snapshotName}`)
//       expect(result.encoded).toMatchSnapshot(snapshotName)
//     }
//   },
//   { timeout: 300000 }, // 5 minutes - examples run sequentially with database resets
// )
