// dprint-ignore-file
import type { Possible } from '#test/schema/possible/client/_.js'
import { Assert } from '@wollybeard/kit'
import type { InferFromQuery } from './infer.js'
import { $ } from './var.js'

const A = Assert

type $ = typeof $

const $WithDefaultHello = $.default('hello')
type $WithDefaultHello = typeof $WithDefaultHello

const $WithCustomName = $.name('custom')
type $WithCustomName = typeof $WithCustomName

const $WithDefault42 = $.default(42)
type $WithDefault42 = typeof $WithDefault42

const $Required = $.required()
type $Required = typeof $Required

// ====================================================================
//                      NESTED FIELD ARGUMENTS
// ====================================================================
// Custom variable name
A.sub.ofAs<{ custom?: number | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { float: $WithCustomName } } }, Possible.$.SchemaDrivenDataMap>>()

A.sub.ofAs<{ int?: number | null | undefined }>()
     .onAs<InferFromQuery<{ objectNestedWithArgs: { object: { $: { int: $ } } } }, Possible.$.SchemaDrivenDataMap>>()

// ====================================================================
//                      ALIASES
// ====================================================================

// Alias with $ on direct field arguments
A.sub.ofAs<{ id?: string | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: ['x', { $: { id: $ } }] }, Possible.$.SchemaDrivenDataMap>>()

// Multiple aliases with $ on direct field arguments
A.sub.ofAs<{ id?: string | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: [['x', { $: { id: $ } }]] }, Possible.$.SchemaDrivenDataMap>>()

// Alias with $ on nested field arguments
A.sub.ofAs<{ filter?: string | null | undefined }>()
     .onAs<InferFromQuery<{ objectNestedWithArgs: { id: ['id2', { $: { filter: $ } }] } }, Possible.$.SchemaDrivenDataMap>>()

// ====================================================================
//                      OPTIONAL ARGUMENTS
// ====================================================================

// Field with optional string argument
A.sub.ofAs<{ id?: string | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { id: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// Field with optional boolean argument
A.sub.ofAs<{ boolean?: boolean | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { boolean: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// Field with optional int argument
A.sub.ofAs<{ int?: number | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { int: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// Field with optional float argument
A.sub.ofAs<{ float?: number | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { float: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// ====================================================================
//                      REQUIRED ARGUMENTS
// ====================================================================

// Field with required string argument
A.sub.ofAs<{ string: string }>()
     .onAs<InferFromQuery<{ stringWithRequiredArg: { $: { string: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// ====================================================================
//               MULTIPLE VARIABLES IN SAME FIELD
// ====================================================================

A.sub.ofAs<{ id?: string | null | undefined; boolean?: boolean | null | undefined; int?: number | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { id: $, boolean: $, int: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// ====================================================================
//                MULTIPLE FIELDS WITH VARIABLES
// ====================================================================

A.sub.ofAs<{ id?: string | null | undefined, string: string }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { id: $ } }, stringWithRequiredArg: { $: { string: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// ====================================================================
//                        CUSTOM SCALARS
// ====================================================================

// Optional custom scalar (Date)
A.sub.ofAs<{ date?: Date | null | undefined }>()
     .onAs<InferFromQuery<{ dateArg: { $: { date: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// Required custom scalar (Date)
A.sub.ofAs<{ date: Date }>()
     .onAs<InferFromQuery<{ dateArgNonNull: { $: { date: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// ====================================================================
//                        LIST ARGUMENTS
// ====================================================================

// Optional list of required items
A.sub.ofAs<{ date?: readonly Date[] | null | undefined }>()
     .onAs<InferFromQuery<{ dateArgList: { $: { date: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// Required list of required items
A.sub.ofAs<{ ints: readonly number[] }>()
     .onAs<InferFromQuery<{ stringWithListArgRequired: { $: { ints: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// Optional list of optional items (stringWithListArg has [0, [0]])
A.sub.ofAs<{ ints?: readonly number[] | null | undefined }>()
     .onAs<InferFromQuery<{ stringWithListArg: { $: { ints: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// ====================================================================
//                        INPUT OBJECTS
// ====================================================================

// Optional input object
A.sub.ofAs<{ input?: Possible.$.SchemaDrivenDataMap['inputTypes']['InputObject']['$type'] | null | undefined }>()
     .onAs<InferFromQuery<{ dateArgInputObject: { $: { input: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// Required input object
A.sub.ofAs<{ input: Possible.$.SchemaDrivenDataMap['inputTypes']['InputObject']['$type'] }>()
     .onAs<InferFromQuery<{ stringWithArgInputObjectRequired: { $: { input: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// Multiple input objects with same variable name (required wins)
A.sub.ofAs<{ input: Possible.$.SchemaDrivenDataMap['inputTypes']['InputObject']['$type'] }>()
     .onAs<InferFromQuery<{ dateArgInputObject: { $: { input: $ } }, stringWithArgInputObjectRequired: { $: { input: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// Nested input object
A.sub.ofAs<{ input?: Possible.$.SchemaDrivenDataMap['inputTypes']['InputObjectNested']['$type'] | null | undefined }>()
     .onAs<InferFromQuery<{ InputObjectNested: { $: { input: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// Circular input object (self-referential)
A.sub.ofAs<{ input?: Possible.$.SchemaDrivenDataMap['inputTypes']['InputObjectCircular']['$type'] | null | undefined }>()
     .onAs<InferFromQuery<{ argInputObjectCircular: { $: { input: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// ====================================================================
//                    VARIABLE MODIFIERS
// ====================================================================

// Required modifier - forces optional argument to be required
A.sub.ofAs<{ id: string|undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { id: $Required } } }, Possible.$.SchemaDrivenDataMap>>()

// Default value modifier - makes any argument optional
A.sub.ofAs<{ string?: string|undefined }>()
     .onAs<InferFromQuery<{ stringWithRequiredArg: { $: { string: $WithDefaultHello } } }, Possible.$.SchemaDrivenDataMap>>()

// Combining required with other arguments
A.sub.ofAs<{ id: string; boolean?: boolean | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { id: $Required; boolean: $ } } }, Possible.$.SchemaDrivenDataMap>>()

// Default with different types (nullable Int with default still allows null)
A.sub.ofAs<{ int?: number | null|undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { int: $WithDefault42 } } }, Possible.$.SchemaDrivenDataMap>>()
