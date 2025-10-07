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
Ts.Test.equal<_1, { x: Date | null }>()
// type _2 = Simplify<CExt                     , {x:Text|null}>
// Ts.Test.equal<_2									            , {x:Text|null}>()

type CScalar = Add<ContextEmpty, DateScalar>
type _3 = Simplify<CScalar, { x: Date | null }>

// dprint-ignore
type _ = Ts.Test.Cases<
  Ts.Test.equal<_3									            , {x:Date|null}>,
  Ts.Test.equal<SimplifyWithEmptyContext<{x:1|null}>									            , {x:1|null}>,
  Ts.Test.equal<SimplifyWithEmptyContext<null | {x:1}>									          , null | {x:1}>,
  Ts.Test.equal<SimplifyWithEmptyContext<null | {x?:1}>									          , null | {x?:1}>,
  Ts.Test.equal<SimplifyWithEmptyContext<null | {x?:1|null}>									    , null | {x?:1|null}>,

  Ts.Test.equal<_SimplifyExcept<Date, null | Date>								, null | Date>,
  Ts.Test.equal<_SimplifyExcept<Date, {}>									        , {}>,
  Ts.Test.equal<_SimplifyExcept<Date, { a: Date }>				        , { a: Date }>,
  Ts.Test.equal<_SimplifyExcept<Date, { a: 1 }>						        , { a: 1 }>,
  Ts.Test.equal<_SimplifyExcept<Date, { a: { b: Date } }>         , { a: { b: Date } }>,
  Ts.Test.equal<_SimplifyExcept<Date, { a: { b: Date } }> 				, { a: { b: Date } }>,
  Ts.Test.equal<_SimplifyExcept<Date, { a: null | { b: Date } }> 	, { a: null | { b: Date } }>
>
// type _4 = Simplify<CExtAndScalar            , {x:Date|Text|null}>
// Ts.Test.equal<_4									            , {x:Date|Text|null}>()
