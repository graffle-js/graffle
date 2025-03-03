// We import the global module for good measure although it is not clear it is always needed.
// It at least helps with Twoslash wherein without this import here Twoslash will not include the global module.
// In real TypeScript projects it seems the global module is included automatically. But there could be certain tsconfig
// setups where this still indeed does help.
import './modules/global.js'

export { create } from './modules/client.js'
export { schemaDrivenDataMap as schemaMap } from './modules/schema-driven-data-map.js'
export { Select } from './modules/select.js'
export * as SelectionSets from './modules/selection-sets.js'
