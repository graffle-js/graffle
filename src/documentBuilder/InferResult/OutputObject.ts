import type { IsNever } from 'type-fest'
import { assertEqual } from '../../lib/assert-equal.js'
import type { AssertExtendsObject, GetOrNever, SimplifyExcept, StringKeyof } from '../../lib/prelude.js'
import type { TSErrorDescriptive } from '../../lib/ts-error.js'
import type { Schema } from '../../types/Schema/__.js'
import type { Select } from '../Select/__.js'
import type { Alias } from './Alias.js'
import type { IsNeverViaDirective, IsNullableViaDirective, OmitDirectiveAndArgumentKeys } from './directive.js'
import type { OutputField } from './OutputField.js'
import type { ScalarsWildcard } from './ScalarsWildcard.js'

// dprint-ignore
export type OutputObject<
  $SelectionSet extends object,
  $Schema extends Schema,
  $Node extends Schema.OutputObject
> =
  SimplifyExcept<
    $Schema['scalars']['typesDecoded'],
    & OutputObject_<$SelectionSet, $Schema, $Node>
    & InlineFragmentKeys<$SelectionSet, $Schema, $Node>
  >

// dprint-ignore
type OutputObject_<
  $SelectionSet extends object,
  $Schema extends Schema,
  $Node extends Schema.OutputObject,
> =
  Select.SelectScalarsWildcard.IsSelectScalarsWildcard<$SelectionSet> extends true
    // todo this needs to be an extension and/or only available when sddm is present
    // todo what about when scalars wildcard is combined with other fields like relations?
    ? ScalarsWildcard<$SelectionSet, $Schema, $Node>
    : 
        & NonAliasKeys<$SelectionSet, $Schema, $Node>
        & Alias<$Schema, $Node, $SelectionSet>

// dprint-ignore
type NonAliasKeys<$SelectionSet, $Schema extends Schema, $Node extends Schema.OutputObject> = {
  [$Key in PickPositiveIndicatorAndNotAlias<$SelectionSet>]:
    $Key extends keyof $Node['fields']                     
      ? OutputField<$SelectionSet[$Key], $Node['fields'][$Key], $Schema> 
      : Errors.UnknownFieldName<$Key, $Node>
}

// dprint-ignore
type InlineFragmentKeys<$SelectionSet extends object, $Schema extends Schema, $Node extends Schema.OutputObject> =
  InlineFragmentKey_<
    AssertExtendsObject<
      GetOrNever<$SelectionSet, Select.InlineFragment.Key>
    >,
    $Schema,
    $Node
  >

// dprint-ignore
type InlineFragmentKey_<$SelectionSet extends object, $Schema extends Schema, $Node extends Schema.OutputObject> =
  IsNever<$SelectionSet> extends true
    ? {}
    : IsNeverViaDirective<$SelectionSet> extends true
      ? {}
      : IsNullableViaDirective<$SelectionSet> extends true
        ? MakeObjectSelectionResultNullable<
            OutputObject_<OmitDirectiveAndArgumentKeys<$SelectionSet>, $Schema, $Node>
          >
        : OutputObject_<OmitDirectiveAndArgumentKeys<$SelectionSet>, $Schema, $Node>

type MakeObjectSelectionResultNullable<$Result extends object> = {
  [_ in keyof $Result]: null | $Result[_]
}

// dprint-ignore
type PickPositiveIndicatorAndNotAlias<$SelectionSet> = StringKeyof<
  {
    [
      $Key in keyof $SelectionSet as $SelectionSet[$Key] extends Select.Indicator.Negative
        ? never
        : $SelectionSet[$Key] extends any[]
          ? never
          : $Key extends Select.InlineFragment.Key
            ? never
            : $Key
    ]: 0
  }
>

export namespace Errors {
  export type UnknownFieldName<
    $FieldName extends string,
    $Object extends Schema.OutputObject,
  > = TSErrorDescriptive<'Object', `field "${$FieldName}" does not exist on object "${$Object['name']}"`>
}

//
//
//
// Internal Tests
//
//
//
// dprint-ignore
{
	
assertEqual<PickPositiveIndicatorAndNotAlias<{ a: true }>                 , 'a'>()
assertEqual<PickPositiveIndicatorAndNotAlias<{ a: ['b', true]; b: true }> , 'b'>()

}
