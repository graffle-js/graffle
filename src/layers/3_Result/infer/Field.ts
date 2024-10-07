import type { Simplify } from 'type-fest'
import type { TSError } from '../../../lib/TSError.js'
import type { Schema } from '../../1_Schema/__.js'
import type { Select } from '../../2_Select/__.js'
import type { SchemaIndex } from '../../4_generator/generators/SchemaIndex.js'
import type { InferInterface, InferObject, InferUnion } from './root.js'

// dprint-ignore
export type InferField<$SelectionSet, $Field extends Schema.SomeField, $Schema extends SchemaIndex> =
  Simplify<
    $SelectionSet extends Select.Directive.Include.FieldStates.Negative | Select.Directive.Skip.FieldStates.Positive ?
       null :
       (
          | FieldDirectiveInclude<$SelectionSet>
          | FieldDirectiveSkip<$SelectionSet>
          | InferFieldType<Omit<$SelectionSet, '$'>, $Field['type'], $Schema>
        )
  >

// dprint-ignore
type InferFieldType<
  $SelectionSet,
  $Type extends Schema.Output.Any,
  $Schema extends SchemaIndex
> = 
  $Type extends Schema.__typename<infer $Value>             ? $Value :
  $Type extends Schema.Output.Nullable<infer $InnerType>    ? null | InferFieldType<$SelectionSet, $InnerType, $Schema> :
  $Type extends Schema.Output.List<infer $InnerType>        ? Array<InferFieldType<$SelectionSet, $InnerType, $Schema>> :
  $Type extends Schema.Enum<infer _, infer $Members>        ? $Members[number] :
  $Type extends Schema.Scalar.$Any                          ? ReturnType<$Type['codec']['decode']> :
  $Type extends Schema.Object$2                             ? InferObject<$SelectionSet, $Schema, $Type> :
  $Type extends Schema.Interface                            ? InferInterface<$SelectionSet, $Schema, $Type> :
  $Type extends Schema.Union                                ? InferUnion<$SelectionSet, $Schema, $Type> :
                                                              TSError<'InferFieldType', `Unknown type`, { $Type: $Type; $SelectionSet: $SelectionSet; $Schema:$Schema }>

// dprint-ignore
type FieldDirectiveInclude<$SelectionSet> =
  $SelectionSet extends Select.Directive.Include.Field  ? $SelectionSet extends Select.Directive.Include.FieldStates.Positive ? never
																																																																					: null
																															: never

// dprint-ignore
type FieldDirectiveSkip<$SelectionSet> =
  $SelectionSet extends Select.Directive.Skip.Field     ? $SelectionSet extends Select.Directive.Skip.FieldStates.Negative 	? never 
																																																																				: null
																															: never
