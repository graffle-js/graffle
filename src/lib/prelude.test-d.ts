import { Ts } from '@wollybeard/kit'
import {
  type OmitKeysWithPrefix,
  type ToParameters,
  type Tuple,
} from './prelude.js'

// dprint-ignore
type _ = Ts.Test.Cases<
  Ts.Test.equal<OmitKeysWithPrefix<{ a: 1; b: 2 }, 'a'>                          , { a: 1; b: 2 }>,
  Ts.Test.equal<OmitKeysWithPrefix<{ foo_a: 1; b: 2 }, 'foo'>                    , { b: 2 }>,
  Ts.Test.equal<ToParameters<{ a:1 }>                                            , [{ a:1 }]>,
  Ts.Test.equal<ToParameters<{ a?:1 }>                                           , [{ a?:1 }]|[]>,
  Ts.Test.equal<ToParameters<{}>                                                 , []>,
  Ts.Test.equal<ToParameters<{ a:1; b?:2 }>                                      , [{ a:1; b?:2 }]>,
  Ts.Test.equal<ToParameters<{ a?:1; b?:2 }>                                     , [{ a?:1; b?:2 }]|[]>,
  Ts.Test.equal<Tuple.GetLastValue<[1, 2, 3]>                                    , 3>,
  Ts.Test.equal<Tuple.DropUntilIndex<[1, 2, 3], 0>                               , [1, 2, 3]>,
  Ts.Test.equal<Tuple.DropUntilIndex<[1, 2, 3], 2>                               , [3]>,
  Ts.Test.equal<Tuple.DropUntilIndex<[1, 2, 3], 3>                               , []>,
  Ts.Test.equal<Tuple.GetAtNextIndex<[1, 2, 3], 0>                               , 2>,
  Ts.Test.equal<Tuple.GetAtNextIndex<[1, 2, 3], 2>                               , undefined>,
  Ts.Test.equal<Tuple.GetNextIndexOr<[1, 2, 3], 0, false>                        , 2>,
  Ts.Test.equal<Tuple.GetNextIndexOr<[1, 2, 3], 2, false>                        , false>,
  Ts.Test.equalComputed<Tuple.ToIndexByObjectKey<[{ name: 'a' }, { name: 'b' }], 'name'> , { a: { name: 'a' }, b: { name: 'b' } }>,
  Ts.Test.equal<Tuple.ToIndexByObjectKey<[], 'name'>                             , {}>,
  Ts.Test.equal<Tuple.PreviousItem<[], 1>                                        , undefined>,
  Ts.Test.equal<Tuple.PreviousItem<[1, 2, 3], 2>                                 , 1>,
  Ts.Test.equal<Tuple.PreviousItem<[1, 2, 3], 1>                                 , undefined>,
  Ts.Test.equal<Tuple.PreviousItem<[{x:1},{y:2}], {x:1}>                         , undefined>,
  Ts.Test.equal<Tuple.PreviousItem<[{x:1},{y:2}], {y:2}>                         , {x:1}>,
  Ts.Test.equal<Tuple.PreviousItem<[{x:1},{y:2;w:3}], {y:2}>                     , {x:1}>
>
