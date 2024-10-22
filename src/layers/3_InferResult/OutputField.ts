import type { Simplify } from 'type-fest'
import type { TSErrorDescriptive } from '../../lib/ts-error.js'
import type { Schema } from '../../types/Schema/__.js'
import type { InlineType } from '../../types/SchemaDrivenDataMap/InlineType.js'
import type { Select } from '../2_Select/__.js'
import type { Interface } from './Interface.js'
import type { Object } from './OutputObject.js'
import type { Union } from './Union.js'

// dprint-ignore
export type OutputField<$SelectionSet, $Field extends Schema.OutputField, $Schema extends Schema> =
  Simplify<
    $SelectionSet extends Select.Directive.Include.FieldStates.Negative | Select.Directive.Skip.FieldStates.Positive ?
       null :
       (
          | FieldDirectiveInclude<$SelectionSet>
          | FieldDirectiveSkip<$SelectionSet>
          | InlineType.Infer<
              $Field['inlineType'],
              FieldType<$Schema, Omit<$SelectionSet, '$'>, $Field['namedType']>
            >
        )
  >

// dprint-ignore
type FieldType<
  $Schema extends Schema,
  $SelectionSet,
  $Type extends Schema.NamedOutputTypes,
> = 
  $Type extends Schema.OutputObject                      ? Object<$SelectionSet, $Schema, $Type> :
  $Type extends Schema.Scalar                            ? ReturnType<$Type['codec']['decode']> : // TODO use TS compiler API to extract this type at build time.
  $Type extends Schema.Scalar.ScalarCodecless            ? ReturnType<GetCodecForCodecless<$Type, $Schema>['codec']['decode']> :
  $Type extends Schema.__typename                        ? $Type['value'] :
  $Type extends Schema.Enum                              ? $Type['membersUnion'] :
  $Type extends Schema.Interface                         ? Interface<$SelectionSet, $Schema, $Type> :
  $Type extends Schema.Union                             ? Union<$SelectionSet, $Schema, $Type> :
                                                           TSErrorDescriptive<'FieldType', `Unknown type`, { $Type: $Type; $SelectionSet: $SelectionSet; $Schema:$Schema }>

// dprint-ignore
type GetCodecForCodecless<
  $Type extends Schema.Scalar.ScalarCodecless,
  $Schema extends Schema
> =
  $Type['name'] extends keyof $Schema['scalars']
    ? $Schema['scalars'][$Type['name']]
    : Schema.Scalar.String

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
