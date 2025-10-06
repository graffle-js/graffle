/**
 * SDDM Type Safety Sandbox
 *
 * Testing SDDM validation with generated client
 */

import { Possible } from '#extensions/DocumentBuilder/__tests__/fixtures/possible/$.js'
import type { Grafaid } from '#lib/grafaid/$.js'
import { Graffle as PlainGraffle } from './src/exports/index.js'

/*

9. SDDM Type Safety
------------------------------------------------------------------------

SDDM (Schema-Driven Data Map) enables type-safe custom scalar handling.
Documents generated with SDDM require SDDM-enabled clients.

*/

const doc = Possible.query.InputObjectNested()
type x = typeof doc['__sddm']
type y = Grafaid.Document.Typed.RequiresSDDMOf<typeof doc>

const plainClient = PlainGraffle
  .create()
  .transport({ url: 'https://example.com/graphql' })

plainClient.gql(doc)
