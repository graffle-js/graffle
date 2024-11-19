import { assertEqual } from '../lib/assert-equal.js'
import type { SimplifyDeep, SimplifyDeepExcept } from './Simplify.js'

// dprint-ignore
{

assertEqual<SimplifyDeep<{x:1|null}>									            , {x:1|null}>()
assertEqual<SimplifyDeep<null | {x:1}>									          , null | {x:1}>()
assertEqual<SimplifyDeep<null | {x?:1}>									          , null | {x?:1}>()
assertEqual<SimplifyDeep<null | {x?:1|null}>									    , null | {x?:1|null}>()

assertEqual<SimplifyDeepExcept<Date, null | Date>									, null | Date>()
assertEqual<SimplifyDeepExcept<Date, {}>									        , {}>()
assertEqual<SimplifyDeepExcept<Date, { a: Date }>					        , { a: Date }>()
assertEqual<SimplifyDeepExcept<Date, { a: 1 }>						        , { a: 1 }>()
assertEqual<SimplifyDeepExcept<Date, { a: { b: Date } }> 	        , { a: { b: Date } }>()
assertEqual<SimplifyDeepExcept<Date, { a: { b: Date } }> 					, { a: { b: Date } }>()
assertEqual<SimplifyDeepExcept<Date, { a: null | { b: Date } }> 	, { a: null | { b: Date } }>()

}
