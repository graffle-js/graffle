import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { Ts } from '@wollybeard/kit'
import type { InlineType } from '../../../../schema/sddm/InlineType.js'
import type { Interface } from './Interface.js'
import type { OutputObjectLike } from './OutputObjectLike.js'
import type { Union } from './Union.js'

// dprint-ignore
export type OutputField<
  $SelectionSet,
  $Field extends GraphqlKit.Schema.Type.OutputField,
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
  $Node extends GraphqlKit.Schema.Type.OutputObject
    ? (
        $SelectionSet extends object
          ? OutputObjectLike<$SelectionSet, $Schema, $Node>
          : Ts.Err.StaticError<'When $Node extends GraphqlKit.Schema.Type.OutputObject then $SelectionSet must extend object', { location: 'FieldType'; $Type: $Node; $SelectionSet: $SelectionSet; $Schema:$Schema } >
      ) :
  // $Node extends GraphqlKit.Schema.Type.Scalar.ScalarCodecless             ? Codec.GetDecoded<GetCodecForCodecless<$Schema, $Node>> :
  $Node extends GraphqlKit.Schema.Type.__typename                         ? $Node['value'] :
  [GraphqlKit.Schema.Type.ResolveLeafType<$Schema, $Node>] extends [never]
    ? (
          $Node extends GraphqlKit.Schema.Type.Interface
            ? Interface<$SelectionSet, $Schema, $Node>
            : $Node extends GraphqlKit.Schema.Type.Union
              ? Union<$SelectionSet, $Schema, $Node>
              : Ts.Err.StaticError<`Unknown type`, { location: 'FieldType'; $Type: $Node; $SelectionSet: $SelectionSet; $Schema:$Schema }>
      )
    : GraphqlKit.Schema.Type.ResolveLeafType<$Schema, $Node>

// // dprint-ignore
// type GetCodecForCodecless<
//   $Schema,
//   $Node extends GraphqlKit.Schema.Type.Scalar.ScalarCodecless
// > =
//   // @ts-expect-error: No $Schema constraint to avoid "compare depth limit"
//   $Node['name'] extends keyof $Schema['scalarRegistry']['map']
//     // @ts-expect-error: No $Schema constraint to avoid "compare depth limit"
//     ? $Schema['scalarRegistry']['map'][$Node['name']]['codec']
//     : GraphqlKit.Schema.Type.Standard.Scalars.String['codec']
