/**
 * This example shows use of the `minimal` preset which is the
 * default preset used when importing Graffle. It bundles the
 * Transport HTTP extension.
 */

import { Graffle } from 'graffle'
import { GraffleMinimal } from 'graffle/presets/minimal'

console.log(`Is the default preset`, Graffle.create === GraffleMinimal.create)

const graffle = GraffleMinimal.create()

console.log(`The current transport is`, graffle._.transports.current)
