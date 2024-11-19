import { assertEqual } from './assert-equal.js'
import { type OmitKeysWithPrefix, type SimplifyDeepExcept, type ToParameters, type Tuple } from './prelude.js'

// dprint-ignore
{


assertEqual<SimplifyDeepExcept<Date, null | Date>									, null | Date>()
assertEqual<SimplifyDeepExcept<Date, {}>									        , {}>()
assertEqual<SimplifyDeepExcept<Date, { a: Date }>					        , { a: Date }>()
assertEqual<SimplifyDeepExcept<Date, { a: 1 }>						        , { a: 1 }>()
assertEqual<SimplifyDeepExcept<Date, { a: { b: Date } }> 	        , { a: { b: Date } }>()
assertEqual<SimplifyDeepExcept<Date, { a: { b: Date } }> 					, { a: { b: Date } }>()
assertEqual<SimplifyDeepExcept<Date, { a: null | { b: Date } }> 	, { a: null | { b: Date } }>()

// assertEqual<IsAnyUnionMemberExtends<1|2, 1>, true>()
// assertEqual<IsAnyUnionMemberExtends<1|2, 2>, true>()
// assertEqual<IsAnyUnionMemberExtends<3, 2>  , false>()

assertEqual<OmitKeysWithPrefix<{ a: 1; b: 2 }, 'a'>         , { a: 1; b: 2 }>()
assertEqual<OmitKeysWithPrefix<{ foo_a: 1; b: 2 }, 'foo'>   , { b: 2 }>()

assertEqual<ToParameters<{ a:1 }>                           , [{ a:1 }]>()
assertEqual<ToParameters<{ a?:1 }>                          , [{ a?:1 }]|[]>()
assertEqual<ToParameters<{}>                                , []>()
assertEqual<ToParameters<{ a:1; b?:2 }>                     , [{ a:1; b?:2 }]>()
assertEqual<ToParameters<{ a?:1; b?:2 }>                    , [{ a?:1; b?:2 }]|[]>()

// Tuple.*

assertEqual<Tuple.GetLastValue<[1, 2, 3]>, 3>()
// @ts-expect-error
GetLastValue<[]>

assertEqual<Tuple.DropUntilIndex<[1, 2, 3], 0>, [1, 2, 3]>()
assertEqual<Tuple.DropUntilIndex<[1, 2, 3], 2>, [3]>()
assertEqual<Tuple.DropUntilIndex<[1, 2, 3], 3>, []>()

assertEqual<Tuple.GetAtNextIndex<[1, 2, 3], 0>, 2>()
assertEqual<Tuple.GetAtNextIndex<[1, 2, 3], 2>, undefined>()

assertEqual<Tuple.GetNextIndexOr<[1, 2, 3], 0, false>, 2>()
assertEqual<Tuple.GetNextIndexOr<[1, 2, 3], 2, false>, false>()

assertEqual<Tuple.ToIndexByObjectKey<[{ name: 'a' }, { name: 'b' }], 'name'>, { a: { name: 'a' }, b: { name: 'b' } }>()
assertEqual<Tuple.ToIndexByObjectKey<[], 'name'>, {}>()

assertEqual<Tuple.PreviousItem<[], 1>, undefined>()
assertEqual<Tuple.PreviousItem<[1, 2, 3], 2>, 1>()
assertEqual<Tuple.PreviousItem<[1, 2, 3], 1>, undefined>()
assertEqual<Tuple.PreviousItem<[{x:1},{y:2}], {x:1}>, undefined>()
assertEqual<Tuple.PreviousItem<[{x:1},{y:2}], {y:2}>, {x:1}>()
assertEqual<Tuple.PreviousItem<[{x:1},{y:2;w:3}], {y:2}>, {x:1}>()

}
