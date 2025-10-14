import type { Select } from '#src/docpar/object/Select/$.js'
import type { UnionMerge, ValuesOrEmptyObject } from '#src/lib/prelude.js'
import type { Schema } from '#src/types/Schema/$.js'
import type { Tup } from '@wollybeard/kit'
import type { OutputField } from './OutputField.js'

// dprint-ignore
export type Alias<
	$Schema,
	$Node extends Schema.OutputObjectLike,
	$SelectionSet,
> =
 UnionMerge<
    ValuesOrEmptyObject<
      {
        [
          $Select in keyof $SelectionSet as $SelectionSet[$Select] extends Select.SelectAlias.SelectAlias<any>
            ? $Select
            : never
        ]:
          InferSelectAlias<
            // @ts-expect-error We know this satisfies the alias type constraint b/c of the key filtering above.
            $SelectionSet[$Select],
            $Select,
            $Schema,
            $Node
          >
      }
    >
  >

// dprint-ignore
type InferSelectAlias<
  $SelectAlias extends Select.SelectAlias.SelectAlias,
  $FieldName extends string,
  $Schema extends Schema,
  $Node extends Schema.OutputObjectLike,
> =
  $SelectAlias extends Select.SelectAlias.SelectAliasOne<any>      ?  InferSelectAliasOne<$SelectAlias, $FieldName, $Schema, $Node> :
  $SelectAlias extends Select.SelectAlias.SelectAliasMultiple<any> ?  InferSelectAliasMultiple<$SelectAlias, $FieldName, $Schema, $Node> :
                                                                      never

type InferSelectAliasMultiple<
  $SelectAliasMultiple extends Select.SelectAlias.SelectAliasMultiple,
  $FieldName extends string,
  $Schema extends Schema,
  $Node extends Schema.OutputObjectLike,
> = Tup.IntersectItems<
  {
    [_ in keyof $SelectAliasMultiple]: InferSelectAliasOne<$SelectAliasMultiple[_], $FieldName, $Schema, $Node>
  }
>

type InferSelectAliasOne<
  $SelectAliasOne extends Select.SelectAlias.SelectAliasOne,
  $FieldName extends string,
  $Schema extends Schema,
  $Node extends Schema.OutputObjectLike,
> = {
  [_ in $SelectAliasOne[0]]: OutputField<$SelectAliasOne[1], $Node['fields'][$FieldName], $Schema>
}
