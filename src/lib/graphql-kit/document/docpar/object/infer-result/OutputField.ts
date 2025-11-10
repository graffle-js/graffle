import type { Type } from '../../../../schema/type/_.js'
import type { Ts } from '@wollybeard/kit'
import type { InlineType } from '../../../../schema/sddm/InlineType.js'
import type { Interface } from './Interface.js'
import type { OutputObjectLike } from './OutputObjectLike.js'
import type { Union } from './Union.js'

// dprint-ignore
export type OutputField<
  $SelectionSet,
  $Field extends Type.OutputField,
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
  $Node extends Type.OutputObject
    ? (
        $SelectionSet extends object
          ? OutputObjectLike<$SelectionSet, $Schema, $Node>
          : Ts.Err.StaticError<'When $Node extends Type.OutputObject then $SelectionSet must extend object', { location: 'FieldType'; $Type: $Node; $SelectionSet: $SelectionSet; $Schema:$Schema } >
      ) :
  // $Node extends Type.Scalar.ScalarCodecless             ? Codec.GetDecoded<GetCodecForCodecless<$Schema, $Node>> :
  $Node extends Type.__typename                         ? $Node['value'] :
  [Type.ResolveLeafType<$Schema, $Node>] extends [never]
    ? (
          $Node extends Type.Interface
            ? Interface<$SelectionSet, $Schema, $Node>
            : $Node extends Type.Union
              ? Union<$SelectionSet, $Schema, $Node>
              : Ts.Err.StaticError<`Unknown type`, { location: 'FieldType'; $Type: $Node; $SelectionSet: $SelectionSet; $Schema:$Schema }>
      )
    : Type.ResolveLeafType<$Schema, $Node>

// // dprint-ignore
// type GetCodecForCodecless<
//   $Schema,
//   $Node extends Type.Scalar.ScalarCodecless
// > =
//   // @ts-expect-error: No $Schema constraint to avoid "compare depth limit"
//   $Node['name'] extends keyof $Schema['scalarRegistry']['map']
//     // @ts-expect-error: No $Schema constraint to avoid "compare depth limit"
//     ? $Schema['scalarRegistry']['map'][$Node['name']]['codec']
//     : Type.Standard.Scalars.String['codec']
