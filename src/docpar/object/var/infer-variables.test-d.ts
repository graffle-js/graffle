// dprint-ignore-file
import type { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'
import type { InferFromQuery } from './infer.js'
import { $ } from './var.js'

const A = Ts.Assert

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
     .onAs<InferFromQuery<{ objectWithArgs: { $: { float: $WithCustomName } } }, Possible.$.ArgumentsMap>>()

A.sub.ofAs<{ int?: number | null | undefined }>()
     .onAs<InferFromQuery<{ objectNestedWithArgs: { object: { $: { int: $ } } } }, Possible.$.ArgumentsMap>>()

// ====================================================================
//                      ALIASES
// ====================================================================

// Alias with $ on direct field arguments
A.sub.ofAs<{ id?: string | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: ['x', { $: { id: $ } }] }, Possible.$.ArgumentsMap>>()

// Multiple aliases with $ on direct field arguments
A.sub.ofAs<{ id?: string | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: [['x', { $: { id: $ } }]] }, Possible.$.ArgumentsMap>>()

// Alias with $ on nested field arguments
A.sub.ofAs<{ filter?: string | null | undefined }>()
     .onAs<InferFromQuery<{ objectNestedWithArgs: { id: ['id2', { $: { filter: $ } }] } }, Possible.$.ArgumentsMap>>()

// ====================================================================
//                      OPTIONAL ARGUMENTS
// ====================================================================

// Field with optional string argument
A.sub.ofAs<{ id?: string | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { id: $ } } }, Possible.$.ArgumentsMap>>()

// Field with optional boolean argument
A.sub.ofAs<{ boolean?: boolean | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { boolean: $ } } }, Possible.$.ArgumentsMap>>()

// Field with optional int argument
A.sub.ofAs<{ int?: number | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { int: $ } } }, Possible.$.ArgumentsMap>>()

// Field with optional float argument
A.sub.ofAs<{ float?: number | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { float: $ } } }, Possible.$.ArgumentsMap>>()

// ====================================================================
//                      REQUIRED ARGUMENTS
// ====================================================================

// Field with required string argument
A.sub.ofAs<{ string: string }>()
     .onAs<InferFromQuery<{ stringWithRequiredArg: { $: { string: $ } } }, Possible.$.ArgumentsMap>>()

// ====================================================================
//               MULTIPLE VARIABLES IN SAME FIELD
// ====================================================================

A.sub.ofAs<{ id?: string | null | undefined; boolean?: boolean | null | undefined; int?: number | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { id: $, boolean: $, int: $ } } }, Possible.$.ArgumentsMap>>()

// ====================================================================
//                MULTIPLE FIELDS WITH VARIABLES
// ====================================================================

A.sub.ofAs<{ id?: string | null | undefined, string: string }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { id: $ } }, stringWithRequiredArg: { $: { string: $ } } }, Possible.$.ArgumentsMap>>()

// ====================================================================
//                        CUSTOM SCALARS
// ====================================================================

// Optional custom scalar (Date)
A.sub.ofAs<{ date?: Date | null | undefined }>()
     .onAs<InferFromQuery<{ dateArg: { $: { date: $ } } }, Possible.$.ArgumentsMap>>()

// Required custom scalar (Date)
A.sub.ofAs<{ date: Date }>()
     .onAs<InferFromQuery<{ dateArgNonNull: { $: { date: $ } } }, Possible.$.ArgumentsMap>>()

// ====================================================================
//                        LIST ARGUMENTS
// ====================================================================

// Optional list of required items
A.sub.ofAs<{ date?: readonly Date[] | null | undefined }>()
     .onAs<InferFromQuery<{ dateArgList: { $: { date: $ } } }, Possible.$.ArgumentsMap>>()

// Required list of required items
A.sub.ofAs<{ ints: readonly number[] }>()
     .onAs<InferFromQuery<{ stringWithListArgRequired: { $: { ints: $ } } }, Possible.$.ArgumentsMap>>()

// Optional list of optional items (stringWithListArg has [0, [0]])
A.sub.ofAs<{ ints?: readonly number[] | null | undefined }>()
     .onAs<InferFromQuery<{ stringWithListArg: { $: { ints: $ } } }, Possible.$.ArgumentsMap>>()

// ====================================================================
//                        INPUT OBJECTS
// ====================================================================

// Optional input object
A.sub.ofAs<{ input?: Possible.$.TypeInputsIndex['InputObject'] | null | undefined }>()
     .onAs<InferFromQuery<{ dateArgInputObject: { $: { input: $ } } }, Possible.$.ArgumentsMap>>()

// Required input object
A.sub.ofAs<{ input: Possible.$.TypeInputsIndex['InputObject'] }>()
     .onAs<InferFromQuery<{ stringWithArgInputObjectRequired: { $: { input: $ } } }, Possible.$.ArgumentsMap>>()

// Multiple input objects with same variable name (required wins)
A.sub.ofAs<{ input: Possible.$.TypeInputsIndex['InputObject'] }>()
     .onAs<InferFromQuery<{ dateArgInputObject: { $: { input: $ } }, stringWithArgInputObjectRequired: { $: { input: $ } } }, Possible.$.ArgumentsMap>>()

// Nested input object
A.sub.ofAs<{ input?: Possible.$.TypeInputsIndex['InputObjectNested'] | null | undefined }>()
     .onAs<InferFromQuery<{ InputObjectNested: { $: { input: $ } } }, Possible.$.ArgumentsMap>>()

// Circular input object (self-referential)
A.sub.ofAs<{ input?: Possible.$.TypeInputsIndex['InputObjectCircular'] | null | undefined }>()
     .onAs<InferFromQuery<{ argInputObjectCircular: { $: { input: $ } } }, Possible.$.ArgumentsMap>>()

// ====================================================================
//                    VARIABLE MODIFIERS
// ====================================================================

// Required modifier - forces optional argument to be required
A.sub.ofAs<{ id: string }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { id: $Required } } }, Possible.$.ArgumentsMap>>()

// Default value modifier - makes any argument optional
A.sub.ofAs<{ string?: string }>()
     .onAs<InferFromQuery<{ stringWithRequiredArg: { $: { string: $WithDefaultHello } } }, Possible.$.ArgumentsMap>>()

// Combining required with other arguments
A.sub.ofAs<{ id: string; boolean?: boolean | null | undefined }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { id: $Required; boolean: $ } } }, Possible.$.ArgumentsMap>>()

// Default with different types (nullable Int with default still allows null)
A.sub.ofAs<{ int?: number | null }>()
     .onAs<InferFromQuery<{ objectWithArgs: { $: { int: $WithDefault42 } } }, Possible.$.ArgumentsMap>>()
