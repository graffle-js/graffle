import { Ts } from '@wollybeard/kit'
import type { PossibleWithScalars } from '../__tests__/fixtures/possible-with-scalars/_namespace.js'
import type { Possible } from '../__tests__/fixtures/possible/_namespace.js'
import type { InferFromQuery } from './infer.js'
import { $var } from './var.js'

type $var = typeof $var

const $varWithDefaultHello = $var.default('hello')
type $varWithDefaultHello = typeof $varWithDefaultHello

const $varWithCustomName = $var.name('custom')
type $varWithCustomName = typeof $varWithCustomName

const $varWithDefault42 = $var.default(42)
type $varWithDefault42 = typeof $varWithDefault42

const $varRequired = $var.required()
type $varRequired = typeof $varRequired

// dprint-ignore
type _1 = Ts.Cases<
  // Custom variable name
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { float: $varWithCustomName } } }, Possible.$.ArgumentsMap>,
    { custom?: number | undefined }
  >,
  // ====================================================================
  //                      Nested Field Arguments
  // ====================================================================
  Ts.AssertEqual<
    InferFromQuery<{ objectNestedWithArgs: { object: { $: { int: $var } } } }, Possible.$.ArgumentsMap>,
    { int?: number | undefined }
  >,
  // ====================================================================
  //                      ALIASES
  // ====================================================================
  // Alias with $var on direct field arguments
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: ['x', { $: { id: $var } }] }, Possible.$.ArgumentsMap>,
    { id?: string | undefined }
  >,
  // Multiple aliases with $var on direct field arguments
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: [['x', { $: { id: $var } }]] }, Possible.$.ArgumentsMap>,
    { id?: string | undefined }
  >,
  // Alias with $var on nested field arguments
  Ts.AssertEqual<
    InferFromQuery<{ objectNestedWithArgs: { id: ['id2', { $: { filter: $var } }] } }, Possible.$.ArgumentsMap>,
    { filter?: string | undefined }
  >,
  // ====================================================================
  //                      OPTIONAL ARGUMENTS
  // ====================================================================
  // Field with optional string argument
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { id: $var } } }, Possible.$.ArgumentsMap>,
    { id?: string | undefined }
  >,

  // Field with optional boolean argument
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { boolean: $var } } }, Possible.$.ArgumentsMap>,
    { boolean?: boolean | undefined }
  >,

  // Field with optional int argument
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { int: $var } } }, Possible.$.ArgumentsMap>,
    { int?: number | undefined }
  >,

  // Field with optional float argument
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { float: $var } } }, Possible.$.ArgumentsMap>,
    { float?: number | undefined }
  >,

  // ====================================================================
  //                      REQUIRED ARGUMENTS
  // ====================================================================
  // Field with required string argument
  Ts.AssertEqual<
    InferFromQuery<{ stringWithRequiredArg: { $: { string: $var } } }, Possible.$.ArgumentsMap>,
    { string: string }
  >,

  // ====================================================================
  //               MULTIPLE VARIABLES IN SAME FIELD
  // ====================================================================
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { id: $var, boolean: $var, int: $var } } }, Possible.$.ArgumentsMap>,
    { id?: string | undefined; boolean?: boolean | undefined; int?: number | undefined }
  >,

  // ====================================================================
  //                MULTIPLE FIELDS WITH VARIABLES
  // ====================================================================
  Ts.AssertEqual<
    InferFromQuery<{
      objectWithArgs: { $: { id: $var } }, stringWithRequiredArg: { $: { string: $var } }
    }, Possible.$.ArgumentsMap>,
    { id?: string | undefined, string: string }
  >,

  // ====================================================================
  //                        CUSTOM SCALARS
  // ====================================================================
  // Optional custom scalar (Date)
  Ts.AssertEqual<
    InferFromQuery<{ dateArg: { $: { date: $var } } }, PossibleWithScalars.$.ArgumentsMap>,
    { date?: string | undefined }  // Should be string (encoded type)
  >,

  // Required custom scalar (Date)
  Ts.AssertEqual<
    InferFromQuery<{ dateArgNonNull: { $: { date: $var } } }, PossibleWithScalars.$.ArgumentsMap>,
    { date: string }  // Should be string (encoded type)
  >,

  // ====================================================================
  //                        LIST ARGUMENTS
  // ====================================================================
  // Optional list of required items
  Ts.AssertEqual<
    InferFromQuery<{ dateArgList: { $: { date: $var } } }, PossibleWithScalars.$.ArgumentsMap>,
    { date?: readonly string[] | undefined }
  >,

  // Required list of required items
  Ts.AssertEqual<
    InferFromQuery<{ stringWithListArgRequired: { $: { ints: $var } } }, Possible.$.ArgumentsMap>,
    { ints: readonly number[] }
  >,

  // Optional list of optional items (stringWithListArg has [0, [0]])
  Ts.AssertEqual<
    InferFromQuery<{ stringWithListArg: { $: { ints: $var } } }, Possible.$.ArgumentsMap>,
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
    InferFromQuery<{ dateArgInputObject: { $: { input: $var } } }, PossibleWithScalars.$.ArgumentsMap>,
    { input?: PossibleWithScalars.$.TypeInputsIndex['InputObject'] | undefined }
  >,

  // Required input object
  Ts.AssertEqual<
    InferFromQuery<{ stringWithArgInputObjectRequired: { $: { input: $var } } }, PossibleWithScalars.$.ArgumentsMap>,
    { input: PossibleWithScalars.$.TypeInputsIndex['InputObject'] }
  >,

  // Multiple input objects with same variable name (required wins)
  Ts.AssertEqual<
    InferFromQuery<{ dateArgInputObject: { $: { input: $var } }, stringWithArgInputObjectRequired: { $: { input: $var } } }, PossibleWithScalars.$.ArgumentsMap>,
    { input: PossibleWithScalars.$.TypeInputsIndex['InputObject'] }
  >,

  // Nested input object
  Ts.AssertEqual<
    InferFromQuery<{ InputObjectNested: { $: { input: $var } } }, Possible.$.ArgumentsMap>,
    { input?: Possible.$.TypeInputsIndex['InputObjectNested'] | undefined }
  >,

  // Circular input object (self-referential)
  Ts.AssertEqual<
    InferFromQuery<{ argInputObjectCircular: { $: { input: $var } } }, Possible.$.ArgumentsMap>,
    { input?: Possible.$.TypeInputsIndex['InputObjectCircular'] | undefined }
  >,

  // ====================================================================
  //                    VARIABLE MODIFIERS
  // ====================================================================
  // Required modifier - forces optional argument to be required
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { id: $varRequired } } }, Possible.$.ArgumentsMap>,
    { id: string }
  >,

  // Default value modifier - makes any argument optional
  Ts.AssertEqual<
    InferFromQuery<{ stringWithRequiredArg: { $: { string: $varWithDefaultHello } } }, Possible.$.ArgumentsMap>,
    { string?: string }
  >,

  // Combining required with other arguments
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { id: $varRequired; boolean: $var } } }, Possible.$.ArgumentsMap>,
    { id: string; boolean?: boolean | undefined }
  >,

  // Default with different types
  Ts.AssertEqual<
    InferFromQuery<{ objectWithArgs: { $: { int: $varWithDefault42 } } }, Possible.$.ArgumentsMap>,
    { int?: number }
  >
>
