import { Ts } from '@wollybeard/kit'
import { type ToParameters } from './prelude.js'

// dprint-ignore
type _ = Ts.Test.Cases<
  Ts.Test.exact.is<ToParameters<{ a:1 }>                                            , [{ a:1 }]>,
  Ts.Test.exact.is<ToParameters<{ a?:1 }>                                           , [{ a?:1 }]|[]>,
  Ts.Test.exact.is<ToParameters<{}>                                                 , []>,
  Ts.Test.exact.is<ToParameters<{ a:1; b?:2 }>                                      , [{ a:1; b?:2 }]>,
  Ts.Test.exact.is<ToParameters<{ a?:1; b?:2 }>                                     , [{ a?:1; b?:2 }]|[]>
>
