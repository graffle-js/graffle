import type { ContextEmpty } from '#src/context/ContextEmpty.js'
import type { Add } from '#src/context/fragments/scalars/fragment.js'
import { Ts } from '@wollybeard/kit'
import type { Schema } from '../Schema/$.js'
import type { _SimplifyExcept, Simplify, SimplifyWithEmptyContext } from './Simplify.js'

type DateScalar = Schema.Scalar<'Date', Date, string>
type CEmpty = ContextEmpty
// type CExt = Extension.AddExtensionTypeHooks<CEmpty, {
// 	onRequestDocumentRootType: [],
// 	onRequestResult: []
// 	requestResultDataTypes: Text,
// }>
// type CExtAndScalar = AddScalar<CExt, DateScalar>

type _1 = Simplify<CEmpty, { x: Date | null }>
// @ts-expect-error
Ts.Assert.exact<_1, { x: Date | null }>()
// type _2 = Simplify<CExt                     , {x:Text|null}>
// Ts.Assert.exact<_2									            , {x:Text|null}>()

type CScalar = Add<ContextEmpty, DateScalar>
type _3 = Simplify<CScalar, { x: Date | null }>

// dprint-ignore
type _ = Ts.Assert.Cases<
  Ts.Assert.exact<_3									            , {x:Date|null}>,
  Ts.Assert.exact<SimplifyWithEmptyContext<{x:1|null}>									            , {x:1|null}>,
  Ts.Assert.exact<SimplifyWithEmptyContext<null | {x:1}>									          , null | {x:1}>,
  Ts.Assert.exact<SimplifyWithEmptyContext<null | {x?:1}>									          , null | {x?:1}>,
  Ts.Assert.exact<SimplifyWithEmptyContext<null | {x?:1|null}>									    , null | {x?:1|null}>,

  Ts.Assert.exact<_SimplifyExcept<Date, null | Date>								, null | Date>,
  Ts.Assert.exact<_SimplifyExcept<Date, {}>									        , {}>,
  Ts.Assert.exact<_SimplifyExcept<Date, { a: Date }>				        , { a: Date }>,
  Ts.Assert.exact<_SimplifyExcept<Date, { a: 1 }>						        , { a: 1 }>,
  Ts.Assert.exact<_SimplifyExcept<Date, { a: { b: Date } }>         , { a: { b: Date } }>,
  Ts.Assert.exact<_SimplifyExcept<Date, { a: { b: Date } }> 				, { a: { b: Date } }>,
  Ts.Assert.exact<_SimplifyExcept<Date, { a: null | { b: Date } }> 	, { a: null | { b: Date } }>
>
// type _4 = Simplify<CExtAndScalar            , {x:Date|Text|null}>
// Ts.Assert.exact<_4									            , {x:Date|Text|null}>()
