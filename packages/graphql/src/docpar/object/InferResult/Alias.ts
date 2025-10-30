import type { Select } from '../../object/Select/_.js'
import type { Schema } from '#~/schema-types/index.js'
import { Obj, Tup } from '@wollybeard/kit'
import type { OutputField } from './OutputField.js'

// dprint-ignore
export type Alias<
	$Schema,
	$Node extends Schema.OutputObjectLike,
	$SelectionSet,
> =
 Obj.Union.Merge<
    Obj.ValuesOrEmptyObject<
      {
        [
          $Select in keyof $SelectionSet as
            $SelectionSet[$Select] extends Select.SelectAlias.SelectAlias<any> | Select.SelectAlias.SelectAliasShort | Select.SelectAlias.SelectAliasString
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
  $SelectAlias extends Select.SelectAlias.SelectAlias | Select.SelectAlias.SelectAliasShort | Select.SelectAlias.SelectAliasString,
  $FieldName extends string,
  $Schema extends Schema,
  $Node extends Schema.OutputObjectLike,
> =
  $SelectAlias extends Select.SelectAlias.SelectAliasOne<any>      ?  InferSelectAliasOne<$SelectAlias, $FieldName, $Schema, $Node> :
  $SelectAlias extends Select.SelectAlias.SelectAliasMultiple<any> ?  InferSelectAliasMultiple<$SelectAlias, $FieldName, $Schema, $Node> :
  $SelectAlias extends Select.SelectAlias.SelectAliasShort         ?  InferSelectAliasShort<$SelectAlias, $FieldName, $Schema, $Node> :
  $SelectAlias extends Select.SelectAlias.SelectAliasString        ?  InferSelectAliasString<$SelectAlias, $FieldName, $Schema, $Node> :
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

type InferSelectAliasShort<
  $SelectAliasShort extends Select.SelectAlias.SelectAliasShort,
  $FieldName extends string,
  $Schema extends Schema,
  $Node extends Schema.OutputObjectLike,
> = {
  [_ in $SelectAliasShort[0]]: OutputField<true, $Node['fields'][$FieldName], $Schema>
}

type InferSelectAliasString<
  $SelectAliasString extends Select.SelectAlias.SelectAliasString,
  $FieldName extends string,
  $Schema extends Schema,
  $Node extends Schema.OutputObjectLike,
> = {
  [_ in $SelectAliasString]: OutputField<true, $Node['fields'][$FieldName], $Schema>
}
