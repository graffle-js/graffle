import type { Ts } from '@wollybeard/kit'
import type { Schema } from '../../../../schema/_.js'
import type { Interface } from './Interface.js'
import type { OutputObjectLike } from './OutputObjectLike.js'
import type { Union } from './Union.js'

// dprint-ignore
export type OutputField<
  $SelectionSet,
  $Field extends Schema.Type.OutputField,
  $Schema,
> =
 Schema.SchemaDrivenDataMap.InlineType.Infer<
    $Field['inlineType'],
    FieldType<$Schema, Omit<$SelectionSet, '$'>, $Field['namedType']>
  >

// dprint-ignore
type FieldType<
  $Schema,
  $SelectionSet,
  $Node,
> =
  $Node extends Schema.Type.OutputObject
    ? (
        $SelectionSet extends object
          ? OutputObjectLike<$SelectionSet, $Schema, $Node>
          : Ts.Err.StaticError<'When $Node extends Schema.Type.OutputObject then $SelectionSet must extend object', { location: 'FieldType'; $Type: $Node; $SelectionSet: $SelectionSet; $Schema:$Schema } >
      ) :
  // $Node extends Schema.Type.Scalar.ScalarCodecless             ? Codec.GetDecoded<GetCodecForCodecless<$Schema, $Node>> :
  $Node extends Schema.Type.__typename                         ? $Node['value'] :
  [Schema.Type.ResolveLeafType<$Schema, $Node>] extends [never]
    ? (
          $Node extends Schema.Type.Interface
            ? Interface<$SelectionSet, $Schema, $Node>
            : $Node extends Schema.Type.Union
              ? Union<$SelectionSet, $Schema, $Node>
              : Ts.Err.StaticError<`Unknown type`, { location: 'FieldType'; $Type: $Node; $SelectionSet: $SelectionSet; $Schema:$Schema }>
      )
    : Schema.Type.ResolveLeafType<$Schema, $Node>

// // dprint-ignore
// type GetCodecForCodecless<
//   $Schema,
//   $Node extends Schema.Type.Scalar.ScalarCodecless
// > =
//   // @ts-expect-error: No $Schema constraint to avoid "compare depth limit"
//   $Node['name'] extends keyof $Schema['scalarRegistry']['map']
//     // @ts-expect-error: No $Schema constraint to avoid "compare depth limit"
//     ? $Schema['scalarRegistry']['map'][$Node['name']]['codec']
//     : Schema.Type.Standard.Scalars.String['codec']
