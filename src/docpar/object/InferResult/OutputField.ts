import type { Schema } from '#src/types/Schema/$.js'
import type { Ts } from '@wollybeard/kit'
import type { InlineType } from '../../core/sddm/InlineType.js'
import type { Interface } from './Interface.js'
import type { OutputObjectLike } from './OutputObjectLike.js'
import type { Union } from './Union.js'

// dprint-ignore
export type OutputField<
  $SelectionSet,
  $Field extends Schema.OutputField,
  $Schema,
> =
  InlineType.Infer<
    $Field['inlineType'],
    FieldType<$Schema, Omit<$SelectionSet, '$'>, $Field['namedType']>
  >

// dprint-ignore
type FieldType<
  $Schema,
  $SelectionSet,
  $Node,
> =
  $Node extends Schema.OutputObject                      ? $SelectionSet extends object
                                                            ? OutputObjectLike<$SelectionSet, $Schema, $Node>
                                                            : Ts.Err.StaticError<'When $Node extends Schema.OutputObject then $SelectionSet must extend object', { location: 'FieldType'; $Type: $Node; $SelectionSet: $SelectionSet; $Schema:$Schema } > :
  $Node extends Schema.Scalar                            ? Schema.Scalar.GetDecoded<$Node> : // TODO use TS compiler API to extract this type at build time.
  // @ts-expect-error: No $Schema constraint to avoid "compare depth limit"
  $Node extends Schema.Scalar.ScalarCodecless            ? Schema.Scalar.GetDecoded<GetCodecForCodecless<$Schema, $Node>> :
  $Node extends Schema.__typename                        ? $Node['value'] :
  $Node extends Schema.Enum                              ? $Node['membersUnion'] :
  $Node extends Schema.Interface                         ? Interface<$SelectionSet, $Schema, $Node> :
  $Node extends Schema.Union                             ? Union<$SelectionSet, $Schema, $Node> :
                                                           Ts.Err.StaticError<`Unknown type`, { location: 'FieldType'; $Type: $Node; $SelectionSet: $SelectionSet; $Schema:$Schema }>

// dprint-ignore
type GetCodecForCodecless<
  $Schema,
  $Node extends Schema.Scalar.ScalarCodecless
> =
  // @ts-expect-error: No $Schema constraint to avoid "compare depth limit"
  $Node['name'] extends keyof $Schema['scalarRegistry']['map']
    // @ts-expect-error: No $Schema constraint to avoid "compare depth limit"
    ? $Schema['scalarRegistry']['map'][$Node['name']]
    : Schema.Scalar.String
