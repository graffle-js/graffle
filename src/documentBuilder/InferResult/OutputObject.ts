import type { ConditionalSimplify } from 'type-fest/source/conditional-simplify.js'
import type { StringKeyof } from '../../lib/prelude.js'
import type { TSErrorDescriptive } from '../../lib/ts-error.js'
import type { Schema } from '../../types/Schema/__.js'
import type { Select } from '../Select/__.js'
import type { Alias } from './Alias.js'
import type { OutputField } from './OutputField.js'
import type { ScalarsWildcard } from './ScalarsWildcard.js'

export type OutputObject<$SelectionSet, $Schema extends Schema, $Node extends Schema.OutputObject> =
  Select.SelectScalarsWildcard.IsSelectScalarsWildcard<$SelectionSet> extends true
    // todo what about when scalars wildcard is combined with other fields like relations?
    ? ScalarsWildcard<$SelectionSet, $Schema, $Node>
    : ConditionalSimplify<
      & SelectionNonSelectAlias<$SelectionSet, $Schema, $Node>
      & Alias<$Schema, $Node, $SelectionSet>,
      $Schema['scalars']['typesDecoded']
    >

type SelectionNonSelectAlias<$SelectionSet, $Schema extends Schema, $Node extends Schema.OutputObject> = {
  [$Key in PickSelectsPositiveIndicatorAndNotSelectAlias<$SelectionSet>]: $Key extends keyof $Node['fields']
    ? OutputField<$SelectionSet[$Key], $Node['fields'][$Key], $Schema>
    : Errors.UnknownFieldName<$Key, $Node>
}

export namespace Errors {
  export type UnknownFieldName<
    $FieldName extends string,
    $Object extends Schema.StandardTypes.RootType | Schema.OutputObject,
  > = TSErrorDescriptive<'Object', `field "${$FieldName}" does not exist on object "${$Object['name']}"`>
}

export type PickSelectsPositiveIndicatorAndNotSelectAlias<$SelectionSet> = StringKeyof<
  {
    [
      $FieldName in keyof $SelectionSet as $SelectionSet[$FieldName] extends Select.Indicator.Negative ? never
        : $SelectionSet[$FieldName] extends any[] ? never
        : $FieldName
    ]: 0
  }
>
