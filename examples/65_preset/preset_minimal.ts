/**
 * This example shows use of the `minimal` preset which is the
 * default preset used when importing Graffle. It bundles the
 * Transport HTTP extension.
 */

import { Graffle } from '../../src/entrypoints/main.js'
import { create } from '../../src/entrypoints/presets/minimal.js'

console.log(`Is the default preset`, Graffle.create === create)

const graffle = create()

console.log(`The current transport is`, graffle._.transports.current)
