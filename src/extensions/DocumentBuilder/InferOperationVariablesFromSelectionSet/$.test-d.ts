import { Ts } from '@wollybeard/kit'
import type { ArgumentsMap as ArgumentsMapWithScalars } from '../__tests__/fixtures/possible-with-scalars/modules/arguments-map.js'
import type { $TypeInputsIndex as TypeInputsIndexWithScalars } from '../__tests__/fixtures/possible-with-scalars/modules/type-inputs-index.js'
import type { ArgumentsMap } from '../__tests__/fixtures/possible/modules/arguments-map.js'
import type { $TypeInputsIndex as TypeInputsIndex } from '../__tests__/fixtures/possible/modules/type-inputs-index.js'
import { $var } from '../variable.js'
import type { Infer as $ } from './__.js'

// Create test variable instances
const $varWithDefaultHello = $var.withDefault('hello')
const $varWithDefault42 = $var.withDefault(42)

// dprint-ignore
type _1 = Ts.Cases<
  // ====================================================================
  //                      OPTIONAL ARGUMENTS
  // ====================================================================
  // Field with optional string argument
  Ts.AssertEqual<
    $<{ objectWithArgs: { $: { id: typeof $var } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { id?: string | undefined }
  >,

  // Field with optional boolean argument
  Ts.AssertEqual<
    $<{ objectWithArgs: { $: { boolean: typeof $var } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { boolean?: boolean | undefined }
  >,

  // Field with optional int argument
  Ts.AssertEqual<
    $<{ objectWithArgs: { $: { int: typeof $var } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { int?: number | undefined }
  >,

  // Field with optional float argument
  Ts.AssertEqual<
    $<{ objectWithArgs: { $: { float: typeof $var } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { float?: number | undefined }
  >,

  // ====================================================================
  //                      REQUIRED ARGUMENTS
  // ====================================================================
  // Field with required string argument
  Ts.AssertEqual<
    $<{ stringWithRequiredArg: { $: { string: typeof $var } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { string: string }
  >,

  // ====================================================================
  //               MULTIPLE VARIABLES IN SAME FIELD
  // ====================================================================
  Ts.AssertEqual<
    $<{ objectWithArgs: { $: { id: typeof $var, boolean: typeof $var, int: typeof $var } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { id?: string | undefined; boolean?: boolean | undefined; int?: number | undefined }
  >,

  // ====================================================================
  //                MULTIPLE FIELDS WITH VARIABLES
  // ====================================================================
  Ts.AssertEqual<
    $<{
      objectWithArgs: { $: { id: typeof $var } }, stringWithRequiredArg: { $: { string: typeof $var } }
    }, ArgumentsMap['query'], TypeInputsIndex>,
    { id?: string | undefined, string: string }
  >,

  // ====================================================================
  //                        CUSTOM SCALARS
  // ====================================================================
  // Optional custom scalar (Date)
  Ts.AssertEqual<
    $<{ dateArg: { $: { date: typeof $var } } }, ArgumentsMapWithScalars['query'], TypeInputsIndexWithScalars>,
    { date?: string | undefined }  // Should be string (encoded type)
  >,

  // Required custom scalar (Date)
  Ts.AssertEqual<
    $<{ dateArgNonNull: { $: { date: typeof $var } } }, ArgumentsMapWithScalars['query'], TypeInputsIndexWithScalars>,
    { date: string }  // Should be string (encoded type)
  >,

  // ====================================================================
  //                        LIST ARGUMENTS
  // ====================================================================
  // Optional list of required items
  Ts.AssertEqual<
    $<{ dateArgList: { $: { date: typeof $var } } }, ArgumentsMapWithScalars['query'], TypeInputsIndexWithScalars>,
    { date?: readonly string[] | undefined }
  >,

  // Required list of required items
  Ts.AssertEqual<
    $<{ stringWithListArgRequired: { $: { ints: typeof $var } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { ints: readonly number[] }
  >,

  // Optional list of optional items (stringWithListArg has [0, [0]])
  Ts.AssertEqual<
    $<{ stringWithListArg: { $: { ints: typeof $var } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { ints?: readonly number[] | undefined }
  >
>

type _2 = Ts.Cases<
  // ====================================================================
  //                        INPUT OBJECTS
  // ====================================================================
  // Optional input object
  Ts.AssertEqual<
    $<
      { dateArgInputObject: { $: { input: typeof $var } } },
      ArgumentsMapWithScalars['query'],
      TypeInputsIndexWithScalars
    >,
    { input?: TypeInputsIndexWithScalars['InputObject'] | undefined }
  >,
  // Required input object
  Ts.AssertEqual<
    $<
      { stringWithArgInputObjectRequired: { $: { input: typeof $var } } },
      ArgumentsMapWithScalars['query'],
      TypeInputsIndexWithScalars
    >,
    { input: TypeInputsIndexWithScalars['InputObject'] }
  >,
  // Multiple input objects with same variable name (required wins)
  Ts.AssertEqual<
    $<
      {
        dateArgInputObject: { $: { input: typeof $var } }
        stringWithArgInputObjectRequired: { $: { input: typeof $var } }
      },
      ArgumentsMapWithScalars['query'],
      TypeInputsIndexWithScalars
    >,
    { input: TypeInputsIndexWithScalars['InputObject'] } // Required wins over optional
  >,
  // Nested input object
  Ts.AssertEqual<
    $<{ InputObjectNested: { $: { input: typeof $var } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { input?: TypeInputsIndex['InputObjectNested'] | undefined }
  >,
  // Circular input object (self-referential)
  Ts.AssertEqual<
    $<{ argInputObjectCircular: { $: { input: typeof $var } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { input?: TypeInputsIndex['InputObjectCircular'] | undefined }
  >,
  // ====================================================================
  //                    VARIABLE MODIFIERS
  // ====================================================================
  // Required modifier - forces optional argument to be required
  Ts.AssertEqual<
    $<{ objectWithArgs: { $: { id: typeof $var.required } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { id: string } // No longer optional
  >,
  // Default value modifier - makes any argument optional
  Ts.AssertEqual<
    $<
      { stringWithRequiredArg: { $: { string: typeof $varWithDefaultHello } } },
      ArgumentsMap['query'],
      TypeInputsIndex
    >,
    { string?: string } // Now optional because it has a default
  >,
  // Combining required with other arguments
  Ts.AssertEqual<
    $<
      {
        objectWithArgs: { $: { id: typeof $var.required; boolean: typeof $var } }
      },
      ArgumentsMap['query'],
      TypeInputsIndex
    >,
    { id: string; boolean?: boolean | undefined } // id is required, boolean stays optional
  >,
  // Default with different types
  Ts.AssertEqual<
    $<{ objectWithArgs: { $: { int: typeof $varWithDefault42 } } }, ArgumentsMap['query'], TypeInputsIndex>,
    { int?: number } // Optional with default value
  >
>
