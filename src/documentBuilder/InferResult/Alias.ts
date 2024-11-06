import type { Tuple, ValuesOrEmptyObject } from '../../lib/prelude.js'
import type { Schema } from '../../types/Schema/__.js'
import type { Select } from '../Select/__.js'
import type { OutputField } from './OutputField.js'

// dprint-ignore
export type Alias<
	$Schema extends Schema,
	$Node extends Schema.OutputObject,
	$SelectionSet,
> =
  ValuesOrEmptyObject<
    {
      [
        $Select in keyof $SelectionSet as $SelectionSet[$Select] extends Select.SelectAlias.SelectAlias
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

// dprint-ignore
type InferSelectAlias<
  $SelectAlias extends Select.SelectAlias.SelectAlias,
  $FieldName extends string,
  $Schema extends Schema,
  $Node extends Schema.OutputObject,
> =
  $SelectAlias extends Select.SelectAlias.SelectAliasOne      ? InferSelectAliasOne<$SelectAlias, $FieldName, $Schema, $Node> :
  $SelectAlias extends Select.SelectAlias.SelectAliasMultiple ? InferSelectAliasMultiple<$SelectAlias, $FieldName, $Schema, $Node> :
                                                                never

type InferSelectAliasMultiple<
  $SelectAliasMultiple extends Select.SelectAlias.SelectAliasMultiple,
  $FieldName extends string,
  $Schema extends Schema,
  $Node extends Schema.OutputObject,
> = Tuple.IntersectItems<
  {
    [_ in keyof $SelectAliasMultiple]: InferSelectAliasOne<$SelectAliasMultiple[_], $FieldName, $Schema, $Node>
  }
>

type InferSelectAliasOne<
  $SelectAliasOne extends Select.SelectAlias.SelectAliasOne,
  $FieldName extends string,
  $Schema extends Schema,
  $Node extends Schema.OutputObject,
> = {
  [_ in $SelectAliasOne[0]]: OutputField<$SelectAliasOne[1], $Node['fields'][$FieldName], $Schema>
}
