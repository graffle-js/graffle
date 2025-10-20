import { Ts } from '@wollybeard/kit'
import { type ToParameters } from './prelude.js'

// dprint-ignore
type _ = Ts.Assert.Cases<
  Ts.Assert.exact<ToParameters<{ a:1 }>                                            , [{ a:1 }]>,
  Ts.Assert.exact<ToParameters<{ a?:1 }>                                           , [{ a?:1 }]|[]>,
  Ts.Assert.exact<ToParameters<{}>                                                 , []>,
  Ts.Assert.exact<ToParameters<{ a:1; b?:2 }>                                      , [{ a:1; b?:2 }]>,
  Ts.Assert.exact<ToParameters<{ a?:1; b?:2 }>                                     , [{ a?:1; b?:2 }]|[]>
>
