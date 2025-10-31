import * as $$Data from './data.js';
import * as $$Schema from './schema/$.js';
import * as $$SelectionSets from './selection-sets/$.js';
//
//
//
//
//
//
// ==================================================================================================
//                                              Runtime
// ==================================================================================================
//
//
//
//
//
//
import { createSelect } from '#graffle/client';
/**
 * Runtime utilities for native GraphQL document selection.
 *
 * Used with the `.select()` method to build type-safe native GraphQL documents.
 *
 * @example
 * ```ts
 * import { Select } from './graffle/select.js'
 *
 * const document = Select.Query({ pokemon: { name: true } })
 * ```
 */
export const Select = createSelect($$Data.Name);
//# sourceMappingURL=select.js.map