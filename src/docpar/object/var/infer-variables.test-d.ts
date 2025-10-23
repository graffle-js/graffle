import type { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'
import type { InferFromQuery } from './infer.js'
import { $ } from './var.js'

type $ = typeof $

const $WithDefaultHello = $.default('hello')
type $WithDefaultHello = typeof $WithDefaultHello

const $WithCustomName = $.name('custom')
type $WithCustomName = typeof $WithCustomName

const $WithDefault42 = $.default(42)
type $WithDefault42 = typeof $WithDefault42

const $Required = $.required()
type $Required = typeof $Required

// dprint-ignore
type _1 = Ts.Assert.Cases<
  // Custom variable name
  Ts.Assert.sub<
    InferFromQuery<{ objectWithArgs: { $: { float: $WithCustomName } } }, Possible.$.ArgumentsMap>,
    { custom?: number | null | undefined }
  >,
  // ====================================================================
  //                      Nested Field Arguments
  // ====================================================================
  Ts.Assert.sub<
    InferFromQuery<{ objectNestedWithArgs: { object: { $: { int: $ } } } }, Possible.$.ArgumentsMap>,
    { int?: number | null | undefined }
  >,
  // ====================================================================
  //                      ALIASES
  // ====================================================================
  // Alias with $ on direct field arguments
  Ts.Assert.sub<
    InferFromQuery<{ objectWithArgs: ['x', { $: { id: $ } }] }, Possible.$.ArgumentsMap>,
    { id?: string | null | undefined }
  >,
  // Multiple aliases with $ on direct field arguments
  Ts.Assert.sub<
    InferFromQuery<{ objectWithArgs: [['x', { $: { id: $ } }]] }, Possible.$.ArgumentsMap>,
    { id?: string | null | undefined }
  >,
  // Alias with $ on nested field arguments
  Ts.Assert.sub<
    InferFromQuery<{ objectNestedWithArgs: { id: ['id2', { $: { filter: $ } }] } }, Possible.$.ArgumentsMap>,
    { filter?: string | null | undefined }
  >,
  // ====================================================================
  //                      OPTIONAL ARGUMENTS
  // ====================================================================
  // Field with optional string argument
  Ts.Assert.sub<
    InferFromQuery<{ objectWithArgs: { $: { id: $ } } }, Possible.$.ArgumentsMap>,
    { id?: string | null | undefined }
  >,

  // Field with optional boolean argument
  Ts.Assert.sub<
    InferFromQuery<{ objectWithArgs: { $: { boolean: $ } } }, Possible.$.ArgumentsMap>,
    { boolean?: boolean | null | undefined }
  >,

  // Field with optional int argument
  Ts.Assert.sub<
    InferFromQuery<{ objectWithArgs: { $: { int: $ } } }, Possible.$.ArgumentsMap>,
    { int?: number | null | undefined }
  >,

  // Field with optional float argument
  Ts.Assert.sub<
    InferFromQuery<{ objectWithArgs: { $: { float: $ } } }, Possible.$.ArgumentsMap>,
    { float?: number | null | undefined }
  >,

  // ====================================================================
  //                      REQUIRED ARGUMENTS
  // ====================================================================
  // Field with required string argument
  Ts.Assert.sub<
    InferFromQuery<{ stringWithRequiredArg: { $: { string: $ } } }, Possible.$.ArgumentsMap>,
    { string: string }
  >,

  // ====================================================================
  //               MULTIPLE VARIABLES IN SAME FIELD
  // ====================================================================
  Ts.Assert.sub<
    InferFromQuery<{ objectWithArgs: { $: { id: $, boolean: $, int: $ } } }, Possible.$.ArgumentsMap>,
    { id?: string | null | undefined; boolean?: boolean | null | undefined; int?: number | null | undefined }
  >,

  // ====================================================================
  //                MULTIPLE FIELDS WITH VARIABLES
  // ====================================================================
  Ts.Assert.sub<
    InferFromQuery<{
      objectWithArgs: { $: { id: $ } }, stringWithRequiredArg: { $: { string: $ } }
    }, Possible.$.ArgumentsMap>,
    { id?: string | null | undefined, string: string }
  >,

  // ====================================================================
  //                        CUSTOM SCALARS
  // ====================================================================
  // Optional custom scalar (Date)
  Ts.Assert.sub<
    InferFromQuery<{ dateArg: { $: { date: $ } } }, Possible.$.ArgumentsMap>,
    { date?: Date | null | undefined }
  >,

  // Required custom scalar (Date)
  Ts.Assert.sub<
    InferFromQuery<{ dateArgNonNull: { $: { date: $ } } }, Possible.$.ArgumentsMap>,
    { date: Date }
  >,

  // ====================================================================
  //                        LIST ARGUMENTS
  // ====================================================================
  // Optional list of required items
  Ts.Assert.sub<
    InferFromQuery<{ dateArgList: { $: { date: $ } } }, Possible.$.ArgumentsMap>,
    { date?: readonly Date[] | null | undefined }
  >,

  // Required list of required items
  Ts.Assert.sub<
    InferFromQuery<{ stringWithListArgRequired: { $: { ints: $ } } }, Possible.$.ArgumentsMap>,
    { ints: readonly number[] }
  >,

  // Optional list of optional items (stringWithListArg has [0, [0]])
  Ts.Assert.sub<
    InferFromQuery<{ stringWithListArg: { $: { ints: $ } } }, Possible.$.ArgumentsMap>,
    { ints?: readonly number[] | null | undefined }
  >
>

// dprint-ignore
type _2 = Ts.Assert.Cases<
  // ====================================================================
  //                        INPUT OBJECTS
  // ====================================================================
  // Optional input object
  Ts.Assert.sub<
    InferFromQuery<{ dateArgInputObject: { $: { input: $ } } }, Possible.$.ArgumentsMap>,
    { input?: Possible.$.TypeInputsIndex['InputObject'] | null | undefined }
  >,

  // Required input object
  Ts.Assert.sub<
    InferFromQuery<{ stringWithArgInputObjectRequired: { $: { input: $ } } }, Possible.$.ArgumentsMap>,
    { input: Possible.$.TypeInputsIndex['InputObject'] }
  >,

  // Multiple input objects with same variable name (required wins)
  Ts.Assert.sub<
    InferFromQuery<{ dateArgInputObject: { $: { input: $ } }, stringWithArgInputObjectRequired: { $: { input: $ } } }, Possible.$.ArgumentsMap>,
    { input: Possible.$.TypeInputsIndex['InputObject'] }
  >,

  // Nested input object
  Ts.Assert.sub<
    InferFromQuery<{ InputObjectNested: { $: { input: $ } } }, Possible.$.ArgumentsMap>,
    { input?: Possible.$.TypeInputsIndex['InputObjectNested'] | null | undefined }
  >,

  // Circular input object (self-referential)
  Ts.Assert.sub<
    InferFromQuery<{ argInputObjectCircular: { $: { input: $ } } }, Possible.$.ArgumentsMap>,
    { input?: Possible.$.TypeInputsIndex['InputObjectCircular'] | null | undefined }
  >,

  // ====================================================================
  //                    VARIABLE MODIFIERS
  // ====================================================================
  // Required modifier - forces optional argument to be required
  Ts.Assert.sub<
    InferFromQuery<{ objectWithArgs: { $: { id: $Required } } }, Possible.$.ArgumentsMap>,
    { id: string }
  >,

  // Default value modifier - makes any argument optional
  Ts.Assert.sub<
    InferFromQuery<{ stringWithRequiredArg: { $: { string: $WithDefaultHello } } }, Possible.$.ArgumentsMap>,
    { string?: string }
  >,

  // Combining required with other arguments
  Ts.Assert.sub<
    InferFromQuery<{ objectWithArgs: { $: { id: $Required; boolean: $ } } }, Possible.$.ArgumentsMap>,
    { id: string; boolean?: boolean | null | undefined }
  >,

  // Default with different types (nullable Int with default still allows null)
  Ts.Assert.sub<
    InferFromQuery<{ objectWithArgs: { $: { int: $WithDefault42 } } }, Possible.$.ArgumentsMap>,
    { int?: number | null }
  >
>
