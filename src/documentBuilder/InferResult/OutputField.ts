import type { TSErrorDescriptive } from '../../lib/ts-error.js'
import type { Schema } from '../../types/Schema/__.js'
import type { InlineType } from '../../types/SchemaDrivenDataMap/InlineType.js'
import type { Select } from '../Select/__.js'
import type { FieldDirectiveInclude, FieldDirectiveSkip } from './directive.js'
import type { Interface } from './Interface.js'
import type { OutputObject } from './OutputObject.js'
import type { Union } from './Union.js'

// dprint-ignore
export type OutputField<$SelectionSet, $Field extends Schema.OutputField, $Schema extends Schema> =
  $SelectionSet extends Select.Directive.Include.FieldStates.Negative | Select.Directive.Skip.FieldStates.Positive
     ? null
     : (
        | FieldDirectiveInclude<$SelectionSet>
        | FieldDirectiveSkip<$SelectionSet>
        | //SimplifyNullable<
            InlineType.Infer<
              $Field['inlineType'],
              FieldType<$Schema, Omit<$SelectionSet, '$'>, $Field['namedType']>
            >
          //>
      )

// dprint-ignore
type FieldType<
  $Schema extends Schema,
  $SelectionSet,
  $Node extends Schema.NamedOutputTypes,
> = 
  $Node extends Schema.OutputObject                      ? $SelectionSet extends object
                                                            ? OutputObject<$SelectionSet, $Schema, $Node>
                                                            : TSErrorDescriptive<'FieldType', 'When $Node extends Schema.OutputObject then $SelectionSet must extend object', { $Type: $Node; $SelectionSet: $SelectionSet; $Schema:$Schema } > :
  $Node extends Schema.Scalar                            ? Schema.Scalar.GetDecoded<$Node> : // TODO use TS compiler API to extract this type at build time.
  $Node extends Schema.Scalar.ScalarCodecless            ? Schema.Scalar.GetDecoded<GetCodecForCodecless<$Schema, $Node>> :
  $Node extends Schema.__typename                        ? $Node['value'] :
  $Node extends Schema.Enum                              ? $Node['membersUnion'] :
  $Node extends Schema.Interface                         ? Interface<$SelectionSet, $Schema, $Node> :
  $Node extends Schema.Union                             ? Union<$SelectionSet, $Schema, $Node> :
                                                           TSErrorDescriptive<'FieldType', `Unknown type`, { $Type: $Node; $SelectionSet: $SelectionSet; $Schema:$Schema }>

// dprint-ignore
type GetCodecForCodecless<
  $Schema extends Schema,
  $Node extends Schema.Scalar.ScalarCodecless
> =
  $Node['name'] extends keyof $Schema['scalarRegistry']['map']
    ? $Schema['scalarRegistry']['map'][$Node['name']]
    : Schema.Scalar.String
