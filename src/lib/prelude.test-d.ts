import { assertEqual } from './assert-equal.js'
import type { OmitKeysWithPrefix, ToParameters } from './prelude.js'

// dprint-ignore
{

assertEqual<OmitKeysWithPrefix<{ a: 1; b: 2 }, 'a'>         , { a: 1; b: 2 }>()
assertEqual<OmitKeysWithPrefix<{ foo_a: 1; b: 2 }, 'foo'>   , { b: 2 }>()

assertEqual<ToParameters<{ a:1 }>                           , [{ a:1 }]>()
assertEqual<ToParameters<{ a?:1 }>                          , [{ a?:1 }]|[]>()
assertEqual<ToParameters<{}>                                , []>()
assertEqual<ToParameters<{ a:1; b?:2 }>                     , [{ a:1; b?:2 }]>()
assertEqual<ToParameters<{ a?:1; b?:2 }>                    , [{ a?:1; b?:2 }]|[]>()

}
