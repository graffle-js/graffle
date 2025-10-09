import { Ts } from '@wollybeard/kit'
import { type ToParameters, type Tuple } from './prelude.js'

// dprint-ignore
type _ = Ts.Test.Cases<
  Ts.Test.exact<ToParameters<{ a:1 }>                                            , [{ a:1 }]>,
  Ts.Test.exact<ToParameters<{ a?:1 }>                                           , [{ a?:1 }]|[]>,
  Ts.Test.exact<ToParameters<{}>                                                 , []>,
  Ts.Test.exact<ToParameters<{ a:1; b?:2 }>                                      , [{ a:1; b?:2 }]>,
  Ts.Test.exact<ToParameters<{ a?:1; b?:2 }>                                     , [{ a?:1; b?:2 }]|[]>,
  Ts.Test.exact<Tuple.GetLastValue<[1, 2, 3]>                                    , 3>,
  Ts.Test.exact<Tuple.DropUntilIndex<[1, 2, 3], 0>                               , [1, 2, 3]>,
  Ts.Test.exact<Tuple.DropUntilIndex<[1, 2, 3], 2>                               , [3]>,
  Ts.Test.exact<Tuple.DropUntilIndex<[1, 2, 3], 3>                               , []>,
  Ts.Test.exact<Tuple.GetAtNextIndex<[1, 2, 3], 0>                               , 2>,
  Ts.Test.exact<Tuple.GetAtNextIndex<[1, 2, 3], 2>                               , undefined>,
  Ts.Test.exact<Tuple.GetNextIndexOr<[1, 2, 3], 0, false>                        , 2>,
  Ts.Test.exact<Tuple.GetNextIndexOr<[1, 2, 3], 2, false>                        , false>,
  Ts.Test.bid<Tuple.ToIndexByObjectKey<[{ name: 'a' }, { name: 'b' }], 'name'> , { a: { name: 'a' }, b: { name: 'b' } }>,
  Ts.Test.exact<Tuple.ToIndexByObjectKey<[], 'name'>                             , {}>,
  Ts.Test.exact<Tuple.PreviousItem<[], 1>                                        , undefined>,
  Ts.Test.exact<Tuple.PreviousItem<[1, 2, 3], 2>                                 , 1>,
  Ts.Test.exact<Tuple.PreviousItem<[1, 2, 3], 1>                                 , undefined>,
  Ts.Test.exact<Tuple.PreviousItem<[{x:1},{y:2}], {x:1}>                         , undefined>,
  Ts.Test.exact<Tuple.PreviousItem<[{x:1},{y:2}], {y:2}>                         , {x:1}>,
  Ts.Test.exact<Tuple.PreviousItem<[{x:1},{y:2;w:3}], {y:2}>                     , {x:1}>
>
