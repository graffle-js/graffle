import type { ContextEmpty } from '../../context/ContextEmpty.js'
import type { Add } from '../../context/fragments/scalars/fragment.js'
import { assertEqual } from '../../lib/assert-equal.js'
import type { Schema } from '../Schema/_namespace.js'
import type { _SimplifyExcept, Simplify, SimplifyWithEmptyContext } from './Simplify.js'

// dprint-ignore
{
type DateScalar = Schema.Scalar<'Date', Date, string>
type CEmpty = ContextEmpty
// type CExt = Extension.AddExtensionTypeHooks<CEmpty, {
// 	onRequestDocumentRootType: [],
// 	onRequestResult: []
// 	requestResultDataTypes: Text,
// }>
// type CExtAndScalar = AddScalar<CExt, DateScalar>
	
type _1 = Simplify<CEmpty                   , {x:Date|null}>
// @ts-expect-error
assertEqual<_1									            , {x:Date|null}>()
// type _2 = Simplify<CExt                     , {x:Text|null}>
// assertEqual<_2									            , {x:Text|null}>()

type CScalar = Add<ContextEmpty, DateScalar>
type _3 = Simplify<CScalar                  , {x:Date|null}>
assertEqual<_3									            , {x:Date|null}>()
// type _4 = Simplify<CExtAndScalar            , {x:Date|Text|null}>
// assertEqual<_4									            , {x:Date|Text|null}>()



assertEqual<SimplifyWithEmptyContext<{x:1|null}>									            , {x:1|null}>()
assertEqual<SimplifyWithEmptyContext<null | {x:1}>									          , null | {x:1}>()
assertEqual<SimplifyWithEmptyContext<null | {x?:1}>									          , null | {x?:1}>()
assertEqual<SimplifyWithEmptyContext<null | {x?:1|null}>									    , null | {x?:1|null}>()

assertEqual<_SimplifyExcept<Date, null | Date>								, null | Date>()
assertEqual<_SimplifyExcept<Date, {}>									        , {}>()
assertEqual<_SimplifyExcept<Date, { a: Date }>				        , { a: Date }>()
assertEqual<_SimplifyExcept<Date, { a: 1 }>						        , { a: 1 }>()
assertEqual<_SimplifyExcept<Date, { a: { b: Date } }>         , { a: { b: Date } }>()
assertEqual<_SimplifyExcept<Date, { a: { b: Date } }> 				, { a: { b: Date } }>()
assertEqual<_SimplifyExcept<Date, { a: null | { b: Date } }> 	, { a: null | { b: Date } }>()

}
