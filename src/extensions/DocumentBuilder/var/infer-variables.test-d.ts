import { Ts } from '@wollybeard/kit'
import type { PossibleWithScalars } from '../__tests__/fixtures/possible-with-scalars/$.js'
import type { Possible } from '../__tests__/fixtures/possible/$.js'
import type { Select } from '../Select/$.js'
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
type _1 = Ts.Cases<
  // Custom variable name
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { float: $WithCustomName } } }, Possible.$.ArgumentsMap>,
    { custom?: number | undefined }
  >,
  // ====================================================================
  //                      Nested Field Arguments
  // ====================================================================
  Ts.AssertEqual<
    InferFromQuery<{ objectNestedWithArgs: { object: { $: { int: $ } } } }, Possible.$.ArgumentsMap>,
    { int?: number | undefined }
  >,
  // ====================================================================
  //                      ALIASES
  // ====================================================================
  // Alias with $ on direct field arguments
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: ['x', { $: { id: $ } }] }, Possible.$.ArgumentsMap>,
    { id?: string | undefined }
  >,
  // Multiple aliases with $ on direct field arguments
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: [['x', { $: { id: $ } }]] }, Possible.$.ArgumentsMap>,
    { id?: string | undefined }
  >,
  // Alias with $ on nested field arguments
  Ts.AssertEqual<
    InferFromQuery<{ objectNestedWithArgs: { id: ['id2', { $: { filter: $ } }] } }, Possible.$.ArgumentsMap>,
    { filter?: string | undefined }
  >,
  // ====================================================================
  //                      OPTIONAL ARGUMENTS
  // ====================================================================
  // Field with optional string argument
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { id: $ } } }, Possible.$.ArgumentsMap>,
    { id?: string | undefined }
  >,

  // Field with optional boolean argument
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { boolean: $ } } }, Possible.$.ArgumentsMap>,
    { boolean?: boolean | undefined }
  >,

  // Field with optional int argument
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { int: $ } } }, Possible.$.ArgumentsMap>,
    { int?: number | undefined }
  >,

  // Field with optional float argument
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { float: $ } } }, Possible.$.ArgumentsMap>,
    { float?: number | undefined }
  >,

  // ====================================================================
  //                      REQUIRED ARGUMENTS
  // ====================================================================
  // Field with required string argument
  Ts.AssertEqual<
    InferFromQuery<{ stringWithRequiredArg: { $: { string: $ } } }, Possible.$.ArgumentsMap>,
    { string: string }
  >,

  // ====================================================================
  //               MULTIPLE VARIABLES IN SAME FIELD
  // ====================================================================
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { id: $, boolean: $, int: $ } } }, Possible.$.ArgumentsMap>,
    { id?: string | undefined; boolean?: boolean | undefined; int?: number | undefined }
  >,

  // ====================================================================
  //                MULTIPLE FIELDS WITH VARIABLES
  // ====================================================================
  Ts.AssertEqual<
    InferFromQuery<{
      objectWithArgs: { $: { id: $ } }, stringWithRequiredArg: { $: { string: $ } }
    }, Possible.$.ArgumentsMap>,
    { id?: string | undefined, string: string }
  >,

  // ====================================================================
  //                        CUSTOM SCALARS
  // ====================================================================
  // Optional custom scalar (Date)
  Ts.AssertEqual<
    InferFromQuery<{ dateArg: { $: { date: $ } } }, PossibleWithScalars.$.ArgumentsMap>,
    { date?: string | undefined }  // Should be string (encoded type)
  >,

  // Required custom scalar (Date)
  Ts.AssertEqual<
    InferFromQuery<{ dateArgNonNull: { $: { date: $ } } }, PossibleWithScalars.$.ArgumentsMap>,
    { date: string }  // Should be string (encoded type)
  >,

  // ====================================================================
  //                        LIST ARGUMENTS
  // ====================================================================
  // Optional list of required items
  Ts.AssertEqual<
    InferFromQuery<{ dateArgList: { $: { date: $ } } }, PossibleWithScalars.$.ArgumentsMap>,
    { date?: readonly string[] | undefined }
  >,

  // Required list of required items
  Ts.AssertEqual<
    InferFromQuery<{ stringWithListArgRequired: { $: { ints: $ } } }, Possible.$.ArgumentsMap>,
    { ints: readonly number[] }
  >,

  // Optional list of optional items (stringWithListArg has [0, [0]])
  Ts.AssertEqual<
    InferFromQuery<{ stringWithListArg: { $: { ints: $ } } }, Possible.$.ArgumentsMap>,
    { ints?: readonly number[] | undefined }
  >
>

// dprint-ignore
type _2 = Ts.Cases<
  // ====================================================================
  //                        INPUT OBJECTS
  // ====================================================================
  // Optional input object
  Ts.AssertEqual<
    InferFromQuery<{ dateArgInputObject: { $: { input: $ } } }, PossibleWithScalars.$.ArgumentsMap>,
    { input?: PossibleWithScalars.$.TypeInputsIndex['InputObject'] | undefined }
  >,

  // Required input object
  Ts.AssertEqual<
    InferFromQuery<{ stringWithArgInputObjectRequired: { $: { input: $ } } }, PossibleWithScalars.$.ArgumentsMap>,
    { input: PossibleWithScalars.$.TypeInputsIndex['InputObject'] }
  >,

  // Multiple input objects with same variable name (required wins)
  Ts.AssertEqual<
    InferFromQuery<{ dateArgInputObject: { $: { input: $ } }, stringWithArgInputObjectRequired: { $: { input: $ } } }, PossibleWithScalars.$.ArgumentsMap>,
    { input: PossibleWithScalars.$.TypeInputsIndex['InputObject'] }
  >,

  // Nested input object
  Ts.AssertEqual<
    InferFromQuery<{ InputObjectNested: { $: { input: $ } } }, Possible.$.ArgumentsMap>,
    { input?: Possible.$.TypeInputsIndex['InputObjectNested'] | undefined }
  >,

  // Circular input object (self-referential)
  Ts.AssertEqual<
    InferFromQuery<{ argInputObjectCircular: { $: { input: $ } } }, Possible.$.ArgumentsMap>,
    { input?: Possible.$.TypeInputsIndex['InputObjectCircular'] | undefined }
  >,

  // ====================================================================
  //                    VARIABLE MODIFIERS
  // ====================================================================
  // Required modifier - forces optional argument to be required
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { id: $Required } } }, Possible.$.ArgumentsMap>,
    { id: string }
  >,

  // Default value modifier - makes any argument optional
  Ts.AssertEqual<
    InferFromQuery<{ stringWithRequiredArg: { $: { string: $WithDefaultHello } } }, Possible.$.ArgumentsMap>,
    { string?: string }
  >,

  // Combining required with other arguments
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { id: $Required; boolean: $ } } }, Possible.$.ArgumentsMap>,
    { id: string; boolean?: boolean | undefined }
  >,

  // Default with different types
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { int: $WithDefault42 } } }, Possible.$.ArgumentsMap>,
    { int?: number }
  >
>

// ====================================================================
//                   ENUM KEY PREFIX STRIPPING
// ====================================================================
// dprint-ignore
type _3 = Ts.Cases<
  // Strip leading $ from property names (for GraphQL variable names)
  Ts.AssertEqual<Select.Arguments.EnumKeyPrefixStrip<'$type'>, 'type'>,
  Ts.AssertEqual<Select.Arguments.EnumKeyPrefixStrip<'$name'>, 'name'>,
  // Passthrough keys without $
  Ts.AssertEqual<Select.Arguments.EnumKeyPrefixStrip<'name'>, 'name'>
>
