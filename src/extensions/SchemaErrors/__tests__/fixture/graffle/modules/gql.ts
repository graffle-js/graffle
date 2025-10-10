import * as $$Tada from './tada.js'

import { createGql } from '#graffle/extensions/document-builder'
import type * as $$ArgumentsMap from './arguments-map.js'
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js'
import type { Schema } from './schema/$.js'
import type * as $$SelectionSets from './selection-sets.js'

/**
 * Overloaded gql function:
 * - String input: gql-tada with full type inference
 * - Object input: document builder with operation metadata
 */
export const gql = createGql<
  $$Tada.introspection,
  Schema,
  $$SelectionSets.$Document,
  $$ArgumentsMap.ArgumentsMap
>({
  sddm: sddm as any,
})
